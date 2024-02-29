import React from 'react';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider"></div>
      <button className="btn btn-circle btn-outline my-4">
      <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;