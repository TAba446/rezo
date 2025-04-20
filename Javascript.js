window.addEventListener('load', () => {
  const container = document.getElementById('mainBox');
  const cards = container.querySelectorAll('.card');
  const middleCard = cards[Math.floor(cards.length / 2)];
  const scrollTo = middleCard.offsetLeft - container.offsetWidth / 2 + middleCard.offsetWidth / 2;
  container.scrollTo({ left: scrollTo, behavior: 'smooth' });
});
