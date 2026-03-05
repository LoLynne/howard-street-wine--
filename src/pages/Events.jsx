 
export default function Events() {
  const events = [
    {
      date: "MAR 14",
      title: "Friday Night Tasting",
      description: "Join us for a guided tasting of 6 new arrivals from the Rhône Valley.",
      time: "6:00 PM – 8:00 PM",
      price: "$35 per person",
      spots: "12 spots left"
    },
    {
      date: "MAR 21",
      title: "Wine & Cheese Pairing",
      description: "An evening exploring classic and unexpected wine and cheese combinations.",
      time: "6:30 PM – 8:30 PM",
      price: "$45 per person",
      spots: "8 spots left"
    },
    {
      date: "MAR 28",
      title: "Natural Wine Night",
      description: "Discover the world of natural, biodynamic and organic wines.",
      time: "6:00 PM – 8:00 PM",
      price: "$40 per person",
      spots: "15 spots left"
    },
    {
      date: "APR 4",
      title: "Spring Wine Club Gathering",
      description: "Exclusive event for wine club members featuring spring releases.",
      time: "7:00 PM – 9:00 PM",
      price: "Members only",
      spots: "20 spots left"
    },
    {
      date: "APR 11",
      title: "Beginner's Wine Class",
      description: "A fun introduction to wine for those just starting their journey.",
      time: "5:30 PM – 7:30 PM",
      price: "$30 per person",
      spots: "10 spots left"
    },
    {
      date: "APR 18",
      title: "Italian Wine Evening",
      description: "A deep dive into the incredible diversity of Italian wines.",
      time: "6:00 PM – 8:00 PM",
      price: "$50 per person",
      spots: "12 spots left"
    }
  ]

  return (
    <div className="events-page">
      <section className="events-hero">
        <p className="section-label">What's Happening</p>
        <h1>Events & <em>Tastings</em></h1>
        <p className="events-subtitle">Join us for memorable wine experiences</p>
      </section>

      <section className="events-content">
        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-date">{event.date}</div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p className="event-desc">{event.description}</p>
                <div className="event-meta">
                  <span>🕐 {event.time}</span>
                  <span>🎟️ {event.price}</span>
                  <span>👥 {event.spots}</span>
                </div>
              </div>
              <button className="btn-primary">Reserve</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
