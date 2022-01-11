import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import MainButton from '../main-button/main-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form className="form sign-in__form" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="form__buttons">
            <MainButton type="submit">Sign In</MainButton>
            <MainButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In With Google
            </MainButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
