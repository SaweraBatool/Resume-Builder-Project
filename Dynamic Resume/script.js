var _a, _b;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get the values of the input fields
    var objectiveElement = document.getElementById('objective');
    var usernameElement = document.getElementById('username');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var dateOfBirthElement = document.getElementById('date of birth');
    var addressElement = document.getElementById('address');
    var githubElement = document.getElementById('github');
    var instagramElement = document.getElementById('instagram');
    var linkedinElement = document.getElementById('linkedin');
    var workExperienceElement = document.getElementById('work experience');
    var academicQualificationElement = document.getElementById('academic qualification');
    var skillsElement = document.getElementById('skills');
    var achievementsElement = document.getElementById('achievements');
    var languagesElement = document.getElementById('languages');
    // Validate that all necessary fields are filled
    if (objectiveElement && usernameElement && nameElement && emailElement && phoneElement && dateOfBirthElement &&
        addressElement && githubElement && instagramElement && linkedinElement && workExperienceElement &&
        academicQualificationElement && skillsElement && achievementsElement && languagesElement) {
        // Collect the values from the form fields
        var objective = objectiveElement.value;
        var username = usernameElement.value;
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var dateOfBirth = dateOfBirthElement.value;
        var address = addressElement.value;
        var github = githubElement.value;
        var instagram = instagramElement.value;
        var linkedin = linkedinElement.value;
        var workExperience = workExperienceElement.value;
        var academicQualification = academicQualificationElement.value;
        var skills = skillsElement.value;
        var achievements = achievementsElement.value;
        var languages = languagesElement.value;
        // Generate the resume HTML output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Objective:</strong> ".concat(objective, "</p>\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <p><strong>Date of Birth:</strong> ").concat(dateOfBirth, "</p>\n            <h3>Social Links</h3>\n            <p><strong>GitHub:</strong> ").concat(github, "</p>\n            <p><strong>Instagram:</strong> ").concat(instagram, "</p>\n            <p><strong>LinkedIn:</strong> ").concat(linkedin, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(workExperience, "</p>\n            <h3>Academic Qualification</h3>\n            <p>").concat(academicQualification, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Achievements</h3>\n            <p>").concat(achievements, "</p>\n            <h3>Languages</h3>\n            <p>").concat(languages, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        // Generate a unique link for sharing (this can be customized based on your implementation)
        var shareableLink = "https://example.com/view?resume=".concat(encodeURIComponent(username));
        var shareableLinkElement = document.getElementById('shareable-link');
        if (shareableLinkElement) {
            shareableLinkElement.href = shareableLink;
            shareableLinkElement.textContent = shareableLink;
        }
    }
    else {
        console.error('One or more required fields are missing.');
    }
});
(_b = document.getElementById('editResumeButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var formElements = document.querySelectorAll('#resumeForm input, #resumeForm textarea');
    formElements.forEach(function (element) {
        element.value = '';
    });
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = '';
    }
    var shareableLinkElement = document.getElementById('shareable-link');
    if (shareableLinkElement) {
        shareableLinkElement.href = '#';
        shareableLinkElement.textContent = '';
    }
});
