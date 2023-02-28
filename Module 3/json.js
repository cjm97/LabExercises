const room = {
    number: 23
}

const meeting = {
    title: 'Conference',
    participants: ['John', 'Ann']
}

// console.log(meeting);

const stringMeeting = JSON.stringify(meeting);
const parsedMeeting = JSON.parse(stringMeeting);

console.log(stringMeeting);
console.log(parsedMeeting);


 //create a circular reference
meeting.place = room; // meeting has a property that refers to room
room.occupiedBy = meeting; // and room has a property that refers to meeting 

const meetingString = JSON.stringify(meeting, (key, value) => {
    console.log('key: ' +key);
    console.log('value: ' +value);

    if ( key != '' && value == meeting) return undefined;
    
    return value;
}); 