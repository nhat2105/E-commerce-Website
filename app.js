const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Blood Simple",
      img: "./img/bloodsimple.jpg",
      sum: "A masterpiece from Joel & Ethan Coel <br> Joel and Ethan Coen’s career-long darkly comic <br> nroad trip through misfit America began with this <br> razor-sharp, hard-boiled neonoir.",
      type: [
        {
          code: "4K",
          price: 39.99,
          desc: "DIRECTOR-APPROVED 4K UHD + BLU-RAY SPECIAL EDITION",
        },

        {
          code: "Bluray",
          price: 29.99,
          desc: "DIRECTOR-APPROVED BLU-RAY SPECIAL EDITION",
        },

        {
            code: "DVD",
            price: 19.99,
            desc: "DIRECTOR-APPROVED TWO-DVD SPECIAL EDITION",
        }
      ],
    },

    {
        id: 2,
        title: "Mean Streets",
        img: "./img/mean_streets.jpg",
        sum: "Martin Scorsese emerged as a generation-defining <br> filmmaker with this gritty portrait of 1970s <br> New York City, one of the most influential <br> works of American independent cinema.",
        type: [
          {
            code: "4K",
            price: 39.99,
            desc: "DIRECTOR-APPROVED 4K UHD + BLU-RAY SPECIAL EDITION",
          },
          {
            code: "Bluray",
            price: 29.99,
            desc: "DIRECTOR-APPROVED BLU-RAY SPECIAL EDITION"
          },
          {
              code: "DVD",
              price: 19.99,
              desc: "DIRECTOR-APPROVED TWO-DVD SPECIAL EDITION"
          }
        ],
      },
      
      {
        id: 3,
        title: "Small Axe",
        img: "./img/small_axe.jpg",
        sum: "With the five films that make up his Small Axe <br> anthology (Mangrove; Lovers Rock; Red, White and Blue; <br> Alex Wheatle; and Education), director Steve McQueen <br> offers a richly evocative panorama of West Indian <br> life in London from the late 1960s through the early ’80s",
        type: [
          {
            code: "4K",
            price: 39.99,
            desc: "DIRECTOR-APPROVED 4K UHD + BLU-RAY SPECIAL EDITION"
          },
          {
            code: "Bluray",
            price: 29.99,
            desc: "DIRECTOR-APPROVED BLU-RAY SPECIAL EDITION"
          },
          {
              code: "DVD",
              price: 19.99,
              desc: "DIRECTOR-APPROVED TWO-DVD SPECIAL EDITION"
          }
        ],
      },
]

let curProduct = products[0];
var currentProductImg = document.querySelector(".prodImg");
var currentProductTitle = document.querySelector(".productTitle");
var currentProductPrice = document.querySelector(".productPrice");
var currentProductDesc = document.querySelector(".productDesc");
var currentProductTypes = document.querySelectorAll(".discType");
var currentProductTypeDesc = document.querySelector(".productTypeDesc");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change slides
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change products
        curProduct = products[index];
        currentProductImg.src = curProduct.img;
        currentProductTitle.textContent = curProduct.title;
        currentProductDesc.innerHTML = curProduct.sum;

    });

    currentProductTypes.forEach((type, index) => {
        type.addEventListener("click", () => {
            currentProductTypes.forEach((type) => {
                currentProductTypeDesc.textContent = curProduct.type[index].desc;
                currentProductPrice = curProduct.type[index].price;
                type.style.backgroundColor = "white";
                type.style.color = "black";
            });
            type.style.backgroundColor = "black";
            type.style.color = "white";
        });
       
    }); 
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});