import { Navigate, Outlet } from "react-router-dom";

function RequireAuth() {
  const user = sessionStorage.getItem("token");
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}

export default RequireAuth;
