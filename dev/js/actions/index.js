
//handle marker dragging action
export const selectPoint = (coords) => {
    console.log("You clicked on coords: ", coords.lat);
    return {
        type: 'USER_SELECTED',
        payload: coords
    }
};
