import { FaReact, FaGitAlt, FaNodeJs, FaCss3Alt, FaSymfony } from 'react-icons/fa';
import { AiOutlineConsoleSql } from "react-icons/ai";

export const DataMenu = [ 
    {
        name: "REGEX",
        icon: FaReact,
        sous_menu:[          
            {
                name: "Commandes",
            },
        ]
    },
    {
        name: "REACT", 
        icon: FaReact,
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
        icon: FaGitAlt,
        sous_menu:[          
            {
                name: "GITOPTION",
            },
        ]
    },
    {
        name: "NODE", 
        icon: FaNodeJs,
        sous_menu:[          
            {
                name: "NODEOPTION",
            },
        ]
    },
    {
        name: "EXPRESS", 
        icon: FaReact,
        sous_menu:[          
            {
                name: "Express Serveur",
            },
            {
                name: "Express (GET,POST...)",
            },
        ]
    },
    {
        name: "CSS", 
        icon: FaCss3Alt,
        sous_menu:[          
            {
                name: "CSSOPTION",
            },
        ]
    },
    {
        name: "SQL", 
        icon: AiOutlineConsoleSql,
        sous_menu:[          
            {
                name: "SQL OPTION",
            },
        ]
    },
    {
        name: "Symfony", 
        icon: FaSymfony,
        sous_menu:[          
            {
                name: "symfony",
            },
        ]
    }
]