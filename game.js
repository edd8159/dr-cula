let storyText = document.getElementById("story");
let choicesContainer = document.getElementById("choices-container");
let restartButton = document.getElementById("restart-button");

let gameData = {
    start: {
        text: "Jonathan Harker chega ao castelo de Drácula. O que ele deve fazer?",
        choices: [
            { text: "Entrar no castelo", next: "enterCastle" },
            { text: "Fugir imediatamente", next: "runAway" }
        ]
    },
    enterCastle: {
        text: "Jonathan decide entrar no castelo. Ele encontra Drácula, que o convida para jantar. O que ele faz?",
        choices: [
            { text: "Aceitar o convite", next: "dinner" },
            { text: "Recusar e tentar escapar", next: "escapeCastle" }
        ]
    },
    dinner: {
        text: "Durante o jantar, Drácula revela que é um vampiro. O que Jonathan faz?",
        choices: [
            { text: "Tentar lutar contra Drácula", next: "fightDracula" },
            { text: "Ficar em silêncio e esperar uma oportunidade", next: "waitForOpportunity" }
        ]
    },
    fightDracula: {
        text: "Jonathan tenta lutar, mas é dominado por Drácula. Ele é transformado em vampiro. Fim do jogo.",
        choices: [
            { text: "Reiniciar", next: "start" }
        ]
    },
    waitForOpportunity: {
        text: "Jonathan espera pacientemente. Ele consegue escapar de Drácula quando ele não está olhando. O que ele faz?",
        choices: [
            { text: "Fugir para Londres", next: "escapeToLondon" },
            { text: "Voltar para o castelo", next: "returnToCastle" }
        ]
    },
    escapeCastle: {
        text: "Jonathan consegue escapar do castelo, mas Drácula o persegue até Londres. O que ele faz?",
        choices: [
            { text: "Enfrentar Drácula", next: "finalBattle" },
            { text: "Tentar se esconder", next: "hideInLondon" }
        ]
    },
    escapeToLondon: {
        text: "Jonathan chega a Londres, mas Drácula o encontra. Eles enfrentam uma batalha. O que Jonathan faz?",
        choices: [
            { text: "Lutar até a morte", next: "finalBattle" },
            { text: "Fugir para outra cidade", next: "runToAnotherCity" }
        ]
    },
    finalBattle: {
        text: "Jonathan enfrenta Drácula em uma batalha épica e vence. Ele destrói o vampiro e salva a cidade. Você venceu!",
        choices: [
            { text: "Reiniciar", next: "start" }
        ]
    },
    hideInLondon: {
        text: "Jonathan tenta se esconder em Londres, mas Drácula o encontra e o transforma em vampiro. Fim do jogo.",
        choices: [
            { text: "Reiniciar", next: "start" }
        ]
    },
    runAway: {
        text: "Jonathan foge, mas acaba sendo capturado por Drácula. Fim do jogo.",
        choices: [
            { text: "Reiniciar", next: "start" }
        ]
    },
    returnToCastle: {
        text: "Jonathan volta ao castelo, mas Drácula o aprisiona novamente. Fim do jogo.",
        choices: [
            { text: "Reiniciar", next: "start" }
        ]
    },
    runToAnotherCity: {
        text: "Jonathan foge para uma cidade distante, mas Drácula o encontra e o transforma em vampiro. Fim do jogo.",
        choices: [
            { text: "Reiniciar", next: "start" }
        ]
    }
};

function startGame() {
    storyText.innerHTML = gameData.start.text;
    displayChoices(gameData.start.choices);
    restartButton.style.display = "none";
}

function displayChoices(choices) {
    choicesContainer.innerHTML = "";
    choices.forEach(choice => {
        let button = document.createElement("button");
        button.classList.add("choice");
        button.innerHTML = choice.text;
        button.onclick = function() { makeChoice(choice.next); };
        choicesContainer.appendChild(button);
    });
}

function makeChoice(nextStep) {
    let nextData = gameData[nextStep];
    storyText.innerHTML = nextData.text;
    displayChoices(nextData.choices);
    if (nextStep === "start") {
        restartButton.style.display = "none";
    } else {
        restartButton.style.display = "block";
    }
}

startGame();
