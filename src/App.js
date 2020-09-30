import React, {useState} from 'react';
import './App.css';

function App() {

  const [state,setState] = useState({
    bot:[
        {string: 'камень',lose: 'бумага',win:'ножницы'},
        {string: 'бумага',lose: 'ножницы',win:'камень'},
        {string: 'ножницы',lose: 'камень',win:'бумага'}
    ],
    player:'',
    botNum:0,
    playerNum: 0,
  });

  const playHandler = () => {
    if(state.player === 'ножницы'||state.player === 'бумага'||state.player === 'камень'){
      const bot = Math.floor(Math.random() * state.bot.length);
      if(state.player === state.bot[bot].string){
        alert('Ничья')
      }else if(state.player === state.bot[bot].win){
        setState({...state, playerNum: state.playerNum + 1});
        alert(` Игрок: ${state.bot[bot].win} \n Бот: ${state.bot[bot].lose} \n Игрок + 1 бал`);
        if(state.playerNum > 4){
          alert(`Игрок выиграл!! \n счета обнуляются`);
          setState({...state, playerNum: 0, botNum: 0})
        }
      }else{
        setState({...state, botNum: state.botNum + 1});
        alert(`Игрок: ${state.bot[bot].lose} \n Бот: ${state.bot[bot].win} \n Бот + 1 бал`);
        if(state.botNum > 4){
          alert(`Бот выиграл!! \n счета обнуляются`);
          setState({...state, playerNum: 0, botNum: 0})
        }
      }
    }else {
      alert('Введите корректный вариант!')
    }
  };

  const inputValHandler = (e) => {
    setState({...state,[e.target.name]: e.target.value});
  };

  return (
    <div className="App">
      <p>Варианты:</p>
      <p><i>камень</i> <br/> <i>ножницы</i> <br/> <i>бумага</i></p>
      <p>Введите ваш вариант:</p>
      <input type="text" name="player" onChange={inputValHandler}/>
      <button onClick={playHandler}>бой!</button>
      <p>Игрок: {state.playerNum}</p>
      <p>Бот: {state.botNum}</p>
    </div>
  );
}

export default App;
