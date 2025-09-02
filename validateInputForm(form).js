function validateInputForm(form) {
    // Check date format mm/dd/yyyy
    var datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!datePattern.test(form.ReqDate.value.trim())) {
        alert("Enter date as mm/dd/yyyy");
        return false;
    }

    // Check Employee ID: 1 capital letter + 5 numbers
    var empIdPattern = /^[A-Z][0-9]{5}$/;
    if (!empIdPattern.test(form.EmpID.value.trim())) {
        alert("EmpID must start with a capital letter and have 5 numbers");
        return false;
    }

    // Check first name starts with capital letter
    if (!/^[A-Z]/.test(form.FName.value.trim())) {
        alert("First name must start with a capital letter");
        return false;
    }

    // Check last name starts with capital letter
    if (!/^[A-Z]/.test(form.LName.value.trim())) {
        alert("Last name must start with a capital letter");
        return false;
    }

    // Check problem description is filled
    if (form.ProbDesc.value.trim() === "") {
        alert("Problem description is required");
        return false;
    }

    // all checks passed
    return true;
}