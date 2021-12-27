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
        watchMovieList(allMovies)
        event.target.value = "";
    }
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    watchMovieList(allMovies)
}

function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched
    watchMovieList(allMovies)
}

// function ele(type, attr = {}, children) {
//     let element = document.createElement(type);
//     for (let key in attr) {
//         if (key.startsWith("data-")) {
//             element.setAttribute(key, attr[key]);
//         }
//         else {
//             element[key] = attr[key];
//         }
//     }

//         if(typeof children === "object"){
//             element.append(children)
//         }
//         if(typeof children === "string"){
//             let node = document.createTextNode(children);
//             element.append(node)
//         }

//     return element;
// }


function watchMovieList(allMovies) {

    let ui = allMovies.map((x, i) => {
        let li = React.createElement("li", { className: "list" }, x.name,
        React.createElement("input", { className: "margin", type: "checkbox", checked: x.watched, id: i,onClick:handleChange }),
        React.createElement("button", { "data-id": i, className: "button", onClick:deleteMovie }, "X"),
        React.createElement("hr", { className: "border" }))
        return li
    })
    ReactDOM.render(ui, ul)

}