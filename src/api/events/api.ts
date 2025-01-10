import axios from "axios";
import { ReduxCalendarEventInfo } from "../../ts/interfaces/event.interface";
import mockEvents from "./mockEvents";

// API layer
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_EVENTS_URL
})

interface MockEventsApi {
    status: number
    message: string
    data: ReduxCalendarEventInfo[]
}

// End points
const getEvents = async () => {
    const response  = await apiClient.request({
        url: "/events/endpoint",
        method: "GET",
    })
    return response.data;
}

const getMockEvents = async (): Promise<MockEventsApi> => {
    const events = mockEvents;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: 200,
                message: "Success",
                data: events
            })
        }, 1000)
    })
}

export default {
    getEvents, 
    getMockEvents
};