import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import data from "./data"

export default function App() {
    const destinations = data.map(spot => {
      return (
        <Main 
          key={spot.id}
          spot={spot}
        />
      )
    })
    return (
        <div>
            <Header />
            <section className="spot-list">
              {destinations}
            </section>
        </div>
    )
}