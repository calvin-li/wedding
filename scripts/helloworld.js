map_cover = document.getElementById("c2")
hide_button = document.getElementById("HideMapButton")

function toggleMap(){
    toggle_fade(map_cover)
    toggle_fade(hide_button)
}

function toggle_fade(element){
    for(fade_class of ["fadeaway", "comeback"]){
        toggle(element, fade_class)
    }
}

function toggle(element, t_class){
    console.log("toggle")
    if(element.classList.contains(t_class)){
        element.classList.remove(t_class)
    } else {
        element.classList.add(t_class)
    }
}