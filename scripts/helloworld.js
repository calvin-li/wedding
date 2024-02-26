map_cover = document.getElementById("c2")
hide_button = document.getElementById("HideMapButton")
gallery_selected_img = document.getElementById("gallery_selected_img")
populate_gallery()

var gallery_selected_img_name = "eiffel.jpg"
update_gallery_selected()

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

function update_gallery_selected(img_name = gallery_selected_img_name){
    gallery_selected_img.src = `media/gallery/${img_name}`
}

function populate_gallery(){
    selector = document.getElementById("gallery_selector")

    for(img_name of gallery_contents){
        const new_img = document.createElement("img")
        new_img.className = "gallery_thumbnail"
        new_img.src =  `media/gallery/${img_name}`
        new_img.setAttribute("onclick", `select_gallery("${img_name}")`)
        new_img.setAttribute(
            "onmouseover", `update_gallery_selected("${img_name}")`)
        new_img.setAttribute("onmouseout", "update_gallery_selected()")
    
        selector.appendChild(new_img)
    }
}

function select_gallery(img_name){
    gallery_selected_img_name = img_name
    update_gallery_selected()
}
