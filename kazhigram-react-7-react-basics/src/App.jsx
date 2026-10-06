import './style.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Feed from './components/Feed'
import NewPostForm from './components/NewPostForm'

function App() {
  return (
    <div>

      <NavBar />

      <main className="container mt-4">
        <Feed />
        <NewPostForm />
      </main>

      <Footer />

    </div>
  )
}

export default App
