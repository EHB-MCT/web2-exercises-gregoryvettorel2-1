console.log("script is loaded")

window.onload = function() {
    let baseurl = `http://www.omdbapi.com/?apikey=30018fed&t=`;

    let submitForm = event => {
        event.preventDefault();
        let value = document.getElementById('inputTitle').value;
        document.getElementById("placeholder").innerHTML = "";
        console.log(value);
        let result = getData(value);
    }

    async function getData(searchParameter) {
        let url = baseurl + searchParameter;

        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);

        const htmlString = `<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${data.Poster}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data.Title}</h5>
              <p class="card-text">${data.Plot}</p>
              <p class="card-text"><small class="text-muted">${data.Year}</small></p>
              <p class="card-text"><small class="text-muted">${data.Runtime}</small></p>
              <p class="card-text"><small class="text-muted">${data.Director}</small></p>
            </div>
          </div>
        </div>
      </div>`;

      const appendElements = document.getElementById("placeholder");

      appendElements.insertAdjacentHTML('afterbegin', htmlString);
    }

    document.getElementById('searchform').addEventListener('submit', submitForm);

    getData();
};