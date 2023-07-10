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

function createCharacterCard (imagePath, nameCharacter, valueStatus, valueSpecies, valueGender, href) {
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
    img.src=imagePath
    img.alt = nameCharacter
    title.textContent = nameCharacter
    status.textContent = valueStatus
    species.textContent= valueSpecies
    gender.textContent = valueGender
    button.href = href
    button.textContent ="Detail"
    keyStatus.textContent = "Status:"
    keySpecies.textContent = "Species:"
    keyGender.textContent = "Gender:"
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

createCharacterCard(character.image,character.name, character.status, character.species,character.gender, character.url )