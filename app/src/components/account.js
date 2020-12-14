const components = require('./components');

function AccountComponents() {
    this.profile = (account = utilities.details) => {
        let getBio = base.createElement({
            element: 'span', attributes: { class: 'profile-section', id: 'profile-bio' }, children: [
                { element: 'a', attributes: { class: 'profile-item big' }, text: 'Bio' },
                {
                    element: 'span', attributes: { class: 'profile-container' }, children: [
                        components.profileCell({ name: 'firstname', element: 'a', value: account.firstname }),
                        components.profileCell({ name: 'middlename', element: 'a', value: account.middlename }),
                        components.profileCell({ name: 'lastname', element: 'a', value: account.lastname }),
                        components.profileCell({ name: 'email', element: 'a', value: account.email }),
                        components.profileCell({ name: 'phone', element: 'a', value: account.phone }),
                        components.profileCell({ name: 'gender', element: 'a', value: account.gender }),
                        components.profileCell({ name: 'religion', element: 'a', value: account.religion }),
                        components.profileCell({ name: 'maritalstatus', element: 'a', value: account.maritalstatus }),
                        components.profileCell({ name: 'address', element: 'a', value: account.address }),
                        components.profileCell({ name: 'birthdate', element: 'a', value: new Date(parseInt(account.birthdate)).toLocaleDateString() }),
                        components.profileCell({ name: 'nationality', element: 'a', value: account.nationality })
                    ]
                }
            ]
        });

        let editBio = base.createElement({
            element: 'div', attributes: {}, children: [
                { element: 'a', attributes: { class: 'profile-item big' }, text: 'Bio' },
                {
                    element: 'span', attributes: { class: 'profile-container' }, children: [
                        components.profileCell({ name: 'firstname', element: 'input', value: account.firstname }),
                        components.profileCell({ name: 'middlename', element: 'input', value: account.middlename }),
                        components.profileCell({ name: 'lastname', element: 'input', value: account.lastname }),
                        components.profileCell({ name: 'email', element: 'input', value: account.email, type: 'email' }),
                        components.profileCell({ name: 'phone', element: 'input', value: account.phone }),
                        components.profileCell({ name: 'gender', element: 'select', value: account.gender, options: ['Male', 'Female', 'Other'] }),
                        components.profileCell({ name: 'religion', element: 'select', value: account.religion, options: ['Christainity', 'Islam', 'Traditional'] }),
                        components.profileCell({ name: 'maritalstatus', element: 'select', value: account.maritalstatus, options: ['Single', 'Married', 'Divorced'] }),
                        components.profileCell({ name: 'address', element: 'input', value: account.address }),
                        components.profileCell({ name: 'birthdate', element: 'input', value: account.birthdate, type: 'date' }),
                        components.profileCell({ name: 'nationality', element: 'select', value: account.nationality, options: ['Nigeria', 'Ghana', 'Togo'] }),
                        components.profileCell({ name: 'password', element: 'input', type: 'password' }),
                    ]
                }
            ]
        })

        let profileControls = components.footerButtons({ attributes: { id: 'profile-control-container' }, contents: [{ name: 'edit', icon: 'fas fa-pen' }, { name: 'password', icon: 'fas fa-pen' }] });

        let editControls = components.footerButtons({ attributes: { id: 'profile-control-container' }, contents: [{ name: 'cancel', icon: 'fas fa-times' }, { name: 'save', icon: 'fas fa-check' }] });

        let image = { icon: 'fas fa-user' };
        if (!!account.image) image.src = `../${account.image}`;
        let editableImage = components.editableImage(image);

        let content = base.createElement({
            element: 'div', attributes: { id: 'profile-window' }, children: [
                {
                    element: 'span', attributes: { id: 'profile-primary' }, children: [
                        editableImage,
                        {
                            element: 'span', attributes: { id: 'profile-primary-details' }, children: [
                                { element: 'a', attributes: { class: 'profile-item big' }, text: account.accountName },
                                {
                                    element: 'span', attributes: { id: 'profile-account-number' }, children: [
                                        { element: 'a', attributes: { class: 'profile-item' }, text: account.accountNo },
                                        { element: 'a', attributes: { class: 'profile-label', style: { color: 'var(--secondary-color)', fontWeight: '700' } }, text: account.accountType }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    element: 'span', attributes: { id: 'profile-secondary' }, children: [
                        getBio,
                        {
                            element: 'span', attributes: { class: 'profile-section' }, children: [
                                { element: 'a', attributes: { class: 'profile-item big' }, text: 'Official' },
                                {
                                    element: 'span', attributes: { class: 'profile-container' }, children: [
                                        components.profileCell({ name: 'sortCode', element: 'a', value: account.sortcode }),
                                        components.profileCell({ name: 'intPassportNo', element: 'a', value: account.passportno })
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        });

        if (utilities.details._id == account._id) {
            content.append(profileControls);
        }

        let popUp = components.popUp(content, `Profile: {${account.username}}`);

        content.addChildEventListener('click', { classes: ['footer-buttons-action'] }, event => {
            if (event.bubbledTo.id == 'button-edit') {
                getBio.replaceWith(editBio);
                profileControls.replaceWith(editControls);
                editableImage.classList.add('edit');
            }
            else if (event.bubbledTo.id == 'button-password') {
                utilities.run('changePassword');
            }
            else if (event.bubbledTo.id == 'button-cancel') {
                editBio.replaceWith(getBio);
                editControls.replaceWith(profileControls);
                editableImage.classList.remove('edit');
            }
            else if (event.bubbledTo.id == 'button-save') {
                let data = base.jsonForm(editBio);

                if (!!editableImage.upload) data.image = editableImage.upload;
                utilities.connect({ method: 'POST', url: `account/request/edit`, body: data })
                    .then(res => {
                        editBio.replaceWith(getBio);
                        editControls.replaceWith(profileControls);
                        editableImage.classList.remove('edit');
                        components.alert(res);
                    })
                    .catch(components.alert);
            }
        });
    }

    this.dashboard = () => {
        let app = components.app();
        let header = app.find('#main-header');
        header.render(this.headerContent());
        let main = app.find('#main-window');
        main.makeElement({
            element: 'div', attributes: { id: 'dashboard', class: 'form-container' }, children: [
                {
                    element: 'span', attributes: { class: 'tab' }, children: [
                        { element: 'a', attributes: { class: 'tab-element active', id: 'history-tab' }, text: 'History' },
                        { element: 'a', attributes: { class: 'tab-element', id: 'deposit-tab' }, text: 'Deposit' },
                        { element: 'a', attributes: { class: 'tab-element', id: 'withdraw-tab' }, text: 'Withdraw' },
                        { element: 'a', attributes: { class: 'tab-element', id: 'transfer-tab' }, text: 'Transfer' },
                    ]
                },
                {
                    element: 'div', attributes: { id: 'dashboard-content' }
                }
            ]
        });

        let dasboardContent = main.find('#dashboard-content');
        dasboardContent.render(this.history());

        main.addEventListener('click', event => {
            if (event.target.classList.contains('tab-element')) {
                let active = event.target.getParents('.tab').find('.tab-element.active');
                if (active) active.classList.remove('active');

                event.target.classList.add('active');
                if (event.target.id == 'history-tab') {
                    dasboardContent.render(this.history());
                }
                else if (event.target.id == 'transfer-tab') {
                    dasboardContent.render(this.transfer());
                }
                else if (event.target.id == 'withdraw-tab') {
                    dasboardContent.render(this.withdraw());
                }
                else if (event.target.id == 'deposit-tab') {
                    dasboardContent.render(this.deposit());
                }
            }
        });
        return app;
    }

    this.history = () => {
        let _history = base.createElement({
            element: 'div', attributes: { id: 'history-page', class: 'dashboard-section' }, children: [
                {
                    element: 'div', attributes: { id: 'transaction-history' }
                }
            ]
        });
        let start = 0;
        let end = 20;
        utilities.connect({ method: 'GET', url: `find/transaction?mine=t&start=${start}&end=${end}` })
            .then(res => {
                let transactions = res;
                for (t of transactions) {
                    _history.find('#transaction-history').makeElement({
                        element: 'span', attributes: { class: 'transaction-history-single', id: t._id }, children: [
                            { element: 'i', attributes: { class: ` ${t.type} icon fas ${t.type == 'debit' ? 'fa-arrow-up' : 'fa-arrow-down'}` } },
                            {
                                element: 'span', attributes: { class: 'transaction-history-item' }, text: t.details
                            },
                            {
                                element: 'span', attributes: { class: 'transaction-history-item-container' }, children: [
                                    {
                                        element: 'span', attributes: { class: 'transaction-history-item' }, text: new Date(parseInt(t.time)).toLocaleDateString()
                                    },
                                    {
                                        element: 'span', attributes: { class: 'transaction-history-item' }, text: `${utilities.money(t.amount.toString())}(${utilities.details.currency})`
                                    }
                                ]
                            }
                        ]
                    });
                }
            })
            .catch(error => {
                _history.makeElement(components.footerButtons({
                    attributes: { style: { marginTop: '100px' } }, contents: [
                        { name: error, icon: 'fas fa-times' }
                    ]
                }));
            });

        _history.addChildEventListener('click', { classes: ['transaction-history-single'] }, event => {
            utilities.connect({ method: 'GET', url: `find/transaction?mine=1&query=${JSON.stringify({ _id: event.bubbledTo.id })}` })
                .then(res => {
                    utilities.run('transactionReciept', {
                        name: res.accountName,
                        number: res.accountNo,
                        balance: res.balance,
                        amount: res.amount,
                        narration: res.details,
                        reference: res._id,
                        type: res.type,
                        date: new Date(parseInt(res.time)).toLocaleDateString(),
                        currency: res.currency
                    })
                })
                .catch(console.log)
        })
        return _history;
    }

    this.transfer = () => {
        let transfer = components.form({
            contents: [
                { element: 'select', name: 'transferType', options: ['Internal Transfer', 'External Transfer'], selected: 'Internal Transfer' },
                { element: 'input', name: 'bank' },
                { element: 'input', name: 'accountNumber', note: ' ', type: 'number' },
                { element: 'input', name: 'accountName' },
                { element: 'input', name: 'amount', type: 'number' },
                { element: 'input', name: 'password', type: 'password' },
            ],
            controls: [
                { element: 'button', name: 'Transfer' }
            ]
        });
        let transferType = transfer.find('#transferType');
        let accountNo = transfer.find('#accountNumber');
        let accountFound = accountNo.nextSibling;
        let accountName = transfer.find('#accountName').parentNode;
        let bank = transfer.find('#bank').parentNode;
        let transferError = transfer.find('.form-error');

        bank.css({ display: 'none' });
        accountName.css({ display: 'none' });

        transferType.onChanged(value => {
            if (value == 'Internal Transfer') {
                accountFound.cssRemove(['display']);
                bank.css({ display: 'none' });
                accountName.css({ display: 'none' });
            }
            else {
                accountFound.css({ display: 'none' });
                bank.cssRemove(['display']);
                accountName.cssRemove(['display']);
            }
        });
        let validAccountNo = false;
        accountNo.addEventListener('change', event => {
            if (transferType.value == 'Internal Transfer') {
                utilities.connect({ method: 'GET', url: `transferaccount/${accountNo.value}` })
                    .then(res => {
                        accountFound.textContent = res.accountName;
                        validAccountNo = true;
                    })
                    .catch(error => {
                        accountFound.textContent = 'Account not found';
                    })
            }
        });

        transfer.addEventListener('submit', event => {
            event.preventDefault();
            let url, data = base.jsonForm(transfer);
            delete data.transferType;

            for (let i in data) {
                let flag = transfer.find(`#${i}`).parentNode.css().display != 'none';
                if (flag && !data[i]) {
                    transferError.textContent = `Form '${base.camelCasedToText(i).toUpperCase()} is required`;
                    return;
                }
            }

            if (transferType == 'Internal Transfer' && !validAccountNo) {
                transferError.textContent = 'Destination account not found, check Account Number';
                return;
            }

            if (transferType.value == 'Internal Transfer') {
                url = 'account/transfer';
            }
            else {
                url = 'account/request/transfer';
            }

            utilities.connect({ method: 'POST', url, body: data })
                .then(res => {
                    components.popUp(components.finish(res, true));
                    transfer.findAll('input').forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    components.popUp(components.finish(error, false));
                });
        });

        return transfer;
    }

    this.withdraw = () => {
        let display = components.form({
            contents: [
                { element: 'input', name: 'amount', type: 'number' },
                { element: 'input', name: 'password', type: 'password' },
            ],
            controls: [
                { element: 'button', name: 'Withdraw' }
            ]
        });

        display.addEventListener('submit', event => {
            event.preventDefault();
            let data = base.jsonForm(display);

            utilities.connect({ method: 'POST', url: 'account/request/debit', body: data })
                .then(res => {
                    components.popUp(components.finish(res, true));
                    display.findAll('input').forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    components.popUp(components.finish(error, false));
                });
        });

        return display;
    }

    this.deposit = () => {
        let display = components.form({
            contents: [
                { element: 'input', name: 'amount', type: 'number' },
                { element: 'input', name: 'password', type: 'password' },
            ],
            controls: [
                { element: 'button', name: 'Deposit' }
            ]
        });

        display.addEventListener('submit', event => {
            event.preventDefault();
            let data = base.jsonForm(display);

            utilities.connect({ method: 'POST', url: 'account/request/credit', body: data })
                .then(res => {
                    components.popUp(components.finish(res, true));
                    display.findAll('input').forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    components.popUp(components.finish(error, false));
                });
        });

        return display;
    }

    this.headerContent = (account = { _id: 1, image: './images/cover.png' }) => {
        let content = base.createElement({
            element: 'span', attributes: { class: 'header-account-details' }, children: [
                {
                    element: 'span', attributes: { class: 'header-account-details-container account-name' }, children: [
                        { element: account._id ? 'img' : 'i', attributes: { id: 'dp', class: account._id ? 'img' : 'icon fas fa-user', src: account._id ? account.image : '' } },
                        {
                            element: 'span', attributes: {}, children: [
                                { element: 'a', attributes: { class: 'header-account-details-item' }, text: 'Welcome' },
                                { element: 'a', attributes: { class: 'header-account-details-item big' }, text: `${utilities.details.firstname} ${utilities.details.middlename}` }
                            ]
                        }
                    ]
                },
                { element: 'a', attributes: { id: 'logout-button' }, text: 'Logout' },
                {
                    element: 'span', attributes: { class: 'header-account-details-container account-no' }, children: [
                        { element: 'a', attributes: { class: 'header-account-details-item' }, text: 'Current Account' },
                        { element: 'a', attributes: { class: 'header-account-details-item big' }, text: utilities.details.accountNo }
                    ]
                },
                {
                    element: 'span', attributes: { class: 'header-account-details-container account-balance' }, children: [
                        { element: 'a', attributes: { class: 'header-account-details-item' }, text: 'Current Balance' },
                        { element: 'a', attributes: { class: 'header-account-details-item big' }, text: `${utilities.money(utilities.details.balance)}(${utilities.details.currency})` }
                    ]
                }
            ]
        });

        content.addEventListener("click", event => {
            if (event.target.id == 'dp') {
                this.profile();
            }
            else if (event.target.id == 'logout-button') {
                utilities.logout();
            }
        });
        return content;
    }

    this.register = () => {
        let register = base.createElement({
            element: 'div', attributes: { id: 'register-window', class: 'form-container', style: { overflow: 'auto' } }, children: [
                components.tab({ content: ['Login', 'Register'], active: 'Register' }),
            ]
        }),
            data = {},
            firstContents = [
                { element: 'input', name: 'username' },
                { element: 'input', name: 'email', type: 'email' },
                { element: 'input', name: 'password', type: 'password' },
                { element: 'input', name: 'phone' },
            ],
            firstControls = [
                { element: 'button', name: "Next" }
            ],
            secondContents,
            secondControls = [
                { element: 'button', name: "Back" },
                { element: 'button', name: "Finish" }
            ],
            firstForm = components.form({
                header: 'Please fill out this form with accurate information',
                contents: firstContents,
                controls: firstControls
            }),
            secondForm;

        utilities.connect({ method: 'GET', url: 'registration' })
            .then(res => {
                secondContents = [
                    [
                        { element: 'input', name: 'firstname' },
                        { element: 'input', name: 'lastname' }
                    ],
                    { element: 'input', name: 'middlename' },
                    { element: 'select', name: 'gender', options: ['Male', 'Female', 'Other'] },
                    { element: 'input', name: 'religion' },
                    { element: 'input', name: 'address' },
                    { element: 'input', name: 'birthdate', note: "(DD/MM/YYYY", type: 'date' },
                    { element: 'select', name: 'maritalStatus', options: ['Single', 'Married', 'Divorced'] },
                    [
                        { element: 'select', name: 'nationality', options: res.nationalities }, { element: 'input', name: 'passportNo', ignore: true }
                    ],
                    [
                        { element: 'select', name: 'accountType', options: ['Current', 'Savings'] }, { element: 'select', name: 'currency', options: res.rates }
                    ]
                ];
                secondForm = components.form({
                    header: 'Please fill out this form with accurate information',
                    contents: secondContents,
                    controls: secondControls
                });

                register.append(firstForm);
            })
            .catch(components.alert);

        let submit = (error) => {
            data.accounttype = data.accountType;
            data.maritalstatus = data.maritalStatus;
            data.passportno = data.passportNo;
            utilities.connect({ method: 'POST', url: 'create/account', body: data })
                .then(res => {
                    let done = base.createElement({
                        element: 'div', attributes: { id: 'registration-successful' }, children: [
                            { element: 'span', attributes: { class: 'registration-successful-item big' }, text: res.message },
                            { element: 'span', attributes: { class: 'registration-successful-item' }, text: 'Use your username and password to login to your account.' },
                            { element: 'a', attributes: { class: 'form-button', id: 'login' }, text: 'Go to login' },
                            {
                                element: 'style', text:
                                    `
                                #registration-successful{
                                    display: grid;
                                    grid-template-rows: repeat(4, max-content);
                                    grid-template-columns: 1fr;
                                    align-items: flex-start;
                                    gap: 2em;
                                    padding: 2em;
                                }
        
                                .registration-successful-item{
                                    color: var(--secondary-color);
                                    font-family: var(--text-font-family);
                                    font-size: var(--text-font-size);
                                    font-weight: 700;
                                }
        
                                .registration-successful-item.big{
                                    color: var(--secondary-color);
                                    font-family: var(--text-font-family);
                                    font-size: var(--title-font-size);
                                }
                                `
                            }
                        ]
                    });

                    if (!utilities.details._id) {
                        register.render(done);
                    }
                    else {
                        register.account = res.account;
                        register.dispatchEvent(new CustomEvent('created'));
                    }
                })
                .catch(components.alert);
        };

        register.addEventListener('click', event => {
            if (event.target.id == `form-control-Next`) {
                firstForm = register.find('.form');
                let validate = base.validateForm(firstForm);

                if (validate.flag) {
                    let d = base.jsonForm(firstForm);
                    for (let i in d) {
                        data[i] = d[i];
                    }
                    for (let i of firstContents) {
                        i.value = data[i.name];
                    }
                    firstForm.replaceWith(secondForm);
                }
                else {
                    firstForm.find('.form-error').textContent = `Item '${base.camelCasedToText(validate.elementName)}' value is not valid`;
                }
            }
            else if (event.target.id == `form-control-Back`) {
                secondForm.replaceWith(firstForm);
            }
            else if (event.target.id == 'form-control-Finish') {
                secondForm = register.find('.form');
                let validate = base.validateForm(secondForm);
                if (validate.flag) {
                    let d = base.jsonForm(secondForm);
                    for (let i in d) {
                        data[i] = d[i];
                    }
                    submit(secondForm.find('.form-error'));
                }
                else {
                    secondForm.find('.form-error').textContent = `Item '${base.camelCasedToText(validate.elementName)}' value is not valid`;
                }
            }
            else if (event.target.id == 'Login-tab' || event.target.id == 'login') {
                utilities.render('login');
            }
        });

        register.addEventListener('submit', event => {
            event.preventDefault();
        });

        return register;
    }
}

module.exports = new AccountComponents();