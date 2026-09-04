// Screen 3: Date & Time Selection Form

const Screen3DateForm = ({ onNext }) => {

  // Extraemos las funciones para actualizar el contexto global
  const { date, setDate, time, setTime } = window.useDateTime();

  //Valores del formulario
  const [dateVal, setDateVal] = React.useState('');
  const [timeVal, setTimeVal] = React.useState('');

  const handleSubmit = () => {
    if (dateVal && timeVal) {
      //Guardamos en el contexto
      setDate(dateVal);
      setTime(timeVal);
      //Pasamos a la siguiente pantalla
      onNext();
    }
  };

  return (
    <div className="relative z-10 w-full max-w-md p-6">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-rose-200 text-center modal-pop relative">
        
        {/* Icon / Sticker */}
        <div className="mb-6 mt-4 flex justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-rose-100 to-pink-100 flex items-center justify-center shadow-inner text-7xl animate-bounce ring-4 ring-rose-200">
            📅⏰
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold font-heading text-rose-600 mb-2 leading-snug">
          Elige tu fecha y hora 💕
        </h1>
        <p className="text-gray-500 font-medium mb-8 text-base">
          ¿Cuándo nos vemos para nuestra cita?
        </p>

        {/* Form */}
        <div className="flex flex-col gap-5 mb-8 text-left">
          
          {/* Date Picker */}
          <div className="bg-rose-50 rounded-2xl p-4 border-2 border-rose-100 shadow-sm">
            <label htmlFor="date" className="block text-rose-600 font-extrabold text-sm mb-2 tracking-wide uppercase">
              📅 Fecha
            </label>
            <input
              id="date"
              type="date"
              value={dateVal}
              onChange={(e) => setDateVal(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border-2 border-rose-200 text-gray-800 font-semibold focus:outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition-all text-lg cursor-pointer"
            />
          </div>

          {/* Time Picker */}
          <div className="bg-rose-50 rounded-2xl p-4 border-2 border-rose-100 shadow-sm">
            <label htmlFor="time" className="block text-rose-600 font-extrabold text-sm mb-2 tracking-wide uppercase">
              ⏰ Hora
            </label>
            <input
              id="time"
              type="time"
              value={timeVal}
              onChange={(e) => setTimeVal(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border-2 border-rose-200 text-gray-800 font-semibold focus:outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition-all text-lg cursor-pointer"
            />
          </div>

        </div>

        {/* Action Button */}
         <div className="flex justify-center">

          <button
            onClick={handleSubmit}
            disabled={!dateVal || !timeVal}
            className={`w-full sm:w-auto px-10 py-4 rounded-full shadow-lg transition-all duration-200 font-extrabold text-xl flex items-center justify-center gap-2 ${
              dateVal && timeVal
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white cursor-pointer pulse-glow active:scale-95'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>¡Agendado!</span>
            <span>💘</span>
          </button>

         </div>

        {(!dateVal || !timeVal) && (
          <p className="text-xs text-rose-400 mt-3 animate-pulse font-semibold">
            Completa la fecha y la hora primero ✨
          </p>
        )}

      </div>
    </div>
  );
};
