/*
 * Name: Arti Chovatiya, Kripal Bhatia
 * File: app.js
 * Date: Feb 19, 2022
*/
class Contact {
    constructor(contactName = "", emailAddress = "", contactNumber = "", contactMessage = "") {
        this.contactName = contactName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.contactMessage = contactMessage;
    }
}

class User
{
    constructor(FirstName = "", lastName = "", emailAddress = "", password = "", confirmPassword = "")
    {
        this.FirstName = FirstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}

(function(){

    let userObject = new User();

    function homePage(){

        // heading element
        let title = document.createElement("h2");
        title.setAttribute("id", "intro_heading");
        title.textContent = "Welcome to WEBD6201 - Client-Side Scripting";

        let content = document.getElementsByTagName("section")[0];
        content.appendChild(title);

        //Include the background image
        let homeImage = document.createElement("img");
        homeImage.setAttribute("id", "homeImg");
        homeImage.setAttribute("src", "./images/JavaScript.png");
        homeImage.setAttribute("alt", "");
        content.appendChild(homeImage);

        //description of image
        let imageDescription = document.createElement("p");
        imageDescription.setAttribute("id", "img_Description");
        imageDescription.textContent = "JavaScript is a text-based programming language that allows you to construct interactive web pages on both the client and server sides.";
        content.appendChild(imageDescription);

    }


    function projectPage(){

        //heading element
        let title = document.createElement("h2");
        title.setAttribute("id", "project_heading");
        title.textContent = "Favourite Projects";

        let content = document.getElementsByTagName("section")[0];
        content.appendChild(title);

        //name of project
        let project1Name = document.createElement("p");
        project1Name.setAttribute("class", "projectName");
        project1Name.textContent = "Brain Control Home Automotation system:";
        content.appendChild(project1Name); 

        //Include the image
        let project1Image = document.createElement("img");
        project1Image.setAttribute("id", "project1Image");
        project1Image.setAttribute("src", "./images/BrainHomeControll.jpeg");
        project1Image.setAttribute("alt", "BrainHomeControll");
        content.appendChild(project1Image);  

        //details of project
        let project1Detail = document.createElement("p");
        project1Detail.setAttribute("id", "project1Detail");
        project1Detail.textContent = "The Brain Computer Interface (BCI) is a communication channel that allows the human brain and a digital computer to connect in order to control and operate external equipment without the usage of a muscular body component. This facilitates surgeries and is especially beneficial to the elderly and decibel people. This is beneficial for those who are unable to control peripheral devices using their typical muscular body parts. The suggested system uses Human Attention Level, a non-invasive way of measuring brain signals, to manage home appliances (such as light bulbs and fans). NeuroSky Headset is used to track this attentiveness.";
        content.appendChild(project1Detail);    

        //name of project
        let project2Name = document.createElement("p");
        project2Name.setAttribute("class", "projectName");
        project2Name.textContent ="Eco- Friednly Sathi:";
        content.appendChild(project2Name); 

        //Include the image
        let project2Image = document.createElement("img");
        project2Image.setAttribute("id", "project2Detail");
        project2Image.setAttribute("src", "./images/Eco-friendly.jpeg");
        project2Image.setAttribute("alt", "Eco-friendly");
        content.appendChild(project2Image);  

        //details of project
        let project2Detail = document.createElement("p");
        project2Detail.setAttribute("id", "project2Detail");
        project2Detail.textContent ="Eco- Friednly Sathi: This project is to bring the awareness about the increasing pollution and degraded health standard of people. This is an online Bike store that has listings of various bike along with their features. It also consists of Bike service Registration. This system allows user to rent or buy bikes. System allow user to check various articles submitted by user and even comment on them. Credit card payment facility is available.";
        content.appendChild(project2Detail); 

        //name of project
        let project3Name = document.createElement("p");
        project3Name.setAttribute("class", "projectName");
        project3Name.textContent = "Optical Character recognigation:";
        content.appendChild(project3Name);  

        //Include the image
        let project3Image = document.createElement("img");
        project3Image.setAttribute("id", "project3Image");
        project3Image.setAttribute("src", "./images/ocr-software.jpg");
        project3Image.setAttribute("alt", "ocr-software");
        content.appendChild(project3Image);  

        //details of project
        let project3Detail = document.createElement("p");
        project3Detail.setAttribute("id", "project3Detail");
        project3Detail.textContent = "Optical Character recognigation: Optical Character Recognition (OCR) is a software technique that electronically recognises text (written or printed) within a digital image or actual document, including a scanned document, and turns it into machine-readable text for data processing. Text recognition is another name for it.";
        content.appendChild(project3Detail);         
        
    }

    function aboutPage(){

        //heading element
       let title = document.createElement("h2");
        title.setAttribute("id", "intro_heading");        
        title.textContent = "About us";

        let content = document.getElementsByTagName("section")[0];
        content.appendChild(title);
        
        //Include the image
        let user1Image = document.createElement("img");
        user1Image.setAttribute("id", "user1Img");
        user1Image.setAttribute("src", "./images/arti.jpg");
        user1Image.setAttribute("alt", "arti");
        content.appendChild(user1Image);  

                //Include the resume 
                let user1Resume = document.createElement("a");
                user1Resume.setAttribute("id", "user1Resume");
                user1Resume.innerHTML = `<a  href='Arti_Resume.pdf'>Arti_Resume</a>`;
                content.appendChild(user1Resume);  

        //details of user
        let user1Detail = document.createElement("p");
        user1Detail.setAttribute("id", "user1Info");
        user1Detail.textContent = "I'm Arti Chovatiya, studying at durham college in computer programming and I plan to work as a computer programmer and developer with an analytical approach to software development in the future.";
        content.appendChild(user1Detail);   
        
      
        
        //Include the image
        let user2Image = document.createElement("img");
        user2Image.setAttribute("id", "user2Img");
        user2Image.setAttribute("src", "./images/kripal.jpeg");
        user2Image.setAttribute("alt", "kripal");
        content.appendChild(user2Image);  

                //Include the resume 
                let user2Resume = document.createElement("a");
                user2Resume.setAttribute("id", "user2Resume");    
                user2Resume.innerHTML = `<a  href='Resume - Kripal Bhatia.pdf'>Kripal Bhatia Resume</a>`;
                content.appendChild(user2Resume);  

        //details of user
        let user2Detail = document.createElement("p");
        user2Detail.setAttribute("id", "user1Info");
        user2Detail.textContent = "I am Kripal Bhatia and i am pursuing Computer programming in Durham college. I am skilled in project planning, implementing and troublehsooitng in mobile applications.";
        content.appendChild(user2Detail);            

   


    }    

    function servicesPage(){
        
        //heading element
        let title = document.createElement("h2");
        title.setAttribute("id", "intro_heading");
        title.textContent = "Services";

        let content = document.getElementsByTagName("section")[0];
        content.appendChild(title);
        
        //include the skill image
        let skill1Image = document.createElement("img");
        skill1Image.setAttribute("id", "skill1Img");
        skill1Image.setAttribute("src", "./images/computerSystemHardware.jpeg");
        skill1Image.setAttribute("alt", "computer System Hardware");
        content.appendChild(skill1Image);  

        //details of skill
        let skill1Detail = document.createElement("p");
        skill1Detail.setAttribute("id", "skill1Info");
        skill1Detail.textContent = "We have a lot of experience putting computers together and building codes. To satisfy your demands, we'll use the greatest hardware component available. We also have the greatest crew to give you with system sectiontenance.";
        content.appendChild(skill1Detail); 
        
        //include the skill image
        let skill2Image = document.createElement("img");
        skill2Image.setAttribute("id", "skill2Img");
        skill2Image.setAttribute("src", "./images/developer.jpeg");
        skill2Image.setAttribute("alt", "developer");
        content.appendChild(skill2Image);  

        //details of skill
        let skill2Detail = document.createElement("p");
        skill2Detail.setAttribute("id", "skill2Info");
        skill2Detail.textContent = "For sectionframe computing, we build a variety of technological projects.";
        content.appendChild(skill2Detail); 
        
        //include the skill image
        let skill3Image = document.createElement("img");
        skill3Image.setAttribute("id", "skill3Img");
        skill3Image.setAttribute("src", "./images/webDevlopers.jpeg");
        skill3Image.setAttribute("alt", "web Devlopers");
        content.appendChild(skill3Image);  

        //details of skill
        let skill3Detail = document.createElement("p");
        skill3Detail.setAttribute("id", "skill3Info");
        skill3Detail.textContent = "We can assist you in establishing communication for your business. We excel at designing and developing web sites that meet your requirements.";
        content.appendChild(skill3Detail);         
        
    }

    function humanResourcesPage(){
 
        //heading element
        let title = document.createElement("h2");
        title.setAttribute("id", "intro_heading");
        title.textContent = "Human Resources";

        let content = document.getElementsByTagName("section")[0];
        content.appendChild(title);        
    } 

    function ContactPage(){

        //message
        let message = document.getElementById("message");
        message.hidden = true;

        let fullName = document.getElementById("fullName");

        fullName.addEventListener("blur", function() {

            if(fullName.value.length == " "){
                fullName.focus();
                fullName.select();
                message.hidden = false;
                message.textContent = "Please enter the name";
            }
            else{
                message.hidden = true;
            }
        });

        let submitButton = document.getElementById("sendButton");

        submitButton.addEventListener("click", function(event){

                        // redirect to home page
                        window.location = "./index.html"; 

            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value, ShortMessage.value);

            if(contact.serialize())
            {
              localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
            }


        })
        
    }
    

    function changingNavbar(){

        let navbar = document.getElementById("projectsNavbar");
        //navbar.innerHTML = '<a href='project.html'>Projects</a>';
       navbar.innerHTML = `<a  href='projects.html'>Projects</a>`;
    }

    function addNavbar(){

        let newNavbar = document.createElement("li");
        newNavbar.setAttribute("id", "HumanResource");       
        newNavbar.innerHTML = `<a  href='humanResources.html'>Human-Resources</a>`;
        let aboutUsElement = document.getElementById("AboutusNavbar");
        aboutUsElement.after(newNavbar);
    }

    function DisplayLoginPage(){
        document.title = "WEBD6201 - Login";

        $("#loginForm").submit((e)=>
        {
            //Prevents default behaviour when the form is submitted
           e.preventDefault();
            
           let userName = $('#userName').val();  
           let password = $('#password').val();  
           if(userName  && password)
           {
                //heading element
                $('#username_label').text(userName)
                $('#username_label').show();
                
           }else{
               alert("Please enter the details!!");
           }

     
        });
   }
    
    // Function for clearing the form
    function clearForm()
       {
           //document.getElementById("contactForm").reset();
           $("#registerForm")[0].reset();
           $("#errorMessage").hide();
    }
   
 function DisplayRegisterContent()
   {
       document.title = "WEBD6201 - Register";

    
       //create a new div element to be used for error messages
       let div = document.createElement("div");
       //Assign the new div element and id of errorMessage
       div.setAttribute("id", "errorMessage");
       //assign the new div element a class of alert alert-danger
       div.setAttribute("class", "alert alert-danger");
       //Assign the registration page form to a variable calle registerForm
       let registerForm = document.getElementById("content");
       //Get each of the div tags with a class name of form-group in an array
       let formDivs = document.getElementsByClassName("form-group");
       //Inserts the new div element before the first div element in the form
       registerForm.insertBefore(div, formDivs[0]);

       $("#errorMessage").hide();

       //$("#submitButton").on("click", (event)=>
       $("#registerForm").submit((e)=>
       {          
           //Prevents default behaviour when the form is submitted
           e.preventDefault();       
            
           TestFirstName();
           TestLastName();
           TestEmailAddress();
           VerifyPassword();
           ConfirmPassword();

           if($("#errorMessage").val() == "")
           {            
               let FirstName = $("#fName").val();
               let lastName = $("#lastName").val();
               let emailAddress = $("#emailAddress").val();
               let password = $("#password").val();
               let confirmPassword = $("#confirmPassword").val();

               userObject.FirstName = FirstName;
               userObject.lastName = lastName;
               userObject.emailAddress = emailAddress;
               userObject.password = password;
               userObject.confirmPassword = confirmPassword;

               console.log(userObject);
               
           }else{
            document.getElementById("errorMessage").innerHTML = "Please enter the details";
           }
         
       });
   }

   function TestFirstName()
   {

     let firstName = $("#fName").val();
       //check empty firstName field  
       if(firstName == "") {  
          document.getElementById("errorMessage").innerHTML += "Enter the first name!";  
          $("#errorMessage").show();          
          return false;  
       }
       else if(firstName.length < 2){
           document.getElementById("errorMessage").innerHTML += "Enter the valid first name upto  2 characters!";
           $("#errorMessage").show();  
          return false;  
       }  
       
     
   }

    function TestLastName()
    {
    let lastName = $("#lastName").val();
        //check empty password field  
        if(lastName == "") {  
            document.getElementById("errorMessage").innerHTML += "Enter the last name!";
            $("#errorMessage").show();  
            return false;  
        }
        else if(lastName.length < 2){
            document.getElementById("errorMessage").innerHTML += "Enter the valid last name upto  2 characters!";
            $("#errorMessage").show();  
            return false;  
        } 
    }

    function TestEmailAddress()
    {        
    let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    // form validation
    let emailAddress = $("#emailAddress").val();

    //if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))
    if(emailAddress == ""){
        document.getElementById("errorMessage").innerHTML += "Please enter the email address.!";
        $("#errorMessage").show(); 
        return false; 
    }
    if(!emailAddressPattern.test(emailAddress))
        {
            //JQuery example of the lines below        
            document.getElementById("errorMessage").innerHTML += "Please enter a valid email address.!";
            $("#errorMessage").show(); 
            return false; 
        }

    }

    function VerifyPassword() {  

    var pw = document.getElementById("password").value;  

    //check empty password field  
    if(pw == "") {  
        document.getElementById("errorMessage").innerHTML += "**Enter the password please!";
        $("#errorMessage").show();  
        return false;  
    }  
        
    //minimum password length validation  
    if(pw.length < 6) {  
        document.getElementById("errorMessage").innerHTML += "**Password length must be atleast 6 characters";
        $("#errorMessage").show();  
        return false;  
    }  
    
    //maximum length of password validation  
    if(pw.length > 15) {  
        document.getElementById("errorMessage").innerHTML += "**Password length must not exceed 15 characters";
        $("#errorMessage").show();  
        return false;  
    } 
    }  

    function ConfirmPassword() {  

    let confirmPw = document.getElementById("confirmPassword").value; 
    let password = document.getElementById("password").value;  

    //check empty password field  
    if(confirmPw == "") {  
        document.getElementById("errorMessage").innerHTML += "**Enter the confirm password please!";
        $("#errorMessage").show();  
        return false;  
    }  
        
    //minimum password length validation  
    else if(confirmPw.length < 6) {  
        document.getElementById("errorMessage").innerHTML += "Password length must be atleast 6 characters"; 
        $("#errorMessage").show(); 
        return false;  
    }  
    
    //maximum length of password validation  
    else if(confirmPw.length > 15) {  
        document.getElementById("errorMessage").innerHTML += "Password length must not exceed 15 characters";
        $("#errorMessage").show();  
        return false;  
    } 
    
    //check empty password field  
    else if(confirmPw != password) {  
        document.getElementById("errorMessage").innerHTML += "Password and Confirm password must be same!"; 
        $("#errorMessage").show(); 
        return false;  
    } 
    
        
    
    }  

    function Start()
    {
        console.log("App Started...");
        changingNavbar();
        addNavbar();

        if(document.title != "null"){

            if(document.title == "Home"){
                homePage();
            }
            else if(document.title == "About Us"){
                aboutPage();
            }
            else if(document.title == "Services"){
                servicesPage();
            }
            else if(document.title == "Contact Us"){
                ContactPage();
            }
            else if(document.title == "Human Resources"){
                humanResourcesPage();
            }
            else if(document.title == "Projects"){

                projectPage();
            }   
            else if(document.title == "Login"){
                DisplayLoginPage();
            } 
            else if(document.title == "Register"){
                clearForm();
                DisplayRegisterContent();
            }                    

        }
    
    }

    window.addEventListener("load", Start);


})();