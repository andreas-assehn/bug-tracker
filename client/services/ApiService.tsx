// @ts-nocheck

exports.addBug = newBug => {
  return fetch('https://8622-80-62-116-88.eu.ngrok.io/addBug', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(newBug)
  }).catch(e => console.log(e))
}