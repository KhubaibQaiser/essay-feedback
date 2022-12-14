# AI Essay Feedback

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech Stack

- ReactJS
- TypeScript
- MUI

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## TODOs

- Can implement the functionality for the `useTracker` hook to actually track different events. Right now, it's mocked.
- Can implement an API to GET the essay data - having a certain `id`. Probably using `react-query` or `useSWR` from `swr` package for better caching.
- Can implement an API to POST the user feedback against an essay `id`.
- The UI can be improve. Can make the `Ratings` component sticky, compact when user scrolls down.
- Change relative imports to absolute imports.

## Feedback Component

- Unrated
  ![unrated](https://i.postimg.cc/05Z8Hs0G/ratings-unrated.png)
- Rated
  ![rated](https://i.postimg.cc/0Q08vRRs/ratings-rated.png)
- Reviewed
  ![reviewed](https://i.postimg.cc/j28tWHS3/ratings-reviewed.png)
