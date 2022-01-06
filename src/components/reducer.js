export const initialState = {
    favorite: [],
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_FAVORITE':
        // Logic for adding item to basket
            return { 
                ...state,
                favorite: [...state.favorite, action.item]
            };
        case 'REMOVE_FROM_FAVORITE':
            let newMovie = [...state.movie];
            const index = state.movie.findIndex((movieItem) => movieItem.title === action.title)
            if(index >= 0) {
               newMovie.splice(index, 1);
            }
           return { ...state, basket: newMovie}
        default: 
            return state;
    }
}

export default reducer