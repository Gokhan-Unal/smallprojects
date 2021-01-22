// info jokes will show up here
const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  // const res = await fetch('https://icanhazdadjoke.com', config)
  // const data = await res.json()

  // jokeElement.innerHTML = data.joke

  // ! or we can destruct it
  const res = await fetch('https://icanhazdadjoke.com', config)
  const { joke } = await res.json()
  jokeElement.innerHTML = joke
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
