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

let ele = React.createElement;

function watchMovieList(event) {

    let ui = allMovies.map((x, i) => {
        let li = ele("li", { className: "list" }, x.name,
        ele("input", { className: "margin", type: "checkbox", checked: x.watched, id: i,onChange:handleChange }),
        ele("button", { "data-id": i, className: "button", onChange:deleteMovie }, "X"),
        ele("hr", { className: "border" }))
        return li
    })
    ReactDOM.render(ui, ul)

}