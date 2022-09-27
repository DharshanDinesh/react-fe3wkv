import React from 'react';
import './style.css';

export default function App() {
  const hex = {
    1: {
      x: 750,
      y: 0,
    },
    2: {
      x: 1000,
      y: 500,
    },
    3: {
      x: 750,
      y: 1000,
    },
    4: {
      x: 250,
      y: 1000,
    },
    5: {
      x: 0,
      y: 500,
    },
    6: {
      x: 250,
      y: 0,
    },
  };

  function daa(a = hex) {
    let str = [];
    const adsf = Object.values(a);

    adsf.forEach((data, index) => {
      str = [...str, data.x, data.y];
    });
    return str;
  }

  function cressateCO(n = 2) {
    let a = [];
    for (let i = n - 1; i >= -n + 1; i--) {
      for (let j = n - 1; j >= -n + 1; j--) {
        for (let k = n - 1; k >= -n + 1; k--) {
          if (i + j + k === 0) {
            a.push([i, j, k]);
          } else {
            continue;
          }
        }
      }
    }
    return a;
  }
  console.log(cressateCO());
  function add(n = 2) {
    var max = n + (n - 1);
    let a = [];
    for (let i = n - 1; i >= -n + 1; i--) {
      console.log(max - Math.abs(i));
      a.push(max - Math.abs(i));
    }
    return a;
  }

  return (
    <div
      style={{
        margin: '1%',
        position: 'relative',
        display: 'flex',
      }}
    >
      {[...cressateCO()].map((e, i) => (
        <div
          style={{
            position: 'absolute',
            top:
              e[0] === 0 && e[1] === 0 && e[2] === 0
                ? '250px'
                : e[0] === 1 && e[1] === 0 && e[2] === -1
                ? '0px'
                : e[0] === -1 && e[1] === 0 && e[2] === +1
                ? '500px'
                : (e[0] === 0 && e[1] === 1 && e[2] === -1) ||
                  (e[0] === 1 && e[1] === -1 && e[2] === 0)
                ? '100px'
                : (e[0] === 0 && e[1] === -1 && e[2] === +1) ||
                  (e[0] === -1 && e[1] === 1 && e[2] === 0)
                ? '400px'
                : '',
            left:
              (e[0] === 0 && e[1] === 0 && e[2] === 0) ||
              (e[0] === 1 && e[1] === 0 && e[2] === -1) ||
              (e[0] === -1 && e[1] === 0 && e[2] === 1)
                ? '150px'
                : (e[0] === 1 && e[1] === -1 && e[2] === 0) ||
                  (e[0] === 1 && e[1] === 0 && e[2] === -1)
                ? '0px'
                : (e[0] === -1 && e[1] === 1 && e[2] === 0) ||
                  (e[0] === -1 && e[1] === 0 && e[2] === -1) ||
                  (e[0] === 0 && e[1] === 1 && e[2] === -1)
                ? '300px'
                : '',
          }}
        >
          <Otha pt={daa(hex)} e={e.join('')} />
        </div>
      ))}
    </div>
  );
}

function Otha({ pt, e }) {
  return (
    <svg
      class="hexagon-mask"
      viewBox="0 0 1000 1000"
      width="100px"
      height="100px"
      version="1.1"
      style={{ margin: '2%' }}
      fill="red"
    >
      <polygon points={pt} stroke="black"></polygon>
      <text x="500" y="600" text-anchor="middle" fill="black" font-size="400">
        {e}
      </text>
    </svg>
  );
}
