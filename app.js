fetch(
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B7CE0CAC-3B18-4745-B65B-190B83AD9DCD&format=JSON&locationName=&elementName="
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const weatherData = data.records.location;

    // console.log(data.records.location);

    [...weatherData].forEach((currentValue, index) => {
      let name = weatherData[index].locationName;
      let Rain =
        weatherData[index].weatherElement[1].time[2].parameter.parameterName;
      let Wx =
        weatherData[index].weatherElement[0].time[2].parameter.parameterName;
      let MinT =
        weatherData[index].weatherElement[2].time[2].parameter.parameterName;
      let MaxT =
        weatherData[index].weatherElement[4].time[2].parameter.parameterName;
      console.log(currentValue);

      let img;
      if (Rain == 0) {
        img = "img/Sun.svg";
      } else if (Rain > 25 || Rain < 40) {
        img = "img/Clouds.svg";
      } else if (Rain > 50) {
        img = "img/Umbrella.svg";
      } else {
        img = "img/Rain.svg";
      }

      let card = document.querySelector(".row");
      card.innerHTML += `
               
                    <div class="card mb-2 text-center mx-auto" style="width: 12rem">
                        <img src="${img}" class="card-img-top mx-auto"  style="width:50% " alt="weather">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">tmp: ${MinT}&#8451~${MaxT}&#8451</p>
                            <p class="card-text">降雨機率: ${Rain}%</p>
                            <p class="card-text">tmp: ${Wx}</p>
                        </div>
                        </div>
        `;
    });
  });
