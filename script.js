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

    if (document.getElementById("musicPlayer")) return;

    const player = document.createElement("div");

    player.id = "musicPlayer";

    player.innerHTML = `
        <div class="music-player-inner">

            <button id="musicPlayButton">
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

            <select id="songSelector">

                ${songs.map((song, index) => `
                    <option value="${index}">
                        ${song.title}
                    </option>
                `).join("")}

            </select>

        </div>

        <audio id="backgroundAudio"></audio>
    `;

    document.body.appendChild(player);

    audio = document.getElementById("backgroundAudio");

    audio.src = songs[0].file;

    document.getElementById("musicPlayButton")
        .addEventListener("click", toggleMusic);

    document.getElementById("songSelector")
        .addEventListener("change", (event) => {

            currentSong = Number(event.target.value);

            changeSong(currentSong);

        });
}


/* =========================================================
   TOGGLE MUSIC
   ========================================================= */

function toggleMusic() {

    if (!audio) return;

    const button = document.getElementById("musicPlayButton");

    if (audio.paused) {

        audio.play()
            .then(() => {
                button.textContent = "❚❚";
            })
            .catch(() => {
                button.textContent = "▶";
            });

    } else {

        audio.pause();

        button.textContent = "▶";

    }
}


/* =========================================================
   CHANGE SONG
   ========================================================= */

function changeSong(index) {

    if (!audio) return;

    audio.src = songs[index].file;

    document.getElementById("musicTitle").textContent =
        songs[index].title;

    document.getElementById("songSelector").value = index;

    audio.play()
        .then(() => {
            document.getElementById("musicPlayButton").textContent = "❚❚";
        })
        .catch(() => {
            document.getElementById("musicPlayButton").textContent = "▶";
        });
}


/* =========================================================
   MEMORY SYSTEM
   ========================================================= */

function showMemory(index) {

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
                    Memory ${index + 1} / ${memories.length}
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
                        ? `<button id="prevMemoryButton">
                                ← Back
                           </button>`
                        : ""
                    }

                    <button id="nextMemoryButton">
                        ${
                            index === memories.length - 1
                            ? "There's more... →"
                            : "Keep walking →"
                        }
                    </button>

                </div>

            </div>

        </section>
    `;
}


createMusicPlayer();


/* =========================================================
   STORY NAVIGATION
   ========================================================= */

document.addEventListener("click", (event) => {


    /* =====================================================
       OPENING
       ===================================================== */

    if (event.target.id === "startButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    Before the story
                </p>

                <h1>
                    Before we became <i>us</i>... 🎀
                </h1>

                <p>
                    Our fathers were already best friends,
                    so you weren't exactly a stranger to me.
                </p>

                <p>
                    You were simply
                    my father's best friend's daughter.
                    <br><br>
                    Someone I knew.
                    Someone I would see sometimes.
                </p>

                <p>
                    But knowing someone exists
                    and actually getting to know them
                    are two very different things.
                </p>

                <p class="quiet">
                    I had no idea
                    how beautiful that second part
                    was going to be. 🦋
                </p>

                <button id="firstMeetingButton">
                    Go back a little further → 💗
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
                    Before the friendship
                </p>

                <h1>
                    Then I started noticing you. 🦋
                </h1>

                <p>
                    I still remember the feeling
                    of seeing you back then.
                </p>

                <p>
                    You weren't just
                    "someone I knew" anymore.
                </p>

                <p>
                    There was something about you
                    that made my attention
                    find you without even trying.
                </p>

                <p>
                    And eventually,
                    I had to accept
                    that I had a crush on you. 😭
                </p>

                <p class="quiet">
                    Looking back,
                    I think my taste was
                    pretty good. 🫣💗
                </p>

                <button id="schoolButton">
                    Now let's go to school → 🏫
                </button>

            </section>

        `;
    }


    /* =====================================================
       SCHOOL INTRO
       ===================================================== */

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
                    chapters of my life.
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


    /* =====================================================
       BEGIN MEMORIES
       ===================================================== */

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
                        30 memories later...
                    </p>

                    <h1>
                        And that's only a tiny part of it. 💗
                    </h1>

                    <p>
                        Thirty photos.
                    </p>

                    <p>
                        But there are so many memories
                        that never had a camera pointed at them.
                    </p>

                    <p>
                        Conversations.
                        <br>
                        Laughs.
                        <br>
                        Random walks.
                        <br>
                        Little smiles.
                        <br>
                        Days that felt completely ordinary
                        at the time.
                    </p>

                    <p class="quiet">
                        And somehow,
                        those ordinary days
                        became some of my favourites.
                    </p>

                    <p>
                        Because eventually,
                        I wasn't just collecting memories.
                    </p>

                    <p class="quiet">
                        I was collecting moments with you. 🦋
                    </p>

                    <button id="friendshipButton">
                        Now let's go back to the beginning → 💌
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
       AUGUST 21 — FRIENDSHIP
       ===================================================== */

    else if (event.target.id === "friendshipButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    21 August 2025
                </p>

                <h1>
                    One little question. 💌
                </h1>

                <p>
                    I spent around thirty minutes
                    writing an apology.
                </p>

                <p>
                    Thirty minutes
                    for one message. 😭
                </p>

                <p>
                    Then I sent it.
                    <br><br>
                    And waited.
                    <br>
                    And checked my phone.
                    <br>
                    And waited again.
                </p>

                <p>
                    When you replied,
                    I finally asked:
                </p>

                <p class="quiet">
                    <i>
                        "I know it's too quick,
                        but can we be friends?"
                    </i>
                </p>

                <p>
                    And you said yes.
                </p>

                <p class="quiet">
                    One tiny "yes".
                    <br><br>
                    So many memories after it.
                    🥹🫶🏻
                </p>

                <button id="friendshipAfterButton">
                    And then we slowly became us → 🦋
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
                    I got to know the person behind the crush. 💗
                </h1>

                <p>
                    And honestly,
                    that became my favourite part.
                </p>

                <p>
                    I got to know your little habits.
                    <br>
                    Your sense of humour.
                    <br>
                    The things you care about.
                    <br>
                    The things that make you happy.
                    <br>
                    The things you dream about.
                </p>

                <p>
                    I got to know
                    the person behind
                    the first impression.
                </p>

                <p class="quiet">
                    And somehow...
                    <br><br>
                    my crush turned out
                    to be an even better person
                    than I had imagined. 🫣💗
                </p>

                <p>
                    Honestly,
                    quite unfair of you. 😭
                </p>

                <button id="littleThingsButton">
                    Keep going → 🎀
                </button>

            </section>

        `;
    }


    /* =====================================================
       LITTLE THINGS
       ===================================================== */

    else if (event.target.id === "littleThingsButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    The in-between
                </p>

                <h1>
                    You slowly became part of my everyday. 🌷
                </h1>

                <p>
                    There wasn't one huge moment.
                </p>

                <p>
                    It happened quietly.
                </p>

                <p>
                    A conversation became
                    a regular conversation.
                    <br><br>
                    A joke became an inside joke.
                    <br><br>
                    A random day became
                    something worth remembering.
                </p>

                <p>
                    And then,
                    whenever something happened,
                    I started thinking:
                </p>

                <p class="quiet">
                    "I need to tell her this." 😭
                </p>

                <p>
                    Something funny?
                    Tell you.
                    <br><br>
                    Something exciting?
                    Tell you.
                    <br><br>
                    Something bothering me?
                    Somehow,
                    tell you that too.
                </p>

                <p class="quiet">
                    That's when I realised
                    you had become
                    one of my safest places. 🫶🏻💗
                </p>

                <button id="preBirthdayButton">
                    There's one day I want to remember... 🦋
                </button>

            </section>

        `;
    }


    /* =====================================================
       PRE-BIRTHDAY — ONLY 3 STUDENTS
       ===================================================== */

    else if (event.target.id === "preBirthdayButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    One ordinary school day
                </p>

                <h1>
                    I went just to see you. 😭
                </h1>

                <p>
                    There was going to be
                    no proper studying that day.
                </p>

                <p>
                    And somehow,
                    only three students
                    actually came to school.
                </p>

                <p>
                    Yes.
                    <br>
                    Three. 😭✋🏻
                </p>

                <p>
                    And I still went.
                </p>

                <p class="quiet">
                    Not because there was
                    anything particularly important
                    happening at school.
                </p>

                <p>
                    I just wanted to see you.
                </p>

                <p>
                    Sometimes that's really
                    all the reason you need.
                </p>

                <button id="preBirthdayMomentButton">
                    And then you noticed me... 👀
                </button>

            </section>

        `;
    }


    /* =====================================================
       PRE-BIRTHDAY — KYA HUA
       ===================================================== */

    else if (event.target.id === "preBirthdayMomentButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    That little moment
                </p>

                <h1>
                    "Kya hua?" 😭
                </h1>

                <p>
                    There was this moment
                    when I was looking at you
                    while you were looking somewhere else.
                </p>

                <p>
                    Then you noticed.
                </p>

                <p>
                    You looked at me and asked:
                    <br><br>
                    <i>
                        "Kya hua?"
                    </i>
                </p>

                <p>
                    And my brain basically
                    forgot how conversations work. 😭✋🏻
                </p>

                <p class="quiet">
                    Because apparently,
                    looking at you for a little too long
                    is enough to make a bhondu
                    completely lose his words. 🫣💗
                </p>

                <p>
                    I still remember that moment
                    because it was so simple.
                </p>

                <p class="quiet">
                    Just you noticing me.
                    <br>
                    And me being very happy
                    that you did.
                </p>

                <button id="giftsButton">
                    Now... the little things I got to keep → 🎁
                </button>

            </section>

        `;
    }


    /* =====================================================
       GIFTS / PHYSICAL MEMORIES
       ===================================================== */

    else if (event.target.id === "giftsButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    The little collection
                </p>

                <h1>
                    Things I got to keep. 🎁🎀
                </h1>

                <p>
                    Some things are valuable
                    because of what they are.
                </p>

                <p>
                    And some are valuable
                    because of who they came from.
                </p>

                <p class="quiet">
                    These belong to the second category. 🥹
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
                            Something written by you
                            that I got to keep.
                        </p>

                    </div>


                    <div class="artifact-card">

                        <h2>
                            📝 Your little note
                        </h2>

                        <div class="artifact-photo">
                            <img
                                src="thank-you.jpg"
                                alt="Thank you note"
                            >
                        </div>

                        <p>
                            Small enough to hold in one hand.
                            <br>
                            Special enough to keep.
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
                            A birthday gift from you.
                            <br><br>
                            Yes, I remember. 😭💗
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
                            December 4, 2025.
                            <br><br>
                            One tiny exchange.
                            One very memorable day.
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
                            Wapis dena bhul gya tha😭😭
                            <br>
                            One bhulakkad bhondu.
                            😭✌🏻
                        </p>

                    </div>

                    <!--
                    ADD MORE GIFTS HERE.

                    <div class="artifact-card">

                        <h2>
                            🎁 Gift name
                        </h2>

                        <div class="artifact-photo">
                            <img
                                src="gift-photo.jpg"
                                alt="Gift name"
                            >
                        </div>

                        <p>
                            Your personal little story here. 💗
                        </p>

                    </div>
                    -->

                </div>

                <p class="quiet">
                    A tiny museum of things
                    that became memories. 🎀
                </p>

                <button id="birthdayChapterButton">
                    Now... December 20 → 🎂
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
                    My birthday. 🎂
                </h1>

                <p>
                    I remember that morning
                    surprisingly clearly.
                </p>

                <p>
                    It was foggy.
                </p>

                <p>
                    I had my birthday outfit on.
                </p>

                <p>
                    And then you noticed.
                </p>

                <p>
                    You looked at me and said:
                    <br><br>
                    <b>
                        "Acche lag rahe ho."
                    </b>
                </p>

                <p class="quiet">
                    You probably had no idea
                    how much that one sentence
                    was going to stay in my head. 😭🫣
                </p>

                <p>
                    Coming from you,
                    compliments were never
                    exactly easy to ignore.
                </p>

                <button id="birthdayEyeContactButton">
                    And then the day kept going... → 🥹
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
                    December 20 — later
                </p>

                <h1>
                    And then came your plan. 🎂💗
                </h1>

                <p>
                    You had planned the cake yourself.
                </p>

                <p>
                    And somehow,
                    you made it happen
                    in the middle of everything
                    going on that day.
                </p>

                <p>
                    We got our little birthday moment.
                </p>

                <p>
                    You cut the cake.
                    <br>
                    You fed me cake.
                    <br>
                    I fed you cake.
                </p>

                <p>
                    And honestly,
                    the thing I remember most
                    is that you had put thought into it.
                </p>

                <p class="quiet">
                    You planned it.
                    <br>
                    You made the effort.
                    <br>
                    And I noticed every bit of it. 🥹💗
                </p>

                <button id="birthdayRockButton">
                    Then came the rock → 🪨
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
                    The rock
                </p>

                <h1>
                    It was freezing. 😭
                </h1>

                <p>
                    It was genuinely cold.
                </p>

                <p>
                    But you had planned it,
                    so obviously
                    we were going through with it.
                </p>

                <p>
                    And there we were,
                    sitting there in the cold,
                    doing the thing
                    we had planned.
                </p>

                <p>
                    Then you gave me
                    my handwritten birthday letter.
                </p>

                <p class="quiet">
                    Your handwriting.
                    <br>
                    Your words.
                    <br>
                    My birthday.
                    💌
                </p>

                <p>
                    I don't think I need
                    to explain much more than that.
                </p>

                <p class="quiet">
                    I just know
                    I was very lucky that day. 🥹
                </p>

                <button id="birthdayClassroomButton">
                    And then came another memory... → 🫶🏻
                </button>

            </section>

        `;
    }


    /* =====================================================
       DECEMBER 20 — EMPTY CLASSROOM
       ===================================================== */

    else if (event.target.id === "birthdayClassroomButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    Later that day
                </p>

                <h1>
                    An empty classroom. 🥹
                </h1>

                <p>
                    We ended up in a classroom
                    that belonged to neither of us.
                </p>

                <p>
                    Just an empty classroom.
                    <br>
                    Nothing particularly special about it.
                </p>

                <p>
                    Except that you were there.
                </p>

                <p>
                    And then you sang for me.
                </p>

                <p>
                    I was sitting there
                    trying very hard
                    to behave like a normal human being.
                </p>

                <p class="quiet">
                    I failed. 😭✋🏻
                </p>

                <p>
                    I literally pretended
                    to drink water
                    because I was blushing so much.
                </p>

                <p class="quiet">
                    I still remember
                    exactly how that felt.
                    🥹💗
                </p>

                <button id="birthdayReflectionButton">
                    I really did remember all of it → 💗
                </button>

            </section>

        `;
    }


    /* =====================================================
       DECEMBER 20 — COMPLETE RECAP
       ===================================================== */

    else if (event.target.id === "birthdayReflectionButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    December 20, 2025
                </p>

                <h1>
                    I remember. 🥹
                </h1>

                <p>
                    I remember the foggy morning.
                </p>

                <p>
                    I remember my birthday outfit.
                </p>

                <p>
                    I remember you noticing it.
                </p>

                <p>
                    I remember you saying
                    "Acche lag rahe ho."
                </p>

                <p>
                    I remember that little moment
                    that morning.
                </p>

                <p>
                    I remember the cake
                    you had planned.
                </p>

                <p>
                    I remember you feeding me cake
                    and me feeding you cake.
                </p>

                <p>
                    I remember how cold it was.
                </p>

                <p>
                    I remember the rock.
                </p>

                <p>
                    I remember the handwritten letter.
                </p>

                <p>
                    I remember that empty classroom.
                </p>

                <p>
                    I remember you singing.
                </p>

                <p>
                    I remember pretending
                    to drink water
                    because I was blushing.
                    😭
                </p>

                <p class="quiet">
                    Basically...
                    <br><br>
                    yes.
                    <br>
                    I remember all of it.
                    💗
                </p>

                <p>
                    And I think that's what made
                    that birthday so special.
                </p>

                <p class="quiet">
                    You had planned things.
                    <br>
                    You put effort into them.
                    <br>
                    And I noticed.
                    🥹🫶🏻
                </p>

                <button id="dreamsButton">
                    Now there's something I want to tell you → 👑
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
                    A little page for your dreams
                </p>

                <h1>
                    I hope you go for it. ✨
                </h1>

                <p>
                    I know you want to become a model.
                </p>

                <p>
                    And I genuinely hope
                    you chase that dream.
                </p>

                <p>
                    Because I don't think
                    you need to become someone else
                    to deserve that dream.
                </p>

                <p class="quiet">
                    You're already perfect
                    exactly as you are. 🥹💗
                </p>

                <p>
                    I just hope you get the chance
                    to show the world
                    everything that makes you,
                    <i>you.</i>
                </p>

                <p>
                    I hope you walk into every room
                    knowing your own worth.
                </p>

                <p>
                    I hope you keep dreaming big.
                </p>

                <p>
                    And when that day comes...
                </p>

                <p class="quiet">
                    your bhondu is going to be
                    <b>insanely proud.</b> 😭🫶🏻
                </p>

                <p>
                    Although...
                    if you look that good doing it,
                    I might have to pretend
                    I wasn't staring. 🫣
                </p>

                <button id="herBirthdayButton">
                    Now let's celebrate you → 🎀
                </button>

            </section>

        `;
    }


    /* =====================================================
       SEPTEMBER 8
       ===================================================== */

    else if (event.target.id === "herBirthdayButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    September 8, 2026 — 1:15 PM
                </p>

                <h1>
                    Your turn. 👑🎀
                </h1>

                <p>
                    And finally...
                    we've reached your day.
                </p>

                <p>
                    Fifteen years ago,
                    at 1:15 PM,
                    you entered this world.
                </p>

                <p class="quiet">
                    And years later,
                    somehow,
                    you became one of
                    my favourite people in it.
                    🥹💗
                </p>

                <p>
                    Today isn't about
                    everything that's already happened.
                </p>

                <p>
                    It's about everything
                    that's still waiting for you.
                </p>

                <p>
                    Your dreams.
                    <br>
                    Your plans.
                    <br>
                    Your little goals.
                    <br>
                    Your biggest ones.
                </p>

                <p>
                    All the places you'll go.
                    <br>
                    All the things you'll learn.
                    <br>
                    All the versions of yourself
                    you haven't met yet.
                </p>

                <p class="quiet">
                    I hope this year is kind to you.
                    <br>
                    I hope it makes you smile a lot.
                    <br>
                    And I hope it gives you
                    countless reasons to be proud. 🌷
                </p>

                <button id="finalButton">
                    One last little page... 💌
                </button>

            </section>

        `;
    }


    /* =====================================================
       FINAL PAGE
       ===================================================== */

    else if (event.target.id === "finalButton") {

        app.innerHTML = `

            <section class="story-page fade-in final-page">

                <p class="small-text">
                    For my Princess
                </p>

                <h1>
                    One last thing. 🎀
                </h1>

                <p>
                    I started making this
                    because I wanted to give you
                    something for your birthday.
                </p>

                <p>
                    But while putting everything together,
                    I realised I was doing something
                    a little different.
                </p>

                <p>
                    I was going through
                    a year of my life
                    and noticing how often
                    you were somewhere inside it.
                </p>

                <p>
                    In the places.
                    <br>
                    In the conversations.
                    <br>
                    In the little things.
                    <br>
                    In the days I remember.
                </p>

                <p class="quiet">
                    And I think that's
                    what makes you so special to me.
                    🥹💗
                </p>

                <p>
                    Not one giant moment.
                </p>

                <p>
                    Not one particular day.
                </p>

                <p>
                    It's all the little moments
                    put together.
                </p>

                <p>
                    The girl I first noticed.
                    <br><br>
                    The girl I was nervous around.
                    <br><br>
                    The girl I asked to be my friend.
                    <br><br>
                    The girl who slowly became
                    someone I could tell things to.
                </p>

                <p>
                    And now...
                    <br><br>
                    you're someone
                    I genuinely care about
                    more than I know how to put into words.
                </p>

                <p>
                    I don't need our story
                    to be perfect.
                </p>

                <p>
                    I just want it to keep
                    being ours.
                </p>

                <p>
                    More ordinary days.
                    <br>
                    More random conversations.
                    <br>
                    More laughter.
                    <br>
                    More memories
                    we don't realise are memories
                    until much later.
                </p>

                <p class="quiet">
                    More little moments.
                    <br>
                    More stories.
                    <br>
                    More us. 🦋💗
                </p>

                <p>
                    I don't know what every future chapter
                    is going to look like.
                </p>

                <p>
                    And that's okay.
                </p>

                <p class="quiet">
                    We can just make it
                    one memory at a time.
                    🫶🏻
                </p>

                <p>
                    And if you ever come back
                    to this website someday,
                    I hope you smile
                    at how much effort
                    your bhondu put into it. 😭🎀
                </p>

                <p>
                    Because more than anything,
                    I wanted this website
                    to tell you one simple thing:
                </p>

                <p class="quiet">
                    <b>
                        I remember.
                    </b>
                </p>

                <p>
                    I remember the places.
                    <br>
                    I remember the days.
                    <br>
                    I remember the little things.
                    <br><br>
                    And most importantly...
                    <br>
                    I remember <i>you.</i>
                </p>

                <p class="quiet">
                    And I'm still very glad
                    I asked you that question
                    on August 21. 🥹💗
                </p>

                <h2 class="final-love">
                    Happiest 15th Birthday,
                    Princess. 👑🌷
                </h2>

                <p>
                    I hope you laugh a lot.
                    <br>
                    Dream even bigger.
                    <br>
                    Chase every beautiful thing
                    you want for yourself.
                    <br>
                    And always remember
                    just how wonderful you are.
                </p>

                <p class="quiet">
                    Thank you for being you.
                    <br><br>
                    And thank you for letting
                    your bhondu be a small part
                    of your story too. 🫶🏻
                </p>

                <h2>
                    I love you. 💗
                </h2>

                <p class="quiet">
                    Happiesttt 15thh Birthdayyy
                    Budhhuuuuu. 🎀💌
                </p>

                <p class="quiet">
                    — Your bhondu mitrr 🦋
                </p>

            </section>

        `;
    }

});
/* =========================================================
   REASSURANCE PAGE — NO PRESSURE, JUST LOVE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (event.target.id === "herBirthdayButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    One thing I want you to know
                </p>

                <h1>
                    No pressure. Just something from me. 💗
                </h1>

                <p>
                    Before we get to your birthday...
                    there's one thing I really want you to know.
                </p>

                <p>
                    You never have to feel like
                    you owe me anything because of this.
                </p>

                <p>
                    Not because I made this.
                    <br>
                    Not because I remember so much.
                    <br>
                    Not because I care about you.
                </p>

                <p class="quiet">
                    I do all of that
                    because I genuinely want to. 🫶🏻
                </p>

                <p>
                    You don't have to give me
                    anything back.
                </p>

                <p>
                    You don't have to find
                    the perfect words.
                </p>

                <p>
                    You don't have to make
                    this moment anything more
                    than what it naturally is.
                </p>

                <p>
                    I just wanted to make something
                    that made you smile.
                </p>

                <p>
                    Something that showed you
                    that the little things mattered.
                </p>

                <p class="quiet">
                    Because they did.
                    <br>
                    They still do. 🥹💗
                </p>

                <p>
                    Whatever life looks like,
                    whatever changes,
                    whatever new chapters come along...
                </p>

                <p>
                    I'll always be grateful
                    that I got to know you
                    the way I did.
                </p>

                <p class="quiet">
                    And I'm never going to
                    turn that gratitude
                    into an expectation. 🌷
                </p>

                <p>
                    So please don't look at this
                    and think you need to
                    say or do anything.
                </p>

                <p>
                    Just smile.
                    <br>
                    Maybe blush a little. 🫣
                    <br>
                    And enjoy your birthday.
                </p>

                <p class="quiet">
                    That's genuinely enough for me. 💗
                </p>

                <p>
                    I care about you.
                    <br>
                    A lot.
                </p>

                <p>
                    And I think caring about someone
                    should make them feel safe,
                    not pressured.
                </p>

                <p class="quiet">
                    So this page is simply me saying:
                    <br><br>
                    <b>
                        You are loved.
                        <br>
                        You are appreciated.
                        <br>
                        And you don't owe me a thing.
                    </b>
                    🥹🫶🏻
                </p>

                <p>
                    Now...
                    enough serious bhondu talk. 😭✋🏻
                </p>

                <button id="reassuranceBirthdayButton">
                    Okay, NOW it's your birthday → 🎀👑
                </button>

            </section>

        `;
    }


    /* =====================================================
       CONTINUE TO BIRTHDAY
       ===================================================== */

    else if (event.target.id === "reassuranceBirthdayButton") {

        app.innerHTML = `

            <section class="story-page fade-in">

                <p class="small-text">
                    September 8, 2026 — 1:15 PM
                </p>

                <h1>
                    Your turn. 👑🎀
                </h1>

                <p>
                    And finally...
                    we've reached your day.
                </p>

                <p>
                    Fifteen years ago,
                    at 1:15 PM,
                    you entered this world.
                </p>

                <p class="quiet">
                    And years later,
                    somehow,
                    you became one of
                    my favourite people in it.
                    🥹💗
                </p>

                <p>
                    Today isn't about
                    everything that's already happened.
                </p>

                <p>
                    It's about everything
                    that's still waiting for you.
                </p>

                <p>
                    Your dreams.
                    <br>
                    Your plans.
                    <br>
                    Your little goals.
                    <br>
                    Your biggest ones.
                </p>

                <p>
                    All the places you'll go.
                    <br>
                    All the things you'll learn.
                    <br>
                    All the versions of yourself
                    you haven't met yet.
                </p>

                <p class="quiet">
                    I hope this year is kind to you.
                    <br>
                    I hope it makes you smile a lot.
                    <br>
                    And I hope it gives you
                    countless reasons to be proud. 🌷
                </p>

                <button id="finalButton">
                    One last little page... 💌
                </button>

            </section>

        `;
    }

});
/* =========================================================
   1:15 PM — BIRTHDAY UNLOCK TIMER
   ========================================================= */

(function birthdayUnlock() {

    const button = document.getElementById("startButton");
    const timer = document.getElementById("countdown");

    if (!button || !timer) return;

    // September 8, 2026 — 1:15 PM IST
    const unlockTime = new Date("2026-09-08T13:15:00+05:30").getTime();

    function updateCountdown() {

        const now = Date.now();
        const difference = unlockTime - now;

        if (difference <= 0) {

            button.disabled = false;
            button.textContent = "Begin our story →";
            timer.textContent = "It's time. 🎀✨";

            clearInterval(countdownInterval);

            return;
        }

        const totalSeconds = Math.floor(difference / 1000);

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        timer.textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }

    updateCountdown();

    const countdownInterval = setInterval(updateCountdown, 1000);

})();