// @ts-nocheck

exports.getBugs = () => {
  fetch('https://4a40-80-62-116-88.eu.ngrok.io/bugs')
      .then(response => response.json())
      .then(bugsList => setBugs(bugsList))
}