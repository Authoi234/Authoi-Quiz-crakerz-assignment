import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()
    const data2 = data.data;
    return (
        <div className='overflow-hidden'>
            <p className='mt-20 flex justify-center md:visible items-center'>
                <ResponsiveContainer width='100%' aspect={3}>
                    <LineChart
                        width={500}
                        height={300}
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
                </ResponsiveContainer>
            </p>
            <p className='mt-20 lg:flex md:block justify-center items-center'>
                <ResponsiveContainer width={'100%'} aspect={2}>
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
                </ResponsiveContainer>
                <ResponsiveContainer width={'100%'} aspect={2}>
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
                </ResponsiveContainer>
            </p>
            <p className='mt-20 lg:flex md:block justify-center items-center'>
                <ResponsiveContainer width={'100%'} aspect={2}>
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
                </ResponsiveContainer>
                <ResponsiveContainer width={'100%'} aspect={2}>
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
                </ResponsiveContainer>

            </p>
        </div>
    );
};

export default Statistics;