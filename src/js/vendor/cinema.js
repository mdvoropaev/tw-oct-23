document.addEventListener('DOMContentLoaded', function() {
    let listArray = [
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua." }
    ];
    const cFacts = document.querySelector('.cinema-facts');

    createListApp(listArray);


    function createList() {
        let list = document.createElement('ol');
        list.classList.add('cinema-facts__list', 'list-reset', 'list');

        return list;
    }

    function createItem (obj) {
        let item = document.createElement('li');
        item.classList.add('list-item');
        item.textContent = obj.text;

        return item;
    }

    function createListApp(yourArray) {
        let fList = createList(),
            listArray = yourArray;

        cFacts.append(fList);

        for (const itemList of listArray) {
            let newItem = createItem(itemList);
            fList.append(newItem);
        }
    }
});
