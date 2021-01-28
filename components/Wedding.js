import React from "react";
import "../components/Wedding.css";
import "../components/Media.css";
import Footer from "../components/Footer";
import wedding_foto from "../images/wedding_foto.jpg"
import wedding_foto_2 from "../images/wedding_foto_2.jpg";
import wedding_foto_3 from "../images/wedding_foto_3.jpg";
import wedding_foto_4 from "../images/wedding_foto_4.jpg";
import wedding_foto_5 from "../images/wedding_foto_5.jpg";

export default function Wedding() {
    return(
        <div className="Wedding">
            <section> 
                <div className="container">
                <div className="blocks">
                    <div className="row">
                        <div className="col-md-4 mt-4 text_block_wedding_why">
                            <h2>ЧОМУ САМЕ МИ?</h2>
                            <ul>
                                <p>Відповідь очевидна, адже ми пропонуємо:
                                <br />
                                <br />
                               Ви сказали одне одному «Так»?
                               І закру- тилась голова від питань: Де? Коли? Як?
                                <br />
                                <br />
                               Ми Вам допоможемо!
                               Голодний Микола пропонує весілля «ПІД КЛЮЧ»</p>
                         
                                <li className="text_why_we ml-4"><h6>Три локації для проведення свята:</h6>
                                <span>— Урочиста зала</span> <br/>
                                <span>— Зала з каміном</span> <br/>
                                <span>— Зашклена тераса </span>                               
                                </li>
                                <li className="text_why_we ml-4">
                                <h6>Зручне розташування ресторану:</h6>
                                <span>— Виїзд з міста</span>
                                <br/>
                                <span>— Велика парковка для автомобілей</span>
                                <br/>
                                <span>— Хороша транспортна розв’язка</span>
                                </li>
                                <li className="text_why_we ml-4">
                                <h6>У нас безпечно:</h6>
                                <span>— Постійний відеонагляд</span>
                                <br/>
                                <span>— Гостьова комора для зберігання під відеонаглядом</span>
                                <br/>
                                <span>— Охорона 24/7</span>
                                </li>
                                <li className="text_why_we ml-4">
                                <h6>Зручне розташування ресторану:</h6>
                                <span>— Виїзд з міста</span>
                                <br/>
                                <span>— Велика парковка для автомобілей</span>
                                <br/>
                                <span>— Хороша транспортна розв’язка</span>
                                </li>
                                <li className="text_why_we ml-4">
                                <h6>Зручне розташування ресторану:</h6>
                                <span>— Виїзд з міста</span>
                                <br/>
                                <span>— Велика парковка для автомобілей</span>
                                <br/>
                                <span>— Хороша транспортна розв’язка</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <img className="wedding_foto" src={wedding_foto} alt="wedding_foto" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 col-md-4"><img className="wedding_foto_2" src={wedding_foto_2} alt="wedding_foto" /></div>
                        <div class="col-6 col-md-4"><img className="wedding_foto_2" src={wedding_foto_3} alt="wedding_foto" /></div>
                        <div class="col-6 col-md-4"><img className="wedding_foto_2" src={wedding_foto_4} alt="wedding_foto" /></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-6 col-md-4">
                            .col-6 .col-md-4
                            <p className="text_menu_wedding">Меню:
                            Ресторанне + бенкетне меню
                            Особиста консультація шеф-кухаря та кондитера
                            Алкоголь за зниженою ціною</p>
                        </div>
                        <div class="col-6 col-md-4">
                            .col-6 .col-md-4
                            <p className="text_menu_wedding">Меню:
                            Ресторанне + бенкетне меню
                            Особиста консультація шеф-кухаря та кондитера
                            Алкоголь за зниженою ціною</p>
                        </div>
                        <div class="col-6 col-md-4">
                            .col-6 .col-md-4
                            <p className="text_menu_wedding">Меню:
                            Ресторанне + бенкетне меню
                            Особиста консультація шеф-кухаря та кондитера
                            Алкоголь за зниженою ціною</p>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12 col-md-8"><img className="wedding_foto_5" src={wedding_foto_5} alt="wedding_foto" /></div>
                        <div class="col-6 col-md-4">
                            .col-6 .col-md-4
                            <p>
                            Власна кондитерська та броварня:
                            <br />
                            Замовлення весільного торта
                            Кенді-бар
                            Власне свіжо-зварене пиво у вас на козацькому столі
                            </p>
                            <p>
                            Власна кондитерська та броварня:
                            <br />
                            Замовлення весільного торта
                            Кенді-бар
                            Власне свіжо-зварене пиво у вас на козацькому столі
                            </p>
                            <p>
                            Власна кондитерська та броварня:
                            <br />
                            Замовлення весільного торта
                            Кенді-бар
                            Власне свіжо-зварене пиво у вас на козацькому столі
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