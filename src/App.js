import React from 'react';
import './app.scss';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignPage from './pages/sign/sign.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';
import { onAuthStateChanged } from 'firebase/auth';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubsctibeFromAuth = null;

  componentDidMount() {
    this.unsubsctibeFromAuth = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubsctibeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign" element={<SignPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
