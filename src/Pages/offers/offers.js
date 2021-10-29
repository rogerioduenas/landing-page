import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import axios from "axios";
import tntsports from "../../assets/tntsports.png";
import funkids from "../../assets/funkids.png";
import bancahjornais from "../../assets/bancahjornais.png";
import clubederevistas from "../../assets/clubederevistas.png";
import bandnews from "../../assets/bandnews.png";
import assistenciatecnica from "../../assets/assistenciatecnica.png";
import "./offers.css"

function Offers() {

    const { cep, setCep } = useAuth();
    const numberCep = cep.numberCep;

    useEffect(() => {
        axios.get(`https://viacep.com.br/ws/${numberCep}/json/`)
            .then((res) => {
                setCep(res.data)
            })
    }, []);

    return (
        <div className="backgroundOffers">
            <div className="address">
                <p name="cep" type="text" >Cep: {cep.cep}</p>
                <p name="cep" type="text" >Rua: {cep.logradouro}</p>
                <p name="cep" type="text" >Bairro: {cep.bairro}</p>
                <p name="cep" type="text" >Cidade: {cep.localidade}</p>
                <p name="cep" type="text" >Estado: {cep.uf}</p>
            </div>
            <div className="containerCards">
                <div className="card">
                    <h1 className="titleCard">200 Mega</h1>
                    <h4 className="subTitle1">WI-FI Grátis</h4>
                    <p className="price">R$99,99/mês</p>
                    <button className="buy">Assine já</button>
                    <div className="details">
                        <h4 className="subTitle2">Internet Fibra 200 mega</h4>
                        <p className="description1">com wi-fi grátis e serviçoes digitais</p>
                        <img className="icons" src={tntsports} />
                        <img className="icons" src={funkids} />
                        <img className="icons" src={bancahjornais} />
                        <img className="icons" src={clubederevistas} />
                        <img className="icons" src={bandnews} />
                        <h4 className="subTitle3">Download até 200 Mbps</h4>
                        <p className="description2">Upload até 100 Mbps</p>
                        <h4 className="subTitle4">Assistência</h4>
                        <p className="description3">Vivo Home Assist</p>
                        <img className="icons" src={assistenciatecnica} />
                    </div>
                </div>
                <div className="card">
                    <h1 className="titleCard">300 Mega</h1>
                    <h4 className="subTitle1">WI-FI Grátis</h4>
                    <p className="price">R$119,99/mês</p>
                    <button className="buy">Assine já</button>
                    <div className="detalhes">
                        <h4 className="subTitle2">Internet Fibra 300 mega</h4>
                        <p className="description1">com wi-fi grátis e serviçoes digitais</p>
                        <img className="icons" src={tntsports} />
                        <img className="icons" src={funkids} />
                        <img className="icons" src={bancahjornais} />
                        <img className="icons" src={clubederevistas} />
                        <img className="icons" src={bandnews} />
                        <h4 className="subTitle3">Download até 300 Mbps</h4>
                        <p className="description2">Upload até 150 Mbps</p>
                        <h4 className="subTitle4">Assistência</h4>
                        <p className="description3">Vivo Home Assist</p>
                        <img className="icons" src={assistenciatecnica} />
                    </div>
                </div>
                <div className="card">
                    <h1 className="titleCard">600 Mega</h1>
                    <h4 className="subTitle1">WI-FI Grátis</h4>
                    <p className="price">R$299,99/mês</p>
                    <button className="buy">Assine já</button>
                    <div className="detalhes">
                        <h4 className="subTitle2">Internet Fibra 600 mega</h4>
                        <p className="description1">com wi-fi grátis e serviçoes digitais</p>
                        <img className="icons" src={tntsports} />
                        <img className="icons" src={funkids} />
                        <img className="icons" src={bancahjornais} />
                        <img className="icons" src={clubederevistas} />
                        <img className="icons" src={bandnews} />
                        <h4 className="subTitle3">Download até 600 Mbps</h4>
                        <p className="description2">Upload até 300 Mbps</p>
                        <h4 className="subTitle4">Assistência</h4>
                        <p className="description3">Vivo Home Assist</p>
                        <img className="icons" src={assistenciatecnica} />
                    </div>
                </div>
            </div>
                <Link to={"/"}>
                    <button className="buttonReturnHome">Ops, errei meu cep!</button>
                </Link>
        </div>
    )
}

export default Offers;