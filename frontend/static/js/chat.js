console.log("Shh... We're chatting.");

const chatbox = document.querySelector("#chatbox .card-body");
const msgTemplate = {
    serial: document.querySelector("#msg-serial-template"),
    you: document.querySelector("#msg-you-template")
}

const chatLogs = [
    { sender: "serial", msg: "Hi there peasants! 👋😄" },
    { sender: "you", msg: "Hello...?" },
    { sender: "you", msg: "Who's this?" },
    { sender: "serial", msg: "Is that important? 🤔" },
    { sender: "serial", msg: "You're being hacked right now tho? 🤗" },
    { sender: "serial", msg: "Your security sucks." },
    { sender: "serial", msg: "Samana oi, wa'y chala. 🥱" },
    { sender: "you", msg: "Who are you?" },
    { sender: "serial", msg: "Teehee!" },
    { sender: "serial", msg: "You'll know soon. 🤫" },
    { sender: "serial", msg: "(Send link)" },
    { sender: "serial", msg: "left the channel." }
];

let msgNum = 0;

function getReply(yourMsg) {
    const currentMsg = chatLogs[msgNum].msg;
    if (currentMsg == yourMsg) {
        displayMessage(chatLogs[msgNum]);
        msgNum++;
    }
    while (msgNum < chatLogs.length && "serial" == chatLogs[msgNum].sender) {
        displayMessage(chatLogs[msgNum]);
        msgNum++;
    }
}

function displayMessage({ sender, msg }) {
    let newMessageBox = msgTemplate[sender].content.cloneNode(true);
    // console.log(newMessageBox);
    newMessageBox.querySelector(".msg-container").innerText = msg;
    chatbox.appendChild(newMessageBox);
}

displayMessage(chatLogs[msgNum]);
msgNum++;

console.log("Sabaa.");
