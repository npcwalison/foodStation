/*==> Responsavel pelos dados contidos nos compos do formulario durante a criação do pedido <==*/


import React, {
    createContext,
    useEffect
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
  type AuthContextProps = {
    burgers: ArrayProps;
    status: StatusProps;
  }
  
  
  export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
  
  export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  
    const burgers = [
      {
        id: 'number',
        nome: 'string',
        carne: 'string',
        pao: 'string',
        opcionais: [
          'tipo'
        ],
        status: 'string'
      }
    ];
  
    const status = [
      {
        id: 'number',
        tipo: 'string'
      }
    ];
  
    useEffect(() => {
    }, [burgers, status]);
  
  
    return (
      <AuthContext.Provider value={{ burgers, status }}>
        <>{children}</>
      </AuthContext.Provider>
    )
  }