export const fetchClient = async (url, options) => {
    return fetch(url, options);
};

export async function fetchJSON(url, options = {}) {
    try {
        const res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            ...options,
        });

        if (!res.ok) {
            throw new Error(`Fetch error: ${res.status} ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error("fetchJSON error", error);
        throw error;
    }
}

