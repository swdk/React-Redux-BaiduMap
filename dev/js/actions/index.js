
export const Search = (searchText) => {
    console.log("You Searched at action ", searchText);
    return {
        type: 'SEARCHED',
        payload: searchText
    }
};

export const selectPoint = (coords) => {
    console.log("You clicked on coords: ", coords.lat);
    return {
        type: 'USER_SELECTED',
        payload: coords
    }
};
