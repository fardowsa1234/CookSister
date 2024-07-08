import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

export default function RegisterModal({ isOpen, onClose }) {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (password === repeatPassword) {
      register(name, email, password);
      onClose(); 
    } else {
      alert("Passwords do not match!");
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold" style={{ color: 'orange' }}>Register</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="repeatPassword" className="block mb-2">Confirm Password</label>
            <input
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              id="repeatPassword"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Register
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-orange-500 hover:underline"
            >
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
