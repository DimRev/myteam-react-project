import { ReviewCardPreview } from './ReviewCardPreview'
export function ReviewsSection({}) {
  return (
    <section className="reviews full">
      <h2>
        Delivering real results for top companies. Some of our{' '}
        <span className="color-teal-txt">success stories</span>
      </h2>
      <ReviewCardPreview author={'Kady Baker'} avatarUrl={'/src/assets/imgs/avatar-kady.jpg'}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
        consectetur laboriosam laudantium nobis perspiciatis eum, eveniet
        provident harum. Aspernatur, accusamus.
      </ReviewCardPreview>
      <ReviewCardPreview author={'Aiysha Reese'} avatarUrl={'/src/assets/imgs/avatar-aiysha.jpg'}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
        consectetur laboriosam laudantium nobis perspiciatis eum, eveniet
        provident harum. Aspernatur, accusamus.
      </ReviewCardPreview>
      <ReviewCardPreview author={'Arthur Clarke'} avatarUrl={'/src/assets/imgs/avatar-arthur.jpg'}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
        consectetur laboriosam laudantium nobis perspiciatis eum, eveniet
        provident harum. Aspernatur, accusamus.
      </ReviewCardPreview>
    </section>
  )
}
