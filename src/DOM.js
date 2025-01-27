export default function DOM () {

    const body = document.querySelector('body');

    const createLayout = (() => {
        const content = document.createElement('div');
        content.classList.add('container');
        body.appendChild(content);

        const topbar = document.createElement('div');
        topbar.classList.add('topbar');
        content.appendChild(topbar);

        const panel = document.createElement('div');
        panel.classList.add('panel');
        content.appendChild(panel);

        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
        panel.appendChild(sidebar);

        const mainpane = document.createElement('div');
        mainpane.classList.add('mainpane');
        panel.appendChild(mainpane);

    })();
    
    const createTopbarElements = (() => {
        const topbar = document.querySelector('.topbar');

        const header = document.createElement('h1');
        header.textContent = "Home Combinator"
        header.classList.add('header')
        topbar.appendChild(header)
        
    })();

    const createMainpaneToolbar = (() => {
        const mainpane = document.querySelector('.mainpane');

        const toolbar = document.createElement('div');
        toolbar.classList.add('toolbar');
        mainpane.appendChild(toolbar);
    })();

    const createMainpaneContent = (() => {
        const mainpane = document.querySelector('.mainpane');

        const content = document.createElement('div');
        content.classList.add('content');
        mainpane.appendChild(content);
    })();

    const createAddItemButton = (() => {
        const toolbar = document.querySelector('.toolbar');

        const addItemBtn = document.createElement('button');
        addItemBtn.classList.add('addItemBtn');
        toolbar.appendChild(addItemBtn)

        addItemBtn.textContent = 'Add Item'
    })();

    const createSections = (() => {
        const sidebar = document.querySelector('.sidebar');

        const sectionsBar = document.createElement('div');
        sectionsBar.classList.add('sectionsBar');
        sidebar.appendChild(sectionsBar);
    })();
}