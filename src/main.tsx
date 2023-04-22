import React from 'react';
import ReactDOM from 'react-dom/client';
import TicTacToeGameApp from './TicTacToeGameApp.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TicTacToeGameApp />
    </BrowserRouter>
  </React.StrictMode>
);
