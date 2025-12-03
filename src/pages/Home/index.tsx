import { Container } from "../../components/container";

export function Home() {
  return (
    <Container>
      <h1 className="text-2xl font-medium">Página home</h1>
      <p className="mb-2">
        Olá! As taxas serão repassadas para o cliente ou assumidas pela empresa?
      </p>
      <div className="flex flex-col ">
        <button className="bg-[#00af1d] text-white border p-3 mb-2 font-medium rounded-md cursor-pointer">
          Empresa
        </button>
        <button className="bg-[#00af1d] text-white border p-3 mb-2 font-medium rounded-md cursor-pointer">
          Cliente
        </button>
        <button className="bg-[#00af1d] text-white border p-3 mb-2 font-medium rounded-md cursor-pointer">
          Cadastro de taxas
        </button>
      </div>
    </Container>
  );
}
