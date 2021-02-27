import { createContext, ReactNode } from "react";

// em baixo é os tipos que retornam dentro do value
interface BasicStructureContextData {

}

// em baixo é oque retorna dentro no children - react node é basicamente qualquer componente React
interface BasicStructureProvidereProps {
    children: ReactNode;
}

// dados que sao enviados no value
const BasicStructureContext = createContext({} as BasicStructureContextData);

export function BasicStructureProvider({ children }: BasicStructureProvidereProps) {


    return (
        <BasicStructureContext.Provider value={{}}>
            { children }
        </BasicStructureContext.Provider>
    )
}