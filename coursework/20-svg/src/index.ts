const circle = document.getElementById("circle") as unknown as SVGCircleElement;

circle.addEventListener('click', () =>{
    circle.setAttribute('fill', 'black');

})
