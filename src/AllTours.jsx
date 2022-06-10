import React, {useState, useEffect} from 'react'

import Tour from './Tour'
import Loading from './Loading'

import './AllTours.css'
function AllTours() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const url = 'https://course-api.com/react-tours-project'

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(url)
        const tourData = await response.json()
        setLoading(false)
        setData(tourData)
    }
    useEffect(() =>{
        fetchData()
    }, [])

    const removeTour = (id)=>{
        const newTour = data.filter(tour => tour.id !== id)
        setData(newTour)
    } 
    
    if(loading){
        return (
            <main> <Loading/> </main>
        )
    }
    if(data.length === 0){
        return (
            <main>
                <button className="refresh-btn" onClick={fetchData}>Refresh</button>
            </main>
        )
    }
    return (
        <>
            <h1 className="title"> Our tours </h1>
            <main >
                <section className="tours-container">
                    <Tour dataTour={data} removeTour={removeTour} />
                </section>
            </main>
        </>
    )
}

export default AllTours
