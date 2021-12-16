/**
 * @param {string} url
 * @returns {Promise<ArrayBuffer>}
 */
async function fetchBinary(url) {
  const response = await fetch(url);
  return await response.arrayBuffer();
}

/**
 * @template T
 * @param {string} url
 * @returns {Promise<T>}
 */
async function fetchJSON(url) {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    return null;
  }
}

/**
 * @template T
 * @param {string} url
 * @param {File} file
 * @returns {Promise<T>}
 */
async function sendFile(url, file) {
  return await (
    await fetch(url, {
      body: file,
      headers: {
        'Content-Type': 'application/octet-stream',
      },
      method: 'POST',
    })
  ).json();
}

/**
 * @template T
 * @param {string} url
 * @param {object} data
 * @returns {Promise<T>}
 */
async function sendJSON(url, data) {
  const jsonString = JSON.stringify(data);
  const uint8Array = new TextEncoder().encode(jsonString);
  const { gzip } = await import('pako');
  const compressed = gzip(uint8Array);

  const result = await (
    await fetch(url, {
      body: compressed,
      headers: {
        'Content-Encoding': 'gzip',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
  ).json();
  return result;
}

export { fetchBinary, fetchJSON, sendFile, sendJSON };
