import Hero from '../hero/Hero';

const Home = ({ movies }) => {
    return (
        movies ? <Hero movies={movies}/> : <div></div>
    )
}

export default Home