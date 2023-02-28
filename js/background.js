const body = document.querySelector("body");

const getPhotos = async () => {
  const config = {
    params: {
      client_id: "swbHeMzDeMR2ymFFrnjn29dRAVWXbRaiFjo225-PTVA",
      orientation: "landscape",
    },
  };
  const res = await axios.get("https://api.unsplash.com/photos/random", config);
  const bgIMG = document.createElement("img");
  bgIMG.src = res.data.urls.full;
  console.log(bgIMG.src);
  //   body.style.backgroundImage = `url(${bgIMG.src})`;
};

getPhotos();
