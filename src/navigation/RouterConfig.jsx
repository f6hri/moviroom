import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME, LOGIN, SIGNUP } from "./CONSTANTS";
import Main from "../components/Main";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const RouterConfig = () => {
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGNUP} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Main>
  );
};

export default RouterConfig;
