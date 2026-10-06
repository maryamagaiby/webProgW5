import './style.css'

import Footer from './components/Footer'


import Header from './components/Header'
import CreatureField from './components/CreatureField'

function App() {
  return (
    <div>
      <Header name="Sleeping creatures"/>
      <CreatureField />

     

      <Footer text="Made with React"/>

    </div>
  )
}

export default App
