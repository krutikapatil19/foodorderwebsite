const menuItems = [
  { id: 1, name: "Pizza", price: 150, img: "https://th.bing.com/th/id/OIP.XzUnt5Afjbz_9Bmkng2IMQHaEK?rs=1&pid=ImgDetMain", alt: "Pizza" },
  { id: 2, name: "Burger", price: 100, img: "https://images.moneycontrol.com/static-mcnews/2021/03/Burger.jpg", alt: "Burger" },
  { id: 3, name: "Pasta", price: 200, img: "https://cdn.pixabay.com/photo/2022/09/24/07/31/pasta-7475756_1280.jpg", alt: "Pasta" },
  { id: 4, name: "Fries", price: 80, img: "https://cdn.pixabay.com/photo/2014/04/22/02/56/fries-329523_1280.jpg", alt: "Fries" },
  { id: 5, name: "Momos", price: 120, img: "https://www.myyellowplate.com/wp-content/uploads/2021/07/Best-Momos-in-Delhi-at-Hudson-Chopsticks-1600x1066.jpg", alt: "Momos" },
  { id: 6, name: "Noodles", price: 130, img: "https://th.bing.com/th/id/OIP.fanZPy9rtueJs2yW6jQDqgHaHa?rs=1&pid=ImgDetMain", alt: "Noodles" },
  { id: 7, name: "Nachos", price: 150, img: "https://th.bing.com/th/id/OIP.mM8dUhfDD1VB10lbRJbBVwHaFj?rs=1&pid=ImgDetMain", alt: "Nachos" },
  { id: 8, name: "Garlic bread", price: 100, img: "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg", alt: "Garlic Bread" },
];

const cart = [];
const menu = document.getElementById('menu');
const cartList = document.getElementById('cart');
const totalAmountElement = document.getElementById('totalAmount'); // Element to display total amount

menuItems.forEach(item => {
  const menuItem = document.createElement('div');
  menuItem.className = 'menu-item';
  menuItem.innerHTML = `
    <img src="${item.img}" alt="${item.alt}">
    <h4>${item.name}</h4>
    <p>₹${item.price}</p>
    <button onclick="addToCart(${item.id})">Add to Cart</button>
  `;
  menu.appendChild(menuItem);
});

function addToCart(id) {
  const item = menuItems.find(item => item.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });
  
  // Display the total amount
  totalAmountElement.textContent = `Total: ₹${total}`;
}

function placeOrder() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Order placed successfully!');
    cart.length = 0;
    updateCart();
  }
}
