{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Array of muted, mature, and Japanese-inspired colors\
const colors = [\
  "#2c3e50", // Deep navy\
  "#34495e", // Muted navy\
  "#4a6b7c", // Soft slate\
  "#5d6d7e", // Grayish blue\
  "#6c7a89", // Muted gray\
  "#7f8c8d", // Dusty teal\
  "#95a5a6", // Light grayish teal\
  "#a6a6a6", // Soft gray\
  "#bdc3c7", // Light gray\
  "#d5dbdb", // Pale gray\
  "#ecf0f1", // Soft white\
  "#d2d7d3", // Muted greenish gray\
  "#a3b2a5", // Dusty green\
  "#8e9b97", // Muted sage\
  "#7a8a7f", // Deep muted green\
  "#6b7b6e", // Forest green\
  "#5a6a5f", // Dark muted green\
  "#4a5a4f", // Deep green\
  "#3a4a3f", // Dark forest green\
  "#2a3a2f", // Almost black green\
  "#1a2a1f", // Deepest green\
  "#0a1a0f", // Near black\
];\
\
// Function to select a random color\
function getRandomColor() \{\
  const randomIndex = Math.floor(Math.random() * colors.length);\
  return colors[randomIndex];\
\}\
\
// Apply the random color to the body background\
window.onload = function () \{\
  document.body.style.backgroundColor = getRandomColor();\
\};}