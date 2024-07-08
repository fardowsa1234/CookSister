import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-light py-3 py-md-5">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <h2 className="fs-6 fw-normal text-center" style={{ color: 'orange' }}>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden orange-input">
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          value={email || ''}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="password"
                          value={password || ''}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button className="btn btn-lg" style={{ backgroundColor: 'orange', color: 'white' }} type="submit">
                          Login
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-center" style={{ color: 'orange' }}>
                        Don&apos;t have an account? <Link to="/register" className="m-0 text-center" style={{ color: 'orange' }}>Sign Up</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
