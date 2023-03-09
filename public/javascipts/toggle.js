const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
// const navs = document.querySelector('.nav li a');
// const navS = document.querySelectorAll('.nav-link');
const headerElement = document.querySelector('#header');
const introContent = document.querySelector('.intro-content');
const featureContent = document.querySelector('.feature-content');
const developerContent = document.querySelector('#developer p');
const bowlElement = document.querySelector('.bowl');

toggle.onclick = () => {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    headerElement.classList.toggle('active');
    // navs.classList.toggle('active');
    // navS.classList.toggle('active');
    introContent.classList.toggle('active');
    featureContent.classList.toggle('active');
    developerContent.classList.toggle('active');
    bowlElement.classList.toggle('active');
}
