// export const selectUser = (user) => {
//     console.log("You clicked on user: ", user.first);
//     return {
//         type: 'USER_SELECTED',
//         payload: user
//     }
// };

export const selectUser = (coords) => {
    console.log("You clicked on coords: ", coords.lat);
    return {
        type: 'USER_SELECTED',
        payload: coords
    }
};
