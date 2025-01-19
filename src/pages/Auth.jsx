import { useState } from 'react';

    export default function Auth() {
      const [isLogin, setIsLogin] = useState(true);

      return (
        <div className="min-h-screen bg-background text-text flex items-center justify-center p-8">
          <div className="bg-surface p-8 rounded-lg w-full max-w-md">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>

            <form className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-text-secondary mb-2">Username</label>
                  <input
                    type="text"
                    className="w-full bg-background text-text p-3 rounded-lg border border-accent"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-text-secondary mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-background text-text p-3 rounded-lg border border-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-text-secondary mb-2">Password</label>
                <input
                  type="password"
                  className="w-full bg-background text-text p-3 rounded-lg border border-accent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white p-3 rounded-lg"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="text-center text-text-secondary mt-4">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-primary"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-primary"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-accent"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-surface px-2 text-text-secondary">or</span>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
                Continue with Google
              </button>
              <button className="w-full bg-gray-800 text-white p-3 rounded-lg">
                Continue with GitHub
              </button>
            </div>
          </div>
        </div>
      );
    }
