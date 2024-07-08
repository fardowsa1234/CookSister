import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Register() {
  const { register } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');

  console.log(email, password, repeatPassword, name);

  function handleSubmit(e) {
    e.preventDefault();
    register(name, email, password);
  }

  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="text-center mb-3">
                </div>
                <h2 className="fs-6 fw-normal text-center" style={{ color: 'orange' }}>REGISTER NEW ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-2 overflow-hidden">
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Name</label>
                        <input type="text" value={name || ""} onChange={(e) => setName(e.target.value)} className="form-control" name="firstName" id="firstName" placeholder="First Name" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" value={email || ""} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="name@example.com" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={password || ""} onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" id="password" placeholder="Password" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="repeatPassword" className="form-label">Confirm Password</label>
                        <input type="password" value={repeatPassword || ""} onChange={(e) => setRepeatPassword(e.target.value)} className="form-control" name="repeatPassword" id="repeatPassword" placeholder="Confirm Password" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button className="btn btn-lg" style={{ backgroundColor: 'orange', color: 'white' }} type="submit">Signup</button>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="m-0 text-center" style={{ color: 'orange' }}>Already have an account? <Link to="/login" className="m-0 text-center" style={{ color: 'orange' }}>Login</Link></p>
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

export default Register;
