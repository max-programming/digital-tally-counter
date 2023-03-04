import { useState } from 'react';
import { Header, Counter } from './components';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    window.navigator.vibrate(50);
  };

  return (
    <div className='container'>
      <Header setCount={setCount} />
      <main>
        <Counter count={count} increment={increment} />
      </main>
    </div>
  );
};

export default App;
