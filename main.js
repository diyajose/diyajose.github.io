new TypeIt("#typingName", {
  strings: "Diya Jose!",
  speed: 200,
  waitUntilVisible: true,
  afterComplete: function (instance) {
    setTimeout(instance.destroy, 3000)

  }
}).go();

addEventListener("DOMContentLoaded", (event) => {

  setTimeout(()=>{
    const l = document.createElement('link')
    l.setAttribute("rel", "stylesheet")
    l.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css")
    document.head.appendChild(l)
  }, 3000)

});

