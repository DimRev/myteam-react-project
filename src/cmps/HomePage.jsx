import { CtaSection } from './homePageCmps/CtaSection';
import { HeroSection } from './homePageCmps/HeroSection'
import { ReviewsSection } from './homePageCmps/ReviewsSection'
import { SummerySection } from './homePageCmps/SummerySection'
export function HomePage({}) {
  return (
    <main className="page home-page main-layout">
      <HeroSection />
      <SummerySection />
      <ReviewsSection />
      <CtaSection     />
    </main>
  )
}
