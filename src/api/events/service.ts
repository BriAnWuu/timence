import EventsApi from "./api";

const getEvents = async (api = EventsApi) => {
    const response = await api.getEvents();
    const events = response.data.text;
    return events;
};

const getMockEvents = async (api = EventsApi) => {
    const response = await api.getMockEvents();
    const events = response.data;
    return events;
};

export default { getEvents, getMockEvents };
