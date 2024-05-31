import './App.css';
// Import other components as needed
// import Name from './PrintName';
// import PicLoader from './PicLoader';
// import ParentComponent from './LiftingTheStateUp';
// import Parent from './PassingDataFromChildToParent/Parent';
// import HigherOrderComponent from './HigherOrderComponent';
// import HelloComponent from './Custom Hook/HelloComponent';
import { Suspense, lazy } from 'react';

// Use React.lazy for LazyComponent
const LazyComponent = lazy(() => import('./Lazy Loading/LazyComponent'));

function App() {
  const firstName = "Saket";
  return (
    <div className="App">
      <h1 className='text-center'>Hello</h1>
      {/* Uncomment other components as needed
      <Name firstName={firstName}/>
      <PicLoader/>
      <ParentComponent/>
      <Parent/>
      <HigherOrderComponent/>
      <HelloComponent/> */}
      <h1>Hello, React Code Splitting</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
