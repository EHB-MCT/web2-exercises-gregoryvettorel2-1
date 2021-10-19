console.log("script linked");

const key = "kFGDt3Km1HKrciMkxERzPhmefHm7hoAr";

window.onload = () => {

    let submitForm = event => {
        event.preventDefault();
        let value = document.getElementById('inputTitle').value;
        document.getElementById("placeholder").innerHTML = "";
        console.log(value);
        let result = test(value);
    }
    


    async function test(searchParameter){

    const url = `https://api.polygon.io/v1/meta/symbols/${searchParameter}/company?apiKey=${key}`;


    const resp = await fetch(url);
    const json = await resp.json();
    //const data = json.results;

    console.log(json);
    console.log(json.symbol);
    console.log(json.logo);

    let htmlString = `<div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${json.logo}" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${json.symbol}</h5>
          <p class="card-text">${json.name}</p>
          <p class="card-text"><small class="text-muted">Marketcap: ${json.marketcap}$</small></p>
          <p class="card-text"><small class="text-muted">Exchange: ${json.exchange}</small></p>
          <p class="card-text"><small class="text-muted">Industry: ${json.industry}</small></p>
        </div>
      </div>
    </div>
  </div>`;

  if(json.symbol == undefined || json.symbol == "Unknown"){
      htmlString = "Sorry, this data is unavailable or you entered an invalid ticker. Try something else!"
  }


    const appendElements =  document.getElementById("placeholder");
    appendElements.insertAdjacentHTML('afterbegin', htmlString);
    }

    document.getElementById('searchform').addEventListener('submit', submitForm);

    test();
}