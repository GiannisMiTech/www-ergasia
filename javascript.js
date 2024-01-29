let check =0;
let projects = [];
function showSection(sectionId) {
  
  let sections = document.querySelectorAll("aside > ul > div");
 
  for (let i = 0; i < sections.length; i++) {
    
    if (sections[i].id == sectionId) {
      sections[i].classList.remove("hidden");
      let sections1 =document.querySelectorAll("main>p");
      showSection1(sections1);
      showSection2(sections1);
      showSection3(sections1);
      showSection4(sections1);
    } else { 
      sections[i].classList.add("hidden");
    }
  }
}
function showSection1(sectionId1) {
  
  let sections = document.querySelectorAll("main >p");
  
  for (let i = 0; i < sections.length; i++) {
   
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
    } else { 
      sections[i].classList.add("hidden");
    }
  }
}
function showSection2(sectionId1) {
  
  let sections = document.querySelectorAll("footer >p");
 
  for (let i = 0; i < sections.length; i++) {
    
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
      if(sectionId1=="link"){
        var footer = document.getElementById("link");
        footer.scrollIntoView();
      }
      else if(sectionId1=="link1"){
        var footer = document.getElementById("link1");
        footer.scrollIntoView();
      }
    
    } else { 
      sections[i].classList.add("hidden");
    }
  }
}
function showSection3(sectionId1) {
  
  let sections = document.querySelectorAll("main > div");
  
  for (let i = 0; i < sections.length; i++) {
    
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
    } else { // Otherwise, hide it
      sections[i].classList.add("hidden");
    }
  }
}
function showSection4(sectionId1) {
  
  let sections = document.querySelectorAll("main > div >div");
  
  for (let i = 0; i < sections.length; i++) {
   
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
    } else { // Otherwise, hide it
      sections[i].classList.add("hidden");
    }
  }
}
        

    function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var validUsername = "giannis";
            var validPassword = "1234";
            if (username === validUsername && password === validPassword) {
              alert("Login successful!");
              document.getElementById("aposindesh").style.display = "block";
            
              check = 1;
          } else {
              alert("Invalid username or password. Please try again.");
            
          }
      
      document.getElementById("syndesh").style.display = "block"
      document.getElementById("syndesh").style.display = "none";
      document.getElementById("admin-form").style.display = "block";
   
  }
    function logout() {
      
      //document.getElementById("syndesh").style.display = "block";
      document.getElementById("aposindesh").style.display = "block";
      document.getElementById("aposindesh").style.display = "none";
      //document.getElementById("admin-form").style.display = "none";
      if(check == 1){
      alert("Logout successfully!"); 
      document.getElementById("aposindesh").style.display = "block";
      document.getElementById("aposindesh").style.display = "none";
      check=0;
      }
      else {
        alert("you have to login first");
        document.getElementById("aposindesh").style.display = "block";
        document.getElementById("aposindesh").style.display = "none";
      }
   
    }
    function addProject() {
      if (check === 1) {
        var projectName = prompt("Enter the name of the new project:");
       
    
        if (projectName) {
          var newProject = {
            name: projectName,
            
          };
    
          projects.push(newProject);
    
          alert("Project added successfully!");
        } else {
          alert("Project name or description is empty. Please try again.");
        }
      } else {
        alert("You need to login first to add a project.");
      }
    }
    
    function editProject() {
      
    }
    function deleteProject() {
      if (check === 1) {
        var projectNameToDelete = prompt("Enter the name of the project to delete:");
    
        if (projectNameToDelete) {
          var projectIndex = projects.findIndex(project => project.name === projectNameToDelete);
    
          if (projectIndex !== -1) {
            projects.splice(projectIndex, 1);
            alert("Project deleted successfully!");
          } else {
            alert("Project with the provided name not found.");
          }
        } else {
          alert("No name provided. Please try again.");
        }
      } else {
        alert("You need to login first to delete a project.");
      }
    }
    function addLink() {
      if (check === 1) {
        // If the user is logged in
        var linkUrl = prompt("Enter the URL for the new link:");
        
        if (linkUrl) {
          // Check if the user entered a link
          var newLink = document.createElement("a");
          newLink.href = linkUrl;
          newLink.textContent = "New Link"; // You can customize the link text
          
          // Assuming you want to add the link to the footer
          var footer = document.querySelector("footer");
          footer.appendChild(newLink);
          
          alert("Link added successfully!");
        } else {
          alert("No link provided. Please try again.");
        }
      } else {
        alert("You need to login first to add a link.");
      }
    }
    function editLink() {
     
    }
    function deleteLink() {
      if (check === 1) {
        var linkIdToDelete = prompt("Enter the ID of the link to delete:");
        
        if (linkIdToDelete) {
          var linkToDelete = document.getElementById(linkIdToDelete);
          
          if (linkToDelete) {
            linkToDelete.parentNode.removeChild(linkToDelete);
            alert("Link deleted successfully!");
          } else {
            alert("Link with the provided ID not found.");
          }
        } else {
          alert("No ID provided. Please try again.");
        }
      } else {
        alert("You need to login first to delete a link.");
      }
    }
    
    

