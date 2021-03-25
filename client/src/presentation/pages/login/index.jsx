import './Login.scss';
import React from 'react';
import { useFormik } from 'formik';
import useUser from '../../../application/hooks/useUser';

const LoginPage = ({ isMobileSize }) => {
  const { loginUser } = useUser();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const mobileClass = isMobileSize ? ' Login_mobile' : '';
  return (
    <div className={'Login' + mobileClass}>
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
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
