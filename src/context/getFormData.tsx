/*==> Responsavel pelos dados contidos nos compos do formulario durante a criação do pedido <==*/


import React, {
  createContext,
  useEffect,
  useState
} from 'react';

type IngredientsProps = {
  paes: { id: number, tipo: string }[],
  carnes: { id: number, tipo: string }[],
  opcionais: { id: number, tipo: string }[]
}[]

type DataFormProps = {
  ingredients: IngredientsProps;
}


export const DataForm = createContext<DataFormProps>({} as DataFormProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [ingredients, setIngredients] = useState<IngredientsProps>();

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

    const data = getIngredients();

    console.log(data)
    
  }, [ingredients]);


  return (
    <DataForm.Provider value={{ ingredients }}>
      <>{children}</>
    </DataForm.Provider>
  )
}