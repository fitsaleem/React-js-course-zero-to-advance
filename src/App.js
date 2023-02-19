import './App.css';


export const App=()=> {
  console.log("App")
  let name="saleem raza"
  
  return (
    <div class="App">
      <header className= "App-header">
        <p>
          Hello World
        </p>
        {name}
       <Demo></Demo>
      </header>
    </div>
  );
}

export const Demo=()=>{
  console.log("Demo")
  return(
    <p>Hello demo component</p>
  )
}


