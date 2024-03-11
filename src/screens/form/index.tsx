import { Container } from './styles';


const FormScreen = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Matheus Carvalho</td>
                        <td>Italiano Branco</td>
                        <td>Picanha</td>
                        <td>
                            <ul>
                                <li>Bacon</li>
                                <li>Salame</li>
                                <li>Cebola Roxa</li>
                            </ul>
                        </td>
                        <td>
                            <select id="cars" name="cars">
                                <option value="volvo">Solicitado</option>
                                <option value="saab">Em Produção</option>
                                <option value="fiat">Finalizado</option>
                            </select>
                            <button>Cancelar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}


export default FormScreen;