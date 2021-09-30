window.onload = () => {
    window.alert("page is loaded");

document.getElementById('form').addEventListener('submit', event => {
    console.log("submited!");
    event.preventDefault();
    let order = {};

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let theOrder = document.getElementById("order").value;

    const bigString = `<br><p>The order for the customer ${name}  is the following: ${theOrder}. The customer may be notified by email: ${email}<p>`;

    document.getElementById("placeholder").innerHTML = bigString;

    order = {
        name: `${name}`,
        email: `${email}`,
        order: `${theOrder}`
    }

});

printOrder = (orderDetails) => {

    }
}