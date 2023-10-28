import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './Posts/App';
import YourComponent from './app/YourComponent';


ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store ={ store}>
  <App />
</Provider>
);
