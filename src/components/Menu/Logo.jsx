import React from "react";
import logo from "./../../assets/images/logo.png";

const Logo = () => {
  return (
    // Aplicamos las clases dentro de `className`
    <div className="flex justify-center">
      <img height="36" viewBox="0 0 32 32" width="36" src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
