'use strict'
const PREFS_KEY = 'userprefs'
var gUserPrefs;

function setUserPrefs(bgc, colorTxt) {
    var userPrefs = loadFromStorage(PREFS_KEY)
    if (!userPrefs) userPrefs = { bgc, colorTxt, }
    gUserPrefs = userPrefs
    saveToStorage(PREFS_KEY, gUserPrefs)
}
function setUserBgc(bgc) {
    var userPrefs = loadFromStorage(PREFS_KEY)
    userPrefs.bgc = bgc
    gUserPrefs.bgc = userPrefs.bgc
    saveToStorage(PREFS_KEY, gUserPrefs)
}
function setUserTxtColor(colorTxt) {
    var userPrefs = loadFromStorage(PREFS_KEY)
    userPrefs.colorTxt = colorTxt
    gUserPrefs.colorTxt = userPrefs.colorTxt
    saveToStorage(PREFS_KEY, gUserPrefs)
}

function getUserPrefsToShow() {
    return gUserPrefs
}