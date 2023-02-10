import React from 'react'
import { Pie, PieChart, Tooltip } from 'recharts'


const SocialmediaBar = () => {



  const data = [
    { name: "Instagram", value: 8000 },
    { name: "facebook", value: 3000 },
    { name: "whatsup", value: 4000 },
    { name: "snapchat", value: 9000 }
  ]


  return (


    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <PieChart width={730} height={250}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  )
}

export default SocialmediaBar