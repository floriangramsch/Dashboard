const links = [
  {
    name: "Bar",
    base: "https://bar.floxsite.de:2604",
    favicon: "/android-chrome-256x256.png",
  },
  {
    name: "Fitty",
    base: "https://fitty.floxsite.de:2604",
    favicon: "/android-chrome-256x256.png",
  },
  {
    name: "Cats",
    base: "https://cats.floxsite.de:2604",
    favicon: "/static/android-chrome-512x512.png",
  },
];

const getFavicon = (link, parent) => {
  const image = document.createElement("img");
  const subSrc = document.createElement("a");
  const title = document.createElement("div");
  title.textContent = link.name;
  title.classList.add("title");
  subSrc.classList.add("image");
  subSrc.href = link.base;
  image.src = link.base + link.favicon;
  image.height = 100;
  image.widht = 100;
  subSrc.appendChild(image);
  subSrc.appendChild(title);
  el.appendChild(subSrc);
};

const el = document.getElementById("content");
for (let index = 0; index < links.length; index++) {
  getFavicon(links[index], el);
}