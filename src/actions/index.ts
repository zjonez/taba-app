export const NAME_REMOVED = 'NAME_REMOVED';
export const NAME_ADDED = 'NAME_ADDED';

export const removeName = (name: string) => {
  return {
    type: NAME_REMOVED,
    payload: name
  }
}

export const addName = (name: string) => {
  return {
    type: NAME_ADDED,
    payload: name
  }
}