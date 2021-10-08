import React, { ReactElement, useState } from 'react'
import logo from './logo.svg'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div className="border border-gray-50 rounded-xl p-20 shadow-xl">
      <header>
        <div className="flex justify-center">
          <img src={logo} className="h-32 w-32 animate-spin-slow" alt="logo" />
        </div>
        <p className="text-2xl pb-3">Hello Vite + React + tailwindcss!</p>
        <p>
          <button
            className="bg-purple-400 pl-2 pr-2 pt-1 pb-1 rounded text-sm text-purple-100"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p className="pb-3 pt-3">
          Edit{' '}
          <code className="border border-1 pl-1 pr-1 pb-0.5 pt-0.5 rounded border-purple-400 font-mono text-sm bg-purple-100 text-purple-900">
            src/App.tsx
          </code>{' '}
          and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-purple-400 underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-purple-400 underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <a
            className="text-purple-400 underline"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            tailwindcss Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
