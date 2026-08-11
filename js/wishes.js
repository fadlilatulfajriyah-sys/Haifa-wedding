document.addEventListener("click", function (event) {

    if (!event.target.closest("#wishesButton")) {
        return;
    }

    document.body.insertAdjacentHTML("beforeend", `

        <section class="wedding-page page-six">

            <div class="wishes-section">

                <div class="story-line"></div>

                <p class="story-label">
                    WEDDING WISHES
                </p>

                <h2>
                    Leave Your Love
                </h2>

                <p class="wishes-intro">
                    Tuliskan doa dan ucapan terbaik
                    untuk perjalanan baru kami.
                </p>

                <p class="wishes-intro english">
                    Leave us your warmest wishes
                    as we begin our journey together.
                </p>


                <div class="wish-form">

                    <input
                        type="text"
                        id="guestName"
                        placeholder="Your Name"
                    >

                    <textarea
                        id="guestWish"
                        placeholder="Your wishes & prayers..."
                    ></textarea>

                    <button id="sendWish">
                        SEND WISHES
                    </button>

                </div>


                <div class="wishes-divider">
                    ✦
                </div>


                <div class="wish-list" id="wishList">

                    <div class="wish-card">

                        <p>
                            “May your journey together
                            always be filled with love,
                            patience, and happiness.”
                        </p>

                        <span>
                            — With Love
                        </span>

                    </div>

                    <div class="wish-card">

                        <p>
                            “Semoga menjadi keluarga
                            yang sakinah, mawaddah,
                            warahmah.”
                        </p>

                        <span>
                            — With Love
                        </span>

                    </div>

                </div>


                <div class="wishes-final">

                    <div class="story-final-line"></div>

                    <p>
                        With love,
                    </p>

                    <span>
                        Harun & Fadila
                    </span>

                </div>

            </div>

        </section>

    `);

    document.querySelector(".page-six")
        .scrollIntoView({
            behavior: "smooth"
        });
document.addEventListener("click", function (event) {

    if (!event.target.closest("#sendWish")) {
        return;
    }

    const name =
        document.getElementById("guestName").value.trim();

    const wish =
        document.getElementById("guestWish").value.trim();

    if (!name || !wish) {

        alert("Silakan isi nama dan ucapan terlebih dahulu.");

        return;
    }


    const wishList =
        document.getElementById("wishList");


    const newWish =
        document.createElement("div");

    newWish.className = "wish-card";


    newWish.innerHTML = `

        <p>
            “${wish}”
        </p>

        <span>
            — ${name}
        </span>

    `;


    wishList.prepend(newWish);


    document.getElementById("guestName").value = "";

    document.getElementById("guestWish").value = "";


    newWish.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
});