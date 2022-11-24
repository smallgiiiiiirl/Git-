const userContainer = document.getElementById("user");

const getUser = () => {
  return fetch("https://randomuser.me/api/").then((res) => res.json());
};

const renderLoading = () => {
  userContainer.innerHTML = "Loading...";
};

const renderError = () => {
  userContainer.innerHTML = "Error...";
};

const renderUser = (user) => {
  const { title, first, last } = user.name;
  const { phone, email, picture, gender } = user;

  userContainer.innerHTML = `
        <h4>${title} ${first} ${last}</h4>
        <p>
            <img alt="${title} ${first} ${last} avatar" src="${picture.large}"/>
            <br/>
            <strong>Email:</strong> ${email}
            <br/>
            <strong>Phone:</strong> ${phone}
        </p>
    `;
};

(async () => {
  try {
    renderLoading();

    const {
      results: [user],
    } = await getUser();

    renderUser(user);
  } catch (err) {}
})();
