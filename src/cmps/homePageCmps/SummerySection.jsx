import { SummeryCardPreview } from './SummeryCardPreview'
export function SummerySection({}) {
  return (
    <section className="summery full">
      <h2>Build & manage distribution team like no one else.</h2>
      <section className="summery-list">
        <SummeryCardPreview
          title={'Experienced Individuals'}
          imgUrl={'/src/assets/imgs/icon-person.svg'}>
          Our network is made up of highly experienced professionals who are
          passionate about what they do.
        </SummeryCardPreview>
        <SummeryCardPreview
          title={'Experienced Individuals'}
          imgUrl={'/src/assets/imgs/icon-cog.svg'}>
          Our network is made up of highly experienced professionals who are
          passionate about what they do.
        </SummeryCardPreview>
        <SummeryCardPreview
          title={'Experienced Individuals'}
          imgUrl={'/src/assets/imgs/icon-chart.svg'}>
          Our network is made up of highly experienced professionals who are
          passionate about what they do.
        </SummeryCardPreview>
      </section>
    </section>
  )
}
