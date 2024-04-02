import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import Login from './components/Login/Login';
import Error from './pages/Error/Error';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Login />} />
      <Route path="/" errorElement={<Error />}>

      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
       <RouterProvider router={router} />
);