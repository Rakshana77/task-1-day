
let xhr = new XMLHTTPRequest()
xhr.open('GET','https://restcountries.com/v3.1/all')
xhr.onload = function () {
    const response=JSON.parse(xhr.responseText)
   // Problem 1: Get all the countries from Asia continent/region using Filter function
    const asiaCountries = response.filter(country => country.region === "Asia");
    console.log("Countries in Asia:", asiaCountries);

    // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function
    const lowPopulationCountries = response.filter(country => {
      const population = country.population?.value || 0; 
      return population < 200000;
    });
    console.log("Countries with population less than 2 lakhs:", lowPopulationCountries);

    // Problem 3: Print name, capital, and flag using forEach function
    console.log("Details of countries:");
    data.forEach(country => {
      const name = country.name.common || "N/A";
      const capital = country.capital?.[0] || "N/A";
      const flag = country.flags?.[0] || "N/A";
      console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });

    // Problem 4: Print the total population of countries using reduce function
    const totalPopulation = response.reduce((sum, country) => {
      const population = country.population?.value || 0; 
      return sum + population;
    }, 0);
    console.log("Total population of countries:", totalPopulation);

    // Problem 5: Print the country that uses US dollars as currency
    const usDollarCountries = response.filter(country =>
      country.currencies?.USD ? country.currencies.USD : false
    );
    console.log("Countries using US dollars:", usDollarCountries);
  
   


};
xhr.send();