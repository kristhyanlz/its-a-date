// Background Floating Hearts Component
const FloatingHearts = () => {
  const hearts = [
    { id: 1, left: '10%', top: '15%', size: '24px', delay: '0s' },
    { id: 2, left: '85%', top: '20%', size: '32px', delay: '1s' },
    { id: 3, left: '20%', top: '75%', size: '28px', delay: '2s' },
    { id: 4, left: '75%', top: '80%', size: '36px', delay: '0.5s' },
    { id: 5, left: '50%', top: '10%', size: '20px', delay: '1.5s' },
    { id: 6, left: '90%', top: '50%', size: '30px', delay: '2.5s' },
    { id: 7, left: '5%' , top: '45%', size: '26px', delay: '3s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="bg-heart text-rose-400 select-none"
          style={{
            left: h.left,
            top: h.top,
            fontSize: h.size,
            animationDelay: h.delay,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};

// Screen 1: Date Proposal Modal Component
const Screen1Modal = ({ onAccept }) => {
  const [showHint, setShowHint] = React.useState(false);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const btnRef = React.useRef(null);
  const containerRef = React.useRef(null);
  // useRef para guardar las coordenadas originales sin provocar re-renders
  const oriBtnRectRef = React.useRef(null);

  // Guardar posición inicial al montar el componente
  React.useEffect(() => {
    const updateInitialRect = () => {
      if (btnRef.current) {
        // Medir la posición sin ninguna transformación aplicada
        const currentTransform = btnRef.current.style.transform;
        btnRef.current.style.transform = 'none';
        oriBtnRectRef.current = btnRef.current.getBoundingClientRect();
        btnRef.current.style.transform = currentTransform;
      }
    };

    updateInitialRect();

    //Para recalcular la posición inicial del botón si la pantalla cambia de tamaño u orientación
    window.addEventListener('resize', updateInitialRect);
    //Es la función de limpieza (cleanup function) de React inside del useEffect.
    return () => window.removeEventListener('resize', updateInitialRect);
  }, []);

  // Move button away from mouse direction
  /*
  const escapeFromMouse = (e) => {
    const btn = btnRef.current;
    if (!btn)
      return;

    //Obtener las coordenadas de cada uno de los lados del botón
    const rect = btn.getBoundingClientRect();
    console.log(`app.js - escapeFromMouse() - btn.getBoundingClientRect(): ${JSON.stringify( rect )}`);

    //Si es la primera vez que el mouse se acerca al botón
    if(!showHint){
      setOriBtnRect( structuredClone(rect) )
    }

    //Calcular la posición del mouse
    const mx = e.clientX;
    const my = e.clientY;

    // Verificar si el mouse está dentro de los límites del botón ORIGINAL
    const isInsideOriginalBox =
      mx >= oriBtnRect.left &&
      mx <= oriBtnRect.right &&
      my >= oriBtnRect.top &&
      my <= oriBtnRect.bottom;
    console.log(`app.js - escapeFromMouse() - isInsideOriginalBox: ${isInsideOriginalBox}`);

    // Si el cursor no está en la caja original ni sobre el elemento desplazado
    if (!isInsideOriginalBox && e.target !== btn)
      return;

    //Calcular el centro del botón
    const cx = oriBtnRect.left + oriBtnRect.width / 2;
    const cy = oriBtnRect.top + oriBtnRect.height / 2;
    console.log(`app.js - escapeFromMouse() - (cx, cy): (${cx}, ${cy})`);

    // Vector from button center to mouse
    const dx = mx - cx;
    const dy = my - cy;

    // Move opposite direction (escape)
    const distance = 140;
    let nx = dx === 0 ? 0 : Math.sign(dx) * -distance;
    let ny = dy === 0 ? 0 : Math.sign(dy) * -distance;

    // Si el mouse está muy centrado, añadir una pequeña variación aleatoria
    if (Math.abs(dx) < 20) nx += (Math.random() - 0.5) * 60;
    if (Math.abs(dy) < 20) ny += (Math.random() - 0.5) * 60;

    // Update offset relative to original position using translate (keeps layout space, avoids disappearance)
    setOffset({ x: nx, y: ny });
    setShowHint(true);
  };*/

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

// Main App Controller Component
const App = () => {
  // Screen state: 1 = Date proposal, 2 = Confirmed, 3 = Date & time selection, 4 = Activities
  const [currentScreen, setCurrentScreen] = React.useState(1);

  const handleAcceptDate = () => {
    // Moves to Screen 2 when accepted
    setCurrentScreen(2);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      <FloatingHearts />

      {currentScreen === 1 && (
        <Screen1Modal onAccept={handleAcceptDate} />
      )}

      {currentScreen === 2 && (
        <div className="relative z-10 w-full max-w-md p-6">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-rose-200 text-center modal-pop">
            <h2 className="text-2xl font-bold text-rose-600 mb-4">
              [Pantalla 2 - Próximamente]
            </h2>
            <p className="text-gray-600 mb-6">
              ¡Dijiste que sí! La Pantalla 2 se implementará en el siguiente paso.
            </p>
            <button
              onClick={() => setCurrentScreen(1)}
              className="px-6 py-2.5 bg-rose-500 text-white rounded-full font-bold shadow hover:bg-rose-600 transition"
            >
              Reiniciar Pantalla 1
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Render Root Component
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
