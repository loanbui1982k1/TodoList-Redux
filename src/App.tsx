import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {getCookie} from 'typescript-cookie';
import ProtectedRoute from './routes/ProtectedRoute';
import './App.css';
import Home from './components/homepage/Home';
import store from './redux/store'
import {Provider} from 'react-redux'

function App() {
  const isAuth: boolean = getCookie('user') ? true : false
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route element= {<ProtectedRoute isAuth={isAuth}/>}>
              <Route path='/' element = {<Home/>}/>
            </Route>
            {/* <Route path='/login' element = {<Login/>}/> */}
          </Routes>
        </Router>
        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span> */}
        {/* </header> */}
          {/* <Login/> */}
      </div>
    </Provider>
  );
}

export default App;
