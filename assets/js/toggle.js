document.getElementById('toggle').addEventListener('click', function() {
  document.getElementById('line1').classList.toggle('line1');
  document.getElementById('line2').classList.toggle('line2');
  document.getElementById('line3').classList.toggle('line3');
  document.getElementById('overrayTop').classList.toggle('showTop');
  document.getElementById('overrayBottom').classList.toggle('showBottom');
  document.getElementById('nav').classList.toggle('showNav');
});

const linkText = document.getElementsByTagName('nav')[0].getElementsByTagName('a');

for ( var n of linkText ) {
  n.addEventListener('click', function() {
    document.getElementById('line1').classList.remove('line1');
    document.getElementById('line2').classList.remove('line2');
    document.getElementById('line3').classList.remove('line3');
    document.getElementById('overrayTop').classList.remove('showTop');
    document.getElementById('overrayBottom').classList.remove('showBottom');
    document.getElementById('nav').classList.remove('showNav');
  });
};

