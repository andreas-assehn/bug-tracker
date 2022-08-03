// @ts-nocheck

const BASE_URL = 'ADD NGROK HTTPS TUNNEL HERE';

exports.getBugs = () => fetch(BASE_URL + '/bugs').catch(e => console.log(e));

exports.addBug = newBug => {
  return fetch(BASE_URL + '/addBug', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(newBug)
  }).catch(e => console.log(e))
}

exports.editBug = bug => {
  return fetch(BASE_URL + '/editBug', {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(bug)
  }).catch(e => console.log(e))
}

exports.deleteBug = bug => {
  return fetch(BASE_URL + '/deleteBug', {
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(bug)
  }).catch(e => console.log(e))
}

