
    
    
    
    const loginForm = document.querySelector("#login");
 
    loginForm.addEventListener("submit", e => {   
        const formInputs = document.getElementsByClassName('form__input');
        const userId = formInputs[0].value;
        const password = formInputs[1].value;
 if((userId.indexOf("gainsight.com")>-1) && (password.length > 3)) {
     console.log('test');
    e.preventDefault();
    // Logic


           sessionStorage.setItem("username", userId);          
            sessionStorage.setItem("password", password);
            window.location.href = "index.html";
            document.getElementById('logging').innerText = "Logout";
            document.getElementById('nav').style.display = "block";


                            // PX Code
                //passing user and account objects:
                aptrinsic("identify",
                {
                //User Fields
                "id": userId, // Required for logged in app users
                "email": userId,
                "firstName": "John",
                "lastName": "Smith",
                "signUpDate": 1522697426479, //unix time in ms
                "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
                "price" : 95.5,
                "userHash": "" // optional transient for HMAC identification
                },
                {
                //Account Fields
                "id": "PersonalGithub", //Required
                "name":"Tej Ozymandias Github",
                "Program": "Platinum" // flat custom attributes
                });
                //PX Code


        } else{
            alert('Invalid User Name and Password');
        }
  });





// (function(){
//     //check session storage
//     if( sessionStorage.length > 0) {
//         document.getElementById('logging').innerText = "Logout";
//     } else{
//         document.getElementById('nav').style.display = "none";
//     }})();
    
    
//     document.getElementById('logging').addEventListener("click", e=>{
//         sessionStorage.clear()
//         document.getElementById('logging').innerText = "Login";
//         document.getElementById('nav').style.display = "none";
//     });
    
//     function setFormMessage(formElement, type, message) {
//         const messageElement = formElement.querySelector(".form__message");
    
//         messageElement.textContent = message;
//         messageElement.classList.remove("form__message--success", "form__message--error");
//         messageElement.classList.add(`form__message--${type}`);
//     }
    
//     function setInputError(inputElement, message) {
//         inputElement.classList.add("form__input--error");
//         inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
//     }
    
//     function clearInputError(inputElement) {
//         inputElement.classList.remove("form__input--error");
//         inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
//     }
    
//     document.addEventListener("DOMContentLoaded", () => {
//         const loginForm = document.querySelector("#login");
    
    
    
//         loginForm.addEventListener("submit", e => {
//             e.preventDefault();
//             // Logic
//             const formInputs = document.getElementsByClassName('form__input');
//             const userId = formInputs[0].value;	
            
//                     // PX Code
//                     //passing user and account objects:
//                     aptrinsic("identify",
//                     {
//                     //User Fields
//                     "id": userId, // Required for logged in app users
//                     "email": userId        
//                     },
//                     {
//                     //Account Fields
//                     "id": "PersonalGithub", //Required
//                     "name":"Tej Ozymandias Github",
//                     "Program": "Platinum" // flat custom attributes
//                     });
//                     //PX Code
    
//             if((userId.indexOf("gainsight.com")>-1) && (formInputs[1].value.length > 3)) {
    
//             document.getElementsByClassName('container-login')[0].style.display = "none";
//             document.getElementById('page-wrapper').style.display = "block";
//             } else{
//                 alert('Invalid User Name and Password');
//             }
    
    
//             setFormMessage(loginForm, "error", "Invalid username/password combination");
//         });
    
//         document.querySelectorAll(".form__input").forEach(inputElement => {
//             inputElement.addEventListener("blur", e => {
//                 if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
//                     setInputError(inputElement, "Username must be at least 10 characters in length");
//                 }
//             });
    
//             inputElement.addEventListener("input", e => {
//                 clearInputError(inputElement);
//             });
//         });
//     });
    