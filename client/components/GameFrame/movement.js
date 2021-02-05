var roundNumToNearest = (num, roundTo) => {
    var remainder = num % roundTo;
    if(remainder < (roundTo / 2)) {
        return num - remainder;
    } else {
        return num - remainder + roundTo;
    }
}

var percentToNum = (str) => {
    return Number(str.substring(0, str.length - 1));
}

var movement = (bubble) => {
    var slopes = [{x:-5, y:2.5}, {x:-2.5, y:5}, {x:2.5, y:5}, {x:5, y:2.5}, {x:5, y:-2.5}, {x:2.5, y:-5}, {x:-2.5, y:-5}, {x:-5, y: -2.5}];

    var slope = slopes[Math.floor(Math.random() * slopes.length)];

    var interval = setInterval(() => {
        
        //if hits left edge
        if(bubble.style.left === '0%') {
            //reverse slope
            slope.x = -slope.x;
        
        //if hits top edge
        } else if(bubble.style.top === '0%') {
            slope.y = -slope.y;

        //if hits right edge
        } else if(bubble.style.left === 100 - percentToNum(bubble.style.width) + '%') {
            slope.x = -slope.x;

        //if hits bottom edge
        } else if(bubble.style.top === 100 - percentToNum(bubble.style.height) + '%') {
            slope.y = -slope.y;
        }

        bubble.style.left = percentToNum(bubble.style.left) + slope.x + '%';
        bubble.style.top = percentToNum(bubble.style.top) - slope.y + '%';
    }, 300);

    return interval;
}

export {
    roundNumToNearest,
    movement
}