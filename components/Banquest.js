import React from "react";
import { Link } from "react-router-dom";
import "../components/Banquest.css";
import "../components/Media.css";
import Footer from "../components/Footer";
import photos_banquet_1 from "../images/photos_banquet_1.jpg";
import photos_banquet_2 from "../images/photos_banquet_2.jpg";
import photos_banquet_3 from "../images/photos_banquet_3.jpg";
import photos_banquet_4 from "../images/photos_banquet_4.jpg";
import photos_banquet_5 from "../images/photos_banquet_5.jpg";
import photos_banquet_6 from "../images/photos_banquet_6.jpg";

export default function Banquest() {
    return(
        <div className="Banquest">
            <section>
                <div className="container">
                    <div className="block_banquest">
                        {/* <div className="row">
                            <div className="col-md-12">
                                <p>“Урочиста зала” розрахована до 160 осіб. Інтер’єр зали максимально нейтральний, 
                                    аби кожен міг прикрасити зал під власні смаки чи подію, будь то весілля, 
                                    уродини чи конференція. Зала обладнана сценічним світлом, екраном, 
                                    проектором та мікрофонами, яких достатньо для проведення святкування чи конференції. 
                                    “Зала з каміном” розрахована на 30-50 осіб, облаштована в європейському аристократичному стилі. 
                                    Відокремлена від усіх інших залів, затишна і зручна, має власний балкон. 
                                    Підійде для проведення уродин, невеличких сімейних святкувань та конференцій.</p>
                            </div>
                        </div> */}
                        <div class="row ml-2">
                            <div class="col-6 col-md-4 mt-4 text_block_banquet">
                                <h3>ASDASDA</h3>
                                <p>“Урочиста зала” розрахована до 160 осіб. Інтер’єр зали максимально нейтральний, 
                                    аби кожен міг прикрасити зал під власні смаки чи подію, будь то весілля, 
                                    уродини чи конференція. Зала обладнана сценічним світлом, екраном, 
                                    проектором та мікрофонами, яких достатньо для проведення святкування чи конференції. 
                                    “Зала з каміном” розрахована на 30-50 осіб, облаштована в європейському аристократичному стилі. 
                                    Відокремлена від усіх інших залів, затишна і зручна, має власний балкон. 
                                    Підійде для проведення уродин, невеличких сімейних святкувань та конференцій.</p>
                                <Link className="item_button" to="/booking" href="#"><button className="btn btn-outline-light">Забронювати</button></Link>
                            </div>
                            <div class="col-12 col-md-8"><img className="photos_banquet" src={photos_banquet_1} /></div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-6 col-md-4"><img className="photos_banquet" src={photos_banquet_1} /></div>
                            <div class="col-6 col-md-4"><img className="photos_banquet" src={photos_banquet_1} /></div>
                            <div class="col-6 col-md-4"><img className="photos_banquet" src={photos_banquet_1} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}