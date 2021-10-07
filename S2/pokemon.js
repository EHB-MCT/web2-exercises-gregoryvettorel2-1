import Team from './team.js';

let team = new Team();
console.log(team.describe());

window.onload = () => {
    console.log("page is loaded");
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    async function getData() {
        const resp = await fetch(url);
        const json = await resp.json();
        const data = json.results;

        console.log(data);
        for (let x = 150; x > 0 - 1; x--) {
            //console.log(data[x]);
            //for(y = 0; y < data.length; y++){
            const resp2 = await fetch(data[x].url);
            const json2 = await resp2.json();
            console.log(json2);
            //console.log(json2.sprites.front_default);
            const htmlString = `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${json2.sprites.front_default}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${json2.name}</h5>
      <p class="card-text">Nr${json2.id}</p>
      <a href="#" class="btn btn-primary">Add to team</a>
    </div></div>`;

            const appendElements = document.getElementById("pokeblock");

            appendElements.insertAdjacentHTML('afterbegin', htmlString)
        }

        const appendElements2 = document.getElementById("pokeblock");

        appendElements2.insertAdjacentHTML('afterbegin', team.describe());

    }
    getData();

}