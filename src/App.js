import React, {useState} from 'react'

import './index.css'

function App() {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Проверьте точное значение веса и роста')
    } else {
      let bmi = (weight / (height*height) )
      setBmi(bmi.toFixed(1))

      if (bmi < 25) {
        setMessage('У вас недовес')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('Ваш вес в норме')
      } else {
        setMessage('Ваш вес выше нормы')
      }
    }
  }

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 25) {
      imgSrc = require('../src/assets/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/healthy.png')
    } else {
      imgSrc = require('../src/assets/overweight.png')
    }
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>ИМТ Калькулятор</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Вес (кг)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Рост (м)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Проверить</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Обновить</button>
          </div>
        </form>

        <div className='center'>
          <h3>Ваш ИМТ равен: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default App;
