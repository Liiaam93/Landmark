let postage = () => {
  let platform = document.getElementById("platform").value;
  let weight = document.getElementById("weight").value;
  let country = document.getElementById("country").value;
  let res = document.getElementById("res");

  if ((platform === "Amazon") & (country === "Switzerland")) {
    post = "MINI";
  } else if ((platform === "Amazon") & (country !== "Switzerland")) {
    post = "MAXI";
  } else if (platform === "Ebay") {
    if (
      country === "Argentina" ||
      country === "Brazil" ||
      country === "Gibraltar" ||
      country === "Mexico" ||
      country === "Peru" ||
      country === "South Africa" ||
      country === "South America"
    ) {
      post = "SUSPENDED";
    } else if (
      country === "Finland" ||
      country === "Iceland" ||
      country === "Japan" ||
      country === "Iceland" ||
      country === "Luxembourg" ||
      country === "Malaysia" ||
      country === "New Zealand" ||
      country === "Norway" ||
      country === "Russia" ||
      country === "Sweden" ||
      country === "Switzerland"
    ) {
      post = "MINI";
    } else if (
      country === "France" ||
      country === "Ireland" ||
      country === "Israel" ||
      country === "Netherlands" ||
      country === "Romania"
    ) {
      post = "MAXI";
    } else if (country === "Australia") {
      if (weight <= 200) {
        post = "MINI";
      } else if (weight > 200) {
        post = "MAXI";
      }
    } else if (country === "Austria") {
      if (weight < 2000) {
        post = "MINI - (WEBSITE ORDERS DDU)";
      } else if (weight >= 2000) {
        post = "MAXI - (WEBSITE ORDERS DDU)";
      }
    } else if (country === "Croatia") {
      if (weight < 1000) {
        post = "MINI";
      } else if (weight >= 1000) {
        post = "MAXI";
      }
    } else if (
      country === "Cyprus" ||
      country === "Malta" ||
      country === "Portugal"
    ) {
      if (weight < 400) {
        post = "MINI";
      } else if (weight >= 400) {
        post = "MAXI";
      }
    } else if (country === "Czech Republic" || country === "USA") {
      if (weight < 1400) {
        post = "MINI";
      } else if (weight >= 1400) {
        post = "MAXI";
      }
    } else if (country === "Denmark") {
      if (weight < 950) {
        post = "MINI";
      } else if (weight >= 950) {
        post = "MAXI";
      }
    } else if (
      country === "Estonia" ||
      country === "Slovenia" ||
      country === "South Korea"
    ) {
      if (weight < 600) {
        post = "MINI";
      } else if (weight >= 600) {
        post = "MAXI";
      }
    } else if (country === "Greece" || country === "Hong Kong") {
      if (weight < 1600) {
        post = "MINI";
      } else if (weight >= 1600) {
        post = "MAXI";
      }
    } else if (
      country === "Hungary" ||
      country === "Poland" ||
      country === "Slovakia"
    ) {
      if (weight < 1100) {
        post = "MINI";
      } else if (weight >= 1100) {
        post = "MAXI";
      }
    } else if (country === "Italy") {
      if (weight < 100) {
        post = "MINI";
      } else if (weight >= 100) {
        post = "MAXI";
      }
    } else if (country === "Latvia") {
      if (weight < 1200) {
        post = "MINI";
      } else if (weight >= 1200) {
        post = "MAXI";
      }
    } else if (country === "Lithuania") {
      if (weight < 1500) {
        post = "MINI";
      } else if (weight >= 1500) {
        post = "MAXI";
      }
    } else if (country === "Singapore" || country === "Turkey") {
      if (weight < 900) {
        post = "MINI";
      } else if (weight >= 900) {
        post = "MAXI";
      }
    } else if (country === "Spain") {
      if (weight < 300) {
        post = "MINI";
      } else if (weight >= 300) {
        post = "MAXI";
      }
    } else if (country === "Thailand") {
      if (weight < 800) {
        post = "MINI";
      } else if (weight >= 800) {
        post = "MAXI";
      }
    } else if (country === "Canada") {
      if (weight < 2000) {
        post = "MINI";
      } else if (weight >= 2000) {
        post = "MAXI - (UNLESS POSTCODE STARTS WITH '35', '38' or '51')";
      }
    } else if (country === "Belgium") {
      if (weight < 500) {
        post = "MINI - (WEBSITE ORDERS DDU)";
      } else if (weight >= 500) {
        post = "MAXI - (WEBSITE ORDERS DDU)";
      }
    }
  }
  res.innerText = post;
  return post;
};
