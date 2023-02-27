
function edit(realName, gender, userName, description, year, age){
    document.getElementById("fname").innerHTML=realName;
    document.getElementById("gender").innerHTML=gender;
    document.getElementById("username").innerHTML=userName;
    document.getElementById("desc").innerHTML=description;
    document.getElementById("year").innerHTML=year;
    document.getElementById("age").innerHTML=age; 
}
function editPhoto(url){
    document.getElementById("ppic").src="imgs/"+url;
}
function main(){
    var name, username, gender, description, picture, varDir;
    name = prompt("Please enter your full name: ");
    username = prompt("Please enter your desired username: ");
    gender = confirm("What is your gender?\nPress OK if you are male\nCancel if Female");
    if(gender){
        alert("Your profile is set to MALE");
        gender = "M";
    }else{
        alert("Your profile is set to FEMALE");
        gender = "F";
    }
    description= prompt("Please type a brief descriptiox of yourself");
    year = parseInt(prompt("Please enter your Birth Year", "2000"));
    picture = confirm("Do you want to use a custom profile picture?");
    if(picture){
        if(gender=="M"){
            varDir = prompt("Please pick directory of file:\nmale1.jpg or male2.png");
        }else{
            varDir = prompt("Please pick directory of file:\nfemale1.jpg or female2.jpg");
        }
        editPhoto(varDir);
    }else{
        alert("No image has been set.");
    }
    edit(name, gender, username, description, year, 2023-year);
}
main();