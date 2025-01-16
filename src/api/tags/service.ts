import TagsApi from "./api";

const getTags = async (api = TagsApi) => {
    const response = await api.getTags();
    const tags = response.data.text;
    return tags;
};

const getMockTags = async (api = TagsApi) => {
    const response = await api.getMockTags();
    const tags = response.data;
    return tags;
};

export default { getTags, getMockTags };
