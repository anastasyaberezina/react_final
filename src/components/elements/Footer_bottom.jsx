import React from 'react';

function Footer_bottom() {
    return (
        <div>
            <section class="footer__section__second">
            <div class="item3">
                <img src="img/footersectionfoto.svg " alt="footerfoto " style={{ "width": "96","height":"96" }}/>
                <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
            </div>
            <div class=" footer__form ">
                <div class="footer__form_head ">
                    <h4 class="footer__form_h4 ">SUBSCRIBE</h4>
                    <h5 class="footer__form_h5 ">FOR OUR NEWLETTER AND PROMOTION</h5>
                </div>
                <div class="footer__form_button ">
                    <form action="# ">
                        <input class="footer__form_button_email " required type="email " placeholder="Enter Your Email " />
                        <button class="footer__form_button_sub " type="submit ">Subscribe</button>
                    </form>
                </div>
            </div>
            </section>
            <div class="footer__socials ">
            <p class="footer__socials__p ">© 2021 Brand All Rights Reserved.</p>
            <div class="footer__bar__icon ">
                <a href="# " class="foo foo-pinterest-p "><img src="img/brands3.svg " alt=" " style={{ "width": "11","height":"16" }}/></a>
                <a href="# " class="foo foo-twitter "><img src="img/brands4.svg " alt=" " style={{ "width": "15","height":"16" }}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer_bottom;