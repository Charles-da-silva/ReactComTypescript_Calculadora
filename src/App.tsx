import { useState } from 'react'
import logoImg from './assets/logo.png' 
import './App.css'

function App() {
   return (
    <div>
      <main className='container'>
        <img
          src={logoImg}
          alt="Logo da calculadora"
        />
        <h1 className='title'>Qual melhor opção?</h1>

        <form className='form'>
          <label>Etanol (preço por litro):</label>
          <input 
            className='input'
            type="number" 
            placeholder='4.25'
            min="1"
            step="0.01"
            required            
          /> 
          <br />
          <label>Gasolina (preço por litro):</label>
          <input 
            className='input'
            type="number" 
            placeholder='5.70'
            min="1"
            step="0.01"
            required            
          />
          <br />
          <input className="button" type="submit" value="calcular"/>
        </form>
      </main>
    </div>
  
  )
}

export default App
