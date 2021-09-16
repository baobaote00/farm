import './App.css'
import Home from './components/Home';
import GameContextProvider from './context/GameContext';

function App() {
  return (
    <GameContextProvider>
      <Home />
    </GameContextProvider>
  );
}

export default App;
