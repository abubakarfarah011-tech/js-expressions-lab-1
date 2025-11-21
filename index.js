//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

//! Start by creating the variables for the data recorded
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

//! Then create the variables for the conversion of the temperatures to Celsius
 function convertFtoC(tempF) {
  return (tempF - 32) * 5 / 9;
}

function convertCtoF(tempC){
   return (tempC * 9 / 5) + 32
}
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

const day1C = convertFtoC(day1TempF);
const day2C = day2TempC;
const day3C = convertFtoC(day3TempF);
const day4C = day4TempC;
const day5C = convertFtoC(day5TempF);
const day6C = day6TempC;
const day7C = convertFtoC(day7TempF);
const day8C = day8TempC;
const day9C = convertFtoC(day9TempF);
const day10C = day10TempC;
const day11C = convertFtoC(day11TempF);
const day12C = day12TempC;
const day13C = convertFtoC(day13TempF);
const day14C = day14TempC;
const day15C = convertFtoC(day15TempF);
const day16C = day16TempC;
const day17C = convertFtoC(day17TempF);
const day18C = day18TempC;
const day19C = convertFtoC(day19TempF);
const day20C = day20TempC;
const day21C = convertFtoC(day21TempF);
const day22C = day22TempC;
const day23C = convertFtoC(day23TempF);
const day24C = day24TempC;
const day25C = convertFtoC(day25TempF);
const day26C = day26TempC;
const day27C = convertFtoC(day27TempF);
const day28C = day28TempC;
const day29C = convertFtoC(day29TempF);
const day30C = day30TempC;
//! Start the calculation of the total temperatures
function addCelciusTemps() {
  console.log("Adding Celsius Temps");
}
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const tot_temperature_in_celsius = day1C + day2C + day3C + day4C + day5C + day6C + day7C + day8C + day9C + day10C + day11C + day12C + day13C + day14C + day15C + day16C + day17C + day18C + day19C + day20C + day21C + day22C + day23C + day24C + day25C + day26C + day27C + day28C + day29C + day30C;

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
const day2F = convertCtoF(day2TempC)
const day4F = convertCtoF(day4TempC)
const day6F = convertCtoF(day6TempC)
const day8F = convertCtoF(day8TempC)
const day10F = convertCtoF(day10TempC)
const day12F = convertCtoF(day12TempC)
const day14F = convertCtoF(day14TempC)
const day16F = convertCtoF(day16TempC)
const day18F = convertCtoF(day18TempC)
const day20F = convertCtoF(day20TempC)
const day22F = convertCtoF(day22TempC)
const day24F = convertCtoF(day24TempC)
const day26F = convertCtoF(day26TempC)
const day28F = convertCtoF(day28TempC)
const day30F = convertCtoF(day30TempC)

const tot_temperature_in_fahrenheit = day2F+day4F+day6F+day8F+day10F+day12F+day14F+day16F+day18F+day20F+day22F+day24F+day26F+day28F+day30F + day1TempF + day3TempF + day5TempF + day7TempF + day9TempF + day11TempF + day13TempF + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF + day25TempF + day27TempF + day29TempF;
//! Console.log the results for your own inspection if you'd like
let avg_temperature_in_fahrenheit = avg_temperatureF()
let avg_temperature_in_celsius = avg_temperatureC() 
function avg_temperatureF (){
  return parseFloat(tot_temperature_in_fahrenheit / 30);
}

function avg_temperatureC (){
  return parseFloat(tot_temperature_in_celsius / 30);
}
//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};