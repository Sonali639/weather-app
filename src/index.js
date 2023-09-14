import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Theme from './Components/Theme'
import store from './Redux/store'
import { Provider } from 'react-redux'
import { ColorModeScript } from "@chakra-ui/react";

console.log(Theme.config.initialColorMode)
const root = ReactDOM.createRoot(document.getElementById('root'));
const isDarkMode = false;
root.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />

      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider >
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
