export const formatDate = (
    timestamp: number | undefined
): string | undefined => {
    if (!timestamp) return undefined;

    const thisDate = new Date(timestamp);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(thisDate);
};
