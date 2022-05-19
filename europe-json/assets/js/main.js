const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar");
const searchSection = document.querySelector(".search-section");
const result = document.querySelector(".result");

fetch("https://restcountries.com/v3.1/subregion/europe")
    .then((res) => res.json())
    .then((data) => displayCountry(data));

function displayCountry(data) {
  // console.log(data)
  
  data.forEach((country) => {
    console.log(Object.values(country.currencies)[0].name)
    const div = document.createElement("div");
    div.className = "card d-flex m-5 shadow";
    div.style.width = "18rem";
    div.innerHTML = `
            <img src="${country.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-text">${country.name.common}</h2>
                <h2 class="card-text">${country.population}</h2>
                <h2 class="card-text">${country.capital}</h2>
                <h2 class="card-text">${country.continents}</h2>
                <h2 class="card-text">${country.timezones}</h2>
                <h2 class="card-text">${Object.values(country.currencies)[0].name}</h2>

            </div>

    `;
    result.appendChild(div);
  });
}
