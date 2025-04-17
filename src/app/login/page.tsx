import FormComponent from './FormComponent';

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#040210]">
      <div className="bg-[#13132D] rounded-[8px] shadow-lg p-[16px] w-[360px] text-white">
        <h2 className="text-[24px] font-bold text-center mb-6">
          Iniciar Sesión
        </h2>
        <FormComponent />
      </div>
    </div>
  );
}