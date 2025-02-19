import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes, { renderRoutes } from './routes';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_APP_BASE_NAME}>
      <ToastContainer position="bottom-right" autoClose={3000} />
      {renderRoutes(routes)}
    </BrowserRouter>
  );
};

export default App;
