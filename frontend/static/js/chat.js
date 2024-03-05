console.log("Shh... We're chatting.");

const chatbox = document.querySelector("#chatbox .card-body");
const msgTemplate = {
    system: document.querySelector("#msg-system-template"),
    serial: document.querySelector("#msg-serial-template"),
    you: document.querySelector("#msg-you-template")
}

const msgInputForm = document.querySelector("#chatbox #msg-input-form");
const msgInput = document.querySelector("#chatbox #msg-input");
const sendBtn = document.querySelector("#chatbox #send-btn");

const chatLogs = [
    { delay: 1000, sender: "system", msg: "Entered Channel case-1154 (2 online)" },
    { delay: 1000, sender: "system", msg: "Your handle has been set to: [ Peasant ]" },
    { delay: 2000, sender: "serial", msg: "Hi there peasants! 👋😄" },
    { delay: 0, sender: "you", msg: "Hello?" },
    { delay: 0, sender: "you", msg: "Who's this?" },
    { delay: 2000, sender: "serial", msg: "Is that important? 🤔" },
    { delay: 3000, sender: "serial", msg: "You're being hacked right now tho? 🤗" },
    { delay: 2000, sender: "serial", msg: "Your security sucks." },
    { delay: 3000, sender: "serial", msg: "Samana oi, wa'y chala. 🥱" },
    { delay: 0, sender: "you", msg: "Who are you?" },
    { delay: 2000, sender: "serial", msg: "Teehee!" },
    { delay: 2000, sender: "serial", msg: "You'll know soon. 🤫" },
    { delay: 2000, sender: "serial", msg: "Click here to subscribe! 😀 &gt;&gt; <a href='/finding-nemo' onclick='findingNemo()'>f̘̩̯̱̘̟ͤ͢ͅi̗̮͉̠̜̺͞ͅn̴̹͈̘ͤͦ̈́ͦͧ̐̎ͅd̉̃҉͎̞̦i̩͉̩͔n͖͍̈̒̀ͫͦ͒͡ḡ͚̩͔̹̗͇͑̃-͉̲̞͚ͪ̍̈́ṅ̞̪̺̟̝̣̘̃e̢̠͚̫͙̮͋̂ͯͫͣ̂m̯̭͙̣͖͇̤ͦ̿o̕</a>" },
    { delay: 500, sender: "system", msg: "User [ 53r1@L #@ck3R ] left the channel." }
];

let msgNum = 0;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function displayMessageContent(sender, msg) {
    let newMessageBox = msgTemplate[sender].content.cloneNode(true);
    newMessageBox.querySelector(".msg-container").innerHTML = msg;
    chatbox.appendChild(newMessageBox);
}

async function displayMessage({ sender, msg, delay }) {
    await sleep(delay);
    displayMessageContent(sender, msg);
}

async function displayAutomatedMessages() {
    while (msgNum < chatLogs.length && "you" != chatLogs[msgNum].sender) {
        await displayMessage(chatLogs[msgNum]);
        msgNum++;
        console.log(msgNum);
    }
    if (msgNum == chatLogs.length) {
        const memberList = document.querySelector("#member-list");
        memberList.querySelector("#member-serial").remove();
        memberList.querySelector(".card-header").innerText = "Online Members (1)";
    }
}

function getReply(yourMsg) {
    displayMessageContent("you", yourMsg);

    if (chatLogs[msgNum].msg == yourMsg) {
        msgNum++;
        displayAutomatedMessages();
    }
}

function sendMessage(event) {
    getReply(msgInput.value);
    msgInput.value = "";
    event.preventDefault();
}

function findingNemo() {
    window.open("https://youtu.be/UwzOXhsRMvI", "_blank");
    return true;
    // window.location.href = '/finding-nemo';
}

msgInputForm.addEventListener("submit", sendMessage);
sendBtn.addEventListener("click", sendMessage);

displayAutomatedMessages();

console.log("Done loading chat.");
