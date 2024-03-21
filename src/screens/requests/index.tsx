import { Container } from './styles';

import { AuthContext } from '../../context/getRequestControls';
import { useContext } from 'react';


const RequestsScreen = () => {
    const { burgers, setBurgers, status } = useContext(AuthContext);
    
    //alinha os dado do array burgers com array status.
    const handleChangeStatus = async (event: any, id: any) => {
        const option = event;

        const dataJson = JSON.stringify({status: option});

        const req = await fetch(`http://localhost:3000/burgers/${id}`, {
          method: "PATCH",
          headers: { "Content-Type" : "application/json" },
          body: dataJson
        });

        const res = await req.json()

        console.log(res)
    };

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
                        burgers?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
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
                                    <select
                                        value={item.status}
                                        onChange={(e) => handleChangeStatus(e.target.value, item.id)}
                                    >
                                        {
                                            status?.map((item, index) => (
                                                <option value={item.tipo} key={index}>{item.tipo}</option>
                                            ))
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


export default RequestsScreen;