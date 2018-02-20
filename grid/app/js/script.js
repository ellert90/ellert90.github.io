const gallery = document.querySelector('.gallert');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('.img');
const overlayClose = overlay.querySelector('.close');

function generatedHTML([h,v]) {
  return `
  <div class="item h${h} v${v}">
    <img src="img/${reandomNumber(12)}.jpg">
    <div class="item__overlay"
      <button>View</button>
    </div>
  </div>
  `;
}

function reandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
const digits = Array.from({ length: 50}, () =>
[reandomNumber(4), reandomNumber(4)]);

const html = digits.map(generatedHTML).join('');


console.log(html);
