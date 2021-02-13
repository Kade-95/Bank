const components = require("./components/global");

module.exports = function Utils() {
    this.details = {};
    this.unResolved = {};

    this.connect = (params = { method: '', url: '', body: {}, trigger }) => {
        return new Promise((resolve, reject) => {
            let loading = base.createElement({
                element: 'i', attributes: { class: 'fas fa-spinner fa-spin', style: { width: '30px', height: '30px', fontSize: '30px' } }
            });

            let startConnection = () => {
                if (params.trigger) {
                    params.trigger.replaceWith(loading);
                }
            }

            let endConnection = () => {
                if (params.trigger) {
                    loading.replaceWith(params.trigger);
                }
            }

            startConnection();

            let request = new XMLHttpRequest();
            params.url = `${location.origin}/${params.url}`;

            request.responseType = 'json';
            request.onreadystatechange = event => {
                if (request.readyState == 3) {
                }
                if (request.readyState == 4) {
                    if (request.response) {
                        if(request.response.token){
                            localStorage.setItem('token', `Creeper ${request.response.token}`);
                            console.log(request.response.token);
                        }
                        if (request.response.status) {
                            resolve(request.response.message);
                        }
                        else if (request.response.status == 401 || request.response.message == 'Session not found') {
                            this.notify('Your Session has expired!!\nYou should login');
                            this.render('login');
                        }
                        else {
                            reject(request.response.message);
                        }
                    }
                    else {
                        reject(request.response);
                        console.log(request.response)
                    }
                    endConnection();
                }
            }

            request.onerror = error => {
                reject(error);
                endConnection();
            }

            request.upload.onerror = error => {
                reject(error);
                endConnection();
            }

            request.timeout = 10000;

            request.open(params.method, params.url, true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.setRequestHeader('Authentication', localStorage.getItem('token'));
            request.send(JSON.stringify(params.body));
        });
    }

    this.notify = (message) => {
        alert(message);
    }

    this.isStaff = () => {
        let platform = location.pathname;
        return platform.includes('/admin');
    }

    this.userType = () => {
        return this.isStaff() ? 'staff' : 'account';
    }

    this.logout = () => {
        this.connect({ method: 'POST', url: 'logout' })
            .then(res => {
                this.notify(res);
                this.render('login');
            })
            .catch(this.notify);
    }

    this.render = (name, ...params) => {
        let appWindow = document.body.find('#app-window');
        if (appWindow) appWindow.remove();

        if (components[name]) components[name]();
        else {
            components.login();
        }
    }

    this.run = (name, ...params) => {
        if (components[name]) components[name](params);
    }

    this.money = (amount = 0) => {
        amount = amount.toString();
        let [digit, decimal] = amount.split('.');
        digit = digit ? digit : '0';
        digit = base.addCommaToMoney(digit);
        decimal = decimal ? decimal : '';
        decimal += '00';
        amount = `${digit}.${decimal.slice(0, 2)}`;

        return amount;
    }

    this.getUnResolved = () => {
        this.connect({ method: 'GET', url: 'unresolved' })
            .then(notes => {
                this.unResolved = notes;
            })
            .catch(console.log);
    }
}
