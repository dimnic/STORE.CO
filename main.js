document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('#cardContainer .card');
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.classList.toggle('hidden', !text.includes(query));
    });

  });

// Show the toast when the page loads
  window.onload = function() {
    const toastElement = document.getElementById('closedToast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  };

 const copilotItems = [
      "Quantum Coffee Mug",
      "Bluetooth Banana Holder",
      "AI-Powered Toothbrush",
      "Solar-Powered Socks",
      "Mood-Sensing Sunglasses",
      "Self-Watering Plant Pot",
      "Voice-Controlled Notebook",
      "Portable Zen Garden",
      "Smart Umbrella",
      "Invisible Ink Pen",
      "Digital Dream Recorder",
      "WiFi-Enabled Candle",
      "Eco-Friendly Bubble Wrap",
      "Holographic Alarm Clock",
      "Magnetic Bookmark Drone",
      "USB-Powered Marshmallow Warmer",
      "Virtual Reality Bookmark",
      "Noise-Cancelling Pillow",
      "Smart Fridge Magnet",
      "Emoji Translator Keychain"
    ];

    const container = document.getElementById("cartContainer");

    copilotItems.forEach((item, index) => {
      const price = (Math.random() * 90 + 10).toFixed(2);
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="cart-card">
          <img src="https://via.placeholder.com/300x150?text=Item+${index + 1}" class="cart-img w-100 mb-3" alt="${item}">
          <div class="card-title">${item}</div>
          <div class="card-price">$${price}</div>
          <button class="btn btn-primary w-100 mt-2">Add to Cart</button>
        </div>
      `;
      container.appendChild(card);
    });
