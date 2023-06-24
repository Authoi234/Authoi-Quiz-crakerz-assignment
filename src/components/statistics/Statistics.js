import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()
    const data2 = data.data;
    return (
        <div className='overflow-hidden'>
            <p className='mt-20 flex justify-center items-center'>
                <LineChart
                    width={800}
                    height={450}
                    data={data2}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line dataKey={'id'} stroke='red'></Line>
                </LineChart>
            </p>
            <p className='mt-20 lg:flex md:block justify-center items-center'>
                <AreaChart
                    width={600}
                    height={400}
                    data={data2}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                </AreaChart>
                <BarChart
                    width={600}
                    height={400}
                    data={data2}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" stackId="a" fill="#8884d8" />
                    <Bar dataKey="id" stackId="a" fill="#82ca9d" />
                </BarChart>
            </p>
            <p className='mt-20 lg:flex md:block justify-center items-center'>
                <ComposedChart
                    width={600}
                    height={400}
                    data={data2}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="total" fill="#413ea0" />
                    <Line type="monotone" dataKey="total" stroke="#ff7300" />
                    <Scatter dataKey="id" fill="red" />
                </ComposedChart>
                <PieChart
                    width={600}
                    height={400}
                >
                    <Pie dataKey="total"
                        isAnimationActive={true}
                        data={data2}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label></Pie>
                    <Tooltip></Tooltip>
                </PieChart>

            </p>
        </div>
    );
};

export default Statistics;