import React from "react";
import Footer from "../components/Footer";
import "../components/Test.css";
import "../components/Media.css";

export default function Test() {
    return(
        <div className="Test">
            <section>
                <div className="containers">
                    <div className="background_circle">
                        <div class="wrapper">
                            <div class="box1">
                                <div className="nested">asd</div>
                                <div className="nested">df</div>
                                <div className="nested">asd</div>
                            </div>
                            <div class="box2">Two</div>
                            <div class="box3">Three</div>
                            <div class="box4">Four</div>
                            <div class="box5">Five</div>
                            <div class="box6">Six</div>
                        </div>
                    </div>
                </div>   
            </section>
            <Footer />
        </div>
    );
}