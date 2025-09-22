var productList = JSON.parse(localStorage.getItem("productList")) || [];
document.addEventListener("DOMContentLoaded", () => {

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
showProduct(productList);
function showProduct(productList){
    let section;
    document.getElementById("womens-tab").innerHTML = "";
    document.getElementById("mens-tab").innerHTML = "";
    document.getElementById("kids-tab").innerHTML = "";
    document.getElementById("shoes-tab").innerHTML = "";
    document.getElementById("accesories-tab").innerHTML = "";
    productList.forEach(p => {
    console.log("Rendering:", p.name, "Category:", p.category);
        "hello"
    });
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
            <div class="col-3 product-card p-3 d-flex flex-column gap-2 text-center bg-primary bg-opacity-25 h-auto">
                <img src="${p.image}" alt="product img" class="img-thumbnail w-100 h-50 object-fit-cover">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <p>${p.price} Rs.</p>
                <div class="product-btn d-flex gap-2 w-100 justify-content-center">
                    <button class="cart-btn" id="cart-btn">Add to Cart</button>
                    <button class="view-btn" id="view-btn">View Product</button>
                </div>
            </div>
        `
    });
}
})
function addNewItem(){
  let itemName = document.getElementById("item-name").value.trim();
  let id = parseInt(document.getElementById("item-id").value.trim());
  let category = document.getElementById("category").value.trim();
  let price = parseFloat(document.getElementById("price").value.trim());
  let stock = parseInt(document.getElementById("stock").value.trim());
  let des = document.getElementById("description").value.trim();
  let image = document.getElementById("image").value.trim();

  if(!itemName || !category || !price || !stock || !des || !image){
    alert("Please fill all information.");
    return;
  }

  let newProduct = {
    id,
    name : itemName,
    category,
    price: parseFloat(price),
    stock: parseInt(stock),
    description: des,
    image
  }
  productList.push(newProduct);
  localStorage.setItem("productList", JSON.stringify(productList));

  renderItemTable(productList);
  showProduct(productList);

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

  productList = productList.filter(p => p.id !== id);
  localStorage.setItem("productList", JSON.stringify(productList));

  renderItemTable(productList);
  if (typeof showProduct === "function") {
    showProduct(productList);
  }
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
  let btn = document.querySelector(".add-form button");
  btn.textContent = "Add Item";
  btn.onclick = addNewItem;
}

document.addEventListener("DOMContentLoaded", () => {
  renderItemTable(productList);
});

let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});

// Render cart items
function renderCart() {
  let cartSection = document.querySelector(".cart");
  cartSection.innerHTML = "";

  if (cartList.length === 0) {
    cartSection.innerHTML = `<h3 class="text-center mt-5">Your cart is empty 🛒</h3>`;
    return;
  }

  let rows = cartList
    .map((item) => {
      let product = productList.find((p) => p.id === item.id);
      if (!product) return "";

      return `
      <div class="card mb-3 shadow-sm">
        <div class="row g-0 align-items-center">
          <!-- Product Image -->
          <div class="col-md-3">
            <img src="${product.image}" class="img-fluid rounded-start" alt="${product.name}">
          </div>
          <!-- Product Details -->
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text text-muted">${product.category}</p>
              <p class="card-text fw-bold">₹${product.price}</p>
              <!-- Quantity -->
              <div class="d-flex align-items-center">
                <button class="btn btn-outline-secondary btn-sm me-2" onclick="updateQuantity(${product.id}, -1)">-</button>
                <input type="text" class="form-control text-center" value="${item.qty}" style="width: 60px;" readonly>
                <button class="btn btn-outline-secondary btn-sm ms-2" onclick="updateQuantity(${product.id}, 1)">+</button>
              </div>
            </div>
          </div>
          <!-- Subtotal & Remove -->
          <div class="col-md-3 text-center">
            <p class="fw-bold mt-3">₹${product.price * item.qty}</p>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${product.id})">Remove</button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // Order Summary
  let subtotal = cartList.reduce((sum, item) => {
    let product = productList.find((p) => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  let shipping = subtotal > 0 ? 99 : 0;
  let total = subtotal + shipping;

  cartSection.innerHTML = `
    <div class="container my-5">
      <h2 class="mb-4 text-center">Your Cart</h2>
      <div class="row">
        <div class="col-md-8">
          ${rows}
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm p-3">
            <h5>Order Summary</h5>
            <hr>
            <p class="d-flex justify-content-between">
              <span>Subtotal</span> <span>₹${subtotal}</span>
            </p>
            <p class="d-flex justify-content-between">
              <span>Shipping</span> <span>₹${shipping}</span>
            </p>
            <p class="d-flex justify-content-between fw-bold">
              <span>Total</span> <span>₹${total}</span>
            </p>
            <button class="btn btn-primary w-100">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Update quantity (+/-)
function updateQuantity(productId, change) {
  let item = cartList.find((i) => i.id === productId);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    cartList = cartList.filter((i) => i.id !== productId);
  }

  localStorage.setItem("cartList", JSON.stringify(cartList));
  renderCart();
}

// Remove item completely
function removeFromCart(productId) {
  cartList = cartList.filter((i) => i.id !== productId);
  localStorage.setItem("cartList", JSON.stringify(cartList));
  renderCart();
}
