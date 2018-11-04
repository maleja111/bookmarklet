(function () {
  console.log("Bookmarklet starting");
  let pharagraphs = [
    document.getElementsByTagName("h1"),
    document.getElementsByTagName("h2"),
    document.getElementsByTagName("h3"),
    document.getElementsByTagName("h4"),
    document.getElementsByTagName("h5"),
    document.getElementsByTagName("a"),
    document.getElementsByTagName("span"),
    document.getElementsByTagName("div"),
    document.getElementsByTagName("label"),
    document.getElementsByTagName("p"),
    document.getElementsByTagName("li")
  ];

  let tempText = [];
  pharagraphs.forEach(item => {
    if (item.length > 0) {
      tempText.push(item[0].textContent);
    }
  });
  debugger;
  console.log("pharagraphs: ", pharagraphs);
  console.log("tempText: ", tempText.join());
  var myConfig = {
    type: "wordcloud",
    options: {
      text: tempText.join()
    }
  };

  zingchart.render({
    id: "sitepen",
    data: myConfig,
    height: 400,
    width: "100%"
  });
})();
