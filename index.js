let charactersFromApi = []
let characters = document.getElementById("characters")
let results = document.getElementById("results")

fetch('https://swapi.dev/api/people/')
  .then( res => res.json() )
  .then( data => {
    charactersFromApi = data.results
    console.log(data);
    data.results.forEach( (character, index) => {
      characters.innerHTML += `<option value="${index}">${character.name}</option>`
    })
  })
  .catch( errors => console.log( errors ) )

characters.addEventListener("change", e => {
  results.innerHTML = ""
  let charAttributes = ["name", 'height', "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender"]

  console.log("changing", e);
  let selectedChar = charactersFromApi[ Number(e.target.value) ]
  let dl = document.createElement("dl")
  charAttributes.forEach( attr => {
    let dt = document.createElement("dt")
    let dd = document.createElement("dd")
    dt.textContent = attr
    dt.style.textTransform = "capitalize"
    dd.textContent = selectedChar[attr]
    dl.appendChild(dt)
    dl.appendChild(dd)
  })
  console.log(dl);
  results.appendChild(dl)
  results.classList.toggle("fadeIn")
  results.classList.remove("d-none")
})
