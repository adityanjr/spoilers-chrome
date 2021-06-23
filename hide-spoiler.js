kw = [
  "naruto",
  "shippuden",
  "naruto spoiler",
  "Naruto",
  "Naruto Spoiler",
  "NARUTO",
  "Itachi",
  "Uchiha",
  "Sasuke",
  "Sharingan",
  "Madara",
  "Senju",
  "Kakashi",
  "Nine Tails",
  "Uzumaki",
  "Otsutsuki",
];
tags = "ADITYANJR";
total = 0;

for (var ii = 0; ii < kw.length; ii++) {
  o = $(`:contains(${kw[ii]}):not(:has(:contains(${kw[ii]})))`);
  for (var i = 0; i < o.length; i++) {
    if (!o[i].parentNode || o[i].parentNode.nodeName === "BODY") {
      continue;
    }
    hideSpoiler(o[i]);
    total++;
  }
}

if (total >= 10) {
  headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  for (var i = 0; i < headings.length; i++) hideNode(headings[i]);
}

function hideSpoiler(node) {
  ancestor = node.parentNode;
  if (ancestor != null) {
    if (ancestor.parentNode != null && ancestor.tagName != "BODY")
      ancestor = ancestor.parentNode;
    imgs = ancestor.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++)
      imgs[i].style.webkitFilter = "blur(10px)";
    lists = ancestor.getElementsByTagName("li");
    for (var i = 0; i < lists.length; i++) hideNode(lists[i]);
  }

  if (node == null || node.parentNode == null) return;
  all_child = node.parentNode.children;
  for (var i = 0; i < all_child; i++) {
    var type = all_child[i].tagName;
    if (tags.match(type) != null) hideNode(all_child[i]);
  }
  hideNode(node);
}

function hideNode(node) {
  node.textContent = "[Wait, This is a SPOILER !!]";
  node.style.color = "red";
}
