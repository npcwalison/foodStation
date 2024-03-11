import { Container } from './styles';

import { AuthContext } from '../../lib/context/requests';
import { useContext } from 'react';

const FormScreen = () => {
    const { burgers, setBurgers } = useContext(AuthContext);


    return (
        <Container className='body-container'>
            <table>
                <thead>
                    <tr>
                        <th>#:</th>
                        <th>Cliente:</th>
                        <th>Pão:</th>
                        <th>Carne:</th>
                        <th>Opciais:</th>
                        <th>Ações:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        burgers.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.pao}</td>
                                <td>{item.carne}</td>
                                <td>
                                    <ul>
                                        {item.opcionais.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <select id="cars" name="cars">
                                        {
                                            item.status === "Solicitado" ?
                                                <option value="volvo" selected>Solicitado</option>
                                                :
                                                <option value="volvo">Solicitado</option>
                                        }
                                        {
                                            item.status === "Em andamento" ?
                                                <option value="saab" selected>Em Andamento</option>
                                                :
                                                <option value="saab">Em Produção</option>
                                        }
                                        {
                                            item.status === "Finalizado" ?
                                                <option value="fiat" selected>Finalizado</option>
                                                :
                                                <option value="fiat">Finalizado</option>
                                        }
                                    </select>
                                    <button>Cancelar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    )
}


export default FormScreen;