const ticketCardArea = document.querySelector('.ticketCard-area');
const searchMenu = document.querySelector('#searchMenu');
const searchNum = document.querySelector('#search-num');

const url = 'https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json';

let data = [];

axios.get(url).then(function (res) {
  data = res.data;
  console.log(res.data);
  renderHTML();
});

function renderHTML() {
  let ticketContent = '';
  data.forEach((item) => {
    ticketContent += `<li class="ticketCard">
    <a href="#" class="ticketCard-img">
      <img
        src="${item.imgUrl}"
        alt="${item.name}"
      />
    </a>
    <div class="ticketCard-location">${item.area}</div>
    <div class="ticketCard-content">
      <h2 class="ticketCard-title">${item.name}</h2>
      <p class="ticketCard-description">
      ${item.description}
      </p>
      <div class="ticketCard-info">
        <p class="ticketCard-num"><i class="fa-solid fa-circle-exclamation"></i>剩下最後 ${item.group} 組</p>
        <p class="ticketCard-price">
          TWD
          <span>$${item.price}</span>
        </p>
        <div class="ticketCard-rate">${item.rate}</div>
      </div>
    </div>
  </li>`;
    ticketCardArea.innerHTML = ticketContent;
  });
}
