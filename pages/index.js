import BigCatCard from "@/components/BigCatCard"
import CatCard from "@/components/CatCard"
import PrdctCard from "@/components/PrdctCard"
import Title from "@/components/Title"
import css from "@/styles/index.module.scss"

export default function Home() {
  return (
    <>
      <div className={css.wrapSearch}>
        <div className={css.searchContent}>
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
      </div>
      <div className={css.wrapFavorits}>
        <Title {...favoritsTitle} />
      </div>
      <div className={css.wrapPrdcts}>
        {[prdct, prdct, prdct, prdct, prdct, prdct, prdct, prdct, prdct, prdct].map((prdct) => {
          return <PrdctCard {...prdct} />
        })}
      </div>
      <div style={{ height: "3rem" }} />

      <div className={css.wrapFavorits}>
        <Title {...catsTitle} />
      </div>
      <div className={css.wrapCatCard}>
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
      </div>

      <div style={{ height: "3rem" }} />

      <div className={css.wrapFavorits}>
        <Title {...whatNewTitle} />
      </div>
      <div className={css.wrapPrdcts}>
        {[prdct, prdct, prdct, prdct, prdct].map((prdct) => {
          return <PrdctCard {...prdct} />
        })}
      </div>

      <div style={{ height: "3rem" }} />
      <div className={css.wrapFavorits}>
        <Title {...packageTitle} />
      </div>
      <div className={css.wrapCatCard}>
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
      </div>

      <div style={{ height: "3rem" }} />
      <div className={css.wrapFavorits}>
        <Title {...tagTitle} />
      </div>
      <div className={css.wrapBigCatCard}>
        <BigCatCard />
        <BigCatCard />
        <BigCatCard />
      </div>
    </>
  )
}

const favoritsTitle = {
  h2: "המומלצים שלנו",
  txt: "הסיפור העממי הוא ביסודו שמיעתי, נמסר מדור לדור על ידי מסרנים. המסרנים הצטיינו בזיכרון מעולה ובכושר משחק. פעולת העברת הסיפור נקראת היגוד, והיא נעשתה בפני קהל, בסיטואציה עממית (משפחה, בית-ספר, וכדומה)",
  icon: "/icons/gift.svg",
}

const catsTitle = {
  h2: "קטגוריות",
  txt: "הסיפור העממי הוא ביסודו שמיעתי, נמסר מדור לדור על ידי מסרנים. המסרנים הצטיינו בזיכרון מעולה ובכושר משחק. פעולת העברת הסיפור נקראת היגוד, והיא נעשתה בפני קהל, בסיטואציה עממית ",
  icon: "/icons/cat.svg",
}

const whatNewTitle = {
  h2: "מה חדש",
  txt: "הסיפור העממי הוא ביסודו שמיעתי, נמסר מדור לדור על ידי מסרנים. המסרנים הצטיינו בזיכרון מעולה ובכושר משחק. פעולת העברת הסיפור נקראת היגוד, והיא נעשתה בפני קהל, בסיטואציה עממית ",
  icon: "/icons/star.svg",
}

const packageTitle = {
  h2: "ערכות לזוגיות משתלמת",
  txt: "הסיפור העממי הוא ביסודו שמיעתי, נמסר מדור לדור על ידי מסרנים. המסרנים הצטיינו בזיכרון מעולה ובכושר משחק. פעולת העברת הסיפור נקראת היגוד, והיא נעשתה בפני קהל, בסיטואציה עממית ",
  icon: "/icons/box.svg",
}

const tagTitle = {
  h2: "מוצרי אהבה לפי מחיר",
  txt: "הסיפור העממי הוא ביסודו שמיעתי, נמסר מדור לדור על ידי מסרנים. המסרנים הצטיינו בזיכרון מעולה ובכושר משחק. פעולת העברת הסיפור נקראת היגוד, והיא נעשתה בפני קהל, בסיטואציה עממית ",
  icon: "/icons/tag.svg",
}

const prdct = {
  name: "הסיפור העממי הוא ביסודו שמיעתי",
  price: 120,
  img: {
    alt: "",
    src: "https://images.unsplash.com/photo-1605672509921-d577ebf8542f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500",
  },
}
