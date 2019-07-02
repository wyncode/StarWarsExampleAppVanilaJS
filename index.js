let select = document.getElementById('characters')
let results
let htmlResults = document.getElementById('results')

// request characters
fetch( 'https://swapi.co/api/people' )
  .then( response => response.json() )
  .then( data => {
    results = data.results
    results.forEach( (character, i) => {
      select.innerHTML += `<option value='${i}'>${character.name}</option>`
    })
  })

select.addEventListener('change', ev => {
  console.log(ev.target.value)
  let character = results[ ev.target.value ]
  let content = `
    <dl>
      <dt>Name:</dt>
      <dd>${character.name}</dd>
    </dl>
  `
  htmlResults.innerHTML = content
  htmlResults.classList.remove('d-none')
})
