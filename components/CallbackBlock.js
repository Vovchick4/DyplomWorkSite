import React from "react";
import "../components/CallbackBlock.css";
import PhoneFoto from "../images/pngtree-phone-icon-png-image_1757859.jpg";
import Vector8 from "../images/Vector (8).png";

export default function CallbackBlock() {

    return(
        <div className="CallbackBlock">
             {/* <div className="main_block_animation">
                <div className="main_background_callback">
                    <div className="background_callback">
                        <div className="round_callback">
                            <div className="img_callback">
                                <img src={Vector8} alt=">>>" width="25" height="15" />
                            </div>
                        </div>
                    </div>
                </div>
             </div> */}
             {/* <div id="block" className="block">
             <div class="login-box">
                                <h2>Зв'язатися з нами</h2>
                                <form>
                                    <div class="user-box">
                                        <input type="text" name="name" id="name" required="..." />
                                        <label>Ім'я</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="text" name="email" id="email" required="..." />
                                        <label>Пошта</label>
                                    </div>
                                    <div class="user-box">
                                        <input type="text" name="comment" id="comment" required="..." />
                                        <label>Коментарій</label>
                                    </div>
                                    <a href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Надіслати
                                    </a>
                                </form>
                                </div>
             </div>  */}
            <div className="containers">
                <h1> 
                    <div className="main_block_animation">
                        <div className="main_background_callback">
                            <div className="main_background_callback">
                                <div className="background_callback">
                                    <a href="#menus">
                                    <div className="round_callback">
                                         <div className="img_callback">
                                            <img src={Vector8} alt=">>>" width="25" height="15" />
                                        </div>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </h1>
                <div className="popover" id="menus">
                    <div className="contents">
                        <a href="#" class="close"></a>
                        <h2>Зв'язатися з нами</h2>
                        <form>
                            <div class="user-box">
                                <input type="text" name="name" id="name" required="..." />
                                <label>Ім'я</label>
                            </div>
                            <div class="user-box">
                                <input type="text" name="email" id="email" required="..." />
                                <label>Пошта</label>
                            </div>
                            <div class="user-box">
                                <input type="text" name="comment" id="comment" required="..." />
                                <label>Коментарій</label>
                            </div>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Надіслати
                            </a>
                        </form>
                    </div>
               </div>
            </div>
        </div>
    );
}