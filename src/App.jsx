import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Gallery from './Gallery';

function App() {
  let apiKey = "636e1481b4f3c446d26b8eb6ebfe7127"
  let [value,setvalue] = useState('')
  let [data,setdata] = useState([])
  let submitHandler = (e) =>{
    e.preventDefault()
    async function func(){
      let response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${value}&per_page=24&format=json&nojsoncallback=1`)
      let res = await response.json()
      setdata(res.photos.photo)
      console.log(res.photos.photo)
    }
    func()


  }
  return (
    <div className="App">
      
      <input type="text" value={value} onChange={(e)=>{setvalue(e.target.value)}} />
      <button onClick={submitHandler}>Submit</button>
      <div>
       {data.length>=1?<Gallery data={data}/> : <h1>No data loaded</h1>}
      </div>

    
    </div>
  );
}

export default App;
