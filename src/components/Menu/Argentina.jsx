import React from "react";

// Importa la imagen descargada
import ArgentinaImage from "../../assets/images/argentina.png";

export const ArgentinaIcon = (props) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="img"
    viewBox="0 0 10 10"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Resto de tu SVG */}
    {/* Agrega la imagen utilizando la etiqueta <image> */}
    <image href={ArgentinaImage} width="10" height="10" />
  </svg>
);
