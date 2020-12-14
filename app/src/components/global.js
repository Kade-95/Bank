const accountComponents = require('./account');
const staffComponents = require('./staff');
const components = require('./components');

function GlobalComponents() {
    this.login = () => {
        let app = components.app();
        app.classList.add('big-header');

        let header = app.find('#main-header');
        header.makeElement({
            element: 'banner', attributes: { id: 'main-banner', class: 'header-item' }, children: [
                { element: 'a', attributes: { id: 'app-name' }, text: 'Bank' },
                {
                    element: 'i', attributes: { id: 'app-logo' }, html: `<svg width="80" height="95" viewBox="0 0 80 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="31.6515" cy="63.6515" r="19.0701" transform="rotate(-40.34 31.6515 63.6515)" stroke="#F3E3B8" stroke-width="6"/>
            <circle cx="48.6515" cy="31.6515" r="19.0701" transform="rotate(-40.34 48.6515 31.6515)" stroke="#434195" stroke-width="6"/>
            </svg>
            `}
            ]
        });

        let main = app.find('#main-window');

        let login = main.makeElement({
            element: 'div', attributes: { id: 'login-window', class: 'form-container' }, children: [
                components.form({
                    contents: [
                        { element: 'input', name: 'username' },
                        { element: 'input', name: 'password', type: 'password' },
                    ],
                    controls: [
                        { element: 'button', name: 'Login' }
                    ]
                })
            ]
        });
        let form = login.find('.form');

        if (!utilities.isStaff()) {
            login.prepend(components.tab({ content: ['Login', 'Register'], active: 'Login' }));
        }
        submit = () => {
            let data = base.jsonForm(form);
            utilities.connect({ method: 'POST', url: `login/${utilities.userType()}`, body: data })
                .then(res => {
                    form.find('.form-error').textContent = res;
                    utilities.render('dashboard');
                })
                .catch(error => {
                    form.find('.form-error').textContent = error;
                });
        }

        login.addEventListener('click', event => {
            if (event.target.id == `form-control-Login`) {
                event.preventDefault();
                submit();
            }
            else if (event.target.id == 'Register-tab') {
                login.replaceWith(accountComponents.register());
            }
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
        });

        return app;
    }

    this.dashboard = (user = {}) => {
        utilities.connect({ method: 'GET', url: `find/${utilities.userType()}?mine=1` })
            .then(res => {
                utilities.details = res;
                if (utilities.isStaff()) {
                    staffComponents.dashboard(user);
                }
                else {
                    accountComponents.dashboard(user);
                }
            })
            .catch(console.log);
    }

    this.profile = (user = {}) => {
        if (utilities.isStaff()) {
            staffComponents.profile(user);
        }
        else {
            accountComponents.profile(user);
        }
    }

    this.changePassword = () => {
        let form = components.form({
            contents: [
                { element: 'input', name: 'currentPassword', type: 'password' },
                { element: 'input', name: 'newPassword', type: 'password', note: 'Must have atleast 8 characters, (1 capital, 1 small, 1 number and 1 symbol)' },
                { element: 'input', name: 'verifyPassword', type: 'password' },
            ],
            controls: [
                { element: 'button', name: 'Change' }
            ]
        });

        let content = base.createElement({
            element: 'span', attributes: { id: 'change-password' }, children: [
                form,
                {
                    element: 'style', text:
                        `
                            #change-password{
                                height: calc(100% - 4em);
                                align-items: center;
                                justify-content: center;
                                display: flex;
                            }   

                            #change-password > .form{
                                height: max-content;
                                gap: 5em;
                            }
                        `
                }
            ]
        });

        let formError = form.find('.form-error');

        let popup = components.popUp(content, 'Change Password');

        form.addEventListener('submit', event => {
            event.preventDefault();
            let verifyForm = base.validateForm(form);
            let data = base.jsonForm(form);

            if (!verifyForm.flag) {
                formError.textContent = `Error: '${base.camelCasedToText(verifyForm.elementName)}' is not valid`
            }
            else if (data.newPassword !== data.verifyPassword) {
                formError.textContent = 'Error: Password mismatch';
            }
            else {
                utilities.connect({ method: 'PUT', url: `changepassword`, body: data })
                    .then(res => {
                        components.alert(res);
                        popup.remove();
                    })
                    .catch(components.alert);
            }
        });
    }

    this.transactionReciept = (params = { date: '', name: '', number: '', narration: '', reference: '', amount: '', currency: '', type: '' }) => {
        if (Array.isArray(params)) params = params[0];
        let transaction = base.createElement({
            element: 'div', attributes: { class: 'transaction-reciept' }, children: [
                {
                    element: 'span', attributes: { class: 'transaction-reciept-header' }, children: [
                        { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: params.date },
                        {
                            element: 'span', attributes: { class: 'transaction-reciept-type' }, children: [
                                { element: 'i', attributes: { class: 'icon fas fa-envelope' } },
                                { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: params.type }
                            ]
                        },
                        {
                            element: 'a', attributes: { class: 'transaction-reciept-label' }, text: `${params.type == 'debit' ? '-' : '+'}${utilities.money(params.amount)}(${params.currency})`
                        }
                    ]
                },
                {
                    element: 'span', attributes: { class: 'transaction-reciept-body' }, children: [
                        {
                            element: 'span', attributes: { class: 'transaction-reciept-detail' }, children: [
                                { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: 'Account' },
                                {
                                    element: 'span', attributes: { class: 'transaction-reciept-account-details' }, children: [
                                        { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: params.name },
                                        { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: params.number }
                                    ]
                                }
                            ]
                        },
                        {
                            element: 'span', attributes: { class: 'transaction-reciept-detail' }, children: [
                                { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: 'Narration' },
                                { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: params.narration },
                            ]
                        },
                        {
                            element: 'span', attributes: { class: 'transaction-reciept-detail' }, children: [
                                { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: 'Reference' },
                                { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: params.reference },
                            ]
                        },
                        {
                            element: 'span', attributes: { class: 'transaction-reciept-detail' }, children: [
                                { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: 'Balance' },
                                { element: 'a', attributes: { class: 'transaction-reciept-label' }, text: `${utilities.money(params.balance)}(${params.currency})` },
                            ]
                        }
                    ]
                },
                {
                    element: 'style', text:
                        `
                            .transaction-reciept{
                                display: grid;
                                grid-template-columns: 1fr;
                                grid-template-rows: max-content 1fr;
                                align-items: flex-start;
                            }

                            .transaction-reciept-header{
                                display: grid;
                                grid-template-rows: repeat(3, max-content);
                                grid-template-columns: 1fr;
                                padding: 20px;
                                gap: 30px;
                                justify-content: center;
                                background: var(--secondary-color);
                                color: var(--primary-color);
                            }

                            .transaction-reciept-label{
                                font-size: cacl(var(--text-font-size)*1.3);
                                text-transform: capitalize;
                                text-align: center;
                            }

                            .transaction-reciept-header .icon{
                                background: var(--dark-gray);
                                color: var(--primary-color);
                                opacity: .5;
                                width: 50px;
                                height: 50px;
                                border-radius: 10px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 30px;
                            }

                            .transaction-reciept-type{
                                display: grid;
                                grid-template-rows: max-content max-content;
                                gap: 10px;
                                align-items: flex-start;
                                justify-items: center;
                            }

                            .transaction-reciept-body{
                                display: grid;
                                grid-template-columns: 1fr;
                                grid-template-rows: repeat(4, max-content);
                                align-items: flex-start;
                                padding: 20px 0px;
                            }

                            .transaction-reciept-detail{
                                display: flex;
                                justify-content: space-between;
                                align-items: flex-start;
                                padding: 40px 10px;
                                box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.1);
                            }

                            .transaction-reciept-account-details{
                                display: grid;
                                grid-temlate-rows: max-content max-content;
                                gap: 10px;
                                justify-content: flex-end;
                            }
                        `
                }
            ]
        });

        components.popUp(transaction, 'Transaction Reciept');
    }
}

module.exports = new GlobalComponents();