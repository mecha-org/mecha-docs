import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Custom tick formatter to break long names into two lines
const formatXAxis = (tick) => {
  const words = tick.split(" ");
  if (words.length > 3) {
    return `${words.slice(0, 3).join(" ")}\n${words.slice(3).join(" ")}`;
  }
  return tick;
};

const GeekbenchChart = () => {
  const data = [
    {
      name: "Single-Core Score",
      RaspberryPi: 297,
      MechaComet: 180,
      RaspberryPi3: 118,
    },
    {
      name: "Multi-Core Score",
      RaspberryPi: 690,
      MechaComet: 520,
      RaspberryPi3: 127,
    },
    {
      name: "Idle Power Consumption",
      RaspberryPi: 2.5,
      MechaComet: 1.5,
      RaspberryPi3: null,
    },
    {
      name: "File Compression (Single-Core)",
      RaspberryPi: 309,
      MechaComet: 253,
      RaspberryPi3: 162,
    },
    {
      name: "Navigation (Single-Core)",
      RaspberryPi: 424,
      MechaComet: 383,
      RaspberryPi3: 297,
    },
    {
      name: "HTML5 Browser (Single-Core)",
      RaspberryPi: 375,
      MechaComet: 242,
      RaspberryPi3: 193,
    },
    {
      name: "PDF Renderer (Single-Core)",
      RaspberryPi: 455,
      MechaComet: 283,
      RaspberryPi3: 206,
    },
    {
      name: "Photo Library (Single-Core)",
      RaspberryPi: 246,
      MechaComet: 139,
      RaspberryPi3: 114,
    },
    {
      name: "Clang (Single-Core)",
      RaspberryPi: 416,
      MechaComet: 271,
      RaspberryPi3: 230,
    },
    {
      name: "Text Processing (Single-Core)",
      RaspberryPi: 311,
      MechaComet: 201,
      RaspberryPi3: 143,
    },
    {
      name: "Asset Compression (Single-Core)",
      RaspberryPi: 395,
      MechaComet: 260,
      RaspberryPi3: 219,
    },
    {
      name: "Object Detection (Single-Core)",
      RaspberryPi: 93,
      MechaComet: 55,
      RaspberryPi3: 47,
    },
    {
      name: "Background Blur (Single-Core)",
      RaspberryPi: 182,
      MechaComet: 69,
      RaspberryPi3: 60,
    },
    {
      name: "File Compression (Multi-Core)",
      RaspberryPi: 328,
      MechaComet: 440,
      RaspberryPi3: 174,
    },
    {
      name: "Navigation (Multi-Core)",
      RaspberryPi: 769,
      MechaComet: 842,
      RaspberryPi3: 559,
    },
    {
      name: "HTML5 Browser (Multi-Core)",
      RaspberryPi: 824,
      MechaComet: 750,
      RaspberryPi3: 16,
    },
    {
      name: "PDF Renderer (Multi-Core)",
      RaspberryPi: 1378,
      MechaComet: 1115,
      RaspberryPi3: 92,
    },
    {
      name: "Photo Library (Multi-Core)",
      RaspberryPi: 758,
      MechaComet: 502,
      RaspberryPi3: 162,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4 ">
        Benchmark Comparison: Raspberry Pi  4 vs Mecha Comet vs Raspberry Pi 3
      </h2>
      <ResponsiveContainer width="100%" height={800}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={200}
            tickFormatter={formatXAxis}
          />
          <YAxis
            domain={[50, 1500]}
            label={{ value: "Score", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="MechaComet"
            fill="rgb(187, 63, 41)"
            name="Mecha Comet"
          />
          <Bar
            dataKey="RaspberryPi"
            fill="rgb(58, 177, 84)"
            name="Raspberry Pi 4"
          />
          <Bar
            dataKey="RaspberryPi3"
            fill="rgb(27, 52, 161)"
            name="Raspberry Pi 3"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GeekbenchChart;
