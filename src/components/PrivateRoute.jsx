//import { Outlet, Navigate } from "react-router-dom";

//Route privée qui renvoie à une page si pas authentified et donc pas accès à la page privée.
const PrivateRoute = () => {
  return (
    <>
      {/* isAuth ? <Outlet /> : <Navigate to="/" />*/}
      <p>Route privée</p>
    </>
  );
};
export default PrivateRoute;
