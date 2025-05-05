//variable define
const item_name = document.getElementById("name");
const price = document.getElementById("price");
const submit_item = document.getElementById("submit_item");
const box_cont = document.getElementById("box_container");
const budget = document.getElementById("budget");
const submit_budget = document.getElementById("submit_budget");
const show_budget = document.getElementById("show_budget");
let Calculate = document.getElementById("Calculate");
//variable define

//budget show
submit_budget.addEventListener("click", (e) => {
  e.stopPropagation();
  if (budget.value.trim() === "") {
    document.getElementById("submit_box").hidden = false;
  } else {
    document.getElementById("submit_box").hidden = true;
    let bud = `Your Budget was ${budget.value}`;
    show_budget.innerText = bud;
    document.getElementById("Calculate").hidden = false;
  }
});
//budget show

// item show
let total = 0;
submit_item.addEventListener("click", () => {
  if (price.value.trim() === "") {
    console.log("hello this the console of market calculator");
  } else {
    box_cont.insertAdjacentHTML(
      "beforeend",
      `<div class="p-4 text-xl font-poppins">${item_name.value} price is ${price.value} </div>`
    );
  }
  let prices = Number(price.value);
  total += prices;

  price.value = "";
  item_name.value = "";
});
// item show

//calculate the values
Calculate.addEventListener("click", () => {
  setTimeout(() => {
    let money_left = budget.value - total;

    // for negative numbers
    if (money_left < 0) {
      box_cont.insertAdjacentHTML(
        "beforeend",
        `<span class="border-[1px] w-[50%] mb-[5px]"></span>
    <span class="font-poppins text-[#FF7F3E] text-xl mb-1.5">You Have Nothing left </span>`
      );
    } else {
      box_cont.insertAdjacentHTML(
        "beforeend",
        `<span class="border-[1px] w-[50%] mb-[5px]"></span>
    <span class="font-poppins text-[#FF7F3E] text-xl mb-1.5">Your Total Cost ${total} And Left ${money_left} </span>`
      );
    }
  }, 0);
});
