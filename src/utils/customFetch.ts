type OptionProps = {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
};

/**
 * A custom asynchronous function for making HTTP requests using the fetch API.
 *
 * @example
 * ```typescript
 * const data = await customFetch('https://api.example.com/data', { method: 'POST', body: JSON.stringify(payload) });
 * ```
 *
 * @param {string} url - The URL to send the HTTP request to.
 * @param {OptionProps} [options] - Additional options for the request (method, headers, body).
 * @returns {Promise<any>} - A promise that resolves to the parsed JSON response from the server.
 */

const customFetch = async (
  url: string,
  { method = 'GET', headers = {}, body = null }: OptionProps = {}
): Promise<any> => {
  try {
    const response = await fetch(url, { method, headers, body });

    if (!response.ok) {
      const { error }: { error: string } = await response.json();
      throw new Error(error);
    }

    return await response.json();
  } catch (error: any) {
    return error.message || 'Fetch error';
  }
};

export default customFetch;
