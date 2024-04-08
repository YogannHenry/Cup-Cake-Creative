
import { Outlet } from 'react-router-dom';
import { IsAdminProvider } from './Contexts/IsAdminContext';

function App() {

  return (
    <IsAdminProvider>
    <div className=''>
     <Outlet />
    </div>
    </IsAdminProvider>
  );
}

export default App;
