
const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
        .then(response => response.json()) // promise of json data
        .then(json => displayLessons(json.data))  // get the json data
}

// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }


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
                        <button class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-circle-question"></i>Lesson - ${lesson.level_no}
                        </button>
        
        `
        // 2-3. append into container
        levelContainer.append(btnDiv);
    }

}

loadLessons();
// displayLessons();