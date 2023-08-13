const data = [
    {
      id: 1,
      name: "Thomas",
      job: "Graphic Designer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "I am extremely satisfied with the software services provided by this company. Their team is highly skilled, professional, and efficient. They delivered a top-notch solution that exceeded my expectations. I highly recommend their services to anyone looking for reliable and innovative software development, Their team is highly professional, responsive and collaborative, making it easy to work with them",
    },
    {
      id: 2,
      name: "Jacob",
      job: "Web Designer",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      text: "I have been using the software developed by this company for a few months now, and I must say that it has been a game-changer for my business. Its user-friendly, robust and highly customizable, making it an ideal solution for my needs. The team has been responsive and supportive throughout the development process, and Im glad I chose them for this project",
    },
    {
      id: 3,
      name: "Annie",
      job: "CEO",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
      text: "The software services offered by this company are exceptional. They have a deep understanding of the latest technologies and trends, and their solutions are designed to meet the specific needs of their clients. Their team is highly professional, responsive and collaborative, making it easy to work with them. I highly recommend their services to anyone looking for high-quality software solutions.",
    },
   
  ];










const img = document.querySelector('#img')
const text = document.querySelector('#text')
const arrowLeft = document.querySelector('#arrowleft')
const arrowRight = document.querySelector('#arrowright')
const name = document.querySelector('#name')
const role = document.querySelector('#role')
let index = 0



window.addEventListener("DOMContentLoaded",function(){
  let  testimonial = data[0]
  console.log(testimonial);
  firstload(testimonial)
})


function firstload (data) {
    img.src = data.image
    role.textContent = data.job
    text.innerHTML = ` <i class="fa fa-quote-left"></i>  ${data.text} 
    <i class="fa fa-quote-right"></i>`;
}


arrowRight.addEventListener("click",function(){
    index++
    if(index > data.length){
        index=0
    }
    firstload (data[index])
})


arrowLeft.addEventListener("click",function(){
    index--
    if(index < 0){
      index =   data.length - 1
    }
    firstload (data[index])
})



function autoLoad() {
    index++;
    if (index > data.length - 1) {
      index = 0;
    }
    if (index < 0) {
      index = data.length - 1;
    }
    firstload (data[index])
  }
  
  setInterval(autoLoad, 1500);