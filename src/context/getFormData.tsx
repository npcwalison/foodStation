/*==> Responsavel pelos dados contidos nos compos do formulario durante a criação do pedido <==*/

// os arrays estão funcionanado e acredito que o fatch tambem.
// erro de tranferencia de dados na hora de passar pelo children.


import React, {
  createContext,
  useEffect,
  useState
} from 'react';

type TypeProps = {
  id: number;
  tipo: string;
}[]

type DataFormProps = {
  paes: TypeProps,
  carnes: TypeProps,
  opcionais: TypeProps
}


export const DataForm = createContext<DataFormProps>({} as DataFormProps);

//fornecedor da camada .index
export const RegisterProvider = ({ children }: { children: React.ReactNode }) => {

  const [paes, setPaes] = useState<TypeProps>([]);
  const [carnes, setCarnes] = useState<TypeProps>([]);
  const [opcionais, setOpcionais] = useState<TypeProps>([]);

  useEffect(() => {
    //Resgata os pedidos
    async function getIngredients() {
      try {
        const response = await fetch('http://localhost:3000/ingredientes');
        const data = await response.json();

        setPaes(data.paes);
        setCarnes(data.carnes);
        setOpcionais(data.opcionais);

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    getIngredients()

  }, [paes, carnes, opcionais]);


  async function createNewRequest() {
    try {
      //teste
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }


  return (
    <DataForm.Provider value={{ paes, carnes, opcionais }}>
      <>{children}</>
    </DataForm.Provider>
  )
}