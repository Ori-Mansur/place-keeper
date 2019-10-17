'use strict'
init()
function init(){
    setUserPrefs('whit', 'black')
    renderUserPrefs()
}

function renderUserPrefs(){
    var userPrefs=getUserPrefsToShow()
    document.body.style.backgroundColor=userPrefs.bgc
    document.body.style.color=userPrefs.colorTxt
}
function onBgcChange(bgc){
    setUserBgc(bgc)
    renderUserPrefs()

}
function onTxtChange(colorTxt){
    setUserTxtColor(colorTxt)
    renderUserPrefs()
}
function onSetBirthDay(){
    
}
myMap()
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
