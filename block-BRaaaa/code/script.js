let input = document.querySelector("input");
let ul = document.querySelector("ul");
let allMovies = [{
    name: "Forest Gump",
    watched: "true"
}, {
    name: "Titanic",
    watched: "true"
}]
input.addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        allMovies.push({
            name: event.target.value,
            watched: false
        })
        event.target.value = "";
        watchMovieList(event)
        event.target.value = "";
    }
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    watchMovieList()
}
function handleChange(event) {
    let id = event.target.id;
    console.log(id);

    allMovies[id].watched = !allMovies[id].watched
}
function watchMovieList(event) {
    ul.innerHTML = ""
    allMovies.forEach((x, i) => {
        let li = document.createElement("li")
        li.classList.add("list");
        li.innerText = x.name
        var checkbox = document.createElement("input");
        checkbox.style.margin = "0 1rem"
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = x.watched
        checkbox.id = i
        checkbox.addEventListener("change", handleChange)
        li.prepend(checkbox);
        let button = document.createElement("button")
        button.innerText = "X";
        button.setAttribute("data-id", i)
        button.classList.add("button")
        li.append(button);
        let hr = document.createElement("hr")
        hr.style.border = "1px dashed white"

        button.addEventListener("click", deleteMovie)
        ul.append(li, hr);
    })


}