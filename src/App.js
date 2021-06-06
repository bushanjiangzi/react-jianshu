import { Provider } from 'react-redux'
import store from './store'
import Header from './components/header';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <h1>Helle React</h1>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
