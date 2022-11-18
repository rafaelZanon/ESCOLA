import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import "./home.css";
import Menu from "../components/templates/Menu";
import Image35 from "../assets/image35.png";
import group17 from "../assets/group17.svg";
import image37 from "../assets/image37.png";
import image36 from "../assets/image36.png";
import image40 from "../assets/image40.png";
import group18 from "../assets/group18.svg";

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <Menu></Menu>
    <div className="site flex-col-hstart-vstart clip-contents">
      <div className="tamanhoCell flex-col-hcenter">
        <div className="groupCelulares flex-col">
          <p className="txtFans">
            Superfans de Pixel
          </p>
          <p className="txtColecao">Coleção Google Pixel</p>
        </div>
        <div className=" flex-col-hcenter-vstart">
          <p className="txtMade flex-hcenter">Made by Google</p>
          <div className="groupBox flex-row-vstart-hstart">
            <div className="groupBoxTwo flex-col-hcenter">
              <p className="txtPixel">Pixel 7 Pro</p>
              <p className="txtProfissional">
                O telefone totalmente profissional do Google.
              </p>
              <img
                src={Image35}
                alt="Not Found"
                className="image-35"
              />
            </div>
            <div className="rectangle-29 flex-col-hcenter">
              <p className="txt-693">Pixel 7</p>
              <p className="txt-232">Simplesmente poderoso. Super útil.</p>
              <img
                src={image36}
                alt="Not Found"
                className="image-35"
              />
            </div>
            <div className="group-3 flex-col-hcenter">
              <p className="txt-693">Pixel 6a</p>
              <p className="txt-472 flex-hcenter">
                Inteligente, poderoso, útil. E menos do que você pensa.
              </p>
              <img
                src={image37}
                alt="Not Found"
                className="image-35"
              />
            </div>
          </div>
          <div className="group-15 flex-col">
            <p className="txt-316">Google Pixel Watch </p>
          
            <p className="txt-039">Combinação do premium e o ousado. </p>
          </div>
          <div className="group-25 flex-col">
            <div className="group-21">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f32m30qojyc-514%3A170?alt=media&token=33110fef-b313-48b7-9389-bc700d5558a4"
                alt="Not Found"
                className="group-16"
              />
              <img
                src={group17}
                alt="Not Found"
                className="group-17"
              />
              <p className="txt-6931">Pixel Buds Pro</p>
              <p className="txt-942">Como soa premium.</p>
            </div>
            <div className="group-20">
              <p className="txt-448">Som rico, por menos.</p>
              <div className="group-767 flex-col">
                <div className="group-488 flex-row">
                  <img
                    src={group18}
                    alt="Not Found"
                    className="group-18"
                  />
                  <div className="group-19 flex-col-hcenter">
                    <p className="txt-767">Pixel Buds Série A</p>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f32m30qojyc-514%3A184?alt=media&token=1ef888fb-1475-443e-a99e-2ec86fe238f5"
                      alt="Not Found"
                      className="image-39"
                    />
                  </div>
                </div>
                <img
                  src={image40}
                  alt="Not Found"
                  className="image-40"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="group-24 flex-col-hcenter">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f32m30qojyc-514%3A212?alt=media&token=f377d059-b7f5-42a6-bd94-3f9c090d2705"
            alt="Not Found"
            className="image-41"
          />
          <p className="txt-101 flex-hcenter">
            Mantenha-me atualizado sobre dispositivos, notícias, dicas e ofertas
            da Google Store.
          </p>
        </div>
        <div className="group-23 flex-row">
          <div className="ellipse-3" />
          <div className="ellipse-2" />
          <div className="ellipse-5" />
          <div className="ellipse-4" />
          <p className="txt-213 flex-hend">Rafael Zanon & Thallis Thierre</p>
        </div>
      </div>
      <div className="group-13 flex-row-vcenter">
        <div className="ellipse-3" />
        <div className="ellipse-2" />
        <div className="ellipse-5" />
        <div className="ellipse-41" />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f32m30qojyc-504%3A39?alt=media&token=37169372-f5db-4e32-a917-9b9e5955fdbf"
          alt="Not Found"
          className="image-4"
        />
        <p className="txt-073 flex-hcenter"><button className="buttonSair" onClick={event => {AuthService.logout(); navigate("/login")}}>Sair</button></p>
      </div>
    </div>
    </div>
  );
}

export default Home;
