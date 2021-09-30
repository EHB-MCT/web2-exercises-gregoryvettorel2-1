window.onload = () => {
    window.alert("page is loaded");
}

logSubmit = () => {
    console.log("submited!");
    event.preventDefault();
    let order = {};

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let theOrder = document.getElementById("order").value;

/** FROM EXCERCISE 3
    const bigString = `<br><p>The order for the customer ${name}  is the following: ${order}. The customer may be notified by email: ${email}<p>`;

    document.getElementById("placeholder").innerHTML = bigString;
*/
    order = {
        name: `${name}`,
        email: `${email}`,
        order: `${theOrder}`
    }

}

printOrder = (orderDetails) => {

}