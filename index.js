let myDiv = document.getElementById("my-div");
// detect touch deivice

function isTouchDevice(){
    try{
        // we try to create TouchEvent. it would fail for desktops and throw error
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
}

const move = (e) => {
    // try, catch to avoid any errors for touch screens 
    // (error thrown when user doesen't move his finger)
    try{
        // pageX and pageY return the position of client's cursor from 
        //top left of screen
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }
    catch(e){
    }

    // set left and top of div based on mouse position
    myDiv.style.left = x - 30 + "px";
    myDiv.style.top = y - 30 + "px";
}

document.addEventListener("mousemove", (event) => {
    move(event);
});

document.addEventListener("touchmove", (event) => {
    move(event);
});