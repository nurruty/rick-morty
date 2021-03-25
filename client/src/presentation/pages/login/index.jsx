import './Login.scss';
import React from 'react';
import { useFormik } from 'formik';
import useUser from '../../../application/hooks/useUser';

const LoginPage = ({ isMobileSize }) => {
  const { loginUser, userError } = useUser();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const errorClass = userError && userError.code ? ' Login_error' : '';

  const mobileClass = isMobileSize ? ' Login_mobile' : '';
  return (
    <div className={'Login' + mobileClass + errorClass}>
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
            value={formik.values.password}
          />
          {userError && userError.code && <div className="error">Try Again!</div>}
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
