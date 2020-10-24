let leftOffset = 0;
let topOffset = 0;

let squareDance = () => {
    $('#moving-title').offset({left: leftOffset, top: topOffset});
    leftOffset++;
    if (leftOffset > 200) {
        leftOffset = 201;
        topOffset++;
    } else if (topOffset > 200) {
        topOffset = 201;
        leftOffset--;
    }

    // $('moving-title').offset({top: topOffset});
    // if (leftOffset === 200) {
    //     topOffset++;
    // }
};

setInterval(squareDance, 15);