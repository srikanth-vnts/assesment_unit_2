var cartItems = JSON.parse(localStorage.getItem('cart'))
cartItems.pop();
var data_div = document.getElementById("data");
data_div.setAttribute("id", 'box');

var total_price = document.getElementById("total_price");

var total = 0;
var discount = 0;

const promoCodes = [['masai30',30]];

if (localStorage.getItem('promoCodes') == null) {
    localStorage.setItem('promoCodes',JSON.stringify(promoCodes));
}

function appendProducts(el) {

    let div = document.createElement("div");

    let p_image = document.createElement("img");
    p_image.src = el.img;

    let p_name = document.createElement("p");
    p_name.textContent = el.name;

    let p_price = document.createElement("p");
    p_price.textContent = Number(el.Price);
    total += el.Price;

    div.append(p_image, p_name, p_price);

    div.setAttribute('id', 'sub_box');
    data_div.append(div);
}

function showProducts() {
    let data = JSON.parse(localStorage.getItem('cart'));
    data_div.innerHTML = null;
    data.forEach(function (el) {
        appendProducts(el);
    });
}
showProducts();
total_price.textContent = total - discount;
console.log(total_price.textContent);

appendProducts(cartItems);
console.log(cartItems)

function promoList() {
    let promo = document.getElementById('promo').value;
    let promoCodes = JSON.parse(localStorage.getItem('promoCodes'));
    for (let i = 0; i < promoCodes.length; i++) {
        if (promoCodes[i][0] == promo) {
            discount = (total * promoCodes[i][1] / 100);
            total_price.innerHTML = total - discount;
            break;
        
            
            
        }
    }
    
    
}


function checkout() {
    window.location.href = 'payment.html'

}

totalPrice.innerHTML = total - discount;


