var character = document.getElementById("character")
var block = document.getElementById("block")
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate")
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).
    /**getComputeStyle gives all css properties
     * getPropertyValue is used to specify our needed value
     */
    getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    if(blockLeft<70 && blockLeft>50 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose")
    }
},10)