const pexels_URL = "https://api.pexels.com/v1/search?query=[tigre]";
const API_KEY = "YeX3o4cJWHxuQ9YM6fJHKZr7jL2Y1caezz2AbChqp8nzrAPVCOkRHJQu";

const loadButton = document.getElementById("load-image-button");

loadButton.addEventListener("click", function () {
  fetch(pexels_URL, {
    method: "get",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      console.log(response, "response");
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dati del server");
      }
    })
    .then((data) => {
      console.log(data, "data");
      const images = document.getElementsByClassName("card-img-top");
    })
    .catch((error) => {
      console.log(error, "error");
    });
});

const editButton = document.querySelectorAll(
  ".btn-group button:nth-of-type(2)"
);
for (let i = 0; i < editButton.length; i++) {
  editButton[i].innerText = "Hide";
}
