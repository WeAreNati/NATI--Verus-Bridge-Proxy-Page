import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ToastProvider from 'components/Toast/ToastProvider';

// import Tabs from "./components/TabComponent/Tabs";
import ARRR from './pages/ARRR';
import Claim from './pages/Claim';
import Web3ConnectionProvider from './providers/Web3ConnectionProvider';
import WrappedWeb3ReactProvider from './providers/WrappedWeb3ReactProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3165d4'
    }
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <ARRR />,
    errorElement: <div>Not a Valid path</div>
  },
  {
    path: "/claim",
    element: <Claim />
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WrappedWeb3ReactProvider>
        <Web3ConnectionProvider>
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
        </Web3ConnectionProvider>
      </WrappedWeb3ReactProvider>
    </ThemeProvider>
  );
}

export default App;
