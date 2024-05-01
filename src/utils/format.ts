export const formatToPad = (value: number, padNumber: number = 2) => {
    return String(value).padStart(padNumber, "0");
}
