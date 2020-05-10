export function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
export const hasShadowDom = (el) => {
    return el.shadowRoot && !!el.attachShadow;
};
function transform(solarSystem) {
    return solarSystem.bodies.map((x) => {
        return {
            id: x.id,
            name: x.englishName,
            discoveredBy: x.discoveredBy,
            discoveryDate: x.discoveryDate,
            gravity: x.discoveryDate,
        };
    });
}
export async function getSolarSystem() {
    const jsonHeader = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
    };
    const body = `bodies`;
    try {
        return await fetch(`https://api.le-systeme-solaire.net/rest/${body}`, {
            method: 'GET',
            headers: jsonHeader,
        })
            .then((response) => response.json())
            .then(transform);
    }
    catch (error) {
        throw error;
    }
}
