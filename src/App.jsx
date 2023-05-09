import { Routes } from './Routes'
import { ThemeProvider } from 'styled-components'
import './App.css'

const App = () => {
  const theme = {
    primaryColor: '#5285EC',
    secondaryColor: '#537178',
    pageBackgroundColor: '#F4F4F6',
    grayColor: "#EEF1F8",
    lightGrayColor: "#7A7D7E",
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes></Routes>
      </ThemeProvider>
    </>
  )
}

export default App;
