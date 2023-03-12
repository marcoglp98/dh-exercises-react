import { useMemo } from 'react';

const list = [
    {
        name: 'Marco',
        id: 0,
        age: 24
    },
    {
        name: 'Claudio',
        id: 1,
        age: 37
    },
    {
        name: 'Francesca',
        id: 2,
        age: 16
    },
]

function filter() {
    let values = []
    for (let i = 0; i < list.length; i++) {
        if (list[i].age > 18) {
            console.log(list[i])
            values.push(list[i])
        }   
    }
    return values;
}

export const FilteredList = () => {
    const result = useMemo(() => JSON.stringify(filter()), [])
    return (
        <p>{result}</p>
    )
}

