import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import './App.css';
import Timeline from './components/timeline/Timeline';


function App() {
  return (
        <div className="app">
          {/* Sidebar */}
        <Sidebar />

        {/* TimeLine */}
        <Timeline />
        {/* Widget */}
      </div>
  )
}

export default App
