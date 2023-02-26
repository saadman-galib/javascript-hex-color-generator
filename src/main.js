const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".click-me");
const code = document.querySelector(".code");
const codeSpan = code.querySelector("span");
const r = document.querySelector(":root");
const notification = document.querySelector(".notification");
const notificationColor = notification.querySelector(".notification-color");
const notificationText = notification.querySelector("p");

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function generateHexColor() {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    return hexColor;
}
btn.addEventListener("click", () => {
    let colorCode = generateHexColor();
    document.body.style.backgroundColor = colorCode;
    btn.style.backgroundColor = colorCode;
    r.style.setProperty("--shadow", `0 0 55px 1px ${colorCode}`);
    codeSpan.innerHTML = `${colorCode}<i class="fa-regular fa-copy"></i>`;
    codeSpan.style.backgroundColor = colorCode;
    notificationColor.style.backgroundColor = colorCode;
    notificationText.textContent = `${colorCode} copied to clipboard!`;
});

codeSpan.addEventListener("click", (e) => copyCode(e.target.textContent));

function copyCode(text) {
    navigator.clipboard.writeText(text);
    console.log("copied");
}
