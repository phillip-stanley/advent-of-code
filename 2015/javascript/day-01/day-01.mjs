import fs from "node:fs";
import { calculate_num_of_floors } from "./calculate-steps.mjs";

let data = null

try {
    data = fs.readFileSync("input.txt", "utf8");

    const answer = calculate_num_of_floors(data);
    console.log(answer);

} catch (error) {
    console.error(`Error: ${error}`)
}
