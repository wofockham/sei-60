import logo from './logo.svg';
import './App.css';

import Hello from './Hello';
import HelloUser from './HelloUser';

function App() {
  return (
    <div className="App">
      <Hello />
      <HelloUser name="Groucho" />
      <HelloUser name="Harpo" />
      <HelloUser name="Chico" />
      <HelloUser />
    </div>
  );
}

export default App;
