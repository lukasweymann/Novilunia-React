import React from 'react';
import './HomePage.css';
import Moon from '../images/moon-phase.png';
import CandleRm from '../images/vela-removed-min.png';
import Star from '../images/star 1.png';
import SecondCandle from '../images/second section img-min.png';
import FirstProduct from '../images/PRODUCT1 1-min.png';
import SecondProduct from '../images/product2 1-min.png';
import ThirdProduct from '../images/Group 1-min.png';
import Arrow from '../images/Arrow 1.svg';
import FooterLogo from '../images/Group 3.png';
import Instagram from '../images/instagram 1.svg';
import WhatsApp from '../images/whatsapp 1.svg';
import Mail from '../images/mail 1.svg';
import NavBar from './NavBar';

function HomePage(){
    return(
        <div class="HomePage">
<div className="stars"></div>
<div className="twinkling"></div>
<div className="clouds"></div>
<NavBar/>
<div className="homepage-container">
<h1 className="h1-homepage">NOVILUNIA</h1>
<h3 className="h3-homepage">PRODUCTOS ARTESANALES HECHOS CON AMOR</h3>
<div className="buttons-homepage">
<button className="productos-button__homepage">PRODUCTOS</button>
<button className="quienes-button__homepage">QUIÉNES SOMOS</button>
</div>
</div>
<section>
<div className="first-section-homepage__title">
<h2 className="first-section-homepage__h2">¿QUÉ ES NOVILUNIA?</h2>
<img src={Moon} className="moon-phase" alt="moon-phase-icon"></img>
</div>
<div className="flexbox-first-section__homepage">
<img src={CandleRm} className="first-candle" alt="Candle"/>
<p className="first-paragraph__homepage">Novilunia viene de luna nueva. El florecer de cosas nuevas y reinventarse. Es una marca que propone encontrar la belleza volviendo a nuestros orígenes y fabricando productos de manera artesanal, natural y renovable. Creando así copias únicas con mucha más personalidad que un productode venta masiva. Asegurando un acabado al que se le ha dedicado especial tiempo y una pieza única para quien lo adquiera.</p>
</div>
</section>
<section className="second-section__homepage">
<div className="left-block-second-section__homepage">
<div className="title-and-star-second__section-homepage">
<h2 className="second-section__homepage-h2">¿QUÉ HACEMOS EN NOVILUNIA?</h2>
<img src={Star} className="star-homepage" alt="star-homepage"/>
</div>
<p className="second-section__homepage-paragraph">En Novilunia fabricamos velas, inciensos y objetos decorativos con un acabado profesional, manteniendo un aspecto natural. Nuestro fin es crear un producto que cree una experiencia especial y que enriquezca la decoración del lugar al que se agrega.</p>

</div>
<div className="right-block-second-section__homepage">
<img src={SecondCandle} className="second-candle" alt="second-candle" />
</div>
</section>
<section>
<div className="third-section__homepage">
<h2 className="h2-third-section__homepage">CONOCE NUESTROS PRODUCTOS</h2>
<div className="product-pics__homepage">
<img src={FirstProduct} className="first-pic__homepage product"/>
<img src={SecondProduct} className="first-pic__homepage product"/>
<img src={ThirdProduct} className="first-pic__homepage product"/>
</div>
<div className="visita-arrow">
<h3 className="h3-products-section__homepage">VISITA NUESTRO CATÁLOGO</h3>
<img src={Arrow} className="arrow"/>
</div>
</div>
</section>
<footer>
<div className="footer-column">
<img src={FooterLogo} className="footer-logo"/>
<p className="footer-paragraph">Productos artesanales hechos con amor ♡</p>
<p className="copyright">© Novilunia - Todos los derechos reservados.</p>
</div>
<div className="socials">
<img src={WhatsApp} className="whatsapp-icon social-icon"/>
<img src={Instagram} className="instagram-icon social-icon"/>
<img src={Mail} className="mail-icon social-icon"/>
</div>

</footer>
        
        </div>
    )
}

export default HomePage;