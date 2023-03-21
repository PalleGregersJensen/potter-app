"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

 function initApp() {
  //  Harry Potter
   const potterName = "Harry Potter";
   const potterGender = "male";
   const potterHouse = "Gryffindor";
   const potterDateOfBirth = "31-07-1980";
   const potterAncestry = "half-blood";
   const potterEyeColour = "green";
   const potterHairColour = "black";
   const potterActor = "Daniel Radcliffe";
   const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  //  Hermione Granger
   const hermioneName = "Hermione Granger";
   const hermioneGender = "female";
   const hermioneHouse = "Gryffindor";
   const hermioneDateOfBirth = "17-12-1900";
   const hermioneAncestry = "half-blood";
   const hermioneEyeColour = "green";
   const hermioneHairColour = "black";
   const hermioneActor = "Daniel Radcliffe";
   const hermioneImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  //  Ron Weasley
  // const ronName = "Ron Wreasley";
  // const ronGender = "male";
  // const ronHouse = "Gryffindor";
  // const ronDateOfBirth = "17-12-2000";
  // const ronAncestry = "half-blood";
  // const ronEyeColour = "green";
  // const ronHairColour = "black";
  // const ronActor = "Daniel Radcliffe";
  // const ronImage = "http://hp-api.herokuapp.com/images/harry.jpg";

   showCharacter(
     potterImage,
     potterName,
     potterHouse,
     potterDateOfBirth,
     potterActor
   );

   showCharacter(
     hermioneImage,
     hermioneName,
     hermioneHouse,
     hermioneDateOfBirth,
     hermioneActor
   );

   showCharacter(
     "http://hp-api.herokuapp.com/images/ron.jpg",
     "Ron Weasley",
     "Gryffindor",
     "01-03-1980",
     "Rupert Grint"
   );

  // console.log(
    // potterName,
    // potterGender,
    // potterHouse,
    // potterDateOfBirth,
    // potterAncestry,
    // potterEyeColour,
    // potterHairColour,
    // potterActor,
    // potterImage
  // );
}
 


//    --------       DOM-manipulation med createElement --------
// function showCharacter(image, name, house, dateOfBirth, actor) {
  // console.log(image);
  // console.log(name);
  // console.log(house);
  // console.log(dateOfBirth);
  // console.log(actor);

  // const articleElement = document.createElement("article");
  // const imageElement = document.createElement("img");
  // const nameElement = document.createElement("h2");
  // const houseElement = document.createElement("p");
  // const dateOfBirthElement = document.createElement("p");
  // const actorElement = document.createElement("p");

  // articleElement.append(
    // imageElement,
    // nameElement,
    // houseElement,
    // dateOfBirthElement,
    // actorElement
  // );

  // imageElement.src = image;
  // nameElement.textContent = name;
  // houseElement.textContent = house;
  // dateOfBirthElement.textContent = dateOfBirth;
  // actorElement.textContent = actor;

  // document.querySelector("#characters").appendChild(articleElement);

  // console.log(imageElement);
  // console.log(nameElement);
  // console.log(dateOfBirthElement);
  // console.log(houseElement);
  // console.log(actorElement);
// }

 function showCharacter(image, name, house, dateOfBirth, actor) {
 const html =
/*html*/
 `<article>
 <img src =${image}>
 <h2>${name}</h2>
 <p>${house}</p>
 <p>${dateOfBirth}</p>
 <p>${actor}</p>
 </article>`;

 document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
   
  //  const potterName = "Harry Potter";
  //  const potterGender = "male";
  //  const potterHouse = "Gryffindor";
  //  const potterDateOfBirth = "31-07-1980";
  //  const potterAncestry = "half-blood";
  //  const potterEyeColour = "green";
  //  const potterHairColour = "black";
  //  const potterActor = "Daniel Radcliffe";
  //  const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";
 }

//  showCharacter(
  //  potterImage,
  //  potterName,
  //  potterHouse,
  //  potterDateOfBirth,
  //  potterActor
//  );
