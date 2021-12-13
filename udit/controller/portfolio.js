let x = 1;
function showEditButton() {
    document.getElementById('del_icon').style.visibility = "hidden";
}

function deleteSkill(id) {
    //console.log(document.getElementById(id).parentElement.id);
    //console.log(id)
    document.getElementById(id).parentNode.style.visibility = "hidden";
    document.getElementById(id).style.visibility = "hidden";
}


// Trigger Forms while loading the web page
function triggerCertificateForm() {

    if(document.getElementById('add-certificate').value == "Add") {
        document.getElementById('add-certificate').value = "Cancel";
        document.getElementById('form-card-certi').style.visibility = "visible";
        document.getElementById('form-card-certi').style.height = "auto";
    }
    else {
        document.getElementById('add-certificate').value = "Add";    
        document.getElementById('form-card-certi').style.visibility = "hidden";
        document.getElementById('form-card-certi').style.height = "0px";
    }
}

function triggerExpForm() {

    if(document.getElementById('add-exp').value == "Add") {
        document.getElementById('add-exp').value = "Cancel";
        document.getElementById('form-card-exp').style.visibility = "visible";
        document.getElementById('form-card-exp').style.height = "auto";
    }
    else {
        document.getElementById('add-exp').value = "Add";    
        document.getElementById('form-card-exp').style.visibility = "hidden";
        document.getElementById('form-card-exp').style.height = "0px";
    }
}

function triggerProjectForm() {

    if(document.getElementById('add-project').value == "Add") {
        document.getElementById('add-project').value = "Cancel";
        document.getElementById('form-card-pro').style.visibility = "visible";
        document.getElementById('form-card-pro').style.height = "auto";
    }
    else {
        document.getElementById('add-project').value = "Add";    
        document.getElementById('form-card-pro').style.visibility = "hidden";
        document.getElementById('form-card-pro').style.height = "0px";
    }
}


// Adding Dynamic UI
function addCertification() {
    
    let title = document.getElementById('title').value;

    if(title === '') {
        document.getElementById('title_err').innerHTML = "Title cannot be empty.";
        return;
    }

    let subject = document.getElementById('subject').value; 
    let points = document.getElementById('subject').value.split('.');
    if(subject === '') {
        document.getElementById('subject_err').innerHTML = "Subject cannot be empty.";
        return;
    }
    let category = document.getElementById('category').value;
    // <img src="../images/delete.png" alt="edit" class="delete-icon" id="del_an" onclick="deleteSkill(id)"></img>
    let div = '';
    div+="<img src=\"../images/delete.png\" alt=\"edit\" class=\"delete-icon\""
    div+="id=\"del_\""
    div+="del_" + title + "\" onclick=\"deleteSkill(id)\"></img>";
    div+="<h2 id=\"";
    div+="new-title" + x + "\">";
    div+="</h2>"
    div+="<ul id=\"";
    div+="listItem" + x + "\">";    
    div+="</ul>"

    let cartDiv = document.createElement('div');
    cartDiv.id = "new-div" + x;
    cartDiv.className = "card-base";
    document.getElementById(category).appendChild(cartDiv);
    
    cartDiv.innerHTML = div;

    let list='';
    points.forEach((item ,index) => {
        if(item !== '')
            list +=  "<li>" + item + "</li>";
    })

    document.getElementById('new-title' + x).classList.add('title');
    document.getElementById('new-title' + x).innerHTML = title;
    document.getElementById('listItem' + x).classList.add('text-align');
    document.getElementById('listItem' + x).innerHTML = list;
    x++;
    document.getElementById('title').value = '';
    document.getElementById('subject').value = '';
    triggerCertificateForm();
    clearError();
}


function addExperience() {

    let designation = document.getElementById('designation').value;

    if(designation.length < 2 || designation.length > 15) {
        document.getElementById('designation_err').innerHTML = "Designation has to be 2-15 characters long.";
        return;
    }

    let sDuration = document.getElementById('start-duration').value;
    let eDuration = document.getElementById('end-duration').value;

    if(sDuration.length != 4 || !/^[0-9]+$/.test(sDuration)) {
        document.getElementById('duration_err').innerHTML = "Start Duration incorrect. Format should be YYYY";
        return;
    }
    else if (eDuration.length != 4 || !/^[0-9]+$/.test(sDuration)){
        document.getElementById('duration_err').innerHTML = "End Duration incorrect. Format should be YYYY";
        return;
    }

    let subject = document.getElementById('subject-exp').value; 
    let points = document.getElementById('subject-exp').value.split('.');
    if(subject === '') {
        document.getElementById('subject_exp_err').innerHTML = "Subject cannot be empty.";
        return;
    }
    let category = document.getElementById('category-exp').value;
    // <img src="../images/delete.png" alt="edit" class="delete-icon" id="del_an" onclick="deleteSkill(id)"></img>
    let div = '';
    div+="<img src=\"../images/delete.png\" alt=\"edit\" class=\"delete-icon\""
    div+="id=\"del_\""
    div+="del_" + designation + "\" onclick=\"deleteSkill(id)\"></img>";
    div+="<h2 id=\"";
    div+="new-designation" + x + "\">Designation : " + designation;
    div+="</h2>"
    div+="<h2 id=\"";
    div+="new-duration" + x + "\">Duration : " + sDuration + " - " + eDuration;
    div+="</h2>"
    div+="<h2 id=\"";
    div+="new-heading" + x + "\">Responsibilities";
    div+="</h2>"
    div+="<ul id=\"";
    div+="listItem" + x + "\">";    
    div+="</ul>"

    let cartDiv = document.createElement('div');
    cartDiv.id = "new-div" + x;
    cartDiv.className = "card-base";
    document.getElementById(category).appendChild(cartDiv);
    
    cartDiv.innerHTML = div;

    let list='';
    points.forEach((item ,index) => {
        if(item !== '')
            list +=  "<li>" + item + "</li>";
    })

    document.getElementById('new-designation' + x).classList.add('heading');
    document.getElementById('new-duration' + x).classList.add('heading');
    document.getElementById('new-heading' + x).classList.add('heading');
    document.getElementById('listItem' + x).classList.add('text-align');
    document.getElementById('listItem' + x).innerHTML = list;
    x++;
    triggerExpForm();
    clearExperienceError();
}

function addProject() {

    let title = document.getElementById('title-project').value;
    let href = document.getElementById('url').value;
    let description = document.getElementById('description').value;

    if( title.length < 3 || title.length > 20) {
        document.getElementById('title_pro_err').innerHTML = "Project Title has to be 3-20 characters long.";
        return;
    }
    else if(description.length < 4 || description.length > 70) {
        document.getElementById('description_err').innerHTML = "Description has to be 4-70 characters long.";
        return;
    }
    else if (!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    .test(href)) {
        document.getElementById('url_err').innerHTML = "Enter a valid url.";
        return;
    }

    let subject = document.getElementById('subject_pro').value; 
    let points = document.getElementById('subject_pro').value.split('.');
    if(subject.length <15 || subject.length > 130) {
        document.getElementById('subject_pro_err').innerHTML = "Subject has to be 15-130 characters long.";
        return;
    }
    let category = document.getElementById('category-pro').value;
    // <h3><a class="heading link" href="https://play.google.com/store/apps/details?id=com.aof.artofiesta" target="_blank">Art 'O' Fiesta</a></h3>
    let div = '';
    div+="<img src=\"../images/delete.png\" alt=\"edit\" class=\"delete-icon\""
    div+="id=\"del_\""
    div+="del_" + description + "\" onclick=\"deleteSkill(id)\"></img>";
    div+="<h3><a class=\"heading link\" href=\"" + href + "\" target=\"_blank\">" + title + "</a></h3>"
    div+="<h3 id=\"";
    div+="new-desc" + x + "\">" + description;
    div+="</h3>"
    div+="<h3 id=\"";
    div+="new-heading" + x + "\">Tech Stack";
    div+="</h3>"
    div+="<ul id=\"";
    div+="listItem" + x + "\">";    
    div+="</ul>"

    let cartDiv = document.createElement('div');
    cartDiv.id = "new-div" + x;
    cartDiv.className = "card-base";
    document.getElementById(category).appendChild(cartDiv);
    
    cartDiv.innerHTML = div;

    let list='';
    points.forEach((item ,index) => {
        if(item !== '')
            list +=  "<li>" + item + "</li>";
    })

    document.getElementById('new-desc' + x).classList.add('heading');
    document.getElementById('new-heading' + x).classList.add('heading');
    document.getElementById('listItem' + x).classList.add('text-align');
    document.getElementById('listItem' + x).innerHTML = list;
    x++;
    triggerProjectForm();
    clearProjectError();
}

function clearCertificationError() {
    document.getElementById('title_err').innerHTML = '';
    document.getElementById('subject_err').innerHTML = '';
}


function clearExperienceError() {
    document.getElementById('designation_err').innerHTML = '';
    document.getElementById('subject_exp_err').innerHTML = '';
    document.getElementById('duration_err').innerHTML = '';
}

function clearProjectError() {
    document.getElementById('title_pro_err').innerHTML = '';
    document.getElementById('description_err').innerHTML = '';
    document.getElementById('subject_pro_err').innerHTML = '';
    document.getElementById('url_err').innerHTML = '';
}

triggerCertificateForm();
triggerExpForm();
triggerProjectForm();