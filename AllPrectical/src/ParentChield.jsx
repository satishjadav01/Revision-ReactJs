const User = ({ name, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <User name="Satish" email="satish@example.com" />
    </div>
  );
};

export default App;
