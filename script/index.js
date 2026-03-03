
const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
        .then(response => response.json()) // promise of json data
        .then(json => displayLessons(json.data))  // get the json data
}

loadLessons();

// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }



/* Display all lessons buttons  */
const displayLessons = (lessons) => {

    // 1. get the container and empty
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = "";

    // 2. get into every lessons
    for (const lesson of lessons) {
        console.log(lesson);

        // 2-1. create Element
        const btnDiv = document.createElement("div");

        // 2-2. add content to innerHTML
        btnDiv.innerHTML = `
                        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
                            <i class="fa-solid fa-circle-question"></i>Lesson - ${lesson.level_no}
                        </button>
        
        `
        // 2-3. append into container
        levelContainer.append(btnDiv);
    }

}

// displayLessons();



/* get word by level  */
const loadLevelWord = (id) => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            removeActive();  // --> remove all active class
            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            // console.log(clickBtn);
            clickBtn.classList.add("active");  // --> add active in clicked button
            displayLevelWord(json.data)
        })

}


/* remove active style from button */
const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    // console.log(lessonButtons);
    lessonButtons.forEach(button => {
        button.classList.remove("active");
    })
}


// {
//     "id": 3,
//     "level": 2,
//     "word": "Cautious",
//     "meaning": "সতর্ক",
//     "pronunciation": "কশাস"
// }


/* display word card by level */
const displayLevelWord = (words) => {
    // console.log(Words)

    // 1. get the container and empty
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    // handle error for length is zero
    if(words.length == 0){
        wordContainer.innerHTML = `
        <div class="text-center col-span-full rounded-xl py-10 space-y-2">
        <img src="./assets/alert-error.png" class="mx-auto" />
            <p class="font-bangla text-gray-500 font-medium">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bangla text-4xl font-bold">নেক্সট Lesson এ যান</h2>
        </div>
        
        `;
        return;
    }

    // 2. get into every word 
    words.forEach(word => {
        // console.log(word);

        // 2-1. create element
        const card = document.createElement("div");

        // 2-2. add innerHTML into container
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-sky-300">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
            <p class="font-semibold">Meaning / Pronounciation</p>
            <div class="font-bangla text-2xl font-medium">${word.meaning? word.meaning : "অর্থ পাওয়া যায়নি" } / ${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি"}</div>
            <div class="flex justify-between items-center">
                <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF30] hover:bg-[#1A91FF90]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF30] hover:bg-[#1A91FF90]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
             
        `

        // 2-3. append into container 
        wordContainer.append(card);
    });


}


