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


