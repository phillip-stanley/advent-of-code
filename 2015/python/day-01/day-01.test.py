import unittest
import io
from calculate_floor import calculate_num_of_floors

class TestCalculateNumOfFloors(unittest.TestCase):

    def test_calculates_3_floors(self):
        mock_file = io.StringIO("(((")
        self.assertEqual(calculate_num_of_floors(mock_file), 3, 'should be 3')

    def test_calculates_10_floors(self):
        mock_file = io.StringIO("((((())()(((()(())((((")
        self.assertEqual(calculate_num_of_floors(mock_file), 10, 'should be 10')

    def test_calculates_21_floors(self):
        mock_file = io.StringIO("((((())()(((()(())((((((((())()(((()(())(((((")
        self.assertEqual(calculate_num_of_floors(mock_file), 21, 'should be 21')

    def test_correctly_ignores_whitespace(self):
        mock_file = io.StringIO("((((())()(((()(())((((((((())()(((()(())((((( ")
        self.assertEqual(calculate_num_of_floors(mock_file), 21, 'should be 21')

if __name__ == '__main__':
    unittest.main()

