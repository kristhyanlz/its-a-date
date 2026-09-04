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