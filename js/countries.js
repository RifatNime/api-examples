
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();
// function displayCountries () = 
const displayCountries = counties => {
    // for (const country of countries){

    // }
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        // console.log(country);
        const  div = document.createElement('div');
        div.classList.add('country');
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.common;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        div.innerHTML = `
                    <h3>${country.name.common}</h3>
                    <p>${country.capital}</p>
                    <p>Area: ${country.area}</p>
                    <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        
                        `;
                        //<p>${country.area}</p>
                    
        countriesDiv.appendChild(div);
         
    });
}
const loadCountryByName = common => {
    const url = `https://restcountries.com/v3.1/name/${common}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.classList.add('country');
    countryDiv.innerHTML =`
            <h5>Name: ${country.name.common}</h4>
            <h5>REgion: ${country.region}</h4>
            <p>population: ${country.population}</p>
            
            <span>Flag: <img width="200px" src="${country.flags.png}"></span>
            <span>Flag: <img width="100px" src="${country.flags.svg}"></span>
            
                        `;
                    

}