// Main App Controller Component
const App = () => {
  // Screen state: 1 = Date proposal, 2 = Confirmed, 3 = Date & time selection, 4 = Activities
  const [currentScreen, setCurrentScreen] = React.useState(1);

  const handleAcceptDate = () => {
    // Moves to Screen 2 when accepted
    setCurrentScreen(2);
  };

  const handleNextScreen = () => {
    // Moves to Screen 3 when "Ok.. ok" is clicked
    setCurrentScreen(3);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      <FloatingHearts />

      {currentScreen === 1 && (
        <Screen1Modal onAccept={handleAcceptDate} />
      )}

      {currentScreen === 2 && (
        <Screen2Confirmed onNext={handleNextScreen} />
      )}

      {currentScreen === 3 && (
        <div className="relative z-10 w-full max-w-md p-6">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-rose-200 text-center modal-pop">
            <h2 className="text-2xl font-bold text-rose-600 mb-4">
              [Pantalla 3 - Próximamente]
            </h2>
            <p className="text-gray-600 mb-6">
              ¡Excelente! La Pantalla 3 (Formulario de Fecha y Hora) se implementará en el siguiente paso.
            </p>
            <button
              onClick={() => setCurrentScreen(2)}
              className="px-6 py-2.5 bg-rose-500 text-white rounded-full font-bold shadow hover:bg-rose-600 transition"
            >
              Regresar a Pantalla 2
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
