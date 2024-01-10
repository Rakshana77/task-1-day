
const xhr = new XMLHTTPRequest()
xhr.open('GET','https://restcountries.com/v3.1/all')
xhr.onload = function () {
    let users = JSON.parse(xhr.responseText)
    let usernames = [];
    for (let user of users) {
        usernames.push(user['name']['common'])
        usernames.push(user['region'])
        usernames.push(user['subregion'])
         usernames.push(user['population'])

    }
    

};
xhr.send();