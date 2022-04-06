const markers = [
  {
    title: "Marker 1850",
    description: "descrizione",
    x: 120,
    y: 440,
  },
  {
    title: "Marker 1925",
    description: "descrizione",
    x: 360,
    y: 180,
  },
  {
    title: "Marker 2020",
    description: "descrizione",
    x: 470,
    y: 220,
  },
];

let marker = 0;

const draw = SVG().addTo(".map").size(600, 600);
const rect = draw
  .circle(20, 20)
  .stroke("#fff")
  .attr({ fill: "transparent", x: markers[0].x, y: markers[0].y });

const dot = draw
  .rect(10, 10)
  .attr({ fill: "#f06", x: markers[0].x + 5, y: markers[0].y + 5 })
  .css({ cursor: "pointer" });

const horizontal = draw
  .rect(600, 1)
  .attr({ fill: "#fff", x: 0, y: markers[0].y + 10 });

const vertical = draw
  .rect(1, 600)
  .attr({ fill: "#fff", x: markers[0].x + 8, y: 10 });

const addActive = items => {
  items === "first"
    ? (marker = 0)
    : items === "second"
    ? (marker = 1)
    : (marker = 2);

  const active = document.querySelectorAll(`.${items}`);
  active.forEach(add => {
    add.classList.add("active");
  });
  rect.animate().move(markers[marker].x, markers[marker].y);
  dot.move(markers[marker].x + 5, markers[marker].y + 5);
  horizontal.animate().move(0, markers[marker].y + 10);
  vertical.animate().move(markers[marker].x + 10, 0);
  const title = document.querySelector(".modal h3");
  const description = document.querySelector(".modal p");

  title.textContent = markers[marker].title;
  description.textContent = markers[marker].description;

  // const modal = document.querySelector(".modal");
  // modal.classList.remove("show");
};

addActive("first");

const li = document.querySelectorAll("li");

li.forEach(item => {
  item.addEventListener("click", () => {
    li.forEach(remove => {
      remove.classList.remove("active");
    });
    addActive(item.className);
  });
});

const pointer = document.querySelector("svg rect");
const modal = document.querySelector(".modal");

pointer.addEventListener("click", () => {
  modal.classList.toggle("show");
});

modal.addEventListener("click", () => {
  modal.classList.toggle("show");
});
