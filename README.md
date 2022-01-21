# relay-examples

This is a collection of examples on how to use [relay](https://github.com/facebook/relay).

In order to be minimal, this repo does not have Flow or TypeScript set up. All examples use pure JavaScript.

Because we need a relay-compliant GraphQL server to practice, examples integrate with GitHub's GraphQL API.

# How to run

First, you need to grab a Personal Access Token from your GitHub account. To generate a token, go [here](https://github.com/settings/tokens/new). **You need to select at least the _repo_ scope.**

With your token in hand, clone this repo, then copy `.env.example` to `.env.local`, and set the environment variable `REACT_APP_GITHUB_AUTH_TOKEN` to your token, like this:

```
# .env.local
REACT_APP_GITHUB_AUTH_TOKEN=ghp_mytokenhere
```

Now, you can run `yarn` to install dependencies and `yarn start` to run the app. The app will be accessible at `localhost:3000`.

