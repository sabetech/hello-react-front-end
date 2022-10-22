import './App.css';
import { Provider } from 'react-redux';
import Greeting from './components/Greetings';
import store from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  </div>
  );
}

export default App;
