// Populate navigation links
function populateNavLinks() {
    const navList = document.getElementById('nav-list');
    const sections = ['home', 'skills', 'projects', 'certifications', 'education', 'contact'];
    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.id = `${section}-link`; 
        
        a.href = `#${section}`;
        a.textContent = section.charAt(0).toUpperCase() + section.slice(1);
        li.appendChild(a);
        navList.appendChild(li);
    });
}


        // Populate home section
        function populateHomeSection(data) {
            document.getElementById('welcome-message').textContent = data.name;
            document.getElementById('description').textContent = data.title;
            document.getElementById('youtube-video').src = data.youtubeVideo;
        }

        // Populate skills section
        function populateSkillsSection(data) {
            const hardSkillsList = document.getElementById('hard-skills-list');
            data.skills.hardSkills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                hardSkillsList.appendChild(li);
            });

            const softSkillsList = document.getElementById('soft-skills-list');
            data.skills.softSkills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                softSkillsList.appendChild(li);
            });
        }

        // Populate projects section
        function populateProjectsSection(data) {
            const projectsList = document.getElementById('projects-list');
            data.projects.forEach(project => {
                const li = document.createElement('li');
                li.textContent = `${project.name} (${project.date})`;
                projectsList.appendChild(li);
            });
        }

        // Populate certifications section
        function populateCertificationsSection(data) {
            const certificationsList = document.getElementById('certifications-list');
            data.certifications.forEach(cert => {
                const li = document.createElement('li');
                li.textContent = cert;
                certificationsList.appendChild(li);
            });
        }

        // Populate education section
        function populateEducationSection(data) {
            const educationList = document.getElementById('education-list');
            data.education.forEach(edu => {
                const li = document.createElement('li');
                li.textContent = `${edu.degree}, ${edu.institution} (${edu.date})`;
                educationList.appendChild(li);
            });
        }

        // Populate contact section
        function populateContactSection(data) {
            document.getElementById('email').textContent = data.contact.email;
            document.getElementById('email').href = `mailto:${data.contact.email}`;
            document.getElementById('phone').textContent = data.contact.phone;
            document.getElementById('linkedin').href = data.contact.socials.linkedin;
            document.getElementById('github').href = data.contact.socials.github;
        }

        // Initial population of all sections
        function populateAllSections() {
            populateNavLinks();
            populateHomeSection(profileData);
            populateSkillsSection(profileData);
            populateProjectsSection(profileData);
            populateCertificationsSection(profileData);
            populateEducationSection(profileData);
            populateContactSection(profileData);
        }

        // Call function to populate sections
        populateAllSections();