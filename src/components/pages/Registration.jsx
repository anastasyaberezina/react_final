import React from 'react';
import Header from './components/elements/Header';
import Header_topmenu from './components/elements/Header_topmenu';
import Footer_bottom from './components/elements/Footer_bottom';


function Registration() {
    return (
        <>
            <Header/>
            <div className ="content">
                {/* <!--head--> */}
                <Header_topmenu />
         
                {/* <!--top-header--> */}
                <div className ="top_head_prod">
                    <h2 className ="top_head_heading">REGISTRATION</h2>
                </div>


                {/* <!--content--> */}
                <div className ="registration">
                    <section className =" registration__left ">
                        <form className ="registration__form " action="# ">
                            <label className ="registratio__form_name " for="# ">Your Name </label>
                            <input className ="registration__form_input " type="text " name="first_name " placeholder="First Name "/>
                            <input className ="registration__form_input " type="text " name="last_name " placeholder="Last Name "/>
                            <div className ="registration__form-indicator ">
                                <input className ="registration__form-indicator_male " type="radio" name="gender " id="male " checked/><label className  ="registration__form-indicator_male_gender " for="male ">Male</label>
                                <input className ="registration__form-indicator_female " type="radio" name="gender " id="female "/><label className  ="registration__form-indicator_female_gendor " for="female ">Female</label>
                            </div>
                            <label className ="registration__form_details" for="# ">Login details</label>
                            <input className ="registration__form_email" type="email " name="email " placeholder="Email "/>
                            <input className ="registration__form_password " type="password " name="password " placeholder="Password "/>
                            <div className ="registration__form_text">
                                <label className ="registration__form_text_p">Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</label>
                            </div>

                            <button className ="registration__form_button" type="button "><span className  ="registration___form_button_button-name ">JOIN NOW</span></button>
                        </form>
                    </section>

                    <section className ="registration__right">
                        <h1 className ="registration_h1 ">LOYALTY HAS ITS PERKS</h1>
                        <p className ="registration_p ">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
                        <ul className ="registration_ul ">
                            <li className ="registration_li ">15% off welcome offer</li>
                            <li className ="registration_li ">Free shipping, returns and exchanges on all orders</li>
                            <li className ="registration_li ">$10 off a purchase on your birthday</li>
                            <li className ="registration_li ">Early access to products</li>
                            <li className ="registration_li ">Exclusive offers & rewards</li>
                        </ul>
                    </section>
                </div>
                                    

                {/* <!--footer--> */}
                <Footer_bottom />
            </div>
            <Router_pages />
        </>
    )
}

export default Registration;