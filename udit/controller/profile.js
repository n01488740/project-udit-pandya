function validateForm() {

    let fname = document.getElementById('fname').value;

    if(fname === '') {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('fname_err').innerHTML = 'First name cannot be empty';
        document.getElementById('fname').focus();
        return;
    }
    else if(fname.length < 3 || fname.length > 20) {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('fname_err').innerHTML = 'First name should be 2-20 characters long';
        document.getElementById('fname').focus();
        return;
    }

    let lname = document.getElementById('lname').value;
     
    if(lname === '') {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('lname_err').innerHTML = 'Last name cannot be empty';
        document.getElementById('lname').focus();
        return;
    }
    else if(lname.length < 3 || lname.length > 20) {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('lname_err').innerHTML = 'Last name should be 2-20 characters long';
        document.getElementById('lname').focus();
        return;
    }

    let email = document.getElementById('email').value;

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('email_err').innerHTML = 'Please enter a valid Email Address';
        document.getElementById('email').focus();
        return;
    }

    let subject = document.getElementById('subject').value;

    if(subject.length < 20 || subject.length > 150) {
        document.getElementById('submit_success').innerHTML = '';
        document.getElementById('subject_err').innerHTML = 'Subject should be 20-150 characters long';
        document.getElementById('subject').focus();
        return;
    }
    
    document.getElementById('submit_success').innerHTML = 'Form submitted Successfully';
    clearForm();
    clearError();
}

function clearError() {
    // Clear Fname
    document.getElementById('fname_err').innerHTML = '';
    // Clear Lname
    document.getElementById('lname_err').innerHTML = '';
    // Clear Email
    document.getElementById('email_err').innerHTML = '';
    // Clear Subject
    document.getElementById('subject_err').innerHTML = '';
}

function clearForm() {
    // Clear Fname
    document.getElementById('fname').value = '';
    // Clear Lname
    document.getElementById('lname').value = '';
    // Clear Email
    document.getElementById('email').value = '';
    // Clear Subject
    document.getElementById('subject').value = '';
}