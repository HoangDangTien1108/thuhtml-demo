import logo from './logo.svg';
import './App.css';
import {React} from 'react' ;
import { useState } from "react";
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [watch, setWatch] = useState({
    title:'watch',
    color: 'white',
  });
  const [watchStatus , setWatchStatus] = useState(false);
  const handleClickWatching = () => {
    setWatchStatus(watchStatus => !watchStatus);
    if(watchStatus === false){
      setWatch({
        title: 'watching',
        color: 'red',
      })
    }
    if(watchStatus === true){
      setWatch({
        title: 'watch',
        color: 'white',
      })
    }
  }

  return (
    <div className="App">
      <button onClick={handleClickWatching}>
        {watch.title}
      </button>
    </div>
  );
}

export default App;
