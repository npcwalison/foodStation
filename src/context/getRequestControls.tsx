/*==> Receber dados de pedidos do formulario e aplica-los na lista de pedidos <==*/


import React, {
  createContext,
  useState,
  useEffect
} from 'react';
import axios from 'axios';

//usado para definir o array dentro do const
type ArrayProps = {
  id: number;
  nome: string;
  carne: string;
  pao: string;
  opcionais: string[];
  status: string;
}[]

type StatusProps = {
  id: number,
  tipo: string
}[]

//usado para o const com value/setValue
type AuthContextProps = {
  burgers: ArrayProps;
  setBurgers: React.Dispatch<React.SetStateAction<ArrayProps>>;
  status: StatusProps;
}


export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [burgers, setBurgers] = useState([]);

  const [status, setStatus] = useState([]);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('http://localhost:3000/status');
        setStatus(response.data);
      } catch (error) {
        console.error('Erro ao obter os dados dos ingredientes:', error);
      }
    };

    const fetchBurgers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/burgers');
        setBurgers(response.data);
      } catch (error) {
        console.error('Erro ao obter os dados dos ingredientes:', error);
      }
    };

    fetchBurgers();
    fetchStatus();
  }, [burgers, status]);


  return (
    <AuthContext.Provider value={{ burgers, setBurgers, status }}>
      <>{children}</>
    </AuthContext.Provider>
  )
}