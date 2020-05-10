export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
}

export const hasShadowDom = (el: HTMLElement) => {
  return el.shadowRoot && !!(el as any).attachShadow
}

export interface Planet {
  id: string
  name: string
  discoveredBy: string
  discoveryDate: string
  gravity: string
}

function transform(solarSystem: any): Planet[] {
  return solarSystem.bodies.map((x) => {
    return {
      id: x.id,
      name: x.englishName,
      discoveredBy: x.discoveredBy,
      discoveryDate: x.discoveryDate,
      gravity: x.discoveryDate,
    }
  })
}

export async function getSolarSystem(): Promise<Planet[]> {
  const jsonHeader = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  }

  const body = `bodies`

  try {
    return await fetch(`https://api.le-systeme-solaire.net/rest/${body}`, {
      method: 'GET',
      headers: jsonHeader,
    })
      .then((response) => response.json())
      .then(transform)
  } catch (error) {
    throw console.log(error)
  }
}
