import  { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SbButton from './button';
import ToggleButton from './ToogleButton';

function ToastAdmin() {
  const notify = () => 
  toast("hello mich mich", {
    position: "bottom-right",
    className: 'foo-bar',
    theme:"dark"
  });

  const [toggleValue, setToggleValue] = useState(false);

  return (
    <div>
      <ToggleButton value={toggleValue} setValue={setToggleValue} onClick={notify} />
      <ToastContainer />
    </div>
  );
}

export default ToastAdmin;
