window.onload = () => {
  fetch('/shows')
    .then((res) => res.json())
    .then((data) => objData(data))
    .catch((err) => console.log(err));
};

const objData = (data) => {
  for (let i = 0; i < 20; i++) {
    renderData(data[i]);
  }
};

const renderData = (obj) => {
  const content = document.querySelector('.content');
  const card = document.createElement('div');
  card.classList.add('card');
  const img1Div = document.createElement('div');
  img1Div.classList.add('img1');
  const img1 = document.createElement('img');
  img1.setAttribute('src', obj.image.medium);
  img1Div.appendChild(img1);
  card.appendChild(img1Div);

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  const titleText = document.createTextNode(obj.name);
  titleDiv.appendChild(titleText);
  card.appendChild(titleDiv);

  const textDiv = document.createElement('div');
  textDiv.classList.add('text');
  textDiv.innerHTML = obj.summary;
  card.appendChild(textDiv);

  content.appendChild(card);
};
