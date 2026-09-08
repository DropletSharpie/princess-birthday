const app = document.getElementById("app");

const memories = [
    {
        image: "1.jpeg",
        title: "Where it all began…",
        text: `
            Yeh wahi jagah hai jahan se hum school mein entry
            aur exit karte hain🏫
            <br><br>
            Tab toh bas school ka entrance tha...
            ab dekhiye, kitni memories hain yahan se😭🫶🏻
        `
    },

    {
        image: "2.jpeg",
        title: "The newer side of school",
        text: `
            Yahan hamari classes hain
            Meri class toh last year bhi yahin thi
            aapki nahi thi😭
            <br><br>
            Ab mereko lunch mein dusri building jaane ki jarurt nhi hain
            💗
            Abhi kal jab yahan mile the, jab meine bola tha humare papa admission room mein baat kr rhe hain, tab agar aapko yaad ho, toh aap baal khol rahe the... meine literaly man mein bola tha "Khule rehne diya kariye na, accha lagte hain"😭💕🫶🏻
        `
    },

    {
        image: "3.jpeg",
        title: "Just another entrance…",
        text: `
            Technically bas ek entrance hai😭
            <br><br>
            But iske through kitni baar aapke saath bahar gaya,
            kitni baar andar aaya, kitni baar aapse baat hui...
            woh count karna impossible hai😭🦋
        `
    },

    {
        image: "4.jpeg",
        title: "That chocolate moment 🍫",
        text: `
            Remember? Aap stressed the
            <br><br>
            Maine aapko 5 Star di thi...
            aur aapka mood instantly thoda better ho gaya thaa
            <br><br>
            Aur aapka mood better dekh ke
            Mera mood bhi better ho gaya thaaa😭✨🫶🏻
            <br><br>
            <i>Bas aap khush raho, mereko aur kya chahiyee😭💗</i>
        `
    },

    {
        image: "5.jpeg",
        title: "Outside school",
        text: `
            School ke bahar ki ye jagah...
            <br><br>
            Kitne baccho ko dekha hoga isne saalo mein....
            Lekin humare jaise ko nhi dekha hoga
            kyuki kisi ke paas aap nhi the na🥹🫶🏻💕
            aur mein likh ke de skta hun dekhega bhi nhi....
            Koi thand mein subah se shaam tak kisi se milne chutti ke din school aake wait nhi karega na
            "Hua na hoga ab koi, yahan hum do sa dobaraa"
            🫶🏻✨💌
            Lagta hai Arjangarh humare alawa kisi aur ko aise dekh payega? Im tearing up writing this khushi se ye padhte hue🥹💕, Lekin 
            unfortunately arjangarh kisi ko nhi dekhega aise winter mein milte hue, kabhi bhi nahin🫶🏻💕 Na school ki lane ke saamne ek aaditi jitni sundar ladki kabhi rahegi (kyuki aapse sundar koi hai hi nhi)
            aur na meri tarah koi dewwana ladka 10-10 kms travel krke us se milne aayega... Literaly ro rha hu oh god, Kya magical memories banai hain, koi nhi bana skta, koi 11th-C mein exam nhi dega, aur na wahan pe ek ladki haath pe patti laga ke aayegii🥹🫶🏻💕💌
            aapko lagta hai jo memories humari hai waisi koi create kar payega yahan pe? Sach mein ab yahan se jaane ke baad humari tarah yahan koi nahi aa payega kabhi🥹✨💕
        `
    },

    {
        image: "6.jpeg",
        title: "The back ground",
        text: `
            Yahan stage par baith ke humne kitni baatein ki hain
            <br><br>
            Even on my birthday
            <br><br>
            Basically school ka ek aur random corner
            somehow memory ban gaya😭💗
            Isi ground mein aapko I-card diya tha NOT KNOWING ki agle saal I would shake hands with my crush
            aur uske agle saal SHE'LL BE MY EVERYTHING🫶🏻💕
        `
    },

    {
        image: "7.jpeg",
        title: "The main gate",
        text: `
            Main gate.
            <br><br>
            Kitni baar andar aaye,
            kitni baar bahar gaye...
            <br><br>
            Tab nahi pata tha ki ek din
            main is gate ki photo dekh ke
            ek apsara ke liye unka birthday surprise ready karunga💕🫶🏻
        `
    },

    {
        image: "8.jpeg",
        title: "Just a talking spot",
        text: `
            Is jagah ki koi massive legendary story nahi hai
            😭
            <br><br>
            We just talked here
            <br><br>
            And honestly...
            aapse baat karna hi kaafi hota hai kisi jaagh ko memory banane💗
        `
    },

    {
        image: "9.jpeg",
        title: "Okay THIS place. 😭",
        text: `
            This is probably the second-most-talked place
            <br><br>
            Foggy morning.
            My birthday outfit.
            "Acche lag rhe ho" Mat bola karo pighal jaata hu yaawwrr🫶🏻🫠
            <br><br>
            Aur us din apne freinds ko chup rehne ke liye bolna
            <i>"shut up"</i>
            because mein sirf aapse baat krne aaya tha us din😭💌
            <br><br>
            <b>Jab mein us din aapki aankhon mein dekh rha tha jab aap kahin aur dekh rhe the
            aapne dekha aur bola kya hua? WDYMM KYA HUA, DUNIYA KI SABSE SUNDAR CHEEZ NE MOHIT KARLIYA THAAA😭💕✨</b>
            Aaj toh bracelet bhi wahin liya tha😭🫶🏻✨
        `
    },

    {
        image: "10.jpeg",
        title: "The rock. 🪨💗",
        text: `
            THE rock
            <br><br>
            Aapne mera cake yahin cut kiya
            <br>
            Mujhe birthday letter yahin diya
            <br>
            Aur December 20 ki itni saari memories yahin ki hain... Kinni thand lag rhi thi madam ko lekin challege krna tha😭🫶🏻💕
            <br><br>
            Aur ab school walon ne isko grass se cover kar diya...
            <br><br>
            <b>WHO GAVE THEM PERMISSION, Hum dono se toh nahi pucha😭😭</b>
        `
    },

    {
        image: "11.jpeg",
        title: "The view from the rocks",
        text: `
            Yahan se aapki class dikhti thi
            <br><br>
            And let's just say...
            maine udhar <i>kaafi</i> baar dekha hai👀
            <br><br>
            Coincidence?
            <br>
            <i>Absolutely not😭✌🏻</i>
        `
    },

    {
        image: "12.jpeg",
        title: "Just a rock… apparently",
        text: `
            Dekhne mein toh bas ek patthar tha.
            <br><br>
            But humari story mein?
            <br>
            <i>Ye rock nahi, kisi ka throne bhi tha😭✨💌</i>
            <br><br>
            Some places become special
            simply because the right person was there🫶🏻💗
        `
    },

    {
        image: "13.jpeg",
        title: "The old building",
        text: `
            Aapka classroom area jab humari dosti hui thi
            <br><br>
            Aapke saath yahan se kitni baar aaya hun✨
            <br><br>
            Ab toh nhi ghumte yahan par, lekin yahan bhi kitni memories hain🥹💌
        `
    },

    {
        image: "14.jpeg",
        title: "Outside your class",
        text: `
            Awww, Mera babybear yahan ro rha thaa, aasun bhi nhi pochne diya😭🫶🏻
            <br><br>
            Mera haath hata diya tha inne pyaar che
            kyuki aap merese gucchaa thee😭🫶🏻💕
            <br><br>
            Lekinnn, Yahan ke kinte chakkar kaate hai ek jhalak ke liye bas mereko pata hai
            😭💗
        `
    },

    {
        image: "15.jpeg",
        title: "Your 9th-class classroom",
        text: `
            9th class...
            <br><br>
            Woh class jisne humari puri story dekhi hai🫶🏻
            Kitni baar yahan manane aaya hu.... Kya kar skte hain, kisi ki udaasi merese dekhi nhi jaati😉💕
        `
    },

    {
        image: "16.jpeg",
        title: "Those stairs",
        text: `
            Ye stairs...
            <br><br>
            Aapko yahan maine literally
            one million times dekha hoga.
            😭
            <br><br>
            And somehow,
            uske baad bhi man nhi bhartaa
            "Dekha hazaro dafa aapko.. Phir bekarari kaisi hai.. Sambhale sambhalta nhi ye dil... Kuch aapme baat aisi hai"
            💕🦋
        `
    },

    {
        image: "17.jpeg",
        title: "Same stairs. Different memory.",
        text: `
            Kitni baar ek dusre ko cross kiya hai yahan par.
            Kabhi ek dusre ke liye starngers hote hue.. Aur baad mein blush krte hue😭🫶🏻
            <br><br>
            Bas har baar aapki wajah se
            alag memory ban jaati thi✨
        `
    },

    {
        image: "18.jpeg",
        title: "The old building",
        text: `
            Is area mein tumhe
            hazaar baar dekha hoga.
            <br><br>
            And somehow,
            ab ye jagah aapke bina
            thodi incomplete si lagti hai💗
        `
    },

    {
        image: "19.jpeg",
        title: "Outside",
        text: `
            Har baar story school ke andar nahi hoti thi.
            <br><br>
            Kabhi bas school ke bahar ke
            woh kuch minutes hi kaafi hote the.
            <br><br>
            Aur kabhi... Shaam ko bhi memories ban jaati thi🫶🏻✨💌
            <br><br>
            (Ya shyd mereko hero ban ne ka shauk tha😂✌🏻)
        `
    },

    {
        image: "20.jpeg",
        title: "Your lane...",
        text: `
            School ke bilkul saamne
            Aapki lane
            <br><br>
            Tumhare ghar ki photo nahi li,
            obviously😭
            <br><br>
            Kitni baar gaadi se aate hue mundi right krke dekha hai aapko dekhne😭💕
        `
    },

    {
        image: "21.jpeg",
        title: "Why did I even take this? 😭",
        text: `
            Mujhe genuinely nahi pata
            😭
            <br><br>
            Meine ye photo kyu li😭
            <br><br>
            Ab leli hai toh daal deta hun... Aapko bhi yaad aaye mein kitna bada bhondu hun😂
        `
    },

    {
        image: "22.jpeg",
        title: "The classroom where you sang for me 🎶",
        text: `
            THIS room😭
            <br><br>
            Yahin aapne mere liye woh song gaya tha birthday pe
            jo humari friendship se connected hai😭🫶🏻
            <br><br>
            Main paani peene ki acting kr rha tha kyuki i was blushing so so hard😭💕
            <br><br>
            aur honestly,
            <i>that moment is staying with me.</i>
            🥹💗
        `
    },

    {
        image: "23.jpeg",
        title: "Same classroom, another view",
        text: `
            Same room.
            Same memory.
            <br><br>
            Bas angle different hai.
            <br><br>
            But mujhe abhi bhi
            woh moment aur aapki voice yaad hai😭🎶🫶🏻
        `
    },

    {
        image: "24.jpeg",
        title: "Your class now…",
        text: `
            Aapki present class.
            <br><br>
            Funny thing is,
            ye class hum dono ki reh chuki hai😭✌🏻
            <br><br>
            Life really said:
            <i>let's make this complicated😭</i>
        `
    },

    {
        image: "25.jpeg",
        title: "Our timelines crossed here",
        text: `
            Aapne yahan padha.
            Maine yahan padha.
            <br><br>
            Aur isi class ke around
            humari story bhi grow hui.
            <br><br>
            Coincidence? Maybe.
            Cute? Absolutely💗
        `
    },

    {
        image: "26.jpeg",
        title: "Funny how places change",
        text: `
            Benches change.
            Classes change.
            Years change.
            <br><br>
            But....
            <br>
            main abhi bhi lunch mein aapko hi dhoondhta hoon😭🫶🏻
        `
    },

    {
        image: "27.jpeg",
        title: "My current class",
        text: `
            Meri current class.
            <br><br>
            Jahan teachers class mein baithne bolte hai..
            lekin
            <br><br>
            phir koi reason mil jaata hai
            bahar jaane ka😭✌🏻💕
        `
    },

    {
        image: "28.jpeg",
        title: "My lunch waiting spot 😭",
        text: `
            Main baith kr lunch ka wait karta hoon
            <br><br>
            Technically lunch ke liye
            <br><br>
            <i>Technically</i>
            👀
            <br><br>
            Because lunch = bahar jaana
            = aapko dekhna.
            😭🫶🏻💗
        `
    },

    {
        image: "29.jpeg",
        title: "Badminton day 🏸",
        text: `
            Aapke badminton regionals the.
            <br><br>
            Main bahar sirf aapko dekhne aa gaya.
            😭
            <br><br>
            Aap naraz thi.
            Main aapke peeche bhaag raha tha,
            tumhe convince kar raha tha...
            <br><br>
            Aur beech mein pooch bhi liya:
            <br>
            <i>"Badminton kheloge?"</i>
            😭😭
            <br><br>
            <b>Priorities🫡😂💕</b>
        `
    },

    {
        image: "30.jpeg",
        title: "Your class lane — now",
        text: `
            Aur ab hum yahan hain
            <br><br>
            Same school
            New classrooms
            New memories
            <br><br>
            But somehow...
            <br><br>
            <b>still us.💗✨</b>
            Din mein 10 baar niklata hun sirf aapko dekhne😭💕
        `
    }
];

let currentMemory = 0;
/* =========================================================
   MUSIC PLAYER
   ========================================================= */

const songs = [
    {
        title: "Humko Humise Chura Lo",
        file: "humko-humise-chura-lo.webm"
    },

    {
        title: "Yeh Ladka Haye Allah",
        file: "yeh-ladka-haye-allah.mp3"
    },

    {
        title: "Dekha Hazaro Dafaa Aapko",
        file: "dekha-hazaro-dafaa-aapko.webm"
    },

    {
        title: "Dil Ka Jo Haal Hai",
        file: "dil-ka-jo-haal-hai.webm"
    },

    {
        title: "Hua Hai Aaj Pehli Baar",
        file: "hua-hai-aaj-pehli-baar.webm"
    },

    {
        title: "Chaand Sifarish",
        file: "chaand-sifarish.mp3"
    },

    {
        title: "Tere Liye",
        file: "tere-liye.mp3"
    },

    {
        title: "Aankhein Khuli Ho Ya Ho Band",
        file: "aankhein-khuli-ho-ya-ho-band.webm"
    }
];

let currentSong = 0;
let audio = null;


/* =========================================================
   CREATE MUSIC PLAYER
   ========================================================= */

function createMusicPlayer() {

    if (document.getElementById("musicPlayer")) {
        return;
    }

    const player = document.createElement("div");

    player.id = "musicPlayer";

    player.innerHTML = `
        <div class="music-player-inner">

            <button
                id="musicPlayButton"
                type="button"
                aria-label="Play or pause music"
            >
                ▶
            </button>

            <div class="music-info">

                <span class="music-label">
                    Now playing
                </span>

                <span id="musicTitle">
                    ${songs[0].title}
                </span>

            </div>

            <select
                id="songSelector"
                aria-label="Select song"
            >

                ${songs.map((song, index) => `
                    <option value="${index}">
                        ${song.title}
                    </option>
                `).join("")}

            </select>

        </div>

        <audio
            id="backgroundAudio"
            preload="metadata"
        ></audio>
    `;

    document.body.appendChild(player);

    audio = document.getElementById("backgroundAudio");

    if (!audio) {
        return;
    }

    audio.src = songs[0].file;

    const playButton =
        document.getElementById("musicPlayButton");

    const songSelector =
        document.getElementById("songSelector");

    if (playButton) {
        playButton.addEventListener(
            "click",
            toggleMusic
        );
    }

    if (songSelector) {
        songSelector.addEventListener(
            "change",
            function (event) {

                const selectedIndex =
                    Number(event.target.value);

                if (
                    Number.isInteger(selectedIndex) &&
                    selectedIndex >= 0 &&
                    selectedIndex < songs.length
                ) {
                    currentSong = selectedIndex;
                    changeSong(currentSong);
                }

            }
        );
    }

    audio.addEventListener(
        "ended",
        function () {

            currentSong++;

            if (currentSong >= songs.length) {
                currentSong = 0;
            }

            changeSong(currentSong);

        }
    );
}


/* =========================================================
   TOGGLE MUSIC
   ========================================================= */

function toggleMusic() {

    if (!audio) {
        return;
    }

    const button =
        document.getElementById("musicPlayButton");

    if (!button) {
        return;
    }

    if (audio.paused) {

        const playPromise = audio.play();

        if (playPromise !== undefined) {

            playPromise
                .then(function () {

                    button.textContent = "❚❚";

                })
                .catch(function (error) {

                    console.log(
                        "Audio could not be played:",
                        error
                    );

                    button.textContent = "▶";

                });

        } else {

            button.textContent = "❚❚";

        }

    } else {

        audio.pause();

        button.textContent = "▶";

    }
}


/* =========================================================
   CHANGE SONG
   ========================================================= */

function changeSong(index) {

    if (!audio) {
        return;
    }

    if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= songs.length
    ) {
        return;
    }

    const button =
        document.getElementById("musicPlayButton");

    const title =
        document.getElementById("musicTitle");

    const selector =
        document.getElementById("songSelector");

    audio.pause();

    audio.src = songs[index].file;

    audio.load();

    if (title) {
        title.textContent = songs[index].title;
    }

    if (selector) {
        selector.value = String(index);
    }

    const playPromise = audio.play();

    if (playPromise !== undefined) {

        playPromise
            .then(function () {

                if (button) {
                    button.textContent = "❚❚";
                }

            })
            .catch(function (error) {

                console.log(
                    "Audio could not be played:",
                    error
                );

                if (button) {
                    button.textContent = "▶";
                }

            });

    } else if (button) {

        button.textContent = "❚❚";

    }
}


/* =========================================================
   START MUSIC PLAYER
   ========================================================= */

createMusicPlayer();
/* =========================================================
   SHOW MEMORY
   ========================================================= */

function showMemory(index) {

    if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= memories.length
    ) {
        return;
    }

    const memory = memories[index];

    app.innerHTML = `

        <section class="memory fade-in">

            <div class="memory-image">

                <img
                    src="${memory.image}"
                    alt="${memory.title}"
                >

            </div>

            <div class="memory-text">

                <p class="small-text">
                    Memory ${index + 1} of ${memories.length}
                </p>

                <h1>
                    ${memory.title}
                </h1>

                <p>
                    ${memory.text}
                </p>

                <div class="memory-buttons">

                    ${
                        index > 0
                            ? `
                                <button id="prevMemoryButton">
                                    ← Previous
                                </button>
                              `
                            : ""
                    }

                    <button id="nextMemoryButton">
                        ${
                            index < memories.length - 1
                                ? "Next memory →"
                                : "That's all 30... 🥹"
                        }
                    </button>

                </div>

            </div>

        </section>

    `;
}

/* =========================================================
   STORY NAVIGATION
   ========================================================= */

document.addEventListener("click", function (event) {

    /* =====================================================
       START STORY
       ===================================================== */

  if (event.target.id === "startButton") {

    app.innerHTML = `

        <section class="story-page fade-in">

            <p class="small-text">
                The very beginning 🌷
            </p>

            <h1>
                And then...
                I saw you. 😵‍💫💘
            </h1>

            <p>
                I still remember the first time
                I saw you.
                <br><br>
                And for some reason...
                <br>
                <i>my heart just skipped a beat. 😭💘</i>
            </p>

            <p>
                Mere dimaag mein literally
                ek hi thought aaya:
                <br><br>
                <i>
                    "Mein swarg mein hu kya? 😵‍💫
                    Itni sundar ladki???"
                </i>
            </p>

            <p>
                Aur phir pata nahi kaise,
                but I got butterflies.
                <br><br>
                <b>
                    Actual butterflies. 🦋💘
                </b>
            </p>

            <p>
                Uske baad se
                aapko dekhna somehow
                mere din ka favourite little moment
                ban gaya tha. 🌷
            </p>

            <p>
                Kabhi school ke corridors mein
                aap ghoomte hue dikh jaati...
                <br><br>
                Kabhi ground mein bench par...
                <br><br>
                Kabhi rocks par baithi hoti...
                <br><br>
                Aur main bas dur se
                aapko dekh kar khush ho jaata. 🥹💗
            </p>

            <p>
                Mujhe aapke baare mein
                kuch bhi properly nahi pata tha.
                <br><br>
                Bas itna pata tha ki
                <i>
                    pata nahi kyun,
                    meri nazar aapko hi dhoondti thi😭💘
                </i>
            </p>

            <p>
                Aur obviously,
                mera overthinking brain
                apna kaam kar raha tha😭✋🏻
                <br><br>
                Maine toh soch liya tha:
                <br><br>
                <i>
                    "Chhodo yaar...
                    ye toh mereko bhav bhi nahi degi." 😭
                </i>
            </p>

            <p class="quiet">
                Little did I know...
                <br><br>
                ki kuch hafton baad
                mujhe pata chalega
                ki aap koi random girl nahi thi.
                <br><br>
                <b>
                    Aapke papa...
                    mere papa ke best friend the. 😭💗
                </b>
            </p>

            <button id="firstMeetingButton">
                Aur phir mujhe aapke baare mein pata chala... → 🌷
            </button>

        </section>

    `;
}
/* =====================================================
   FIRST IMPRESSION
   ===================================================== */

else if (event.target.id === "firstMeetingButton") {

    app.innerHTML = `

        <section class="story-page fade-in">

            <p class="small-text">
                And then... 🌷
            </p>

            <h1>
                Little did I know... 👀
            </h1>

            <p>
                Us waqt mujhe bilkul nahi pata tha
                ki meri life mein kya hone wala hai.

            <p class="quiet">
                Lekin...
                <br><br>
                <b>
                    3 saal baad,
                    meri life mein ek twist aane wala tha...
                </b>
            </p>

            <p>
                Aur woh bhi
                <i>bohot bada twist. 😭💗</i>
            </p>

            <p class="quiet">
                Lekin...
                <br><br>
                pehle start karte hain
                <b>school se. 🏫🌷</b>
            </p>

            <button id="schoolButton">
                Chalo school chalte hain → 🏫💗
            </button>

        </section>

    `;

}
else if (event.target.id === "schoolButton") {

    app.innerHTML = `

        <section class="story-page fade-in">

            <p class="small-text">
                Chapter One
            </p>

            <h1>
                The place that saw it all. 🏫
            </h1>

            <p>
                School was supposed to be
                classes, teachers, exams,
                lunch and going home.
            </p>

            <p>
                Somehow,
                it became the setting
                for one of my favourite
                chapters of my life JUST BECAUSE OF AAP😭🫶🏻
            </p>

            <p class="quiet">
                So...
                let's walk through it. 🫶🏻
            </p>

            <button id="beginMemoriesButton">
                Enter the memories → ✨
            </button>

        </section>

    `;
}

else if (event.target.id === "beginMemoriesButton") {

    currentMemory = 0;
    showMemory(currentMemory);

}


    /* =====================================================
       NEXT MEMORY
       ===================================================== */

    else if (event.target.id === "nextMemoryButton") {

        if (currentMemory < memories.length - 1) {

            currentMemory++;

            showMemory(currentMemory);

        } else {

            app.innerHTML = `

                <section class="story-page fade-in">

                    <p class="small-text">
                        30 memories later... 🥹
                    </p>

                    <h1>
                        And somehow...
                        we're still here. 💗
                    </h1>

                    <p>
                        Itna kuch yaad krne ke baad
                        mereko ek cheez realise hui😭
                    </p>

                    <p>
                        Humari story mein
                        kitni saari cheezein hui hain
                        aur phir bhi
                        meri favourite cheezein
                        mostly woh hain
                        jo uss time bilkul normal lagti thi😭💗
                    </p>

                    <p>
                        Ek random smile...
                        <br>
                        Ek random conversation...
                        <br>
                        Ek dusre ko assembly mein
                        dhundhna...
                        <br>
                        Lunch ke time bahar jaana...
                        <br>
                        Kisi corner mein baith ke baatein krna...
                        <br>
                        Aapko dur se dekh lena...
                    </p>

                    <p class="quiet">
                        Bas...
                        <br><br>
                        chhoti chhoti cheezein. 🥹💗
                    </p>

                    <p>
                        Aur pata hai
                        sabse ajeeb cheez kya hai?
                    </p>

                    </p>

                    <p>
                        We were just living it.
                    </p>

                    <p>
                        Aur shayad isi liye
                        mujhe humari story itni pasand hai...
                        kyuki humne isko force nhi kiya
                        bas somehow
                        ye hoti chali gayi💗
                    </p>

                    <p class="quiet">
                        Aur ab dekho...
                        <br>
                        30 photos bhi kam pad gaye😭✋🏻
                    </p>

                    <button id="friendshipButton">
                        Ab chalo thoda aur peeche chalte hain... 💌
                    </button>

                </section>

            `;

        }

    }


    /* =====================================================
       PREVIOUS MEMORY
       ===================================================== */

    else if (event.target.id === "prevMemoryButton") {

        if (currentMemory > 0) {

            currentMemory--;

            showMemory(currentMemory);

        }

    }


    /* =====================================================
       FRIENDSHIP — AUGUST 21
       ===================================================== */

    else if (event.target.id === "friendshipButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    21 August 2025
                </p>

                <h1>
                    Aur phir ek din...
                    sab change ho gaya. 💌
                </h1>

                <p>
                    Meine pehle fake id banayi thi
                    but usse message nhi jaa rha tha😭
                    <br><br>
                    Toh pata nhi kahan se
                    himmat aayi
                    aur apni id se message krdiya
                </p>

                <p>
                    Apology type karne mein
                    <br>
                    THIRTY MINUTES😭😭😭
                </p>

                <p>
                    30 minute sirf ye sochne mein
                    ki kaise likhu
                    kya likhu
                    zyada weird na lage
                    aur send karne ke baad
                    kya hoga😭✋🏻
                </p>

                <p>
                    Phir finally send dabaya...
                    <br><br>
                    DHAK🫀DHAK🫀DHAK🫀DHAK🫀
                </p>

                <p>
                    2 baje message bheja
                    aur uske baad
                    har 15 minute mein phone check😂
                </p>

                <p>
                    Reply aaya?
                    <br>
                    Nahi.
                    <br><br>
                    15 minute later...
                    <br>
                    Reply aaya?
                    <br>
                    Nahi😭
                </p>

                <p>
                    Aur phir agle din
                    aapka reply aaya
                </p>

                <p>
                    <i>
                        "Yeah I do remember you and no worries,
                        atleast you apologized unlike other boys in your class"
                    </i>
                </p>

                <p>
                    Mera dimaag:
                    <br>
                    SHAADI PAKKIII🥳🥳🥳
                </p>

                <p>
                    Phir maine bina time waste kiye
                    pooch liya
                    <br><br>
                    <i>
                        "I know its too quick,
                        but can we be friends?"
                    </i>
                </p>

                <p>
                    Aur phir wapas
                    har 15 minute mein phone check😭😂
                </p>

                <p>
                    Aur jab aapne bola
                    <br><br>
                    <i>
                        "Yes I think we can be friends"
                    </i>
                </p>

                <p class="quiet">
                    Bas.
                    <br><br>
                    Mereko kya pata tha
                    ki woh ek chhota sa YES
                    meri life ki itni badi memory ban jayega. 🥹💗
                </p>

                <button id="friendshipAfterButton">
                    Aur phir dheere dheere... 🦋
                </button>

            </section>

        `;

    }


    /* =====================================================
       GETTING TO KNOW HER
       ===================================================== */

    else if (event.target.id === "friendshipAfterButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    Somewhere along the way...
                </p>

                <h1>
                    Crush se zyada...
                    person pasand aa gayi. 💗
                </h1>

                <p>
                    Shuru mein toh
                    obviously mein aapki looks pe hi fida tha😭✋🏻
                    <br><br>
                    Dur se dekhta tha
                    aur sochta tha
                    "bhai ye mereko bhav thodi degi"😭
                </p>

                <p>
                    Lekin phir baat karte karte
                    mujhe aapke baare mein
                    aur cheezein pata chalne lagi
                </p>

                <p>
                    Aapka gussa...
                    <br>
                    Aapki hasi...
                    <br>
                    Aapka random bachha ban jaana...
                    <br>
                    Aapki little little habits...
                    <br>
                    Aapko kya pasand hai...
                    <br>
                    Aapko kya hurt karta hai...
                    <br>
                    Aap kis cheez pe excited hoti ho...
                    <br>
                    Aapke dreams kya hain...
                </p>

                <p>
                    Aur somewhere along the way
                    mujhe realise hua
                    ki mereko sirf woh ladki pasand nhi
                    jo mein dur se dekhta tha😭💗
                </p>

                <p class="quiet">
                    Mereko woh person pasand aa gayi
                    jo uss ladki ke andar thi. 🥹💗
                </p>

                <p>
                    And honestly...
                    <br><br>
                    that became my favourite part.
                </p>

                <p>
                    Kyuki crush hona easy tha😭
                    <br>
                    Aapko beautiful dekhna easy tha
                    <br>
                    Aapko dur se admire karna easy tha
                </p>

                <p>
                    But aapko actually jaan na...
                    <br><br>
                    Aapke moods samajhna
                    <br>
                    Aapka gussa samajhna
                    <br>
                    Aapki softness dekhna
                    <br>
                    Aapki sensitivity samajhna
                    <br>
                    Aapko comfortable hote dekhna
                    <br>
                    Aapko apne saamne
                    bilkul bachha ban jaate dekhna...
                </p>

                <p class="quiet">
                    Woh mujhe aur zyada pasand aaya. 💗
                </p>

                    <br><br>
                    mein aur zyada attached ho gaya😭✋🏻
                </p>

                <button id="littleThingsButton">
                    Phir toh aap meri everyday ban gayi... 🎀
                </button>

            </section>

        `;

    }


    /* =====================================================
       LITTLE THINGS / COMFORT PERSON
       ===================================================== */

    else if (event.target.id === "littleThingsButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    The little things 💗
                </p>

                <h1>
                    Pata hi nhi chala kab... 🥹
                </h1>

                <p>
                    Ek conversation regular conversation ban gayi
                    <br>
                    Ek random joke inside joke ban gaya
                    <br>
                    Ek random person
                    meri favourite person ban gayi😭
                </p>

                <p>
                    Kuch funny hota hai
                    toh aapko batana hota hai
                    <br><br>
                    Kuch exciting hota hai
                    toh aapko batana hota hai
                    <br><br>
                    Kuch bura hota hai
                    toh aapko batana hota hai
                    <br><br>
                    Aur aap low hoti hai
                    toh mera dimaag automatically
                    ye sochne lagta
                    ki "isko kaise hasau"😭💗
                </p>

                <p>
                    Aur kabhi kuch bhi nhi hota...
                    <br><br>
                    tab bhi aapko pareshan karna hota
                    because obviously
                    aapko chain se kaise rehne du😭✋🏻😂
                </p>

                <p>
                    Dheere dheere
                    aap woh person ban gayi
                    jisko kuch bhi bolne mein
                    mujhe hesitation nhi hoti hai
                </p>

                <p>
                    Aapke saamne
                    mein stupid ho sakta hun
                    <br>
                    mein emotional ho sakta hun
                    <br>
                    mein bilkul pagal ho sakta hun
                    <br>
                    aur aap bhi mere saamne
                    apni woh side dikha sakti hain
                    jo har kisi ko nhi dikhti💗
                </p>

                <p class="quiet">
                    And I think that's when
                    you became my comfort person. 🫶🏻
                </p>

                <p>
                    Aur mujhe ye cheez
                    bohot zyada precious lagti hai
                </p>

                <p>
                    Kyuki comfort ka matlab mere liye
                    ye nhi ki har waqt happy rehna
                </p>

                <p>
                    Comfort ka matlab hai
                    ki aap gussa ho sakti ho
                    <br>
                    aap low ho sakti ho
                    <br>
                    aap chup ho sakti ho
                    <br>
                    aap ro sakti ho
                    <br>
                    aap bachha ban sakti ho
                    <br>
                    aap bas "mujhe nhi pata" bol sakti ho
                </p>

                <p>
                    Aur phir bhi
                    aapko kisi particular version
                    mein act karne ki zarurat nhi hai
                </p>

                <p class="quiet">
                    Bas aap raho. 🫶🏻💗
                </p>

                <button id="preBirthdayButton">
                    Ek din toh aisa bhi tha... 👀
                </button>

            </section>

        `;

    }


    /* =====================================================
       PRE-BIRTHDAY — 3 STUDENTS
       ===================================================== */

    else if (event.target.id === "preBirthdayButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    One very random school day 😭
                </p>

                <h1>
                    Sirf aapko dekhne gaya tha. 😭💗
                </h1>

                <p>
                    Us din proper studies bhi nhi honi thi
                    <br><br>
                    Aur somehow
                    school mein sirf THREE students aaye the😭✋🏻
                </p>

                <p>
                    THREE.
                    <br><br>
                    Matlab school ne practically
                    bola tha "bhai ghar pe raho"😭
                </p>

                <p>
                    But mein phir bhi gaya.
                </p>

                <p>
                    Kyun?
                    <br><br>
                    Koi important class thi?
                    <br>
                    Nahi.
                    <br><br>
                    Koi exam tha?
                    <br>
                    Nahi.
                    <br><br>
                    Koi special event tha?
                    <br>
                    Nahi😭
                </p>

                <p class="quiet">
                    Bas aapko dekhna tha. 🥹💗
                </p>

                <p>
                    Kabhi kabhi reason
                    itna hi hota hai
                </p>

                <p>
                    Aapko dekhna tha
                    toh school aa gaya😭✋🏻
                </p>

                <p>
                    Aur phir mein aapko dekh raha tha...
                    <br><br>
                    aur aapne notice kar liya😭
                </p>

                <button id="preBirthdayMomentButton">
                    Phir aapne poocha... 👀
                </button>

            </section>

        `;

    }


    /* =====================================================
       KYA HUA
       ===================================================== */

    else if (event.target.id === "preBirthdayMomentButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    That one little moment 👀
                </p>

                <h1>
                    "Kya hua?" 😭
                </h1>

                <p>
                    Mein aapko dekh raha tha
                    <br><br>
                    Aapne notice kiya
                    <br><br>
                    Aur phir seedha meri taraf dekh ke
                    pooch liya
                </p>

                <p class="quiet">
                    <i>
                        "Kya hua?"
                    </i>
                </p>

                <p>
                    And my brain just...
                    <br><br>
                    LEFT THE CHAT😭✋🏻
                </p>

                <p>
                    Mein bas aapko dekh raha tha
                    aur ab suddenly
                    mujhe answer bhi dena tha😭
                </p>

                <p>
                    Matlab madam
                    aap hi bata do
                    kya hua hoga😭😭
                </p>

                <p>
                    Duniya ki sabse sundar cheez
                    mere saamne khadi ho
                    toh obviously
                    thoda toh dekhunga na😭💗
                </p>

                <p class="quiet">
                    Aur sabse cute part?
                    <br><br>
                    Aapne notice kiya. 🥹💗
                </p>

                <p>
                    Itna simple moment tha
                    but somehow
                    mere dimaag mein reh gaya
                </p>

                <p>
                    Kyunki aapko dekhna
                    toh mein pehle bhi karta tha
                    <br><br>
                    but uss din
                    aapne mujhe dekh liya tha
                </p>

                <p class="quiet">
                    Aur mein uss cheez se
                    unnecessarily khush tha😭🫶🏻
                </p>

                <button id="giftsButton">
                    Ab aate hain un chhoti cheezon par jo maine sambhal ke rakhi hain... 🎁
                </button>

            </section>

        `;

    }


    /* =====================================================
       GIFTS
       ===================================================== */

    else if (event.target.id === "giftsButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    The little collection 🎀
                </p>

                <h1>
                    Aapki chhoti chhoti cheezein... 💗
                </h1>

                <p>
                    Some things are valuable
                    because of what they are
                    <br><br>
                    aur kuch cheezein valuable hoti hain
                    because of WHO gave them to you😭💗
                </p>

                <p>
                    Aur ye sab
                    obviously second category mein aata hai😭
                </p>

                <div class="artifact-list">

                    <div class="artifact-card">

                        <h2>
                            💌 Your birthday letter
                        </h2>

                        <div class="artifact-photo">
                            <img
                                src="birthday-letter.jpg"
                                alt="Birthday letter"
                            >
                        </div>

                        <p>
                            Aapke haath se likha hua
                            <br><br>
                            Aapke words
                            <br>
                            Aapki handwriting
                            <br><br>
                            Aur mere paas. 🥹💗
                        </p>

                    </div>


                    <div class="artifact-card">

                        <h2>
                            📝 Your Thank You note
                        </h2>

                        <div class="artifact-photo">
                            <img
                                src="thank-you.jpg"
                                alt="Thank you note"
                            >
                        </div>

                        <p>
                            Chhota sa note tha
                            <br><br>
                            But pehli baar
                            aapne mujhe kuch diya tha
                            <br><br>
                            toh obviously
                            mereko yaad rehna hi tha😭💗
                        </p>

                    </div>


                    <div class="artifact-card">

                        <h2>
                            🍫 The Five Star
                        </h2>

                        <div class="artifact-photo">
                            <img
                                src="five-star.jpg"
                                alt="Five Star"
                            >
                        </div>

                        <p>
                            Aapne mujhe birthday pe diya tha💗
                            <br><br>
                            Ek chocolate...
                            <br>
                            but mere liye
                            ek aur little memory😭🫶🏻
                        </p>

                    </div>


                    <div class="artifact-card">

                        <h2>
                            🎀 The hairband
                        </h2>

                        <div class="artifact-photo">
                            <img
                                src="hairband.jpg"
                                alt="Hairband"
                            >
                        </div>

                        <p>
                            December 4, 2025
                            <br><br>
                            Ek chhota sa exchange
                            <br><br>
                            Aur mujhe kya pata tha
                            ki ye bhi ek din
                            memory museum ka part banega😭🎀
                        </p>

                    </div>


                    <div class="artifact-card">

                        <h2>
                            🎀 The hairclutcher
                        </h2>

                        <div class="artifact-photo">
                            <img
                                src="hairclutcher.jpg"
                                alt="Hairclutcher"
                            >
                        </div>

                        <p>
                            Aapka bhondu wapis dena bhul gaya😭😭
                            <br><br>
                            <br>
                            One bhulakkad bhondu
                            <br>
                            One permanent memory😂💗
                        </p>

                    </div>

                </div>

                <p class="quiet">
                    Ye objects nhi hain madam
                    <br><br>
                    Ye memories hain
                    jo galti se objects ke form mein
                    mere paas reh gayi😭💗
                </p>

                <button id="birthdayChapterButton">
                    Aur phir aaya mera birthday... 🎂
                </button>

            </section>

        `;

    }


    /* =====================================================
       DECEMBER 20 — MORNING
       ===================================================== */

    else if (event.target.id === "birthdayChapterButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    20 December 2025
                </p>

                <h1>
                    My birthdayyyy 🎂💗
                </h1>

                <p>
                    Subah ka woh foggy environment
                    <br>
                    Mera birthday outfit
                    <br>
                    Aur phir aap
                </p>

                <p>
                    Aapne mujhe dekha
                    <br><br>
                    Aur casually bol diya
                </p>

                <p class="quiet">
                    <b>
                        "Acche lag rahe ho"
                    </b>
                </p>

                <p>
                    MADAMMMMM 😭😭😭💗
                </p>

                <p>
                    Aapko shayad
                    ek normal compliment laga hoga
                    <br><br>
                    Mere liye?
                    <br>
                    Pura din ban gaya tha😭✋🏻💗
                </p>

                <p>
                    Aapko shayad idea bhi nhi hai
                    ki aapki chhoti chhoti baatein
                    mere dimaag mein
                    kitni der tak reh jaati hain😭
                </p>

                <p>
                    Birthday tha mera
                    <br><br>
                    But somehow
                    aapke saath spend kiya hua
                    woh time hi
                    sabse special part ban gaya💗
                </p>

                <button id="birthdayEyeContactButton">
                    Aur phir aapka plan saamne aaya... 🎂
                </button>

            </section>

        `;

    }


    /* =====================================================
       DECEMBER 20 — CAKE
       ===================================================== */

    else if (event.target.id === "birthdayEyeContactButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    December 20 — later 🎂
                </p>

                <h1>
                    Aapne cake plan kiya tha😭💗
                </h1>

                <p>
                    Aapne khud cake plan kiya
                    <br>
                    Sab kuch manage karte hue
                </p>

                <p>
                    Aur phir humara
                    woh chhota sa birthday moment bana💗
                </p>

                <p>
                    Cake cut hua
                    <br>
                    Aapne mujhe khilaya
                    <br>
                    Maine aapko khilaya
                    <br>
                    Aur mein andar se
                    already pighal chuka tha😭🫠💗
                </p>

                <p>
                    But the thing I remember most
                    isn't even just the cake
                </p>

                <p class="quiet">
                    You planned it.
                    <br>
                    You put effort into it.
                    <br>
                    You wanted to make
                    my birthday special.
                    🥹💗
                </p>

                <p>
                    Aur mereko woh cheez
                    bohot zyada matter karti hai
                </p>

                <p>
                    Kyuki jab koi aapke liye
                    thoda sa effort karta hai na
                    <br><br>
                    toh woh effort
                    actual mein bohot bada lagta hai
                    when it comes from the right person💗
                </p>

                <button id="birthdayRockButton">
                    Aur phir... THE ROCK 🪨😭
                </button>

            </section>

        `;

    }


    /* =====================================================
       DECEMBER 20 — ROCK + LETTER
       ===================================================== */

    else if (event.target.id === "birthdayRockButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    THE ROCK 🪨💗
                </p>

                <h1>
                    11/10 Rock btw 😭✋🏻
                </h1>

                <p>
                    Kinni thand lag rahi thi
                    <br>
                    but challenge tha
                    toh obviously karna tha😭🫶🏻
                </p>

                <p>
                    Aur yahin
                    aapne mera cake cut kiya
                    <br>
                    yahin mujhe birthday letter diya
                    <br>
                    aur December 20 ki
                    itni saari memories yahin hain💗
                </p>

                <p>
                    Aur ab school walon ne
                    isko grass se cover kar diya😭😭
                </p>

                <p class="quiet">
                    WHO GAVE THEM PERMISSION
                    <br>
                    HUM DONO SE TOH NAHI PUCHA😭✋🏻
                </p>

                <p>
                    But honestly...
                    <br><br>
                    uss rock ka important hona
                    rock ki wajah se nhi tha
                </p>

                <p class="quiet">
                    Aap wahan thi. 💗
                </p>

                <p>
                    Aur phir aapne
                    mujhe woh handwritten letter diya
                </p>

                <p>
                    Aapki handwriting
                    <br>
                    Aapke words
                    <br>
                    Mere birthday pe
                    aapka likha hua kuch
                </p>

                <p>
                    Mereko aur kya chahiye tha uss din😭🫶🏻💗
                </p>

                <p>
                    Honestly
                    mujhe lagta hai
                    uss din mein jo feel kar raha tha
                    woh properly explain hi nhi kar sakta
                </p>

                <p class="quiet">
                    Bas itna samajh lo...
                    <br><br>
                    I felt very very lucky. 🥹💗
                </p>

                <button id="birthdayClassroomButton">
                    Aur phir hum ek empty classroom mein gaye... 🥹
                </button>

            </section>

        `;

    }


    /* =====================================================
       DECEMBER 20 — CLASSROOM
       ===================================================== */

    else if (event.target.id === "birthdayClassroomButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    Later that day 🎶
                </p>

                <h1>
                    THAT classroom 😭💗
                </h1>

                <p>
                    Classroom actually
                    hum dono ka tha bhi nhi😭
                </p>

                <p>
                    Bas ek empty classroom
                    <br><br>
                    But phir aap wahan thi
                    <br>
                    toh obviously
                    woh bhi memory ban gaya💗
                </p>

                <p>
                    Aur phir...
                    <br><br>
                    AAPNE MERE LIYE GAAYA😭😭😭
                </p>

                <p>
                    Woh song
                    jo humari friendship se connected hai
                    <br><br>
                    Aur aap mere liye ga rahi thi
                </p>

                <p>
                    Main bahar se:
                    <br>
                    "😶"
                    <br><br>
                    Andar se:
                    <br>
                    "BRO WHAT DO I DO WITH MY FACE😭😭😭"
                </p>

                <p>
                    Literally peeche dekh kr paani peene ki acting kr rha tha
                    because I was blushing
                    SO SO SO HARD😭✋🏻💕
                </p>

                <p>
                    Aap ga rahi thi
                    aur mein normal banne ki acting kr raha tha
                    <br><br>
                    Failed miserably😭
                </p>

                <p class="quiet">
                    But I remember your voice.
                    <br>
                    I remember that room.
                    <br>
                    I remember that feeling.
                    🥹💗
                </p>

                <p>
                    Aur mujhe lagta hai
                    kuch memories ki value
                    isi mein hoti hai
                    ki unko explain karne ke liye
                    bohot kuch bolna bhi nhi padta
                </p>

                <p class="quiet">
                    Bas yaad hoti hain. 💗
                </p>

                <button id="birthdayReflectionButton">
                    Aur haan... mein ye sab bhoola nhi hoon 😭
                </button>

            </section>

        `;

    }


    /* =====================================================
       DECEMBER 20 — RECAP
       ===================================================== */

    else if (event.target.id === "birthdayReflectionButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    December 20, 2025
                </p>

                <h1>
                    I REMEMBER ALL OF IT. 🥹💗
                </h1>

                <p>
                    Foggy morning yaad hai
                    <br>
                    Mera birthday outfit yaad hai
                    <br>
                    Aapka mujhe dekhna yaad hai
                    <br>
                    Aapka "Acche lag rahe ho" yaad hai😭
                </p>

                <p>
                    Aapka cake plan karna yaad hai
                    <br>
                    Cake khilana yaad hai
                    <br>
                    Ek dusre ko cake khilana yaad hai
                </p>

                <p>
                    Woh freezing cold yaad hai
                    <br>
                    Rock yaad hai
                    <br>
                    Aapka handwritten letter yaad hai
                </p>

                <p>
                    Empty classroom yaad hai
                    <br>
                    Aapka mere liye gaana yaad hai
                    <br>
                    Aur mera paani peene ka natak
                    because mein blush kar raha tha😭✋🏻
                </p>

                <p>
                    Basically...
                    <br><br>
                    <b>
                        YES
                        <br>
                        I REMEMBER. 💗
                    </b>
                </p>

                <p>
                    Aur mujhe lagta hai
                    uss din ki sabse beautiful cheez
                    cake ya letter ya song bhi nhi thi
                </p>

                <p class="quiet">
                    It was the effort behind all of it. 🥹🫶🏻
                </p>

                <p>
                    Aapne mere liye
                    apne din mein jagah banayi
                    <br>
                    time diya
                    <br>
                    plan kiya
                    <br>
                    aur mujhe feel karwaya
                    ki mera birthday
                    aapke liye bhi important tha💗
                </p>

                <p>
                    And I noticed.
                    <br><br>
                    Har cheez. 🥹
                </p>

                <button id="dreamsButton">
                    Ab aapke dreams ki baat karte hain 👑
                </button>

            </section>

        `;

    }


    /* =====================================================
       HER DREAM — MODELING
       ===================================================== */

    else if (event.target.id === "dreamsButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    A little page for your dreams 👑
                </p>

                <h1>
                    Aapko model banna hai na? ✨
                </h1>

                <p>
                    Toh suno madam...
                    <br><br>
                    I genuinely want you to go for it💗
                </p>

                <p>
                    Not just because
                    "you look extremely gorgeous"
                    <br><br>
                    But because
                    I know how much
                    this dream means to you
                </p>

                <p>
                    Aur mujhe bas ye chahiye
                    ki jab bhi aap uss dream ke peeche jao
                    <br><br>
                    toh aapko khud par doubt na ho
                </p>

                <p>
                    Aapko kisi aur jaisa banne ki zarurat nhi hai
                    <br>
                    Kisi aur ke standard ke according
                    khud ko change karne ki zarurat nhi hai
                </p>

                <p class="quiet">
                    YOU'RE ALREADY PERFECT
                    EXACTLY AS YOU ARE. 🥹💗
                </p>
                    Aap jis tarah se hasti ho
                    <br>
                    jis tarah se excited hoti ho
                    <br>
                    jis tarah se gussa karti ho
                    <br>
                    jis tarah se bachha ban jaati ho
                    <br>
                    jis tarah se apne close logon ke saamne
                    comfortable hoti ho
                </p>

                <p>
                    That's YOU.
                </p>

                <p class="quiet">
                    Aur mujhe woh YOU bohot bohot bohot pasand hai. 💗
                </p>

                <p>
                    So when that day comes
                    jab aap apna dream actually chase kar rahi hogi
                    <br><br>
                    I hope aapko ek cheez yaad rahe
                </p>

                <p>
                    there is one bhondu
                    jo aapko dekh ke
                    <br><br>
                    <b>
                        INSANELY PROUD
                    </b>
                    hone wala hai😭🫶🏻💗
                </p>

                <p>
                    Aur haan...
                    <br><br>
                    agar aap itni sundar lagogi
                    toh mein obviously thoda stare karunga😭🫣
                    (Kya mtlb abhi bhi krte ho😭✌🏻, Ab ho hi inni sundar toh kya kar skta hun😭💕)
                </p>

                <p class="quiet">
                    Professional observation hai madam
                    <br>
                    😭✋🏻😂
                </p>

                <button id="threeBirthdaysButton">
                Before your birthday wish... 🎂🌷
                </button>
            </section>

        `;

    }
    /* =====================================================
       THREE BIRTHDAYS 🎂
       ===================================================== */

    else if (event.target.id === "threeBirthdaysButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    Three birthdays. One story. 🎂🌷
                </p>

                <h1>
                    Look how much can change... 🥹💗
                </h1>

                <p>
                    Teen birthdays ke beech
                    kitni saari cheezein change ho sakti hain...
                    <br><br>
                    Aur jab maine ye teen photos
                    ek saath dekhi...
                    <br><br>
                    pata nahi kyun,
                    but it made me smile. 🥹
                </p>


                <div class="birthday-timeline">

                    <div class="birthday-memory">

                        <img
                            src="birthday-2024.jpeg"
                            alt="Princess's birthday in 2024"
                        >

                        <h2>
                            2024 🌷
                        </h2>

                        <p>
                            Aapka 13th birthday. 🎂
                            <br><br>
                            Tab mujhe bilkul idea nahi tha
                            ki do saal baad
                            main aapke 15th birthday ke liye
                            ek poori website bana raha hunga😭💗
                        </p>

                    </div>


                    <div class="birthday-memory">

                        <img
                            src="birthday-2025.jpeg"
                            alt="Princess's birthday in 2025"
                        >

                        <h2>
                            2025 🎈
                        </h2>

                        <p>
                            Aapka 14th birthday.
                            <br><br>
                            Aur somewhere along the way,
                            aap meri life ka
                            important part ban chuki thi. 🥹💗
                        </p>

                    </div>


                    <div class="birthday-memory">

                        <img
                            src="birthday-2026.jpeg"
                            alt="Princess's birthday in 2026"
                        >

                        <h2>
                            2026 🎀
                        </h2>

                        <p>
                            And now...
                            <br><br>
                            Aap 15 ki ho gayi🎂
                            <br><br>
                            Aur main yahan hoon,
                            aapke liye
                            ye poori choti si duniya banaye baitha hoon😭💗
                        </p>

                    </div>

                </div>


                <p class="quiet">
                    Three birthdays.
                    <br>
                    Three different moments.
                    <br><br>
                    And somehow...
                    <br>
                    <b>
                        I'm here for this one🥹🎀
                    </b>
                </p>


                <button id="birthdayWishButton">
                    Now... your birthday wish. 🎂💗
                </button>

            </section>

        `;

    }

    /* =====================================================
       SEPTEMBER 8 — HER BIRTHDAY
       ===================================================== */

   else if (event.target.id === "birthdayWishButton") {

    app.innerHTML = `

        <section class="story-page fade-in">

            <p class="small-text">
                September 8, 2026 — 1:15 PM 🎀
            </p>

            <h1>
                Happiest 15th Birthdayyy Princessss 👑💗
            </h1>

            <p>
                Kabhi kabhi sochta hoon...
                <br><br>
                <b>
                    September 8, 2011.
                </b>
            </p>

            <p>
                1:15 PM.
                <br><br>
                Ek normal si date aur ek normal sa time
                lag sakta hai kisi aur ko...
            </p>

            <p class="quiet">
                But mere liye?
                <br><br>
                Woh din
                <br>
                bohot, bohot special tha.
                🥹🎀💗
            </p>

            <p>
                Kyuki uss din
                duniya mein
                <br><br>
                <b>
                    AAP AAYI THI.
                </b>
            </p>

            <p>
                Us waqt kisi ko kya pata tha
                ki woh chhoti si baby
                <br><br>
                ek din badi hogi,
                apne dreams dekhegi,
                itni saari logon ki life mein
                apni jagah banayegi...
            </p>

            <p>
                Aur mujhe toh bilkul bhi idea nahi tha
                ki years later
                main yahan baith kar
                aapke birthday ke liye
                itni saari memories
                ek website mein likh raha hunga😭💗
            </p>

            <p class="quiet">
                But I'm really glad
                that September 8 happened. 🥹🌷
            </p>

            <p>
                Because if it hadn't...
                <br><br>
                I wouldn't have met you.
                <br>
                I wouldn't have known you.
                <br>
                I wouldn't have heard your laugh.
                <br>
                I wouldn't have seen
                all your little sides.
                <br>
                I wouldn't have these memories.
            </p>

            <p>
                So today,
                I'm not just celebrating
                another birthday.
            </p>

            <p class="quiet">
                I'm celebrating
                the day someone incredibly special
                came into this world. 💗🎀
            </p>

            <p>
                And honestly...
                <br><br>
                I'm really, really grateful
                that somewhere along the way,
                our paths crossed too. 🥹🫶🏻
            </p>

            <p>
                15 years ago,
                you were just beginning your story.
                <br><br>
                And now,
                you're here...
                with dreams,
                memories,
                people who love you,
                and an entire future
                waiting for you.
            </p>

            <p>
                Mujhe nhi pata
                life ne aapke liye
                kya kya likha hai
            </p>

            <p>
                But I genuinely hope
                ki jo bhi likha hai
                usmein bohot saari khushiyan ho
                <br>
                bohot saari hasi ho
                <br>
                bohot saare dreams ho
                <br>
                aur bohot saare moments ho
                jahan aap khud par proud feel karo
                aur kabhi apne aap ko chota feel na karo,
                aur agar kabhi aisi naubat aati hai...
                Mein hu naa🫶🏻💕
            </p>

            <p>
                I hope aap apne dreams chase karo
                <br>
                I hope aap naye places dekho
                <br>
                I hope aap bohot kuch seekho
                <br>
                I hope aap itna haso
                ki cheeks dukhne lage😭😂
            </p>

            <p class="quiet">
                And more than anything...
                <br><br>
                I hope you always remember
                how special you are.
                🥹💗
            </p>

            <button id="birthdayNextButton">
                Aur ek cheez... 🥹
            </button>

        </section>

    `;

}
    /* =====================================================
       BIRTHDAY — REASSURANCE
       ===================================================== */

    else if (event.target.id === "birthdayNextButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    Your 15th chapter 🎀
                </p>

                <h1>
                    This year is yours. 💗
                </h1>

                <p>
                    Aapko kabhi low feel ho
                    <br>
                    kabhi gussa aaye
                    <br>
                    kabhi rona aaye
                    <br>
                    kabhi bas chup rehna ho
                </p>

                <p>
                    You don't have to pretend
                    ki you're okay
                    just because everyone expects you
                    to be okay.
                </p>

                <p class="quiet">
                    Aap strong ho.
                    <br><br>
                    But strong hone ka matlab
                    ye nhi ki aapko sab kuch
                    akele sehna pade. 🫶🏻💗
                </p>

                <p>
                    Gussa ho toh gussa ho
                    <br>
                    Rona hai toh ro
                    <br>
                    Bachha banna hai toh bachha bano
                    <br>
                    Khush ho toh pagalo ki tarah haso😭
                </p>

                <p class="quiet">
                    Bas aap raho. 💗
                </p>

                <p>
                    Aur apne dreams ko
                    kabhi chhota mat samajhna.
                </p>

                <p>
                    Model banna hai?
                    <br>
                    Go for it.
                    <br><br>
                    Kuch aur karna hai?
                    <br>
                    Go for it.
                    <br><br>
                    Kuch completely new try karna hai?
                    <br>
                    GO FOR ITTTT😭💗
                </p>

                <p>
                    There is so much life
                    waiting for you.
                </p>

                <p class="quiet">
                    And I hope you walk into it
                    with confidence,
                    with that smile,
                    and with absolutely no doubt
                    that you deserve good things. 🎀💗
                </p>

                <button id="reassuranceButton">
                    Ek last important cheez... 🥹
                </button>

            </section>

        `;

    }


    /* =====================================================
       REASSURANCE
       ===================================================== */

    else if (event.target.id === "reassuranceButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    Before the last page...
                </p>

                <h1>
                    Please don't feel any pressure because of this 💗
                </h1>

                <p>
                    Ek cheez seriously bolni hai
                    <br><br>
                    Aur ye shayad
                    poori website ki
                    sabse important cheez hai
                </p>

                <p>
                    Aapko ye website dekh ke
                    ye kabhi nhi sochna
                    ki ab aapko kuch return karna hai
                </p>

                <p>
                    Not because I made this
                    <br>
                    Not because maine itna time diya
                    <br>
                    Not because maine itni memories yaad rakhi
                    <br>
                    Not because I love you
                </p>

                <p class="quiet">
                    I did all of this
                    because I WANTED TO 💗
                </p>

                <p>
                    Mujhe aapse kuch nhi chahiye, koi perfect reply nahi chahiye

                <p>
                    Aapko agar bas
                    "pagal nahi toh😭"
                    bolna hai
                    <br>
                    woh bhi chalega😂💗
                </p>

                <p class="quiet">
                    Mere liye woh bhi enough hai, Mein bas chahta hun aapko accha lage, agar ye website 1% bhi aapko accha feel karati hai, socho mera kaam hogya🥹💗
                </p>

                <p>
                    Aap mujhe kuch owe nhi karti

                <p>
                    Main aapki care karta hoon
                    because I genuinely care about you
                </p>

                <p>
                    Aur mere liye
                    kisi ko care karna
                    tabhi beautiful hai
                    jab saamne wala safe feel kare
                    <br><br>
                    pressured nhi
                </p>

                <p class="quiet">
                    So please...
                    <br><br>
                    bas enjoy your birthday. 🫶🏻🎀
                </p>

                <p>
                    Smile karo
                    <br>
                    apne birthday ka maza lo
                    <br>
                    apne dreams ke baare mein socho
                    <br>
                    aur ek baar
                    khud ko meri eyes se dekh lena
                </p>

                <p class="quiet">
                    You'll understand
                    why I think you're so special 🥹💗
                </p>

                <p>
                    And now...
                    <br><br>
                    enough serious bhondu talk😭✋🏻
                </p>

                <p>
                    Birthday girl ko
                    itna emotional karke
                    mein khud hi guilt mein chala jaunga😭😂
                </p>

                <button id="finalButton">
                    Okay... ab ACTUALLY last page 💌
                </button>

            </section>

        `;

    }
    /* =========================================================
   FINAL PAGE
   ========================================================= */

else if (event.target.id === "finalButton") {

    app.innerHTML = `

        <section class="story-page fade-in">

            <p class="small-text">
                For my Princess 🎀
            </p>

            <h1>
                Okay...
                <br>
                ab genuinely last baar bol raha hoon😭💗
            </h1>

            <p>
                Sacchi laga
                itni saari memories ke baad
                mein bas Happy Birthday bolke
                chala jaunga?😭
            </p>

            <p>
                Aise kaise bach jaogii madam👀
            </p>

            <p>
                Itna pyaar kara hai
                <br>
                Itni memories banayi hain
                <br>
                Itna kuch feel kiya hai
                <br>
                toh obviously
                thoda aur bolna padega😭💗
            </p>

            <p>
                Jab meine pehli baar aapko dekha tha
                na
                <br><br>
                mereko bilkul idea nhi tha
                ki ye ladki
                ek din meri life mein
                itni important ho jayegi
            </p>

            <p>
                Mein toh bas dur se dekhta tha
                <br>
                khush hota tha
                <br>
                phir apne kaam mein lag jaata tha
            </p>

            <p>
                Phir woh first conversation hui
                <br>
                jahan mein darr ke maare
                properly behave bhi nhi kar paaya😭
            </p>

            <p>
                Phir apology
                <br>
                30 minutes
                <br>
                DHAK DHAK DHAK
                <br>
                friendship
            </p>

            <p>
                Phir handshake
                <br>
                fights
                <br>
                patch ups
                <br>
                3 AM conversations
                <br>
                Adibearr
                <br>
                edit
                <br>
                Thank You note
                <br>
                birthday
                <br>
                cake
                <br>
                rock
                <br>
                letter
                <br>
                song
            </p>

            <p>
                Aur beech mein
                pata hi nhi chala
                kab aap meri
                <br><br>
                <b>
                    COMFORT PERSON
                </b>
                <br><br>
                ban gayi. 🥹💗
            </p>

            <p>
                Aur honestly...
                <br><br>
                ye cheez mere liye
                bohot bohot bohot special hai
            </p>

            <p>
                Kyuki aapko jaanne ke baad
                mein sirf ye nhi sochta
                ki "meri crush kitni sundar hai"
            </p>

            <p>
                Mein ye sochta hoon
                ki
                <br><br>
                "Yaar...
                <br>
                this person is genuinely so pure hearted and precious to me, I love her" 💗
            </p>

            <p>
                Aapka gussa
                <br>
                Aapki hasi
                <br>
                Aapka bachha banna
                <br>
                Aapka sensitive hona
                <br>
                Aapka comfortable hona
                <br>
                Aapka apne close people ke saamne
                bilkul different side dikhana
            </p>

            <p>
                Sab kuch.
            </p>

            <p class="quiet">
                I love knowing YOU
                <br>
                not just knowing ABOUT you. 🥹💗
            </p>

            <p>
                And if you ever ask me
                meri favourite memory kya hai...
            </p>

            <p>
                Mein genuinely answer nhi de paunga😭
            </p>

            <p>
                First conversation?
                <br>
                Handshake?
                <br>
                That smile?
                <br>
                3 AM talks?
                <br>
                Birthday?
                <br>
                Cake?
                <br>
                Rock?
                <br>
                Letter?
                <br>
                Song?
                <br>
                Edit?
                <br>
                Thank You note?
                <br>
                Random school days?
            </p>

            <p>
                I DON'T KNOWWW😭😭😭
            </p>

            <p class="quiet">
                Because maybe
                my favourite memory
                was never one particular day
                <br><br>
                <b>
                    My favourite memory
                    was getting to know you. 💗🌷
                </b>
            </p>

            <p>
                Woh ladki
                jise mein pehle dur se dekhta tha
                <br><br>
                Woh ladki
                jiske saamne
                pehli baar baat karte waqt
                mera dimaag kaam nhi kar raha tha
                <br><br>
                Woh ladki
                jisko apology bhejne mein
                30 minute lage
                <br><br>
                Woh ladki
                jisse mein friendship maang raha tha
                heart DHAK DHAK karte hue
            </p>

            <p>
                Woh ladki
                jo dheere dheere
                meri comfort person ban gayi
            </p>

            <p class="quiet">
                YOU. 💗
            </p>

            <p>
                And Princess...
                <br><br>
                I don't know
                what the future looks like
            </p>

            <p>
                I don't know
                kitne aur random school days honge
                <br>
                kitni aur conversations hongi
                <br>
                kitni baar aap "Jaooo" bologi😭
                <br>
                kitni baar hum ek dusre ko pareshan karenge
                <br>
                aur kitni baar aap mujhe dekh ke
                bologi
                <br><br>
                <i>
                    "Thappad maar dungi" 😭✋🏻
                </i>
            </p>

            <p>
                But honestly?
            </p>

            <p class="quiet">
                I WANT ALL OF IT. 💕
            </p>

            <p>
                More random conversations
                <br>
                More laughter
                <br>
                More stupid jokes
                <br>
                More school memories
                <br>
                More little moments
                <br>
                More times where we look back later
                and realise
                "ohhh...
                <br>
                that was actually a really good memory😭💗"
            </p>

            <p>
                And one thing
                I really really really hope
                you never forget...
            </p>

            <p>
                You don't have to be perfect
                around me
            </p>

            <p>
                You don't have to hide
                when you're sad
                <br>
                You don't have to hide
                when you're angry
                <br>
                You don't have to pretend
                you're okay
            </p>

            <p class="quiet">
                Aap mere saamne
                apni real self ho sakti ho aapko pata hai🫶🏻💗
            </p>

            <p>
                Aur agar kabhi
                aapko lage
                ki you're not enough...
            </p>

            <p>
                please...
                <br><br>
                meri aankhon se
                ek baar khud ko dekhna🫶🏻💌
            </p>

            <p class="quiet">
                You'll understand
                why I keep saying
                you're special. 🥹💗
            </p>

            <p>
                Aapko model banna hai?
                <br>
                Go for it.
                <br><br>
                Aapko koi aur dream chase karna hai?
                <br>
                Go for it.
                <br><br>
                Aapko kuch naya try karna hai?
                <br>
                GO FOR ITTTT😭💗
            </p>

            <p>
                Your bhondu
                will be standing there
                being unnecessarily proud of you😭🫶🏻
            </p>

            <p>
                Aur haan...
                <br><br>
                thank you.
            </p>

            <p>
                Thank you for that first reply
                <br>
                Thank you for saying yes
                <br>
                Thank you for every conversation
                <br>
                Thank you for every laugh
                <br>
                Thank you for every smile
                <br>
                Thank you for every random memory
                <br>
                Thank you for every time
                you trusted me
                <br>
                Thank you for every time
                you stayed
            </p>

            <p>
                Thank you for letting me
                know you
            </p>

            <p class="quiet">
                And thank you...
                <br><br>
                for letting me become
                a small part
                of your story too. 🫂💗
            </p>

            <p>
                Aur agar ek saal mein
                itni saari memories ban gayi...
                <br><br>
                toh honestly
                mereko bilkul idea nhi
                next chapters mein
                kya kya likha hai😭🎀
            </p>

            <p>
                Bas itna pata hai
                <br><br>
                <b>
                    HAMARI BOHOT SAARI MEMORIES
                    ABHI BAAKI HAIN🌷💗✨
                </b>
            </p>

            <p>
                Aur haan...
                <br><br>
                I LOVVVVEEEEEEEEEEEEEEEE
                YOUUUUUUUUUUUUUUUUUUUUU
                AADITIIIIIIIIIIIIIIIII😭🫶🏻💕
            </p>

            <p>
                Whether aap guccha ho😭🎀
                <br>
                low ho
                <br>
                sad ho
                <br>
                khush ho
                <br>
                dance kar rahi ho
                <br>
                mujhe roast kar rahi ho
                <br>
                ya bas quietly
                apni duniya mein baithi ho...
            </p>

            <p class="quiet">
                I LOVE YOUUUU
                <br>
                AND I CARE ABOUT YOUUU
                <br>
                AND I ALWAYS WILL. 💗
            </p>

            <p>
                Aapko pata hai
                mein perfect nhi hoon
                <br>
                Kabhi stupid hota hoon
                <br>
                Kabhi irritating
                <br>
                Kabhi galat
                <br>
                Kabhi overthinker
                <br>
                Kabhi full bhondu😭✋🏻
            </p>

            <p>
                But I am trying.
                <br><br>
                Genuinely trying.
            </p>

            <p>
                Because aap mere liye
                important ho

            <p>
                So...
                <br><br>
                Happiesttt 15thh Birthdayyy
                Budhhuuuuuuuuuuuuuuu 🎀💌
            </p>

            <p>
                I hope today makes you smile
                <br>
                I hope this year makes you happier
                <br>
                I hope your dreams get closer
                <br>
                I hope you realise
                just how loved and appreciated
                you actually are
            </p>

            <p class="quiet">
                And I hope
                whenever you look back
                at this website
                <br><br>
                you remember
                that one bhondu
                who sat down
                and tried to fit
                an entire year of memories
                into a website
                because apparently
                <br><br>
                <b>
                    "Happy Birthday"
                    wasn't enough😭✋🏻💗
                </b>
            </p>

            <p>
                I remember.
            </p>

            <p>
                I remember the places
                <br>
                I remember the days
                <br>
                I remember the smiles
                <br>
                I remember the fights
                <br>
                I remember the laughs
                <br>
                I remember the little things
                <br>
                I remember your letters
                <br>
                I remember your voice
                <br>
                I remember your effort
            </p>

            <p class="quiet">
                And most importantly...
                <br><br>
                <b>
                    I REMEMBER YOU. 🥹💗
                </b>
            </p>

            <p>
                Thank you for being you
                <br>
                Thank you for letting me
                know you
                <br>
                Thank you for becoming
                one of the most beautiful
                parts of this chapter
            </p>

            <p class="quiet">
                Happiest birthday,
                Princess. 🎀🌷
            </p>

            <p class="quiet">
                Stay exactly as you are.
                <br><br>
                Keep dreaming.
                <br>
                Keep laughing.
                <br>
                Keep being that
                wonderfully chaotic human
                I somehow got lucky enough
                to know. 🥹💗
            </p>

            <p>
                And wherever life takes you...
                <br><br>
                I hope you always remember
                that September 8
                wasn't just another day.
            </p>

            <p class="quiet">
                It was the day
                the world got you. 🌷🎀💗
            </p>

            <p>
                And years later,
                somehow,
                <br><br>
                I got to know you.
            </p>

            <p class="quiet">
                And I'm really,
                really grateful for that. 🥹🫶🏻
            </p>

            <div class="final-signature">

               <p>
    Aapka
</p>

<h2>
    Bhondu 💗
</h2>

<p>
    More than best friend,
    less than boyfriend😭✋🏻
</p>

<p>
    Aapka Ayush.
    <br>
    Aur sirf aapka😭💗
</p>

<p>
    I hope jyada nhi rulaya hogaa,
    mein toh bohot roya hu sab likhte huee,
    haan pagal khushi se hi roya hunn,
    aapne kabhi dukh se nhi rulaya hainn😭🫶🏻💕
</p>

<p>
    Honestly, Thankyou for Everything.
    <br>
    Winter fav bana diya haii😭💕
    <br><br>
    Winter 2025 was the best time ever in my life,
    aapke saath jitna time spend kiya hai
    sab best hai,
    Kuchuupuchuu kahinn kii🫶🏻💕
</p>

<p>
    Happyy Birthdayy to meraa bacchaa
    once againn💌✨🧿
</p>

            </div>

        </section>

        `;

    }

});