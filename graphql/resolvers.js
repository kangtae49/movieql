const people = [
    {
        id: "0",
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: "1",
        name: "홍길동",
        age: 18,
        gender: "female"
    },
    {
        id: "2",
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