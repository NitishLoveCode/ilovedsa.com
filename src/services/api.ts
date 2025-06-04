import axiosInstance from './Instance';

/**
 * GET request wrapper
 * @param url - The endpoint to fetch data from
 * @returns Promise resolving to type T
 */
export const getRequest = async <T>(url: string, params?: any): Promise<T> => {
  const response = await axiosInstance.get<T>(url, {params});
  return response.data;
};

/**
 * POST request wrapper
 * @param url - The endpoint to send data to
 * @param data - The payload to send in the request body
 * @returns Promise resolving to type T
 */
export const postRequest = async <T, D = unknown>(url: string, data: D): Promise<T> => {
  const response = await axiosInstance.post<T>(url, data);
  return response.data;
};

/**
 * PUT request wrapper
 * @param url - The endpoint to update data at
 * @param data - The payload to replace existing data
 * @returns Promise resolving to type T
 */
export const putRequest = async <T, D = unknown>(url: string, data: D): Promise<T> => {
  const response = await axiosInstance.put<T>(url, data);
  return response.data;
};

/**
 * PATCH request wrapper
 * @param url - The endpoint to partially update data
 * @param data - The payload containing partial changes
 * @returns Promise resolving to type T
 */
export const patchRequest = async <T, D = unknown>(url: string, data: D): Promise<T> => {
  const response = await axiosInstance.patch<T>(url, data);
  return response.data;
};

/**
 * DELETE request wrapper
 * @param url - The endpoint to delete data from
 * @returns Promise resolving to type T
 */
export const deleteRequest = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.delete<T>(url);
  return response.data;
};
