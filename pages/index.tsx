import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Paper, TextInput, Button, Text, Group } from "@mantine/core"
import { useState } from 'react'

// localhost:3000 -> Home

// Design the UI
// Using the openweather API to call the data result

const API_KEY = "d43e193aab8791bd97f1cac218090e18"

const Home: NextPage = () => {  
  const [cityInput, setCityInput] = useState("");

  const [weatherData, setWeatherData] = useState<any>({}); {city: "Seattle"}

  async function getWeathterData() {
    console.log("Button pressed");
    // query data if there is an error, throw
    // If not, save data
    try {
      const serverResponse = await fetch (
        "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" +
        cityInput +
        "&appid=" +
        API_KEY +
        "&units=imperial"
      )
      const data = await serverResponse.json();
      console.log(data);
      if (data?.cod === "400") throw data;
      setWeatherData(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  console.log(cityInput);

  return (
    <div
      style = {{
        position: 'static',
        height: '100vh',
        backgroundImage: "url('https://littlevisuals.co/images/canal.jpg')",
        backgroundSize: 'cover',
      }}
      >
        <div
          style = {{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
        <Paper withBorder p = 'lg' style = {{maxWidth: '500px'}}>
          <Group position= 'apart'>
            <Text size = 'xl' weight={500}>
              Get The Weataher!
            </Text>
          </Group>
          <Group position= 'apart'>
            <Text size = 'lg'>
              Enter a city, and get the weather below!
            </Text>
          </Group>
          <Group position= 'apart'>
            <TextInput
            label = "City Name"
            placeholder="ex: Ho Chi Minh"
            onChange={(e) => setCityInput(e.target.value)} // C -> setCityInput("C")  
            />
          </Group>
          <Group position= 'apart'>
            <Button variant = "gradient" size = "md" onClick={() => getWeathterData()}>
              Get Weather
            </Button>
          </Group>
          {Object.keys(weatherData).length !== 0 ?
            <>
              <Group position= 'left'>
                <Text>
                  {weatherData.name} Weather                 
                </Text>
              </Group>
              <Group position= 'left'>
                
                <img
                  src = {"http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@4x.png"}
                  width = "100px"
                  height= "100px"
                />

                <Text size = "lg" weight ={500}>
                  Currently {weatherData.main.temp} &deg;F                 
                </Text>
              </Group>
            </>
            : null
          }
        </Paper>
        </div>
    </div>
  )
}

export default Home