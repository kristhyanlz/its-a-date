// Screen 2: Confirmation Screen ("Sabía que ibas a decir que sí")

const Screen2Confirmed = ({ onNext }) => {
  return (
    <div className="relative z-10 w-full max-w-md p-6">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl pt-12 px-8 pb-8 shadow-2xl border-4 border-rose-200 text-center modal-pop relative ">
        {/* Animated Cute Decorative Elements */}
        <div className="mb-6 mt-4 flex justify-center relative">
          {/* Back Glow Effect */}
          <div className="absolute inset-0 bg-pink-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
          
          {/* Cute Sticker/Emoji */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-pink-100 to-rose-100 flex items-center justify-center shadow-inner text-7xl animate-bounce">
            🥳✨
          </div>
        </div>

        {/* Text/Message */}
        <h1 className="text-3xl font-extrabold font-heading text-rose-600 mb-4 leading-snug">
          ¡Sabía que ibas a decir que sí! ❤️
        </h1>

        <p className="text-gray-600 font-semibold mb-8 text-lg">
          No tenías otra opción de todos modos... ¡Jeje! 🥰🌹
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={onNext}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-extrabold text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center gap-2 pulse-glow"
          >
            <span>Ok.. ok</span>
            <span>🤭</span>
          </button>
        </div>

      </div>
    </div>
  );
};
