const phoneNumber= /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
const instagram=/(([Ii]nst?a?g?r?a?m?)|(ig)|<U\+1F606>):?[ ]?@?[a-zA-Z0-9]+/gm;
const ig=/@[a-zA-Z0-9]+/gm;

function getInboxElements() {
    if (document.getElementById('messages-tab')!=null){

    document.getElementById('messages-tab').click()
    return document.querySelectorAll(".messageListItem")
}}

function processInboxElements(messagesArray){
    if (messagesArray!==undefined){
    for (let i = 0; i < messagesArray.length; i++) {
        setTimeout(function () {
            (messagesArray[i].click());
            let messages=getMessages()
            let profileText=getProfileText()
            processProfileAndMessages(messages,profileText)
        }, [i] * 3000)
    }}

}

function getProfileText() {
    if (document.querySelector(".BreakWord > div:nth-child(1)")!=null){
    console.log(document.querySelector(".BreakWord > div:nth-child(1)").innerText)
    return document.querySelector(".BreakWord > div:nth-child(1)").innerText


}}

function getMessages(){
    if(document.querySelectorAll('.msgHelper')!=null){
    const items=document.querySelectorAll('.msgHelper');
    let messagesArray=[]
    items.forEach(function(text){
        messagesArray.push(text.innerText)
    })
    return messagesArray
}}


function parseText(text_info){
    if (text_info!==undefined){

    matchPhone=text_info.match(phoneNumber)
    matchInstagram=text_info.match(instagram)
    matchInsta=text_info.match(ig)
    console.log(matchPhone)
    console.log(matchInsta)
    console.log(matchInstagram)
    let dataArray = [matchPhone, matchInsta, matchInstagram]
    sendData(dataArray)

}}

function sendData(dataArray) {
    fetch('http://localhost:5000/boot2',
    {
        method: 'POST',
        body: dataArray

    })
}



function processProfileAndMessages(messagesArray, profileText){
    parseText(profileText)
    messagesArray.forEach(function (m) {
        parseText(m)

    })

}


let inboxElements=getInboxElements()
processInboxElements(inboxElements)
stop()
