// const pexels_URL = "https://api.pexels.com/v1/search?query=[tigre]";
// const API_KEY = "YeX3o4cJWHxuQ9YM6fJHKZr7jL2Y1caezz2AbChqp8nzrAPVCOkRHJQu";

// const loadButton = document.getElementById("load-image-button");

// loadButton.addEventListener("click", function () {
//   fetch(pexels_URL, {
//     method: "get",
//     headers: {
//       Authorization: API_KEY,
//     },
//   })
//     .then((response) => {
//       console.log(response, "response");
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Errore nel recupero dati del server");
//       }
//     })
//     .then((data) => {
//       console.log(data, "data");
//       const images = document.getElementsByClassName("card-img-top");
//     })
//     .catch((error) => {
//       console.log(error, "error");
//     });
// });

// const editButton = document.querySelectorAll(
//   ".btn-group button:nth-of-type(2)"
// );
// for (let i = 0; i < editButton.length; i++) {
//   editButton[i].innerText = "Hide";
// }

// const pexels_URL = "https://api.pexels.com/v1/search?query=[horse]";
// const API_KEY = "YeX3o4cJWHxuQ9YM6fJHKZr7jL2Y1caezz2AbChqp8nzrAPVCOkRHJQu";
const primarySerchButton = document.getElementsByClassName("btn-primary")[0];
const secondarySerchButton =
  document.getElementsByClassName("btn-secondary")[0];

const getImages = function (ricerca) {
  fetch("https://api.pexels.com/v1/search?query=" + ricerca, {
    headers: {
      // Authorization: "YeX3o4cJWHxuQ9YM6fJHKZr7jL2Y1caezz2AbChqp8nzrAPVCOkRHJQu",
      Authorization: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERROR");
      }
    })
    .then((object) => {
      console.log(object, "OBJECT");
      const allTheCardImages = document.querySelectorAll(".card img");
      allTheCardImages.forEach((img, i) => {
        img.src = object.photos[i].src.portrait;
        const allThe9Min = document.querySelectorAll(".card small");
        allThe9Min[i].innerText = object.photos[i].id;
        //primo small (allThe9Min[i]) applichiamo/scriviamo (innerText) l'id della prima foto (photos[i].id)
        //oppure
        //all'iesimo small(allThe9Min) applichiamo l'iesimo id della iesima foto
      });
    })
    .catch((error) => {
      console.log(error, "ERROR");
    });
};

primarySerchButton.addEventListener("click", () => getImages("ice cream"));
secondarySerchButton.addEventListener("click", () => getImages("cow"));

const allTheEditButtons = document.querySelectorAll(
  ".btn-group button:nth-of-type(2)"
);
allTheEditButtons.forEach((button) => {
  button.innerText = "Hide";
  button.addEventListener("click", () => {
    button.closest(".col-md-4").classList.add("d-none");
  });
});

const customSearch = document.getElementById("custom-search");
customSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  const ricercaCustom = document.getElementById("custom-search-input").value;
  getImages(ricercaCustom);
});
