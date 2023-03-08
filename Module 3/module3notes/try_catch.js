try {
  noSuchVariable;
} catch (err) {
  console.log("The engine didn't understand this code.");
  // console.log(err);
  console.log(err.message);
}

console.log(`Still prints after catching errors above`);

//write a function checkDate that throws an error if the date is parsed as invalid and implements catch/finally.

console.log(`\n\ncheckDate Function Testing`);

const testDate = new Date("this is not a date");
// console.log(testDate);
// console.log(testDate == 'Invalid Date');
const checkDate = (dateInput) => {
  try {
    const date = new Date(dateInput);
    if (date == "Invalid Date") {
      throw new SyntaxError("Date parsed is not a valid date");
    }
    return true;
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.log("Error invalid date parsed: " + err.message);
    } else {
      throw err;
    }
    return false;
  } finally {
    console.log("Date validation attended");
  }
};
 

console.log(`\nTurtleTest`);
checkDate("turtle");

console.log(`\nInvald Date Test`);
checkDate(testDate);

console.log(`\nCurrent Date Test`);
const today = new Date();
console.log(today);
checkDate(today);
