import { useState, useContext } from 'react';
import { DataForm } from '../../context/getFormData';
import { Container } from './styles';

const RegisterScreen = () => {
    const { ingredients, createNewRequest } = useContext(DataForm);

    // Dados coletados do formulário.
    const [nome, setNome] = useState('');
    const [pao, setPao] = useState('');
    const [carne, setCarne] = useState('');
    const [opcionais, setOpcionais] = useState<string[]>([]);

    const handleCheckboxChange = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            setOpcionais([...opcionais, value]);
        } else {
            setOpcionais(opcionais.filter(opcional => opcional !== value));
        }
    };
    // Enviando dados do formilario para o getFormData
    const handleSubmit = (event: any) => {
        event.preventDefault();
        createNewRequest({ nome, pao, carne, opcionais });
    };

    return (
        <Container className='body-container'>
            <form onSubmit={handleSubmit}>
                <h2>MONTE SEU HAMBURGUER</h2>
                <div className="input-area">
                    <p>Nome:</p>
                    <input 
                        type="text" 
                        placeholder='Digite aqui...'
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>

                <div className="input-area">
                    <p>Escolha o pão:</p>
                    <select 
                        value={pao}
                        onChange={(event) => setPao(event.target.value)}
                    >
                        <option value="">Selecione...</option>
                        {
                            ingredients.paes?.map((item: any) => (
                                <option key={item.id} value={item.tipo}>{item.tipo}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-area">
                    <p>Escolha a carne:</p>
                    <select 
                        value={carne}
                        onChange={(event) => setCarne(event.target.value)}
                    >
                        <option value="">Selecione...</option>
                        {
                            ingredients.carnes?.map((item: any) => (
                                <option key={item.id} value={item.tipo}>{item.tipo}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-area checkbox-area">
                    <p>Selecione os opcionais:</p>
                    {
                        ingredients.opcionais?.map((item: any) => (
                            <div className='checkbox-option' key={item.id}>
                                <input 
                                    type="checkbox" 
                                    value={item.tipo} 
                                    name='value'
                                    checked={opcionais.includes(item.tipo)}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="value">{item.tipo}</label>
                            </div>
                        ))
                    }
                </div>

                <button type="submit">Gerar Pedido!</button>
            </form>
        </Container>
    )
}

export default RegisterScreen;