# Job-track

#### Run The App Locally

- npm run install-dependencies
- setup values for -MONGO_URL, JWT_SECRET, JWT_LIFETIME
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

### Postman

- URL globar var
- JOBIFY Collection
- auth and jobs folders
- setup routes

### User Model

- <b>models</b> folder
- User.js
- setup schema
- name, email password, lastName, location
- all `{type:String}`

### Validate Email

```js
validate:{
    validator:{field}=>{return 2>1},
    message:'Please provide valid email'
}
```

- install validator package

```sh
npm install validator
```

### Register User - Initial Setup

- authController
- import User model
- setup temporary try/catch
- await `User.create(req.body)`
- if success 201 with `json({user})(temp)`
- if error 500 with `json({msg:'there was an error'}`

### setup express-async-errors

- handles try and catch part efficiently
- use throw Error('error') instead of next(error)

### Http status codes

- constants for status codes
- less bugs
- provides consistency
- easier to read/manage
- import/setup in authController and error-handler
- setup defaultError

### Custom errors

### Refactor Errors

- create errors folder
- create custom-api, bad-request, not-found, index.js files
- add proper imports
- setup index.js just like in the front-end
- import `{BadRequestError}` in authController
- gotcha 'index.js'

### Hash Passwords

- one way street, only compared hashed values
- using bcryptjs

```sh
npm install bcryptjs
```

- import bcryptjs in User Model
- hash passwords before saving them into database (in user schema)
- compare password when logging
- await genSalt(10)
- await hash(password, salt)
- await compare(requestPassword, currentPassword)
- [mongoose middleware]
- UserSchema.pre('save' async function(){"this" points back to UserSchmea})

### Mongoose - Custome Instance Methods

- (https://mongoosejs.com/docs/guide.html#methods)

- UserSchema.methods.createJWT = function(){console.log(this)}
- register controller
- right after User.create()
- invoke user.createJWT()

### JWT

- token

```sh
npm i jsonwebtoken
```

- User model
- import jwt from 'jsonwebtoken'
- jwt.sign(payload, secret, options)
- createJWT

```js
return jwt.sign({ userId: this._id }, 'jwtSecret', { expiresIn: '1d' });
```

### JWT_SECRET and JWT_LIFETIME

- [Keys Generator](https://www.allkeysgenerator.com/)
- RESTART SERVER

### Complete Register

- password :{select:false}
- complete response

### Concurrently

- front-end backend (server)
- run separate terminals
- [concurrently](https://www.npmjs.com/package/concurrently)

```sh
  npm install concurrently --save-dev
```

- package.json

```js
// --kill-others switch, all commands are killed if one dies
// --prefix client - folder
// cd client and npm start
// escape quotes

"scripts":{
    "server:"nodemon server --ignore client",
    "client":"npm start --prefix client",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
},
```

### Cors Error

- two fixes (cors package and proxy)

### Cors package

```sh
npm install cors
```

### Proxy

- access from anywhere
- don't want to use full url

[cra proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

```js
"proxy" :'http://localhost:5000'
```

- my preference to remove trailing slash /
- restart app

```js
const fetchData = async () => {
  try {
    // const response = await fetch('/data.json'); //fetching from own server creates no problem
    const response = await fetch('/api/v1'); //but fetching from other server creating problem
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchData();
}, []);
```

### Register Setup

```js
appContext.js;

const initialState = {
  user: null,
  toke: null,
  userLocation: '',
};
```

- actions.js REGISTER_USER_BEGIN, SUCCESS, ERROR
- import reducer, appContext

```js
appContext.js;
const registeruser = async (currentUser) => {
  console.log(currentUser);
};
```

- import in Register.js

```js
Register.js;

const currentUser = { name, email, password };
if (isMember) {
  console.log('already a meber');
} else {
  registerUser(currentUser);
}

return (
  <button type="submit" className="btn btn-block" disabled={isLoading}>
    submit
  </button>
);
```

### Axios

- [axiox docs](https://axios-http.com/docs/intro)

```sh
npm install axiso
```

### Register

```js
appContext.js;
```

### Navigate to Dashboard

```js
Register.js;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);
};
```

### Morgan Package

- http logger middleware for node.js
- [morgan docs](https://www.npmjs.com/package/morgan)

```sh
npm install morgan
```

```js
import morgan from 'morgan';

if (processs.env.NODE_ENV !== 'production') {
  app.user(morgan('dev'));
}
```

### UnauthenticatedError

- unauthenticated.js in errors
- import/export

```js
import { StatusCodes } from 'http-status-codes';
import { customAPIError } from './custom-api.js';

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
```

### Compare Password

User.js in models

```js
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
```

### Login Controller

```js
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all  values');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  // console.log(user);

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
  // res.send('login user');
};
```

### Login User Setup

- action.js LOGIN_USER_BEGIN, SUCCESS, ERROR
- import reducer, appContext

```js
appContext.js;
const loginUser = async (currentUser) => {
  console.log(currentUser);
};
```

### Nested pages in React Router 6

### Dashboard pages

- delete Dashboard.js
- fix imports/exports
- replace in home route

```js
<Route path="/" element={<div>dashboard</div>} />
```

- create <b>dashboard</b> directory in pages
- create AddJob, AllJob, Profile, stats, sharedLayout, index.js
- setup basic returns
- export all with index.js
- import all pages in App.js

```js
App.js

<Route path ='/'>
<Route path ='stats' element ={<Stats/>}/>
<Route path='profile' element={Profile}></Route>
<Route path= 'all-jobs' element={<AllJobs />} ></Route>
<Route path="add-job" element={<AddJob />} ></Route>
```

### Shared Layout

```js
App.js

<Route path ='/' element = {<SharedLayout/>} >
```

```js
SharedLayout.js;

import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">add job</Link>
        <Link to="all-jobs">all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
```

### Protected Route

- create ProtectedRoute.js in pages
- import/export
- wrap SharedLayout in App.js

### Navbar, SmallSidebar, BigSidebar

- create Navbar, SmallSidebar, BigSidebar in components
- import Wrappers from assets/wrappers
- simple return
- import /export

### React Icons

```sh
npm install react-icons
```

### Nav Links component

- create Navlinks component
- styles still set from Wrapper
- also can setup in link.js, preference

### Authencticate User Setup

- create auth.s in <b> middleware</b>

```js
const auth = async (req, res, next) => {
  console.log('authenticate user');
  next();
};
export default auth;
```
