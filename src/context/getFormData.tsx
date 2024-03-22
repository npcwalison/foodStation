/*==> Responsavel pelos dados contidos nos compos do formulario durante a criação do pedido <==*/


import React, {
  createContext,
  useEffect,
  useState
} from 'react';


export const DataForm = createContext<DataFormProps>({} as DataFormProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {
    //Resgata os pedidos
    async function getPedidos() {
      const req = await fetch('http://localhost:3000/burgers')
      const data = await req.json()
      setBurgers(data)

      // Resgata os status de pedidos
      getStatus()
    }
  }, []);

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
    <DataForm.Provider value={{ 'value' }}>
      <>{children}</>
    </DataForm.Provider>
  )
}