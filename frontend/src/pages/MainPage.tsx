import "./MainPage.css"
import Header from '../component/Header'
import Footer from '../component/Footer'
import FirstSection from '../component/FirstSection'

const MainPage = () => {
  return (
    <div className="bg-golden min-h-screen">
      <Header/>
      <FirstSection/>
      <Footer/>
    </div>
  )
}

export default MainPage
