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