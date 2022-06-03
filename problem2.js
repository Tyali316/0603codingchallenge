// Create a function that takes two dates and returns the number of days between the first and second date.

// Example 
// getDays(

//     new Date("December 29, 2018"),
  
//     new Date("January 1, 2019")
  
//   ) ➞ 3
  
  // Dates may not all be in the same month/year.

  let date1 = new Date("12/29/2018");
  let date2 = new Date("01/01/2019");
  
const dates = function date(date1, date2){
    let difference = date2.getTime() - date1.getTime();
    let totalDates = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDates;
}
console.log(dates(date1, date2));


  
  