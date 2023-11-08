
import './App.css';
import donda from './imgs/donda.jpg'
import Yeezus from './imgs/Yeezus.jpg'
import Graduation from './imgs/Graduation.jpg'

import NoChildLeftBehind from './songs/Kanye West - No Child Left Behind.mp3'
import Cometolife from './songs/Kanye West - Come to Life.mp3'
import jail from './songs/Kanye West - Jail.mp3'

import IWonder from './songs/Kanye West - I Wonder.mp3'
import Stronger from './songs/Kanye West - Stronger.mp3'
import GoodLife from './songs/Kanye West - Good Life.mp3'

import Bound2 from './songs/Kanye West - Bound 2.mp3'
import Onsight from './songs/Kanye West - On Sight.mp3'
import NewSlaves from './songs/Kanye West - New Slaves.mp3'

import { useRef, useState } from 'react';

function App() {
  const albums = [
    {album : 'donda', 
    img : donda,
    songs : [
      {song : 'No Child Left Behind' , time : '2:58' , playSound : NoChildLeftBehind},
      {song : 'Come to Life' , time : '5:10' ,playSound : Cometolife},
      {song : 'Jail' , time : '4,57' , playSound : jail }
    ]},
    {album : 'Graduation', 
    img : Graduation,
    songs : [
      {song : 'I Wonder' , time : '2:39' , playSound : IWonder},
      {song : 'Stronger' , time : '2:39' , playSound : Stronger},
      {song : 'Good Life' , time : '2:39' , playSound : GoodLife}
    ]},
    {album : 'Yeezus', 
    img : Yeezus,
    songs : [
      {song : 'Bound 2' , time : '2:39' , playSound : Bound2},
      {song : 'On Sight' , time : '2:39' , playSound : Onsight},
      {song : 'New Slaves' , time : '2:39' , playSound : NewSlaves}
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



  const [currentaudioindex , setcurrentaudioindex] = useState(null)

  const audioRef = useRef([]);


  const handleAudio = (index) => {

    if(currentaudioindex !== null ){
      audioRef.current[currentaudioindex].pause()
      audioRef.current[currentaudioindex].currentTime = 0
    }

    audioRef.current[index].play() ;
    setcurrentaudioindex(index)
  };



  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div id='albums'>      
        <button id='abutton' onClick={left}><i class="fa fa-angle-double-left" style={{"font-size":"30px"}}></i></button>

        {albums.slice(albumnb1, albumnb2).map((albumimg , index) => 
        (<img  id='albumimg' key={index} src={albumimg.img} alt={albumimg.album}>
        </img>))}

        <button id='abutton' onClick={right}><i class="fa fa-angle-double-right" style={{"font-size":"30px"}}></i></button>
      </div>

      <div id='songs'>
        <ul>
          {albums[albumnb1].songs.map((albumsongs , index) =>
            <li key={index}>
              <button className='playbutton' onClick={() => handleAudio(index)}  id={albumsongs.song}><i class="fa fa-play" style={{"font-size":"20px"}}></i></button>  
              {albumsongs.song} 
            <audio ref={(audio) => audioRef.current.push(audio)} src={albumsongs.playSound} />
            </li>)}
        </ul>
      </div>
      <li  id='youssef'>Copyright ©<a href='https://github.com/youssefamerzag'>Youssef Amerzag</a></li>
    </div>
  );
}

export default App;
