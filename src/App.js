import React, { Component } from 'react';
import logo from './chaos.png';
import './App.css';
import ork_one from './ork_one.jpg';
import ork_two from './ork_two.png';
import ork_three from './ork_three.jpg';
import ork_four from './ork_four.jpg';
import ork_five from './ork_five.jpg';
import ork_six from './ork_six.jpeg';

class App extends Component {
  render() {
    const playerName = prompt('Как тебя звать, герой?');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Starting-message">Ану белоре делана {playerName}, Добро пожаловать на поляну орков!</h1>
          <div className="Background-for-story">
            <p>Объеденённое королевство Эльфов и Гномов тысячи лет процветало не зная войн,
              но старый враг не дремлет, и зло снова проникло в этот мир, толпы орков под предвадительством
              тёмного властелина вновь ступили на священные земли, найдётся ли отважный и сильный герой на этот
              раз? Сможет ли этот мир пережить ещё один тёмный век, или же навеки сгинет в пучине мрака?
              На этот вопрос может ответить лишь истенный герой, имя которому - {playerName}
            </p>
            <h2><a href="https://github.com/Nemkev/Final-RSGame">Злобные орки</a></h2>
            <div>
              <img src={ork_one} className="Gallery" alt="ork"/>
              <img src={ork_two} className="Gallery" alt="ork"/>
              <img src={ork_three} className="Gallery" alt="ork"/>
              <img src={ork_four} className="Gallery" alt="ork"/>
              <img src={ork_five} className="Gallery" alt="ork"/>
              <img src={ork_six} className="Gallery" alt="ork"/>
            </div>
          </div>
          

        </header>
      </div>
    );
  }
}

export default App;
