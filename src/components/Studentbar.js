import React from 'react'
import { Bar, BarChart, Tooltip, CartesianGrid, XAxis, YAxis, Legend } from 'recharts'


const Studentbar = () => {

  const data = [
    {
      "name": "Section A",
      "class-6": 4000,
      "class-7": 2400
    },
    {
      "name": "Section B",
      "class-6": 3000,
      "class-7": 1398
    },
    {
      "name": "Section C",
      "class-6": 2000,
      "class-7": 9800
    },
    {
      "name": "Section D",
      "class-6": 2780,
      "class-7": 3908
    },
    {
      "name": "Section E",
      "class-6": 1890,
      "class-7": 4800
    },
    {
      "name": "Section F",
      "class-6": 2390,
      "class-7": 3800
    },
    {
      "name": "Section G",
      "class-6": 3490,
      "class-7": 4300
    }
  ]


  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="class-6" fill="#8884d8" />
        <Bar dataKey="class-7" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default Studentbar