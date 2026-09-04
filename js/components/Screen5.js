// Screen 5: Final screen - "Nuestra cita quedará grabada por siempre en nuestros corazones"

const Screen5 = () => {
  const { date, time, activities } = useDateTime();

  // Enviar datos a Google Sheets al montar el componente
  React.useEffect(() => {
    const sendData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbw-uYyq3Q0l505oNnPQ1DL-cehMB5GQ1hcNAsoIpbM0rLKdF4TowV4bAzAUIPIGv7_d/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fecha: date, hora: time, actividades: activities }),
        });
        const result = await response.json();
        console.log('Google Sheets response:', result);
      } catch (error) {
        console.error('Error sending data to Google Sheets:', error);
      }
    };
    sendData();
  }, [date, time, activities]);

  return (
    <div className="relative z-10 w-full max-w-md p-6">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-rose-200 text-center modal-pop relative overflow-hidden">

        {/* Icon that jumps in the middle */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-100 to-rose-100 flex items-center justify-center shadow-inner text-5xl animate-bounce">
            💖
          </div>
        </div>

        {/* Centered text */}
        <h1 className="text-3xl font-extrabold font-heading text-rose-600 mb-4 leading-snug">
          Nuestra cita quedará grabada por siempre en nuestros corazones
        </h1>

        {/* Restart button to go back to the beginning */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer pulse-glow"
          >
            Empezar de nuevo 💖
          </button>
        </div>

      </div>
    </div>
  );
};