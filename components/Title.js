import css from "@/styles/title.module.scss"

export default function Title({ h2, icon, txt }) {
  return (
    <div className={css.title}>
      <div className={css.icon}>
        <img src={icon} alt="" />
        <h2>{h2}</h2>
      </div>
      <p>{txt}</p>
    </div>
  )
}
