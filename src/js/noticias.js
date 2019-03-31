// Assuming there are somewhere that you can get Google RSS

fetch('https://news.google.cl/news?cf=all&hl=en&pz=1&ned=us&q=astronomy&output=json_xml&num=10')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
var xmlData = "";

// [1] Parse the xml feed into an array of JS objects
function parseData(data) {
  parser = new DOMParser();
  var xmlDoc = parser.parseFromString(data, "text/xml");

  // Convert collection to array
  var items = Array.from(xmlDoc.getElementsByTagName('item'));

  var feeds = [];
  items.forEach(function(item) {
    feeds.push({
      title: getNode(item, 'title'),
      link: getNode(item, 'link'),
      pubDate: getNode(item, 'pubDate'),
      description: getNode(item, 'description'),
    });
  });
  console.log(feeds)
  return feeds;
}
var googleFeeds = parseData(xmlData);

// [2] Using the feeds array
// This code shows how the data can be accessed
var target = document.getElementById('target');
googleFeeds.forEach(function(item) {
  var itemList = document.createElement('li');
  var itemAnchor = document.createElement('a');
  var itemParagraph = document.createElement('p');
  itemAnchor.setAttribute('target', '_blank');

  itemAnchor.setAttribute('href', item.link); // obtaining the link
  itemAnchor.innerText = item.title; // obtaining the title
  itemParagraph.innerHTML = item.description; // obtaining the title

  itemList.appendChild(itemAnchor);
  itemList.appendChild(itemParagraph);
  target.appendChild(itemList);
});

// Retrieve the data of a specific tag
function getNode(node, tagToRetrieve) {
  var htmlData = node.getElementsByTagName(tagToRetrieve)[0].innerHTML;
  return _.unescape(htmlData); // decode HTML entities, see lodash/underscore
}
