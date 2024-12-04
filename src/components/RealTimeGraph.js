import React, { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const RealTimeGraph = () => {
    const chartRef = useRef(null);
    const [chart, setChart] = useState(null);
    const [priceData, setPriceData] = useState([]);

    useEffect(() => {
        // Create chart instance with current time-based time scale
        const chartInstance = createChart(chartRef.current, {
            width: chartRef.current.clientWidth,
            height: chartRef.current.clientHeight,
            layout: {
                backgroundColor: "#fff",
                textColor: "#333",
            },
            grid: {
                vertLines: {
                    visible: true,
                    color: "#eee",
                },
                horzLines: {
                    visible: true,
                    color: "#eee",
                },
            },
            priceScale: {
                borderColor: "#aaa",
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: true,
                minBarSpacing: 5, // control space between bars
            },
        });

        // Set chart as state
        setChart(chartInstance);

        return () => {
            // Cleanup chart when component unmounts
            chartInstance.remove();
        };
    }, []);

    useEffect(() => {
        const client = new Client({
            brokerURL: "/ws",
            webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
            onConnect: () => {
                client.subscribe("/stock/ltp", (message) => {
                    console.log(message.body);
                    const stockPrice = parseFloat(message.body) / 100; // Adjust price format
                    const currentTime = Date.now() / 1000; // Get current time in seconds

                    setPriceData((prevData) => {
                        const updatedData = [...prevData, { time: currentTime, value: stockPrice }].slice(-60);
                        return updatedData;
                    });
                });
            },
        });

        client.activate();

        return () => {
            client.deactivate();
        };
    }, []);

    useEffect(() => {
        if (chart && priceData.length > 0) {
            const series = chart.addLineSeries({
                color: "#0000FF", // Blue line color
                lineWidth: 2,
            });

            series.setData(priceData);
        }
    }, [chart, priceData]);

    return (
        <div
            ref={chartRef}
            style={{
                width: "100%",
                height: "400px",
                position: "relative",
            }}
        />
    );
};

export default RealTimeGraph;
