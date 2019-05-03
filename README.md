# Serverless stack using Next / Express / Firebase Hosting (Google Cloud Functions)

## Setup
1. `npm install`
1. Ensure you have a Firebase project, and Firebase CLI is correctly set up (`npm i firebase-tools -g` then `firebase login`)
1. Set the Firebase project ID in '/.firebaserc'

## Usage
1. Run the front end / Next app in development mode using `npm run dev` (runs in localhost:3000)
1. Run the back end / Express app in development mode using `npm run dev:server` (runs in localhost:3001)
1. Simulate the Firebase environment locally using `npm run serve`
1. Deploy to Firebase using `npm run deploy`

## Firebase Hosting is set in '/firebase.json'
- Requests to ``/api/**` are handled by a Cloud Function using Express in `src/functions/express`
- Other requests are handled by a Cloud Function using Next in `src/functions/index`
