map_cover = document.getElementById("c2")
hide_button = document.getElementById("HideMapButton")
populate_gallery()

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

function populate_gallery(){
    selector = document.getElementById("gallery_selector")

    for(img_name of gallery_contents){
        const new_img = document.createElement("img")
        new_img.className = "gallery_thumbnail"
        new_img.src = "media/gallery/" + img_name

        selector.appendChild(new_img)
    }
}
