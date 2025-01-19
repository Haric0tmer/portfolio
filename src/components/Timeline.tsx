import { useState } from "react"
import Line from "./Line";
import Circle from "./Circle";
import TimelineElement from "./TimelineElement";

interface TimelineProps{
    locale: string;
}

function Timeline( { locale }: TimelineProps) {
  return (
    <div>
        <Line></Line>
        <Circle></Circle>
        <TimelineElement title="Test" date="10/10/2020" desc="blablablabal blabejr jlajfb ljkqsbjf sdhfqhfjk hdslqkfhjshqlfkhj"></TimelineElement>
        <Circle></Circle><Circle></Circle><Circle></Circle><Circle></Circle>
    </div>
  )
}

export default Timeline