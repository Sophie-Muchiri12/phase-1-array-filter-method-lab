// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    return drivers.filter(driver => 
      typeof driver === 'string' && driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, letters) {
    const lengthOfLetters = letters.length;
    return drivers.filter(driver => 
      typeof driver === 'string' && driver.slice(0, lengthOfLetters).toLowerCase() === letters.toLowerCase()
    );
  }
  
  // matchName function
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  module.exports = { findMatching, fuzzyMatch, matchName };