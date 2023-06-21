# Job-track

#### Run The App Locally

- npm run install-dependencies
- rename .env.temp to .env
- setup values ofr -MONGO_URL, JWT_SECRET, JWT_LIFETIME
- npm start
- visit url http://localhost:3000/

### Setup React App

- create 'client' folder
- open terminal
- cd client
- npx create-react-app
- type command `nmp start` to run locally.
- set editor/browser side by side
- copy/paste assets from complete project

### Spring Cleaning

- Remove all default file from src aft npx create-react-app

### Styling

- Using styled component with dynamic variables. It is very fantastic.

### Images

- for images u can visit https://undraw.co/

### React-router-dom

- Using react-router dom version :6
- import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
- Connect to browser's URL with BrowswerRouter

### context

- `import React, { useReducer, useContext } from 'react';`

### server

- `"type" : "module"`
- create server.js
- modify pakage.json to run with nodemon ( `"start" : "nodemon server"`)

### middleware

- create not-found.js and export notFoundMiddleware function which serve for the unavailable route
- create error-handler.js to handle the errors.

### connect to DB

- install mongoose
- create connect.js
- in server.js create start() function
- get connection string
- setup as MONGO_URL in .env
- provide credentials and DB Name

### Auth controller and Route Structure

- create <b>controllers</b> foler
- authRoutes.js

```js
export { register, login, updateUser };
```

- authRoutes.js
- setup express router
- import functions from authController.js

### Job controller and Route Structure

- jobControler.js
- create functions
