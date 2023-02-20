import css from "@/styles/prdctCard.module.scss"

export default function PrdctCard({ img, price, name }) {
  return (
    <div className={css.card}>
      <img src={img.src} alt={img.alt} />
      <h6>&#8362;{price}</h6>
      <p>{name}</p>
    </div>
  )
}
