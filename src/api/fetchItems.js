const fetchItems = async () => {
  try {
    const response = await fetch('/logements.json');
    if (!response.ok) throw Error('error: !response.ok');

    const listItems = await response.json();

    return listItems;
  } catch (err) {
    return [];
  }
};

export default fetchItems;
