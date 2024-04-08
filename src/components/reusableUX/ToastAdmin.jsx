import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToggleButton from './ToogleButton';
import { useIsAdmin } from '../../Contexts/IsAdminContext';

function ToastAdmin() {
  const { isAdmin, toggleIsAdmin } = useIsAdmin(); // Utilisation du hook pour obtenir l'état et la fonction du contexte

  const notify = () => {
    toast(isAdmin ? "youpi t'es connecté" : "michel tu fais chier reviens", {
      position: "bottom-right",
      className: 'foo-bar',
      theme: "dark"
    });
  };

  return (
    <div>
      <ToggleButton value={isAdmin} setValue={toggleIsAdmin} onClick={notify} />
      <ToastContainer />
    </div>
  );
}

export default ToastAdmin;
