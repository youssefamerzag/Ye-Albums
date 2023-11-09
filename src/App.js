
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
  
  // const mySong = albums[albumnb1].songs.map(() => {useRef(null)})

  const albums =  [
    {
      album : 'Donda', 
      img : donda,
    songs : [
      {song : 'No Child Left Behind',img : donda , time : '2:58' , playSound : NoChildLeftBehind},
      {song : 'Come to Life' ,img : donda, time : '5:10' ,playSound : Cometolife},
      {song : 'Jail' ,img : donda, time : '4,57' , playSound : jail }
    ]},
    {album : 'Graduation', 
    img : Graduation,
    songs : [
      {song : 'I Wonder' ,img : Graduation, time : '2:39' , playSound : IWonder},
      {song : 'Stronger' ,img : Graduation, time : '2:39' , playSound : Stronger},
      {song : 'Good Life' ,img : Graduation, time : '2:39' , playSound : GoodLife}
    ]},
    {album : 'Yeezus', 
    img : Yeezus,
    songs : [
      {song : 'Bound 2' ,img : Yeezus, time : '2:39' , playSound : Bound2},
      {song : 'On Sight' ,img : Yeezus, time : '2:39' , playSound : Onsight},
      {song : 'New Slaves' ,img : Yeezus, time : '2:39' , playSound : NewSlaves}
    ]}
  ]




  //numbers of slice for the table data
  const [albumnb1 , setalbumnb1] = useState(0)
  const [albumnb2 , setalbumnb2] = useState(1)


  //right button click function
  function right() {
    const next1 = albumnb1 + 1
    const next2 = albumnb2 + 1

    setalbumnb1(next1)
    setalbumnb2(next2)

    console.log(albumnb1, albumnb2)

    if(albumnb1 === 2) {
      const loop1 = 0
      const loop2 = 1
      setalbumnb1(loop1)
      setalbumnb2(loop2)
    }

  }

  //left button click function
  function left() {
    const next1 = albumnb1 - 1
    const next2 = albumnb2 - 1

    setalbumnb1(next1)
    setalbumnb2(next2)

    console.log(albumnb1, albumnb2)

    // albums in loop
    if(albumnb1 === 0) {
      const loop1 = 2
      const loop2 = 3
      setalbumnb1(loop1)
      setalbumnb2(loop2)
    }

  }



  // play and automotically pause if you play another song 
  const [currentaudioindex , setcurrentaudioindex] = useState(null)

  const audioRef = useRef([]);


  const handleAudio = (index) => {
    

    if (currentaudioindex !== null ) {
      audioRef.current[currentaudioindex].pause()
      audioRef.current[index].currentTime = 0;
    }

    if(currentaudioindex !== null ){
      if (audioRef.current[index].played) {
        audioRef.current[index].pause();
        audioRef.current[index].currentTime = 0;
        setcurrentaudioindex(null)} 
    }else {
      audioRef.current[index].play() ;
      setcurrentaudioindex(index)
    }
  };



  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <p id='title'>Kanye West's Albums</p>   
      <div id='albums'>   
        <button id='abutton' onClick={left}><i className="fa fa-angle-double-left" style={{"fontSize":"30px"}}></i></button>

        {albums.slice(albumnb1, albumnb2).map((albumimg , index) => 
        (<div><img  id='albumimg' key={index} src={albumimg.img} alt={albumimg.album}>
        </img>
        </div>))}

        <button id='abutton' onClick={right}><i className="fa fa-angle-double-right" style={{"fontSize":"30px"}}></i></button>
      </div>

      <p id='albumtitle'>{albums[albumnb1].album}</p>

      <div id='songs'>
        <ul>
          {albums[albumnb1].songs.map((albumsongs , index) =>
            <li key={index}>
              <img src={albumsongs.img} alt='smallcover' id='smallcover'></img>
              <button className='playbutton' onClick={() => handleAudio(index)} ><i className="fa fa-play" style={{"fontSize":"20px"}}></i></button>  
              <p>{albumsongs.song}</p> 
            <audio ref={(audio) => audioRef.current.push(audio)} src={albumsongs.playSound} />
            </li>)}
        </ul>
      </div>
      <li  id='youssef'>Copyright ©<a href='https://github.com/youssefamerzag'>Youssef Amerzag</a></li>
    </div>
  );
}

export default App;
