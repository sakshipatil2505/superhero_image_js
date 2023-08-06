
const Superhero_token = "1488628321964507"
const Base_url =
    `https://superheroapi.com/api.php/${Superhero_token}`

const newHeroButton = document.getElementById("newHeroButton")

const heroImageDiv = document.getElementById("heroimage")

const getSuperHero = (id) => {
    fetch(`${Base_url}/${id}`)
        .then(response => response.json())
        .then((json) => {
            const name = `<h2>${json.name}</h2>`
            // console.log("json=======", json)
            heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" height=500 width=500/>`
            console.log(json.image.url);
        })
}
const randamHero = () => {
    const numberHeros = 731
    return Math.floor(Math.random() * numberHeros + 1)
}

newHeroButton.onclick = () => getSuperHero(randamHero())