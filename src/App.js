import './App.css';
import CounterProp from './components/CounterProp/CounterProp';

function App() {
  return (
    <div className='App'>
      <h2>App</h2>
      <CounterProp
        initVal={3}
        specialVal={'special'}
        selectVal='orange'
        favNumbers={[7, 12, 75]}
        arrayOfNumbersOrStrings={[7, 12, 75, '1']}
      />
    </div>
  );
}

export default App;
