import { useState, useMemo } from "react";
import winesData from './wines.json';
const WINES = winesData;

/**
 * Maps internal category keys to human-readable display labels.
 * @type {Object.<string, string>}
 */
const CATEGORY_LABELS = {
  red_wines: "Red Wines",
  white_wines: "White Wines",
  rose_orange_wines: "Rosé & Orange",
  reserve_wines: "Reserve",
  red_dispenser: "On Tap · Red",
  gold_dispenser: "On Tap · Gold",
  wine_club: "Wine Club",
};
/**
 * Maps internal category keys to their associated brand colors for UI display.
 * @type {Object.<string, string>}
 */
const CATEGORY_COLORS = {
  red_wines: "#8B1A1A",
  white_wines: "#C4A35A",
  rose_orange_wines: "#C47A5A",
  reserve_wines: "#4A3728",
  red_dispenser: "#6B1414",
  gold_dispenser: "#B8962E",
  wine_club: "#2C3E50",
};
/**
 * The main wine catalog component for Howard Street Wine Merchant.
 * ...
 */
export default function WineCatalog({ wines = WINES.wines }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("title");

  const categories = useMemo(() => {
    const cats = ["all", ...new Set(wines.map((w) => w.category))];
    return cats;
  }, [wines]);

  const filtered = useMemo(() => {
    let list = wines;
    if (activeCategory !== "all") list = list.filter((w) => w.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (w) =>
          w.title?.toLowerCase().includes(q) ||
          w.vendor?.toLowerCase().includes(q) ||
          w.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return [...list].sort((a, b) => {
      if (sortBy === "price_asc") return parseFloat(a.price || 0) - parseFloat(b.price || 0);
      if (sortBy === "price_desc") return parseFloat(b.price || 0) - parseFloat(a.price || 0);
      return (a.title || "").localeCompare(b.title || "");
    });
  }, [wines, activeCategory, search, sortBy]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .wc-root {
          font-family: 'Raleway', sans-serif;
          background: #0e0a07;
          color: #e8ddd0;
          min-height: 100vh;
          padding: 0 0 80px;
        }

        /* HERO */
        .wc-hero {
          position: relative;
          padding: 72px 40px 56px;
          text-align: center;
          border-bottom: 1px solid #2a1f14;
          background: linear-gradient(180deg, #1a0f08 0%, #0e0a07 100%);
          overflow: hidden;
        }
        .wc-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,90,43,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .wc-store-label {
          font-family: 'Raleway', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #8B5A2B;
          margin-bottom: 16px;
        }
        .wc-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 300;
          font-style: italic;
          color: #f0e6d8;
          line-height: 1.1;
          margin-bottom: 12px;
          letter-spacing: 0.02em;
        }
        .wc-hero-sub {
          font-size: 13px;
          font-weight: 300;
          color: #7a6a5a;
          letter-spacing: 0.1em;
        }

        /* CONTROLS */
        .wc-controls {
          max-width: 1200px;
          margin: 0 auto;
          padding: 36px 40px 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .wc-search-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .wc-search {
          flex: 1;
          min-width: 220px;
          background: #1a1208;
          border: 1px solid #2e2010;
          border-radius: 2px;
          padding: 10px 16px;
          color: #e8ddd0;
          font-family: 'Raleway', sans-serif;
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.05em;
          outline: none;
          transition: border-color 0.2s;
        }
        .wc-search::placeholder { color: #4a3a2a; }
        .wc-search:focus { border-color: #8B5A2B; }
        .wc-sort {
          background: #1a1208;
          border: 1px solid #2e2010;
          border-radius: 2px;
          padding: 10px 14px;
          color: #e8ddd0;
          font-family: 'Raleway', sans-serif;
          font-size: 13px;
          font-weight: 300;
          cursor: pointer;
          outline: none;
        }
        .wc-sort:focus { border-color: #8B5A2B; }

        /* CATEGORY TABS */
        .wc-tabs {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .wc-tab {
          background: none;
          border: 1px solid #2e2010;
          border-radius: 2px;
          padding: 7px 16px;
          color: #7a6a5a;
          font-family: 'Raleway', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
        }
        .wc-tab:hover { border-color: #8B5A2B; color: #c4a882; }
        .wc-tab.active {
          background: #8B5A2B;
          border-color: #8B5A2B;
          color: #f0e6d8;
        }

        /* RESULTS COUNT */
        .wc-count {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 40px 0;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4a3a2a;
        }

        /* GRID */
        .wc-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 40px 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        /* CARD */
        .wc-card {
          background: #130e08;
          border: 1px solid #1e1509;
          border-radius: 3px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
          cursor: pointer;
        }
        .wc-card:hover {
          transform: translateY(-3px);
          border-color: #3d2810;
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        }
        .wc-card-img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: contain;
          background: #1a1208;
          padding: 20px;
        }
        .wc-card-img-placeholder {
          width: 100%;
          aspect-ratio: 3/4;
          background: linear-gradient(145deg, #1a1208 0%, #0e0a07 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wc-card-img-placeholder span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          opacity: 0.15;
        }
        .wc-card-body {
          padding: 18px 20px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .wc-card-cat {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .wc-cat-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .wc-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-weight: 400;
          color: #e8ddd0;
          line-height: 1.3;
          flex: 1;
        }
        .wc-card-vendor {
          font-size: 11px;
          color: #5a4a38;
          letter-spacing: 0.08em;
        }
        .wc-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid #1e1509;
          margin-top: auto;
        }
        .wc-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #c4a882;
        }
        .wc-badge {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 2px;
        }
        .wc-badge.available { background: #1a2e1a; color: #6ab06a; }
        .wc-badge.sold-out { background: #2e1a1a; color: #a06060; }

        /* EMPTY STATE */
        .wc-empty {
          max-width: 1200px;
          margin: 60px auto;
          padding: 0 40px;
          text-align: center;
        }
        .wc-empty p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-style: italic;
          color: #3a2a1a;
        }

        /* DIVIDER LINE */
        .wc-divider {
          width: 40px;
          height: 1px;
          background: #8B5A2B;
          margin: 12px auto 0;
          opacity: 0.5;
        }

        @media (max-width: 600px) {
          .wc-hero { padding: 48px 20px 40px; }
          .wc-controls, .wc-count, .wc-grid { padding-left: 20px; padding-right: 20px; }
          .wc-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
        }
      `}</style>

      <div className="wc-root">
        {/* Hero */}
        <div className="wc-hero">
          <div className="wc-store-label">Howard Street Wine Merchant · Omaha, NE</div>
          <h1>The Wine Cellar</h1>
          <div className="wc-hero h1 wc-divider" />
          <p className="wc-hero-sub" style={{marginTop: 16}}>
            {wines.length} bottles curated by craftsmanship, expression & integrity
          </p>
        </div>

        {/* Controls */}
        <div className="wc-controls">
          <div className="wc-search-row">
            <input
              className="wc-search"
              placeholder="Search wines, producers, varietals…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select className="wc-sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="title">Sort: Name</option>
              <option value="price_asc">Sort: Price ↑</option>
              <option value="price_desc">Sort: Price ↓</option>
            </select>
          </div>
          <div className="wc-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`wc-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "all" ? "All Wines" : CATEGORY_LABELS[cat] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="wc-count">
          {filtered.length} {filtered.length === 1 ? "bottle" : "bottles"} found
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="wc-empty">
            <p>No wines match your search.</p>
          </div>
        ) : (
          <div className="wc-grid">
            {filtered.map((wine) => {
              const catColor = CATEGORY_COLORS[wine.category] || "#8B5A2B";
              return (
                <a
                  key={wine.id}
                  className="wc-card"
                  href={wine.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {wine.image_url ? (
                    <img className="wc-card-img" src={wine.image_url} alt={wine.title} loading="lazy" />
                  ) : (
                    <div className="wc-card-img-placeholder">
                      <span>🍷</span>
                    </div>
                  )}
                  <div className="wc-card-body">
                    <div className="wc-card-cat" style={{ color: catColor }}>
                      <div className="wc-cat-dot" style={{ background: catColor }} />
                      {CATEGORY_LABELS[wine.category] || wine.category}
                    </div>
                    <div className="wc-card-title">{wine.title}</div>
                    {wine.vendor && <div className="wc-card-vendor">{wine.vendor}</div>}
                    <div className="wc-card-footer">
                      <div className="wc-price">
                        {wine.price ? `$${parseFloat(wine.price).toFixed(2)}` : "—"}
                      </div>
                      <div className={`wc-badge ${wine.available ? "available" : "sold-out"}`}>
                        {wine.available ? "In Stock" : "Sold Out"}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
