class GitHub {
  constructor() {
    this.client_id = "f020b6de6660e15fde35";
    this.client_secret = "3941409517451ad8842b4c936e138d66504e0744";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
