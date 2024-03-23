import { DataForm } from '../../context/getFormData';
import { Container } from './styles';
import { useContext } from 'react';


const RegisterScreen = () => {
    const { paes, carnes, opcionais } = useContext(DataForm);

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
                        {
                            paes?.map((item) => (
                                <option key={item.id} value={item.tipo}>{item.tipo}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-area">
                    <p>Escolha a carne:</p>
                    <select id="cars" name="cars">
                        {
                            carnes?.map((item) => (
                                <option key={item.id} value={item.tipo}>{item.tipo}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-area checkbox-area">
                    <p>Selecione os opcionais:</p>

                    {
                        opcionais?.map((item) => (
                            <div className='checkbox-option' key={item.id}>
                                <input type="checkbox" value={item.tipo} name='value' />
                                <label htmlFor="value">{item.tipo}</label>
                            </div>
                        ))
                    }
                </div>

                <button>Gerar Pedido!</button>
            </form>
        </Container>
    )
}


export default RegisterScreen;