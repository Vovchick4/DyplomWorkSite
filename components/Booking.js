import React from "react";
import "../components/Booking.css";
import "../components/Media.css";
import Footer from "../components/Footer";

export default function Booking() {
    return(
        <div className="Booking">
            <section className="background">
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <span className="background_circle"></span>
                <div className="block_booking">
                    <div className="container">
                    <div className="booking-box">
                        <h1>Бронювання</h1>
                        <hr />
                        <form>
                            <div className="users-box">
                                <label for="exampleInputText1">ПІБ*</label>
                                <input type="text" className="form-control" id="exampleInputText1" />
                            </div>
                            <div className="users-box">
                                <label for="exampleInputEmail1">Email*</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div className="users-box">
                                <label for="exampleInputText2">Телефон*</label>
                                <input type="text" className="form-control" id="exampleInputText2" />
                            </div>
                            <div className="users-box">
                                <label for="exampleInputText3">Дата*</label>
                                <input type="date" className="form-control" id="start" name="trip-start" min="2021-01-01" max="2021-12-31" />
                            </div>
                            <div className="users-box">
                                <label for="exampleInputText4">Час*</label>
                                <input type="time" className="form-control" id="appt" name="appt" min="09:00" max="18:00" required />
                            </div>
                            <div className="users-box">
                                <p className="text_booking">Персон*</p>
                                <p><input type="text" className="form-control" list="character" />
                                <datalist datalist id="character">
                                    <option value="1 ГІСТЬ"></option>
                                    <option value="2 ГОСТЕЙ"></option>
                                    <option value="3 ГОСТЕЙ"></option>
                                    <option value="4 ГОСТЕЙ"></option>
                                    <option value="5 ГОСТЕЙ"></option>
                                    <option value="6 ГОСТЕЙ"></option>
                                    <option value="7 ГОСТЕЙ"></option>
                                    <option value="8 ГОСТЕЙ"></option>
                                    <option value="9 ГОСТЕЙ"></option>
                                    <option value="10+ ГОСТЕЙ"></option>
                                </datalist></p>
                            </div>
                            <div className="users-box">
                                <label for="exampleInputText5">Додаткові побажання</label>
                                <textarea type="comments" className="form-control"></textarea>
                            </div>
                             <button type="submit" className="btn btn-outline-dark mt-4 mb-4 button_book">Забронювати</button>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div> 
    );
}