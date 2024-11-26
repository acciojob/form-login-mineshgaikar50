function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");

    // Get the values of the first name and last name using their 'name' attribute
    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;

    // Display the first and last name using an alert
    alert( firstName + " " + lastName);

}
