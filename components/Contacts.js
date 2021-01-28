import React from "react";
import "../components/Contacts.css";
import "../components/Media.css";
import Footer from "../components/Footer";

export default function Contact() {
    return(
        <div className="Contact">
            <section>
                <div class="container border_sec">
                    <div class="row">
                        <div class="col-md-4 contacts_text">
                            <h2>Контакти</h2>
                            <p>Львів</p>
                            <p>вул. Любінська 196</p>
                            <p>+38 098 777 16 00</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cupiditate volu</p>
                        </div>
                        <div class="col-md-8 contacts_map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41191.298179571495!2d24.036250668750007!3d49.81509161118365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b92983686621ab9!2sDynamo%20Blues!5e0!3m2!1sru!2sua!4v1602096204357!5m2!1sru!2sua" width="100%" height="450" 
                            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                    
                        </div>
                    </div>
                    <div class="row block_sec_text">
                        <div class="col-md-4 text_sec">
                            <h3>Є запитання?</h3>
                            <p>Lorem ipsum dolor sit amet, conset s a egestas.
                            Ullamcorper eget purus aenean vel convallis arc.</p>
                        </div>
                        <div class="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!4v1611603023582!6m8!1m7!1svp6lsig9Zl5I1lHcrcUCTA!2m2!1d42.07600554882585!2d23.87637266442675!3f131.09940850847917!4f-2.4894752144662533!5f0.7820865974627469" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            <div class="block_qustion">
                            
                        {/* <h4>Зв'язатися з нами</h4>
                
                        <form method="post" action="#" autocomplete="off">
                            <div class="user-box">
                              <input name="email" type="email" class="form-control" id="email" placeholder="Введите email" />
                          
                            </div>
                            <div class="user-box">
                                <input type="text" class="form-control" id="name" placeholder="First name" />
                
                            </div>
                            <div class="user-box">
                                <input type="text" class="form-control" id="comment" placeholder="Comment" />
                        
                            </div>
                            <div class="user-box form-check">
                              <input type="checkbox" class="form-check-input" id="save" />
                              <label name="save" class="form-check-label" for="save">запомнить меня</label>
                            </div>
                     
                            <button type="submit" class="btn btn-outline-dark">Надіслати</button>
                          </form>  */}
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}