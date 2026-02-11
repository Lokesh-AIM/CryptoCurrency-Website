function randomizePrice(id, base, variance) {
  const element = document.getElementById(id);

  setInterval(() => {
    const change = (Math.random() - 0.5) * variance;
    const newPrice = (base + change).toFixed(2);
    element.textContent = "$" + newPrice;
  }, 2000);
}

randomizePrice("btc", 40245, 200);
randomizePrice("eth", 5540, 50);
randomizePrice("doge", 0.22, 0.05);
