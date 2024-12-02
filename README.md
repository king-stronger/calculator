# Calculator

A simple, interactive calculator built with HTML, CSS, and JavaScript. This calculator supports basic arithmetic operations and provides an intuitive interface for quick calculations.

## Features

- Perform basic arithmetic operations: Addition, Subtraction, Multiplication, Division.
- Reset and delete functions for flexible input management.
- Supports floating-point operations with accurate rounding.
- User-friendly display of calculations and results.

## Demo

You can view a live demo of the calculator [here](#). *(Replace `#` with the link if hosted online)*

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd calculator
    ```
3. Open the `index.html` file in your browser:
    ```bash
    firefox index.html
    ```

## Usage

1. Input numbers using the calculator's keypad.
2. Select an operator (+, -, *, /) to perform the calculation.
3. Press `=` to view the result.
4. Use `DEL` to remove the last entered character or `RESET` to clear the entire calculation.

### Example:

1. Enter `7`, `+`, `3`, and `=`.  
   Result: `10`
2. Enter `9`, `/`, `0`.  
   Result: Displays an alert "You can't divide a number by 0" and resets the calculation.

## Code Structure

- **HTML**: Defines the calculator's structure, including the keypad and display.
- **CSS**: Provides the layout and styling for an intuitive user interface.
- **JavaScript**: Implements the calculator's logic, handling user input, and performing arithmetic operations.

### Main Logic

- **Operators**: Handled dynamically using a `switch` statement.
- **Validation**: Ensures valid inputs (e.g., prevents division by zero).
- **Display**: Updates in real-time as the user interacts with the calculator.

## License

This project is not licensed. If you wish to reuse or modify it, you are free to do so, but please give proper credit.
