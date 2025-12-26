new Vue({
  el: "#weather",
  data: {
    woeid: "714939",
    location: "",
    status: "",
    time: "",
    temperature: "0",
    humidity: "0",
    wind: "0",
    pressure: "0",
    forecast: [],
    error: false
  },
  mounted: function() {
    this.changeLocation();
  },
  computed: {
    displayDate: function() {
      // Slice time
      return this.time.slice(0, 16);
    }
  },
  methods: {
    changeLocation: function() {
      // Yahoo weather API https://developer.yahoo.com/weather/
      var api =
        "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%20" +
        this.woeid +
        "%20and%20u%20%3D%20'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      var self = this;

      // Call API by Axios https://github.com/mzabriskie/axios
      axios
        .get(api)
        .then(function(response) {
          var channel = response.data.query.results.channel;
          if (channel) {
            self.location = channel.location.city + ", " + channel.location.country;
            self.time = channel.item.pubDate;
            self.status = channel.item.condition.text;
            self.temperature = channel.item.condition.temp;
            self.humidity = channel.atmosphere.humidity;
            self.pressure = channel.atmosphere.pressure;
            self.wind = channel.wind.speed;
            self.forecast = channel.item.forecast;
          } else {
            self.error = true;
          }
        })
        .catch(function(error) {
          self.error = true;
        });
    },
    
   
       // https://developer.accuweather.com/sites/default/files/31-s.png

    
    getDay: function(status) {
       switch (status.toLowerCase()) {
       case "mon":
            return "Lun";
       case "tue":
            return "Mar";
        case "wed":
            return "Mer";
        case "thu":
            return "Gio";
        case "fri":
            return "Ven";
        case "sat":
            return "Sab";
        case "sun":
            return "Dom";
        case "default":
            return "---";
      }         
    },
    
 
       
    getThumbnail: function(status, size) {
      switch (status.toLowerCase()) {
        case "hot":
			return "img/36.png";
        case "sunny":
            return "img/32.png";
        case "mostly sunny":
            return "img/34.png";           
        case "thunderstorms":
        	return "img/4.png";
        case "severe thunderstorms":
			return "img/3.png";
        case "scattered thunderstorms":
			return "img/38.png";
        case "partly cloudy":
        	return "img/34.png";
        case "mostly cloudy":
        	return "img/28.png";        
        case "cloudy":
			return "img/26.png";
        case "showers":
        	return "img/12.png";
        case "scattered showers":
        	return "img/11.png";
        case "rain":
          	return "img/40.png";
        case "snow":
        	return "img/16.png";
        case "heavy snow":
        	return "img/41.png";
        case "snow flurries":
        	return "img/13.png";
        case "blowing snow":
          	return "img/15.png";
        case "sleet":
          	return "img/18.png";
        case "windy":
			return "img/24.png";
			
		
        default:
 			return "img/26.png";
       }
    }
  }
});