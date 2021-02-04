var percentToNum = (str) => {
    return Number(str.substring(0, str.length - 1));
}
//PLACE 4 DIVS IN THE CONTAINER AT RANDOM LOCATIONS
//SO, LET'S CREATE THE DIVS! :)
function boxCreator() {
    var box = document.createElement('div');
    box.style.position = 'absolute';
    box.style.top = '50%';
    box.style.left = '50%';
    box.style.width = '20%';
    box.style.height = '20%';
    box.style.border = '1px solid grey';
    box.style.borderRadius = '50%';
    box.style.transition = '.3s linear'
    box.style.cursor = 'pointer';

    document.querySelector(".container").appendChild(box);

    var slope = {
        x: -5,
        y: 2.5
    }
    
    setInterval(() => {
        
        //if going left


        //if going right


        //if hits left edge
        if(box.style.left === '0%') {
            //reverse slope
            slope.x = -slope.x;
        
        //if hits top edge
        } else if(box.style.top === '0%') {
            slope.y = -slope.y;

        //if hits right edge
        } else if(box.style.left === 100 - percentToNum(box.style.width) + '%') {
            slope.x = -slope.x;

        //if hits bottom edge
        } else if(box.style.top === 100 - percentToNum(box.style.height) + '%') {
            slope.y = -slope.y;
        }

        box.style.left = percentToNum(box.style.left) + slope.x + '%';
        box.style.top = percentToNum(box.style.top) - slope.y + '%';
        console.log(box.style.left, box.style.top);
    }, 300);
}

boxCreator();

//now, let's make it move!! That's the main part. Bro...you can do this!
//let's smoke, come back and only work on this algorithm. This is what makes it 
//very aesthetically appealing. 

//okay, so we finally got a good transition speed. i think it'll be a matter of only locating it at multiples at 5, or 4


