"use strict";
import context from "../../scripts/context.js";

export function fillCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
}

export function hsl(h, s, l) {
    return "hsl(" + h + "," + s + "%," + l + "%)";
}