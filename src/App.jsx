import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.css'


// Lazy load pages (better performance)
const HomePage = lazy(() => import('./assets/pages/HomePage'))
const VideoPage = lazy(() => import('./assets/pages/VideoPage'))


function Loader() {
  return (
    <div className="flex items-center justify-center h-screen text-xl font-semibold">
      Loading...
    </div>
  )
}

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="video/:id" element={<VideoPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App