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

const Home: NextPage = () =>
{  
  const [cityInput, setCityInput] = useState("");

  async function getWeathterData() 
  {
    console.log("Button pressed");
  }

  return (
    <div
      style =
      {{
        position: 'static',
        height: '100vh',
        backgroundImage: "url('https://littlevisuals.co/images/canal.jpg')",
        backgroundSize: 'cover',
      }}
      >
        <div
          style = 
          {{
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
            placeholder="ex: San Dieago"
            onChange={(e) => setCityInput(e.target.value)} // C -> setCityInput("C")  
            />
          </Group>
          <Group position= 'apart'>
            <Button variant = "gradient" size = "md" onClick={() => getWeathterData}>
              Get Weather
            </Button>
          </Group>
        </Paper>
        </div>
    </div>
  
  )
}

export default Home