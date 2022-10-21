const puppeteer = require("puppeteer");

const player = require("play-sound")();

const values = ["21/10/2022"];

(async () => {
  const browser = await puppeteer.launch();
  const [page] = await browser.pages();
  await page.goto(
    "https://www.bseindia.com/stock-share-price/laurus-labs-ltd/lauruslabs/540222/"
  );

  const matches = await page.evaluate((strings) => {
    const text = document.body.innerText;
    return strings.filter((string) => text.includes(string));
  }, values);

  console.log(matches);
  console.log(matches.length);
  if (matches.length > 0) {
    player.play("./media/rr.wav", (err) => {
      if (err) console.log(`Could not play sound: ${err}`);
    });
  }

  await browser.close();
})();

const interval = setInterval(function () {
  (async () => {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();
    await page.goto(
      "https://www.bseindia.com/stock-share-price/laurus-labs-ltd/lauruslabs/540222/"
    );

    const matches = await page.evaluate((strings) => {
      const text = document.body.innerText;
      console.log(document, "vikas");
      return strings.filter((string) => text.includes(string));
    }, values);

    console.log(matches);
    console.log(matches.length);
    if (matches.length > 0) {
      player.play("./media/rr.wav", (err) => {
        if (err) console.log(`Could not play sound: ${err}`);
      });
    }

    await browser.close();
  })();
}, 12000);
