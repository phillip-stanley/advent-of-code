export const calculate_num_of_floors = (data) => {
    const moves_made = data.trim().split('');
    const initial_floor = 0;
    let floor_number = 0;

    floor_number = moves_made.reduce((accumulator, current_value, idx) => {
        return current_value === '(' ? ++accumulator : --accumulator
    }, initial_floor)

    return floor_number
}

export const calculate_position = (data) => {
    const moves_made = data.trim().split('');
    let floor_number = 0;
    let position = 0;

    for (let i = 0; i < moves_made.length; i++) {
        if (moves_made[i] === '(') floor_number += 1;
        if (moves_made[i] === ')') floor_number -= 1;
        if (floor_number === -1) {
            position = i;
            break;
        }
    }

    return position;
}

