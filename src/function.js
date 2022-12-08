const combineWords = (word1, word2) => {
    const text = `${word1} ${word2}`
    return text;
}

const getLetter = (word,positon) => {
    let text = word.charAt(positon-1)
    if (text === '') {
        text = null
        return text;
    }   else{
        return text
    }
}


const buildEvenRange = (start, end) => {
    let emptyArray = []

    if (start < end) {
        let evenArray = []
        for(let i = start; i <= end; i++){    
            if(i%2 === 0){
                emptyArray.push(i);
                evenArray.push(emptyArray.slice(0));
            }
        }
    
        const Array = evenArray.splice(-1)
        return Array[0]
    
    } else return emptyArray
}

module.exports = {combineWords, getLetter, buildEvenRange}
