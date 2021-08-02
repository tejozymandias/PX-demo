//Run PX Tag


  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-6EJAJ3QDC2HE-2");




(function (){
	if ((window.location.href.indexOf('index')>-1) && (sessionStorage.getItem('loginPx') !== null)) {
		console.log('ran first iife');
		location.href = "main.html";
		return;
	} 
})();


  (function (){
	document.addEventListener('DOMContentLoaded',()=>{
		if(location.href.indexOf('main')>-1){
			const login = sessionStorage.getItem('loginPx');
			document.getElementById('logo').innerText = login;
			console.log('ran 2nd iife');
		} else {
			return;
		}
	  });	
  })();



function logMeIn(){		
	const formInputs = document.getElementsByClassName('form__input'); 
	try {
		if((formInputs[0].value.indexOf("gainsight.com")>-1) || (formInputs[0].value.indexOf("tesla.com")>-1) || (formInputs[0].value.indexOf("apple.com")>-1) || (formInputs[0].value.indexOf("amazon.com")>-1)) {
			const email = formInputs[0].value;
			sessionStorage.setItem("loginPx", email); 
			const domain = formInputs[1].value;
			const name = formInputs[2].value.split(' ');
			const firstName = name[0];
			const lastName = name[1];
			const userId = email.split("@")[0];
			// const uniqueNumber = "UID"+Math.floor(Math.random() * 9999999);
			aptrinsic("identify",
			{
				"id" : email,
				"email": email,
				"firstName": firstName,
				"lastName": lastName

			},{
				"id": "PX-ID-"+domain, //Required				
				"name": domain				
			});
			console.log(email,domain);
			alert("Logged in user id: "+ firstName);
			window.location = "main.html";	
		} else{
			alert("Please enter a valid Email ID");
		}	
	} catch (error) {
		console.log('catch '+error);
	}

		}




// aptrinsic('identify',{"id":Date.now(),"email":"cooliio@apple.com","firstName":"cool","lastName":"idio"},{"id":"UID1549611","name":"apple"});
//aptrinsic('identify',{"id":"dosa","email":"dosaidly@amazon.com","firstName":"dosa","lastName":"idly"},{"id":"UID1549612","name":"amazon"});


function logOut(){
	sessionStorage.removeItem('loginPx');
	window.aptrinsic('reset');
	location.href ='index.html';
}














