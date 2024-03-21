import React from 'react';
import Header from './components/elements/Header';
import Header_topmenu from './components/elements/Header_topmenu';
import Footer_top from './components/elements/Footer_top';
import Footer_bottom from './components/elements/Footer_bottom';
import Item1 from './components/elements_product/Item1';
import Item2 from './components/elements_product/Item2';
import Item3 from './components/elements_product/Item3';
import Item4 from './components/elements_product/Item4';
import Item5 from './components/elements_product/Item5';
import Item6 from './components/elements_product/Item6';

function Index() {
    return (
        <>

            <Header />
            
            <div className="content">
                <Header_topmenu />

                    <section className ="headsection ">
                        <div className =" block1 ">
                            <img src="img/banner.png " alt="topphoto" />
                        </div>
                        <div className ="block2 ">
                            <img className ="headimg " src="img/line.svg " alt="line " />
                                <div className ="text ">
                                    <h1 className ="h1">THE BRAND</h1>
                                    <h2 className ="h2">OF LUXERIOUS FASHION</h2>
                                </div>
                        </div>
                    </section>
                    <section className ="topsection ">
                        <div className ="item ">
                            <img className ="img " src="img/item1.jpg " alt=" " />
                                <h1>30% OFF</h1>
                                <h2>FOR WOMEN</h2>
                        </div>
                        <div className ="item ">
                            <img className ="img " src="img/item2.jpg " alt=" " />
                                <h1>HOT DEAL</h1>
                                <h2>FOR MEN</h2>
                        </div>
                        <div className ="item ">
                            <img className ="img " src="img/item3.jpg " alt=" " />
                                <h1>NEW ARRIVALS</h1>
                                <h2>FOR KIDS</h2>
                        </div>
                        <div className ="item4 ">
                            <img className ="img4 " src="img/item4.jpg " alt=" " />
                                <h1>LUXIROUS & TRENDY</h1>
                                <h2>ACCESORIES</h2>
                        </div>
                    </section>
                    <section className ="section ">
                        <h1 className ="title ">Fetured Items</h1>
                        <h2 className ="subtitle ">Shop for items based on what we featured in this week</h2>
                    </section>
                    <section className ="footersection ">
                        <Item1 />
                        <Item2 />
                        <Item3 />
                        <Item4 />
                        <Item5 />
                        <Item6 />    
                    </section>
                
                <Footer_top />
                <Footer_bottom />

                <Router_pages />

                

            </div>
            
          
        </>
    )
}

export default Index;