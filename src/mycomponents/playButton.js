import '../mycomponents/playButton.css'



function PlayButton({children,onPlay,onPause}){

    let playing= false; // don'nt use this approch

function handlerbutton(e){
e.stopPropagation() // alway use this event object for handle event bubbling

 if(playing){
onPlay()
 }else{
    onPause()
    
 }
 playing=!playing
        }
    return(
        <div className="playbutton">
<button onClick={handlerbutton}>{children}</button>
</div>
    )
}

export default PlayButton;



