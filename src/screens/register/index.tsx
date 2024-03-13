import { Container } from './styles';


const RegisterScreen = () => {
    function handleSubmit(e: any) {
        e.preventDefault();
        console.log('Você clicou em enviar.');
    }

    return (
        <Container className='body-container'>
            <form>
                <h2>MONTE SEU HAMBURGUER</h2>
                <div className="input-area">
                    <p>Nome do Cliente:</p>
                    <input type="text" placeholder='Digite aqui...' />
                </div>

                <div className="input-area">
                    <p>Escolha o pão:</p>
                    <select id="cars" name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>

                <div className="input-area">
                    <p>Escolha a carne:</p>
                    <select id="cars" name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>

                <div className="input-area checkbox-area">
                    <p>Selecione os opcionais:</p>
                    <div className='checkbox-option'>
                        <input type="checkbox" placeholder='Digite aqui...' name='value'/>
                        <label htmlFor="value">Queijo</label>
                    </div>

                    <div className='checkbox-option'>
                        <input type="checkbox" placeholder='Digite aqui...' name='value'/>
                        <label htmlFor="value">Presunto</label>
                    </div>
                </div>

                <button onClick={handleSubmit}>Gerar Pedido!</button>
            </form>
        </Container>
    )
}


export default RegisterScreen;