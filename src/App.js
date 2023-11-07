
import './App.css';
import donda from './imgs/donda.jpg'
import Yeezus from './imgs/Yeezus.jpg'
import Graduation from './imgs/Graduation.jpg'
import { useState } from 'react';

function App() {
  const albums = [
    {album : 'donda', 
    img : donda,
    songs : [
      {song : 'No Child Left Behind' , time : '2:58' },
      {song : 'Come to Life' , time : '5:10' },
      {song : 'Jail' , time : '4,57' }
    ]},
    {album : 'Graduation', 
    img : Graduation,
    songs : [
      {song : 'I Wonder' , time : '2:39' , },
      {song : 'Stronger' , time : '2:39' , },
      {song : 'Good Life' , time : '2:39' , }
    ]},
    {album : 'Yeezus', 
    img : Yeezus,
    songs : [
      {song : 'Bound 2' , time : '2:39' , },
      {song : 'On Sight' , time : '2:39' , },
      {song : 'New Slaves' , time : '2:39' , }
    ]}
  ]



  const [albumnb1 , setalbumnb1] = useState(0)
  const [albumnb2 , setalbumnb2] = useState(1)

  function right() {
    const next1 = albumnb1 + 1
    const next2 = albumnb2 + 1

    setalbumnb1(next1)
    setalbumnb2(next2)
    
  }

  function left() {
    const next1 = albumnb1 - 1
    const next2 = albumnb2 - 1

    setalbumnb1(next1)
    setalbumnb2(next2)

  }


  return (
    <div className="App">

      <div id='albums'>
        <button id='abutton' onClick={left}>left</button>
        {albums.slice(albumnb1, albumnb2).map((albumimg , index) => (<img  id='albumimg' key={index} src={albumimg.img} alt={albumimg.album}></img>))}
        <button id='abutton' onClick={right}>right</button>
      </div>

      <div id='songs'>
        <ul>
          {albums[0].songs.map((albumsongs , index) => <li key={index}>{albumsongs.time} / {albumsongs.song}</li>)}
        </ul>
      </div>

    </div>
  );
}

export default App;
