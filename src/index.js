import itemTemplate from "./template/item.hbs";
import css from "./css/styles.css";
import { createClient } from "pexels";
console.log(createClient);

const form = document.getElementById("form");
const result = document.getElementById("result");
const moreBtn = document.getElementById("button")
console.log(form,result,moreBtn);

const apiKey = "563492ad6f917000010000017703ea1c894d4876991036322f2e0602";
const client = createClient(apiKey);
console.log(client);

// const query = "Горы";
// const parameters = { query, per_page: 10 };
// client.photos.search(parameters).then((response) => {
//   console.log(response);
// });

console.log(itemTemplate);

// Вешаем слушатели событий на форму

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e);
    console.log(e.target);
    console.log(e.target.elements);
    console.log(e.target.elements.query);
    console.log(e.target.elements.query.value);
    let query = e.target.elements.query.value
    const parameters = { query, per_page: 10 };
    client.photos.search(parameters).then((response) => {
        console.log(response);
        const items = itemTemplate(response.photos)
        console.log(items);
        result.insertAdjacentHTML("afterbegin",items)
      });
})