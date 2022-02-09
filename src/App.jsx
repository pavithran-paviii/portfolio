import logo from './logo.svg';
import './App.css';
import { Jumpingtext } from './components/jumpingtext';
import { Whole } from './components/wholebody';

function App() {
  return (
    <div className="App">
      <Whole>
      <div>
      <Jumpingtext>H</Jumpingtext>
      <Jumpingtext>E</Jumpingtext>
      <Jumpingtext>L</Jumpingtext>
      <Jumpingtext>L</Jumpingtext>
      <Jumpingtext>O</Jumpingtext>
      </div>
      </Whole>
    </div>
  );
}

export default App;
