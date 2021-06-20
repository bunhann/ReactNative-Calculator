export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null
};

export const handleNumber = (value, data) => {
    if (data.currentValue === "0") {
        return { currentValue: `${value}` };
    }

    return {
        currentValue: `${data.currentValue}${value}`
    };
};

export const handleEqual = data => {
    const { currentValue, previousValue, operator } = data;

    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
        operator: null,
        previousValue: null
    };

    if (operator === "/") {
        return {
            currentValue: previous / current,
            ...resetState
        };
    }

    if (operator === "*") {
        return {
            currentValue: previous * current,
            ...resetState
        };
    }

    if (operator === "+") {
        return {
            currentValue: previous + current,
            ...resetState
        };
    }

    if (operator === "-") {
        return {
            currentValue: previous - current,
            ...resetState
        };
    }

    return data;
};

const calculator = (type, value, data) => {
    switch (type) {
        case "number":
            return handleNumber(value, data);
        case "operator":
            return {
                operator: value,
                previousValue: data.currentValue,
                currentValue: "0"
            };
        case "equal":
            return handleEqual(data);
        case "clear":
            return initialState;
        case "posneg":
            return {
                currentValue: `${parseFloat(data.currentValue) * -1}`
            };
        case "percentage":
            return {
                currentValue: `${parseFloat(data.currentValue) * 0.01}`
            };
        default:
            return data;
    }
};

export default calculator;