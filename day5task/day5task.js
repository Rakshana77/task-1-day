// //PERSON CLASS
// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   displayDetails() {
//     console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
//   }
// }

// const person1 = new Person("Rakshana", 24, "female");

// person1.displayDetails();

// // UBER PRICE
// class UberPriceCalculator {
//   constructor(distance, duration, surgeMultiplier) {
//     this.distance = distance;
//     this.duration = duration;
//     this.surgeMultiplier = surgeMultiplier || 1; 
//   }

//   calculatePrice() {
//     const baseFare = 5;
//     const distanceRate = 70
//     const durationRate = 2

//     const totalFare = baseFare + (this.distance * distanceRate) + (this.duration * durationRate);
//     const finalPrice = totalFare * this.surgeMultiplier;

//     return finalPrice;
//   }
// }

// const uberTrip = new UberPriceCalculator(10, 20, 1.2); 
// const totalPrice = uberTrip.calculatePrice();
// console.log(`Uber Price: ${totalPrice.toFixed(2)}`);

//MOVIES
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
}

// Creating an instance of the class Movie
const casinoRoyale = new Movie("LEO", "LYCA Productions", "PG");

// Example usage of getPG method
const movies = [
  new Movie("kala", "Studio1", "PG"),
  new Movie("varma", "Studio2", "PG-13"),
  new Movie("kgf", "Studio3", "PG"),
  new Movie("RRR", "Studio4", "R"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);



