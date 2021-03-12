function Components() {
    this.editableImage = (params = { src: '', icon: '' }) => {
        let image = base.createElement({
            element: 'span', attributes: { class: `editable-image-container ${!params.src ? 'icon' : ''}`, 'data-edit': 0 }, children: [
                {
                    element: !!params.src ? 'img' : 'i', attributes: { id: 'editable-image', src: !!params.src ? params.src : '', class: !params.src ? params.icon : '' }
                },
                {
                    element: 'span', attributes: { id: 'edit-image' }, children: [
                        { element: 'i', attributes: { class: 'icon fas fa-pen' } },
                        { element: 'a', attributes: { class: 'edit-image-text' }, text: 'Edit' }
                    ]
                },
                {
                    element: 'style', text:
                        `
                            .editable-image-container{
                                display: flex;
                                position: relative;
                                align-items: center;
                                justify-content: center;
                                border-radius: 50%;
                                overflow: hidden;
                                width: calc(var(--text-font-size)*7);
                                height: calc(var(--text-font-size)*7);
                            }

                            .editable-image-container.icon {
                                border: 1px solid black;
                            }

                            #editable-image {
                                width: 100%;
                                height: 100%;
                                cursor: pointer;
                            }
                            
                            .editable-image-container.icon #editable-image {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                            .editable-image-container.edit #edit-image{
                                visibility: visible;
                            }

                            #edit-image{
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                background: rgba(0, 0, 0, 0.5);
                                align-items: center;
                                justify-items: center;
                                grid-template-rows: 1fr max-content;
                                display: grid;
                                cursor: pointer;
                                visibility: hidden;
                            }

                            #edit-image > .icon{
                                font-size: 25px;
                            }

                            .edit-image-text{
                                font-size: 15px;
                                bottom: 10px;
                                position: relative;
                            }
                        `
                }
            ]
        });
        let edit = image.find('#edit-image'), editable = image.find('#editable-image');
        let upload = base.createElement({
            element: 'input', attributes: { type: 'file' }
        });

        upload.addEventListener('change', event => {
            let file = upload.files[0];
            let ext = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if (['jpg', 'png', 'jpeg', 'gif', 'svg'].includes(ext)) {
                let fileReader = new FileReader();
                fileReader.onload = (event) => {
                    if (editable.nodeName.toLowerCase() != 'img') {
                        let n = editable.changeNodeName('img');
                        editable.replaceWith(n);
                        editable = n;
                    }
                    editable.src = event.target.result;
                    image.upload = event.target.result;
                };

                fileReader.readAsDataURL(file);
            }
        });

        edit.addEventListener('click', event => {
            upload.click();
        });

        return image;
    }

    this.form = (params = { id: '', header: '', footer: '', contents: [], controls: [] }) => {
        params.controls = params.controls || [];
        params.contents = params.contents || [];
        let form = base.createElement({
            element: 'form', attributes: { id: params.id, class: 'form' }, children: [
                { element: 'a', attributes: { class: 'form-header' }, text: params.header },
                { element: 'a', attributes: { class: 'form-error' } },
                {
                    element: 'div', attributes: { class: 'form-contents' }, children: (() => {
                        let list = [];
                        let i;
                        for (i of params.contents) {
                            if (Array.isArray(i)) list.push(this.multipleFormElement(i));
                            else if (typeof i === 'object') list.push(this.singleFormElement(i));
                        }

                        list.push(
                            {
                                element: 'div', attributes: { class: 'form-controls', style: { gridTemplateColumns: `repeat(${params.controls.length}, 1fr)` } }, children: (() => {
                                    let list = [];
                                    let i;
                                    for (i of params.controls) {
                                        list.push({ element: i.element, attributes: { class: 'form-button', id: `form-control-${i.name}` }, text: i.name });
                                    }
                                    return list;
                                })()
                            }
                        );
                        return list;
                    })()
                },
                { element: 'a', attributes: { class: 'form-footer' }, text: params.footer },
            ]
        });

        let multiple = form.findAll('.form-element.multiple');

        let setSize = () => {
            for (let i = 0; i < multiple.length; i++) {
                if (multiple[i].position().width > 400) {
                    multiple[i].css({ gridTemplateColumns: `repeat(${multiple[i].findAll('.form-element').length}, 1fr)` });
                }
                else {
                    multiple[i].cssRemove(['grid-template-columns']);
                }
            }
        }

        form.onAdded((event) => {
            setSize();
            window.onresize = event => {
                setSize();
            }
        });

        return form;
    }

    this.singleFormElement = (params = { name: '', type: '', element: '', note: '', options: [], ignore: false }) => {
        let element = base.createElement({
            element: 'div', attributes: { class: 'form-element' }, children: [
                {
                    element: 'label', attributes: { class: 'form-element-label' }, text: `${base.camelCasedToText(params.name)}${params.ignore ? '(Optional)' : ''}`
                },
                {
                    element: params.element, attributes: { class: 'form-element-data', name: params.name, id: params.name, placeHolder: "What is it", type: params.type, ignore: params.ignore }
                }
            ]
        });

        if (params.note) {
            element.makeElement({ element: 'a', attributes: { class: 'form-note' }, text: params.note });
        }
        if (Array.isArray(params.options)) {
            let x, select = element.find('.form-element-data');
            select.makeElement({ element: 'option', attributes: { selected: true, disabled: true, value: '' }, text: `Select ${params.name}` });

            for (x of params.options) {
                let o = select.makeElement({ element: 'option', attributes: { value: x }, text: x });
                if (x == params.selected) o.selected = true;
            }
        }
        return element;
    }

    this.multipleFormElement = (list = [{ name: '', type: '', element: '', note: '', options: [] }]) => {
        let container = base.createElement({
            element: 'div', attributes: { class: 'form-element multiple' }, children: (() => {
                let elements = [];

                for (i of list) {
                    elements.push(this.singleFormElement(i));
                }

                return elements;
            })()
        });

        return container;
    }

    this.app = () => {
        let app = document.body.makeElement({
            element: "section", attributes: { id: 'app-window' }, children: [
                {
                    element: 'header', attributes: { id: 'main-header' }
                },
                {
                    element: 'main', attributes: { id: 'main-window' }
                }
            ]
        });

        return app;
    }

    this.footerButtons = (params = { attributes: {}, contents: [{ name: '', icon: '' }] }) => {
        let container = base.createElement({
            element: 'span', attributes: params.attributes, children: (() => {
                let list = [];
                for (let l of params.contents) {
                    list.push({
                        element: 'span', attributes: { class: 'footer-buttons-action', id: `button-${base.stringReplace(l.name, ' ', '-')}` }, children: [
                            { element: 'i', attributes: { class: `icon ${l.icon}` } },
                            { element: 'a', attributes: { class: 'footer-buttons-action-name', style: { fontWeight: '700', color: 'var(--secondary-color)' } }, text: l.name }
                        ]
                    })
                }
                return list;
            })()
        });

        container.classList.add('footer-buttons');
        return container;
    }

    this.finish = (message = '', status = false) => {
        let display = this.footerButtons({ contents: [{ name: message, icon: `fas ${status ? 'fa-check' : 'fa-times'}` }] });

        return display;
    }

    this.popUp = (content, title) => {
        let popUp = base.popUp(content, { title, attributes: { style: { height: '100%', width: (window.screen.width < 700) ? '100%' : '50%', justifySelf: 'right' } } });

        let popUpWindow = popUp.find('#pop-up-window');
        window.onresize = event => {
            if (window.screen700.matches) {
                popUpWindow.css({ width: '50%' });
            }
            else {
                popUpWindow.css({ width: '100%' });
            }
        };
        return popUp;
    }

    this.search = (title) => {
        let display = base.createElement({
            element: 'span', attributes: { id: 'search-area' }, children: [
                { element: 'i', attributes: { class: 'icon fas fa-search' } },
                { element: 'input', attributes: { id: 'search-box', placeHolder: title } }
            ]
        });

        return display;
    }

    this.table = (params = { title: '', contents: [{}], projection: {}, search: false, options: [] }) => {
        let table = base.createElement({
            element: 'div', attributes: { class: 'table-container' }, children: [
                {
                    element: 'span', attributes: { class: 'table-header' }
                },
                {
                    element: 'table', attributes: { class: 'table' }, children: [
                        {
                            element: 'thead', attributes: { class: 'table-head' }, children: [
                                { element: 'tr', attributes: { class: 'tr' } }
                            ]
                        },
                        {
                            element: 'tbody', attributes: { class: 'table-body' }
                        }
                    ]
                },
                {
                    element: 'style', text:
                        `
                            .table-container{
                                display: grid;
                                grid-template-rows: 1fr;
                                overflow: auto;
                                width: 100%;
                            }

                            .table-header{
                                position: sticky;
                                top: 0;
                                z-index: 3;
                                display: grid;
                                align-items: center;
                                padding: 0px 10px;
                                background: var(--primary-color);
                            }

                            .table-title{
                                font-size: calc(var(--title-font-size) * .6);
                                font-family: var(--title-font-family);
                                text-transform: capitalize;
                            }

                            .table{
                                border-collapse: collapse;
                            }

                            .table-head{
                                z-index: 3;
                            }

                            .table-body{
                                height: calc(100% - 50px);
                                width: 100%;
                                overflow: auto;
                            }

                            .table-head .tr {
                                z-index: 3;
                            }

                            .table-body .tr{
                                text-align: center;
                                transform: scale(1);
                            }

                            .table-body .tr:hover{
                                color: var(--primary-color);
                                background: var(--dark-gray);
                                cursor: pointer;
                            }

                            .table-head .th{
                                text-transform: uppercase;
                                font-size: var(--text-font-size);
                                text-align: center;
                                padding: 10px 0px;
                                position: sticky;
                                top: 0px;
                                background: var(--primary-color);
                                z-index: 3;
                            }

                            .table .td{
                                text-transform: capitlize;
                                font-size: var(--text-font-size);
                                text-align: center;
                                padding: 5px 0px;
                                border: none;
                            }

                            #table-options{
                                display: grid;
                                grid-template-columns: repeat(${!!params.options ? params.options.length : 0}, max-content);
                                position: absolute;
                                left: 0px;
                                top: 0px;
                                background: var(--primary-color);
                                color: var(--dark-gray);
                                align-items: center;
                                z-index: 2;
                            }

                            .table-option{
                                padding: 7.5px;
                            }

                            .table-option:hover{
                                background: var(--dark-gray);
                                color: var(--primary-color);
                            }
                        `
                }
            ]
        });

        let c, i, cacheHeader = [], headers = [], tr;
        let tableHeader = table.find('.table-header');
        let thead = table.find('.table-head');
        let theadRow = thead.find('.tr');

        let tbody = table.find('.table-body');
        for (let c of params.contents) {
            cacheHeader = cacheHeader.concat(Object.keys(c));
        }
        cacheHeader = Array(...new Set(cacheHeader));
        if (params.projection.constructor == Object) {
            let hd = Object.keys(params.projection);
            for (let h of hd) {
                if (params.projection[h] && cacheHeader.includes(h)) {
                    headers.push(h);
                    let th = theadRow.makeElement({
                        element: 'th', attributes: { class: 'th', 'data-name': h }, text: params.projection[h].constructor == String ? params.projection[h] : h
                    });
                }
            }
        }

        for (let i in params.contents) {
            tr = tbody.makeElement({
                element: 'tr', attributes: { class: 'tr', 'data-row-number': i }
            });
            for (let h of headers) {
                let td = tr.makeElement({
                    element: 'td', attributes: { class: 'td', 'data-name': h }, text: params.contents[i][h]
                });
            }
        }

        let count = 0;

        if (!!params.title) {
            tableHeader.makeElement({
                element: 'span', attributes: { class: 'table-title' }, text: `${params.title} table`
            });

            count++;
        }

        if (!!params.search) {
            let tbodyRows = table.findAll('.table-body tr');

            let search = this.search(`Search table...`);
            search.classList.add('table-search');

            tableHeader.append(search);

            search.find('#search-box').onChanged(value => {
                for (i = 0; i < tbodyRows.length; i++) {
                    if (value != '' && tbodyRows[i].textContent.toLowerCase().indexOf(value.toLowerCase()) == -1) {
                        tbodyRows[i].css({ display: 'none' });
                    }
                    else {
                        tbodyRows[i].cssRemove(['display']);
                    }
                }
            });

            count++;
        }

        if (!!params.options && !!params.options.length) {
            let optionsList = {
                view: 'fas fa-eye',
                delete: 'fas fa-trash',
                edit: 'fas fa-pen',
                revert: 'fas fa-history',
            }

            let options = base.createElement({
                element: 'span', attributes: { id: 'table-options' }, children: (() => {
                    let list = [];
                    for (i of params.options) {
                        list.push({
                            element: 'i', attributes: { class: `table-option fas fa-${optionsList[i]}`, id: `table-option-${i}`, 'data-name': i }
                        });
                    }
                    return list;
                })()
            });

            tbody.addChildEventListener('click', { classes: ['tr'] }, event => {
                event.bubbledTo.append(options);
            });

            if (!!params.callbacks && !!params.callbacks.click) {
                options.addEventListener('click', event => {
                    if (event.target.classList.contains('table-option')) {
                        let row = event.target.getParents('.tr');
                        let data = params.contents[row.dataset.rowNumber];
                        let cells = row.findAll('.td');

                        params.callbacks.click({ row, data, action: event.target.dataset.name })
                    }
                });
            }
        }

        if (!!count) {
            thead.findAll('.th').forEach(th => {
                th.css({ top: '50px' });
            });

            tableHeader.css({ gridTemplateColumns: `repeat(${count}, 1fr)` });

            table.css({ gridTemplateRows: 'max-content 1fr' });
        }

        return table;
    }

    this.profileCell = (params = { name: '', element: '', value: '', options: [], type: '' }) => {
        let cell = base.createElement({
            element: 'span', attributes: { class: `profile-cell ${base.cssStyleName(params.name)}` }, children: [
                { element: 'label', attributes: { class: 'profile-label' }, text: base.camelCasedToText(params.name) },
                { element: params.element, attributes: { name: params.name, class: 'profile-cell-data', value: params.value || '', id: `profile-cell-${base.cssStyleName(params.name)}`, type: params.type }, text: params.value || '' }
            ]
        });

        if (Array.isArray(params.options)) {
            cell.find(`#profile-cell-${base.cssStyleName(params.name)}`).makeElement({
                element: 'option', attributes: { selected: true, disabled: true, value: '' }, text: `Select ${params.name}`
            });

            cell.find(`#profile-cell-${base.cssStyleName(params.name)}`).setOptions(params.options, { selected: params.value });
        }

        return cell;
    }

    this.alert = (message) => {
        alert(message);
    }

    this.tab = (params = { id: '', content: [], active: '' }) => {
        let tab = base.createElement({
            element: 'span', attributes: { class: 'tab' }, children: (() => {
                let list = [];
                for (let c of params.content) {
                    list.push({ element: 'a', attributes: { class: `tab-element ${c == params.active ? 'active' : ''}`, id: `${c}-tab` }, text: c })
                }
                return list;
            })()
        });

        return tab;
    }
}

module.exports = new Components();