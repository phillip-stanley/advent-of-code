export const calculate_num_of_floors = (data) => {
    const moves_made = data.trim().split('');
    const initial_floor = 0;

    return moves_made.reduce((accumulator, current_value) => {
        return current_value === '(' ? accumulator + 1 : accumulator - 1
    }, initial_floor)
}

