import React from "react";
import "../components/Footer.css";
import "../components/Media.css";
import APP from "../images/APP.PNG";
import GOO from "../images/GOO.PNG";
import insta from "../images/instagram.png";
import Vector7 from "../images/Vector (7).png";
import Vector8 from "../images/Vector (8).png";
import Vector9 from "../images/Vector (9).png";
import Vector12 from "../images/Vector (12).png";

export default function Footer() {
    return(
        <div className="Footer">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                    <h4>О компании</h4>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <h4 className="foot_text">О компании</h4>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                </div>
                <div className="col-md-3">
                    <h4>О компании</h4>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <h4 className="foot_text">О компании</h4>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                    <p>Преимущества площадки</p>
                </div>
                <div className="col-md-3">
                    <h4>О компании</h4>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <p>О нашей компании</p>
                    <h4 className="foot_text">Приложение</h4>
                    <p>
                    <img
                        className="APP"
                        src={APP}
                        alt=""
                    />
                    </p>
                    <img
                        className="GOO"
                        src={GOO}
                        alt=""
                    />
                </div>
                <div class="col-md-3">
                    <h4>Мы в соц. сетях</h4>
                    <div className="block_fotos">
                        <img className="img_f" src={Vector7} alt="" />
                        <img className="img_f" src={Vector8} alt="" />
                        <img className="img_f" src={Vector9} alt="" />
                        <img className="img_f" src={insta} alt="" />
                    </div>
                    <h4 className="subscribe">Подписка на новости</h4>
                    <p className="text_take">
                        Получайте все самые последние новости о мероприятиях в Экспофоруме.
                    </p>
                    <div className="input-group input-group-sm but_inp" >
                        <input
                            type="text"
                            className="form-control fix-rounded-right"
                            placeholder="Введите ваш e-mail"
                            required
                        />
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <img src={Vector12} alt=""/>
                            </span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
    );
} 