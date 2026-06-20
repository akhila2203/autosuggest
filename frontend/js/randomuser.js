async function getUser() {

    let response = await fetch("https://randomuser.me/api/");

    let data = await response.json();

    let user = data.results[0];

    document.getElementById("img").src =
        user.picture.large;

    document.getElementById("name").innerHTML =
        user.name.first + " " + user.name.last;

    document.getElementById("gender").innerHTML =
        "Gender: " + user.gender;

    document.getElementById("age").innerHTML =
        "Age: " + user.dob.age;

    document.getElementById("email").innerHTML =
        "Email: " + user.email;
}

getUser();