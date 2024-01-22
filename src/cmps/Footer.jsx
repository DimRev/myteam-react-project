export function Footer({}) {
  return (
    <footer className="app-footer full">
      <h3 className="title">myteam</h3>
      <section className="contact-links">
        <nav>
          <a className="body-1" href="">
            home
          </a>
          <a className="body-1" href="">
            about
          </a>
        </nav>
      </section>
      <section className="address">
        <small className="body-1">987 Hillcrest Lone</small>
        <small className="body-1">Irvine, CA</small>
        <small className="body-1">California 92714</small>
        <small className="body-1">Call Us: 949-833-7432</small>
      </section>
      <section className="social-media">
        <a href="">
          <img src="/src/assets/imgs/icon-facebook.svg" alt="facebook" />
        </a>
        <a href="">
          <img src="/src/assets/imgs/icon-pinterest.svg" alt="pinterest" />
        </a>
        <a href="">
          <img src="/src/assets/imgs/icon-twitter.svg" alt="twitter" />
        </a>
      </section>
      <section className="copyrights">
        <small className="body-1">Copyrights 2020. All Rights Reserved</small>
      </section>
    </footer>
  )
}
