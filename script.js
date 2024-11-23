var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var profilePicInput = document.getElementById('profilePic');

    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();

        // Read the uploaded image file
        reader.onload = function (e) {
            var profilePicURL = e.target.result;

            // Generate the resume with profile picture
            var resumeHTML = `
                <h2><b>Resume</b></h2>
                <h3>Personal Information</h3>
                <img src="${profilePicURL}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;"><br>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>

                <h3>Education</h3>
                <p>${education}</p>

                <h3>Experience</h3>
                <p>${experience}</p>

                <h3>Skills</h3>
                <p>${skills}</p>
            `;

            resumeDisplayElement.innerHTML = resumeHTML;
        };

        // Read the image as a data URL
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        alert("Please upload a profile picture.");
    }
});
