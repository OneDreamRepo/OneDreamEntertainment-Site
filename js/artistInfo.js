// const artistDetailURL = "../json/artist.json"
// const image = document.getElementById("imageData");
// console.log(image)
// async function fetchDetails() {
//     const res = await fetch(artistDetailURL);
//     const data = await res.json();

//     // const imageLink = data[0].imgUrl;

//     console.log(data[0].imgUrl)

//     // const imageConvert = URL.createObjectURL(imageLink)

//     image.src = data[0].imgUrl;

// }

// const imageUrl = "https://www.dropbox.com/s/evf7atdk3asmtfm/artist-image.png?dl=0";

// fetch(imageUrl)
//   //                         vvvv
//   .then(response => response.blob())
//   .then(imageBlob => {
//       // Then create a local URL for that image and print it
//       const imageObjectURL = URL.createObjectURL(imageBlob);
//       console.log(imageObjectURL);
//   });

// const showBtn = document.getElementById("showImages");
// const heading = document.querySelector(".heading");

// showBtn.addEventListener(
//   "click",
//   () => {
//     // fetchDetails();

//     var b = localStorage.getItem("id");
//     let text = document.createTextNode(b);
//     heading.appendChild(text);
//   },
//   false
// );

const artistJSON = "../json/artist.json";

var artistId = localStorage.getItem("id");
const image = document.getElementById("imageData");

async function fetchArtist() {
  try {
    const res = await fetch(artistJSON);

    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.error(`${error}`);
  }
}

const jsonPromise = fetchArtist();

jsonPromise.then((data) => {
  image.src = data[artistId].imgUrl;

  let artistName = document.getElementById("artist-name");
  let artistAge = document.getElementById("artist-age");
  let artistBirthdate = document.getElementById("artist-birthdate");
  let artistSocialOne = document.getElementById("artist-social-one");
  let artistSocialTwo = document.getElementById("artist-social-two");
  let artistSocialThree = document.getElementById("artist-social-three");

  //   const list = document.querySelector(".artist-details");
  //   console.log(list.childElementCount);
  let detailsList = [
    data[artistId].name,
    data[artistId].age,
    data[artistId].birthday,
  ];

  artistName.appendChild(document.createTextNode(detailsList[0]));
  artistAge.appendChild(document.createTextNode(detailsList[1]));
  artistBirthdate.appendChild(document.createTextNode(detailsList[2]));
  artistSocialOne.appendChild(
    document.createTextNode(data[artistId].socials[0])
  );
  artistSocialTwo.appendChild(
    document.createTextNode(data[artistId].socials[1])
  );
  artistSocialThree.appendChild(
    document.createTextNode(data[artistId].socials[2])
  );
});

const arrowBack = document.querySelector(".fa-arrow-left");

arrowBack.addEventListener(
  "click",
  () => {
    history.back();
  },
  false
);

//GSAP ANIMATIONS
//GSAP ANIMATIONS
//GSAP ANIMATIONS

const body = document.getElementsByTagName("body")[0];

gsap.from(body, {
  y: -500,
  duration: 1,
  opacity: 0,
  ease: "circ.out",
});
