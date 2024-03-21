import React from 'react';
import Header from './components/elements/Header';
import Header_topmenu from './components/elements/Header_topmenu';
import Footer_bottom from './components/elements/Footer_bottom';

function Basket() {
    return (
        <>
            <Header/>
            <div className ="content">
                <Header_topmenu />


                {/* <!--top-header--> */}
                <div className ="top_head_prod">
                    <h2 className ="top_head_heading">SHOPPING CART</h2>
                </div>

                <div className ="top-basket">
                    <div className ="top-basket__left">
                        <section className ="top-section-basket">
                            <div className ="top-section-basket__img">
                                <a href="#"><img src="imgbasket/item2.svg" alt="imgbasketitem1"/>
                                </a>
                            </div>
                            <div className ="top-section-basket__content">
                                <h1 className ="top-section-basket__h1">MANGO PEOPLE T-SHIRT</h1>
                                <p className ="top-section-basket__p">Price: <span className ="top-section-basket__p_price">$300</span></p>
                                <p className ="top-section-basket__p2">Color: Red</p>
                                <p className ="top-section-basket__p2">Size: Xl </p>
                                <p className ="top-section-basket__p2">Quantity: <input type="number" min="1" max="100" className ="top-section-basket__number"/></p>
                            </div>
                        </section>
                        <section className ="top-section-basket">
                            <div className ="top-section-basket__img">
                                <a href="#"><img src="imgbasket/item1.svg" alt="imgbasketitem2"/>
                                </a>
                            </div>
                            <div className ="top-section-basket__content">
                                <h1 className ="top-section-basket__h1">MANGO PEOPLE T-SHIRT</h1>
                                <p className ="top-section-basket__p">Price: <span className ="top-section-basket__p_price">$300</span></p>
                                <p className ="top-section-basket__p2">Color: Red</p>
                                <p className ="top-section-basket__p2">Size: Xl </p>
                                <p className ="top-section-basket__p2">Quantity: <input type="number" min="1" max="100" className ="top-section-basket__number"/></p>
                            </div>
                        </section>
                        <div>
                            <form className ="top-section-basket__buttons" action="#">
                                <button className ="top-section-basket__buttons_one" type="reset">CLEAR SHOPPING CART</button>
                                <button className ="top-section-basket__buttons_second" type="reset">CONTINUE SHOPPING</button>
                            </form>
                        </div>
                    </div>
                    <div className ="top-basket__right">
                        <form className ="top-section-basket__form" action="#">
                            <p className ="top-section-basket__form_head">SHIPPING ADRESS</p>
                            <input className ="top-section-basket__form_item" type="text " placeholder="Bangladesh "/>
                            <input className ="top-section-basket__form_item" type="text " placeholder="State "/>
                            <input className ="top-section-basket__form_item" type="text " placeholder="Postcode / Zip "/>
                            <button className ="top-section-basket__form_button" type="submit ">GET A QUOTE</button>
                        </form>
                        <section className ="total">
                            <div className ="total__summ ">
                                <p className ="total__summ_h1 ">SUB TOTAL<span className ="total__summ_h1_1">$900</span></p>
                                <p className ="total__summ_h2 ">GRAND TOTAL<span className ="total__summ_h2_1">$900</span></p>
                            </div>
                            <hr className ="total__line "/>
                            <button className ="total__checkout " type="submit ">PROCEED TO CHECKOUT</button>
                        </section>
                    </div>
                </div>


                {/* <!--footer--> */}
                <Footer_bottom />
                

            </div>
            <Router_pages />
        </>
    )
}

export default Basket;