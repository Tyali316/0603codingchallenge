// Create a function that takes two dates and returns the number of days between the first and second date.
// psuedo- code:
//create a function
//that takes two dates
// returns the days in between

// example getDays(

//     new Date("June 14, 2019"),
  
//     new Date("June 20, 2019")
  
//   ) ➞ 6




  let date1 = new Date("06/14/2019");
  let date2 = new Date("06/20/2019");
  
const dates = function date(date1, date2){
    let difference = date2.getTime() - date1.getTime();
    //used the math.ceil method to convert the milliseconds into days...difference by the 1000 milliseconds * (60seconds * 60mins) * 24hrs
    let totalDates = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDates;
}
console.log(dates(date1, date2));

