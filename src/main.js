const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".click-me");
const code = document.querySelector(".code");
const codeSpan = document.querySelector(".code span");
const r = document.querySelector(":root");

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
    code.innerHTML = `Hex Code: <span style="background-color: ${colorCode}" onclick="copyCode(this.textContent)">${colorCode}<i class="fa-regular fa-copy"></i></span>`;
});

function copyCode(text) {
    navigator.clipboard.writeText(text);
    console.log("copied");
}
