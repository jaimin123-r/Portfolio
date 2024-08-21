import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', { email: formData.email, password: formData.password });
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Sign Up:', formData);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot Password:', formData.email);
    // Implement forgot password logic here
  };

  const handleSocialAuth = (provider) => {
    console.log(`${provider} ${isLogin ? 'Login' : 'Sign Up'}`);
    // Implement social auth logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">
          {showForgotPassword ? 'Forgot Password' : isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={showForgotPassword ? handleForgotPassword : handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border-b-2 border-purple-200 focus:border-purple-500 outline-none transition-colors"
              required
            />
          </div>
          {!showForgotPassword && (
            <>
              {!isLogin && (
                <div className="mb-4">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b-2 border-purple-200 focus:border-purple-500 outline-none transition-colors"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-b-2 border-purple-200 focus:border-purple-500 outline-none transition-colors"
                  required
                />
              </div>
              {!isLogin && (
                <div className="mb-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b-2 border-purple-200 focus:border-purple-500 outline-none transition-colors"
                    required
                  />
                </div>
              )}
            </>
          )}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            {showForgotPassword ? 'Reset Password' : isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        {!showForgotPassword && (
          <>
            <div className="text-center my-4">
              <span className="text-gray-500">OR</span>
            </div>
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => handleSocialAuth('Google')}
                className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Google
              </button>
              <button
                onClick={() => handleSocialAuth('Facebook')}
                className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Facebook
              </button>
            </div>
          </>
        )}
        <div className="text-center">
          {!showForgotPassword && (
            <button
              onClick={() => setShowForgotPassword(true)}
              className="text-purple-600 hover:underline"
            >
              Forgot Password?
            </button>
          )}
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setShowForgotPassword(false);
            }}
            className="text-purple-600 hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;