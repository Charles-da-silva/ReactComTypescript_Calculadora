import { useState, type FormEvent } from 'react'  // FormEvent é o tipo do evento de formulário que importamos no React
import logoImg from './assets/logo.png' 
import './App.css'

interface resultadoProps {
  title:  string;
  gasolina: number | string;
  etanol: number | string;
}

function App() {
  const [gasolina, setGasolina] = useState(5.89);
  const [etanol, setEtanol] = useState(4.99);
  const [resultado, setResultado] = useState<resultadoProps>(); 

  function calcularMelhorPreco(event: FormEvent) { 
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao enviar o formulário
     
    let resultado = (etanol / gasolina);

    if (resultado < 0.7) {
      setResultado({
        title: 'Compensa abastecer com Etanol!',
        gasolina: gasolina,
        etanol: etanol
      })
    } else {
      setResultado({
        title: 'Compensa abastecer com Gasolina!',
        gasolina: gasolina,
        etanol: etanol
      })
    }
  }

   return (
    <div>
      <main className='container'>
        <img
          src={logoImg}
          alt="Logo da calculadora"
          className='logo'
        />
        <h1 className='title'>Qual melhor opção?</h1>
        
        <form className='form' onSubmit={calcularMelhorPreco}> {/* form que chama a função calcularMelhorPreco ao ser submetido */}
          <label>Etanol (preço por litro):</label>
          <input 
            className='input'
            type="number" 
            placeholder='4.25'
            min="1"
            step="0.01"
            required
            value={etanol.toFixed(2)} 
            onChange={(event) => setEtanol(Number(event.target.value))}         
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
            value={gasolina.toFixed(2)}
            onChange={(event) => setGasolina(Number(event.target.value))}
            />
          <br />
          <input className="button" type="submit" value="Calcular"/>
        </form>
        
        
        {resultado && Object.keys(resultado).length > 0 && (   // Verifica se o objeto resultado não está vazio
          <section className='result'>
            <h2 className='result-title'>{resultado.title}</h2>
            <span>Valor do Etanol: R$ {Number(resultado.etanol).toFixed(2).replace('.', ',')}</span>
            <span>Valor da Gasolina: R$ {Number(resultado.gasolina).toFixed(2).replace('.', ',')}</span>
          </section>
        )}
        
      </main>
    </div>
  
  )
}

export default App
