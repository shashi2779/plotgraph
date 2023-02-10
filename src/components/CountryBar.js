import React from 'react'
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'


const CountryBar = () => {

  const data = [
    {
      "name": "LandArea",
      "Russia": 4000,
      "India": 2400,
      "amt": 2400
    },
    {
      "name": "Petrolium",
      "Russia": 3000,
      "India": 1398,
      "amt": 2210
    },
    {
      "name": "Population",
      "Russia": 2000,
      "India": 9800,
      "amt": 2290
    },
    {
      "name": "GDP",
      "Russia": 2780,
      "India": 3908,
      "amt": 2000
    },
    {
      "name": "Company",
      "Russia": 1890,
      "India": 4800,
      "amt": 2181
    },
    {
      "name": "InternateUser",
      "Russia": 2390,
      "India": 3800,
      "amt": 2500
    },
    {
      "name": "Alliance",
      "Russia": 3490,
      "India": 4300,
      "amt": 2100
    }

  ]


  return (
    
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="India" stroke="#8884d8" />
        <Line type="monotone" dataKey="Russia" stroke="#82ca9d" />
      </LineChart>
    </div>

  )

}

export default CountryBar