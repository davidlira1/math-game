var roundNumToNearestMultiple = (num, multiple) => {
    var remainder = num % multiple;
    if(remainder < (multiple / 2)) {
        return num - remainder;
    } else {
        return num - remainder + multiple;
    }
}

var pixToNum = (str) => {
    return Number(str.substring(0, str.length - 2));
}

var percentToNum = (str) => {
    return Number(str.substring(0, str.length - 1));
}

var movement = (element) => {
    var containerStyle = getComputedStyle(element.parentNode);
    console.log('containerStyle', containerStyle.width);
    var slopes = [{x:-4, y:2}, {x:-2, y:4}, {x:2, y:4}, {x:4, y:2}, {x:4, y:-2}, {x:2, y:-4}, {x:-2, y:-4}, {x:-4, y: -2}];
    var slope = slopes[Math.floor(Math.random() * slopes.length)];

    var interval = setInterval(() => {
        console.log("element.style.left", element.style.left, "element.style.top", element.style.top);

        //IF HITS LEFT EDGE
        if(percentToNum(element.style.left) === 0) {
            //reverse slope
            slope.x = -slope.x;
        } 

        //IF HITS TOP EDGE
        if(percentToNum(element.style.top) === 0) {
            slope.y = -slope.y;
        } 

        //IF HITS RIGHT EDGE
        if(percentToNum(element.style.left) === 100 - percentToNum(element.style.width)) {
            slope.x = -slope.x;
        }

        //IF HITS BOTTOM EDGE
        if(percentToNum(element.style.top) === 100 - percentToNum(element.style.height)) {
            slope.y = -slope.y;
        }

        element.style.left = ((((percentToNum(element.style.left)/100)*pixToNum(containerStyle.width)) + ((slope.x/100)*pixToNum(containerStyle.width)))/ pixToNum(containerStyle.width)) * 100 + '%';

        element.style.top = ((((percentToNum(element.style.top)/100)*pixToNum(containerStyle.height)) + ((slope.y/100)*pixToNum(containerStyle.height)))/ pixToNum(containerStyle.height)) * 100 + '%';

    }, 200);

    return interval;
}

export {
    roundNumToNearestMultiple,
    movement,
    pixToNum
}