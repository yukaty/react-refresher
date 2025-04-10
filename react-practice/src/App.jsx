import './App.css'
import { useEffect } from 'react'
import { MessageDisplay } from './components/MessageDisplay'
import { ToggleMessage } from './components/ToggleMessage'
import { UserList } from './components/UserList'

function App() {
  // Effect to log a message when the component mounts
  useEffect(() => {
    alert("Welcome to React!");
    console.log('Component mounted')
    return () => {
      console.log('Component unmounted')
    }
  }, []) // once when the component mounts

  // Message Display component
  const today = new Date()
  const date = today.toLocaleDateString()
  const time = today.toLocaleTimeString()

  return (
    <>
      <h1>Learn React - Practice</h1>
      <MessageDisplay date={date} time={time} />
      <ToggleMessage />
      <UserList />
    </>
  )
}
export default App