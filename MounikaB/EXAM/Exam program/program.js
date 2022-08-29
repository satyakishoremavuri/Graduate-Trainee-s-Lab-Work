function submitData() {
    var userName = document.getElementById('userName').value,
        password = document.getElementById('password').value,
        mobileNumber = document.getElementById('mobileNumber').value,
        dob = document.getElementById('dob').value,
        address = document.getElementById('address').value;

    var obj = {
        userName: userName,
        password: password,
        mobileNumber: mobileNumber,
        dob: dob,
        address: address
    }

    console.log(obj)
}