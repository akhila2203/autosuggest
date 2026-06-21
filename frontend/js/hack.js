function suggestSkills(){

    let degree = document.getElementById("degree").value;
    let result = document.getElementById("result");

    if(degree === "B.Tech CSE"){
        result.innerHTML =
        "Skills: Java, DSA, SQL, React, Node.js";
    }

    else if(degree === "B.Tech ECE"){
        result.innerHTML =
        "Skills: Embedded Systems, VLSI, IoT";
    }

    else if(degree === "B.Tech Mechanical"){
        result.innerHTML =
        "Skills: AutoCAD, SolidWorks, CATIA";
    }

    else{
        result.innerHTML =
        "Skills: C, Java, DBMS, Web Development";
    }
}