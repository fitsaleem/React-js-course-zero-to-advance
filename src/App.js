import "./App.css"
import Videos from './mycomponents/Videos'
let center="center"
function App({Title}){

    let obj={
        Name:"react-js course for bignners", 
        Views:"500K" ,
        time:"1 years",
        tick: false
    }
    
return (
    <>
    <div className={center}> {Title}</div>
    <div className="container">

<Videos  {...obj} ></Videos>
<Videos  Name="javaScript course for biggners" Views="500K" time="2 years" tick={false}></Videos>
<Videos  Name="nodeJS course in one video" Views="200K" time="1 months"></Videos>
<Videos  Name="react-js Advance course" Views="10K" time="5 days"></Videos>

</div>
</>
)
}

export default App;

