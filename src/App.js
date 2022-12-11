import rukgor from './assets/rukgor.jpg'
import rukind from'./assets/rukind.jpg'
import pljeskanje from './assets/pljeskanje.png'
import './App.css';
import { useState, useEffect } from 'react';

let shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    
    console.log(randomIndex)
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
const images = [
rukind,
'https://www.shutterstock.com/image-vector/backside-scratching-hand-scrubbing-nails-260nw-225908305.jpg',
rukgor,
pljeskanje,

]
console.log(rukgor)
shuffle(images);
const geste = [
  {description: 'Pozdrav', image:images[0]},
  {description: 'Poziv', image: images[1]},
  {description: 'Odbijanje', image : images[2]},
  {description: 'Prihvaćanje', image: images[3]}
]

shuffle(geste);

function App() {
  const [data, setData] = useState(geste);

  useEffect(() => {
    const mountArray = shuffle(geste);
    setData(mountArray);
  }, []);
  function handleShuffle() {
    const changes = shuffle([...data]);
    setData(changes);
    console.log("Shuffle", geste);
  }
  return (
    <div className="h-screen w-full">
    <div className='w-full md:flex md:justify-center md:items-center grid grid-cols-2 gap-0 p-0 mx-auto items-center justify-center content-center'>
    {data.map((t)=>{
      return(

        <div className="images h-400">
          <div className="gallery">
            <img src={t.image} className='h-[200px]' alt="Cinque Terre"/>
          <div class="desc font-bold">{t.description}</div>
        </div>
      </div>
      )
    })}
      </div>
      <div className="flex justify-center items-center self-center w-full">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleShuffle}>
        Generiraj nove geste
      </button>
      </div>

    </div>
  );
}

export default App;
