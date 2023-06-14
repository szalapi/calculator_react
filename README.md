# Calculator app

This codebase implements a Calculator using ReactJs.

## How to Run

Please use `npm i` followed by `npm start` to run the application in the development mode:
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## What is supported?

Much thought has gone into adding enough features while maintaining a rather small scope and not introducing uncessary complexities (f.e. state management).

### Functionality

The application allows for:
1. Choosing 2 sets of numbers (second set, after an operator is selected),
2. Performing following operators on the mentioned sets:
>- Adding,
>- Substracting,
>- Multiplying,
>- Dividing,
>- Percentile,
>- Inverting,
>- Adding decimal, 
>- Calculating,
>- Resetting.
3. Resetting a completed calculation with a tap on any number.

### Safe guards

Those elements should be working as expected and guarding user from possible errors:
- Dividing by 0,
- Going over the result Screen (due to the amount of digits),
- Changing operators after the calculation has been concluded.

## Future improvements (with more time to spare)

This assignment has been rated for couple of hours, so not much can be added in the timespan allocated. Still the elemenents I would like to add:
1. Possibility of typing in numbers in the Screen input,
2. Scaling of the Screen text based on the result to accomodate for more digits,
3. Better styles across the entire Calculator instance (f.e. color coding different options like operations),
4. Possibility of substracting the last digit from the value,
5. Unit Tests around the logic in the application.
