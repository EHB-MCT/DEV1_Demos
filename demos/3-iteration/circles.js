"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles();

function drawCircles() {

    let i = 1;
    while (i <= 4) {
        context.fillStyle = Utils.hsl(i * 90, 100, 50);
        Utils.fillCircle(i * 100, i * 100, i * 20);
        i++;
    }

}