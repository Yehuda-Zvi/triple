import css from "@/styles/index.module.scss"

export default function Home() {
  return (
    <div className={css.wrap}>
      <p className={css.heroTxt}>משלוח חינם עד הבית</p>
      <div className={css.dots3}>
        <p>דיסקרטי</p>
        <img src="/icons/dot.svg" alt="" />
        <p>מהיר</p>
        <img src="/icons/dot.svg" alt="" />
        <p>מהיום למחר</p>
      </div>
      <div className={css.search}>
        <input type="text" />
        <img src="/icons/search.svg" alt="" />
      </div>
      <div className={css.btns3}>
        <button>מוצרים לאישה</button>
        <button>מוצרים לגבר</button>
        <button>מוצרי SALE</button>
      </div>
    </div>
  )
}
