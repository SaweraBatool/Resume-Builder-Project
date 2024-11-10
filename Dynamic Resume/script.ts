document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values of the input fields
    const objectiveElement = document.getElementById('objective') as HTMLTextAreaElement;
    const usernameElement = document.getElementById('username') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const dateOfBirthElement = document.getElementById('date of birth') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const githubElement = document.getElementById('github') as HTMLInputElement;
    const instagramElement = document.getElementById('instagram') as HTMLInputElement;
    const linkedinElement = document.getElementById('linkedin') as HTMLInputElement;
    const workExperienceElement = document.getElementById('work experience') as HTMLTextAreaElement;
    const academicQualificationElement = document.getElementById('academic qualification') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const achievementsElement = document.getElementById('achievements') as HTMLInputElement;
    const languagesElement = document.getElementById('languages') as HTMLInputElement;

    // Validate that all necessary fields are filled
    if (
        objectiveElement && usernameElement && nameElement && emailElement && phoneElement && dateOfBirthElement && 
        addressElement && githubElement && instagramElement && linkedinElement && workExperienceElement && 
        academicQualificationElement && skillsElement && achievementsElement && languagesElement
    ) {
        // Collect the values from the form fields
        const objective = objectiveElement.value;
        const username = usernameElement.value;
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const dateOfBirth = dateOfBirthElement.value;
        const address = addressElement.value;
        const github = githubElement.value;
        const instagram = instagramElement.value;
        const linkedin = linkedinElement.value;
        const workExperience = workExperienceElement.value;
        const academicQualification = academicQualificationElement.value;
        const skills = skillsElement.value;
        const achievements = achievementsElement.value;
        const languages = languagesElement.value;

        // Generate the resume HTML output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Objective:</strong> ${objective}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
            <h3>Social Links</h3>
            <p><strong>GitHub:</strong> ${github}</p>
            <p><strong>Instagram:</strong> ${instagram}</p>
            <p><strong>LinkedIn:</strong> ${linkedin}</p>
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
            <h3>Academic Qualification</h3>
            <p>${academicQualification}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Achievements</h3>
            <p>${achievements}</p>
            <h3>Languages</h3>
            <p>${languages}</p>
        `;

        
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }

        // Generate a unique link for sharing (this can be customized based on your implementation)
        const shareableLink = `https://example.com/view?resume=${encodeURIComponent(username)}`;
        const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
        if (shareableLinkElement) {
            shareableLinkElement.href = shareableLink;
            shareableLinkElement.textContent = shareableLink;
        }
    } else {
        console.error('One or more required fields are missing.');
    }
});


document.getElementById('editResumeButton')?.addEventListener('click', function() {
    const formElements = document.querySelectorAll('#resumeForm input, #resumeForm textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
    formElements.forEach((element) => {
        element.value = '';
    });

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = ''; 
    }

    const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
    if (shareableLinkElement) {
        shareableLinkElement.href = '#'; 
        shareableLinkElement.textContent = ''; 
    }
});
