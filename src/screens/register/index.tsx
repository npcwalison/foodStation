import { useState, useContext } from 'react';
import { DataForm } from '../../context/getFormData';
import { Container } from './styles';



const RegisterScreen = () => {
    const { ingredients } = useContext(DataForm);

    //dados_coletados_do_formulario.
    const [nomeCliente, setNomeCliente] = useState('');
    const [paoSelecionado, setPaoSelecionado] = useState('');
    const [carneSelecionada, setCarneSelecionada] = useState('');
    const [opcionaisSelecionados, setOpcionaisSelecionados] = useState<string[]>([]);

    const handleCheckboxChange = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            setOpcionaisSelecionados([...opcionaisSelecionados, value]);
        } else {
            setOpcionaisSelecionados(opcionaisSelecionados.filter(opcional => opcional !== value));
        }
    };
    //coletando_dados_do_formulario.

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Aqui você pode processar os dados como desejar, como enviar para um backend ou fazer outras operações.
        console.log('Nome do Cliente:', nomeCliente);
        console.log('Pão Selecionado:', paoSelecionado);
        console.log('Carne Selecionada:', carneSelecionada);
        console.log('Opcionais Selecionados:', opcionaisSelecionados);
    };

    return (
        <Container className='body-container'>
            <form onSubmit={handleSubmit}>
                <h2>MONTE SEU HAMBURGUER</h2>
                <div className="input-area">
                    <p>Nome do Cliente:</p>
                    <input 
                        type="text" 
                        placeholder='Digite aqui...'
                        value={nomeCliente}
                        onChange={(event) => setNomeCliente(event.target.value)}
                    />
                </div>

                <div className="input-area">
                    <p>Escolha o pão:</p>
                    <select 
                        value={paoSelecionado}
                        onChange={(event) => setPaoSelecionado(event.target.value)}
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
                        value={carneSelecionada}
                        onChange={(event) => setCarneSelecionada(event.target.value)}
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
                                    checked={opcionaisSelecionados.includes(item.tipo)}
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