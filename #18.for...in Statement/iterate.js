//Iterate Through the Keys of an Object with a for...in Statement
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    let count = 0;
    for (const member in allUsers) {
        if (allUsers[member].online === true)
            count++
    }
    return count;

}

console.log(countOnline(users));