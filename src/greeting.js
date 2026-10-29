// The greeting the app says.

function greet(name) {
	return `Hello, ${name}!`
}

function shout(name) {
	return `${greet(name).toUpperCase()}!!`
}

module.exports = { greet, shout }
