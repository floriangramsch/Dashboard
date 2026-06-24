const links = [
  {
    name: "Bar",
    base: "https://bar.floxsite.de",
    favicon: "/android-chrome-256x256.png",
  },
  {
    name: "Fitty",
    base: "https://fitty.floxsite.de",
    favicon: "/web-app-manifest-512x512.png",
  },
  {
    name: "Cats",
    base: "https://cats.floxsite.de",
    favicon: "/static/android-chrome-512x512.png",
  },
  {
    name: "Journal",
    base: "https://journal.floxsite.de",
    favicon: "/android-chrome-512x512.png",
  },
  {
    name: "Darts",
    base: "https://darts.floxsite.de",
    favicon: "/android-chrome-512x512.png",
  },
];

const container = document.getElementById("content");

function createCard(link) {
  const a = document.createElement("a");
  a.className = "card";
  a.href = link.base;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = link.base + link.favicon;
  img.alt = link.name;

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = link.name;

  a.appendChild(img);
  a.appendChild(title);

  return a;
}

links.forEach((link) => container.appendChild(createCard(link)));
