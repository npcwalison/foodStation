/*==> Responsavel pelos dados contidos nos compos do formulario durante a criação do pedido <==*/


import React, {
  createContext,
  useEffect,
  useState
} from 'react';

type DataFormProps = {
  ingredients: {
    paes: {id: number, tipo: string}[],
    carnes:  {id: number, tipo: string}[],
    opcionais:  {id: number, tipo: string}[],
  }
}


export const DataForm = createContext<DataFormProps>({} as DataFormProps);

//fornecedor da camada .index
export const RegisterProvider = ({ children }: { children: React.ReactNode }) => {

  const [ ingredients, setIngredients ] = useState({});

  useEffect(() => {
    //Resgata os pedidos
    async function getIngredients() {
      try {
        const response = await fetch('http://localhost:3000/ingredientes');
        const data = await response.json();

        setIngredients(data);

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    getIngredients()

  }, [ingredients]);


  async function createNewRequest() {
    try {
      //teste
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }


  return (
    <DataForm.Provider value={{ ingredients }}>
      <>{children}</>
    </DataForm.Provider>
  )
}