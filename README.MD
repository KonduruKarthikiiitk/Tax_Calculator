# Tax Calculator
## Table of contents
- Overview
- Features
- Technologies Used
- Link to the hosted Web App.
- Usage
- Test Cases

## Overview

The Tax Calculator is a simple web application that helps users calculate their tax based on their age group, gross annual income, extra income, and deductions. It provides a convenient way for individuals to estimate their tax liability and understand their financial obligations.


## Features

- Calculate tax based on age group ( <40, ≥40 & <60, ≥60).
- Account for gross annual income, extra income, and deductions.
- Dynamic calculation of tax based on user input.
- Clear display of overall income and income after tax deduction.

## Technologies Used

- HTML
- CSS (Bootstrap for styling)
- JavaScript (jQuery for DOM manipulation)
- Git for version control

## Installation

To run the Tax Calculator locally, follow these steps:

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/KonduruKarthikiiitk/tax-calculator.git
2. Navigate to the project directory.
 ```bash
   cd tax-calculator
```
## Link to the hosted Web App
[Live Demo](https://tax-calculator-txt4.vercel.app/)

## Usage

1. Select your age group from the dropdown menu.
2. Enter your gross annual income, extra income, and deductions in the respective input fields.
3. Click the "Calculate Tax" button to see the calculated tax amount.
4. Review the displayed overall income and income after tax deduction.

## Test Cases
1.Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
- Inputs:

![Screenshot 2024-04-12 004454](https://github.com/KonduruKarthikiiitk/tax_calculator/assets/120019834/61b9bb24-37f0-4446-b40f-5553129aaa42)

- result:

![Screenshot 2024-04-12 004448](https://github.com/KonduruKarthikiiitk/tax_calculator/assets/120019834/01bbda41-68ed-4dda-a053-e1a19ca55505)


2. Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at 30% for people with age < 40

- Inputs:

![Screenshot 2024-04-12 010235](https://github.com/KonduruKarthikiiitk/tax_calculator/assets/120019834/4635ef5d-4e65-4157-8bc8-c39d007f0c92)

- result:

![Screenshot 2024-04-12 010243](https://github.com/KonduruKarthikiiitk/tax_calculator/assets/120019834/3735353f-c8fb-4697-af4a-1fc18dcb69ad)


3. Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at 40% for people with age ≥ 40 but < 60

- Inputs:

![Screenshot 2024-04-12 004531](https://github.com/KonduruKarthikiiitk/tax_calculator/assets/120019834/272ad84b-9d13-4618-847a-a087ebdd4af7)

- result:

![Screenshot 2024-04-12 010451](https://github.com/KonduruKarthikiiitk/tax_calculator/assets/120019834/067a8d38-e99d-402d-9c10-4a4cdc156500)


4. Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at 10% for people with age ≥ 60

- Inputs:

![Screenshot 2024-04-12 004541](https://github.com/KonduruKarthikiiitk/tax_calculator/assets/120019834/b03df9c1-8175-4ec9-a9f1-7f89abcd36e2)

- result:

![Screenshot 2024-04-12 004548](https://github.com/KonduruKarthikiiitk/tax_calculator/assets/120019834/3d63467f-e6cc-4d11-8dc1-7aaf1c3a6682)

