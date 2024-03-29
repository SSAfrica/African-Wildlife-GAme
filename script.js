{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const animals = [\
        \{ name: "Lion", interactions: ["Zebra", "Wildebeest"] \},\
        \{ name: "Zebra", interactions: ["Lion", "Grass"] \},\
        \{ name: "Elephant", interactions: ["Tree"] \},\
        \{ name: "Wildebeest", interactions: ["Lion", "Grass"] \},\
        \{ name: "Grass", interactions: ["Zebra", "Wildebeest"] \},\
        \{ name: "Tree", interactions: ["Elephant"] \}\
    ];\
\
    const gameContainer = document.getElementById('animals');\
    animals.forEach(animal => \{\
        const animalDiv = document.createElement('div');\
        animalDiv.textContent = animal.name;\
        animalDiv.addEventListener('click', () => selectAnimal(animal, animalDiv));\
        gameContainer.appendChild(animalDiv);\
    \});\
\
    document.getElementById('check-connections').addEventListener('click', checkConnections);\
\});\
\
const selectedAnimals = [];\
\
function selectAnimal(animal, element) \{\
    if (selectedAnimals.includes(animal)) \{\
        const index = selectedAnimals.indexOf(animal);\
        selectedAnimals.splice(index, 1);\
        element.classList.remove('selected');\
    \} else \{\
        selectedAnimals.push(animal);\
        element.classList.add('selected');\
    \}\
\}\
\
function checkConnections() \{\
    const connectionsDiv = document.getElementById('connections');\
    connectionsDiv.innerHTML = ''; // Clear previous connections\
    if (selectedAnimals.length !== 2) \{\
        connectionsDiv.textContent = 'Please select exactly 2 animals to check their connection.';\
        return;\
    \}\
    const [firstAnimal, secondAnimal] = selectedAnimals;\
    const validConnection = firstAnimal.interactions.includes(secondAnimal.name) || secondAnimal.interactions.includes(firstAnimal.name);\
\
    connectionsDiv.textContent = validConnection ?\
        `$\{firstAnimal.name\} and $\{secondAnimal.name\} have a connection in the ecosystem.` :\
        `$\{firstAnimal.name\} and $\{secondAnimal.name\} do not have a direct connection in the ecosystem.`;\
\}\
}
