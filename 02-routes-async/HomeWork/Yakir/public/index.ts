

async function getRandomSpaceGif() {
    try {
      console.log("getRandomSpaceGif");
    console.log("get user After fetch (2)");
      
      
      const { data } = await axios.get("/api/SpaceGif");
      console.log(data)
      const { gifUrl, error } = data;
    console.log("get GIF After fetch (2.5)");
      
      if (error) throw new Error(error);
     
      placeSpaceGifOnDiv(gifUrl);
      console.log("get GIF After the end of fetch (3)");

    } catch (error) {
      console.error(error);
    }
  }


function placeSpaceGifOnDiv(spaceGif) {
    const spaceGifDiv: HTMLElement = document.querySelector("#RandomSpaceGif");
    spaceGifDiv.innerHTML = `<img src= ${spaceGif} alt="meme"/>`;
  }


