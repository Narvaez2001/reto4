'use strict';

import foods from "./modules/foods.js";
import header from "./modules/header.js";

const documentReady = () => {
    foods();
    header();
};

document.addEventListener('DOMContentLoaded', documentReady);