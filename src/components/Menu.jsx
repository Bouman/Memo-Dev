import { useState } from 'react'
import './../assets/css/Menu.scss'
import {DataMenu} from './../data/menu'
import { FaReact } from 'react-icons/fa';

function Menu() {
  const [menuOrder, setMenuOrder] = useState(DataMenu)

  return (
    <ul>
      { menuOrder && menuOrder.map((item, index) => 
          <li key={item.name} style={{height: `${menuOrder.length}%`}}>
              <a>{<item.icon />} {item.name}</a>
              <ul>
                <li key={item.sous_menu.name} style={{height: `${menuOrder[index].sous_menu.length}%`}}>
                </li>
              </ul>
          </li>
        )
      }
    </ul>
  )
}

export default Menu
