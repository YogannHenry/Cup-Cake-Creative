import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [errorMessages, setErrorMessages] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (name.trim() === '') {
      setErrorMessages('Ecris ton prénom gros suceur de planctons');
      setUserName('');
      return;
    } else {
      setErrorMessages('');
    }
    setUserName(name);
    navigate("/orderPage", { state: { userName: name }});

    setName('');
  }

  return (
    <div className="h-screen w-full flex items-center">
      <div className="h-auto w-1/3 mx-auto text-center p-6 gap-5 flex flex-col">
        <h1>Bienvenue chez nous</h1>
        <h3>Connectez-vous</h3>
        <form 
        onSubmit={handleSubmit}
        className='h-28 flex flex-col justify-between'>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="grow"
              placeholder="Entrez votre prénom"
            />
          </label>
          <button type="submit" className="btn bg-teal-500 w-full">Accéder à votre espace</button>
        </form>

        {userName && (
          <h2>Bonjour {userName}</h2>
        )}
        <h3 className="text-xl color-red-600">{errorMessages}</h3>
      </div>
    </div>
  );
}

export default Login;
