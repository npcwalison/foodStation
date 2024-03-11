import React, { createContext, useState } from 'react';

//usado para definir o array dentro do const
type ArrayProps = {
  id: number;
  name: string;
  carne: string;
  pao: string;
  opcionais: string[];
  status: string;
}[]

//usado para o const com value/setValue
type AuthContextProps = {
  burgers: ArrayProps;
  setBurgers: React.Dispatch<React.SetStateAction<ArrayProps>>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [burgers, setBurgers] = useState([
    {
      "id": 1,
      "name": "Matheus Battisti",
      "carne": "Picanha",
      "pao": "Italiano Branco",
      "opcionais": [
        "Bacon",
        "Salame",
        "Cebola roxa"
      ],
      "status": "Finalizado"
    },
    {
      "id": 2,
      "name": "João Coelho",
      "carne": "Maminha",
      "pao": "3 Queijos",
      "opcionais": [
        "Salame",
        "Cebola roxa"
      ],
      "status": "Solicitado"
    },
    {
      "id": 3,
      "name": "João Coelho",
      "carne": "Maminha",
      "pao": "3 Queijos",
      "opcionais": [
        "Salame",
        "Cebola roxa"
      ],
      "status": "Em andamento"
    }
  ])


  return (
    <AuthContext.Provider value={{ burgers, setBurgers }}>
      <>{children}</>
    </AuthContext.Provider>
  )
}