import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';

import { createStore } from 'redux';

import { Provider} from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));



const reducerFunction = (magicNumber=0, action) => {

  switch(action.type) {

    case "GENERATE_MAGIC_NUMBER":

      return magicNumber+ Math.floor((Math.random() * 10) + 1000);

    default:

      return magicNumber;



  }

}



const store = createStore(reducerFunction);



root.render(

  <Provider store={store}>

    <App />

  </Provider>

);
