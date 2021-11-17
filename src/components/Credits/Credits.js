import React, { useState, useEffect } from 'react'
import axios from "axios"

function Credits() {

    const [VersionsList, setVersions] = useState([]);

    useEffect(() => {
        fetchVersions()

        async function fetchVersions() {
            var versions = []
            const fetchVersions = async () => {
                const result = await axios("https://raw.githubusercontent.com/Piet2001/Teststuff/master/games.json");
                return result.data;
            };
            fetchVersions().then((r) => update(r));


        }

        async function update(versions) {
            console.log(versions)
            for (let i = 0; i < versions.length; i++) {
                versions[i].avg = await getavg(versions[i].code)
            }

            console.log(versions)
            setVersions(versions)
        }
    }, []);




    console.log(`length: ${VersionsList.length}`)
    return (
        <div>
            Je bevind je nu op de credits pagina

            {(() => {
                VersionsList.sort((a, b) => (a.avg < b.avg) ? 1 : -1)
                return (
                    VersionsList.map((version) =>
                        <h4>{version.code} - {version.avg}</h4>
                    )
                )
            })()}
        </div>
    )
}

export default Credits

async function getavg(locale) {
    const data = await fetch(`https://raw.githubusercontent.com/Piet2001/Missionfiles-All-Versions/master/Missions/${locale}.json`)
        .then(response => response.json())
        .then(data => {
            return data
        })
    const avg = data.reduce((total, next) => total + next.average_credits, 0) / data.length;

    return avg
}
