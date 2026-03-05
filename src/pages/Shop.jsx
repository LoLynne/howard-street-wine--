import WineCatalog from '../WineCatalog'

export default function Shop() {
  return (
    <div className="shop-page">
      <section className="shop-hero">
        <p className="section-label">Our Collection</p>
        <h1>Shop Our <em>Wines</em></h1>
        <p className="shop-subtitle">Curated selections from around the world</p>
      </section>
      <WineCatalog />
    </div>
  )
}