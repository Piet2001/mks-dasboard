export const VehicleData = [
    {
        "ID": 0,
        "name": "SI‐2",
        "namelong": "Snel Inzetbare Eenheid (2 pers.)"
    },
    {
        "ID": 1,
        "name": "TS 8/9",
        "namelong": "Tankautospuit (8/9 personen)"
    },
    {
        "ID": 2,
        "name": "AL",
        "namelong": "Autoladder"
    },
    {
        "ID": 3,
        "name": "DA-OVD",
        "namelong": "Officier van Dienst - Brandweer"
    },
    {
        "ID": 4,
        "name": "HV",
        "namelong": "Hulpverleningsvoertuig"
    }
]

export var Versions = [
    {
        locale: "nl_NL",
        avg: 0,
    },
    {
        locale: "de_DE",
        avg: 0,
    }
]

async function getavg(locale) {
    const data = await fetch(`https://raw.githubusercontent.com/Piet2001/Missionfiles-All-Versions/master/Missions/${locale}.json`)
        .then(response => response.json())
        .then(data => {
            return data
        })
    const avg = data.reduce((total, next) => total + next.average_credits, 0) / data.length;

    return avg
}