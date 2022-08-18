const btn = document.getElementById("btn");
const film = document.getElementById("film");
const error = document.getElementById('error')
const content = document.querySelector('.content')

let allShows;

btn.addEventListener("click", (e) => {
  e.preventDefault(e);
  content.textContent = '';
  const showName = film.value;
  const showID = searchShow(allShows, showName);

  fetch(`/shows/${showID}/episodes`)
    .then((res) => res.json())
    .then((data) => {
      objData(data)
    })
    .catch((err) => console.log("err"));
});

const searchShow = (shows, showName) => {
  const show = shows.filter(show => {
    return show.name.toLowerCase() === showName.toLowerCase();
  })
  if(show.length === 1) {
    error.innerHTML = ''
    return show[0].id;
  } else {
    error.innerHTML = `<h5>مش مشكلتي انك مش مدخل الاسم صح</h5>`
  }
}

window.onload = () => {
  fetch('/shows')
    .then((res) => res.json())
    .then((data) => {
        objData(data)
      allShows = data;
    })
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
