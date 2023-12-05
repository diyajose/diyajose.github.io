new TypeIt("#typingName", {
  strings: "Diya Jose!",
  speed: 200,
  waitUntilVisible: true,
  afterComplete: function (instance) {
    setTimeout(instance.destroy, 3000)

  }
}).go();
