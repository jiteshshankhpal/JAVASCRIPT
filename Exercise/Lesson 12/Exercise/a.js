import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"
import isSAtSun from "./b.js";

const today  = dayjs();

const date = today.format('dddd');

console.log(isSAtSun(date));