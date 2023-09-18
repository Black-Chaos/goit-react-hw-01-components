import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App';
import './index.css';

const theme = {
  colors: {
    title: '#111',
    text: '#bdbdbd',
    defaultBgTable: '#f3f3f3',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>   
  </React.StrictMode>
);
