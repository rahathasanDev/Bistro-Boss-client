import React, { useState, useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);
  const [signInDisabled, setSignInDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6); // You can change the number 6 to adjust the captcha length
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCaptchaInputChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleValidateCaptcha = () => {
    const isValid = validateCaptcha(captchaInput);
    setCaptchaValid(isValid);
    setSignInDisabled(!isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 rounded-lg overflow-hidden">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className={`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 ${email ? 'text-black' : 'text-gray-900'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white`} 
                placeholder="Email address" 
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type={showPassword ? "text" : "password"} 
                autoComplete="current-password" 
                required 
                className={`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 ${password ? 'text-black' : 'text-gray-900'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white`} 
                placeholder="Password" 
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <span className="text-gray-400">Hide</span>
                ) : (
                  <span className="text-gray-400">Show</span>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <LoadCanvasTemplate />

          <div className="flex items-center">
            <input
              id="captcha-input"
              name="captcha-input"
              type="text"
              autoComplete="off"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-white"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={handleCaptchaInputChange}
            />
            <button
              type="button"
              className="ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleValidateCaptcha}
            >
              Validate
            </button>
          </div>

          <div>
            <button
              type="submit"
              disabled={signInDisabled}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ${signInDisabled ? 'bg-gray-300 cursor-not-allowed' : 'text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
