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

function ele(type, attr = {}, children) {
    let element = document.createElement(type);
    for (let key in attr) {
        if (key.startsWith("data-")) {
            element.setAttribute(key, attr[key]);
        }
        else {
            element[key] = attr[key];
        }
    }
    
        if(typeof children === "object"){
            element.append(children)
        }
        if(typeof children === "string"){
            let node = document.createTextNode(children);
            element.append(node)
        }

    return element;
}

function watchMovieList(event) {
    ul.innerHTML = ""
    allMovies.forEach((x, i) => {
        let li = ele("li",{className:"list"},x.name)
        li.innerText = x.name
        var input = ele("input",{className:"margin",type:"checkbox",checked:x.watched,id:i});
        input.addEventListener("change", handleChange)
        li.prepend(input);
        let button = ele("button",{"data-id":i,className:"button"},"X")
        li.append(button);
        let hr = ele("hr",{className:"border"})
        button.addEventListener("click", deleteMovie)
        ul.append(li, hr);
    })


}