  //  video
function chnageToSourceOne() {
    document.getElementById("example_video_1").src="/video/2.mp4";
}
function chnageToSourceTwo() {
    document.getElementById("example_video_1").src="/video/3.mp4";
}
function chnageToSourceThree() {
    document.getElementById("example_video_1").src="/video/4.mp4";
}
function chnageToSourcefour() {
    document.getElementById("example_video_1").src="/video/5.mp4";
}
function chnageToSourcefive() {
    document.getElementById("example_video_1").src="/video/6.mp4";
}
function chnageToSourcesix() {
    document.getElementById("example_video_1").src="/video/1.mp4";
}
//
// up
let span =document.querySelector('.up')
window.onscroll =() =>{
    // console.log(this.scrollY)
    if(this.scrollY >= 1000){
        span.classList.add('show')
    }else{
        span.classList.remove('show')
    }
}
span.addEventListener('click',function(){
    scroll({
        top: 0,
        behavior: "smooth"
}) 
    })
//
// menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
menu.classList.toggle('bx-x');
navbar.classList.toggle('open')
}
// 
//muted
function muted() {
    document.getElementById("example_video_1").toggleAttribute('controls');

    let muted01 = querySelector(".togglem");
    let icon = querySelector(".volume");

    icon.addEventListener("click", function(){
        icon.toggle.classList.remove('bx-lock-alt');
        icon.toggle.classList.add('bx-lock-open-alt');
    })
}