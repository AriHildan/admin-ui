/* eslint-disable react/prop-types */
import * as React from "react";

import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
  } from "@mui/x-charts/Gauge";
<<<<<<< HEAD
  import { useContext } from "react";
  import { ThemeContext } from "../../../context/themeContext";

  function GaugePointer(props) {
    const { color } = props;
=======

  import { useContext} from "react";
import { ThemeContext } from "../../../context/themeContext";
  
  function GaugePointer(props) {
    const{color} = props;
>>>>>>> 32d77f7c823ec37ea4b7b234360e60b68bdccf83
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();
  
    if (valueAngle === null) {
      // No value to display
      return null;
    }
    const target = {
      x: cx + outerRadius * Math.sin(valueAngle),
      y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
      <g>
        <circle cx={cx} cy={cy} r={5} fill={color} />
        <path
          d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
          stroke={color}
          strokeWidth={3}
        />
      </g>
    );
  }
  
  export default function CompositionExample(props) {
<<<<<<< HEAD
    const { theme } =  useContext(ThemeContext);
=======
    const{theme} = useContext(ThemeContext);
>>>>>>> 32d77f7c823ec37ea4b7b234360e60b68bdccf83
    const { desc } = props;

    return (
      <GaugeContainer
        width={130}
        height={100}
        startAngle={-90}
        endAngle={90}
        value={desc}
        sx={() => ({
          [`& .value-arc`]: {
            fill: theme.color,
          },
        })}
      >
        <GaugeReferenceArc />
        <GaugeValueArc className="value-arc" />
        <GaugePointer color={theme.color} />
      </GaugeContainer>
    );
  }
  