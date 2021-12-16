/**
 * @param {string} url
 * @returns {Promise<ArrayBuffer>}
 */
async function fetchBinary(url) {
  const response = await fetch(url);
  if (response.ok) {
    return await response.arrayBuffer();
  } else {
    return null;
  }
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
  const response = await fetch(url, {
    body: file,
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    method: 'POST',
  });
  if (response.ok) {
    return await response.json();
  } else {
    return null;
  }
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

  const response = await fetch(url, {
    body: compressed,
    headers: {
      'Content-Encoding': 'gzip',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  if (response.ok) {
    return await response.json();
  } else {
    return null;
  }
}

export { fetchBinary, fetchJSON, sendFile, sendJSON };
