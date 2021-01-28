import React from "react";
import { Link } from "react-router-dom";
import "../components/Corporate.css";
import "../components/Media.css";
import Footer from "../components/Footer";
import fotos_corporate_1 from "../images/fotos_corporate_1.jpg";
import fotos_corporate_2 from "../images/fotos_corporate_2.jpg";

export default function Corporate() {
    return(
        <div className="Corporate">
            <section>
                <div className="container">
                    <div className="block_corporate">
                        <div className="row ml-2">
                            <div class="col-6 col-md-4 mt-4 text_corporate_plane">
                                <h5>Запланували корпоратив? Цього достатньо! Про все решта подбаємо ми!</h5>
                                <p>Адже в нас великий досвід проведення бенкетів будь-якого формату.
                                   <br />
                                   Наші два бенкетні зали розраховані на затишні гуляння від 20 осіб, 
                                   до гучних вечірок на 160 - 180 осіб. Зали оформлені у європейському стилі, 
                                   для того, щоб замовник міг прикрасити під свій стиль та смак.
                                </p>
                                <Link className="item_button" to="/booking" href="#">
                                    <button className="btn btn-outline-light">Бронювати столи</button>
                                </Link>
                            </div>
                            <div class="col-12 col-md-8">
                                <img className="fotos_corporate_1" src={fotos_corporate_1} alt="fotos_corporate_1" />
                            </div>
                        </div>  
                        <div class="row mt-4 pt-4">
                            <div class="col-12 col-md-8">
                            <img className="fotos_corporate_1" src={fotos_corporate_1} alt="fotos_corporate_2" />
                            </div>
                            <div class="col-6 col-md-4 mt-4 text_corporate_plane">
                                <h5>Запланували корпоратив? Цього достатньо! Про все решта подбаємо ми!</h5>
                                <p>Окреме бенкетне меню та консультація із шеф-кухарем, полегшить підбір святкового меню. 
                                    а шеф-кондитетер підбере та зробить солодкий стіл під всі смаки. Пропонуємо випікання тортів, 
                                    будь-якого декору та розміру або ж кенді-бар стане чудовою альтернативою торта.
                                    Бенкетний адміністратор буде супроводжувати Ваше свято з моменту дзвінка у ресторан 
                                    та аж до його закінчення. Музичний супровід, декор, додатквое освілення та багато іншого, 
                                    усе Вам розповість наш бенкетний адміністратор, потрібно лише зателефонувати або залишити заяву 
                                    і ми з Вами зв’яжемось. Індивідуальний підхід - запорука успіху.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}