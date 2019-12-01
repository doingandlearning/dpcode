var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('01-input')
});

var fuel = 0;

lineReader.on('line', function (line) {
  fuel = fuel + fuel_needed(line)
  console.log(fuel)
});

function fuel_needed(mass) {
  var result = Math.floor(mass/3) - 2
  if (result < 0) {
    result = 0
  }

  if ( result > 0) {
    result = result + fuel_needed(result)
  }
 
  return result
}
