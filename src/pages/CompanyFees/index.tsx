import { Container } from "../../components/container";

export function CompanyFees() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bandeira = formData.get("bandeira") as string;
    const valor = formData.get("valor") as string;
    const parcelas = formData.get("parcelas") as string;

    if (bandeira === null) {
      alert("Selecione uma bandeira válida");
      return;
    }

    console.log({
      bandeira,
      valor,
      parcelas,
    });
  }

  return (
    <Container>
      <h1>Página taxas para empresa</h1>
      <form
        className="flex flex-col justify-center items-center border"
        onSubmit={handleSubmit}
      >
        <select name="bandeira" id="bandeira">
          <option disabled selected>
            Selecione a bandeira
          </option>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="elo">Elo</option>
          <option value="hiper">Hiper</option>
        </select>
        <label>Valor:</label>
        <input type="text" placeholder="0" name="valor" />
        <label>Parcelas:</label>
        <input type="text" placeholder="0" name="parcelas" />

        <p>Valor a receber: </p>
        <div className="flex flex-row gap-2 ">
          <button type="submit">Calcular</button>
          <button>Limpar</button>
        </div>
      </form>
      <p>Custo efetivo total </p>
    </Container>
  );
}
