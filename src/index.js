class Calculator {
    Sum(input) {
        if(!input) {
            return 0;
        }

        let numbers = []
        if(input[0] == '/') {
            const delimeter = input[2];
            numbers = input.split('\n')[1].split(delimeter).map((element) => parseInt(element, 10));
        } else {
            input = input.replace(/\n/g, ',')
            numbers = input.split(',').map((element) => parseInt(element));
        }

        const negatives = numbers.filter((element) => element < 0);

        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives[0]}`)
        }

        return numbers.reduce((prev, current) => {
            return prev + current;
        }, 0);
    }
}

module.exports = {
    Calculator,
}
