//Initialize github class
const github = new GitHub();

// Initialize UI class
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input even listener
searchUser.addEventListener("keyup", e => {
  // Get Input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
      } else {
        // Show Profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile
  }
});
