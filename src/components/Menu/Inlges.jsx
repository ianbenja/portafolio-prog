import React from "react";

// Importa la imagen descargada
import InglesImage from "../../assets/images/ingles.png";

export const InglesIcon = (props) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="img"
    viewBox="0 0 100 100"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <mask id="circle-mask">
        <circle cx="50" cy="50" r="28" fill="white" />
      </mask>
    </defs>
    {/* Utilizamos la máscara en la imagen */}
    <image
      href={InglesImage}
      width="100"
      height="100"
      mask="url(#circle-mask)"
    />
  </svg>
);
