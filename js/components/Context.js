// Context for Date, Time and Activities (global for Babel Standalone compatibility)

const DateTimeContext = React.createContext();

window.useDateTime = () => {
  const context = React.useContext(DateTimeContext);
  if (!context) {
    throw new Error('useDateTime must be used within a DateTimeContext.Provider');
  }
  return context;
};

window.ContextProvider = ({ children }) => {
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [activities, setActivities] = React.useState([]);

  return React.createElement(DateTimeContext.Provider, { value: { date, setDate, time, setTime, activities, setActivities } }, children);
};