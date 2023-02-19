export default function Header() {
  return (
    <div className="mainHeader">
      <div className="mainHeaderTitle">
        <h1>
          טריפל <b>איקס</b>
        </h1>
        <p>מוצרי אהבה</p>
      </div>
      <nav>
        {items.map((item) => (
          <item>
            <div className="mainHeaderBtn">
              <button>{item}</button>
              <img src="/icons/arrow.svg" alt="" />
            </div>

            <div className="openList">
              <p>פריט בתפריט</p>
              <p>פריט בתפריט</p>
              <p>פריט בתפריט</p>
            </div>
          </item>
        ))}
      </nav>
    </div>
  )
}

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
