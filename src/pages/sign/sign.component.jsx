import React from 'react';

import './sign.styles.scss';
import SignIn from '../../components/sign-in/sign-in.compoent';
import SignUp from '../../components/sign-up/sign-up.component';

const SignPage = () => (
  <div className="sign page">
    <div className="container">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignPage;
