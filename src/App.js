import logo from './logo.svg';
import './App.css';
import Name from './PrintName'
import PicLoader from './PicLoader';

function App() {
  const firstName="Saket"
  return (
    <div className="App">
      <h1 className='text-center'>Hello</h1>
      <Name firstName={firstName}/>
      <PicLoader/>
    </div>
  );
}

export default App;
