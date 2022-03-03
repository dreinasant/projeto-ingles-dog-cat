import React, { Component } from "react";
import './App.css';
import Onda from './assets/onda.png';
import Dogcat from './assets/dog-cat.jpg';
import Logo from './assets/logo.png';
import Petisco from './assets/petisco.png';
import Pata from './assets/pata.jpg';
import Pata2 from './assets/pata-2.jpg';
import Patacat from './assets/pata-cat.jpg';
import Patacat2 from './assets/pata-cat2.jpg';
import Logoo from './assets/logo.png';


export default class PetLove extends Component {
  state = {
    dogs: [
      { name: "Tulio", breed: "Welsh Corgi", age: "4 years" },
      { name: "Pipoca", breed: "husky", age: "7 years" },
      { name: "Mile", breed: "Golden", age: "8 months" }
    ],
    list: [],
    cats: [
      { name: "Oliver", breed: "angorá", age: "6 years" },
      { name: "Lola", breed: "persa", age: "4 years" },
      { name: "Garfield", breed: "malandro", age: "7 years" }
    ],
    list2: []
  };

  dogList = () => {
    this.setState({
      list: this.state.dogs.map((item) => (
        <div>
          <h2>
            Name: {item.name}, breed: {item.breed}, age: {item.age}{" "}
          </h2>
        </div>
      ))
    });
  };

  catList = () => {
    this.setState({
      list2: this.state.cats.map((item) => (
        <div>
          <h2>Name: {item.name}, breed: {item.breed}, age: {item.age} </h2>
        </div>
      ))
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <img class="box-logo" src={Logo} alt="logo"/>
          <ul className="box-list">
            <li>Quero adotar</li>
            <li>Quero ajudar</li>
            <li>Parcerias</li>
            <li>Cachorros</li>
            <li>Gatos</li>
            <li>Contato</li>
          </ul>
          <div className="intro">
          <img className="icon-entrar" src="https://cdn-icons.flaticon.com/png/512/4519/premium/4519678.png?token=exp=1646256070~hmac=a5c0292d17610100334e62320c669513" alt="icon-entar"/>
          <button className="box-button1">Entrar</button>
          <button className="box-button2">Cadastre-se</button>
          </div>
          </div>
          <img className="img-intro" src="https://img.freepik.com/fotos-gratis/cachorros-e-gatos_87557-9599.jpg?w=1380"
            alt="img-dogs-cats"/>
            <div className="contain">
            <h1 className="box-h1">Um pet rico de verdade é aquele que tem amor do seu dono e um ambiente rico!</h1>
            </div>
            <div className="box">
            <h2 className="intro-h2">Conheça os animais</h2>
            <button className="botao main" onClick={this.dogList}>DOG'S CONFIRA CLICANDO AQUI</button>
            <p>{this.state.list}</p>
            <img className="dog1" src="https://img.freepik.com/fotos-gratis/corgi-na-casa-moderna-ute-corgi-dog-esta-em-um-sofa-bege-em-casa-e-olha-para-a-camera_569122-513.jpg?w=900" alt="cachorro"/>
            <button className="button1">Saiba mais</button>
            <img className="dog2" src="https://img.freepik.com/fotos-gratis/retrato-de-husky-siberiano_155003-1652.jpg?w=900" alt="cachorro"/>
            <button className="button2">Saiba mais</button>
            <img className="dog3" src="https://img.freepik.com/fotos-gratis/imagem-de-adoravel-cachorrinho-golden-retriever-branco-brilhante-em-um-cobertor-azul_501731-1777.jpg?w=900" alt="cachora"/>
            <button className="button3">Saiba mais</button>
            <button className="boton main2" onClick={this.catList}>CAT'S CONFIRA CLICANDO AQUI</button>
            <p>{this.state.list2}</p>
            <img className="cat1" src="https://img.freepik.com/fotos-gratis/adoravel-gatinho-domestico-com-espaco-de-copia_23-2149167096.jpg?t=st=1646230151~exp=1646230751~hmac=911ff87e8734ce34f190e876f1c2a216b442d1f45c2d7537c20be0b7b26c07c0&w=900" alt="cat"/>
            <button className="boton1">Saiba mais</button>
            <img className="cat2" src="https://img.freepik.com/fotos-gratis/uma-gata-fofa-listrada-cinza-malhado-femea-de-pelo-curto-deitada-sobre-um-fundo-cinza-bege_72572-2273.jpg?w=900" alt="cat"/>
            <button className="boton2">Saiba mais</button>
            <img className="cat2" src="https://img.freepik.com/fotos-gratis/gato-cinzento-deitado-e-olhando-para-cima_176474-6827.jpg?t=st=1646230152~exp=1646230752~hmac=5ae2be471ff73ce6ab3aba977ae76a1c4d007b64b2c3c0f87504f61c54aee589&w=900" alt="cat"/>
            <button className="boton3">Saiba mais</button>
            </div>
            <div className="box-footer">
              <img className="img-onda" src={Onda} alt="onda"/>
              <h2 className="box-h2">Adote</h2>
              <img className="box-pata-cat" src={Patacat} alt="pata-cat"/>
              <img className="box-pata-cat2" src={Patacat2} alt="pata-cat"/>
              <img className="contain-pata" src={Pata} alt="pata-dog"/>
              <img className="contain-pata2" src={Pata2} alt="pata-dog"/>
              <p className="box-p">Sabemos que a decisão de adotar um bichinho é um passo importante. Afinal, seu novo amigo é para vida toda e exigirá muita atenção, carinho e tempo.</p>
              <img className="img-dog-cat" src={Dogcat} alt="dog cat"/>
              <img className="contain-petisco" src={Petisco} alt="petisco"/> 
              <p className="intro-p">Nós prezamos pela adoção responsável e, para ajudar os novos tutores, fornecemos orientações e suporte antes e por no mínimo seis meses após a adoção.</p>
            </div>
            <div className="intro-final">
              <div className="footer-p">
              <h2>ADOTE</h2>
              <p>Adote com resposabilidade</p>
              <p>Pesquisar animais</p>
              </div>
              <div>
                <h2>COLABORE</h2>
                <p className="intro-colabore1" >Doe qualquer valor</p>
                <p className="intro-colabore2" >Faça parte você também</p>
                <p>Compre nas lojas Parceiras</p>
              </div>
              <div>
              <h2>DIVULGUE UM ANIMAL</h2>
                <p>Cadastrar animal</p>
              </div>
              <div>
              <h2>SOBRE</h2>
                <p className="box-paragrafo2" >Prestação de contas</p>
                <p className="box-paragrafo3" >Perguntas frequentes</p>
                <p>Termo de Uso e Politica de Privacidade</p>
              </div>
              <div className="footer-perfil">
              <h2>PERFIL</h2>
                <p>Minha página de perfil</p>
                <p>Cadastre-se</p>
              </div>
            </div>           
            <div className="box-icons">
              <img className="intro-logo2" src={Logoo} alt="logo footer"/>
            </div>
      </div>
    );
  }
}