import React from "react";
import Card from "../components/Projectcard";
import news from '../images/news.png'
import hhh from '../images/hhh.png'
import weather from '../images/weather.png'
export default function Projects() {
    return (
        <div className="container my-5">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col mb-4">
                    <Card title='News Hub'  git='https://github.com/chinmayananda20/newshub' image={news} desc="This is a web application which fetches latest headlines from news api.User can access daily latest updates of news" />
                </div>
                <div class="col mb-4">
                    <Card title='Happu Hours Home' git='https://github.com/chinmayananda20/HHH' image={hhh} desc="Happy Hours at Home is a engaging mocktail blog, fetching recipes of mocktails dynamically from the Punk API." />
                </div>
                <div class="col mb-4">
                    <Card title='Weather' git='https://github.com/chinmayananda20/Cod-Tech-IT-Solutions-Task-1' image={weather} desc="This is the application which fetches real time weather and future forecasts from weather api." />
                </div>
            </div>
        </div>
    );
}
