let clickHandler = (event) => {
    console.log("Click!" + event.pageX + " " + event.pageY);
};

$("body").click(clickHandler);