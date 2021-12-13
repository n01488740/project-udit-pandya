let x = 1;
function showEditButton() {
    document.getElementById('del_icon').style.visibility = "hidden";
}

function deleteSkill(id) {
    //console.log(document.getElementById(id).parentElement.id);
    document.getElementById(id).parentNode.style.visibility = "hidden";
    document.getElementById(id).style.visibility = "hidden";
}

function triggerForm() {

    if(document.getElementById('add-skill').value == "Add") {
        document.getElementById('add-skill').value = "Cancel";
        document.getElementById('form-card').style.visibility = "visible";
        document.getElementById('form-card').style.height = "auto";
        console.log('if');
    }
    else {
        document.getElementById('add-skill').value = "Add";    
        document.getElementById('form-card').style.visibility = "hidden";
        document.getElementById('form-card').style.height = "0px";
        console.log('else');
    }
}

function addSkill() {
    
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
    triggerForm();
    clearError();
}

function clearError() {
    document.getElementById('title_err').innerHTML = '';
    document.getElementById('subject_err').innerHTML = '';
}

triggerForm();