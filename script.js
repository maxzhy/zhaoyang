window.onload = function() {
    var skills = ["HTML", "CSS", "JavaScript"];
    var skillsList = document.getElementById("skills");
    for (var i = 0; i < skills.length; i++) {
        var skill = document.createElement("li");
        skill.textContent = skills[i];
        skillsList.appendChild(skill);
    }

    var changeThemeButton = document.getElementById("change-theme");
    changeThemeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
    });
}
