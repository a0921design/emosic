document.getElementById('toggle').addEventListener('click', function() {
  document.getElementById('line1').classList.toggle('line1');
  document.getElementById('line2').classList.toggle('line2');
  document.getElementById('line3').classList.toggle('line3');
  document.getElementById('overrayTop').classList.toggle('showTop');
  document.getElementById('overrayBottom').classList.toggle('showBottom');
  document.getElementById('nav').classList.toggle('showNav');
});