import React from 'react'
import CardCalculadoraInfoGerais from '../components/CardCalculadoraInfoGerais/CardCalculadoraInfoGerais';
import Sidebar from '../components/Sidebar/Sidebar'
import { CalcPersonalizadaContextProvider } from '../context/calculadoraPersonalizada-context';

const Calculadora = () => {
  return (
    <CalcPersonalizadaContextProvider>
    <div style={{display: 'flex'}}>
      <Sidebar 
        title="Calculadora" 
        subtitle="Opções" 
       content={[ {icon: 'account_box', text: 'Personalizado', path: './personalizado'},
        {icon: 'date_range', text: 'Veículos cadastrados', path: './cadastrados'},
        {icon: 'date_range', text: 'Meu veículo vs elétrico', path: './vseletrico'}
        ]}
      />
      <CardCalculadoraInfoGerais />
      </div>
    </CalcPersonalizadaContextProvider>
  );
}

export default Calculadora