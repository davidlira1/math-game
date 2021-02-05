var percentToNum = (str) => {
    return Number(str.substring(0, str.length - 1));
}

var roundNumToNearest = (num, roundTo) => {
    var remainder = num % roundTo;
    if(remainder < (roundTo / 2)) {
        return num - remainder;
    } else {
        return num - remainder + roundTo;
    }
}

function boxCreator(value) {
    var box = document.createElement('div');
    box.style.position = 'absolute';
    box.style.top = roundNumToNearest(Math.random() * 75 + 2.5, 5) + '%'; //the 2.5 is in case it ends up being 0
    box.style.left = roundNumToNearest(Math.random() * 75 + 2.5, 5) + '%';
    box.style.width = '20%';
    box.style.height = '20%';
    // box.style.border = '1px solid grey';
    box.style.borderRadius = '50%';
    box.style.transition = '.3s linear'
    box.style.cursor = 'pointer';
    box.style.background = '#5bb2f0';
    box.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    box.innerHTML = value;

    document.querySelector(".container").appendChild(box);
    var slopes = [{x:-5, y:2.5}, {x:-2.5, y:5}, {x:2.5, y:5}, {x:5, y:2.5}, {x:5, y:-2.5}, {x:2.5, y:-5}, {x:-2.5, y:-5}, {x:-5, y: -2.5}];

    var slope = slopes[Math.floor(Math.random() * slopes.length)];
    console.log(box.style.left, box.style.top);
    console.log(slope);
    
    setInterval(() => {
        
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
    }, 300);
}


//now, let's make it move!! That's the main part. Bro...you can do this!
//let's smoke, come back and only work on this algorithm. This is what makes it 
//very aesthetically appealing. 

//okay, so we finally got a good transition speed. i think it'll be a matter of only locating it at multiples at 5, or 4
//so figure out how to randomize the location.
function placeBoxes() {

    for(var i = 0; i < 4; i++) {
        boxCreator(i);
    }
}

placeBoxes();

// x   y
// 65, 60
// 2.5, -5

// 85 + 2.5 = 87.5, 80 + 5 = 85,
// 87.5 + 2.5 = 90, 85 + 5 = 90,
// 92.5, 95
// 95, 100

