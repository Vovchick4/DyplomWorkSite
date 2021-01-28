import React from "react";
import "../components/Fotogalery.css";
import "../components/Media.css";
import Footer from "../components/Footer";
import foto_rest from "../images/caption.jpg";
import foto_rest_2 from "../images/caption_2.jpg";
import foto_rest_3 from "../images/White_Rabbit.jpg";
import foto_rest_4 from "../images/resticks.jpeg"
import foto_rest_5 from "../images/restics_2.jpg"

export default function Fotogalery() {
    return(
        <div className="Fotogalery">
            <section>
                <div className="container">
                    <div className="block_one">
                        <div className="row">
                            <div className="col-md-12">
                                <i class="slider_s">
                                    <input class="int_slider slide_foto_1" type="radio" name="s" title="Random Picture 1" />
                                    <input class="int_slider slide_foto_2" checked type="radio" name="s" title="Random Picture 2" />
                                    <input class="int_slider slide_foto_3" type="radio" name="s" title="Random Picture 3" />
                                    <input class="int_slider slide_foto_4" type="radio" name="s" title="Random Picture 4" />
                                    <input class="int_slider slide_foto_5" type="radio" name="s" title="Random Picture 5" />
                                </i>
                            </div>
                            <div class="col-md-6">
                                <h2>Lolololo</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                 Facere qui pariatur odio deleniti ratione delectus ea tempore, 
                                 dolorem adipisci hic quas facilis dolorum maiores asperiores, deserunt molestiae 
                                 numquam. Accusantium, error?</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="foto_rest anim_foto_rest_1" src={foto_rest} alt="rest" />
                                <img className="foto_rest anim_foto_rest_1 mt-4" src={foto_rest} alt="rest" />
                                <img className="foto_rest anim_foto_rest_3 mt-4" src={foto_rest_3} alt="rest" />
                            </div>
                            <div className="col-md-4">
                                <img className="foto_rest anim_foto_rest_2" src={foto_rest_2} alt="rest" />
                                <img className="foto_rest anim_foto_rest_1 mt-4" src={foto_rest} alt="rest" />
                                <img className="foto_rest anim_foto_rest_3 mt-4" src={foto_rest_3} alt="rest" />
                            </div>
                            <div className="col-md-4">
                                <img className="foto_rest anim_foto_rest_3" src={foto_rest_3} alt="rest" />
                                <img className="foto_rest anim_foto_rest_1 mt-4" src={foto_rest} alt="rest" />
                                <img className="foto_rest anim_foto_rest_3 mt-4" src={foto_rest_3} alt="rest" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 text_f_b_side">
                                <h2>Lolololo</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                 Facere qui pariatur odio deleniti ratione delectus ea tempore, 
                                 dolorem adipisci hic quas facilis dolorum maiores asperiores, deserunt molestiae 
                                 numquam. Accusantium, error?</p>
                                <div class="flip-box">
                                    <div class="flip-box-inner">
                                        <div class="flip-box-front">
                                            <img className="foto_flip_side_front_back" src={foto_rest_4} alt="rest" />
                                        </div>
                                        <div class="flip-box-back">
                                            <img className="foto_flip_side_front_back" src={foto_rest_5} alt="rest" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <Footer />
        </div>
    );
}