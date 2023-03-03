import '../mycomponents/playButton.css'

function handlerbutton(){
    alert("hello play buttom")
}

function PlayButton(){
    return(
        <div className="playbutton">
<button onClick={handlerbutton}>Play</button>
</div>
    )
}

export default PlayButton;