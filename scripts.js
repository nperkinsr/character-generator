const cardElement = document.getElementById("character-card");
const generateCharacterButton = document.getElementById("generate-btn");
const closeCharacterButton = document.getElementById("close-btn");
const characterTextElement = document.getElementById("character-result");

let characterData;

// Load the JSON file and save it in characterData variable
function loadCharacterData() {
  fetch("characterOptions.json") // 1. Ask the browser to get the file named "characterOptions.json"
    .then((stuffWeFetched) => stuffWeFetched.json()) // 2. When the file is loaded, take the response and turn it into JavaScript data
    .then((fetchedStuff) => {
      // 3. When the data is ready, run this function with the data we got
      characterData = fetchedStuff; // 4. Save the data into the variable characterData so I can use it later in my code
    });
}

function getRandomItemFromList(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function createRandomCharacterDescription() {
  const randomAdjective = getRandomItemFromList(characterData.adjectives);
  const randomType = getRandomItemFromList(characterData.types);
  const randomQuirk = getRandomItemFromList(characterData.quirks);

  return `A ${randomAdjective} ${randomType} ${randomQuirk}`;
}

function showCharacterOnCardBack() {
  const characterDescription = createRandomCharacterDescription();
  characterTextElement.textContent = characterDescription;
  cardElement.classList.add("flipped");
}

function showCardFront() {
  cardElement.classList.remove("flipped");
}

generateCharacterButton.addEventListener("click", showCharacterOnCardBack);
closeCharacterButton.addEventListener("click", showCardFront);

loadCharacterData();
