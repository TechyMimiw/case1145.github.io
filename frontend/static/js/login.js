



const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", event => {

    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);

    fetch("/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(responseData => {
            if (responseData.redirect)
                window.location.href = responseData.redirect
        })
        .catch(errorResponse => {
            console.error("response err", errorResponse);
            console.log(errorResponse.status, errorResponse.statusText);
            errorResponse.json().then((errorJson) => {
                const toastBox = new bootstrap.Toast(".toast");
                document.querySelector(".toast-body").innerText = errorJson.errorMsg;
                toastBox.show();
            });
        });

    event.preventDefault();
});