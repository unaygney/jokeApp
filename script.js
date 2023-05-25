const joke = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click' , generateJoke)

generateJoke();

async function generateJoke() {


    const config = {
        headers: {
            'accept': 'application/json'
        }
    }

   const respond = await fetch('https://icanhazdadjoke.com', config )

   const data = await respond.json();


    joke.innerHTML = data.joke;

  



    

}