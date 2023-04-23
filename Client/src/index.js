import React from 'react'
//import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux';

// ReactDOM.render(

// <Provider store={store}>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// </Provider>,
  
  
//   document.getElementById('root')
// )

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
