const products = [
    {
      id: 1,
      name: "Modern Vase",
      price: "₹499",
      rating: "⭐ 4.5",
      reviews: "45 reviews",
      image: "modernvase.jpg",
      description: "Elegant ceramic vase for living rooms. Stylish vase for your fresh flowers."
    },
    {
      id: 2,
      name: "Wall Art Canvas",
      price: "₹899",
      rating: "⭐ 4.8",
      reviews: "32 reviews",
      image: "wallartcanva.jpg",
      description: "Floral 3D canvas wall art."
    },
    {
      id: 3,
      name: "Decorative Lamp",
      price: "₹799",
      rating: "⭐ 4.6",
      reviews: "58 reviews",
      image: "decorativelamp.jpg",
      description: "Golden floral desk lamp. Elegant lamp to light up your evenings."
    },
    {
      id: 4,
      name: "Cushion Set",
      price: "₹499",
      rating: "⭐ 4.6",
      reviews: "424 reviews",
      image: "cushionset.jpg",
      description: "Soft and stylish cushions for your living room."
    },
    {
     id: 5,
     name: "Wall Art",
     price: "₹4099",
    rating: "⭐ 4.6",
    reviews: "424 reviews",
    image: "wallart.jpg",
    description: "Crafted from UV-engraved acrylic and high-definition crystal porcelain, this elegant wall art boasts a water and oil-proof finish with exquisite detailing.Featuring a 3D ginkgo leaf design, detachable metal accents, and unique craftsmanship that enhances any room with a luxurious texture.Integrated LED soft light adds warmth and depth, transforming any space into a serene retreat.Ideal for living rooms, offices, bedrooms, or TV background walls, offering sophisticated appeal to various interiors.A refined decorative piece that serves as both art and functional wall decor for lasting impressions."
  },
  {
    id: 6,
    name: "Wall Clock ",
    price: "₹1000",
   rating: "⭐ 3.6",
   reviews: "400 reviews",
   image: "clock.jpg",
   description: "60cm Diamante Beaded Crystals Quartz Jeweled Wall Clock Home Decor Living Room."
 },
 {
  id: 7,
  name: "Door Suncatchers",
  price: "₹750",
 rating: "⭐ 4.6",
 reviews: "390 reviews",
 image: "pic1.jpeg",
 description: "These suncatchers are intricately designed with geometric metal frames, crystals, and iridescent orbs, reflecting light and creating a shimmering effect. Some feature moon-shaped elements, adding a celestial touch to their aesthetic."
},
{
  id: 8,
  name: "Balcony Decoration ",
  price: "₹4000",
 rating: "⭐ 3.5",
 reviews: "409 reviews",
 image: "pic3.jpeg",
 description: "The balcony features a seating area with pink cushions, surrounded by various potted plants and hanging floral arrangements, primarily consisting of pink roses. Soft lighting from the string lights and lanterns enhances the warm and inviting ambiance. The background reveals a cityscape, suggesting the balcony is part of an apartment in an urban setting. The overall aesthetic is dreamy and whimsical, reminiscent of a fairy-tale or fantasy setting. "
},
{
  id: 9,
  name: "Pendant light ",
  price: "₹5500",
 rating: "⭐ 3.3",
 reviews: "300 reviews",
 image: "pic4.jpg",
 description: "It has a green circular base with pink rose accents and five translucent, flower-shaped lamps that provide illumination. Pendant lights are light fixtures suspended from the ceiling, often used for ambient lighting in various rooms, including kitchens, dining rooms, bedrooms, and living rooms. They come in various sizes and materials, such as glass, metal, wood, and mixed materials, and can be used individually or in multiples, depending on the desired effect and the size of the space." 
},
{
  id: 10,
  name: "Beaded Curtain",
  price: "₹900",
 rating: "⭐ 3.4",
 reviews: "508 reviews",
 image: "pic5.jpg",
 description: "Sheer, white curtains adorned with bows and beaded strands frame the doorway, adding a delicate touch. "
},
{
  id: 11,
  name: "Wind Chimes ",
  price: "₹1009",
 rating: "⭐ 3.5",
 reviews: "309 reviews",
 image: "pic6.jpeg",
 description: "These wind chimes incorporate elements like clouds, suns, rainbows, and stars, often made from iridescent or translucent materials that catch the light. "
},
{
  id: 12,
  name: "Canopy beds ",
  price: "₹7000",
 rating: "⭐ 4.6",
 reviews: "534 reviews",
 image: "pic7.jpeg",
 description: "Canopy beds feature a frame, often draped with fabric, supported by posts at the four corners. The canopy and curtains can provide warmth, screen out light, and add privacy. More elaborate designs, like the one pictured, can be highly ornamental. This bed is decorated with a floral arrangement featuring roses and hydrangeas, which adds a romantic and decorative touch. The flowers are draped over the canopy frame and cascade down one of the support posts, with loose petals scattered on the bed and floor. "
},
{
  id: 13,
  name: "Glass Vase",
  price: "₹1200",
 rating: "⭐ 3.6",
 reviews: "123 reviews",
 image: "pic8.jpeg",
 description: "1 piece Framed canvas print featuring pink glass vase, light flowers and butterfly illustration, designed as a decorative wall painting for living room, framed, canvas wrapped, ready to hang1 Piece Framed Canvas Print Featuring Pink Glass Vase, Light Flowers And Butterfly Illustration, Designed As A Decorative Wall Painting For Living Room, Framed, Canvas Wrapped, Ready To Hang Pink Canvas Cartoon Hanging Painting,Framed Picture Home Decor, size features are:Bust: ,Length: ,Sleeve Length..."
},
{
  id: 14,
  name: "Kitchen decor ",
  price: "₹1500",
 rating: "⭐ 2.6",
 reviews: "120 reviews",
 image: "pic9.jpeg",
 description: "Royal Navy Prestige adds a regal, deep blue hue to your kitchen cabinets, creating a luxurious and dramatic effect. Navy pairs beautifully with gold or brass accents for an elegant and timeless look. This rich color contrasts beautifully with lighter countertops and floors, bringing sophistication to any kitchen. Click now for more luxurious kitchen cabinet color ideas!"
},
{
  id: 15,
  name: "Dining Room ",
  price: "₹20000",
 rating: "⭐ 3.7",
 reviews: "645 reviews",
 image: "pic10.jpeg",
 description: "Discover creative dining room wainscoting ideas to enhance your space. From classic raised panels to modern geometric designs, find the perfect style to elevate your dining room's look.."
},
{
  id: 16,
  name: "Floral decor",
  price: "₹5000",
 rating: "⭐ 4.6",
 reviews: "543 reviews",
 image: "pic11.jpeg",
 description: "Transform your living room into a charming and elegant retreat with this stunning blue and white decor. 💙✨ From classic porcelain displays and floral cushions to ornate furniture and golden accents, this design exudes timeless sophistication. Perfect for those who love a blend of vintage charm and modern luxury. 🏡🌿 Get inspired to elevate your space with these elegant ideas!"
},
{
  id: 17,
  name: "Basin decor ",
  price: "₹7089",
 rating: "⭐ 3.9",
 reviews: "867 reviews",
 image: "pic12.jpeg",
 description: "Elegant!!!!"
},
{
  id: 18,
  name: "Dessing Cabort" ,
  price: "₹60000",
 rating: "⭐ 3.3",
 reviews: "906 reviews",
 image: "pic13.jpeg",
 description: "Elegant!!!!!!!!!!!."
},
{
  id: 19,
  name: "Normal Basin Decor ",
  price: "₹5000",
 rating: "⭐ 2.6",
 reviews: "200 reviews",
 image: "pic14.jpeg",
 description: "Unique one!!!!"
},
{
  id: 20,
  name: "Mirror Set ",
  price: "₹10000",
 rating: "⭐ 3.6",
 reviews: "409 reviews",
 image: "pic15.jpeg",
 description: "Unique and Elegant!!!!."
},



 ];
  
  function displayProducts(filter = '') {
    const container = document.getElementById("productList");
    container.innerHTML = '';
    const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
    
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick='viewDetails(${JSON.stringify(product)})'>View Details</button>
        <button onclick="Buy(${product.id})">Buy Now</button>
        <button onclick="addToCart(${product.id})">🛒 Add to Cart</button>
        <button onclick="addToWishlist(${product.id})">❤️ Wishlist</button>
      `;
      container.appendChild(card);
    });
  }
  
  function viewDetails(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'index1.html';
  }
  
  function Buy(productId) {
    const selected = products.find(p => p.id === productId);
    if (selected) {
      localStorage.setItem('selectedProduct', JSON.stringify(selected));
      window.location.href = "buy.html";
    }
  }
  
  function addToCart(id) {
    alert("Product " + id + " added to cart!");
  }
  
  function addToWishlist(id) {
    alert("Product " + id + " added to wishlist!");
  }
  
  document.getElementById("searchBar").addEventListener("input", (e) => {
    displayProducts(e.target.value);
  });
  
  window.onload = () => displayProducts();
  