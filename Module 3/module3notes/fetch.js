//first run these commands :
// 1. npm init (to initialise this script with the npm)
// 2. npm install node-fetch (to install the browser function 'fetch' for node.js)
// 3. add "type": "module", to package.json
import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/posts/10") //sample public JSON API for use in testing
  .then((response) => response.json()) //this gets the entire HTTP response, so we use the .json() function which also returns a promise
  .then((json) => console.log(`Post #10: ${json.title}`)) //this promise includes the json returned from the fetched URL if successful
  .catch((error) => console.error(`Caught error: ${error}`)) //can optionally include this to show any errors
  .finally(() => console.log("done fetching")); //can optionally include this after all fetching done

// try and get both fetch.then and await fetch type syntaxes working.
// create a function similar to fetchposttitle that grabs the body of a particular post

// await 
let post5 = await fetch (`https://jsonplaceholder.typicode.com/posts/5`);
let post5Json = await post5.json();
console.log(`post #5: ${JSON.stringify(post5Json)}`);

// .then 
fetch(`https://jsonplaceholder.typicode.com/posts/2`)
    .then((response) => response.json())
    .then((json) => console.log(`Post #2: ${json.title}`))
 
// supplied function example post ID
async function getPostTitle(postId) {
  let post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )
  let postJson = await post.json();
  return postJson.title;
}
let post3Title = await getPostTitle(3);
console.log(`Post 3 Title: ${JSON.stringify(post3Title)}`);



// user ID self example - gets post user id. 
async function getPostUserId(userID){
    let user = await fetch(`https://jsonplaceholder.typicode.com/posts/${userID}`);
    let userJson = await user.json();
    return userJson.userId;
}
let post1UserId = await getPostUserId(1);

console.log(`Post 1 User Id : ${JSON.stringify(post1UserId)}`);


