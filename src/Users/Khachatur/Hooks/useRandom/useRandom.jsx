

export default function useRandom(count, type, font) {
    const rndNum = () => {
        const num =  Math.floor(Math.random() * 1000) + 1;
        return num
    }

    const rndString = (uppercase) => {
        const string = Math.random().toString(36).slice(2)
        uppercase ? string.toUpperCase() : string.toLowerCase()
        return string
    }

    const genRndElems = () => {
        if (type === 1) {
            return rndNum()
        }else if (type === 2) {
            return rndString(font === "uppercase")
        }
    }
 
    const rndElems = []
    for (let i = 0; i < count; i++) {
        rndElems.push(genRndElems())
    }

    return rndElems
}
