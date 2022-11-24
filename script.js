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
  const { phone, email, picture } = user;

  const fullName = `${title} ${first} ${last}`;

  userContainer.innerHTML = `
      <h4>${fullName}</h4>
      <p>
          <img alt="${fullName} avatar" src="${picture.large}"/>
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
