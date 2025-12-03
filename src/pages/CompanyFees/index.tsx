import { Container } from "../../components/container";

export function CompanyFees() {
  return (
    <Container>
      <h1>Página taxas para empresa</h1>
      <form className="flex flex-col justify-center items-center border ">
        <select name="bandeira" id="bandeira">
          <option disabled selected>
            Selecione a bandeira
          </option>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="elo">Elo</option>
          <option value="hiper">Hiper</option>
        </select>
        <label>Valor</label>
        <input type="text" placeholder="0" />
        <label>Parcelas:</label>
        <input type="text" placeholder="0" />

        <p>Valor a receber: </p>
        <div className="flex flex-row gap-2 ">
          <button type="submit">Calcular</button>
          <button>Limpar</button>
        </div>
      </form>
      <p>Custo efetivo total</p>
    </Container>
  );
}
