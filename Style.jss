style.css

/* General Reset */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

/* Body Styling */
body {
    background: linear-gradient(to right, #4facfe, #00f2fe);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 20px;
    color: #333;
}

/* Container */
#weatherDashboard {
    background-color: #ffffffdd;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    max-width: 400px;
    width: 100%;
}

/* Title */
h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

/* Form Styling */
form {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

input[type="text"] {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
}

button {
    padding: 8px 16px;
    border: none;
    background-color: #4facfe;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background-color: #00c3ff;
}

/* Weather Result Styling */
#weatherResult {
    margin-top: 20px;
}

#weatherResult h2 {
    margin-bottom: 10px;
    color: #222;
}

#weatherResult p {
    margin: 5px 0;
    font-size: 16px;
}


---

Example HTML Usage (with container)

Update your HTML to include a container for styling:

<body>
    <div id="weatherDashboard">
        <h1>Weather Dashboard</h1>
        <form id="weatherForm">
            <input type="text" id="cityInput" placeholder="Enter city name">
            <button type="submit">Get Weather</button>
        </form>
        <div id="weatherResult"></div>
    </div>
    <script src="script.js"></script>
</body>


