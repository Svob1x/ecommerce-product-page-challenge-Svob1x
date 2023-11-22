function myFunction(smallImg)
{
    let fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;
}

    document.addEventListener("DOMContentLoaded", function() {
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const num = document.querySelector(".num");

    let a = 0;

    plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "" + a : a;
    num.innerText = a;
    console.log(a);
});

    minus.addEventListener("click", () => {
    if (a > 1) {
    a--;
    a = (a < 10) ? "" + a : a;
    num.innerText = a;
    console.log(a);
}
});
});

document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.querySelector("#imageBox");
    let popup = document.getElementById("popup");
    let closeBtn = document.querySelector(".close");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

function myFunction1(smallImg)
{
    let fullImg = document.getElementById("imageBox1");
    fullImg.src = smallImg.src;
}