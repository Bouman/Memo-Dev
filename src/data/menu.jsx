import { FaReact, FaGitAlt, FaNodeJs, FaCss3Alt, FaSymfony } from 'react-icons/fa';
import { AiOutlineConsoleSql } from "react-icons/ai";

export const iconMap = {
    1: <FaReact key="1"/>,
    2: <FaGitAlt key="2"/>,
    3: <FaNodeJs key="3"/>,
    4: <FaCss3Alt key="4"/>,
    5: <FaSymfony key="5"/>,
    6: <AiOutlineConsoleSql key="6"/>
}

export const DataMenu = [ 
    {
        name: "REGEX",
        icon: 1,
        sous_menu:[          
            {
                name: "Commandes",
            },
        ]
    },
    {
        name: "REACT", 
        icon: 1,
        sous_menu:[
            {
                name: "UseEffect",
            },
            {
                name: "React Router",
            },
            {
                name: "Axios & appel API",
            },
            {
                name: "Context",
            },
        ]
    },
    {
        name: "GIT", 
        icon: 2,
        sous_menu:[          
            {
                name: "GITOPTION",
            },
        ]
    },
    {
        name: "NODE", 
        icon: 3,
        sous_menu:[          
            {
                name: "NODEOPTION",
            },
        ]
    },
    {
        name: "EXPRESS", 
        icon: 1,
        sous_menu:[          
            {
                name: "EXPRESSOPTION",
            },
        ]
    },
    {
        name: "CSS", 
        icon: 4,
        sous_menu:[          
            {
                name: "CSSOPTION",
            },
        ]
    },
    {
        name: "SQL", 
        icon: 6,
        sous_menu:[          
            {
                name: "SQL OPTION",
            },
        ]
    },
    {
        name: "Symfony", 
        icon: 5,
        sous_menu:[          
            {
                name: "symfony",
            },
        ]
    }
]