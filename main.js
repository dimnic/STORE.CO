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
