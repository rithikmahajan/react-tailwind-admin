import logo from './logo.svg';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <header className="text-center">
          <img src={logo} className="h-20 w-20 mx-auto mb-4 animate-spin" alt="logo" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">React + Tailwind</h1>
          <p className="text-gray-600 mb-6">
            Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm">src/App.js</code> and save to reload.
          </p>
          <a
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
