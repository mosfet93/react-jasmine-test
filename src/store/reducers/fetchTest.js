const fetchTest = (state = { fetched: false }, action) => {
    switch (action.type) {
        case 'FETCH_TEST':
            return action.payload;
    }
    return state;
}

export default fetchTest;