// import { createSlice } from "@reduxjs/toolkit";
// import tuits from './tuits.json';

// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "image": "nasa.png",
//    };
   
//    const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
//    }
   

// const tuitsSlice = createSlice({
//  name: 'tuits',
//  initialState: { tuits: tuits },
//  reducers: {
//     createTuit(state, action) {
//       state.tuits.unshift({
//         ...action.payload,
//         ...templateTuit,
//         _id: (new Date()).getTime(),
//       })
//     },
//     deleteTuit(state, action) {
//         const index = state.tuits
//            .findIndex(tuit =>
//               tuit._id === action.payload);
//         state.tuits.splice(index, 1);
//       }   
//   }
 
// });

// export const {createTuit, deleteTuit} = tuitsSlice.actions;
// export default tuitsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: { tuits: tuits },
  reducers: {
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.tuits.findIndex(tuit =>
        tuit._id === action.payload
      );
      state.tuits.splice(index, 1);
    },
    likeTuit(state, action) {
      const index = state.tuits.findIndex(tuit =>
        tuit._id === action.payload
      );
      if (index !== -1) {
        state.tuits[index].likes += 1;
        state.tuits[index].liked = true;
      }
    },
    unlikeTuit(state, action) {
      const index = state.tuits.findIndex(tuit =>
        tuit._id === action.payload
      );
      if (index !== -1) {
        state.tuits[index].likes -= 1;
        state.tuits[index].liked = false;
      }
    },
  }
});

export const { createTuit, deleteTuit, likeTuit, unlikeTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
