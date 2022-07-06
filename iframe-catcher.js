//read url from the url bar
var url = window.location.href;

//check if url has ?iframe_url= parameter
if (url.indexOf("?iframe_url=") > -1) {
  console.log("Parameter identified");

  //inject iframe into the page
  var iframe = document.createElement("iframe");

  //inject iframe in html
  document.body.appendChild(iframe);
  iframe.contentDocument.body.innerHTML = url;
  iframe.style.position = "absolute";
  iframe.style.top = "38%";
  iframe.style.left = "38%";

  //create hover button
  var hoverButton = document.createElement("button");
  hoverButton.innerHTML = "Refresh";
  hoverButton.style.position = "absolute";
  hoverButton.style.top = "34%";
  hoverButton.style.left = "46%";
  hoverButton.style.backgroundColor = "grey";
  hoverButton.style.color = "white";
  hoverButton.style.fontSize = "15px";
  hoverButton.addEventListener("click", function () {
    //refresh page
    window.location.reload();
  });

  //inject hoverbutton in html
  document.body.appendChild(hoverButton);
} else {
  console.log("No parameter identified");
}
