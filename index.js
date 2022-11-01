// code your solution here
function saturdayFun(roller = "roller-skate") {
    return `This Saturday, I want to ${roller}!`
}

function mondayWork(work= "go to the office") {
    return `This Monday, I will ${work}.`
}



const wrapAdjective = (flair = "*") => {
    return function (item = "special") {
        return `You are ${flair}${item}${flair}!`
    }
}


