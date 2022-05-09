let innerLineButtons = document.getElementsByClassName("InnerLines");
let lastButtonClicked = null;
for(let i = 0; i < innerLineButtons.length; i++)
{
    innerLineButtons[i].addEventListener("click", function(){
        if(lastButtonClicked != null)
        {
        console.log("fixing the old ones now");
        lastButtonClicked.classList.remove("PanelOpen");
        lastButtonClicked.classList.add("PanelClosed");
        }
        let panel = innerLineButtons[i].nextElementSibling;
        panel.classList.remove("PanelClosed");
        panel.classList.add("PanelOpen");
        panel.getElementsByTagName("p")[0].style.borderBottom = "1px solid rgb(205, 201, 201)";
        panel.getElementsByTagName("p")[0].style.marginTop = "0px"
        console.log(this);
        this.style.borderBottom = "none";
        lastButtonClicked = panel;
    })
}