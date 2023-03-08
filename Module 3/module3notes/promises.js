function produceSong(resolve, reject) {
  const artists = [
    "T Swizzle",
    "Beyonce",
    "Drake",
    "Ed Sheeran",
    "Rihanna",
    "The Weeknd",
    "Harry Styles",
  ];
  const randomArtist = Math.floor(Math.random() * artists.length);

  const songs = [
    "Unstoppable",
    "Numb Little Bug",
    "About Damn Time",
    "Music for a Sushi Restaurant",
    "Anti-hero",
    "Glimpse of Us",
  ];
  const randomSong = Math.floor(Math.random() * songs.length);

  const randomOutcome = Math.round(Math.random());

  let successResult =
    artists[randomArtist] +
    " has just realsed their newest song called " +
    songs[randomSong];
  let failResult = artists[randomArtist] + " has no new songs";

  setTimeout(
    () => (randomOutcome ? resolve(successResult) : reject(failResult)),
    1000
  );
}

//using the above WITHOUT a promise - just callbacks:
produceSong(
  (successMsg) => console.log(`Success #0: ${successMsg}`),
  (failMsg) => console.error(`Failure #0: Sorry fans, ${failMsg}`)
);

//using the above WITH a promise:

let songPromise = new Promise(produceSong);

songPromise
  .then((successMsg) => console.log(`Success #1: ${successMsg}`))
  .catch((failMsg) => console.error(`Failure #1: Sorry fans, ${failMsg}`))
  .finally(() => console.log("Song production now finalised"));

// --------
async function waitForSong(){
    try {
        let latestSong = await songPromise;
        console.log(`Success #2: ${latestSong}`);
    } catch (error) {
        console.error(`Failure #2: Sorry fans, ${error}`);
    } finally {
        console.log("Song production is now finalised");
    }
}

waitForSong();
let songResult = await waitForSong();
console.log(songResult);
