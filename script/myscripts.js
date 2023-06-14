
        function updateTime() {
          var now = new Date();
          var hours = now.getHours();
          var minutes = now.getMinutes();
          var seconds = now.getSeconds();
          
          // Add leading zeros if needed
          hours = hours.toString().padStart(2, '0');
          minutes = minutes.toString().padStart(2, '0');
          seconds = seconds.toString().padStart(2, '0');
          
          var timeString = hours + ":" + minutes;
          document.getElementById("current-time").textContent = timeString;
        }
        
        // Update the time every second
        setInterval(updateTime, 1000);
        
        function updateDate() {
          var now = new Date();
          var month = now.toLocaleString('default', { month: 'long' });
          var day = now.getDate();
          var year = now.getFullYear();
          var dateString = month + " " + day + ", " + year;
          document.getElementById("current-date").textContent = dateString;
        }
    
        updateDate(); // Update the date when the page loads
    
        // If you want to update the date continuously, you can use setInterval() like this:
        // setInterval(updateDate, 1000); // Update the date every second
    
    
    
        // Weather API endpoint and API key
        const apiKey = '10d164c1c10e4517863150035232105';
        const apiUrl = 'https://api.weatherapi.com/v1/current.json?q=London&key=' + apiKey;

        // Function to fetch weather data from the API
        async function getWeatherData() {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                return data;
            } catch (error) {
                console.log('Error fetching weather data:', error);
            }
        }

        // Function to update the weather display
        function updateWeatherDisplay(data) {
            const weatherContainer = document.querySelector('.weather-container');
            const temperatureElement = document.querySelector('.temperature');
            const descriptionElement = document.querySelector('.description');
            const humidityElement = document.querySelector('.humidity');
            const weatherIconElement = document.querySelector('.weather-icon');

            // Update the weather data in the display
            temperatureElement.textContent = `${data.current.temp_c}°C`;
            descriptionElement.textContent = data.current.condition.text;
            humidityElement.textContent = `Humidity: ${data.current.humidity}%`;
            weatherIconElement.src = data.current.condition.icon;

            // Show the weather display
            weatherContainer.style.display = 'block';
        }

        // Fetch weather data and update the display
        getWeatherData()
            .then(data => updateWeatherDisplay(data))
            .catch(error => console.log('Error:', error));
    
    
        function changeBackgroundImage() {
            var date = new Date();
            var day = date.getDate();
            var imageNumber = ((day - 1) % 3) + 1;
            var imageUrl = 'backgrounds/' + imageNumber + '.jpg?' + Date.now();
            document.body.style.backgroundImage = 'url(' + imageUrl + ')';
        }
        // Call the function to change the background image on page load
        window.onload = changeBackgroundImage;
