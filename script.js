const posts = document.querySelector(".posts-container");

const images = [
  {
    url: "./assets/cat.jpg",
    alt: "A kitten saw something that capt his atention",
  },
  {
    url: "./assets/man.jpg",
    alt: "A man seeing a big mountain with snow and trees",
  },
  {
    url: "./assets/outdoors.jpg",
    alt: "A man that is looking yo the camera",
  },
];

async function getUsers() {
  try {
    const URL = "https://randomuser.me/api/?results=3";
    const response = await fetch(URL);
    const data = await response.json();
    setDisplay(data);
    return data;
  } catch (e) {
    throw new Error(e);
  }
}

const createElements = (person) => {
  const { postHeader, post, image_post } = createPost(person);
  const buttons = createButtons();

  const totalLikes = document.createElement("p");
  totalLikes.classList.add("total-likes");
  totalLikes.textContent = `${Math.floor(Math.random() * 100)} likes`;

  const div = document.createElement("div");
  div.className = "username-photo-title";
  const user_name = document.createElement("p");
  user_name.textContent = `${person.login.username}`;

  const title = document.createElement("p");
  title.textContent = "My adorable kitten";
  title.classList.add("commentary");
  div.append(user_name, title);

  user_name.classList.add("user-name");

  post.append(postHeader, image_post, buttons, totalLikes, div);

  posts.appendChild(post);
};

function createPost(person) {
  const image_post = createImagePost();

  /*Post Container*/
  const post = document.createElement("section");
  post.className = "post";

  /*User post info */

  const postHeader = document.createElement("div");
  const userInfo = document.createElement("div");
  const avatar = document.createElement("img");
  const name = document.createElement("p");
  // const locationContainer = document.createElement("div");
  const location = document.createElement("p");

  postHeader.classList.add("post-header");
  userInfo.classList.add("user-info");
  avatar.classList.add("user-avatar");
  // locationContainer.classList.add("user-location");
  name.classList.add("name");
  location.classList.add("location-name");

  name.textContent = `${person.name.first} ${person.name.last}`;
  avatar.src = `${person.picture.thumbnail}`;
  location.textContent = `${person.location.city}, ${person.location.country}`;
  userInfo.append(name, location);
  postHeader.append(avatar, userInfo);

  return {
    post,
    postHeader,
    image_post,
  };
}

function createImagePost() {
  const image_post = document.createElement("img");
  image_post.classList.add("image-post");

  images.forEach((_) => {
    image_post.src = _.url;
  });

  // image_post.alt = photo.alt;

  return image_post;
}

function createButtons() {
  /* post buttons*/

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  const commentBtn = document.createElement("button");
  const commentImg = document.createElement("img");
  commentBtn.className = "btn comment-btn";

  commentImg.src = "./assets/comment-icon.png";
  commentBtn.appendChild(commentImg);

  const shareBtn = document.createElement("button");
  const shareImg = document.createElement("img");
  shareBtn.className = "btn share-btn";

  shareImg.src = "./assets/enviar.png";
  shareBtn.appendChild(shareImg);

  const likeBtn = document.createElement("button");
  const likeImg = document.createElement("img");
  likeImg.src = "./assets/like.png";
  likeBtn.appendChild(likeImg);
  likeBtn.className = "btn like-btn";

  buttons.append(likeBtn, commentBtn, shareBtn);

  return buttons;
}

const setDisplay = (persons) => {
  const { results } = persons;
  results.forEach((person) => {
    createElements(person);
  });
};

window.addEventListener("DOMContentLoaded", getUsers);
