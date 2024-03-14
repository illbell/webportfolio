let typewriter = document.querySelector("#typewriter");

const myText = ["Fullstack Developer", "QA Engineer", "ReactJS Developer"]


function timer(ms) { return new Promise(res => setTimeout(res, ms)); }


async function typewriterfunc() {

    while (true) {
        for (let i = 0; i < myText.length; i++) {
            await typewriterType(myText[i]);
            await timer(1500)
            await typewriterDelete(myText[i]);
            await timer(500)
        }
    }

}

async function typewriterType(text) {
    for (let charIndex = 0; charIndex < text.length; charIndex++) {
        typewriter.innerHTML += text.charAt(charIndex);
        await timer(50)
    }
}

async function typewriterDelete(text) {

    for (let charIndex = text.length; charIndex > 0; charIndex--) {
        typewriter.innerHTML = typewriter.innerHTML.slice(0, -1);
        await timer(50)
    }
}




typewriter.onload = typewriterfunc();
