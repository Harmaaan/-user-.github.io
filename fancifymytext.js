// Bigger button → makes text larger
function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Fancy / Boring styles
function makeFancy() {
    let textArea = document.getElementById("textInput");

    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Moo button → uppercase text + adds "-Moo" to each sentence
function mooText() {
    let textArea = document.getElementById("textInput");

    // Uppercase
    let text = textArea.value.toUpperCase();

    // Add "-Moo" to last word of each sentence
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }

    textArea.value = sentences.join(". ");
}
