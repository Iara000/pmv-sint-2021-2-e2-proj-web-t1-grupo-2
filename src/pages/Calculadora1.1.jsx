import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { CalcPersonalizadaContextProvider } from '../context/calculadoraPersonalizada-context';
import CardCalcCustomInfo from '../components/CardCalcCustom/CardCalcCustomInfo';
import Resultado from '../components/Resultado/Resultado'


const CalculadoraP = () => {
    return (
      <div style={{display: 'flex'}}>
      <CalcPersonalizadaContextProvider>
      <Sidebar
        title="Calculadora" 
        subtitle="Opções" 
       content={[ {icon: 'account_box', text: 'Personalizado', path: './personalizado'},
        {icon: 'date_range', text: 'Veículos cadastrados', path: './cadastrados'},
        {icon: 'date_range', text: 'Meu veículo vs elétrico', path: './vseletrico'}
        ]}
      />
        <div style={{display: 'block'}}> 
        <CardCalcCustomInfo/>
        <Resultado/>
        </div>
      </CalcPersonalizadaContextProvider>
       </div>
    );
  }
  export default CalculadoraP