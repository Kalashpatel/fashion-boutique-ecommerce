let productList = JSON.parse(localStorage.getItem("productList")) || [];
let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

if(productList.length == 0){
    productList = [
        // men's wear
        {
            id : 1,
            name : "Blue Jeans",
            category : "Men",
            price : 1500,
            description : "Classic slim fit denim jeans",
            stock : 5,
            image : "https://www.urbanofashion.com/cdn/shop/files/eps-mblue-1.png?v=1727179740"
        },
        {
            id: 2,
            name: "Casual T-Shirt",
            category: "Men",
            price: 799,
            description: "Comfortable cotton t-shirt",
            stock : 5,
            image: "https://m.media-amazon.com/images/I/91E1qXMfhoL._UY1100_.jpg"
        },
        {
            id: 3,
            name: "Formal Shirt",
            category: "Men",
            price: 1299,
            description: "White formal slim fit shirt",
            stock : 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYS40_mbtEW-HxpUR_fIm5hSFD517G3fXmig&s"
        },
        {
            id: 4,
            name: "Leather Jacket",
            category: "Men",
            price: 3499,
            description: "Premium black leather jacket",
            stock : 5,
            image: "https://devotedstore.com/cdn/shop/files/13_1ce28ff5-457a-4589-9ab7-921d85aa4e78.png?v=1741216679"
        },
        // women's wear
         {
          id: 5,
          name: "Floral Dress",
          category: "Women",
          price: 1999,
          description: "Light summer floral dress",
          stock : 5,
          image: "https://images.meesho.com/images/products/384983175/fhgox_512.webp?width=512"
        },
        {
          id: 6,
          name: "Denim Jacket",
          category: "Women",
          price: 2499,
          description: "Stylish blue denim jacket",
          stock : 5,
          image: "https://hips.hearstapps.com/hmg-prod/images/denim-jackets-64123cae227a8.png?crop=1.00xw:0.668xh;0,0.225xh&resize=640:*"
        },
        {
          id: 7,
          name: "Cotton Kurti",
          category: "Women",
          price: 1499,
          description: "Elegant printed cotton kurti",
          stock : 5,
          image: "https://img.tatacliq.com/images/i12/1348Wx2000H/MP000000018755681_1348Wx2000H_202308160404491.jpeg"
        },
        {
          id: 8,
          name: "Evening Gown",
          category: "Women",
          price: 3999,
          description: "Silk evening gown for parties",
          stock : 5,
          image: "https://img.kwcdn.com/product/fancy/5c18260e-7f6f-47c0-81a1-4fa981da503d.jpg"
        },
        // Kids Wear
        {
          id: 9,
          name: "Cartoon T-Shirt",
          category: "Kids",
          price: 599,
          description: "Cute cartoon printed tee",
          stock : 5,
          image: "https://images.meesho.com/images/products/179106564/p18wz_512.webp?width=512"
        },
        {
          id: 10,
          name: "Dungaree",
          category: "Kids",
          price: 999,
          description: "Trendy denim dungaree for kids",
          stock : 5,
          image: "https://ajdezines.com/cdn/shop/files/1NGP09291.jpg?v=1756538458"
        },
        {
          id: 11,
          name: "Kids Dress",
          category: "Kids",
          price: 1299,
          description: "Pink frock with floral design",
          stock : 5,
          image: "https://venutaloza.com/cdn/shop/products/171-A.jpg?v=1658921172"
        },
        {
          id: 12,
          name: "School Uniform",
          category: "Kids",
          price: 899,
          description: "Comfortable cotton school uniform",
          stock : 5,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVVh9T4rjW1vyeffuDIdeoPLjJRyoXmQkAQ&s"
        },
    
        // Shoes
        {
          id: 13,
          name: "Running Shoes",
          category: "Shoes",
          price: 2299,
          description: "Lightweight running shoes",
          stock : 5,
          image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1741716872-puma-foreverrun-nitro-2-67d07d7915584.jpg?crop=1xw:1xh;center,top&resize=980:*"
        },
        {
          id: 14,
          name: "Formal Shoes",
          category: "Shoes",
          price: 2799,
          description: "Elegant black formal shoes",
          stock : 5,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKL-iq7P10kS-wdFPKhsE3b6W7p6pPtABSQ&s"
        },
        {
          id: 15,
          name: "Casual Sneakers",
          category: "Shoes",
          price: 1599,
          description: "Trendy white sneakers",
          stock : 5,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ns2it1GR8XbMwrxhNvakcJlv2RvmmAlJCQ&s"
        },
        {
          id: 16,
          name: "Kids Sandals",
          category: "Shoes",
          price: 699,
          description: "Comfortable sandals for kids",
          stock : 5,
          image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/MAY/29/fOfPdasN_f04af8629eef4b18a21fa3cd6dd34b21.jpg"
        },
    
        // Accessories
        {
          id: 17,
          name: "Leather Belt",
          category: "Accessories",
          price: 799,
          description: "Brown pure leather belt",
          stock : 5,
          image: "https://teakwoodleathers.com/cdn/shop/products/T_BT_473_CfBr_6_1080x.jpg?v=1750934390"
        },
        {
          id: 18,
          name: "Sunglasses",
          category: "Accessories",
          price: 999,
          description: "Stylish UV protection sunglasses",
          stock : 5,
          image: "https://macv.in/cdn/shop/collections/Sunglasses_banner_Desktop_1920_x_320.png?v=1691667927"
        },
        {
          id: 19,
          name: "Handbag",
          category: "Accessories",
          price: 1999,
          description: "Trendy leather handbag",
          stock : 5,
          image: "https://m.media-amazon.com/images/I/81tVtW6svBS._UY1000_.jpg"
        },
        {
          id: 20,
          name: "Wrist Watch",
          category: "Accessories",
          price: 2499,
          description: "Analog stainless steel watch",
          stock : 5,
          image: "https://thewatchshop.in/cdn/shop/files/Gold_6391832c-52c4-4822-bd69-ea2701398d3b_800x.jpg?v=1723886343"
        }
    ]
    localStorage.setItem("productList", JSON.stringify(productList));
    
}

function showProduct(productList){
    let section;
    document.getElementById("womens-tab").innerHTML = "";
    document.getElementById("mens-tab").innerHTML = "";
    document.getElementById("kids-tab").innerHTML = "";
    document.getElementById("shoes-tab").innerHTML = "";
    document.getElementById("accesories-tab").innerHTML = "";
  
    productList.forEach(p => {
        if(p.category === "Women"){
            section = document.getElementById("womens-tab");
        }else if(p.category === "Men"){
            section = document.getElementById("mens-tab")
        }else if(p.category === "Kids"){
            section = document.getElementById("kids-tab")
        }else if(p.category === "Shoes"){
            section = document.getElementById("shoes-tab")
        }else{
            section = document.getElementById("accesories-tab")
        }

        section.innerHTML += `
            <div class="col-12 col-md-6 col-xl-3 product-card p-3 d-flex flex-column gap-2 text-center bg-primary bg-opacity-25 h-auto">
                <img src="${p.image}" alt="product img" class="img-thumbnail w-100 h-50 object-fit-cover">
                <h3>${p.name}</h3>
                <p>${p.price} Rs.</p>
                <div class="product-btn d-flex flex-column flex-lg-row gap-2 w-100 justify-content-center">
                    <button class="cart-btn" onclick="addToCart(${p.id})">Add to Cart</button>
                    <button class="view-btn" id="view-btn" onclick="viewProduct(${p.id})">View Product</button>
                </div>
            </div>
        `
    });
}

function viewProduct(productID) {
  let product = productList.find(p => p.id === productID);
  if (!product) return;

  document.getElementById("modalProductImage").src = product.image;
  document.getElementById("modalProductName").textContent = product.name;
  document.getElementById("modalProductDesc").textContent = product.description;
  document.getElementById("modalProductPrice").textContent = product.price;
  document.getElementById("modalProductStock").textContent = (product.stock && product.stock > 0) ? product.stock : "Out of stock";
  console.log("Stock for product:", product.name, product.stock, typeof product.stock);

  let modalAddToCartBtn = document.getElementById("modalAddToCart");
  modalAddToCartBtn.onclick = function () {
    addToCart(product.id);
    let modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    modal.hide(); 
  };

  let modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
}

document.addEventListener("DOMContentLoaded", () => {
  let searchForm = document.querySelector("form[role='search']");
  let searchInput = document.getElementById("searchInput");

  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault(); 

      let query = searchInput.value.trim().toLowerCase();
      if (!query) {
        showProduct(productList);
        return;
      }

      let filtered = productList.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );

      showProduct(filtered); 
    });
  }
});


function addNewItem(){
  let itemName = document.getElementById("item-name").value.trim();
  let id = parseInt(document.getElementById("item-id").value.trim(), 10);
  let category = document.getElementById("category").value.trim();
  let price = parseFloat(document.getElementById("price").value.trim());
  let stock = parseInt(document.getElementById("stock").value.trim());
  let des = document.getElementById("description").value.trim();
  let image = document.getElementById("image").value.trim();

  if(!itemName || !category || !price || !stock || !des || !image){
    alert("Please fill all information.");
    return;
  }

  let exists = productList.some(p => parseInt(p.id, 10) === id);
  if (exists) {
    alert("Item ID already exists! Please choose a unique ID.");
    return;
  }

  let newProduct = {
    id,
    name : itemName,
    category,
    price: parseFloat(price),
    stock: isNaN(stock) ? 0 : stock, 
    description: des,
    image
  }
  productList.push(newProduct);
  localStorage.setItem("productList", JSON.stringify(productList));

  renderItemTable(productList);
  showProduct(productList);

  alert("Item added succesfully...")

  document.querySelector(".add-form form").reset();
}

function renderItemTable(productList) {
  
  let tbody = document.getElementById("itemTableBody");
  
  if(!tbody){
    return;
  }

  tbody.innerHTML = "";

  productList.forEach((p, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>₹${p.price}</td>
      <td>${p.description}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editItem(${p.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteItem(${p.id})">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function deleteItem(id) {
  if (!confirm("Are you sure you want to delete this item?")) return;

  productList = productList.filter(p => parseInt(p.id, 10) !== parseInt(id, 10));
  localStorage.setItem("productList", JSON.stringify(productList));

  renderItemTable(productList);
  if (typeof showProduct === "function") {
    showProduct(productList);
  }

  alert("item deleted succesfully.....");
}

function editItem(id) {
  let product = productList.find(p => p.id === id);
  if (!product) return;

  document.getElementById("item-name").value = product.name;
  document.getElementById("category").value = product.category;
  document.getElementById("price").value = product.price;
  document.getElementById("stock").value = product.stock;
  document.getElementById("description").value = product.description;
  document.getElementById("image").value = product.image;

  let btn = document.querySelector(".add-form button");
  btn.textContent = "Update Item";
  btn.onclick = function () {
    updateItem(id);
  };
}

function updateItem(id) {
  let product = productList.find(p => p.id === id);
  if (!product) return;

  product.name = document.getElementById("item-name").value.trim();
  product.category = document.getElementById("category").value.trim();
  product.price = parseFloat(document.getElementById("price").value.trim());
  product.stock = parseInt(document.getElementById("stock").value.trim());
  product.description = document.getElementById("description").value.trim();
  product.image = document.getElementById("image").value.trim();

  localStorage.setItem("productList", JSON.stringify(productList));

  renderItemTable(productList);
  if (typeof showProduct === "function") {
    showProduct(productList);
  }

  document.querySelector(".add-form form").reset();
  alert("item edited succesfully.....");
  let btn = document.querySelector(".add-form button");
  btn.textContent = "Add Item";
  btn.onclick = addNewItem;
}

function addToCart(productId) {
  
  let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
  let existing = cartList.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    let product = productList.find(p => p.id === productId);
    if (!product) return;

    cartList.push({
      id: product.id,
      qty: 1,
      stock : product.stock
    });
  }

  localStorage.setItem("cartList", JSON.stringify(cartList));

  alert("Item added to cart.");
}

function renderCart() {
  let cartSection = document.getElementById("cart");
  let subTotalSection = document.getElementById("subTotal");

  if (!cartSection) {
    console.log("cartsection not found");
    return;
  }

  cartSection.innerHTML = "";
  subTotalSection.innerHTML = "";

  if (cartList.length === 0) {
    cartSection.innerHTML = `<h2 class="mt-5 fw-light letter-spacing-1">Your cart is empty</h2>`;
    return;
  }

  let subtotal = 0;

  cartList.forEach(item => {
    
    let product = productList.find(p => p.id === item.id);
    if (!product) return;

    let itemTotal = product.price * item.qty;
    subtotal += itemTotal;

    cartSection.innerHTML += `
      <div class="col-12 mb-3">
        <div class="card shadow-sm p-3 d-flex flex-row align-items-center">
          <img src="${product.image}" class="img-thumbnail me-3" style="width: 100px; height:100px; object-fit:cover;">
          <div class="flex-grow-1">
            <h5>${product.name}</h5>
            <p class="text-muted">${product.category}</p>
            <p>₹${product.price} * ${item.qty} = <strong>₹${itemTotal}</strong></p>
            <div class="d-flex align-items-center">
              <button class="btn btn-outline-secondary btn-sm me-2" onclick="updateQuantity(${product.id}, -1, ${product.stock})">-</button>
              <span>${item.qty}</span>
              <button class="btn btn-outline-secondary btn-sm ms-2" onclick="updateQuantity(${product.id}, 1, ${product.stock})">+</button>
              <button class="btn btn-danger btn-sm ms-3" onclick="removeFromCart(${product.id})">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  let shipping = subtotal > 0 ? 99 : 0;
  let total = subtotal + shipping;

  subTotalSection.innerHTML = `
    <div class="card shadow-sm p-3">
      <h5>Order Summary</h5>
      <hr>
      <p class="d-flex justify-content-between"><span>Subtotal</span><span>₹${subtotal}</span></p>
      <p class="d-flex justify-content-between"><span>Shipping</span><span>₹${shipping}</span></p>
      <p class="d-flex justify-content-between fw-bold"><span>Total</span><span>₹${total}</span></p>
      <button class="btn btn-primary w-100" onclick="checkOut()">Proceed to Checkout</button>
    </div>
  `;
}

function updateQuantity(productId, change, stck) {
  let item = cartList.find(i => i.id === productId);
  if (!item) return;

  if(item.qty <= stck){
      item.qty += change;
  }else{
    alert("Stock limit reached!")
  }

  if (item.qty <= 0) {
    cartList = cartList.filter(i => i.id !== productId);
  }

  localStorage.setItem("cartList", JSON.stringify(cartList));
  renderCart();
}

function removeFromCart(productId) {
  cartList = cartList.filter(i => i.id !== productId);
  localStorage.setItem("cartList", JSON.stringify(cartList));
  renderCart();
}

function checkOut(){
  alert("Your items will be delivered in 3-4 business days...Thank you..")
}

document.addEventListener("DOMContentLoaded", () => {
  renderItemTable(productList);
});

document.addEventListener("DOMContentLoaded", () => {
  showProduct(productList);               
});