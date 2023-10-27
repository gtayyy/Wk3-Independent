# Numbers to 'hood numbers
By Grant Abel

# Development Testing 
## Describe: The application will take a user submitted number and return an array from "0" to the inputted number, with numbers including digits "1, 2, 3" returning a particular word or phrase. The corresponding phrase for "3' takes precedent over the corresponding word for "2" and "1"; the corresponding word for "2" takes precedent over the corresponding word for "1".

##### Test: It should return an array of numbers from 0 to the user's given number
Code: strToArray(12)
Result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

##### Test: It should replace numbers that contain a "1" with "Beep!"
Code: strToArray1(11)
Result: [0, Beep!, 2, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Beep!]

##### Test: It should replace numbers that contain a "2" with "Boop!"
Code: strToArray2(12)
Result: [0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!]

##### Test: It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: strToArray3(14)
Result: [0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!]

