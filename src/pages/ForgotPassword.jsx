import { useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const ForgotPassword = () => {
  const { setUser, resetEmail } = useContext(AuthContext);
  const location = useLocation();
  const emailRef = useRef();

  const handlePasswordReset = () => {
    // const resetForm = e.target;
    const email = emailRef.current.value;

    resetEmail(email).then((result) => {
      const user = result.user;
      setUser(user);
      alert('Password reset email sent! Redirecting to Gmail...');
      window.location.href('https://mail.google.com');
    })
      .catch((error) => {
        console.error('Error sending password reset email:', error.message);
        alert('Failed to send password reset email. Try again.');
      });

    if (!email) {
      // toast
      alert('Please enter your email.');
      return;
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-green-800 text-center mb-6">
          Forgot Password
        </h2>
        <form 
           onSubmit={handlePasswordReset}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-600 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              ref={emailRef}
              defaultValue={location?.state?.email || ""}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
          <button
            type="button"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Reset Password
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          We’ll send you an email to reset your password.
        </p>
      </div>
    </div>
  );
};


export default ForgotPassword;
