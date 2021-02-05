var questionGenerator = (level) => {
    //i want to return a tuple of numbers to add
    //the answer
    //list of possible answers to choose from
    var obj = {};
    if(level === 1) {
        //generate 2 numbers between 0 and 10
        obj.numbers = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)];
        obj.answer = obj.numbers[0] + obj.numbers[1];
        obj.possibleAnswers = [obj.answer];
        
        var posOrNeg;
        var value;
        for(var i = 0; i < 3; i++) {
            posOrNeg = Math.floor(Math.random() * 2);
            posOrNeg = posOrNeg === 0 ? -1 : 1;

            while(value = posOrNeg * Math.ceil(Math.random() * 4)) {
                if(!obj.possibleAnswers.includes(value)) {
                    break;
                }
            }
            obj.possibleAnswers.push(obj.answer + posOrNeg * Math.ceil(Math.random() * 4));
        }
    } else if (level === 2) {

    } else if (level === 3) {

    }

    return obj;
}

export default questionGenerator;