const startingCode = document.querySelector(".starting-code");
const channelChat = document.querySelector(".channel-chat");
startingCode.style.display = "none";
channelChat.style.display = "none";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const showTypingCode = async (line, cursor, callback) => {
    if (cursor) cursor.style.visibility = "hidden";
    line.tag.style.visibility = "visible";
    for (let i = 0; i < line.text.length; i++) {
        let ch = line.text.charAt(i);
        line.tag.innerHTML += "" + ch;
        await sleep(line.typingDelay);
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
        typingDelay = 20;
        return { tag: pTag, text, typingDelay };
    });

    const showTypingAllLines = async () => {
        for (let i = 0; i < 4; i++) {
            showTypingCode(codeLines[i], cursor);
            await sleep(1000);
        }
        await sleep(2000);
        for (let i = 4; i < 11; i++) {
            codeLines[i].typingDelay = 0;
            showTypingCode(codeLines[i], cursor);
            await sleep(70);
        }
        await sleep(3000);
        codeLines[11].typingDelay = 5;
        showTypingCode(codeLines[11], cursor);
        await sleep(500);
        for (let i = 12; i < codeLines.length; i++) {
            codeLines[i].typingDelay = 5;
            if (i == codeLines.length - 1)
                showTypingCode(codeLines[i], cursor, () => { cursor.style.display = "none" });
            else
                showTypingCode(codeLines[i], cursor);
            await sleep(1750);
        }
    }

    await showTypingAllLines();
    return true;
}

async function displayChannelChat() {
    console.log("IN displayChannelChat");
    channelChat.style.display = "inline-block";
    let chatLines = [...channelChat.querySelectorAll(".channel-chat li")].map(chatLine => {
        let inputTag = chatLine.querySelector("input");
        let text = "> " + inputTag.value;
        inputTag.value = "";
        inputTag.style.visibility = "hidden";
        chatLine.style.visibility = "hidden";
        typingDelay = 20;
        return {
            liTag: chatLine,
            labelTag: chatLine.querySelector("label"),
            line: { tag: inputTag, text, typingDelay }
        };
    });

    for(let i=0; i<chatLines.length; i++) {
        chatLines[i].liTag.style.visibility = "visible";
        await sleep(2000);
    }
}


async function executeDisplay() {
    await displayStartCode();
    await displayChannelChat();
}

executeDisplay();