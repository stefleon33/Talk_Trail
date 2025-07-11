import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import '../src/assets/main.scss'
import Header from './components/Header'
import Footer from './components/shared/Footer'
import Body from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
