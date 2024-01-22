function App() {
  return (
    <>
      <header>
        <h3>myteam</h3>{' '}
        <div>
          <img src="" alt="burger menu" />
        </div>
      </header>
      <main>
        <section className="hero">
          Find the best <span className="color-red-txt">talent</span>
        </section>
        <section className="summery">
          <h2>Build & manage distribution team like no one else</h2>
          <article className="summery-card">
            <img src="" alt="summery card img" />
            <h3>Experienced Individuals</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              architecto officia minima in ex qui hic enim porro consectetur
              doloribus!
            </p>
          </article>
        </section>
        <section className="reviews">
          <h2>
            Delivering real results for top companies. Some of our{' '}
            <span className="color-teal-txt">success stories</span>
          </h2>
          <article className="reviews-card">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim consectetur laboriosam laudantium nobis perspiciatis eum, eveniet provident harum. Aspernatur, accusamus.</p>
            <h3>Kady Baker</h3>
            <img src="" alt="review-avatar" />
          </article>
        </section>
        <section className="cti">
          <h2>Rady to get started?</h2>
          <button>contact us</button>
        </section>
      </main>
      <footer>
        <section className="contact-links"><h3>myteam</h3>
        <a href="">home</a>
        <a href="">about</a>
        <div className="social-media">
          <img src="" alt="facebook" />
          <img src="" alt="pintrest" />
          <img src="" alt="twitter" />
        </div>
        </section>
        <section className="address-copyrights">
          <small>987 Hillcrest Lone</small>
          <small>Irvine, CA</small>
          <small>California 92714</small>
          <small>Call Us: 949-833-7432</small>
          <small>Copyrights 2020. All Rights Reserved</small>
        </section>
      </footer>
    </>
  )
}

export default App
