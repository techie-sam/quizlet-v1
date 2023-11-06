import Register from "./routes/Register/Register";
import Test from "./routes/TakeTest/Page";
import { useAuthContext } from "./hooks/useAuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login/Login";

const AppRoutes = () => {
  const { state } = useAuthContext();
  const date= Date.now()
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route
        path="/login"
        element={!state.user ? <Login /> : <Navigate to={`/test/:${date}`} />}
      />
      <Route
        path="/test/:test"
        element={state.user ? <Test /> : <Navigate to="/login" />}
      />

    </Routes>
  );
};

export default AppRoutes;
