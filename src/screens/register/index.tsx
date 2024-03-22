import { DataForm } from '../../context/getFormData';
import { Container } from './styles';
import { useContext } from 'react';


const RegisterScreen = () => {
    const { ingredients } = useContext(DataForm);

    const getIngredients = {
        "paes": [
            {
                "id": 1,
                "tipo": "Italiano Branco"
            },
            {
                "id": 2,
                "tipo": "3 Queijos"
            },
            {
                "id": 3,
                "tipo": "Parmesão e Orégano"
            },
            {
                "id": 4,
                "tipo": "Integral"
            }
        ],
        "carnes": [
            {
                "id": 1,
                "tipo": "Maminha"
            },
            {
                "id": 2,
                "tipo": "Alcatra"
            },
            {
                "id": 3,
                "tipo": "Picanha"
            },
            {
                "id": 4,
                "tipo": "Veggie burger"
            }
        ],
        "opcionais": [
            {
                "id": 1,
                "tipo": "Bacon"
            },
            {
                "id": 2,
                "tipo": "Cheddar"
            },
            {
                "id": 3,
                "tipo": "Salame"
            },
            {
                "id": 4,
                "tipo": "Tomate"
            }
        ]
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
                        {
                            getIngredients.paes?.map((item) => (
                                <option key={item.id} value={item.tipo}>{item.tipo}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-area">
                    <p>Escolha a carne:</p>
                    <select id="cars" name="cars">
                        {
                            getIngredients.carnes?.map((item) => (
                                <option key={item.id} value={item.tipo}>{item.tipo}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-area checkbox-area">
                    <p>Selecione os opcionais:</p>
                    <div className='checkbox-option'>
                        <input type="checkbox" placeholder='Digite aqui...' name='value' />
                        <label htmlFor="value">Queijo</label>
                    </div>

                    <div className='checkbox-option'>
                        <input type="checkbox" placeholder='Digite aqui...' name='value' />
                        <label htmlFor="value">Presunto</label>
                    </div>

                    {
                        getIngredients.opcionais?.map((item) => (
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