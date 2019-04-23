class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
          <a href="${
            user.html_url
          }" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary mb-2">Public Repos: ${
            user.public_repos
          }</span>
          <span class="badge badge-secondary mb-2">Public Gists: ${
            user.public_gists
          }</span>
          <span class="badge badge-success mb-2">Followers: ${
            user.followers
          }</span>
          <span class="badge badge-info mb-2">Public Following: ${
            user.following
          }</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: <a href="${
              user.blog
            }" target="_blank"> ${user.blog} </a></li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  // Show User Repos
  showRepos(repos) {
    let output = "";
    let b = `null`;
    repos.forEach(function(repo) {
      let a = `<a href='${repo.homepage}' target="_blank"> View Demo </a>`;
      output += ` <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
          Repo: <a href="${repo.html_url}" target="_blank">${repo.name}</a> <br>
          Homepage: ${repo.homepage ? a : b} 
          
        </div>
        <div class="col-md-6">
          <span class="badge badge-primary mb-2"
            >Stars: ${repo.stargazers_count}</span
          >
          <span class="badge badge-secondary mb-2"
            >Watchers: ${repo.watchers_count}</span
          >
          <span class="badge badge-success mb-2"
            >Forks: ${repo.forks_count}</span
          >
        </div>
      </div>
    </div>      
      `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  // Show Alert Messages
  showAlert(message, className) {
    // Clear any remaining alert
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    // Add class
    div.className = className;
    // Insert Text inside the div
    div.appendChild(document.createTextNode(message));
    // select container/Parent element
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    // Insert the alert
    container.insertBefore(div, search);

    // Timout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
