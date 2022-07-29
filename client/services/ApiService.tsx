// @ts-nocheck

const BASE_URL = 'https://8622-80-62-116-88.eu.ngrok.io';

exports.getBugs = () => fetch(BASE_URL + '/bugs');

exports.addBug = newBug => {
  return fetch(BASE_URL + '/addBug', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(newBug)
  }).catch(e => console.log(e))
}

exports.deleteBug = bug => {
  return fetch(BASE_URL + '/deleteBug', {
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(bug)
  }).catch(e => console.log(e))
}