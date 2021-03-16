
    
    
    
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
     //Run PX
       (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-BDSBPZZISNM1-2");

//passing user and account objects:
(function(){
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
      "id":"IBM", //Required
      "name":"International Business Machine",
      "Program": "Platinum" // flat custom attributes
   });
})();
     
     
            window.location.href = "index.html";
            document.getElementById('logging').innerText = "Logout";
            document.getElementById('nav').style.display = "block";


             


        } else{
            alert('Invalid User Name and Password');
        }
  });






