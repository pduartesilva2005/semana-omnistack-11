import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../services/api";

import logo from "../assets/logo.svg";
import heroesImg from "../assets/heroes.png";

import "../styles/pages/logon.scss";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Seu ID"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
