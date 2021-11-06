export const pull = url => fetch( url );

export const push = ( url, method, payload ) => fetch( url, {
        "method": method,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
    }
);

export const del = url => fetch( url, {
        "method": "DELETE"
    }
);