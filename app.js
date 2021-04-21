const apiURL = "https://api.pokemontcg.io/v1/cards"
const cardContainer = document.querySelector("#card-container")
console.log(cardContainer)

async function getCard() {
    const response = await fetch(apiURL)
    const json = await response.json()

    console.log(json)
    json.cards.forEach(element => {
        const img = document.createElement("img")
        img.src = element.imageUrl
        cardContainer.append(img)
    });

}
getCard()