<script>
   var cart = [];
  
  function addToCart(productname, price,img) {
    var item = {
      name: productname,
      price: price,
      url:img
    };
    cart.push(item);
    updateCart();
  }
  
  function updateCart() {
    var cartItem = document.getElementById('cart');
    cartItem.innerHTML = '';
    document.getElementById("in2").innerHTML="";
    var totalPrice = 0;
    if(cart.length==0){
    let ce =document.getElementById("in2");
    let pm =document.createElement("P");
    let cem = document.createTextNode("Your Cart is Empty!!!");
    pm.appendChild(cem);
    ce.appendChild(pm);}
    else{
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      var li = document.createElement('li');
      var x = document.createElement("IMG");
  x.setAttribute("src", item.url);
  x.setAttribute("width", "280");
  x.setAttribute("height", "208");
  x.setAttribute("alt", "The Pulpit Rock");
      li.innerHTML = item.name + ': ₹' + item.price;
      li.appendChild(x);

      
      // Create remove button for each item
      var removebtn = document.createElement('button');
      removebtn.classList.add('rmbtn');
      removebtn.innerHTML = 'X';
      removebtn.addEventListener('click', createRemove);
      li.appendChild(removebtn);    
      cartItem.appendChild(li);
      totalPrice += item.price;
    }
  

    var total= document.createElement('li');
    total.innerHTML = '<span>Total:</span> <p> &#8377 ' + totalPrice + '</p>';
    cartItem.appendChild(total);

    const cartCount=document.getElementById('cartnumber');
    let count=cart.length;
    cartCount.innerHTML=count;
    
  
    if(count==0){
      cartCount.style.display='none';
      
    }else{
      cartCount.style.display='block';
    }   

  }
}
  function checkout() {
    if (cart.length > 0) {
      alert('Thank you for your purchase!');
      cart = [];
      updateCart();
    } else {
      alert('Your cart is empty!');
    }

  let f=document.getElementById("in");
 let c =f.firstChild;
  f.removeChild(c);
  
  }
  
  // Helper function to create a closure for the remove button click event
  function createRemove() {    
      alert('Are you sure?')
      cart.splice(0, 1);
      updateCart();
    
  }



  </script>  
