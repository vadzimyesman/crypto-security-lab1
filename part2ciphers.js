const encipher = (string)=>{
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'," "]
    let enciphered = []
    let newString = ""
    let characters = string.split("")
    for (i=0;i<characters.length;i++){
        enciphered.push(letters.indexOf(characters[i])+1)
    }
    //console.log(enciphered)

    let result = enciphered.map((e)=>{
        if((e+5)>27){
            return e+5-27
        } else {
            return e+5
        }
    })

    for (i=0;i<result.length;i++){
        newString+=letters[result[i]-1]
    }
    console.log(newString)
}

encipher("i love cryptography")


const decipher = (string)=>{
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'," "]
    let enciphered = []
    let newString = ""
    let characters = string.split("")
    for (i=0;i<characters.length;i++){
        enciphered.push(letters.indexOf(characters[i])+1)
    }
    //console.log(enciphered)

    let result = enciphered.map((e)=>{
        if((e-5)<1){
            return e-5+27
        } else {
            return e-5
        }
    })

    for (i=0;i<result.length;i++){
        newString+=letters[result[i]-1]
    }
    console.log(newString)

}
decipher("neqt jehwcuytlwfumc")
