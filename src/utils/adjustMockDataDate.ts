export const getDates = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();

    return { year, month };
};

export const getTimeZoneOffset = () => {
    return new Date().getTimezoneOffset() * 60 * 1000;
};
