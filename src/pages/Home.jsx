import Navbar from '../components/navbar';
import Header from '../components/Header';
import Portofolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';



function Home() {
  return (
    <>
        <Navbar/>
        <Header/>
        <Portofolio/>
        <About/>
        <Footer/>
    </>
  )
}

export default Home