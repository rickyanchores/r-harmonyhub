import React from 'react'

const TopFive = () => {

    const getData = async () => {
        // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
        const token = 'BQA4Q9LdQTNZt9ueA65D3jt3lpYb6jCSj6YYH38YCGSmQwl48KNeicbo3EQX3xN2Cef6FNFtK_DyoE13IxjoPq-BxGYv5vH08Lxk5Q5kIzlZzmEhrYN0Er9EtaBx2TzMJ4c1V9noFGgFcTQOCdBaeB01haQDpbyzAyL7ZKXQD3ALZCrgrjaBROufKNUgiJ65b3hmQbf0XwhDRRy_vTK2PiApYWS5t2ZQB-WUDyMcRFdEWTtSWGlqsEb69w';
        async function fetchWebApi(endpoint, method, body) {
        const res = await fetch(`https://api.spotify.com/${endpoint}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
            method,
            body:JSON.stringify(body)
        });
        console.log("Click")
        return await res.json();
        }

        async function getTopTracks(){
        // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
        return (await fetchWebApi(
            'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
        )).items;
        }


        const topTracks = await getTopTracks();
        console.log(
        topTracks?.map(
            ({name, artists}) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
        )
        );
    }





  return (
    <div className='TopFive'>
        <h1>TOP FIVE</h1>
        <button className="btn" onClick={getData}>GET TOP 5</button>
        <div className="result">result</div>
    </div>
  )
}

export default TopFive

