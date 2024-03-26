/*==> Responsavel pelos dados contidos nos compos do formulario durante a criação do pedido <==*/


import React, {
  createContext,
  useEffect,
  useState
} from 'react';

type DataFormProps = {
  ingredients: {
    paes: [id: number, tipo: string][],
    carnes: [id: number, tipo: string][],
    opcionais: [id: number, tipo: string][],
  },
  createNewRequest: (event: any) => void
}


export const DataForm = createContext<DataFormProps>({} as DataFormProps);

//fornecedor da camada .index
export const RegisterProvider = ({ children }: { children: React.ReactNode }) => {

  const [ingredients, setIngredients] = useState({
    paes: [],
    carnes: [],
    opcionais: []
  });

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


  function createNewRequest(formData: any) {
    //conferindo recebimento de dados do fomilario.
    console.log('Dados recebidos:', formData); //26.03.2024-14:43-Recebendo_com_SUCESSO!!

    // Exemplo de envio dos dados para um backend utilizando fetch
    fetch('http://localhost:3000/burgers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          console.log('Pedido criado com sucesso!');
        } else {
          console.error('Erro ao criar pedido:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Erro ao criar pedido:', error);
      });
  }




  return (
    <DataForm.Provider value={{ ingredients, createNewRequest }}>
      <>{children}</>
    </DataForm.Provider>
  )
}