import { Container } from './App.styles.jsx'
import Header from './components/header/Header.jsx'

import Login from './views/Login/Login'

function App() {


  return (
    <Container>
      <Header/>
      <Login></Login>
    </Container>
  )
}

export default App
