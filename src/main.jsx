import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import Login from './components/Login/Login';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path="/">

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