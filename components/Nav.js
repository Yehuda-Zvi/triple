import Link from "next/link"

export default function Nav() {
  const navIcon = () => {
    document.querySelector(".navIcon").classList.toggle("openIcon")
    document.querySelector(".mobileNavOpener").classList.toggle("openNav")
    //    document.querySelector(".headerNavMobile").classList.toggle("navBlack")
  }

  const itemClick = (id) => {
    document.getElementById(id).classList.toggle("openBoxNav")
  }

  return (
    <>
      <nav className="navDesktop" id="nav">
        <div className="navRight">
          {navItems.map((item) => {
            return <p>{item}</p>
          })}
        </div>

        <p>{middle}</p>

        <div className="navLeft">
          <div className="cartNav">
            <img src="/icons/cart.svg" alt="" />
            <p>
              עגלת קניות / <b>&#8362;{sum}</b>
            </p>
          </div>
          <div className="loginNav">
            <img src="/icons/login.svg" alt="" />
            <button>הרשמה</button>
            <p>|</p>
            <button>התחברות</button>
          </div>
        </div>
      </nav>

      <div className="mobileNav">
        <div className="headerNavMobile">
          <div className="navIcon" onClick={navIcon} />
          <div className="cartNav">
            <img src="/icons/cart.svg" alt="" />
            <p>
              <b>&#8362;{sum}</b>
            </p>
          </div>
        </div>
        <nav className="mobileNavOpener" id="mbNav">
          <div className="mainNavItems">
            {items.map((item) => {
              return (
                <div style={{ borderBottom: "solid #eee thin" }}>
                  <p onClick={() => itemClick(item)}>
                    {item} <img src="/icons/arrow.svg" alt="" />
                  </p>
                  <div className="boxNav" id={item}>
                    <Link href="#">sdfsdf</Link>
                    <Link href="#">sdfsdf</Link>
                  </div>
                  {/* <hr /> */}
                </div>
              )
            })}
          </div>
          <div className="secondryNavItems">
            {navItems.map((item) => {
              return <Link href="#">{item}</Link>
            })}
          </div>
        </nav>
      </div>
      <p className="websiteTitle">{middle}</p>
    </>
  )
}

const navItems = ["איך מגיעים", "מי אנחנו", "סיטונאות", "בלוג מאמרים", "איזורי פעילות"]
const middle = "ביגוד סקסי ותחפושות 99 ליחידה וגם 2 + 1 חינם!"
const sum = 679

const items = [
  "חנות סקס",
  "מוצרים לאישה",
  "מוצרים לגבר",
  "מוצרים לזוגות",
  "מוצרים אנאליים",
  "מוצרים מיוחדים ועזרים",
  "Fun Factory ישראל",
  "לסביות",
  "גייז",
  "ערכות וחבילות אהבה",
  "תכשירים",
]
