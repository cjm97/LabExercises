//are there people older than 60 in this array? write a function that returns either yes there are people older than 60 or not.


const people = [
    {firstName: 'Wendy', lastName:'Darton', age: 52, location: 'QLD'},
    {firstName: 'Teddy', lastName:'Bear', age: 4, location: 'TAS'},
    {firstName: 'Tom', lastName:'Lee', age: 32, location: 'VIC'},
    {firstName: 'Stevie', lastName:'Simms', age: 30, location: 'ADL'},
    {firstName: 'Billy', lastName:'Bob', age: 64, location: 'VIC'}
  ]
  

  let ages = people.filter(person => person.age > 60);
  
  const olderThanSixty = (array) => {
    if (array.some(person => person.age > 60)) {
        return "Someone is older than 60";
    } else {
        return "all young guns";
    }
  }

  console.log(olderThanSixty(people));

  