import Alert from "./components/Alert";
import Card from "./components/Card";
import Carousel from './components/Carrusel';
import FooterNavigationBar from './components/FooterNavigationBar'

export default function Home() {
  return (
    <>
    <div className="static">
    <Alert/>
    <div className="px-4 pt-5 pb-3">
      <p style={{ fontSize: '32px', fontWeight: '700'}}>Todas las opciones</p>
    </div>
    <Carousel/>
    <div className="px-4 pt-5 pb-3">
      <p style={{ fontSize: '32px', fontWeight: '700'}}>Opciones en California</p>
    </div>
    <Carousel/>
    <div className="absolute bottom-0">

    <FooterNavigationBar></FooterNavigationBar>
    </div>
    </div>
    </>
  );
}
