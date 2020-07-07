import React from "react";
import { Link } from "react-router-dom";
import "./error404.scss";

export default function Error404() {
  return (
    <div className="error404">
      <h1>Error404</h1>
      <h2>Pagina no encontrada</h2>
      <Link to="/">
        <h3>Volver al Inicio</h3>
      </Link>
    </div>
  );
}
