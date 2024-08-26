import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Bruchetta",
    price: "12.99",
    description:
      "An Italian antipasto consisting of grilled bread, topped with olive oil and salt.",
    imgSrc: "/Images/bruchetta.svg",
  },
  {
    id: 2,
    name: "Greek Salad",
    price: "10.99",
    description:
      "Sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.",
    imgSrc: "/Images/greek salad.jpg",
  },
  {
    id: 3,
    name: "Falafel",
    price: "11.99",
    description:
      "Crispy, deep-fried balls made from ground chickpeas or fava beans, mixed with herbs and spices.",
    imgSrc: "/Images/Falafel.jpg",
  },
  {
    id: 4,
    name: "Spanakopita",
    price: "12.99",
    description:
      "A Greek savory pie made with layers of flaky phyllo dough filled with a mixture of spinach, feta cheese, onions, and herbs.",
    imgSrc: "/Images/Spanakopita.jpg",
  },
  {
    id: 5,
    name: "Tabbouleh",
    price: "11.99",
    description:
      " fresh and vibrant salad made with bulgur wheat, finely chopped parsley, mint, tomatoes, cucumbers, and dressed with lemon juice and olive oil.",
    imgSrc: "/Images/Tabbouleh.jpg",
  },
];

function Menu() {
  return (
    <>
      <div className="menuItem">
        {menuItems.map((item) => (
          <div key={item.id}>
            <img src={item.imgSrc} />
            <h1>{item.name}</h1>
            <h2>
              {"$"}
              {item.price}
            </h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
