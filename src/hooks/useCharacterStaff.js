const useCharacterStaff = (limite) => {
  const getItems = (curAni) => {
    let characters = [];
    let staff = [];

    for (let i = 0; i < 6; i++) {
      let id = i;

      if(curAni.characters[i] !== undefined) {
        characters.push({
          id,
          item: curAni.characters[i],
        });
      }

      if (i >= limite) continue;

      if(curAni.staff[i] !== undefined) {
        staff.push({
          id,
          item: curAni.staff[i],
        });
      }
    }

    return [characters, staff];
  };

  return [getItems];
};

export default useCharacterStaff;
