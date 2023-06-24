import React, { useState } from 'react';
import './SignInForm.css';

const SignInForm = ({hideSelectionPage, selectedIcon}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsFormValid(value && password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsFormValid(value && email);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform sign-in functionality using email and password
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your sign-in logic here
    // Redirect to the main content or perform necessary actions
    if (isFormValid) {
      // Redirect to main content or perform other actions
      console.log('Redirecting to main content...');
      hideSelectionPage(selectedIcon)
    }
  };

  return (
    <div className="sign-in-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" disabled={!isFormValid}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
