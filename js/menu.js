const items = [
  {
    category: "Кофе",
    name: "Irish coffee",
    description:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    cost: "$7.00",
    img: "../images/coffee-1.png",
  },
  {
    category: "Кофе",
    name: "Kahlua coffee",
    description:
      "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    cost: "$7.00",
    img: "../images/coffee-2.png",
  },
  {
    category: "Кофе",
    name: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    cost: "$5.50",
    img: "../images/coffee-3.png",
  },
  {
    category: "Кофе",
    name: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    cost: "$5.00",
    img: "../images/coffee-4.png",
  },
  {
    category: "Кофе",
    name: "Espresso",
    description: "Classic black coffee",
    cost: "$4.50",
    img: "../images/coffee-5.png",
  },
  {
    category: "Кофе",
    name: "Latte",
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    cost: "$5.50",
    img: "../images/coffee-6.png",
  },
  {
    category: "Кофе",
    name: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    cost: "$5.50",
    img: "../images/coffee-7.png",
  },
  {
    category: "Кофе",
    name: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    cost: "$6.50",
    img: "../images/coffee-8.png",
  },
  {
    category: "Чай",
    name: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    cost: "$4.50",
    img: "../images/tea-1.png",
  },
  {
    category: "Чай",
    name: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    cost: "$5.00",
    img: "../images/tea-2.png",
  },
  {
    category: "Чай",
    name: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    cost: "$5.00",
    img: "../images/tea-3.png",
  },
  {
    category: "Чай",
    name: "Sea buckthorn",
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    cost: "$5.50",
    img: "../images/tea-4.png",
  },
  {
    category: "Десерт",
    name: "Marble cheesecake",
    description:
      "Philadelphia cheesecake with lemon zest on a light sponge cake and red currant jam.",
    cost: "$4.50",
    img: "../images/dessert-1.png",
  },
  {
    category: "Десерт",
    name: "Red velvet",
    description: "Tender cake with cream cheese frosting.",
    cost: "$4.50",
    img: "../images/dessert-2.png",
  },
  {
    category: "Десерт",
    name: "Cheesecake pancakes",
    description:
      "Fluffy cheesecake pancakes with cream and sprinkled with powdered sugar.",
    cost: "$4.50",
    img: "../images/dessert-3.png",
  },
  {
    category: "Десерт",
    name: "Creme brulee",
    description: "Decadent creamy dessert with caramelized sugar.",
    cost: "$4.00",
    img: "../images/dessert-4.png",
  },
  {
    category: "Десерт",
    name: "Pancakes",
    description:
      "Tender pancakes served with strawberry jam and fresh strawberries.",
    cost: "$5.00",
    img: "../images/dessert-5.png",
  },
  {
    category: "Десерт",
    name: "Honey cake",
    description: "Classic honey cake with delicate custard.",
    cost: "$5.50",
    img: "../images/dessert-6.png",
  },
  {
    category: "Десерт",
    name: "Chocolate cake",
    description: "Rich chocolate cake with chocolate fillings.",
    cost: "$5.50",
    img: "../images/dessert-7.png",
  },
  {
    category: "Десерт",
    name: "Black forest",
    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse.",
    cost: "$6.50",
    img: "../images/dessert-8.png",
  },
];
const coffee = document.querySelector(".previe .buttons .coffee");
const tea = document.querySelector(".previe .buttons .tea");
const dessert = document.querySelector(".previe .buttons .dessert");
const list = document.querySelector(".menu");
const modal = document.querySelector(".modal");
const name_ = document.querySelector(".modal h2");
const desc = document.querySelector(".modal .description");
const img = document.querySelector(".modal .left img");
const price = document.querySelector(".modal .right .cost .right");
const gram = ['50 g', '100 g', '200 g'];
const addDes = ['Berries', 'Nuts', 'Jam']; 
const ml = ['200 ml', '300 ml', '400 ml'];
const addCoffee = ['Sugar', 'Cream', 'Syrup']; 
const addTea = ['Sugar', 'Lemon', 'Honey']; 
const desGram = document.querySelectorAll('.modal .right .size .block .right');
const desAd = document.querySelectorAll('.modal .right .add .block .right');

function updateMenu(category) {
  let flagDessert = false; 
  let flagDrink = false;   
  const newarr = items.filter((el) => el.category === category);
  list.innerHTML = "";

  newarr.forEach((el) => {
    list.innerHTML += `
            <div class="menu_item">
                <img src="${el.img}" alt="${el.name}">
                <div class="text">
                    <h3>${el.name}</h3>
                    <p>${el.description}</p>
                    <h3>${el.cost}</h3>
                </div>
            </div>`;

    if (el.category === 'Десерт') {
      flagDessert = true; 
    } else {
      flagDrink = true; 
    }
  });

  document.querySelectorAll(".menu_item").forEach((el, index) =>
    el.addEventListener("click", (event) => {
      modal.style.display = "flex";
      document.body.classList.add('modal-open'); 
      name_.textContent = newarr[index].name;
      desc.textContent = newarr[index].description;
      price.textContent = newarr[index].cost;
      img.src = newarr[index].img;

      if (flagDessert) {
        desGram.forEach((el, i) => {
          el.textContent = gram[i];
        });
        desAd.forEach((el, i) => {
          el.textContent = addDes[i];
        });
      } else if (flagDrink) {
        desGram.forEach((el, i) => {
          el.textContent = ml[i];
        });
        if (newarr[index].category === 'Кофе') {
          desAd.forEach((el, i) => {
            el.textContent = addCoffee[i]; 
          });
        } else if (newarr[index].category === 'Чай') {
          desAd.forEach((el, i) => {
            el.textContent = addTea[i]; 
          });
        }
      }

      event.stopPropagation();
    })
  );

  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove('modal-open'); 
    flagDessert = false;
    flagDrink = false;
  });
}

updateMenu("Кофе");

coffee.addEventListener("click", () => updateMenu("Кофе"));
tea.addEventListener("click", () => updateMenu("Чай"));
dessert.addEventListener("click", () => updateMenu("Десерт"));
document.addEventListener("click", (event) => {
  if (!modal.contains(event.target)) {
    modal.style.display = "none";
  }
});