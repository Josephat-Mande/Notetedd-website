import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-500">
      <div className="p-20 bg-orange-500 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-extrabold mb-4">404</h1>
        <p className="mb-6 text-gray-600">OOPS! Page not found.</p>
        <Link to="/" className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold">Go Home</Link> 
        <Link to="/contact" className="mt-2 inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold ml-4">Contact Suport</Link>
      </div>
    </div>
  )
}

export default NotFound
