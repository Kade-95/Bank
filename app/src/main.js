const { Base } = require("kedio/browser");
window.base = new Base(window);

let getFormData = (params = { element: '', name: '', type: '', note: '' }) => {
    return base.createElement({
        element: 'div', attributes: { class: 'form-element' }, children: [
            {
                element: 'label', attributes: { class: 'form-element-label' }, text: params.name, children: [
                    { element: 'a', attributes: { class: 'form-note' }, text: params.note }
                ]
            },
            {
                element: params.element, attributes: { class: 'form-element-data', name: params.name, id: params.name, placeHolder: 'readyforalertboy', type: params.type }
            }
        ]
    });
}

document.addEventListener("DOMContentLoaded", event => {
    let app = document.body.makeElement({
        element: "section", attributes: { id: 'app-window' }, children: [
            {
                element: 'header', attributes: { id: 'main-header', class: '' }, children: [
                    {
                        element: 'banner', attributes: { id: 'main-banner' }, children: [
                            { element: 'a', attributes: { id: 'app-name' }, text: 'Bank' },
                            {
                                element: 'i', attributes: { id: 'app-logo' }, html: `<svg width="80" height="95" viewBox="0 0 80 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="31.6515" cy="63.6515" r="19.0701" transform="rotate(-40.34 31.6515 63.6515)" stroke="#F3E3B8" stroke-width="6"/>
                        <circle cx="48.6515" cy="31.6515" r="19.0701" transform="rotate(-40.34 48.6515 31.6515)" stroke="#434195" stroke-width="6"/>
                        </svg>
                        `}
                        ]
                    }
                ]
            },
            {
                element: 'main', attributes: { id: 'main-window' }
            }
        ]
    });
    
    let header = app.find('#main-header');
    let main = app.find('#main-window');
    
    let login = base.createElement({
        element: 'div', attributes: { id: 'login-window' }, children: [
            {
                element: 'span', attributes: { class: 'tab' }, children: [
                    { element: 'a', attributes: { class: 'tab-element', id: 'login-tab' }, text: 'Log In' },
                    { element: 'a', attributes: { class: 'tab-element active', id: 'register-tab' }, text: 'Register' }
                ]
            },
            {
                element: 'form', attributes: { id: 'login-form', class: 'form' }, children: [
                    {
                        element: 'a', attributes: { class: 'form-note' }, text: 'Please fill out this form accurate information'
                    },
                    getFormData({ element: 'input', name: 'name', note: "[Firstname Lastname]" }),
                    getFormData({ element: 'input', name: 'other names' }),
                    getFormData({ element: 'input', name: 'gender' }),
                    getFormData({ element: 'input', name: 'religion' }),
                    getFormData({ element: 'input', name: 'address' }),
                    getFormData({ element: 'input', name: 'sort code' }),
                    getFormData({ element: 'input', name: 'date of birth', note: "(DD/MM/YYYY)" }),
                    getFormData({ element: 'input', name: 'narital status' }),
                    getFormData({ element: 'input', name: 'nationality' }),
                    getFormData({ element: 'input', name: 'int. passport #' }),
                    {
                        element: 'span', attributes: { class: 'form-button' }, text: 'Next'
                    },
                ]
            }
        ]
    })

    main.append(login);
});