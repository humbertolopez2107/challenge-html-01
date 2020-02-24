import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="footer__identidad">
          <p className="footer__identidad--logo">
            Deck
            <font className="dot">.</font>
          </p>
          <p className="footer__identidad--marca">
            © 2018 Deck Component based UI kit
          </p>
        </div>
        <div className="footer__options">
          <ul className="footer__options--list">
            <li>
              <a href="/">Technology</a>
            </li>
            <li>
              <a href="/">Ideas </a>
            </li>

            <li>
              <a href="/"> Entertaiment</a>
            </li>
            <li>
              <a href="/">Leadership</a>
            </li>
            <li>
              <a href="/">Video</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>

            <li>
              <a href="/">Finance</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <ul className="footer__contact--social">
            <li> Follow us: </li>
            <li>
              <a href="/">
                <img src="/resources/imgs/instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/resources/imgs/pinterest.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/resources/imgs/twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/resources/imgs/facebook.svg" alt="" />
              </a>
            </li>
          </ul>
          <div className="footer__contact--mail">
            <input type="mail" placeholder="Your mail" />
            <button>Suscribe</button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
