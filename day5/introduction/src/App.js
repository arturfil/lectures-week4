import Heros from './components/Heros'
import Dogs from './components/Dogs'
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <NavBar/>
      <h2 style={{margin: '20px'}}>Heros React App Demo</h2>
      <Heros/>
      <Dogs />
    </div>
  )
}

export default App;
