const character =  {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    };


//  <div class="card" style="width: 18rem;">
//   <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" class="card-img-top" alt="Rick Sanchez">
//   <div class="card-body">
//     <h5 class="card-title">Rick Sanchez</h5>
//     <div class="card-data">
//         <div><span>Status:</span><span class="character_value">Alive</span></div>
//         <div><span>Species:</span><span class="character_value">Human</span></div>
//         <div><span>Gender:</span><span class="character_value">Male</span></div>
//     </div>
//     <a href="https://rickandmortyapi.com/api/character/1" class="btn btn-primary">Detail</a>
//   </div>
// </div>

function createCharacterCard (pers) {
    //створюємо теги
    const card = document.createElement('div')
    const img = document.createElement('img')
    const cardBody = document.createElement('div')
    const title = document.createElement('h5')
    const cardData = document.createElement('div')
    const keyStatus = document.createElement('span')
    const keySpecies = document.createElement('span')
    const keyGender = document.createElement('span')

    const rowValuesStatus = document.createElement("div")
    const rowValuesSpecies = document.createElement("div")
    const rowValuesGender = document.createElement("div")
    const status = document.createElement("span")
    const species = document.createElement("span")
    const gender = document.createElement("span")
    const button = document.createElement("a")
    // додаємо класи 
    card.classList.add("card")
    img.classList.add("card-img-top")
    cardBody.classList.add('card-body')
    title.classList.add("card-title")
    cardData.classList.add("card-data")
    status.classList.add("character_value")
    species.classList.add("character_value")
    gender.classList.add("character_value")


    button.classList.add("btn")
    button.classList.add("btn")
    button.classList.add("btn-primary")

    card.style.width = "18rem"
    // вставка данних
    img.src=pers.image
    img.alt = pers.name
    title.textContent = pers.name
    status.textContent = pers.status
    species.textContent= pers.species
    gender.textContent = pers.gender
    // button.href = pers.url
    button.textContent ="Detail"
    keyStatus.textContent = "Status:"
    keySpecies.textContent = "Species:"
    keyGender.textContent = "Gender:"
    button.setAttribute("data-bs-toggle", "modal")
    button.setAttribute("data-bs-target", "#exampleModal")
    //appendChild - вставляємо теги один в одний
    rowValuesStatus.appendChild(keyStatus)
    rowValuesStatus.appendChild(status)
    cardData.appendChild(rowValuesStatus)

    rowValuesSpecies.appendChild(keySpecies)
    rowValuesSpecies.appendChild(species)
    cardData.appendChild(rowValuesSpecies)

    rowValuesGender.appendChild(keyGender)
    rowValuesGender.appendChild(gender)
    cardData.appendChild(rowValuesGender)

    cardBody.appendChild(title)
    cardBody.appendChild(cardData)
    cardBody.appendChild(button)
    card.appendChild(img)
    card.appendChild(cardBody)
    // додавання картки на сторінку
    const main = document.querySelector('main')
    main.appendChild(card)

}

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((res) => {
    const characters = res.results
      characters.forEach(item => {
        createCharacterCard(item)
      })
  })

// стрілочні функції
// const sumTwoNumbers = (x,y) => {
//   console.log(x+y)
// }

// const ourGroup = ["Ivan", "Sofia", "Artem"]
// ourGroup.forEach((name) => {
//   console.log(name)
// })

// const pers = {
//   id: 4,
//   name: "Beth Smith",
//   status: "Alive",
//   species: "Human",
//   type: "",
//   gender: "Female",
//   origin: {
//     name: "Earth (Replacement Dimension)",
//     url: "https://rickandmortyapi.com/api/location/20",
//   },
//   location: {
//     name: "Earth (Replacement Dimension)",
//     url: "https://rickandmortyapi.com/api/location/20",
//   },
//   image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
//   episode: [
//     "https://rickandmortyapi.com/api/episode/6",
//     "https://rickandmortyapi.com/api/episode/7",
//     "https://rickandmortyapi.com/api/episode/8",
//     "https://rickandmortyapi.com/api/episode/9",
//     "https://rickandmortyapi.com/api/episode/10",
//     "https://rickandmortyapi.com/api/episode/11",
//     "https://rickandmortyapi.com/api/episode/12",
//     "https://rickandmortyapi.com/api/episode/14",
//     "https://rickandmortyapi.com/api/episode/15",
//     "https://rickandmortyapi.com/api/episode/16",
//     "https://rickandmortyapi.com/api/episode/18",
//     "https://rickandmortyapi.com/api/episode/19",
//     "https://rickandmortyapi.com/api/episode/20",
//     "https://rickandmortyapi.com/api/episode/21",
//     "https://rickandmortyapi.com/api/episode/22",
//     "https://rickandmortyapi.com/api/episode/23",
//     "https://rickandmortyapi.com/api/episode/24",
//     "https://rickandmortyapi.com/api/episode/25",
//     "https://rickandmortyapi.com/api/episode/26",
//     "https://rickandmortyapi.com/api/episode/27",
//     "https://rickandmortyapi.com/api/episode/28",
//     "https://rickandmortyapi.com/api/episode/29",
//     "https://rickandmortyapi.com/api/episode/30",
//     "https://rickandmortyapi.com/api/episode/31",
//     "https://rickandmortyapi.com/api/episode/32",
//     "https://rickandmortyapi.com/api/episode/33",
//     "https://rickandmortyapi.com/api/episode/34",
//     "https://rickandmortyapi.com/api/episode/35",
//     "https://rickandmortyapi.com/api/episode/36",
//     "https://rickandmortyapi.com/api/episode/38",
//     "https://rickandmortyapi.com/api/episode/39",
//     "https://rickandmortyapi.com/api/episode/40",
//     "https://rickandmortyapi.com/api/episode/41",
//     "https://rickandmortyapi.com/api/episode/42",
//     "https://rickandmortyapi.com/api/episode/43",
//     "https://rickandmortyapi.com/api/episode/44",
//     "https://rickandmortyapi.com/api/episode/45",
//     "https://rickandmortyapi.com/api/episode/46",
//     "https://rickandmortyapi.com/api/episode/47",
//     "https://rickandmortyapi.com/api/episode/48",
//     "https://rickandmortyapi.com/api/episode/49",
//     "https://rickandmortyapi.com/api/episode/51",
//   ],
//   url: "https://rickandmortyapi.com/api/character/4",
//   created: "2017-11-04T19:22:43.665Z",
// }