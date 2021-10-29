import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import Vivo from "../../assets/vivo.png"
import "./verification.css";


function VerificationPage() {

    const [input, setInput] = useState({
        numberCep: "",
    });
    const { setCep } = useAuth();

    const handleLogin = () => {

        localStorage.setItem("cep", JSON.stringify(input));
        setCep(input);
    };

    return (
        <div className="backgroundValidation">
            <div className="containerForm">
                <img src={Vivo} />
                <h4 className="titleForm">Olá, seja bem vindo(a), por favor nos informe seu cep para que possamos mostrar as melhores ofertas na sua região.</h4><br />
                <input className="inputCep" type="number" placeholder="(Apenas números)" onChange={(e) => setInput({ numberCep: e.target.value })} /><br />
                <Link to="/offers">
                    <button className="buttonSendCep" onClick={handleLogin}>Enviar cep</button>
                </Link>
            </div>
        </div>
    )
}

export default VerificationPage;