// Screen 1: Date Proposal Modal Component

const Screen1Modal = ({ onAccept }) => {
  const [showHint, setShowHint] = React.useState(false);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const btnRef = React.useRef(null);
  const containerRef = React.useRef(null);
  // useRef para guardar las coordenadas originales sin provocar re-renders
  const oriBtnRectRef = React.useRef(null);

  const showHintRef = React.useRef(false);

  //Funcion para actualizar showHint
  const updateShowHint = (val) => {
    showHintRef.current = val;
    setShowHint(val);
  }
  

  // Escuchar el mouse globalmente para saber cuándo entra a la caja original y cuándo se aleja
  const escapeFromMouse = (e) => {
      console.log("app.js - escapeFromMouse() - Start")

      if (!showHintRef.current) {
        // Medir la posición sin ninguna transformación aplicada
        console.log(`app.js - escapeFromMouse() - showHint: ${showHint}`)
        console.log("app.js - escapeFromMouse() - update oriBtnRectRef")
        const currentTransform = btnRef.current.style.transform;
        btnRef.current.style.transform = 'none';
        const rect = btnRef.current.getBoundingClientRect();

        oriBtnRectRef.current = {
          left: rect.left,
          right: rect.right,
          top: rect.top,
          bottom: rect.bottom,
          width: rect.width,
          height: rect.height,
        };
        btnRef.current.style.transform = currentTransform;
      }

      //Validar que tenemos guardado el rect original
      if (!oriBtnRectRef.current) return;

      //Calcular la posición del mouse
      const mx = e.clientX;
      const my = e.clientY;
      const oriRect = oriBtnRectRef.current;
      console.log(`app.js - escapeFromMouse() - (mx, my): (${mx}, ${my})`);
      console.log(`app.js - escapeFromMouse() - oriRect: ${JSON.stringify(oriRect)}`);

      // Verificar si el mouse está dentro de los límites del botón ORIGINAL
      const margin = 25;
      const left = oriRect.left - margin;
      const right = oriRect.right + margin;
      const top = oriRect.top - margin;
      const bottom = oriRect.bottom + margin;
      console.log(`app.js - escapeFromMouse() - Rect and Margin: ${JSON.stringify({
        left,
        right,
        top,
        bottom
      })}`);


      const isInLeft = mx >= left;
      const isInRight = mx <= right;
      const isInTop = my >= top;
      const isInBottom = my <= bottom;
      console.log(`app.js - escapeFromMouse() - Is in Rect and Margin: ${JSON.stringify({
        isInLeft,
        isInRight,
        isInTop,
        isInBottom
      })}`);

      const isNearOriginalBox =
        isInLeft &&
        isInRight &&
        isInTop &&
        isInBottom;
      console.log(`app.js - escapeFromMouse() - isNearOriginalBox: ${isNearOriginalBox}`);

      if (isNearOriginalBox) {
        // 1. SI EL MOUSE ENTRA A LA CAJA ORIGINAL -> HUIR
        const cx = oriRect.left + oriRect.width / 2;
        const cy = oriRect.top + oriRect.height / 2;

        const dx = mx - cx;
        const dy = my - cy;

        const distance = 140;
        let nx = dx === 0 ? -distance : Math.sign(dx) * -distance;
        let ny = dy === 0 ? -distance : Math.sign(dy) * -distance;

        // Variación si está justo en el centro
        if (Math.abs(dx) < 20) nx += (Math.random() - 0.5) * 60;
        if (Math.abs(dy) < 20) ny += (Math.random() - 0.5) * 60;

        setOffset({ x: nx, y: ny });
        updateShowHint(true);
      } else {
        // 2. SI EL MOUSE SE ALEJA DE LA CAJA ORIGINAL -> REGRESAR A (0,0)
        setOffset({ x: 0, y: 0 });
      }
      
    };

  React.useEffect(() => {
    //Escuchamos constantemente el movimiento del mouse, por eso showHint debe ser useState y useRef
    window.addEventListener('mousemove', escapeFromMouse);
    return () => window.removeEventListener('mousemove', escapeFromMouse);
  }, [])
  

  return (
    <div className="relative z-10 w-full max-w-md p-6" ref={containerRef}>
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-rose-200 text-center modal-pop relative overflow-hidden">

        <div className="mb-4 flex justify-center">
          <div className="w-28 h-28 rounded-full bg-rose-100 flex items-center justify-center shadow-inner text-6xl animate-bounce">
            🐱❤️
          </div>
        </div>

        <h1 className="text-3xl font-bold font-heading text-rose-600 mb-3 leading-snug">
          ¿Quieres tener una cita conmigo? ❤️
        </h1>

        <p className="text-gray-600 font-medium mb-8 text-lg">
          Prometo que será un momento inolvidable... ✨
        </p>

        {/* Buttons container: relative so translated button stays visible inside */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative min-h-[60px]">

          {/* YES Button */}
          <button
            onClick={onAccept}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-extrabold text-xl rounded-full shadow-lg transition-transform duration-200 ease-out active:scale-95 pulse-glow cursor-pointer z-10 flex items-center justify-center gap-2 shrink-0"
          >
            <span>¡Sí, me encantaría!</span>
            <span>💖</span>
          </button>

          {/* NO Button - Escapes gracefully in opposite direction of mouse */}
          <button
            ref={btnRef}
            onClick={(e) => {
              e.stopPropagation();
              escapeFromMouse(e);
            }}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
            className="px-6 py-3.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-lg rounded-full shadow transition-colors duration-150 cursor-pointer select-none shrink-0 z-20"
          >
            No 💔
          </button>
        </div>

        {showHint && (
          <p className="text-xs text-rose-400 mt-6 animate-pulse font-semibold">
            ¡Ríndete y acepta! 😉
          </p>
        )}

      </div>
    </div>
  );
};