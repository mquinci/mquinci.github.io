//list countries and their two-digit country codes
var countryList = {
  "AF": "Afghanistan",
  "AX": "Aland Islands",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua And Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia",
  "BA": "Bosnia and Herzegovina",
  "BW": "Botswana",
  "BV": "Bouvet Island",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "CV": "Cape Verde",
  "KY": "Cayman Islands",
  "CF": "Central African Republic",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CX": "Christmas Island",
  "CC": "Cocos (Keeling) Islands",
  "CO": "Colombia",
  "KM": "Comoros",
  "CG": "Congo (Brazzaville)",
  "CD": "Congo (Kinshasa)",
  "CK": "Cook Islands",
  "CR": "Costa Rica",
  "CI": "Cote D\"Ivoire",
  "HR": "Croatia",
  "CU": "Cuba",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FK": "Falkland Islands (Malvinas)",
  "FO": "Faroe Islands",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories",
  "GA": "Gabon",
  "GM": "Gambia",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadeloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HM": "Heard Island & Mcdonald Islands",
  "VA": "Holy See (Vatican City State)",
  "HN": "Honduras",
  "HK": "Hong Kong S.A.R. of China",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran, Islamic Republic Of",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle Of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KR": "Korea",
  "KP": "Korea (the Democratic People's Republic of)",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People\"s Democratic Republic",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libyan Arab Jamahiriya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macao",
  "MK": "Macedonia",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia, Federated States Of",
  "MD": "Moldova",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "AN": "Netherlands Antilles",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestinian Territories",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "RE": "Reunion",
  "RO": "Romania",
  "RU": "Russia",
  "RW": "Rwanda",
  "BL": "Saint Barthelemy",
  "SH": "Saint Helena",
  "KN": "Saint Kitts And Nevis",
  "LC": "Saint Lucia",
  "MF": "Saint Martin",
  "PM": "Saint Pierre And Miquelon",
  "VC": "Saint Vincent And Grenadines",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome And Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "SS": "South Sudan",
  "ZA": "South Africa",
  "GS": "South Georgia And Sandwich Isl.",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan",
  "SR": "Suriname",
  "SJ": "Svalbard And Jan Mayen",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syrian Arab Republic",
  "TW": "Taiwan Province of China",
  "TJ": "Tajikistan",
  "TZ": "Tanzania",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad And Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks And Caicos Islands",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "GB": "United Kingdom",
  "US": "United States",
  "UM": "United States Outlying Islands",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela",
  "VN": "Vietnam",
  "VG": "Virgin Islands, British",
  "VI": "Virgin Islands, U.S.",
  "WF": "Wallis And Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "XK": "Kosovo",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
};

//draw the map, color countries in based on life ladder, tooltip 
function drawMap(world, data, variable) {
    
  console.log(world);
  var geoJSON = topojson.feature(world, world.objects.countries);
  console.log(geoJSON);

  geoJSON.features = geoJSON.features.filter(function(d) {
    return d.id !== "AQ";
  });

  var proj = d3.geoMercator()
    .fitSize([width, height], geoJSON);

  var path = d3.geoPath()
    .projection(proj);

  var countries = map.selectAll("path")
    .data(geoJSON.features);

  var enterCountries = countries.enter().append("path")
    .attr("d", path)
    .attr("vector-effect", "non-scaling-stroke")
    .attr("stroke", "#D8E4FA")
    .attr("stroke-width", "0.5px");

    var maximumLatter = d3.max(data, function(d) {
      return d.Life_Ladder;
    });

    var interpolators = [
      "Inferno"];

    var colorGradient = d3.scaleSequential(d3.interpolateInferno)
    .domain([0, maximumLatter]);

  countries.merge(enterCountries)
    .attr("id", function(d) {
      return d.id;
    })
    .on("mousemove", function(d) {

      var countryName = countryList[d.id];
      if (countryName) {
        var dataPoint = data.filter(function(a) {
          return a["Country name"] === countryName
        });

        if (dataPoint.length) {
          dataPoint = dataPoint[0];
          

         d3.select("#tooltip")
          .style("display", "block")
          .style("top", d3.event.pageY + 20 + "px")
          .style("left", d3.event.pageX + 20 + "px")
          .html("Country:  " + countryName + "<br/>" +"Year:  " + dataPoint.year + "<br/>" + "Happiness Score:  " + dataPoint.Life_Ladder + "<br/>" + "Healthy Life Expectancy:  " + dataPoint.Healthy_life_expectancy_at_birth + " years old" + "<br/>" + "Social Support:  " + dataPoint.Social_support_per + "%" + "<br/>" + "Freedom to Make Life Choices:  " + dataPoint.Freedom_to_make_life_choices_per + "%");
        }
      } 
    })

    .on("mouseout", function(d) {
      d3.select("#tooltip")
        .style("display", "none");
    })
    
    .attr("fill", function(d) {
      var countryName = countryList[d.id];
      if (countryName) {
        var dataPoint = data.filter(function(a) {
          return a["Country name"] === countryName
        });

        if (dataPoint.length) {
          dataPoint = dataPoint[0];
          return colorGradient(dataPoint.Life_Ladder);
        }
        //else {
          //console.log("Missing Data", countryName);
          //return "red";
        //}
      else {
        //console.log("Missing Name", d.id)
        return "lightgray";

      }
    }
    });
  
    console.log(data);

  
//zoom features 
  var zoom = d3.zoom()
    .translateExtent([[0, 0], [width, height]])
    .scaleExtent([1, 4])
    .on("zoom", zoomed);

  function zoomed() {
    map.attr("transform", d3.event.transform);
  }

  svg.call(zoom);

}




 