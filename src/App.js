//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHome] = useState(0);
  const [awayScore, setAway] = useState(0);
  const [ones, setOnes] = useState(0);
  const [tens, setTens] = useState(2);
  const [minutes, setMinutes] = useState(20);
  const [quarter, setQuarter] = useState(0);

  useEffect(()=> {
    setTimeout( ()=> {
      setOnes( ones - 1)    
    }, 1000);
    if(ones === -1){
      setOnes(9)
      setTens(tens - 1)
    }
    if(ones ===-1 && tens === 0){
      setOnes(9)
      setTens(5)
      setMinutes(minutes-1)
    }
})

const newQuarter = evt => {
  setQuarter(quarter + 1)
}

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minutes}:{tens}{ones}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={click => setHome(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={click => setHome(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons"> 
          <button className="awayButtons__touchdown" onClick={click => setAway(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={click => setAway(awayScore + 3)}>Away Field Goal</button>
        </div>
        <button className="quarterButton" onClick={click=> newQuarter }>Change Quarter</button>
        <form></form>
      </section>
    </div>
  );
}

export default App;
