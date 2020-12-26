export let movies = [
    {
        id: 0,
        name: "Nicolas",
        score: 18,
    },
    {
        id: 1,
        name: "홍길동",
        score: 18,
    },
    {
        id: 2,
        name: "이순신",
        score: 18,
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0]
};

export const getMovies = () => movies;

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};

