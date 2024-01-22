import { ReviewsSection } from './homePageCmps/ReviewsSection'
import { SummerySection } from './homePageCmps/SummerySection'
export function HomePage({}) {
  return (
    <main className='page home-page main-layout'>
      <section className="hero">
        Find the best <span className="color-red-txt">talent</span>
      </section>
      <SummerySection />
      <ReviewsSection />
      <section className="cti">
        <h2>Rady to get started?</h2>
        <button>contact us</button>
      </section>
    </main>
  )
}
