import { useState } from 'react';

function FormValidator() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="form-wrap">
      <label>Email</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" disabled={!isFormValid}>
        Submit
      </button>
    </div>
  );
}

export default FormValidator;
