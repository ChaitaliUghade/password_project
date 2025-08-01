let password = document.getElementById("password")
let eye = document.getElementById("eye")

eye.addEventListener("click",()=>{
    if(password.type === "password"){
        password.type = "text"
        eye.src = "eyeopen.png"
        
    }
    else{

        password.type = "password"
        eye.src = "eyeclose.png"
    }

} )

// function handleClick(){
//     if(password.type === "password"){
//         password.type = "text"
//         eye.src = "eyeopen.png"
        
//     }
//     else{

//         password.type = "password"
//         eye.src = "eyeclose.png"
//     }
// }
