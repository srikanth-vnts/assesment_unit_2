   var main = document.getElementById('container');
   let product_div = document.createElement('div');
   product_div.setAttribute('id','product_div')
   container.append(product_div);
   var total = 0;  

//document.getElementById('total').innerHTML = null;
var total_price = document.getElementById('total_price');


   
   [{
       Brand:'H&M',
       Price:2000,
       img : 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg',
    },
    {
    Brand: 'H&M',
    Price: 2000,
    img : 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg',
    },
    {
    Brand: 'H&M',
    Price: 2000,
    img : 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg',
    },
    {
    Brand: 'H&M',
    Price: 2000,
    img : 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg',
    },
    {
    Brand: 'H&M',
    Price: 2000,
    img : 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg',
    },
    {
    Brand: 'H&M',
    Price: 2000,
    img : 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg',
    },
    {
    Brand: 'H&M',
    Price: 2000,
    img : 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg',
    },
    {
    Brand: 'H&M',
    Price: 2000,
    img : 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg',
    },
    {
    Brand: 'H&M',
    Price: 2000,
    img : 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Shubh-Muhurat-Jewellery-Collection-01.jpg',
    }];

    if(localStorage.getItem('product')==null){
        localStorage.setItem('product', JSON.stringify(product));
    }

function showProduct(p) {
    let products = p;
    let product_div = document.getElementById('product_div');
  

    product_div.innerHTML = null;

     products.forEach(function (el) {
        let block = document.createElement('div');
        block.setAttribute('class', 'block');

        let p_Image = document.createElement('img');
        p_Image.src = el.img;
        block.append(p_Image);

        let Brand = document.createElement('h5');
        Brand.innerHTML = el.Brand;
        Brand.setAttribute('class', 'Brand')
         block.append(Brand);
         
         let price = document.createElement('h5');
         price.textContent = el.Price;
         console.log(price);
         block.append(price);

         let btn = document.createElement("button");
         btn.textContent = 'Add to Cart';
         btn.addEventListener("click", function () {
        
                addCart(el);
            
         })
         block.append(btn)
        
        

        product_div.append(block);
    });
}

showProduct(JSON.parse(localStorage.getItem('product')));

total_price.innerHTML = total;

function addCart(obj) {
    total += obj.Price;
    console.log(total)
        let array = localStorage.getItem('cart');

        if (array == null) {
            array = [];
        } else {
            array = JSON.parse(localStorage.getItem('cart'));
        }
        array.push(obj);
        localStorage.setItem('cart', JSON.stringify(array));
        //window.location = window.location
    
    

}

function cart() {
    window.location.href ='cart.html'
}
       
total_price.innerHTML = `${total}`;
console.log(total);
    