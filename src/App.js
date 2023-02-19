import './App.css';
import { useEffect, useMemo, useState } from 'react';
import { A } from './A.js';
import { D } from './D.js';
import { longCalculating } from './utils.js';

function App() {

  const [state, setState] = useState(0)
  // const [state2, setState2] = useState(0)

  // const count = useMemo(() => longCalculating(state), [state]);

  useEffect(()=>{
    console.log('useEffect with [state]');
    setState(1);
    // setState2(1);
    return ()=>{
      console.log('return useEffect with [state]');
    };
  }, [state])

  

  console.log('App');
  return (
    <div className="App">
      <header>Hello</header>
      {/* {`count: ${count}\n`} */}
      {/* <A state={count}/> */}
      <D hi={state} />
    </div>
  );
}

export default App;
