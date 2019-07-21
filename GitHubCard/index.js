/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/ccurry20");

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

class GitCards { 
  constructor(gitDataArray) { 
    const entry = document.querySelector('.cards');
    gitDataArray.forEach((gitData) => {
      entry.appendChild(this.cardCreator(gitData))
    });
  }
}

function cardCreator(user) {
  const div = document.createElement('div');
  div.classList.add('card');

  const image = document.createElement('img');
  image.src = user; 
  div.appendChild(image);
  //axios.get("https://avatars1.githubusercontent.com/u/19153270?v=4");

  const div2 = document.createElement('div');
  div2.classList.add('card-info');
  image.appendChild('div2');

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  div2.appendChild('h3');

  const p = document.createElement('p');
  p.classList.add('username');

  return div; 


}

axios.get('https://api.github.com/users/ccurry20')
.then((axiosData) => {
  console.log('axiosData.data: ', axiosData.data);
  new GitCards(axiosData.data)
})
.catch((err) => {
  console.log('error: ', err);
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
