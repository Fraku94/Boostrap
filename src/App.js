import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';

 
function App() {

  function AddItem(){

    
  }
  const portfolioLinks = [
    {
      title: 'Marynarka',
      price: '250',
      imgAdres: 'https://dstreet.pl/pol_pl_Marynarka-meska-granatowa-MX0425-18678_1.jpg'
    },
    {
      title: 'Portfel',
      price: '80',
      imgAdres: 'https://static1.e-mcklein.pl/pol_pl_Czarny-portfel-meski-z-wkladka-PPM6-1631_10.png'
    },
    {
      title: 'Mucha',
      price: '55',
      imgAdres: 'https://muchotwory.pl/environment/cache/images/500_500_productGfx_319e7f3b95a8f9c57b5bb586e427d015.jpg'
    },
    {
      title: 'Spinki',
      price: '120',
      imgAdres: 'https://img.pakamera.net/i1/1/670/spinki-do-mankietow-12385227_2233813670.jpg'
    },
    {
      title: 'Okulary',
      price: '50',
      imgAdres: 'https://a.allegroimg.com/s512/115616/fe12f67047e29fd28256402d1cd5/CZARNE-LENONKI-OKRAGLE-Okulary-PRZECIWSLONECZNE'
    },
    {
      title: 'Szelki',
      price: '100',
      imgAdres: 'https://cdn.shoplo.com/2325/products/th640/acao/5696-szelki-dla-niemowlaka-regulowane-szare.jpg'
    }
  ]


  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="top">Projekt 02</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Gotowe ubiory</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Lista życzeń</a>
          </li>
      
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Znajomi</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Pomoc</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead" id="top">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Witamy w twojej szafie online!</div>
        <div className="intro-heading text-uppercase">Komponuj nowe ubiory i dodaj liste życzeń by widzieli ją twoi znajomi</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Do dzieła</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Gotowe ubiory</h2>
          <h3 className="section-subheading text-muted">BEZ MOŻLIWOŚCI EDYCJI</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Na miasto</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Do pracy</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Prywatne spotkania</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
  
  <section className="page-section" id="add">
    <div className="container">
    <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="addItems" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="ItemTitle" type="text" placeholder="Tytuł" required="required" data-validation-required-message="Proszę podać nazwę produktu"/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="ItemPrice" type="number" placeholder="Cena" required="required" data-validation-required-message="Proszę podaj cene"/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="ItemImg" placeholder="Adres produktu" required="required" data-validation-required-message="Proszę podaj adres zdjęcia"></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendAddItem" className="btn btn-primary btn-xl text-uppercase" type="button" >Dodaj produkt do listy życzeń</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Znajomi</h2>
          <h3 className="section-subheading text-muted">BEZ MOŻLIWOŚCI EDYCJI</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTec9MHEWqcyuNPy2rPKccy3wPVighgh4tPEw&usqp=CAU" alt=""/>
            <h4>Tomek</h4>
            <p className="text-muted">Lorem ipsum</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" without rel="noreferrer">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTec9MHEWqcyuNPy2rPKccy3wPVighgh4tPEw&usqp=CAU" alt=""/>
            <h4>Marzena</h4>
            <p className="text-muted">Lorem ipsum</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" without rel="noreferrer">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTec9MHEWqcyuNPy2rPKccy3wPVighgh4tPEw&usqp=CAU" alt=""/>
            <h4>Damian</h4>
            <p className="text-muted">Lorem ipsum</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" without rel="noreferrer">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Napisz do mnie</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="button">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Projekt 02 Dawid Frąk</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" without rel="noreferrer">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#portfolio">Lista życzeń</a>
            </li>
            <li className="list-inline-item">
              <a href="top">Góra strony</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;