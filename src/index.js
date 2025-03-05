function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector(".instructions"); // Fixed input selection
  let apiKey = "4bct0a285594fb6ecbc0c311f8fdc3fo";

  let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`; // Moved before apiUrl
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4-line poem in basic of HTML without adding HTML to the answer and separate each line with a <br/>. Make sure to follow the user instructions.do not include a title to the poem. sign the poem with 'SheCodes AI' inside a <strong>element at the end of the poem";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("Generating a poem about:", instructionsInput.value);
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
