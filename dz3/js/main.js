class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render()
            });
    }

    _getProducts() {
        return fetch(`https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json`)
            .then(result => result.json())
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
}
class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();

class BasketList {
    constructor(container = '.basketBox') {
        this.container = container;
        this.goods = [];
        this.amount = 0;
        this.countGoods = 0;
        this._getProducts()
            .then(data => {
                this.goods = data.contents;
                this.amount = data.amount;
                this.countGoods = data.countGoods;
            });
    }

    _getProducts() {
        return fetch(`https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json`)
            .then(result => result.json())
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ElemBasket(product);
            block.style.display = "grid";
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        block.insertAdjacentHTML('beforeend', `Всего товаров: ${this.countGoods}<br>`);
        block.insertAdjacentHTML('beforeend', `Общая стоимость: ${this.amount}`);
    }
    addGood() {
    }
    removeGood() {
    }
    changeGood() {
    }
}

class ElemBasket {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <p>Количество: ${this.quantity}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}
let basket = new BasketList();

let basketButtonListShow = document.querySelector('.btn-cart');
basketButtonListShow.addEventListener('click', function (event) {
    basket.render();
}); 