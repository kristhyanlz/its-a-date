// Screen 4: Activities Selection (Final step)

const Screen4Activities = ({ onRestart }) => {
  // Define activities with icons and descriptions
  const activities = [
    { icon: '🎬', label: 'Película', desc: 'Popcorn, cero spoiler y la mejor compañía 🍿' },
    { icon: '🍗', label: 'Pollo', desc: 'Solo tú y yo y bocados crujientes 🍗' },
    { icon: '🍣', label: 'Makis o Sushi', desc: 'Delicias japonesas 🍣' },
    { icon: '🛏️', label: 'Noche de pasión', desc: 'Luz tenue, privacidad total y cero distracciones 🫣' },
    { icon: '🍕', label: 'Pizza', desc: 'Muchas rebanadas para disfrutar entre los dos 🍕' },
    { icon: '🪩', label: 'Discoteca', desc: 'Un par de tragos y bailar bien pegaditos 🍸' },
  ];

  return (
    <div className="relative z-10 w-full max-w-2xl p-6">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-rose-200 text-center modal-pop relative overflow-hidden">

        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-100 to-rose-100 flex items-center justify-center shadow-inner text-5xl animate-bounce">
              🎉✨
            </div>
          </div>
          <h1 className="text-4xl font-extrabold font-heading text-rose-600 mb-2 leading-snug">
            ¡Elige tu actividad perfecta!
          </h1>
          <p className="text-gray-600 font-semibold text-lg">
            Presiona una de las opciones que más te guste... ¡Déjate llevar! 💖
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10">
          {activities.map((act, idx) => (
            <button
              key={idx}
              className="group relative p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow hover:shadow-lg cursor-pointer flex flex-col items-center justify-center"
            >
              <span className="text-5xl mb-2 animate-pulse-glow">
                {act.icon}
              </span>
              <span className="font-extrabold text-rose-600 text-lg mb-1">
                {act.label}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {act.desc}
              </span>
            </button>
          ))}
        </div>

        {/* Footer button */}
        <div className="flex justify-center">
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer pulse-glow"
          >
            Reiniciar cita 💖
          </button>
        </div>

      </div>
    </div>
  );
};
