import fs from "node:fs";
import { calculate_num_of_floors, calculate_position } from "./calculate-steps.mjs";

let data = null

try {
    data = fs.readFileSync("input.txt", "utf8");

    //const [answer, answer_two] = calculate_num_of_floors(data);
    //console.log(answer);
    //console.log(answer_two);
    const answer_one = calculate_num_of_floors(data);
    const answer_two = calculate_position(data);
    console.log(answer_one);
    console.log(answer_two);

} catch (error) {
    console.error(`Error: ${error}`)
}
