import { useState } from 'react'
import './App.css'
import { ProfileCard } from './ProfileCard';

function App() {
  // manage the index of the current profile
  const [index, setIndex] = useState(0);

  // profile data
  const profiles = [
    { name: 'Kenta Samurai', title: 'Project Manager', bio: 'Good at progress management and problem solving.' },
    { name: 'Ayaka Tozawa', title: 'Full-stack Engineer', bio: 'Responsible for the design and operation of new services.' },
    { name: 'Hiroshi Sengoku', title: 'Junior Backend Engineer', bio: 'Currently challenging API development with Node.js.' },
    { name: 'Misaki Oda', title: 'UI/UX designer', bio: 'Pursuing easy-to-use and beautiful designs.' },
    { name: 'Yuki Tokunaga', title: 'Frontend engineer', bio: 'Currently developing with React and TypeScript.' }
  ]

  // update the index when the button is clicked
  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  // render the profile card and button
  return (
    <>
      <ProfileCard {...profiles[index]} />
      <button onClick={handleClick}>Next</button>
    </>
  )
}

export default App

