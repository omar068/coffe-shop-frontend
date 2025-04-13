import Alert from "./components/Alert";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
    <Alert/>
    <div className="px-4 pt-5 pb-3">
      <p style={{ fontSize: '32px', fontWeight: '700'}}>Todas las opciones</p>
    </div>
    <Card />
    </>
  );
}
