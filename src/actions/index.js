//action creator for selecting song
export const selectSong = song => {
  //return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
//named export (put export keyword before function name) allows you to export many different functions from the same file
