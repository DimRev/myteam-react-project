import React from 'react'
export function ReviewCardPreview({ author, avatarUrl, children }) {
  return (
    <article className="reviews-card">
      <p className="body-2">“{children}”</p>
      <h3 className="color-teal-txt">{author}</h3>
      <img src={avatarUrl} alt="review-avatar" />
    </article>
  )
}
