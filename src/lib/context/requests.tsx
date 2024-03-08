import React, { createContext, useState } from 'react';

type ArrayProps = {
  id: number,
  title: string,
  subject: string,
  status: boolean
}[]

type AuthContextProps = {
  arc: ArrayProps,
  setArc: React.Dispatch<React.SetStateAction<ArrayProps>>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [arc, setArc] = useState<ArrayProps>([
    {
      id: 1,
      title: 'tarefa criada concluida',
      subject: 'objeto de teste é indentificar os tipos de tarefas',
      status: true
    },
    {
      id: 2,
      title: 'tarefa criada em andamento',
      subject: 'se a tarefa estiver em andamento, podemos deixa-la concluida com check',
      status: false
    }
  ])


  return (
    <AuthContext.Provider value={{ arc, setArc }}>
      <>{children} </>
    </AuthContext.Provider>
  )
}