const wisataList = [
  {
    nama: "Dieng Plateau",
    deskripsi: "Kawasan pegunungan indah yang penuh pesona.",
    gambar: "images/dieng.jpg"
  },
  {
    nama: "Telaga Menjer",
    deskripsi: "Danau cantik di kaki Gunung Sindoro, cocok untuk bersantai.",
    gambar: "images/menjer.jpg"
  },
  {
    nama: "Kebun Teh Tambi",
    deskripsi: "Hamparan kebun teh yang menyejukkan mata dan pikiran.",
    gambar: "images/tambi.jpg"
  }
];

const container = document.getElementById("wisataContainer");

wisataList.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = item.gambar;
  img.alt = item.nama;

  const title = document.createElement("h3");
  title.textContent = item.nama;

  const desc = document.createElement("p");
  desc.textContent = item.deskripsi;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);

  container.appendChild(card);
});
