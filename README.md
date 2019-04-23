# GitHub Finder

JS Application to fetch github user data - [View Demo](https://bankole2000.github.io/githubfinder)

[![Practice](https://img.shields.io/badge/Practice-JavaScript-yellow.svg)](https://bankole2000.github.io/githubfinder)

_<p align="center">"I continue to push on... Longing to Master the Ways of JavaScript Ninjutsu"</p>_

<div align="center" style="text-align:center; margin:auto;">
<img align="center" src="https://i.imgur.com/SeUttrI.png" width="150"/>
</div>

## What it is

An simple, well-commented, learning oriented, single page JS demo Project to practice ES6 programming concepts, using `fetch API, Primses, async await` (all that good stuff) and `github API`. Built with:

- HTML
- Vanilla JS - ES6
- [Bootswatch CSS](http://www.bootswatch.com/) - A Bootstrap based CSS Theming tool
- [Github API](https://api.github.com/users/) - You're all there yo.
- [Awesomeness](https://www.wikihow.com/Love-Programming) - Strictly for the love of coding _Mehn!_

## What it does

- Finds Users on Keyup Event
- Manipulates DOM to display User Data
- Links Back to User Page
- Retreives and displays latest User Repos
- Link Back to Repos and Home Pages (if available)

## Learning Points

- ES6 Classes
- Fetch API
- Promises
- Async Await
- Iternary and Template Strings
- DOM Manipulation & Traversal
- Event Handing & Delegation
- Creating & Appending Elements
- A lil Bootstrap 4 syntax n Alerts

## Some cool stuff

I think its **_So Cool_** that you can make multiple requests using `async await` in a single function. (a method actually, of the `Github()` made in the `github.js` file). Much better (and imho more _reliable_ than ES5 callbacks/Ajax):

```javascript
async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
```

Also, perhaps I wasn't doing it properly, but I had issues with using the `iternary operator` within the `string literal`, for the Homepage Links (in the repo object `forEach()` loop). So a work around I did was this:

```javascript
let a = `<a href='${repo.homepage}' target="_blank"> View Demo </a>`,
  b = `Null`;
`Homepage: ${repo.homepage ? a : b}`; // in the loop
```

> Also (Just a thought), this is probably how [Sourcer.io](https://sourcerer.io) Works... pretty cool.

## Features in Development

Naaa... This is just about done and dusted far as I'm concerned, lol ^-^

## Contribution

Contributions are highly welcome. Feel free to fork, clone, make pull requests, report issues etc.

## Acknowledgments

- Many thanks to [@bradtraversy](https://github.com/bradtraversy) for his awesome courses - _i will not fail you sensei_
- Thanks to [@torvalds](https://github.com/torvalds) For Making the world a better place
- And To anyone reading this... _You're awesome!_

That being said
_<p align="center">Adieu, Till I push again... I must return to my meditations on the Ways of JS Ninjustu</p>_
