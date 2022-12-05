import { useState } from 'react'
import './../assets/css/Menu.scss'
import {DataMenu} from './../data/menu'
import { FaReact } from 'react-icons/fa';

function Menu() {
  const [menuOrder, setMenuOrder] = useState(DataMenu)

  return (
    <ul>
      { menuOrder && menuOrder.map((item, index) => 
          <li key={index}>
            <a>{item.icon} {item.name}</a>
          </li>
        )
      }
    </ul>
  )
}

export default Menu
