import { createClient, createManagementClient } from 'microcms-js-sdk';
import { parseConfig } from './config.js';
const config = parseConfig();
export const microCMSClient = createClient({
    serviceDomain: config.serviceDomain,
    apiKey: config.apiKey,
});
export const microCMSManagementClient = createManagementClient({
    serviceDomain: config.serviceDomain,
    apiKey: config.apiKey,
});
export const microCMSConfig = {
    serviceDomain: config.serviceDomain,
    apiKey: config.apiKey,
};
export async function getList(endpoint, queries) {
    return await microCMSClient.getList({
        endpoint,
        queries,
    });
}
export async function getListDetail(endpoint, contentId, queries) {
    return await microCMSClient.getListDetail({
        endpoint,
        contentId,
        queries,
    });
}
export async function create(endpoint, content, options) {
    return await microCMSClient.create({
        endpoint,
        content,
        ...options,
    });
}
export async function update(endpoint, contentId, content, options) {
    return await microCMSClient.update({
        endpoint,
        contentId,
        content,
        ...options,
    });
}
export async function patch(endpoint, contentId, content, options) {
    return await microCMSClient.update({
        endpoint,
        contentId,
        content,
        ...options,
    });
}
export async function deleteContent(endpoint, contentId) {
    return await microCMSClient.delete({
        endpoint,
        contentId,
    });
}
//# sourceMappingURL=client.js.map