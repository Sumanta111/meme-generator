import { useEffect, useState } from "react";
import axios from 'axios';
import HeaderComponent from "./components/Header/HeaderComponent";
import MemeComponent from "./components/Meme/MemeComponent";


function App() {
  const [allMeme, setAllMeme] = useState([]);
  const [randomSelectedMeme,setRandomSelectedMeme] = useState(null);
  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes').then((response) => {
      setAllMeme(response.data.data);
    })
  }, []);
  
  return (
    <div>
      <HeaderComponent allMeme={allMeme} setRandomSelectedMeme={setRandomSelectedMeme} />
      {randomSelectedMeme && <MemeComponent selectedMeme={randomSelectedMeme} />}
    </div>
  );
}

export default App;
