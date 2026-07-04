const toggleBtn = document.getElementById('btn-box');
const body = document.querySelector('body');
const topDashborad = document.querySelector('.top-dashboard');
const btnCircle = document.querySelector('.btn-circle');

const socialBox = document.querySelectorAll('.social-analytics-box');
const sectionHeadings = document.querySelectorAll('.section-heading');
const overViewBox = document.querySelectorAll('.overview-box');
const overviewHeading = document.querySelectorAll('.overview-headings');
const overviewStat = document.querySelectorAll('.overview-stat');



toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active');
    body.classList.toggle('active');
    topDashborad.classList.toggle('active');
    btnCircle.classList.toggle('active');
    
    socialBox.forEach(item=>item.classList.toggle('active'));
    sectionHeadings.forEach(item=>item.classList.toggle('active'));
    overViewBox.forEach(item=>item.classList.toggle('active'));
    overviewHeading.forEach(item=>item.classList.toggle('active'));
    overviewStat.forEach(item=>item.classList.toggle('active'));
})

