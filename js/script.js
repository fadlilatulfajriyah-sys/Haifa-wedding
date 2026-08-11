document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       HALAMAN 1 → HALAMAN 2
    ===================================== */

    const button = document.querySelector(".hero button");

    if (!button) {
        console.error("Tombol Buka Undangan tidak ditemukan.");
        return;
    }

    button.addEventListener("click", function () {

        document.body.innerHTML = `

        <!-- =========================
             HALAMAN 2
        ========================== -->

        <section class="wedding-page page-two">

            <div class="wedding-content">

                <p class="wedding-label">
                    THE WEDDING OF
                </p>

                <div class="gold-line"></div>


                <!-- GROOM -->

                <div class="person groom">

                    <div class="person-photo">
                        <img
                            src="images/harun.png"
                            alt="Harun iDER"
                        >
                    </div>

                    <h1>
                        Harun iDER (Harun)
                    </h1>

                    <p class="parents">
                        Son of<br>
                        Seyfettin iDER & Emine iDER
                    </p>
<p class="parent-location">Ankara - Türkiye</p>
                </div>


                <!-- AND -->

                <div class="couple-symbol">
                    &
                </div>


                <!-- BRIDE -->

                <div class="person bride">

                    <div class="person-photo">
                        <img
                            src="images/fadila.png"
                            alt="Fadlilatul Fajriyah"
                        >
                    </div>

                    <h1>
                        Fadlilatul Fajriyah (Fadila)
                    </h1>

                    <p class="parents">
                        Daughter of<br>
                        Umar Buang & Siti Mufarida
                    </p>
<p class="parent-location">Lampung - Indonesia</p>
                </div>


                <div class="ornament">
                    ✦
                </div>


                <p class="wedding-date">
                    04 • 12 • 2026
                </p>


                <p class="location">
                    Indonesia • Türkiye
                </p>


                <p class="wedding-message">
                    Dengan penuh kebahagiaan,<br>
                    kami mengundang Anda untuk hadir<br>
                    di hari istimewa kami.
                </p>


                <p class="wedding-message english">
                    With great joy,<br>
                    we invite you to celebrate<br>
                    our special day with us.
                </p>


                <button class="next-page">
                    Our Story
                </button>

            </div>

        </section>


        <!-- =========================
             HALAMAN 3 — OUR STORY
        ========================== -->

        <section class="wedding-page page-three">

            <div class="story-section">

                <div class="story-line"></div>

                <p class="story-label">
                    OUR STORY
                </p>

                <h2>
                    It All Began<br>
                    By Chance
                </h2>


                <!-- AWAL CERITA -->

                <p class="story-text">
                    Pertemuan kami bermula dari sebuah kejadian
                    yang tidak pernah kami rencanakan.
                    Sebuah pertemuan sederhana yang ternyata
                    menjadi awal dari perjalanan panjang kami.
                </p>


                <p class="story-text english">
                    Our story began with an unexpected meeting.
                    A simple moment that neither of us planned,
                    yet became the beginning of something beautiful.
                </p>


                <!-- THE FIRST HELLO -->

                <div class="story-moment">

                    <span class="story-date">
                        THE FIRST HELLO
                    </span>

                    <p class="story-quote">
                        “Apakah aku bisa menjadi seseorang
                        yang menjagamu selamanya?”
                    </p>

                    <p class="story-note">
                        — Harun, dengan sebuah senyuman.
                    </p>

                    <p class="story-quote english">
                        “May I be the one
                        who takes care of you forever?”
                    </p>

                    <p class="story-note english">
                        — Harun, with a smile.
                    </p>

                </div>


                <!-- A LITTLE DOUBT -->

                <div class="story-chapter">

                    <span class="story-date">
                        A LITTLE DOUBT
                    </span>

                    <p class="story-text">
                        Pada awalnya, Fadila sempat ragu.
                        Ia bertanya-tanya apakah Harun benar-benar tulus,
                        atau mungkin hanya seseorang yang datang dengan
                        niat yang tidak serius.
                    </p>

                    <p class="story-text">
                        Meski begitu, Fadila tetap merespons dengan ramah,
                        walaupun sedikit menjaga jarak.
                    </p>

                    <p class="story-text english">
                        At first, Fadila had her doubts.
                        She wondered if Harun was truly sincere,
                        or simply someone who would eventually disappear.
                    </p>

                    <p class="story-text english">
                        Still, she responded kindly,
                        even while keeping a little distance.
                    </p>

                </div>


                <!-- A CHANCE TO KNOW -->

                <div class="story-moment">

                    <span class="story-date">
                        A CHANCE TO KNOW
                    </span>

                    <p class="story-text">
                        Namun Harun tidak menyerah.
                        Ia terus berusaha meyakinkan Fadila
                        bahwa perasaannya sungguh-sungguh.
                    </p>

                    <p class="story-text">
                        Di balik semua keraguan itu, ada satu hal
                        yang perlahan membuat hati Fadila berubah.
                        Harun selalu menunjukkan sikap yang sopan,
                        bijaksana, dan penuh rasa hormat.
                    </p>

                    <p class="story-text">
                        Hingga akhirnya, Fadila memberikan satu kesempatan:
                        kesempatan untuk saling mengenal,
                        tanpa tahu ke mana perjalanan itu akan membawa mereka.
                    </p>

                    <p class="story-text english">
                        But Harun never gave up.
                        He continued to show Fadila
                        that his feelings were sincere.
                    </p>

                    <p class="story-text english">
                        Yet there was something that slowly
                        changed Fadila's heart.
                        Harun was always respectful,
                        thoughtful, and wise in the way he treated her.
                    </p>

                    <p class="story-text english">
                        And eventually, Fadila gave him a chance
                        to truly get to know each other,
                        without knowing where the journey would lead.
                    </p>

                </div>


                <!-- THE JOURNEY TO LAMPUNG -->

                <div class="story-chapter">

                    <span class="story-date">
                        THE JOURNEY TO LAMPUNG
                    </span>

                    <p class="story-text">
                        Harun terus meyakinkan Fadila tentang keseriusannya.
                        Hingga suatu hari, Fadila memberinya sebuah tantangan.
                    </p>

                    <p class="story-quote">
                        “Kalau kamu benar-benar serius,
                        datanglah dan temui orang tuaku di Lampung.”
                    </p>

                    <p class="story-text">
                        Tanpa ragu, Harun menerima tantangan itu.
                        Ia datang untuk membuktikan bahwa niatnya
                        bukan sekadar kata-kata.
                    </p>

                    <p class="story-text english">
                        Harun continued to show Fadila that he was serious.
                        Until one day, Fadila gave him a challenge.
                    </p>

                    <p class="story-quote english">
                        “If you are truly serious,
                        come and meet my parents in Lampung.”
                    </p>

                    <p class="story-text english">
                        Without hesitation, Harun accepted.
                        He came to prove that his intentions
                        were more than just words.
                    </p>

                </div>


                <!-- A PARENT'S BLESSING -->

                <div class="story-moment">

                    <span class="story-date">
                        A PARENT'S BLESSING
                    </span>

                    <p class="story-text">
                        Melihat keberanian dan kesungguhan Harun,
                        hati Fadila perlahan luluh.
                        Dengan penuh haru, Fadila memberanikan diri
                        memohon restu kepada orang tuanya
                        untuk melanjutkan hubungan mereka.
                    </p>

                    <p class="story-text english">
                        Seeing Harun's courage and sincerity,
                        Fadila's heart slowly opened.
                        With tears in her eyes,
                        she asked her parents for their blessing
                        to continue their journey together.
                    </p>

                </div>


                <!-- A PROMISE TO FOREVER -->

                <div class="story-chapter">

                    <span class="story-date">
                        A PROMISE TO FOREVER
                    </span>

                    <p class="story-text">
                        Pada akhirnya, Fadila dan Harun memilih
                        berkomitmen untuk menikah.
                    </p>

                    <p class="story-text">
                        Satu demi satu dokumen diurus,
                        sementara komunikasi dan kepercayaan
                        terus dijaga dengan baik.
                    </p>

                    <p class="story-text">
                        Setiap langkah dijalani dengan satu tujuan:
                        menyatukan dua hati dalam sebuah ikatan
                        pernikahan yang diharapkan menjadi
                        awal dari perjalanan seumur hidup.
                    </p>

                    <p class="story-text english">
                        In the end, Harun and Fadila
                        committed to marriage.
                    </p>

                    <p class="story-text english">
                        We prepared each document one by one,
                        while keeping communication,
                        trust, and commitment strong.
                    </p>

                    <p class="story-text english">
                        Every step was taken with one beautiful purpose:
                        to unite two hearts in marriage
                        and begin a journey that will last
                        for a lifetime.
                    </p>

                </div>


                <!-- PENUTUP -->

                <div class="story-final">

                    <div class="story-final-line"></div>

                    <p>
                        And now, our forever begins.
                    </p>

                    <span>
                        Harun & Fadila
                    </span>

                    <div class="story-final-line"></div>

                </div>


                <button class="next-page">
                    Wedding Details
                </button>

            </div>

        </section>

        `;
const musicButton = document.getElementById("musicButton");

const weddingMusic = new Audio("music/wedding.mp3");

weddingMusic.loop = true;
weddingMusic.volume = 0.35;
weddingMusic.play().then(function () {

    musicButton.classList.add("playing");
    musicButton.textContent = "♫";

}).catch(function (error) {

    console.log("Autoplay diblokir browser:", error);

});

musicButton.addEventListener("click", function () {

    if (weddingMusic.paused) {

        weddingMusic.play();

        musicButton.classList.add("playing");

        musicButton.textContent = "♫";

    } else {

        weddingMusic.pause();

        musicButton.classList.remove("playing");

        musicButton.textContent = "♪";

    }

});

        /* =====================================
           TOMBOL OUR STORY
        ===================================== */

        const storyButton =
            document.querySelector(".page-two .next-page");

        storyButton.addEventListener("click", function () {

            document.querySelector(".page-three")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


    /* =====================================
       TOMBOL WEDDING DETAILS
    ===================================== */

    document.addEventListener("click", function (event) {

        if (!event.target.classList.contains("next-page")) {
            return;
        }

        if (!event.target.closest(".page-three")) {
            return;
        }


        /* =====================================
           HALAMAN 4 — WEDDING DETAILS
        ===================================== */

        if (document.querySelector(".page-four")) {
            document.querySelector(".page-four")
                .scrollIntoView({
                    behavior: "smooth"
                });

            return;
        }


        document.body.insertAdjacentHTML("beforeend", `

            <section class="wedding-page page-four">

                <div class="details-section">

                    <div class="story-line"></div>

                    <p class="story-label">
                        THE WEDDING DAY
                    </p>

                    <h2>
                        Our Special Day
                    </h2>


                    <!-- TANGGAL -->

                    <div class="date-card">

                        <span class="date-day">
                            04
                        </span>

                        <span class="date-month">
                            DECEMBER
                        </span>

                        <span class="date-year">
                            2026
                        </span>

                    </div>


                    <div class="details-ornament">
                        ✦
                    </div>


                    <!-- COUNTDOWN -->

                    <div class="countdown">

                        <div class="count-box">
                            <span id="days">00</span>
                            <small>DAYS</small>
                        </div>

                        <div class="count-box">
                            <span id="hours">00</span>
                            <small>HOURS</small>
                        </div>

                        <div class="count-box">
                            <span id="minutes">00</span>
                            <small>MINUTES</small>
                        </div>

                        <div class="count-box">
                            <span id="seconds">00</span>
                            <small>SECONDS</small>
                        </div>

                    </div>


                    <!-- AKAD -->

                    <div class="event-card">

                        <span class="event-label">
                            AKAD NIKAH
                        </span>

                        <p class="event-time">
                            08.00 WIB
                        </p>

                        <p class="event-note">
                            hingga selesai
                        </p>

                    </div>


                    <!-- LOKASI -->

                    <div class="location-card">

                        <span class="event-label">
                            TEMPAT
                        </span>

                        <h3>
                            Kediaman Mempelai Wanita
                        </h3>

                        <p>
                            Desa Talang Sari 1,<br>
                            Kelurahan Rajabasa Lama,<br>
                            Kecamatan Labuhan Ratu,<br>
                            Lampung Timur
                        </p>

                    </div>


                    <p class="details-message">
                        Merupakan suatu kebahagiaan bagi kami
                        apabila Bapak/Ibu/Saudara/i berkenan
                        hadir dan memberikan doa restu
                        untuk hari bahagia kami.
                    </p>


                    <p class="details-message english">
                        It would be our greatest joy
                        to have you with us on our special day,
                        sharing your prayers and blessings
                        as we begin our journey together.
                    </p>
<button class="next-page" id="locationRsvpButton">
    Location & RSVP
</button>
                </div>

            </section>

        `);


        /* =====================================
           COUNTDOWN
        ===================================== */

        const weddingDate =
            new Date(
                "2026-12-04T08:00:00+07:00"
            ).getTime();


        function updateCountdown() {

            const now = Date.now();

            const distance =
                weddingDate - now;


            if (distance <= 0) {

                document.getElementById("days").textContent = "00";
                document.getElementById("hours").textContent = "00";
                document.getElementById("minutes").textContent = "00";
                document.getElementById("seconds").textContent = "00";

                return;
            }


            const days =
                Math.floor(
                    distance /
                    (1000 * 60 * 60 * 24)
                );


            const hours =
                Math.floor(
                    (distance /
                    (1000 * 60 * 60)) % 24
                );


            const minutes =
                Math.floor(
                    (distance /
                    (1000 * 60)) % 60
                );


            const seconds =
                Math.floor(
                    (distance / 1000) % 60
                );


            document.getElementById("days").textContent =
                String(days).padStart(2, "0");

            document.getElementById("hours").textContent =
                String(hours).padStart(2, "0");

            document.getElementById("minutes").textContent =
                String(minutes).padStart(2, "0");

            document.getElementById("seconds").textContent =
                String(seconds).padStart(2, "0");

        }


        updateCountdown();

        setInterval(
            updateCountdown,
            1000
        );

        document.querySelector(".page-four")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});
