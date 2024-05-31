import './App.css';
import Name from './PrintName'
import PicLoader from './PicLoader';
import ParentComponent from './LiftingTheStateUp';
import Parent from './PassingDataFromChildToParent/Parent';
import HigherOrderComponent from './HigherOrderComponent';
import HelloComponent from './Custom Hook/HelloComponent';

function App() {
  const firstName="Saket"
  return (
    <div className="App">
      <h1 className='text-center'>Hello</h1>
      {/*<Name firstName={firstName}/>
      <PicLoader/>
      <ParentComponent/>
  <Parent/> */}
      <HigherOrderComponent/>
      <HelloComponent/>
    </div>
  );
}

export default App;
