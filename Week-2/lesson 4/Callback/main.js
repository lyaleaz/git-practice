/*let users = []

const getData = function () {
    users = [{ name: "Rick" }, { name: "Morty" }]
    console.log("Got users")
}

const displayData = function () {
    console.log("Going to display users")
    for (user of users) {
        console.log(user.name)
    }
}
const getData1 = function () {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
    }, 3000)
}




getData1()
getData()
displayData()*/
let users = []

const getData = function () {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
    }, 3000);
}

const displayData = function () {
    console.log("Going to display users")
    for (user of users) {
        console.log(user.name)
    }
}
const first = function (callback) { //receive the function as a parameter
    setTimeout(function () {
        console.log("should be first")
        callback() //this is the `second` function being invoked
    }, 3000)
}

const second = function () {
    console.log("should be second")
}

first(second) //pass the second function to the first, as an argument
/*
first()
second()


getData()
displayData()*/