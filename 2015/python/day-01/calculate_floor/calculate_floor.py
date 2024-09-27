import functools

def calculate_num_of_floors(data):
    """Returns the floor number based on a string of steps.

    Args:
        data: string represening floors of an apartment moved to
            represented in `(` and `)` where `(` = up one floor and
            `)` = down one floor.

    Returns:
        number: the floor number you land on.
    """
    steps = [char for char in data.read().strip()]
    return functools.reduce(lambda accumulator, current_value: accumulator+1 if current_value == '(' else accumulator -1, steps, 0)

def calculate_position(data):
    """Returns the position in the movements that results in first entering
        the basement.

    Args:
        data: string represening floors of an apartment moved to
            represented in `(` and `)` where `(` = up one floor and
            `)` = down one floor.

    Returns:
        number: the position in steps where you first arrive
        at the basement (-1)

    """
    steps = [char for char in data.read().strip()]
    floor_number = 0
    position = 0

    for index, step in enumerate(steps):
        if step == '(':
            floor_number += 1
        if step == ')':
            floor_number -= 1
        if floor_number == -1:
            position = index
            break

    return position

