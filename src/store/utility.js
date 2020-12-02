export const updateObjetc = (state, updatedValues) => {
    return {
        ...state,
        ...updatedValues,
    };
};
