import React from 'react';
import { useState, useRef } from 'react';
import './../assets/css/Menu.scss'
import MainContext from '../contexts/MainContext';
import { FaReact, FaGitAlt, FaNodeJs, FaCss3Alt, FaSymfony } from 'react-icons/fa';
import { AiOutlineConsoleSql } from "react-icons/ai";

function Menu() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [isDrop, setIsDrop] = useState("");
  const { menuOrder, setMenuOrder } = React.useContext(MainContext);
  const { contentLoad, setContentLoad } = React.useContext(MainContext);

  // Menu Handle
  const handleToggle = (menuname) => {
    setIsDrop(menuname);
  };
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          setIsDrop("");
        }
      }
    }
  }

  // Drag and drop
  const dragStart = (e, position) => {
    dragItem.current = position;
    // console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(e.target.innerHTML);
  };
 
  const drop = (e) => {
    const copyListItems = [...menuOrder];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    localStorage.setItem("Menu", JSON.stringify(copyListItems, (key, val) => {
        if (typeof val === 'function') {
          return ((JSON.stringify(val.toString().match(/(?:^|(?<=function ))([a-zA-Z]+)(?:$|(?=\())/g))).replace('["', '')).replace('"]', '')
        }
      return val;
    }));
    setMenuOrder(copyListItems);
  };

return (
    <ul>
      {menuOrder && menuOrder.map((menu, index) => 
          <li key={index}
              style={{height: `${menuOrder.length}%`}}>
              <button 
              onClick={(e) => handleToggle(menu.name, e)} 
              className="dropbtn"
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              onDragOver={(e) => e.preventDefault()}
              draggable>
                {<menu.icon />}{menu.name}
              </button>
                <ul id="myDropdown" className={isDrop === menu.name ? `dropdown-content ${menu.name} show` : `dropdown-content ${menu.name}`}>
                  { menuOrder[index].sous_menu.map((submenu) =>
                      <li key={submenu.name} style={{height: `${submenu.length}%`}}>
                        <button onClick={setContentLoad(submenu.name)}>{submenu.name}</button>
                      </li>
                  )}
                </ul>
          </li>
        )
      }
    </ul>
  )
}

export default Menu
