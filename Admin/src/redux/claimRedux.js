import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "petrostation",
  initialState: {
    petrostations: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getPetrostationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPetrostationSuccess: (state, action) => {
      state.isFetching = false;
      state.petrostations = action.payload;
    },
    getPetrostationFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deletePetrostationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deletePetrostationSuccess: (state, action) => {
      state.isFetching = false;
      state.petrostations.splice(
        state.petrostations.findIndex((petrostation) => petrostation._id === action.payload),
        1
      );
    },
    deletePetrostationFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updatePetrostationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updatePetrostationSuccess: (state, action) => {
      state.isFetching = false;
      state.petrostations[
        state.petrostations.findIndex((petrostation) => petrostation._id === action.payload.id)
      ] = action.payload.updatedPetrost;
    },
    updatePetrostationFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addPetrostationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addPetrostationuccess: (state, action) => {
      state.isFetching = false;
      state.claims.push(action.payload);
    },
    addPetrostationFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getPetrostationStart,
  getPetrostationSuccess,
  getPetrostationFailure,
  deletePetrostationStart,
  deletePetrostationSuccess,
  deletePetrostationFailure,
  updatePetrostationStart,
  updatePetrostationSuccess,
  updatePetrostationFailure,
  addPetrostationStart,
  addPetrostationSuccess,
  addPetrostationFailure,
} = productSlice.actions;

export default productSlice.reducer;