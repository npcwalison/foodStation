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

  const [paes, setPaes] = useState<TypeProps>([
    {
      "id": 1,
      "tipo": "Italiano Branco"
    },
    {
      "id": 2,
      "tipo": "3 Queijos"
    },
    {
      "id": 3,
      "tipo": "Parmesão e Orégano"
    },
    {
      "id": 4,
      "tipo": "Integral"
    }
  ]);
  const [carnes, setCarnes] = useState<TypeProps>([
    {
      "id": 1,
      "tipo": "Maminha"
    },
    {
      "id": 2,
      "tipo": "Alcatra"
    },
    {
      "id": 3,
      "tipo": "Picanha"
    },
    {
      "id": 4,
      "tipo": "Veggie burger"
    }
  ]);
  const [opcionais, setOpcionais] = useState<TypeProps>([
    {
      "id": 1,
      "tipo": "Bacon"
    },
    {
      "id": 2,
      "tipo": "Cheddar"
    },
    {
      "id": 3,
      "tipo": "Salame"
    },
    {
      "id": 4,
      "tipo": "Tomate"
    }
  ]);

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