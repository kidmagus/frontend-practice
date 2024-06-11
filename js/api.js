// fetch("https://reqres.in/api/users/", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "User 1",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data));

//Using then and catch
const fetchBtn = document.querySelector(".fetch__btn");

fetchBtn.addEventListener("click", () => {
  const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch");
      }
      return response.json();
    })
    .then((data) => {
      const pokemonSprite = data.sprites.back_default;
      const imgElement = document.getElementById("pokemonSprite");

      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";

      console.log(data);
      const pokemonData = JSON.stringify(data.types);
      const dataElement = document.querySelector(".pokemonData");
      dataElement.innerText = pokemonData;
    })

    .catch((error) => console.error(error));
});

//Using async and await
// async function fetchData() {
//   try {
//     const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//     if (!response.ok) {
//       throw new Error("Could not fetch");
//     }

//     const data = await response.json();

//     const pokemonSprite = data.sprites.front_default;
//     const imgElement = document.getElementById("pokemonSprite");

//     imgElement.src = pokemonSprite;
//     imgElement.style.display = "block";
//   } catch (error) {
//     console.error(error);
//   }
// }
