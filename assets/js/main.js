
//Run PX Tag
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
	(n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-DT38BLOGLNV8-2");


//sessionStorage.clear()

function logMeIn(){		
	const formInputs = document.getElementsByClassName('form__input'); 
	try {
		if(formInputs[0].value.length > 3){
			const email = formInputs[0].value;
			const userId = email.split("@")[0];
			const domain = email.split('@')[1].substring(0,email.indexOf('.'));
			const uniqueNumber = "UID"+Math.floor(Math.random() * 9999999);
			aptrinsic("identify",
			{
				"id" : userId,
				"email": email
			},{
				"id": uniqueNumber, //Required
				"name": domain
			});
			console.log(userId, domain, uniqueNumber);
			location.href = "main.html";	
		} else{
			alert("Please enter an Email ID");
		}	
	} catch (error) {
		console.log('catch '+error);
	}
}


// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// 	if(window.location.href.indexOf('login') > -1){
// 		let myInterval = setInterval(checkElement, 1000);
// 		function checkElement(){
// 			const loginForm = document.querySelector("#login"); 
// 			if(loginForm){
// 				clearInterval(myInterval);
// 				loginForm.addEventListener("submit", e => {   
// 					e.preventDefault();
// 					const formInputs = document.getElementsByClassName('form__input');
// 					const userId = formInputs[0].value;
// 					// const accountId = userId.split('@')[1].substring(0,userId.indexOf('.'));
// 					// const departmentArr = [
// 					// 	"Sales",
// 					// 	"Finance",
// 					// 	"Human Resources",
// 					// 	"Technology",
// 					// 	"Marketing"
// 					//   ]					  
// 					//   const department = departmentArr[Math.floor(Math.random() * departmentArr.length)];
// 				if((userId.indexOf("apple.com")>-1) || (userId.indexOf("tesla.com")>-1)) {
// 					(function(){
// 						aptrinsic("identify",
// 						{
// 						//User Fields
// 						  "id": userId, // Required for logged in app users
// 						  "email": userId					  
// 						},
// 						{
// 						//Account Fields
// 						  "id": "IBM", //Required
// 						  "name":"International Business School"				
// 						});
// 						})();
						 
// 				 console.log(userId);
				
// 				 sessionStorage.setItem("username", userId);          
// 				 window.location.href = "main.html";				
// 				} else {
// 						alert('Invalid User Name and Password');
// 					}
// 				});
// 			}
		
// 		}
// } else if(window.location.href.indexOf('main') > -1){
// 	let mainInterval = setInterval(checkElementOnMainPage, 1000);		
// 	function checkElementOnMainPage(){
// 	const loggingValue = document.getElementById('logging');
// 	if(loggingValue){
// 		clearInterval(mainInterval);
// 		loggingValue.addEventListener("click",(e)=>{
// 			e.preventDefault();
// 		sessionStorage.clear()
// 		window.aptrinsic('reset');
// 		window.location.href="index.html";
// 		});
// 	}}
// } else {
// 	console.log('returned');
// 	return;
// }
// });



// (function (){

// }
// )();



// (function (){
// 	if(window.location.href.indexOf('main') > -1){
// 		let mainInterval = setInterval(checkElementOnMainPage, 1000);		
// 		function checkElementOnMainPage(){
// 		const loggingValue = document.getElementById('logging');
// 		if(loggingValue){
// 			clearInterval(mainInterval);
// 			loggingValue.addEventListener("click",(e)=>{
// 				e.preventDefault();
//             sessionStorage.clear()
// 			window.aptrinsic('reset');
// 			window.location.href="index.html";
// 			});
// 		}}
// 	} else {
// 		return;
// 	}

// })();


