const posts = document.querySelector(".posts-container");

async function getUsers() {
  try {
    const URL = "https://randomuser.me/api/?results=1";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setDisplay(data);
    return data;
  } catch (e) {
    console.error(e);
  }
}

const createElements = (person) => {
  /*Post Container*/
  const post = document.createElement("section");
  post.className = "post";

  /*User post info */

  const user = document.createElement("div");
  const avatar = document.createElement("img");
  const name = document.createElement("p");
  //   const locationContainer = document.createElement("div");
  const location = document.createElement("p");

  user.classList.add("general-info-user");
  avatar.classList.add("user-avatar");
  //   locationContainer.classList.add("user-location");
  name.classList.add("name");
  location.classList.add("location-name");

  name.textContent = `${person.name.first} ${person.name.last}`;
  avatar.src = `${person.picture.thumbnail}`;
  location.textContent = `${person.location.city} ${person.location.country}`;
  user.append(name, avatar, location);

  /* post */
  const image_post = document.createElement("img");

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

  const totalLikes = document.createElement("p");
  const user_name = document.createElement("p");
  const commentary = document.createElement("p");

  image_post.classList.add("image-post");
  totalLikes.classList.add("total-likes");
  user_name.classList.add("user-name");
  commentary.classList.add("commentary");

  image_post.src = "./assets/cat.jpg";

  post.append(
    name,
    avatar,
    location,
    image_post,
    commentBtn,
    shareBtn,
    likeBtn
  );

  posts.appendChild(post);
};

const setDisplay = (persons) => {
  const { results } = persons;
  results.forEach((person) => {
    createElements(person);
  });
};

getUsers();
