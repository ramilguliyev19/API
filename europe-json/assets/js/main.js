const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar");
const searchSection = document.querySelector(".search-section");
const result = document.querySelector(".result");

searchBtn.addEventListener("click", () => {
  let url = `https://restcountries.com/v3.1/subregion/europe${searchBar.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountry(data));
});

const displayCountry = (data) => {
  console.log(data);

  data.forEach((country) => {
    const div = document.createElement("div");
    div.className = "card d-flex m-5 shadow";
    div.style.width = "18rem";
    div.innerHTML = `
            <img src="${country.flag}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-text">${country.name}</h2>
            </div>
    `;
    result.appendChild(div);
  });
};
