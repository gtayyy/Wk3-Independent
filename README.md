# Numbers to 'hood numbers
By Grant Abel

# Development Testing 

### Describe: The application will take a user submitted number and return an array from "0" to the inputted number, with numbers including digits "1, 2, 3" returning a particular word or phrase. The corresponding phrase for "3' takes precedent over the corresponding word for "2" and "1"; the corresponding word for "2" takes precedent over the corresponding word for "1".

## Test: It should return an array of numbers from 0 to the user's given number
Code: zeroToNumArray(12)
Result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

## Test: It should replace numbers that contain a "1" with "Beep!"
Code: modify1Array(11)
Result: [0, Beep!, 2, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Beep!]

## Test: It should replace numbers that contain a "2" with "Boop!"
Code: strToArray2(12)
Result: [0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!]

## Test: It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: strToArray3(14)
Result: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!]




# Brief _A web app that takes a user input of any number, and returns a modified count from '0' to the number inputted, with words inserted correlating to numbers 1, 2, and 3._

## Technologies Used

* _HTML_
* _JavaScript_

### Description _This web app allows users to input a number, and returns a modified count from '0' to the input number, with numbers containing a 1, 2, or 3 returning the words 'beep', 'boop', and 'won't you be my neighbor?', respectively._

### Setup/Installation Requirements _You are able to access coding for this app via my GitHub repository, found at https://github.com/gtayyy/Wk3-Independent.git. You will want to create a local repository, fork to your personal GitHub account, and pull to  your local._

### Known Bugs _No known bugs._

### License _MIT_

### Copyright (c) _10.23.2023_ _Grant Abel_

### Last Revised: _October 29, 2023_