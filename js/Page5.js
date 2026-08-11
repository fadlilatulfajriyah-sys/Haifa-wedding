document.addEventListener("click", function (event) {

    if (!event.target.closest("#locationRsvpButton")) {
        return;
    }

    document.body.insertAdjacentHTML("beforeend", `

        <section class="wedding-page page-five">

            <div class="location-section">

                <!-- =========================
                     QURAN
                ========================== -->

                <div class="quran-section">

                    <p class="quran-arabic">
                        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم
                        مِّنْ أَنفُسِكُمْ أَزْوَاجًا
                        لِّتَسْكُنُوا إِلَيْهَا
                        وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
                    </p>

                    <p class="quran-translation">
                        “Dan di antara tanda-tanda kekuasaan-Nya ialah
                        Dia menciptakan untukmu pasangan-pasangan dari
                        jenismu sendiri, agar kamu merasa tenteram kepadanya,
                        dan Dia menjadikan di antaramu rasa kasih dan sayang.”
                    </p>

                    <span class="quran-reference">
                        — QS. Ar-Rum: 21
                    </span>

                </div>


                <!-- =========================
                     LOCATION
                ========================== -->

                <p class="story-label">
                    THE LOCATION
                </p>

                <h2>
                    Find Us
                </h2>


                <!-- VENUE -->

                <div class="venue-card">

                    <span class="event-label">
                        WEDDING VENUE
                    </span>

                    <h3>
                        Kediaman Mempelai Wanita
                    </h3>

                    <p>
                        Desa Talang Sari 1
                    </p>

                </div>


                <!-- GOOGLE MAP -->

                <div class="map-card">

                    <a
                        href="https://maps.app.goo.gl/J6LCA7K36jBU9vjV8"
                        target="_blank"
                        class="map-button">

                        OPEN IN GOOGLE MAPS
                    </a>
                </div>
                <!-- =========================
                     RSVP
                ========================== -->

                <div class="rsvp-section">

                    <p class="story-label">
                        RSVP
                    </p>

                    <h2>
                        Will You Join Us?
                    </h2>

                    <p class="rsvp-text">
                        Kehadiran Anda merupakan kebahagiaan
                        bagi kami.
                    </p>

                    <p class="rsvp-text english">
                        Your presence would mean so much to us.
                    </p>

                    <a
                        href="#"
                        class="rsvp-button">

                        CONFIRM ATTENDANCE

                    </a>

                </div>


                <!-- =========================
                     WEDDING GIFT
                ========================== -->

                <div class="gift-section">

                    <p class="story-label">
                        WEDDING GIFT
                    </p>

                    <h2>
                        A Gift From The Heart
                    </h2>

                    <p class="gift-text">
                        Kehadiran dan doa Anda adalah hadiah
                        terindah bagi kami.
                        Bagi yang ingin memberikan tanda kasih,
                        dapat melalui rekening berikut.
                    </p>


                    <div class="account-card">

                        <p class="bank-name">
                            BCA
                        </p>

                        <p class="account-number">
                            8905507067
                        </p>

                        <p class="account-holder">
                            a.n. Fadlilatul Fajriyah
                        </p>

            <!-- BUTTON TO PAGE 6 -->

<div class="page-five-next">

    <button id="wishesButton" class="next-page">
        Wedding Wishes
    </button>

</div>
        </section>

    `);


    document.querySelector(".page-five")
        .scrollIntoView({
            behavior: "smooth"
        });

});

