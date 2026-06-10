/* Business Card Animation */

const card =
    document.querySelector(".business-card");

/* Click Effect */

card.addEventListener("click", () => {

    card.style.transform =
        "scale(0.96)";

    setTimeout(() => {

        card.style.transform =
            "";

    }, 180);

});