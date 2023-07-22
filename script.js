const loader = document.querySelector(".spinner-border")
loader.style.display = "none"

function createCharacterCard(pers) {
  //створюємо теги
  const card = document.createElement("div")
  const img = document.createElement("img")
  const cardBody = document.createElement("div")
  const title = document.createElement("h5")
  const cardData = document.createElement("div")
  const keyStatus = document.createElement("span")
  const keySpecies = document.createElement("span")
  const keyGender = document.createElement("span")

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
  cardBody.classList.add("card-body")
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
  img.src = pers.image
  img.alt = pers.name
  title.textContent = pers.name
  status.textContent = pers.status
  species.textContent = pers.species
  gender.textContent = pers.gender
  // button.href = pers.url
  button.textContent = "Detail"
  keyStatus.textContent = "Status:"
  keySpecies.textContent = "Species:"
  keyGender.textContent = "Gender:"
  button.setAttribute("data-bs-toggle", "modal")
  button.setAttribute("data-bs-target", "#exampleModal")
  button.href = pers.url
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
  const main = document.querySelector("main")
  main.appendChild(card)
}
// 1) згенерувати (отримати) випадкове число в діапазоні від 1 до 42
// 2) треба записати це число в змінну і підставити її до URL адреси
let randomPageNumber = 1

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  randomPageNumber = Math.floor(Math.random() * (max - min)) + min
}
getRandomInt(0, 43)

function fillModal() {
  const modalTitle = document.querySelector(".modal-title")
  const modalBody = document.querySelector(".modal-body")

  document.querySelectorAll(".btn-primary").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      modalTitle.textContent = ""
      modalBody.querySelectorAll("a").forEach((link) => {
        link.remove()
      })
      event.target.style.backgroundColor = "red"
      const url = event.target.href
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          modalTitle.textContent = res.name
          console.log(res.episode)
          res.episode.forEach((link) => {
            const linkTag = document.createElement("a")
            linkTag.href = link
            linkTag.textContent = link.split("/")[5]
            linkTag.style.marginRight = "10px"
            modalBody.appendChild(linkTag)
          })
        })
    })
  })
}

loader.style.display = "inline-block"
fetch("https://rickandmortyapi.com/api/character?page=" + randomPageNumber)
  .then((res) => res.json())
  .then((res) => {
    const characters = res.results
    characters.forEach((item) => {
      createCharacterCard(item)
    })
    loader.style.display = "none"
    fillModal()
  })
