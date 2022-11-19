export const showMessage = (text, type) => {
    return {
        action: `MESSAGE__${type}`,
        text: text,
        type: type
    }
}