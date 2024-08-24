import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  redirect as Redirect,
  useLocation,
} from 'react-router-dom';


// Home component
const Home = () => <h1>Welcome Home</h1>;

// About component
const About = () => <h1>About Us</h1>;

// Contact component
const Contact = () => <h1>Contact us</h1>;

// Challenges data
const challenges = [
  {
    name: '30 Days Of Python',
    description:
      '30 Days of Python challenge is a step by step guide to learn Python in 30 days.',
    status: 'completed',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '20 Nov 2019 - 20 Dec 2019',
    slug: 'python',
    url:
      'https://github.com/Asabeneh/30-Days-Of-Python',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Days Of JavaScript',
    description:
      '30 Days of JavaScript challenge is a step by step guide to learn JavaScript in 30 days.',
    status: 'completed',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '1 Jan 2020 - 30 Jan 2020',
    slug: 'javascript',
    url: 'https://github.com/Asabeneh/30-Days-Of-JavaScript',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 Days Of React',
    description:
      '30 Days of React challenge is a step by step guide to learn React in 30 days.',
    status: 'ongoing',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '1 Oct 2020- 30 Oct 2020',
    slug: 'react',
    url: 'https://github.com/Asabeneh/30-Days-Of-React',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  {
    name: '30 HTML and CSS',
    description:
      '30 Days of HTML and CSS challenge is a step by step guide to learn HTML and CSS in 30 days.',
    status: 'coming',
    days: 30,
    level: 'Beginners to Advanced',
    duration: '',
    slug: 'html-and-css',
    url: '',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
  },
  // Additional challenges...
];

const Challenge = ({
  challenge: {
    name,
    description,
    status,
    days,
    level,
    duration,
    author: { firstName, lastName },
  },
}) => (
  <div>
    <h1>{name}</h1>
    <p>{level}</p>
    <p>
      Author: {firstName} {lastName}
    </p>
    {duration && (
      <>
        {' '}
        <small>{duration}</small> <br />
      </>
    )}
    <small>Number of days: {days}</small>
    <p>{description}</p>
  </div>
);

const Challenges = () => {
  const location = useLocation();
  const path = location.pathname;
  const slug = path.split('/').slice(-1)[0];
  const challenge = challenges.find((challenge) => challenge.slug === slug);

  return (
    <div>
      <h1>30 Days Of React Challenge</h1>
      <ul>
        {challenges.map(({ name, slug }) => (
          <li key={slug}>
            <NavLink to={`/challenges/${slug}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        <Route
          path=''
          element={<h1>Choose any of the challenges</h1>}
        />
        <Route
          path={slug}
          element={<Challenge challenge={challenge} />}
        />
      </Routes>
    </div>
  );
};

const NotFound = () => <h1>The page you're looking for was not found</h1>;

const Navbar = ({ username }) => (
  <ul>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/about'>About</NavLink>
    </li>
    <li>
      <NavLink to='/contact'>Contact</NavLink>
    </li>
    <li>
      <NavLink to={`/user/${username}`}>User</NavLink>
    </li>
    <li>
      <NavLink to='/challenges'>Challenges</NavLink>
    </li>
  </ul>
);

const User = ({ username, isLoggedIn, handleLogin }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome {username} to the challenge</h1>
          <small>Now, you can navigate through all the challenges</small> <br />
        </>
      ) : (
        <p>Please log in to access the challenges</p>
      )}
      <button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  );
};

const Welcome = ({ handleLogin, isLoggedIn }) => (
  <div>
    {isLoggedIn ? 'Welcome to the challenge' : <p>Please log in</p>}
    <button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
  </div>
);

class App extends Component {
  state = {
    isLoggedIn: false,
    firstName: 'Asabeneh',
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar username={this.state.firstName} />
          <Routes>
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/contact'
              element={<Contact />}
            />
            <Route
              path='/user/:username'
              element={
                <User
                  username={this.state.firstName}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              }
            />
            <Route
              path='/login'
              element={
                <Welcome
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogin={this.handleLogin}
                />
              }
            />
            <Route
              path='/challenges/*'
              element={
                this.state.isLoggedIn ? (
                  <Challenges />
                ) : (
                  <Redirect to='/user/asabeneh' />
                )
              }
            />

            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
