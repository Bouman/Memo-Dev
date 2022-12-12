import { useState } from 'react'
import './assets/css/App.scss'
import Menu from './components/Menu'
import MainContext from './contexts/MainContext'
import { DataMenu } from './data/menu'

/// PAGES
import Home from './pages/Home.jsx'
import UseEffect from './pages/UseEffect'

function App() {
const [contentLoad, setContentLoad] = useState("enterprise");
const [menuOrder, setMenuOrder] = useState(JSON.parse(localStorage.getItem('Menu'), (k, v) => {
  return v;
}) || DataMenu);

console.log(`Sur App`)
console.log(menuOrder)

  return (
    <>
    <MainContext.Provider value={{contentLoad, setContentLoad, menuOrder, setMenuOrder}}>
        <div className="container">
          <header className="Title">MÉMO-DEV WILD</header>
            <div className="Menu">
              <Menu />
            </div>
            <div className="Content">
              {/* {contentLoad === "UseEffect" ? <UseEffect /> : <Home />} */}

            </div>
          <footer className="Footer">֍ ~ Fait avec Amour par la Promo Sept.2022 de la Wild-Code-School de Toulouse ~ ֍</footer>
        </div>
    </MainContext.Provider>
    </>
  )
}

export default App
