# Project Installation Guide

First, You’ll need to have Node >= 14 on your local development machine. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

> Once you have Node.js, you can clone or download this project.

------------------------------------------------------------

In the project directory, for installing project you can run:

### `npm install`

This will install all the module dependencies for the project. 
Now, create a .env or .env.local file in the project directory and paste in with the following. Dont't forget to replace PROVIDED_API_KEY with your own api key.

```
REACT_APP_API_BASE_URL = https://api.themoviedb.org/3/trending/all/day?api_key=PROVIDED_API_KEY
REACT_APP_IMAGE_BASE_URL = http://image.tmdb.org/t/p/w500
```

## Scripts

Inside the project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

