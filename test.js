
/* create synonyms in modal */
const createElements = (arr) => {
    // console.log(arr);

    const htmlElements = arr.map(elem => `<span class="btn">${elem}</span>`)
    console.log(htmlElements.join(" "))
}


const synonyms = ["hello", "hi", "konnichiwa"];
createElements(synonyms);