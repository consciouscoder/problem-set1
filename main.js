
var letterCapitalize = function(inputString) {
    
}

// Callback function - using MAP
var letterCapitalize = function(inputString, index){
    return inputString[0].toUpperCase() + inputString.substring(1)
}

var inputArray = []

var promptInput = prompt('Enter a string:')
inputArray = promptInput.split(' ')
var letCap = inputArray.map(letterCapitalize)

var joinStr = letCap.join(' ')

console.log(joinStr)

// =========================== WORD COUNT ===========================

var wordCount = function(inputString) {
    var inputArr = []
    var inputArr = inputString.split(' ')
    return inputArr.length 
}

var promptInput = prompt('Enter a string:')
console.log(wordCount(promptInput))


// =========================== PRIME TIME ===========================

var primeTime = function(inputNumber) {
   // 1 can not be a prime number

   if (inputNumber === 1) return false
   
   // Use Mod to check all values between 2 and Val for divisibility

   for (var i = 2; i < inputNumber; i++) {
       if (inputNumber % i === 0) {
           return false;
       }
   }
   // number is prime
   return true
}

console.log(primeTime(10))