
export const makeTableObj = (data) => {
  const header = [];
  const items = data.reduce((acc, el, i) => {
    const { id, ...valuesObj } = el;
    const elKeys = Object.keys(valuesObj);
    const list = elKeys.map((key) => {
      const value = valuesObj[key];
      const type = key.toLowerCase();
      if (i === 0) {
        header.push({
          id: type,
          name: key
        })
      }

      return {
        type: type,
        value: value
      }
    })

    return [
      ...acc,
      {
        id,
        list
      }
    ]
  }, []);
}
