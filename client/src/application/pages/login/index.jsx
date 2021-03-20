import './Login.scss';
import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import useUser from '../../hooks/useUser';
import { useRouter } from '../../hooks/useRouter';

const LoginPage = () => {
  const { loginUser } = useUser();
  const { push } = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      loginUser(JSON.stringify(values, null, 2));
      push('/');
    },
  });
  return (
    <div className="Login">
      <form onSubmit={formik.handleSubmit}>
        <div className="Login-fields">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
