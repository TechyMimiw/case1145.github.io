const startingCode = document.querySelector(".starting-code");
startingCode.style.display = "none";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const showTypingCode = async (line, cursor, delay, callback) => {
    if (cursor) cursor.style.visibility = "hidden";
    line.tag.style.visibility = "visible";
    for (let i = 0; i < line.text.length; i++) {
        let ch = line.text.charAt(i);
        line.tag.innerHTML += "" + ch;
        if (delay > 0) await sleep(delay);
    }
    if (cursor) cursor.style.visibility = "visible";
    if (callback) callback();
}

console.log("Hello!");
async function displayStartCode() {
    startingCode.style.display = "inline-block";
    let cursor = startingCode.querySelector(".cursor span");
    let pTags = startingCode.querySelectorAll("li:not(.cursor)");

    const codeLines = [...pTags].map(pTag => {
        let text = "> " + pTag.innerHTML;
        pTag.innerHTML = "";
        pTag.style.visibility = "hidden";
        return { tag: pTag, text };
    });

    const showTypingAllLines = async () => {
        for (let i = 0; i < 4; i++) {
            await showTypingCode(codeLines[i], cursor, 5);
            await sleep(1000);
        }
        await sleep(2000);
        for (let i = 4; i < 11; i++) {
            await showTypingCode(codeLines[i], cursor, 0);
            await sleep(40);
        }
        await sleep(3000);
        await showTypingCode(codeLines[11], cursor, 5);
        await sleep(500);
        for (let i = 12; i < codeLines.length; i++) {
            if (i == codeLines.length - 1)
                await showTypingCode(codeLines[i], cursor, 0, () => { cursor.style.display = "none" });
            else
                await showTypingCode(codeLines[i], cursor, 0);
            await sleep(1750);
        }
    }

    await showTypingAllLines();
    return true;
}

async function executeDisplay() {
    await displayStartCode();
    sleep(3000);
    window.location.href = '/case-1154';
}

executeDisplay();