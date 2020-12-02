import TodoContextProvider from './context/TodoContext';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Routes />
      </TodoContextProvider>
    </div>
  );
}

export default App;
