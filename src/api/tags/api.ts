import axios from "axios";
import { CategoryTag } from "../../ts/interfaces/tag.interface";
import mockTags from "./mockTags";

// API layer
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_TAGS_URL,
});

interface MockTagsApi {
    status: number;
    message: string;
    data: CategoryTag[];
}

// End points
const getTags = async () => {
    const response = await apiClient.request({
        url: "/tags/endpoint",
        method: "GET",
    });
    return response;
};

const getMockTags = async (): Promise<MockTagsApi> => {
    const tags = mockTags;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.01;

            if (success) {
                resolve({
                    status: 200,
                    message: "Success",
                    data: tags,
                });
            } else {
                reject({
                    status: 500,
                    message: "Internal server error",
                    data: [],
                });
            }
        }, 1000);
    });
};

export default {
    getTags,
    getMockTags,
};
