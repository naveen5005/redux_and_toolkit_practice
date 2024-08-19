import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users />
      </Provider>
    </div>
  );
}

export default App;
