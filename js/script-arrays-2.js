const links = document.querySelectorAll("nav a");

function logHref(item) {
  const href = item.href;
  console.log(href);
}

links.forEach(logHref);