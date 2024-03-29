/*==> Receber dados de pedidos do formulario e aplica-los na lista de pedidos <==*/


import React, {
  createContext,
  useEffect,
  useState
} from 'react';

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
type RequestControlProps = {
  burgers: ArrayProps;
  status: StatusProps;
  deleteBurger: (id: number) => void;
  handleChangeStatus: (event: string, id: number) => void
}


export const RequestControl = createContext<RequestControlProps>({} as RequestControlProps);

//fornecedor da camada .index
export const RequestProvider = ({ children }: { children: React.ReactNode }) => {

  const [burgers, setBurgers] = useState([]);

  const [status, setStatus] = useState([]);


  useEffect(() => {
    //Resgata os pedidos
    async function getPedidos() {
      const req = await fetch('http://localhost:3000/burgers')
      const data = await req.json()
      setBurgers(data)

      // Resgata os status de pedidos
      getStatus()
    }

    // Resgata os dados dos Status
    async function getStatus() {
      const req = await fetch('http://localhost:3000/status')
      const data = await req.json()
      setStatus(data)
    }


    getPedidos()
  }, [burgers, status]);

  const deleteBurger = async (id: number) => {

    await fetch(`http://localhost:3000/burgers/${id}`, {
      method: "DELETE"
    });
  }

  //alinha os dado do array burgers com array status.
  const handleChangeStatus = async (event: string, id: number) => {
    const option = event;

    const dataJson = JSON.stringify({ status: option });

    await fetch(`http://localhost:3000/burgers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: dataJson
    });
  };


  return (
    <RequestControl.Provider value={{ burgers, status, deleteBurger, handleChangeStatus }}>
      <>{children}</>
    </RequestControl.Provider>
  )
}