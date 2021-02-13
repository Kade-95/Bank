const account = require('./account');
const components = require('./components');

function StaffComponents() {
    this.profile = (staff = utilities.details) => {
        let getBio = base.createElement({
            element: 'span', attributes: { class: 'profile-section', id: 'profile-bio' }, children: [
                { element: 'a', attributes: { class: 'profile-item big' }, text: 'Bio' },
                {
                    element: 'span', attributes: { class: 'profile-container' }, children: [
                        components.profileCell({ name: 'firstname', element: 'a', value: staff.firstname }),
                        components.profileCell({ name: 'middlename', element: 'a', value: staff.middlename }),
                        components.profileCell({ name: 'lastname', element: 'a', value: staff.lastname }),
                        components.profileCell({ name: 'email', element: 'a', value: staff.email }),
                        components.profileCell({ name: 'phone', element: 'a', value: staff.phone }),
                        components.profileCell({ name: 'gender', element: 'a', value: staff.gender }),
                        components.profileCell({ name: 'religion', element: 'a', value: staff.religion }),
                        components.profileCell({ name: 'maritalstatus', element: 'a', value: staff.maritalstatus }),
                        components.profileCell({ name: 'address', element: 'a', value: staff.address }),
                        components.profileCell({ name: 'birthdate', element: 'a', value: staff.birthdate }),
                        components.profileCell({ name: 'nationality', element: 'a', value: staff.nationality })
                    ]
                }
            ]
        });

        let editBio = base.createElement({
            element: 'div', attributes: {}, children: [
                { element: 'a', attributes: { class: 'profile-item big' }, text: 'Bio' },
                {
                    element: 'span', attributes: { class: 'profile-container' }, children: [
                        components.profileCell({ name: 'firstname', element: 'input', value: staff.firstname || '' }),
                        components.profileCell({ name: 'middlename', element: 'input', value: staff.middlename || '' }),
                        components.profileCell({ name: 'lastname', element: 'input', value: staff.lastname || '' }),
                        components.profileCell({ name: 'gender', element: 'select', value: staff.gender || '', options: ['Male', 'Female', 'Other'] }),
                        components.profileCell({ name: 'religion', element: 'select', value: staff.religion || '', options: ['Christainity', 'Islam', 'Traditional'] }),
                        components.profileCell({ name: 'maritalStatus', element: 'select', value: staff.maritalstatus || '', options: ['Single', 'Married', 'Divorced'] }),
                        components.profileCell({ name: 'address', element: 'input', value: staff.address || '' }),
                        components.profileCell({ name: 'dateOfBirth', element: 'input', value: staff.birthdate || '', type: 'date' }),
                        components.profileCell({ name: 'nationality', element: 'select', value: staff.nationality || '', options: ['Nigeria', 'Ghana', 'Togo'] })
                    ]
                }
            ]
        })

        let profileControls = components.footerButtons({ attributes: { id: 'profile-control-container' }, contents: [{ name: 'edit', icon: 'fas fa-pen' }, { name: 'password', icon: 'fas fa-pen' }] });

        let editControls = components.footerButtons({ attributes: { id: 'profile-control-container' }, contents: [{ name: 'cancel', icon: 'fas fa-times' }, { name: 'save', icon: 'fas fa-check' }] });

        let image = { icon: 'fas fa-user' };
        if (!!staff.image) image.src = `../${staff.image}`;
        let editableImage = components.editableImage(image);
        let content = base.createElement({
            element: 'div', attributes: { id: 'profile-window' }, children: [
                {
                    element: 'span', attributes: { id: 'profile-primary' }, children: [
                        editableImage,
                        {
                            element: 'span', attributes: { id: 'profile-primary-details' }, children: [
                                { element: 'a', attributes: { class: 'profile-item big' }, text: `${staff.firstname || ''} ${staff.middlename || ''} ${staff.lastname || ''}` },
                            ]
                        }
                    ]
                },
                {
                    element: 'span', attributes: { id: 'profile-secondary' }, children: [
                        getBio
                    ]
                },
            ]
        });

        if (staff._id == utilities.details._id) {
            content.append(profileControls);
        }
        let popUp = components.popUp(content, `Profile: {${staff.username}}`);

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
                utilities.connect({ method: 'PUT', url: `staff/edit`, body: data, trigger: event.bubbledTo })
                    .then(res => {
                        components.alert(res);
                        editBio.replaceWith(getBio);
                        editControls.replaceWith(profileControls);
                        editableImage.classList.remove('edit');
                        editableImage.upload = undefined;
                    })
                    .catch(error => {
                        components.alert(error);
                    });
            }
        });
    }

    this.dashboard = (staff = utilities.details) => {
        let app = components.app();
        let header = app.find('#main-header');
        header.render(this.headerContent());
        let main = app.find('#main-window');
        main.makeElement({
            element: 'div', attributes: { id: 'dashboard', class: 'form-container' }, children: [
                {
                    element: 'span', attributes: { class: 'tab' }, children: [
                        { element: 'a', attributes: { class: 'tab-element active', id: 'history-tab' }, text: 'History' },
                        { element: 'a', attributes: { class: 'tab-element', id: 'accounts-tab' }, text: 'Accounts' },
                        { element: 'a', attributes: { class: 'tab-element', id: 'actions-tab' }, text: 'Action' }
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
                if (event.target.id == 'accounts-tab') {
                    dasboardContent.render(this.accounts());
                }
                else if (event.target.id == 'actions-tab') {
                    dasboardContent.render(this.actions());
                }
                else if (event.target.id == 'history-tab') {
                    dasboardContent.render(this.history());
                }
            }
        });
        return app;
    }

    this.history = () => {
        let _history = base.createElement({
            element: 'div', attributes: { id: 'history-page', class: 'dashboard-section' }
        });

        utilities.connect({ method: 'GET', url: `find/transaction?many=1` })
            .then(contents => {
                for (let i in contents) {
                    contents[i].time = new Date(parseInt(contents[i].time)).toLocaleDateString();
                    contents[i].amount = `${utilities.money(contents[i].amount)}(${contents[i].currency})`
                }
                _history.append(components.table({
                    contents, projection: { type: 1, accountName: 1, accountNo: 1, amount: 1, time: 1 }, search: true, options: ['view'], callbacks: {
                        click: (params) => {
                            console.log(params.data);
                            utilities.connect({ method: 'GET', url: `find/transaction?query=${JSON.stringify({ _id: params.data._id })}` })
                                .then(data => {
                                    utilities.run('transactionReciept', {
                                        name: data.accountName,
                                        number: data.accountNo,
                                        balance: data.balance,
                                        amount: data.amount,
                                        narration: data.details,
                                        reference: data._id,
                                        type: data.type,
                                        date: new Date(parseInt(data.time)).toLocaleDateString(),
                                        currency: data.currency
                                    });
                                })
                                .catch(components.alert);
                        }
                    }
                }))
            })
            .catch(error => {
                _history.makeElement(components.footerButtons({
                    attributes: { style: { marginTop: '100px' } }, contents: [
                        { name: error, icon: 'fas fa-times' }
                    ]
                }))
            })

        return _history;
    }

    this.accounts = () => {
        let display = base.createElement({
            element: 'div', attributes: { id: 'accounts-page' }, children: [
                { element: 'i', attributes: { id: 'add-account', class: 'fas fa-plus' } },
                {
                    element: 'style', text:
                        `   
                            #accounts-page{
                                display: grid;
                                gap: 1em;
                                align-items: flex-start;
                                grid-template-rows: max-content 1fr;
                                height: 100%;
                                overflow: hidden;
                            }
                            #accounts-page #add-account{
                                width: 30px;
                                height: 30px;
                                border-radius: 50px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: var(--primary-color);
                                background: var(--secondary-color);
                                cursor: pointer;
                            }
                            #accounts-page .table-container{
                                height: calc(100% - 50px);
                            }
                        `
                }
            ]
        });
        let tableData = [], displayContent;
        let createTable = () => {
            return components.table({
                contents: tableData, projection: { username: 1, email: 1, accountName: 'account name', accountNo: 'account number', frozen: 1 }, search: true, options: ['view', 'toggle freeze', 'delete'], callbacks: {
                    click: (params) => {
                        if (params.action == 'view') {
                            utilities.connect({ method: 'GET', url: `find/account?query=${JSON.stringify({ _id: params.data._id })}` })
                                .then(data => {
                                    account.profile(data);
                                })
                                .catch(components.alert);
                        }
                        else if (params.action == 'toggle freeze') {
                            let act = 'frozen', path = 'freeze';
                            if (params.data.frozen) {
                                act = 'un' + act;
                                path = 'un' + path;
                            }
                            if (confirm(`Account will be ${act}!!!`)) {
                                utilities.connect({ method: 'PUT', url: `account/${path}/${params.data._id}` })
                                    .then(note => {
                                        params.data.frozen = !params.data.frozen;
                                        params.row.find('td[data-name="frozen"]').textContent = params.data.frozen;
                                        components.alert(note);
                                    })
                                    .catch(components.alert);
                            }
                        }
                        else if (params.action == 'delete') {
                            if (confirm('Account will be deleted!!!')) {
                                utilities.connect({ method: 'DELETE', url: `account/${params.data._id}` })
                                    .then(note => {
                                        params.row.remove();
                                        components.alert(note);
                                    })
                                    .catch(components.alert);
                            }
                        }
                    }
                }
            })
        }
        utilities.connect({ method: 'GET', url: 'find/account?many=1' })
            .then(data => {
                tableData = data;
                displayContent = createTable();
                display.append(displayContent);
            })
            .catch(error => {
                displayContent = components.footerButtons({
                    attributes: { style: { marginTop: '100px' } }, contents: [
                        { name: error, icon: 'fas fa-times' }
                    ]
                });
                display.makeElement(displayContent);
            });

        display.addEventListener('click', event => {
            if (event.target.id == 'add-account') {
                add();
            }
        });

        let add = () => {
            let content = account.register();
            content.find('.tab').remove();
            let popUp = components.popUp(content, 'Create Account');

            content.addEventListener('created', event => {
                popUp.remove();
                tableData.push(content.account);
                let table = createTable()
                displayContent.replaceWith(table);
                displayContent = table;
            });
        }
        return display;
    }

    this.transferRequests = () => {
        let transfer = base.createElement({
            element: 'div', attributes: { id: 'transfer' }, children: [
                {
                    element: 'span', attributes: { style: { display: 'flex', justifyContent: 'space-between', padding: '1em' } }, children: [
                        { element: 'a', attributes: { style: { fontSize: 'var(--text-font-size)', fontWeight: 'bold' } }, text: 'Request List' },
                        { element: 'a', attributes: { style: { fontSize: 'var(--text-font-size)', fontWeight: 'bold' } }, text: 'Click to open and approve or decline' }
                    ]
                }
            ]
        });

        utilities.connect({ method: 'GET', url: `find/request?many=1&query=${JSON.stringify({ type: 'externaltransfer', resolved: false })}` })
            .then(requests => {
                transfer.makeElement({
                    element: 'div', attributes: { id: 'transaction-history' }, children: (() => {
                        let list = [], i;
                        for (i of requests) {
                            list.push({
                                element: 'span', attributes: { class: 'transaction-history-single', id: i._id }, children: [
                                    { element: 'i', attributes: { class: ` icon fas fa-circle` } },
                                    {
                                        element: 'span', attributes: { class: 'transaction-history-item-container' }, children: [
                                            { element: 'a', attributes: { class: 'transaction-history-item' }, text: i.accountName },
                                            // { element: 'a', attributes: { class: 'transaction-history-item' }, text: `Transfer to ${i.details.to.accountName}` }
                                        ]
                                    },
                                    {
                                        element: 'span', attributes: { class: 'transaction-history-item-container' }, children: [
                                            { element: 'a', attributes: { class: 'transaction-history-item', style: { fontWeight: '700', letterSpacing: '.8px' } }, text: `${base.addCommaToMoney(i.details.amount.toString())}(${i.currency})` },
                                            { element: 'a', attributes: { class: 'transaction-history-item' }, text: new Date(parseInt(i.time)).toLocaleDateString() },
                                        ]
                                    }
                                ]
                            });
                        }
                        return list;
                    })()
                });
            })
            .catch(error => {
                transfer.makeElement(components.footerButtons({
                    attributes: { style: { marginTop: '100px' } }, contents: [
                        { name: error, icon: 'fas fa-times' }
                    ]
                }))
            });

        let done = (status) => {
            let contents = [];
            status
                ? contents.push({ name: 'Transfer Approved', icon: 'fas fa-check' })
                : contents.push({ name: 'Transfer Declined', icon: 'fas fa-times' })

            return components.footerButtons({ contents });
        }

        let handle = (params) => {
            console.log(params);
            let content = base.createElement({
                element: 'div', attributes: { id: 'review-transfer' }, children: [
                    {
                        element: 'span', attributes: { id: 'review-transfer-header' }, children: [
                            {
                                element: 'span', attributes: { id: 'review-transfer-date' }, text: new Date(parseInt(params.time)).toLocaleDateString()
                            },
                            {
                                element: 'span', attributes: { id: 'review-transfer-amount' }, text: `${base.addCommaToMoney(params.details.amount.toString())}(${params.account.currency})`
                            },
                        ]
                    },
                    {
                        element: 'span', attributes: { id: 'review-transfer-body' }, children: [
                            {
                                element: 'span', attributes: { class: 'review-transfer-account' }, children: [
                                    { element: 'a', attributes: { class: 'review-transfer-account-direction' }, text: 'From' },
                                    { element: 'a', attributes: { class: 'review-transfer-account-name' }, text: params.accountName },
                                    { element: 'a', attributes: { class: 'review-transfer-account-no' }, text: params.account.accountNo }
                                ]
                            },
                            {
                                element: 'span', attributes: { class: 'review-transfer-account' }, children: [
                                    { element: 'a', attributes: { class: 'review-transfer-account-direction' }, text: 'To' },
                                    { element: 'a', attributes: { class: 'review-transfer-account-name' }, text: params.details.to.accountName },
                                    { element: 'a', attributes: { class: 'review-transfer-account-no' }, text: params.details.to.accountNo },
                                    { element: 'a', attributes: { class: 'review-transfer-account-bank' }, text: params.details.to.bank }
                                ]
                            },
                        ]
                    },
                    components.footerButtons({ attributes: { id: 'reveiw-request-controls' }, contents: [{ name: 'approve', icon: 'fas fa-check' }, { name: 'decline', icon: 'fas fa-times' }] })
                ]
            });

            let popUp = components.popUp(content, "Transaction Details");

            content.addChildEventListener("click", { classes: ['footer-buttons-action'] }, even => {
                if (event.bubbledTo.id == 'button-decline' || event.bubbledTo.id == 'button-approve') {
                    let decision = event.bubbledTo.id == 'button-approve';
                    this.resolve(params._id, decision, event.bubbledTo)
                        .then(res => {
                            content.find('#reveiw-request-controls').replaceWith(done(decision));
                            params.clicked.remove();
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            });
        };

        transfer.addChildEventListener('click', { classes: ['transaction-history-single'] }, event => {
            let clicked = event.bubbledTo;
            utilities.connect({ method: 'GET', url: `find/request?query=${JSON.stringify({ _id: clicked.id })}` })
                .then(data => {
                    data.clicked = clicked;
                    handle(data);
                })
                .catch(console.error)
        });

        return transfer;
    }

    this.creditRequests = () => {
        let credit = base.createElement({
            element: 'div', attributes: { id: 'transfer' }, children: [
                {
                    element: 'span', attributes: { style: { display: 'flex', justifyContent: 'space-between', padding: '1em' } }, children: [
                        { element: 'a', attributes: { style: { fontSize: 'var(--text-font-size)', fontWeight: 'bold' } }, text: 'Request List' },
                        { element: 'a', attributes: { style: { fontSize: 'var(--text-font-size)', fontWeight: 'bold' } }, text: 'Click to open and approve or decline' }
                    ]
                }
            ]
        });

        utilities.connect({ method: 'GET', url: `find/request?many=1&query=${JSON.stringify({ type: 'creditaccount', resolved: false })}` })
            .then(requests => {
                credit.makeElement({
                    element: 'div', attributes: { id: 'transaction-history' }, children: (() => {
                        let list = [], i;
                        for (i of requests) {
                            list.push({
                                element: 'span', attributes: { class: 'transaction-history-single', id: i._id }, children: [
                                    { element: 'i', attributes: { class: ` icon fas fa-circle` } },
                                    {
                                        element: 'span', attributes: { class: 'transaction-history-item-container' }, children: [
                                            { element: 'a', attributes: { class: 'transaction-history-item' }, text: i.accountName },
                                            { element: 'a', attributes: { class: 'transaction-history-item' }, text: i.accountNo },
                                        ]
                                    },
                                    {
                                        element: 'span', attributes: { class: 'transaction-history-item-container' }, children: [
                                            { element: 'a', attributes: { class: 'transaction-history-item', style: { fontWeight: '700', letterSpacing: '.8px' } }, text: `${base.addCommaToMoney(i.details.amount.toString())}(${i.currency})` },
                                            { element: 'a', attributes: { class: 'transaction-history-item' }, text: new Date(parseInt(i.time)).toLocaleDateString() },
                                        ]
                                    }
                                ]
                            });
                        }
                        return list;
                    })()
                });
            })
            .catch(error => {
                credit.makeElement(components.footerButtons({
                    attributes: { style: { marginTop: '100px' } }, contents: [
                        { name: error, icon: 'fas fa-times' }
                    ]
                }))
            });

        let handle = (params) => {
            let content = base.createElement({
                element: 'div', attributes: { id: 'review-transfer' }, children: [
                    {
                        element: 'span', attributes: { id: 'review-transfer-header' }, children: [
                            {
                                element: 'span', attributes: { id: 'review-transfer-date' }, text: new Date(parseInt(params.time)).toLocaleDateString()
                            },
                            {
                                element: 'span', attributes: { id: 'review-transfer-amount' }, text: `${base.addCommaToMoney(params.details.amount.toString())}(${params.account.currency})`
                            },
                        ]
                    },
                    {
                        element: 'span', attributes: { id: 'review-transfer-body' }, children: [
                            {
                                element: 'span', attributes: { class: 'review-transfer-account' }, children: [
                                    { element: 'a', attributes: { class: 'review-transfer-account-direction' }, text: 'Account' },
                                    { element: 'a', attributes: { class: 'review-transfer-account-name' }, text: params.accountName },
                                    { element: 'a', attributes: { class: 'review-transfer-account-no' }, text: params.account.accountNo }
                                ]
                            },
                            {
                                element: 'span', attributes: { class: 'review-transfer-account' }, text: 'Credit this account with the specified amount'
                            },
                        ]
                    },
                    components.footerButtons({ attributes: { id: 'reveiw-request-controls' }, contents: [{ name: 'approve', icon: 'fas fa-check' }, { name: 'decline', icon: 'fas fa-times' }] })
                ]
            });

            let popUp = components.popUp(content, "Transaction Details");

            content.addChildEventListener("click", { classes: ['footer-buttons-action'] }, even => {
                if (event.bubbledTo.id == 'button-decline' || event.bubbledTo.id == 'button-approve') {
                    let decision = event.bubbledTo.id == 'button-approve';
                    this.resolve(params._id, decision, event.bubbledTo)
                        .then(res => {
                            params.clicked.remove();
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            });
        };

        credit.addChildEventListener('click', { classes: ['transaction-history-single'] }, event => {
            let clicked = event.bubbledTo;
            utilities.connect({ method: 'GET', url: `find/request?query=${JSON.stringify({ _id: clicked.id })}` })
                .then(data => {
                    data.clicked = clicked;
                    handle(data);
                })
                .catch(console.error)
        });

        return credit;
    }

    this.debitRequests = () => {
        let debit = base.createElement({
            element: 'div', attributes: { id: 'transfer' }, children: [
                {
                    element: 'span', attributes: { style: { display: 'flex', justifyContent: 'space-between', padding: '1em' } }, children: [
                        { element: 'a', attributes: { style: { fontSize: 'var(--text-font-size)', fontWeight: 'bold' } }, text: 'Request List' },
                        { element: 'a', attributes: { style: { fontSize: 'var(--text-font-size)', fontWeight: 'bold' } }, text: 'Click to open and approve or decline' }
                    ]
                }
            ]
        });

        utilities.connect({ method: 'GET', url: `find/request?many=1&query=${JSON.stringify({ type: 'debitaccount', resolved: false })}` })
            .then(requests => {
                debit.makeElement({
                    element: 'div', attributes: { id: 'transaction-history' }, children: (() => {
                        let list = [], i;
                        for (i of requests) {
                            list.push({
                                element: 'span', attributes: { class: 'transaction-history-single', id: i._id }, children: [
                                    { element: 'i', attributes: { class: ` icon fas fa-circle` } },
                                    {
                                        element: 'span', attributes: { class: 'transaction-history-item-container' }, children: [
                                            { element: 'a', attributes: { class: 'transaction-history-item' }, text: i.accountName },
                                            { element: 'a', attributes: { class: 'transaction-history-item' }, text: i.accountNo },
                                        ]
                                    },
                                    {
                                        element: 'span', attributes: { class: 'transaction-history-item-container' }, children: [
                                            { element: 'a', attributes: { class: 'transaction-history-item', style: { fontWeight: '700', letterSpacing: '.8px' } }, text: `${base.addCommaToMoney(i.details.amount.toString())}(${i.currency})` },
                                            { element: 'a', attributes: { class: 'transaction-history-item' }, text: new Date(parseInt(i.time)).toLocaleDateString() },
                                        ]
                                    }
                                ]
                            });
                        }
                        return list;
                    })()
                });
            })
            .catch(error => {
                debit.makeElement(components.footerButtons({
                    attributes: { style: { marginTop: '100px' } }, contents: [
                        { name: error, icon: 'fas fa-times' }
                    ]
                }))
            });

        let done = (status) => {
            let contents = [];
            status
                ? contents.push({ name: 'Debit Approved', icon: 'fas fa-check' })
                : contents.push({ name: 'Debit Declined', icon: 'fas fa-times' })

            return components.footerButtons({ contents });
        }

        let handle = (params) => {
            let content = base.createElement({
                element: 'div', attributes: { id: 'review-transfer' }, children: [
                    {
                        element: 'span', attributes: { id: 'review-transfer-header' }, children: [
                            {
                                element: 'span', attributes: { id: 'review-transfer-date' }, text: new Date(parseInt(params.time)).toLocaleDateString()
                            },
                            {
                                element: 'span', attributes: { id: 'review-transfer-amount' }, text: `${base.addCommaToMoney(params.details.amount.toString())}(${params.account.currency})`
                            },
                        ]
                    },
                    {
                        element: 'span', attributes: { id: 'review-transfer-body' }, children: [
                            {
                                element: 'span', attributes: { class: 'review-transfer-account' }, children: [
                                    { element: 'a', attributes: { class: 'review-transfer-account-direction' }, text: 'Account' },
                                    { element: 'a', attributes: { class: 'review-transfer-account-name' }, text: params.accountName },
                                    { element: 'a', attributes: { class: 'review-transfer-account-no' }, text: params.account.accountNo }
                                ]
                            },
                            {
                                element: 'span', attributes: { class: 'review-transfer-account' }, text: 'Credit this account with the specified amount'
                            },
                        ]
                    },
                    components.footerButtons({ attributes: { id: 'reveiw-request-controls' }, contents: [{ name: 'approve', icon: 'fas fa-check' }, { name: 'decline', icon: 'fas fa-times' }] })
                ]
            });

            let popUp = components.popUp(content, "Transaction Details");

            content.addChildEventListener("click", { classes: ['footer-buttons-action'] }, even => {
                if (event.bubbledTo.id == 'button-decline' || event.bubbledTo.id == 'button-approve') {
                    let decision = event.bubbledTo.id == 'button-approve';
                    this.resolve(params._id, decision, event.bubbledTo)
                        .then(res => {
                            content.find('#reveiw-request-controls').replaceWith(done(decision));
                            params.clicked.remove();
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            });
        };

        debit.addChildEventListener('click', { classes: ['transaction-history-single'] }, event => {
            let clicked = event.bubbledTo;
            utilities.connect({ method: 'GET', url: `find/request?query=${JSON.stringify({ _id: clicked.id })}` })
                .then(data => {
                    data.clicked = clicked;
                    handle(data);
                })
                .catch(console.error)
        });

        return debit;
    }

    this.staffManager = () => {
        let tableData = [];
        let createTable = () => {
            return components.table({
                contents: tableData, projection: { username: 1, email: 1, _id: 1 }, search: true, options: ['view', 'delete'], callbacks: {
                    click: (params) => {
                        if (params.action == 'view') {
                            utilities.connect({ method: 'GET', url: `find/staff?query=${JSON.stringify({ _id: params.data._id })}` })
                                .then(data => {
                                    this.profile(data);
                                })
                                .catch(components.alert);
                        }
                        else if (params.action == 'delete') {
                            if (confirm('Staff will be deleted!!!')) {
                                utilities.connect({ method: 'DELETE', url: `staff/${params.data._id}` })
                                    .then(note => {
                                        params.row.remove();
                                        components.alert(note);
                                    })
                                    .catch(components.alert);
                            }
                        }
                    }
                }
            });
        }

        let display = base.createElement({
            element: 'div', attributes: { id: 'staff-page' }, children: [
                { element: 'i', attributes: { id: 'add-staff', class: 'fas fa-plus' } },
                {
                    element: 'style', text:
                        `   
                            #staff-page{
                                display: grid;
                                gap: 1em;
                                align-items: flex-start;
                                grid-template-rows: max-content 1fr;
                                height: 100%;
                                overflow: hidden;
                            }
                            #staff-page #add-staff{
                                width: 30px;
                                height: 30px;
                                border-radius: 50px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: var(--primary-color);
                                background: var(--secondary-color);
                                cursor: pointer;
                            }
                            #staff-page .table-container{
                                height: calc(100% - 50px);
                            }
                        `
                }
            ]
        });

        utilities.connect({ method: 'GET', url: 'find/staff?many=1' })
            .then(data => {
                for (let i in data) {
                    if (data[i]._id != utilities.details._id) {
                        tableData.push(data[i]);
                    }
                }
                if (tableData.length == 0) throw 'No staff found';
                display.append(createTable());
            })
            .catch(error => {
                display.makeElement(components.footerButtons({
                    attributes: { style: { marginTop: '100px' } }, contents: [
                        { name: error, icon: 'fas fa-times' }
                    ]
                }))
            });

        display.addEventListener('click', event => {
            if (event.target.id == 'add-staff') {
                add();
            }
        });

        let add = () => {
            let content = components.form({
                contents: [
                    { element: 'input', name: 'staffUsername' },
                    { element: 'input', name: 'staffEmail' },
                    { element: 'input', name: 'staffPassword', type: 'password', note: 'Password must be atleast 8 characters with atleast(1 capital, 1 small, 1 number and 1 symbol)' },
                ],
                controls: [
                    { element: 'button', name: 'Add' }
                ]
            });

            let popUp = components.popUp(content, 'Add Staff');

            let data, validate, formError = content.find('.form-error');
            content.addEventListener('submit', event => {
                event.preventDefault();
                validate = base.validateForm(content);
                console.log(validate);
                if (!validate.flag) {
                    formError.textContent = `Form '${base.camelCasedToText(validate.elementName).toUpperCase()} is not correctly filled`;
                    return;
                }

                data = base.jsonForm(content);
                utilities.connect({ method: 'POST', url: `create/staff`, body: data, trigger: content.find('#form-control-Add') })
                    .then(res => {
                        popUp.remove();
                        components.alert(res.message);
                        tableData.push(res.staff);
                        display.find('.table-container').replaceWith(createTable());
                    })
                    .catch(error => formError.textContent = error);
            })
        }
        return display;
    }

    this.accountRequests = () => {
        let display = base.createElement({
            element: 'div', attributes: { id: 'account-change-page' }, children: [
                {
                    element: 'style', text:
                        `   
                                    #account-change-page{
                                        display: grid;
                                        gap: 1em;
                                        align-items: flex-start;
                                        grid-template-rows: max-content max-content 1fr;
                                        height: 100%;
                                        overflow: hidden;
                                    }
                                    #account-change-page .kedio-table-container{
                                        padding: unset;
                                        height: calc(100% - 50px);
                                    }
                                    #account-change-page .kedio-table-titleandsearch{
                                        border-bottom: none;
                                        padding: 0;
                                    }
                                    #account-change-page .kedio-table-search{
                                        display: none;
                                    }
                                    #account-change-page .kedio-table{
                                        border: none;
                                    }
                                    #account-change-page .kedio-table-column-title{
                                        display: block;
                                    }
                                    #account-change-page .kedio-table-column-title-text{
                                        font-size: var(--text-font-size);
                                        // text-align: justify;
                                    }
                                    #account-change-page .kedio-table-column-cell{
                                        font-size: var(--text-font-size);
                                        // text-align: justify;
                                    }
                                `
                }
            ]
        });

        utilities.connect({ method: 'GET', url: `find/request?many=1&query=${JSON.stringify({ type: 'editaccount', resolved: false })}` })
            .then(contents => {
                for (let i in contents) {
                    contents[i].date = new Date(parseInt(contents[i].time)).toLocaleDateString();
                    contents[i].time = new Date(parseInt(contents[i].time)).toLocaleTimeString();
                }
                // &query=${JSON.stringify({ type: 'editaccount', resolved: false })}
                display.prepend(components.table({
                    contents, projection: { time: 1, date: 1, accountName: 1, accountNo: 1 }, options: ['view'], search: true, callbacks: {
                        click: (params) => {
                            if (params.action == 'view') {
                                utilities.connect({ method: 'GET', url: `find/request?query=${JSON.stringify({ _id: params.data._id })}` })
                                    .then(data => {
                                        data.row = params.row;
                                        handle(data);
                                    })
                                    .catch(console.log)
                            }
                        }
                    }
                }))
            })
            .catch(error => {
                display.makeElement(components.footerButtons({
                    attributes: { style: { marginTop: '100px' } }, contents: [
                        { name: error, icon: 'fas fa-times' }
                    ]
                }))
            });

        let handle = (params = { _id: '', accountName: '', accountNo: '', date: '', details: {}, account: {} }) => {
            let content = base.createElement({
                element: 'div', attributes: { id: 'profile-review' }, children: [
                    {
                        element: 'span', attributes: { id: 'profile-reivew-title' }, children: [
                            {
                                element: 'span', attributes: { id: 'profile-review-account-details' }, children: [
                                    {
                                        element: 'a', attributes: { id: 'profile-review-account-name' }, text: params.accountName
                                    },
                                    {
                                        element: 'a', attributes: { id: 'profile-review-account-no' }, text: params.accountNo
                                    }
                                ]
                            },
                            {
                                element: 'a', attributes: { id: 'profile-review-date' }, text: new Date(parseInt(params.time)).toLocaleDateString()
                            }
                        ]
                    },
                    {
                        element: 'div', attributes: { id: 'profile-review-contents' }, children: [
                            {
                                element: 'span', attributes: { class: 'profile-review-changes' }, children: [
                                    { element: 'a', attributes: { class: 'profile-review-changes-title' }, text: 'Current' },
                                    {
                                        element: 'span', attributes: { class: 'profile-review-changes-list' }, children: (() => {
                                            let list = [];
                                            for (let i in params.details) {
                                                list.push({
                                                    element: 'span', attributes: { class: 'profile-review-changes-single' }, children: [
                                                        { element: 'a', attributes: { class: 'profile-review-changes-single-name' }, text: i },
                                                        { element: 'a', attributes: { class: 'profile-review-changes-single-value' }, text: params.account[i] }
                                                    ]
                                                });
                                            }
                                            return list;
                                        })()
                                    }
                                ]
                            },
                            {
                                element: 'span', attributes: { class: 'profile-review-changes' }, children: [
                                    { element: 'a', attributes: { class: 'profile-review-changes-title' }, text: 'Incoming' },
                                    {
                                        element: 'span', attributes: { class: 'profile-review-changes-list' }, children: (() => {
                                            let list = [];
                                            for (let i in params.details) {
                                                list.push({
                                                    element: 'span', attributes: { class: 'profile-review-changes-single' }, children: [
                                                        { element: 'a', attributes: { class: 'profile-review-changes-single-name' }, text: i },
                                                        { element: 'a', attributes: { class: 'profile-review-changes-single-value' }, text: params.details[i] }
                                                    ]
                                                });
                                            }
                                            return list;
                                        })()
                                    }
                                ]
                            },
                        ]
                    },
                    components.footerButtons({ attributes: {}, contents: [{ name: 'approve', icon: 'fas fa-check' }, { name: 'decline', icon: 'fas fa-times' }] }),
                    {
                        element: 'style', text:
                            `
                                #profile-review{
                                    display: grid;
                                    grid-template-columns: 1fr;
                                    grid-template-rows: max-content 1fr max-content;
                                    gap: 20px;
                                    height: calc(100% - 40px);
                                }

                                #profile-review > .footer-buttons{
                                    bottom: 0;
                                }

                                #profile-reivew-title{
                                    display: flex;
                                    justify-content: space-between;
                                    padding: 1em;
                                }

                                #profile-review-account-details{
                                    display: grid;
                                    grid-template-rows: max-content max-content;
                                    gap: 10px;
                                }

                                #profile-review-account-name{
                                    text-transform: uppercase;
                                    font-size: calc(var(--text-font-size)*1.2);
                                    font-weight: bold;
                                    font-family: var(--text-font-family);
                                }

                                #profile-review-account-no{
                                    font-size: calc(var(--text-font-size)*1.2);
                                    font-weight: 500;
                                    font-family: var(--text-font-family);
                                }

                                #profile-review-date{
                                    font-size: calc(var(--text-font-size));
                                    color: var(--dark-gray);
                                    font-family: var(--text-font-family);
                                }

                                #profile-review-contents{
                                    display: grid;
                                    grid-template-columns: 1fr 1fr;
                                    gap: 5px;
                                }

                                .profile-review-changes{
                                    display: grid;
                                    grid-template-columns: 1fr;
                                    grid-template-rows: max-content 1fr;
                                    background: var(--primary-color);
                                    padding: 10px;
                                    gap: 1em;
                                }

                                .profile-review-changes:nth-of-type(2){
                                    background: var(--light-gray);
                                }

                                .profile-review-changes-title{
                                    text-transform: uppercase;
                                    font-size: var(--text-font-size);
                                    font-weight: bold;
                                    font-family: var(--title-font-family);
                                }

                                .profile-review-changes-list{
                                    display: grid;
                                    grid-template-rows: repeat(${Object.keys(params.details).length}, max-content);
                                    gap: 5px;
                                    grid-template-columns: 1fr;
                                }

                                .profile-review-changes-single{
                                    display: grid;
                                    grid-template-rows: max-content max-content;
                                    gap: 3px;
                                    padding: 5px;
                                    justify-content: space-between;
                                    align-items: center;
                                }

                                .profile-review-changes-single-value{
                                    border-radius: 10px;
                                    border: 1px solid var(--dark-gray);
                                    padding: 5px;
                                }
                            `
                    }
                ]
            });

            let popUp = components.popUp(content, 'Account Profile Update Review');

            content.addChildEventListener('click', { classes: ['footer-buttons-action'] }, event => {
                if (event.bubbledTo.id == 'button-approve' || event.bubbledTo.id == 'button-decline') {
                    let decision = event.bubbledTo.id == 'button-approve';
                    this.resolve(params._id, decision, event.bubbledTo)
                        .then(res => {
                            content.find('.footer-buttons').replaceWith(components.finish(res, decision));
                            params.row.remove();
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            });
        }

        return display;
    }

    this.actions = () => {
        let getPath = (paths = []) => {
            return base.createElement({
                element: 'span', attributes: { id: 'dashboard-actions-path' }, children: (() => {
                    let list = [];
                    for (let l of paths) {
                        list.push({
                            element: 'span', attributes: { class: 'dashboard-actions-stop', id: base.stringReplace(l, ' ', '-') }, children: [
                                { element: 'a', text: l },
                                { element: 'i', attributes: { class: 'fas fa-angle-right' } }
                            ]
                        });
                    }
                    return list;
                })()
            });
        }

        let _actionsList = {
            element: 'span', attributes: { id: 'dashboard-actions-list' }, children: [
                {
                    element: 'span', attributes: { class: 'dashboard-actions-single', id: 'dashboard-actions-credit' }, children: [
                        { element: 'a', attributes: { class: 'dashboard-actions-name' }, text: 'Credit Requests' },
                        { element: 'a', attributes: { class: 'dashboard-actions-count' }, text: utilities.unResolved.deposit || '' },
                        { element: 'i', attributes: { class: 'fas fa-angle-right' } }
                    ]
                },
                {
                    element: 'span', attributes: { class: 'dashboard-actions-single', id: 'dashboard-actions-debit' }, children: [
                        { element: 'a', attributes: { class: 'dashboard-actions-name' }, text: 'Debit Requests' },
                        { element: 'a', attributes: { class: 'dashboard-actions-count' }, text: utilities.unResolved.withdraw || '' },
                        { element: 'i', attributes: { class: 'fas fa-angle-right' } }
                    ]
                },
                {
                    element: 'span', attributes: { class: 'dashboard-actions-single', id: 'dashboard-actions-transfer' }, children: [
                        { element: 'a', attributes: { class: 'dashboard-actions-name' }, text: 'Transfer Requests' },
                        { element: 'a', attributes: { class: 'dashboard-actions-count' }, text: utilities.unResolved.transfer || '' },
                        { element: 'i', attributes: { class: 'fas fa-angle-right' } }
                    ]
                },
                {
                    element: 'span', attributes: { class: 'dashboard-actions-single', id: 'dashboard-actions-staff' }, children: [
                        { element: 'a', attributes: { class: 'dashboard-actions-name' }, text: 'Staff Management' },
                        { element: 'i', attributes: { class: 'fas fa-angle-right' } }
                    ]
                },
                {
                    element: 'span', attributes: { class: 'dashboard-actions-single', id: 'dashboard-actions-accounts' }, children: [
                        { element: 'a', attributes: { class: 'dashboard-actions-name' }, text: 'Account Changes' },
                        { element: 'a', attributes: { class: 'dashboard-actions-count' }, text: utilities.unResolved.edit || '' },
                        { element: 'i', attributes: { class: 'fas fa-angle-right' } }
                    ]
                }
            ]
        };

        let _actions = base.createElement({
            element: 'div', attributes: { class: 'dashboard-section', id: 'dashboard-actions' }, children: [
                getPath(["Staff Actions"]),
                _actionsList
            ]
        });

        _actions.addChildEventListener('click', { classes: ['dashboard-actions-single'] }, event => {
            if (event.bubbledTo.id == 'dashboard-actions-credit') {
                _actions.render(this.creditRequests());
                _actions.prepend(getPath(["Staff Actions", "Credit Requests"]));
            }
            else if (event.bubbledTo.id == 'dashboard-actions-debit') {
                _actions.render(this.debitRequests());
                _actions.prepend(getPath(["Staff Actions", "Debit Requests"]));
            }
            else if (event.bubbledTo.id == 'dashboard-actions-transfer') {
                _actions.render(this.transferRequests());
                _actions.prepend(getPath(["Staff Actions", "Transfer Requests"]));
            }
            else if (event.bubbledTo.id == 'dashboard-actions-staff') {
                _actions.render(this.staffManager());
                _actions.prepend(getPath(["Staff Actions", "Staff Management"]));
            }
            else if (event.bubbledTo.id == 'dashboard-actions-accounts') {
                _actions.render(this.accountRequests());
                _actions.prepend(getPath(["Staff Actions", "Account Changes"]));
            }
        });

        _actions.addChildEventListener('click', { classes: ['dashboard-actions-stop'] }, event => {
            if (event.bubbledTo.id == 'Staff-Actions') {
                _actions.render(_actionsList);
                _actions.prepend(getPath(["Staff Actions"]));
            }
            else if (event.bubbledTo.id == 'Transfer-Requests') {
                _actions.render(this.transferRequests());
                _actions.prepend(getPath(["Staff Actions", "Transfer-Requests"]));
            }
            else if (event.bubbledTo.id == 'Staff-Management') {
                _actions.render(this.staffManager());
                _actions.prepend(getPath(["Staff Actions", "Staff Management"]));
            }
            else if (event.bubbledTo.id == 'Account-Changes') {
                _actions.render(this.accountRequests());
                _actions.prepend(getPath(["Staff Actions", "Account Changes"]));
            }
        });

        return _actions;
    }

    this.headerContent = (staff = { _id: 1, image: '../images/cover.png' }) => {
        let content = base.createElement({
            element: 'span', attributes: { class: 'header-account-details' }, children: [
                {
                    element: 'span', attributes: { class: 'header-account-details-container account-name' }, children: [
                        { element: staff._id ? 'img' : 'i', attributes: { id: 'dp', class: staff._id ? 'img' : 'icon fas fa-user', src: staff._id ? staff.image : '' } },
                        {
                            element: 'span', attributes: {}, children: [
                                { element: 'a', attributes: { class: 'header-account-details-item' }, text: 'Welcome' },
                                { element: 'a', attributes: { class: 'header-account-details-item big' }, text: staff.staffName || 'Staff' }
                            ]
                        }
                    ]
                },
                { element: 'a', attributes: { id: 'logout-button' }, text: 'Logout' },
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

    this.resolve = async (id, decision, trigger) => {
        try {
            let work = await utilities.connect({ method: 'PUT', url: 'staff/resolve', body: { id, decision }, trigger });

            console.log(work);
            return work;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

module.exports = new StaffComponents();