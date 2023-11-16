import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import ErrorBoundary from './ErrorBoundry/ErrorBoundry';
import LoadingFallback from './Components/LoadingFallback';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ErrorBoundary fallback={<LoadingFallback/>}>
    <AuthContextProvider>
       <App  />
       </AuthContextProvider>
     </ErrorBoundary>
    </BrowserRouter>
  
);

reportWebVitals();
