const pTags = document.querySelectorAll("code.type-line p");
const codeLines = [...pTags].map(pTag => {
    let text = pTag.innerHTML;
    pTag.innerHTML = "";
    return {pTag, text};
});
console.log("Hello!");
console.log(codeLines);

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const showTypingCode = async() => {
    for(let j=0; j < codeLines.length; j++) {
        let line = codeLines[j];
        for (let i=0; i < line.text.length; i++) {
            let ch = line.text.charAt(i);
            line.pTag.innerHTML += ""+ch;
            await sleep(100);
        }
        await sleep(100);
    }
}

showTypingCode();