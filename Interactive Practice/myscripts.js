let leftOffset = 0;

let moveHeading = () => {
    $('#heading').offset({ left: leftOffset});

    leftOffset ++;

    if(leftOffset > 200) {
        leftOffset = 0;
    }
}

setInterval(moveHeading, 5);