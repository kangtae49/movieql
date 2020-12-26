const people = [
    {
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        name: "홍길동",
        age: 18,
        gender: "female"
    },
    {
        name: "이순신",
        age: 18,
        gender: "female"
    },
];

const resolvers = {
    Query: {
        people: () => people
    }
};

export default resolvers;