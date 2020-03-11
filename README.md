# React Node Express Typescript Starter

Seed project for full-stack apps with configured heroku and firebase deployment scripts.

Frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Usage

- Clone project onto your machine
- Type `yarn install` in root directory
- Type `yarn watch` to run the app in development mode
- Open `http://localhost:3000` to view the app in the browser
- API is available at `http://localhost:4000`

## Deployment

- Install Git
- Install Heroku CLI
- Install Firebase CLI

### Heroku

1. Create project at <https://heroku.com>
2. Login to Heroku using `heroku login` command
3. Add Heroku remote using `git remote add heroku https://git.heroku.com/{PROJECT_NAME}.git` command. Don't forget to use your project name inside `{PROJECT_NAME}`
4. Deploy using `yarn deploy:backend` in root directory

### Firebase

1. Create project at <https://console.firebase.google.com>
2. Login to firebase - `firebase login`
3. Fill your project name in `.firebaserc` file
4. Deploy using `yarn deploy:frontend` command in root directory