import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

class App extends Component {
  state = {
    imgs: [
      '1900/1900',
      '1300/1500',
      '1400/1600'
    ]
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Memer"/>

        {/* pack timeline in the container */}

        <main className="Timeline">
          {
            this.state.imgs.map((item, index) => {
              return (<Card key={index} link={`//unsplash.it/${item}`} />)
            })
          }
          {/* <Card link="https://img-9gag-fun.9cache.com/photo/az9AA7b_460swp.webp"/> */}
        </main>

        <Footer/>
      </div>
    )
  }
}

export default App
