import React from 'react'
import { UseWorkContext } from '../context/WorkContext';
import WorkCards from '../components/WorkCards';


const Home = () => {

    const { loading, err } = UseWorkContext();

    return (
        <div>
            {err && err ? (
                <h1>Hay un error {err}</h1>
            ) : (
                loading && loading ? (
                    <Spinner animation="border" variant="primary" />
                ) : (
                    <WorkCards />
                )
            )}
        </div>
    )
}

export default Home