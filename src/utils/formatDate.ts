export const formatDate = (
    timestamp: number | undefined
): string | undefined => {
    if (!timestamp) return undefined;

    const thisDate = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(thisDate);
};

export const formatDateDash = (timestamp: number) => {
    if (!timestamp) return undefined;

    const thisDate = new Date(timestamp);
    const year = thisDate.getFullYear();
    const month = String(thisDate.getMonth() + 1).padStart(2, "0");
    const day = String(thisDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};
