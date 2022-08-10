// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

destructivelyAppendCat("Ralph")

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

destructivelyPrependCat("Bobby")

function destructivelyRemoveLastCat() {
    cats.pop()
}

destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat() {
    cats.shift()
}

destructivelyRemoveFirstCat()

function appendCat(name) {
    return [...cats, name]
}

appendCat("Willow")

function prependCat(name) {
    return [name, ...cats]
}

prependCat("Kitty")

function removeLastCat() {
    return cats.slice(0, cats.length -1)
}

removeLastCat()

function removeFirstCat() {
    return cats.slice(1, cats.length)
}