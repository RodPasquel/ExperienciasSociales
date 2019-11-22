
export const setState = (payload) => ({
  type: 'SET_STATE',
  payload,
});

export const getState = (payload) => ({
  type: 'GET_STATE',
  payload,
});

export const viewExperiences = (payload) => ({
  type: 'VIEW_EXPERIENCES',
  payload,
});

export default (viewExperiences);
