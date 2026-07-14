import { BrowserRouter, Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">
          Hello, World! 👋
        </h1>
        <p className="text-xl text-gray-500">
          Welcome to your brand new app. Let's build something amazing!
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
