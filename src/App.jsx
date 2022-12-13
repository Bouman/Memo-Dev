import { lazy, Suspense, useState } from 'react'
import './assets/css/App.scss'
import Menu from './components/Menu'
import MainContext from './contexts/MainContext'
import { DataMenu } from './data/menu'
import Loader from './components/Loader'


function App() {
const [contentLoad, setContentLoad] = useState("Home");
const [subMenuLoad, setSubMenuLoad] = useState(null);
const [menuOrder, setMenuOrder] = useState(JSON.parse(localStorage.getItem('Menu'), (k, v) => {
  return v;
}) || Object.keys(DataMenu));

  return (
    <>
    <MainContext.Provider value={{contentLoad, setContentLoad, menuOrder, setMenuOrder, subMenuLoad, setSubMenuLoad}}>
        <div className="container">
          <header className="Title">MÉMO-DEV WILD</header>
            <div className="Menu">
              <Menu />
            </div>
            <div className="Content">
                <Loader name={contentLoad} submenu={subMenuLoad}/>
            </div>
          <footer className="Footer">֍ ~ Fait avec Amour par la Promo Sept.2022 de la Wild-Code-School de Toulouse ~ ֍</footer>
        </div>
    </MainContext.Provider>
    </>
  )
}

export default App

