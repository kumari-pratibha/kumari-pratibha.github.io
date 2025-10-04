export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a 
          href="/" 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-normal hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}
