import "./Animation.css";


function Animation(){
    return(
        <div class="bars-animation">
            <div class="bar" style="--i:1"></div>
            <div class="bar" style="--i:3"></div>
            <div class="bar" style="--i:5"></div>
            <div class="bar" style="--i:6"></div>
            <div class="bar" style="--i:4"></div>
            <div class="bar" style="--i:2"></div>
        </div>
    );
}

export default Animation;