//Div is for profile information 
const overview = document.querySelector(".overview");
const username = "elaine-codes";


const fetchInfo = async function () {
    const userInfo = await fetch(`https://api.github.com/users/${username}`);
    const data = await userInfo.json();
    displayUserInfo(data);
};

getUserInfo();

const displayUserInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data}</p>
      <p><strong>Location:</strong> ${}</p>
      <p><strong>Number of public repos:</strong> ${}</p>
    </div> 
    `;
    overview.append(div);
}