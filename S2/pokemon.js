window.onload = () => {
    console.log("page is loaded");
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    async function getData(){
    const resp =  await fetch(url);
    const data = await resp.json();

    console.log(data);

    for(x = 0; x > data.length; x++){
    const htmlString = '';
    }
    }
    getData();
    
}