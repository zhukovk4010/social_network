import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { addPost } from './Redux/state';



export let rerenderApp = (state, addPost) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>
  );
}

reportWebVitals();
