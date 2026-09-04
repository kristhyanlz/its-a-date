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
