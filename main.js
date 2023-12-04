new TypeIt("#typingName", {
    strings: "Diya Jose!",
    speed: 100,
    waitUntilVisible: true,
    afterComplete: function (instance) {
        setTimeout(instance.destroy, 3000)
        
      }
}).go();

