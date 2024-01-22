import React from 'react'
export function SummeryCardPreview({ title, imgUrl, children }) {
  return (
    <article className="summery-card">
      <img src={imgUrl} alt="summery card img" />
      <h3 className="color-red-txt">{title}</h3>
      <p className="body-2">{children}</p>
    </article>
  )
}
