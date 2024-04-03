import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
    

      <div className="h-screen w-screen flex items-center justify-center flex-col bg-slate-50">
        <div className=" px-32 py-8 flex  justify-center rounded border-8 border-red-500 shadow-lg text-7xl text-red-600">
          <p className="" >404</p>
        </div>

      <div className="pb-40 pt-5 text-red-700">
      Nous sommes désolé, Une erreur s'est produite.

    </div>
    <NavLink to='/' className=" border-2 p-2">
      Ramènes tes fesses à la maison
      </NavLink>
      </div>
    </>
  );
}

export default Error;