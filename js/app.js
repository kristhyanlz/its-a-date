// Main App Controller Component
const App = () => {
  // Screen state: 1 = Date proposal, 2 = Confirmed, 3 = Date & time selection, 4 = Activities, 5 = Final
  const [currentScreen, setCurrentScreen] = React.useState(1);

  const handleAcceptDate = () => {
    // Moves to Screen 2 when accepted
    setCurrentScreen(2);
  };

  const handleNextScreen = () => {
    // Moves to Screen 3 when "Ok.. ok" is clicked
    setCurrentScreen(3);
  };

  const handleDateSubmit = () => {
    // Moves to Screen 4 (Activities) when date is set
    setCurrentScreen(4);
  };

  const handleGoDateForm = () => {
    // Reinicia la experiencia completa
    setCurrentScreen(3);
  };

  const handleGoToFinal = () => {
    // Moves to Screen 5 (Final) when activity is selected
    setCurrentScreen(5);
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
        <Screen3DateForm onNext={handleDateSubmit} />
      )}

      {currentScreen === 4 && (
        <Screen4Activities onPrevious={handleGoDateForm} onNext={handleGoToFinal} />
      )}

      {currentScreen === 5 && (
        <Screen5 />
      )}
    </div>
  );
};

// Render Root Component
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  React.createElement(ContextProvider, null,
    React.createElement(App)
  )
);
