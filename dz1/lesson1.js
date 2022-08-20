//'use strict'
const products = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
];
const renderProduct = (product, photo = "img/shirt.jpg") =>
    `<div class="product">
        <img src="${photo}" class="photo" alt="photo">
        <h2 class="title">${product.title}</h2>
        <p class="price">${product.price}$</p>
        <button type="button" class="button">BUY</button>
    </div>`;
const renderPage = products => {
    document.querySelector('.products').innerHTML = products.map(product => renderProduct(product)).join('');
};
renderPage(products);
