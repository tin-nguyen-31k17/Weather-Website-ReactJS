import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Paper, TextInput, Button, Text, Group } from '@mantine/core'

// localhost:3000 -> Home

// Design the UI
// Using the openweather API to call the data result

export default function Home() 
{
  return 
  (
    <div
      style =
      {{
        position: 'static',
        height: '100vh',
        backgroundImage: "url('https://littlevisuals.co/images/atlantic_ridge')",
        backgroundSize: "cover",
      }}
      >
        <div
          style = 
          {{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
        <Paper withBorder p = "lg" style = {{maxWidth: "500px"}}>
          <Group position= "apart">
            <Text size = "xl" weight={500}>
                Get The Weataher!
            </Text>
          </Group>
        </Paper>
        </div>
    </div>
  )
}
