document.addEventListener("DOMContentLoaded", function () {




//first use of js makes all of the image icons opens a small p tag
//all the href websites need to be changed to their respective socials
function showInstagram(clickedInstagram,instagramDiv){
    if(clickedInstagram){
        console.log("instagram function ran but nothing happened")}
    else{
        console.log('created instagram link')
        let a = document.createElement("a");
        a.setAttribute("href", "https://instagram.com/aj.9352?igshid=NGVhN2U2NjQ0Yg==");
        a.setAttribute("class", "contact-site-links");
        a.setAttribute("target", "Blank_");
        a.setAttribute("id", "instagramLink");
        let link = document.createTextNode("Check out my Instagram");
        a.appendChild(link)
        instagramDiv.appendChild(a);}}

function showTwitter(clickedTwitter,twitterDiv){
    if(clickedTwitter){
        console.log("twitter function ran but nothing happened")}
    else{
        console.log('created twitter link')
        let a = document.createElement("a");
        a.setAttribute("href", "https://twitter.com/GillilandManuel");
        a.setAttribute("class", "contact-site-links");
        a.setAttribute("target", "Blank_");
        a.setAttribute("id", "twitterLink");
        let link = document.createTextNode("Check out my Twitter");
        a.appendChild(link)
        twitterDiv.appendChild(a);}}

function showLinkedin(clickedLinkedin,linkedinDiv){
    if(clickedLinkedin){
        console.log("linkedin function ran but nothing happened")}
    else{
        console.log('created linkedin link')
        let a = document.createElement("a");
        a.setAttribute("href", "https://www.linkedin.com/in/aj-gilliland-94836727b/ ");
        a.setAttribute("class", "contact-site-links");
        a.setAttribute("target", "Blank_");
        a.setAttribute("id", "linkedinLink");
        let link = document.createTextNode("Check out my Linked-In");
        a.appendChild(link)
        linkedinDiv.appendChild(a);}}

function showGithub(clickedGithub,githubDiv){
    if(clickedGithub){
        console.log("github function ran but nothing happened")}
    else{
        console.log('created github link')
        let a = document.createElement("a");
        a.setAttribute("href", "https://github.com/Aj-Gilliland");
        a.setAttribute("class", "contact-site-links");
        a.setAttribute("target", "Blank_");
        a.setAttribute("id", "githubLink");
        let link = document.createTextNode("Check out my Github");
        a.appendChild(link)
        githubDiv.appendChild(a);}}


var clickedInstagram  = false;
var clickedTwitter = false;
var clickedLinkedin = false;
var clickedGithub = false;

var instagram = document.getElementById( "instagram" ).addEventListener("mouseover", function() {showInstagram(clickedInstagram,document.getElementById("instagram-div"))},{once : true});
var twitter = document.getElementById( "twitter" ).addEventListener("mouseover", function() {showTwitter(clickedTwitter,document.getElementById("twitter-div"))},{once : true});
var linkedin = document.getElementById( "linkedin" ).addEventListener("mouseover", function() {showLinkedin(clickedLinkedin,document.getElementById("linkedin-div"))},{once : true});
var github = document.getElementById( "github" ).addEventListener("mouseover", function() {showGithub(clickedGithub,document.getElementById("github-div"))},{once : true});

document.getElementById("instagram-div").style.transition = "all 2s";
document.getElementById("twitter-div").style.transition = "all 2s";
document.getElementById("linkedin-div").style.transition = "all 2s";
document.getElementById("github-div").style.transition = "all 2s";
//end of first use








})//this is the final line for the DOM content loader