function translate(word) {
  // Additional Build 1
  // let translated = word.toLowerCase();
  // // return translated;

  // Additional Build 2
  let startVowel = word;
  if (
    startVowel.charAt(0) === "a" ||
    startVowel.charAt(0) === "e" ||
    startVowel.charAt(0) === "i" ||
    startVowel.charAt(0) === "o" ||
    startVowel.charAt(0) === "u"
  ) {
    startVowel += "way";
  }
  return startVowel;
}

if (typeof module !== "undefined") {
  // Node
  module.exports = { translate };
} else {
  // Browser
  document.getElementsByName("form").addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let word = formData.get("word");
    let translation = translate(word);
    document.getElementsByClassName("#translation").innerText = translation;
  });
}
