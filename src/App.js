import React from 'react';
import './App.css';
import CreateToDo from './components/CreateToDo'
import DisplayToDo from './components/DisplayToDo'
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h2>Redux ToDo App</h2>
    <CreateToDo/>
    <DisplayToDo/>
    </div>
    </Provider>
  );
}

export default App;
