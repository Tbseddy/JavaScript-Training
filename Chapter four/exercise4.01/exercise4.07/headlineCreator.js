const headlineCreator = (() => {
    function createHeadline(text, parentElementSelector = '#root') {
        const parentElement = document.querySelector(parentElementSelector);
        const headlineToInsert = document.createElement('h1');
        headlineToInsert.innerText = text;
        parentElement.appendChild(headlineToInsert);
    }

    return {
        createHeadline: createHeadline
    };
})();