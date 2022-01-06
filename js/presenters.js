const zero = 0;
const one = 1;
const two = 2;

const speakersData = [
  {
    description: `Economist, Emeritus Professor at X DAle University, 
      World Trade Specialist, Author of the best sellers "The Great Bargain`,
    altText: `Photo of Piers Van Brokeren`,
    source: `assets/images/speakers/speaker1.png`,
    name: `Pr. Piers Van Brokeren`,
    title: `Economist, Emeritus Professor at X DAle University`,
  },
  {
    description: `Acclaimed Supply Chain Management Expert, Yvan Kosnietzov, 
      is advocating for a new paradigm in the supply chain management`,
    altText: `Photo of Yvan Kosnietzov`,
    source: `assets/images/speakers/speaker2.png`,
    name: `Yvan Kosnietzov`,
    title: `Supply Chain Management Expert`,
  },
  {
    description: `Esther Alice Kogi is a serial entrepreneur and the president of Women for Free Market Foundation`,
    altText: `Photo of Esther Alice Kogi`,
    source: `assets/images/speakers/speaker3.png`,
    name: `Esther Alice Kogi`,
    title: `President of Women for Free Market`,
  },
  {
    description: `Dr Nanotte Ben Nana, Economist, teaches Network Economics at Moussa University. 
      Author of the best seller: "Bloosoming Network: The North Atlantic Port is a best seller in USA.`,
    altText: `Photo of Nanotte Ben Nana`,
    source: `assets/images/speakers/speaker4.png`,
    name: `Nanotte Ben Nana`,
    title: `Professor of Economics at Moussa University`,
  },
  {
    description: `Cythia von Geyin CEO is the author of "The reverse Flood" Ms von Geyin is the CEO of T34, the most important freight company of the World.`,
    altText: `Photo Cythia von Geyin`,
    source: `assets/images/speakers/speaker5.png`,
    name: `Cythia von Geyin`,
    title: `CEO of T34, Author of "The Reverse Flood"`,
  },
  {
    description: `Lipo Mennendez is an anthropologist, Columnist, Author of "You Broke it, 
      You Own It". Mr Mennendez is the advocate of the Yagaga Native People.`,
    altText: `Photo Lipo Mennendez`,
    source: `assets/images/speakers/speaker6.png`,
    name: `Lipo Mennendez`,
    title: `Columnist, Author and Yagaga People Advocate`,
  },
];

const speakers = document.createElement(`section`);
speakers.setAttribute(`class`, `presenters`);

const feature = document.createElement(`h2`);
feature.setAttribute(`class`, "speakersH1");
feature.textContent = `Featured Speakers`;
speakers.appendChild(feature);

const hLine = document.createElement(`hr`);
speakers.appendChild(hLine);

const speakerWrapper = document.createElement(`div`);
speakerWrapper.setAttribute(`class`, "wrapper");
speakers.appendChild(speakerWrapper);

const parentNode = document.querySelector("body");
const existingNode1 = document.querySelector(".partners");
const existingNode = document.querySelector(".more");

if ($(window).width() > 768) {
  for (let num = zero; num < speakersData.length; num += one) {
    const speakerItem = document.createElement(`div`);
    speakerItem.setAttribute(`class`, `item`);

    const poster = document.createElement(`img`);
    poster.setAttribute(`class`, `posterImage`);
    poster.setAttribute(`src`, speakersData[num].source);
    poster.setAttribute(`alt`, speakersData[num].altText);
    speakerItem.appendChild(poster);

    const details = document.createElement(`div`);
    details.className = `detail`;

    const theName = document.createElement(`p`);
    theName.setAttribute(`class`, `speakerName`);
    theName.textContent = speakersData[num].name;
    details.appendChild(theName);

    const speakerTitle = document.createElement(`p`);
    speakerTitle.setAttribute(`class`, `titleOfSpeaker`);
    speakerTitle.textContent = speakersData[num].title;
    details.appendChild(speakerTitle);

    const line = document.createElement(`hr`);
    line.setAttribute(`class`, `hrLine`);
    details.appendChild(line);

    const info = document.createElement(`p`);
    info.setAttribute(`class`, `descriptions`);
    info.textContent = speakersData[num].description;
    details.appendChild(info);

    speakerItem.appendChild(details);

    speakerWrapper.appendChild(speakerItem);

    existingNode1.parentNode.insertBefore(speakers, existingNode1);
  }
}

if ($(window).width() <= 768) {
  // do your stuff
  for (let num = zero; num < two; num += one) {
    const speakerItem = document.createElement(`div`);
    speakerItem.setAttribute(`class`, `item`);

    const poster = document.createElement(`img`);
    poster.setAttribute(`class`, `posterImage`);
    poster.setAttribute(`src`, speakersData[num].source);
    poster.setAttribute(`alt`, speakersData[num].altText);
    speakerItem.appendChild(poster);

    const details = document.createElement(`div`);
    details.className = `detail`;

    const theName = document.createElement(`p`);
    theName.setAttribute(`class`, `speakerName`);
    theName.textContent = speakersData[num].name;
    details.appendChild(theName);

    const speakerTitle = document.createElement(`p`);
    speakerTitle.setAttribute(`class`, `titleOfSpeaker`);
    speakerTitle.textContent = speakersData[num].title;
    details.appendChild(speakerTitle);

    const line = document.createElement(`hr`);
    line.setAttribute(`class`, `hrLine`);
    details.appendChild(line);

    const info = document.createElement(`p`);
    info.setAttribute(`class`, `descriptions`);
    info.textContent = speakersData[num].description;
    details.appendChild(info);

    speakerItem.appendChild(details);

    speakerWrapper.appendChild(speakerItem);

    existingNode.parentNode.insertBefore(speakers, existingNode);
  }

  const btn = document.querySelector(`.moreBtn`);

  btn.addEventListener("click", () => {
    for (let num = two; num < speakersData.length; num += one) {
      const speakerItem = document.createElement(`div`);
      speakerItem.setAttribute(`class`, `item`);

      const poster = document.createElement(`img`);
      poster.setAttribute(`class`, `posterImage`);
      poster.setAttribute(`src`, speakersData[num].source);
      poster.setAttribute(`alt`, speakersData[num].altText);
      speakerItem.appendChild(poster);

      const details = document.createElement(`div`);
      details.className = `detail`;

      const theName = document.createElement(`p`);
      theName.setAttribute(`class`, `speakerName`);
      theName.textContent = speakersData[num].name;
      details.appendChild(theName);

      const speakerTitle = document.createElement(`p`);
      speakerTitle.setAttribute(`class`, `titleOfSpeaker`);
      speakerTitle.textContent = speakersData[num].title;
      details.appendChild(speakerTitle);

      const line = document.createElement(`hr`);
      line.setAttribute(`class`, `hrLine`);
      details.appendChild(line);

      const info = document.createElement(`p`);
      info.setAttribute(`class`, `descriptions`);
      info.textContent = speakersData[num].description;
      details.appendChild(info);

      speakerItem.appendChild(details);

      speakerWrapper.appendChild(speakerItem);

      existingNode.parentNode.insertBefore(speakers, existingNode);
    }
  });
}
