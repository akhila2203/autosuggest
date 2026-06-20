let male = true;

function changeUser() {

    let photo = document.getElementById("photo");
    let name = document.getElementById("name");
    let gender = document.getElementById("gender");

    if (male) {
        photo.src = "../images/female.jpeg";
        name.innerText = "Jane Doe";
        gender.innerText = "Female";
        male = false;
    }
    else {
        photo.src = "../images/john.png";
        name.innerText = "John Doe";
        gender.innerText = "Male";
        male = true;
    }
}