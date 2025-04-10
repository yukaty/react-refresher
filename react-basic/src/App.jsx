import './App.css'
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const siteTitle = 'Learn React';
  const currentYear = new Date().getFullYear();

  // progress of the course in percentage
  const [progress, setProgress] = useState(0);

  // set the document title to the site title
  useEffect(() => {
    document.title = siteTitle;
  }, []); // this effect runs only once when the component mounts

  return (
    <ThemeProvider>
      <Header siteTitle={siteTitle} />
      <MainContent progress={progress} setProgress={setProgress}/>
      <Footer siteTitle={siteTitle} currentYear={currentYear} />
    </ThemeProvider>
  )
}

export default App