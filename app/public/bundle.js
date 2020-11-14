(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
                element: 'header', attributes: { id: 'main-header', class: 'big' }, children: [
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
        element: 'div', attributes: { id: 'login-window', class: 'form-container' }, children: [
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
},{"kedio/browser":3}],2:[function(require,module,exports){
let Icons = {};

Icons['address-book'] = 'fas, fa-address-book';
Icons['amazon'] = 'fas, fa-amazon';
Icons['ambulance'] = 'fas, fa-ambulance';
Icons['android'] = 'fas, fa-android';
Icons['apple'] = 'fas, fa-apple';
Icons['asterisk'] = 'fas, fa-asterisk';
Icons['at'] = 'fas, fa-at';
Icons['backward'] = 'fas, fa-backward';
Icons['bank'] = 'fas, fa-bank';
Icons['battery'] = 'fas, fa-battery';
Icons['bed'] = 'fas, fa-bed';
Icons['bell'] = 'fas, fa-bell';
Icons['bicycle'] = 'fas, fa-bicycle';
Icons['birthday-cake'] = 'fas, fa-birthday-cake';
Icons['bitbucket'] = 'fas, fa-bitbucket';
Icons['bitcoin'] = 'fas, fa-bitcoin';
Icons['bluetooth'] = 'fas, fa-bluetooth';
Icons['bolt'] = 'fas, fa-bolt';
Icons['book'] = 'fas, fa-book';
Icons['bus'] = 'fas, fa-bus';
Icons['cab'] = 'fas, fa-cab';
Icons['calculator'] = 'fas, fa-calculator';
Icons['camera'] = 'fas, fa-camera';
Icons['car'] = 'fas, fa-car';
Icons['certificate'] = 'fas, fa-certificate';
Icons['child'] = 'fas, fa-child';
Icons['chrome'] = 'fas, fa-chrome';
Icons['cloud'] = 'fas, fa-cloud';
Icons['coffee'] = 'fas, fa-coffee';
Icons['comment'] = 'fas, fa-comment';
Icons['compass'] = 'fas, fa-compass';
Icons['copy'] = 'fas, fa-copy';
Icons['copyright'] = 'fas, fa-copyright';
Icons['clone'] = 'fas, fa-clone';
Icons['credit-card'] = 'fas, fa-credit-card';
Icons['cube'] = 'fas, fa-cube';
Icons['desktop'] = 'fas, fa-desktop';
Icons['diamond'] = 'fas, fa-diamond';
Icons['download'] = 'fas, fa-download';
Icons['drivers-license'] = 'fas, fa-drivers-license';
Icons['dropbox'] = 'fas, fa-dropbox';
Icons['drupal'] = 'fas, fa-drupal';
Icons['edge'] = 'fas, fa-edge';
Icons['edit'] = 'fas, fa-edit';
Icons['eject'] = 'fas, fa-eject';
Icons['ellipsis-h'] = 'fas, fa-ellipsis-h';
Icons['envelope'] = 'fas, fa-envelope';
Icons['eraser'] = 'fas, fa-eraser';
Icons['exchange'] = 'fas, fa-exchange';
Icons['exclamation'] = 'fas, fa-exclamation';
Icons['expand'] = 'fas, fa-expand';
Icons['eye'] = 'fas, fa-eye';
Icons['eye-slash'] = 'fas, fa-eye-slash';
Icons['fax'] = 'fas, fa-fax';
Icons['female'] = 'fas, fa-female';
Icons['file'] = 'fas, fa-file';
Icons['film'] = 'fas, fa-film';
Icons['fire'] = 'fas, fa-fire';
Icons['flag'] = 'fas, fa-flag';
Icons['flickr'] = 'fas, fa-flickr';
Icons['folder'] = 'fas, fa-folder';
Icons['forward'] = 'fas, fa-forward';
Icons['foursquare'] = 'fas, fa-foursquare';
Icons['gift'] = 'fas, fa-gift';
Icons['glass'] = 'fas, fa-glass';
Icons['globe'] = 'fas, fa-globe';
Icons['google'] = 'fas, fa-google';
Icons['graduation-cap'] = 'fas, fa-graduation-cap';
Icons['group'] = 'fas, fa-group';
Icons['hashtag'] = 'fas, fa-hashtag';
Icons['headphones'] = 'fas, fa-headphones';
Icons['heart'] = 'fas, fa-heart';
Icons['history'] = 'fas, fa-history';
Icons['home'] = 'fas, fa-home';
Icons['hotel'] = 'fas, fa-hotel';
Icons['hourglass'] = 'fas, fa-hourglass';
Icons['image'] = 'fas, fa-image';
Icons['imdb'] = 'fas, fa-imdb';
Icons['inbox'] = 'fas, fa-inbox';
Icons['industry'] = 'fas, fa-industry';
Icons['info'] = 'fas, fa-info';
Icons['instagram'] = 'fas, fa-instagram';
Icons['key'] = 'fas, fa-key';
Icons['language'] = 'fas, fa-language';
Icons['laptop'] = 'fas, fa-laptop';
Icons['leaf'] = 'fas, fa-leaf';
Icons['legal'] = 'fas, fa-legal';
Icons['life-bouy'] = 'fas, fa-life-bouy';
Icons['linkedin'] = 'fas, fa-linkedin';
Icons['linux'] = 'fas, fa-linux';
Icons['lock'] = 'fas, fa-lock';
Icons['magic'] = 'fas, fa-magic';
Icons['magnet'] = 'fas, fa-magnet';
Icons['male'] = 'fas, fa-male';
Icons['map'] = 'fas, fa-map';
Icons['microphone'] = 'fas, fa-microphone';
Icons['mobile'] = 'fas, fa-mobile';
Icons['money'] = 'fas, fa-money';
Icons['motorcycle'] = 'fas, fa-motorcycle';
Icons['music'] = 'fas, fa-music';
Icons['opera'] = 'fas, fa-opera';
Icons['paint-brush'] = 'fas, fa-paint-brush';
Icons['paper-plane'] = 'fas, fa-paper-plane';
Icons['pause'] = 'fas, fa-pause';
Icons['paw'] = 'fas, fa-paw';
Icons['paypal'] = 'fas, fa-paypal';
Icons['pen'] = 'fas, fa-pen';
Icons['pencil'] = 'fas, fa-pencil';
Icons['phone'] = 'fas, fa-phone';
Icons['photo'] = 'fas, fa-photo';
Icons['pinterest'] = 'fas, fa-pinterest';
Icons['plane'] = 'fas, fa-plane';
Icons['play'] = 'fas, fa-play';
Icons['plug'] = 'fas, fa-plug';
Icons['plus'] = 'fas, fa-plus';
Icons['podcast'] = 'fas, fa-podcast';
Icons['question'] = 'fas, fa-question';
Icons['quora'] = 'fas, fa-quora';
Icons['recycle'] = 'fas, fa-recycle';
Icons['reddit'] = 'fas, fa-reddit';
Icons['redo'] = 'fas, fa-redo';
Icons['refresh'] = 'fas, fa-refresh';
Icons['reply'] = 'fas, fa-reply';
Icons['resistance'] = 'fas, fa-resistance';
Icons['retweet'] = 'fas, fa-retweet';
Icons['road'] = 'fas, fa-road';
Icons['rocket'] = 'fas, fa-rocket';
Icons['rss'] = 'fas, fa-rss';
Icons['safari'] = 'fas, fa-safari';
Icons['scribe'] = 'fas, fa-scribe';
Icons['search'] = 'fas, fa-search';
Icons['send'] = 'fas, fa-send';
Icons['server'] = 'fas, fa-server';
Icons['ship'] = 'fas, fa-ship';
Icons['sign-in'] = 'fas, fa-sign-in';
Icons['sitemap'] = 'fas, fa-sitemap';
Icons['skyatlas'] = 'fas, fa-skyatlas';
Icons['skype'] = 'fas, fa-skype';
Icons['slideshare'] = 'fas, fa-slideshare';
Icons['snapchat'] = 'fas, fa-snapchat';
Icons['sort'] = 'fas, fa-sort';
Icons['soundcloud'] = 'fas, fa-soundcloud';
Icons['spoon'] = 'fas, fa-spoon';
Icons['spotify'] = 'fas, fa-spotify';
Icons['square'] = 'fas, fa-square';
Icons['stack-exchange'] = 'fas, fa-stack-exchange';
Icons['star'] = 'fas, fa-star';
Icons['steam'] = 'fas, fa-steam';
Icons['sticky-note'] = 'fas, fa-sticky-note';
Icons['stop'] = 'fas, fa-stop';
Icons['street-view'] = 'fas, fa-street-view';
Icons['subway'] = 'fas, fa-subway';
Icons['suitcase'] = 'fas, fa-suitcase';
Icons['support'] = 'fas, fa-support';
Icons['tasks'] = 'fas, fa-tasks';
Icons['taxi'] = 'fas, fa-taxi';
Icons['telegram'] = 'fas, fa-telegram';
Icons['television'] = 'fas, fa-television';
Icons['terminal'] = 'fas, fa-terminal';
Icons['thermometer'] = 'fas, fa-thermometer';
Icons['ticket'] = 'fas, fa-ticket';
Icons['times'] = 'fas, fa-times';
Icons['train'] = 'fas, fa-train';
Icons['trash'] = 'fas, fa-trash';
Icons['tree'] = 'fas, fa-tree';
Icons['trophy'] = 'fas, fa-trophy';
Icons['truck'] = 'fas, fa-truck';
Icons['tumblr'] = 'fas, fa-tumblr';
Icons['tv'] = 'fas, fa-tv';
Icons['twitter'] = 'fas, fa-twitter';
Icons['umbrella'] = 'fas, fa-umbrella';
Icons['university'] = 'fas, fa-university';
Icons['unlock'] = 'fas, fa-unlock';
Icons['upload'] = 'fas, fa-upload';
Icons['usb'] = 'fas, fa-usb';
Icons['user'] = 'fas, fa-user';
Icons['video-camera'] = 'fas, fa-video-camera';
Icons['vimeo'] = 'fas, fa-vimeo';
Icons['warning'] = 'fas, fa-warning';
Icons['wechat'] = 'fas, fa-wechat';
Icons['weibo'] = 'fas, fa-weibo';
Icons['whatsapp'] = 'fas, fa-whatsapp';
Icons['wheelchair'] = 'fas, fa-wheelchair';
Icons['wifi'] = 'fas, fa-wifi';
Icons['wikipedia-w'] = 'fas, fa-wikipedia-w';
Icons['wordpress'] = 'fas, fa-wordpress';
Icons['yelp'] = 'fas, fa-yelp';
Icons['yoast'] = 'fas, fa-yoast';
Icons['youtube'] = 'fas, fa-youtube';
Icons['undo'] = 'fas, fa-undo';


module.exports = Icons;
},{}],3:[function(require,module,exports){
const Base = require('./classes/Base');
const Components = require('./classes/Components');
const Func = require('./classes/Func');
const JSElements = require('./classes/JSElements');
const Matrix = require('./classes/Matrix');
const NeuralNetwork = require('./classes/NeuralNetwork');
const Period = require('./classes/Period');
const Template = require('./classes/Template');
const Tree = require('./classes/Tree');
const AppLibrary = require('./functions/AppLibrary');
const AnalysisLibrary = require('./functions/AnalysisLibrary');
const ArrayLibrary = require('./functions/ArrayLibrary');
const Compression = require('./functions/Compression');
const MathsLibrary = require('./functions/MathsLibrary');
const Shadow = require('./functions/Shadow');
const ObjectsLibrary = require('./functions/ObjectsLibrary');
const IndexedLibrary = require('./functions/IndexedLibrary');
const ColorPicker = require('./functions/ColorPicker');
const Icons = require('./Icons');

module.exports = {
    Base,
    Func,
    NeuralNetwork,
    Matrix,
    Template,
    Components,
    Compression,
    ColorPicker,
    IndexedLibrary,
    AppLibrary,
    ArrayLibrary,
    AnalysisLibrary,
    ObjectsLibrary,
    MathsLibrary,
    Shadow,
    Tree,
    Period,
    JSElements,
    Icons
}

},{"./Icons":2,"./classes/Base":4,"./classes/Components":5,"./classes/Func":6,"./classes/JSElements":7,"./classes/Matrix":8,"./classes/NeuralNetwork":9,"./classes/Period":10,"./classes/Template":11,"./classes/Tree":12,"./functions/AnalysisLibrary":14,"./functions/AppLibrary":15,"./functions/ArrayLibrary":16,"./functions/ColorPicker":17,"./functions/Compression":18,"./functions/IndexedLibrary":19,"./functions/MathsLibrary":20,"./functions/ObjectsLibrary":21,"./functions/Shadow":22}],4:[function(require,module,exports){
const Components = require('./Components');
const ColorPicker = require('../functions/ColorPicker');
const ArrayLibrary = require('./../functions/ArrayLibrary');
const ObjectsLibrary = require('./../functions/ObjectsLibrary');
const Icons = require('./../Icons');

class Empty {
}

class Base extends Components {
    constructor(theWindow = Empty) {
        super(theWindow);
        this.colorHandler = new ColorPicker();
        this.array =  new ArrayLibrary();
        this.object = new ObjectsLibrary();
        this.icons = Icons;
    }
}

module.exports = Base;

},{"../functions/ColorPicker":17,"./../Icons":2,"./../functions/ArrayLibrary":16,"./../functions/ObjectsLibrary":21,"./Components":5}],5:[function(require,module,exports){
const Template = require('./Template');
class Empty {
}

class Components extends Template {
    constructor(theWindow = Empty) {
        super(theWindow);
    }

    createTab(params = { titles: [] }) {
        var tabTitle = this.createElement({ element: 'ul', attributes: { class: 'tab' } });
        params.view.append(tabTitle);

        for (var i of params.titles) {
            tabTitle.append(
                this.createElement({ element: 'li', attributes: { class: 'tab-title' }, text: i })
            )
        }

        tabTitle.findAll('li').forEach(node => {
            node.addEventListener('click', event => {
                var url = this.urlSplitter(location.href);
                url.vars.tab = node.textContent.toLowerCase();
                router.render({ url: '?' + this.urlSplitter(this.urlMerger(url, 'tab')).queries });
            })
        })
    }

    cell(params = { element: 'input', attributes: {}, name: '', dataAttributes: {}, value: '', text: '', html: '', edit: '' }) {
        //set the cell-data id
        var id = this.stringReplace(params.name, ' ', '-') + '-cell';

        //create the cell label
        var label = this.createElement({ element: 'label', attributes: { class: 'cell-label' }, text: params.name });

        //cell attributes
        params.attributes = (this.isset(params.attributes)) ? params.attributes : {};

        //cell data attributes
        params.dataAttributes = (this.isset(params.dataAttributes)) ? params.dataAttributes : {};
        params.dataAttributes.id = id;

        var components;

        //set the properties of cell data
        if (params.element == 'select') {//check if cell data is in select element
            components = {
                element: params.element, attributes: params.dataAttributes, children: [
                    { element: 'option', attributes: { disabled: '', selected: '' }, text: `Select ${params.name}`, value: '' }//set the default option
                ]
            };
        }
        else {
            components = { element: params.element, attributes: params.dataAttributes, text: params.value };
        }

        if (this.isset(params.value)) components.attributes.value = params.value;
        if (this.isset(params.options)) components.options = params.options;

        let data;
        if (params.element instanceof Element) {
            data = params.element;
        }
        else {
            data = this.createElement(components);//create the cell-data
        }

        data.classList.add('cell-data');

        if (this.isset(params.value)) data.value = params.value;

        //create cell element
        let cell = this.createElement({ element: 'div', attributes: params.attributes, children: [label, data] });

        cell.classList.add('cell');

        if (this.isset(params.text)) data.textContent = params.text;

        if (this.isset(params.html)) data.innerHTML = params.html;


        if (this.isset(params.list)) {
            cell.makeElement({
                element: 'datalist', attributes: { id: `${id}-list` }, options: params.list.sort()
            });

            data.setAttribute('list', `${id}-list`);
        }

        let edit;
        if (this.isset(params.edit)) {
            edit = cell.makeElement({
                element: 'i', attributes: {
                    class: `${params.edit}`, 'data-icon': 'fas, fa-pen', style: { cursor: 'pointer', backgroundColor: 'var(--primary-color)', width: '1em', height: 'auto', position: 'absolute', top: '0px', right: '0px', padding: '.15em' }
                }
            });
            cell.css({ position: 'relative' });
        }

        cell.makeElement({
            element: 'style', text: `
        .cell {
            display: inline-grid;
            margin: .5em;
            font-size: 1em;
            letter-spacing: .1em;
            font-weight: 300;
            border: 1px solid gray;
            border-radius: 10px;
            overflow: auto;
            text-align: center;
            min-width: 100px;
            overflow-y: hidden;
        }
        
        .cell:hover, .cell:focus {
            border-radius: unset;
            box-shadow: var(--primary-shadow);
            transition-duration: .2s;
        }
        
        .cell-label {
            text-transform: uppercase;
            background-color: var(--secondary-color);
            color: var(--primary-color);
            padding: 0.3em;
            text-align: center;
            font-weight: 400;
        }
        
        .cell-data{
            padding: 0.3em;
            outline: none;
            border: none;
            color: var(--secondary-color);
            min-height: 30px;
            text-align: center;
            justify-self: center;
            max-width: 300px;
            max-height: 100px;
            overflow: auto;
        }
        
        .cell-data:hover, .cell-data:focus {
            cursor: text;
            transition-duration: 1s;
        }`})
        return cell;
    }

    message(params = { link: '', text: '', temp: 0 }) {
        var me = this.createElement({
            element: 'span', attributes: { class: 'alert' }, children: [
                this.createElement({ element: 'a', text: params.text, attributes: { class: 'text', href: params.link } }),
                this.createElement({ element: 'span', attributes: { class: 'close' } })
            ]
        });

        if (this.isset(params.temp)) {
            var time = setTimeout(() => {
                me.remove();
                clearTimeout(time);
            }, (params.temp != '') ? params.time * 1000 : 5000);
        }

        me.find('.close').addEventListener('click', event => {
            me.remove();
        });

        body.find('#notification-block').append(me);
    }

    createTable(params = { title: '', contents: {}, projection: {}, rename: {}, sort: false, search: false, filter: [] }) {
        //create the table element   
        let headers = [],//the headers
            columns = {},
            columnCount = 0,
            i,
            table = this.createElement(
                { element: 'div', attributes: params.attributes }
            );//create the table 

        table.classList.add('kedio-table');//add table to the class

        for (let content of params.contents) {//loop through the json array
            i = params.contents.indexOf(content);//get the position of the row
            for (let name in content) {//loop through the row
                if (headers.indexOf(name) == -1) {//add to headers
                    headers.push(name);
                    columns[name] = table.makeElement({
                        element: 'column', attributes: { class: 'kedio-table-column', 'data-name': name }, children: [
                            {
                                element: 'span', attributes: { class: 'kedio-table-column-title', 'data-name': name }, children: [
                                    { element: 'p', attributes: { class: 'kedio-table-column-title-text' }, text: name }
                                ]
                            },
                            { element: 'div', attributes: { class: 'kedio-table-column-contents' } }
                        ]
                    });

                    if (this.isset(params.sort)) {//make sortable if needed
                        columns[name].find('.kedio-table-column-title').makeElement({ element: 'i', attributes: { class: 'kedio-table-column-title-sort', 'data-icon': 'fas, fa-arrow-down' } });
                    }
                }
            }
        }

        params.projection = params.projection || {};

        let hide = Object.values(params.projection).includes(1);


        for (let name of headers) {//loop through the headers and add the contents 
            for (let content of params.contents) {
                i = params.contents.indexOf(content);
                columns[name].find('.kedio-table-column-contents').makeElement({ element: 'span', attributes: { class: 'kedio-table-column-cell', 'data-name': name, 'data-value': content[name] || '', 'data-row': i }, html: content[name] || '' });
            }

            if (params.projection[name] == -1 || (hide && !this.isset(params.projection[name]))) {
                columns[name].css({ display: 'none' });
                continue;
            }

            columnCount++;//count the column length
        }

        table.css({ gridTemplateColumns: `repeat(${columnCount}, 1fr)` });

        let tableContainer = this.createElement({//create table container and title
            element: 'div', attributes: { class: 'kedio-table-container' }, children: [
                {
                    element: 'span', attributes: { class: 'kedio-table-titleandsearch' }
                },
                table
            ]
        });

        let titleCount = 0;

        if (this.isset(params.title)) {// create the title text if needed
            tableContainer.find('.kedio-table-titleandsearch').makeElement({ element: 'h5', attributes: { class: 'kedio-table-title' }, text: params.title });
            titleCount++;
        }

        if (this.isset(params.sort)) {// set the data for sorting
            table.dataset.sort = true;
        }

        if (this.isset(params.search)) {// create the search area
            tableContainer.find('.kedio-table-titleandsearch').makeElement({ element: 'input', attributes: { class: 'kedio-table-search', placeHolder: 'Search table...' } });
            titleCount++;
        }

        if (this.isset(params.filter)) {//create the filter area
            tableContainer.find('.kedio-table-titleandsearch').makeElement({ element: 'select', attributes: { class: 'kedio-table-filter' }, options: params.filter });
            titleCount++;
        }

        if (params.contents.length == 0) {// Notify if table is empty
            table.textContent = 'Empty Table';
        }

        tableContainer.makeElement(
            [{// arrange the table title
                element: 'style', text: `
            @media(min-width: 700px) {
                .kedio-table-titleandsearch {
                  grid-template-columns: repeat(${titleCount}, 1fr);
                }
              }
        `},
            {
                element: 'style', text: `.kedio-table-container {
            width: var(--match-parent);
            padding: 0em 1em;
            height: var(--fill-parent);
            overflow: hidden;
            display: grid;
            grid-template-rows: max-content 1fr;
          }
          
          .kedio-table-titleandsearch {
            margin-bottom: 1em;
            display: grid;
            grid-gap: 1em;
            padding: .5em;
            align-items: center;
            border-bottom: 1px solid lightgray;
            background-color: var(--primary-color);
          }
          
          .kedio-table-title {
            font-weight: 1000;
            font-size: 1.5em;
            text-transform: capitalize;
          }
          
          .kedio-table-search {
            justify-self: flex-end;
            border-radius: 10px;
            border: 1px solid var(--secondary-color);
            outline: none;
            padding: 1em;
            width: var(--match-parent);
          }
          
          .kedio-table-filter {
            justify-self: flex-end;
            border-radius: 10px;
            border: 1px solid var(--secondary-color);
            outline: none;
            padding: 1em;
            width: var(--match-parent);
          }
          
          .kedio-table {
            text-align: center;
            font-size: 1em;
            font-weight: 300;
            width: var(--match-parent);
            grid-template-rows: 1fr;
            overflow: auto;
            display: grid;
            border: 1px solid var(--secondary-color);
          }
          
          .kedio-table .kedio-table-column{
            height: var(--fill-parent);
          }
          
          .kedio-table .kedio-table-column-title {
            position: sticky;
            top: 0;
            text-transform: uppercase;
            background-color: var(--secondary-color);
            color: var(--primary-color);
            width: var(--match-parent);
            display: grid;
            grid-template-columns: repeat(2, max-content);
            gap: .5em;
            justify-content: center;
            align-items: center;
            padding: .5em;
            z-index: 1;
          }
          
          .kedio-table .kedio-table-column-title-text{
            color: inherit;
            background-color: transparent;
            font-size: inherit;
          }
          
          .kedio-table .kedio-table-column-title-sort{
            color: inherit;
            background-color: transparent;
            font-size: inherit;
            cursor: pointer;
            display: none;
          }
          
          .kedio-table .kedio-table-column-contents{
            display: grid;
            gap: .2em;
            width: var(--match-parent);
          }
          
          .kedio-table .kedio-table-column-cell{
            min-width: max-content;
            width: var(--match-parent);
            padding: .5em;
            min-height: 20px;
          }
          
          .kedio-table .kedio-table-column-cell:nth-child(odd) {
            background-color: var(--primary-color);
          }
          
          .kedio-table .kedio-table-column-cell:nth-child(even) {
            background-color: var(--lighter-secondary-color);
          }
          
          .kedio-table input {
            width: inherit;
            height: inherit;
            text-transform: inherit;
            font-size: inherit;
          }
          
          .kedio-table img {
            width: 20px;
            height: auto;
          }
          
          .kedio-table a:visited {
            color: var(--accient-color);
          }
          
          .kedio-table-cell a {
            display: block;
            width: var(--fill-parent);
            height: var(--fill-parent);
            text-decoration: none;
            color: var(--accient-color);
            font-size: 1em;
          }
          
          .kedio-table-cell a:hover {
            background-color: var(--light-primary-color);
            color: var(--light-secondary-color);
            transition-duration: .4s;
          }
          
          .kedio-table .kedio-table-column-cell.kedio-table-selected-row {
            color: var(--accient-color);
          }
          
          .kedio-table-options {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: var(--accient-color);
            color: var(--secondary-color);
            position: absolute;
            left: 0;
            top: 0;
          }
          
          .kedio-table-options .kedio-table-option {
            padding: .5em;
            color: inherit;
            cursor: pointer;
            height: 20px;
            width: 20px;
          }
          
          .kedio-table-option:hover {
            color: var(--primary-color);
          }
          `}]);

        return tableContainer;
    }

    getTableData(table) {
        let data = [];
        let cells = table.findAll('.kedio-table-column-cell');

        for (let i = 0; i < cells.length; i++) {
            let { name, value, row } = cells[i].dataset;
            data[row] = data[row] || {};
            data[row][name] = value;
        }

        return data;
    }

    sortTable(table, by = '', direction = 1) {
        let data = this.getTableData(table);

        data.sort((a, b) => {
            a = a[by];
            b = b[by];

            if (this.isNumber(a) && this.isNumber(b)) {
                a = a / 1;
                b = b / 1;
            }

            if (direction > -1) {
                return a > b ? 1 : -1;
            }
            else {
                return a > b ? -1 : 1;
            }
        });
        return data;
    }

    listenTable(params = { table: {}, options: [] }, callbacks = { click: () => { }, filter: () => { } }) {
        params.options = params.options || [];
        callbacks = callbacks || [];
        let table = params.table.find('.kedio-table');

        let options = this.createElement({
            element: 'span', attributes: { class: 'kedio-table-options' }
        });

        let list = {
            view: 'fas fa-eye',
            delete: 'fas fa-trash',
            edit: 'fas fa-pen',
            revert: 'fas fa-history'
        }

        let optionClass;
        for (let option of params.options) {
            optionClass = list[option] || `fas fa-${option}`;
            let anOption = options.makeElement({
                element: 'i', attributes: { class: optionClass + ' kedio-table-option', id: 'kedio-table-option-' + option }
            });
        }

        let tableTitles = table.findAll('.kedio-table-column-title');
        let tableColumns = table.findAll('.kedio-table-column');
        let rows = [];
        let firstColumn = tableColumns[0];
        let firstVisibleColumn;

        if (this.isnull(firstColumn)) {
            return;
        }

        for (let i = 0; i < tableColumns.length; i++) {
            if (tableColumns[i].css().display != 'none') {
                firstVisibleColumn = tableColumns[i];
                break;
            }
        }

        let firstCells = firstColumn.findAll('.kedio-table-column-cell');
        let firstVisibleCells = firstVisibleColumn.findAll('.kedio-table-column-cell');

        let tableRow;

        for (let i = 0; i < firstCells.length; i++) {
            rows.push(firstCells[i].dataset.row);
        }

        if (params.table.find('.kedio-table').dataset.sort == 'true') {
            for (let i = 0; i < tableTitles.length; i++) {
                tableTitles[i].addEventListener('mouseenter', event => {
                    tableTitles[i].find('.kedio-table-column-title-sort').css({ display: 'unset' });
                });

                tableTitles[i].addEventListener('mouseleave', event => {
                    tableTitles[i].find('.kedio-table-column-title-sort').css({ display: 'none' });
                });

                tableTitles[i].find('.kedio-table-column-title-sort').addEventListener('click', event => {
                    let direction;
                    tableTitles[i].find('.kedio-table-column-title-sort').toggleClasses('fas, fa-arrow-up');
                    tableTitles[i].find('.kedio-table-column-title-sort').toggleClasses('fas, fa-arrow-down');
                    if (tableTitles[i].find('.kedio-table-column-title-sort').dataset.direction == 'up') {
                        tableTitles[i].find('.kedio-table-column-title-sort').dataset.direction = 'down';
                        direction = 1;
                    }
                    else {
                        tableTitles[i].find('.kedio-table-column-title-sort').dataset.direction = 'up';
                        direction = -1;
                    }

                    let text = tableTitles[i].find('.kedio-table-column-title-text').textContent;

                    let data = this.sortTable(params.table.find('.kedio-table'), text, direction);
                    let newTable = this.createTable({ contents: data });

                    let newTableColumns = newTable.findAll('.kedio-table-column');
                    for (let j = 0; j < newTableColumns.length; j++) {
                        tableColumns[j].find('.kedio-table-column-contents').innerHTML = newTableColumns[j].find('.kedio-table-column-contents').innerHTML;
                    }

                    tableColumns = table.findAll('.kedio-table-column');
                    filter();
                });
            }
        }

        if (!this.isnull(params.table.find('.kedio-table-search'))) {
            params.table.find('.kedio-table-search').onChanged(value => {
                filter();
            });
        }

        if (!this.isnull(params.table.find('.kedio-table-filter'))) {
            params.table.find('.kedio-table-filter').onChanged(value => {
                filter();
            });
        }

        let searchValue, filterValue;

        let filter = () => {
            if (!this.isnull(params.table.find('.kedio-table-search'))) {
                searchValue = params.table.find('.kedio-table-search').value;
            }

            if (!this.isnull(params.table.find('.kedio-table-filter'))) {
                filterValue = params.table.find('.kedio-table-filter').value;
            }

            for (let i = 0; i < rows.length; i++) {
                let hide = false;
                tableRow = table.findAll(`.kedio-table-column-cell[data-row="${i}"]`);

                for (let j = 0; j < tableRow.length; j++) {
                    tableRow[j].cssRemove(['display']);
                }

                if (this.isset(filterValue) && hide == false && this.isset(callbacks.filter)) {
                    hide = callbacks.filter(filterValue, tableRow);
                }

                if (this.isset(searchValue) && hide == false) {
                    hide = true;
                    for (let j = 0; j < tableRow.length; j++) {
                        if (tableRow[j].textContent.toLowerCase().includes(searchValue.toLowerCase())) {
                            hide = false;
                            break;
                        }
                    }
                }

                if (hide) {
                    for (let j = 0; j < tableRow.length; j++) {
                        tableRow[j].css({ display: 'none' });
                    }
                }
            }
        }

        if (this.isset(callbacks.click)) {
            table.addMultipleEventListener('mousedown, touchstart', event => {
                let target = event.target;
                if (target.classList.contains('kedio-table-option')) {
                    if (this.isset(callbacks.click)) {
                        callbacks.click(event);
                    }
                }
                else if (target.classList.contains('kedio-table-column-cell') || !this.isnull(target.getParents('.kedio-table-column-cell'))) {
                    if (!target.classList.contains('kedio-table-column-cell')) {
                        target = target.getParents('.kedio-table-column-cell');
                    }
                    let position = target.dataset.row;

                    options.remove();
                    firstVisibleCells[position].css({ position: 'relative' });
                    firstVisibleCells[position].append(options);

                    if (params.table.classList.contains('kedio-selectable')) {
                        let row = table.findAll(`.kedio-table-column-cell[data-row="${position}"]`);
                        for (let i = 0; i < row.length; i++) {
                            row[i].classList.toggle('kedio-table-selected-row');
                        }
                        options.remove();

                        if (!target.classList.contains('kedio-table-selected-row')) {
                            if (firstColumn.findAll('.kedio-table-selected-row').length == 0) {
                                params.table.classList.remove('kedio-selectable');
                            }
                        }
                    }
                }
            });

            table.pressed(event => {
                let target = event.target;
                if (event.duration > 300) {
                    if (target.classList.contains('kedio-table-column-cell') || !this.isnull(target.getParents('.kedio-table-column-cell'))) {
                        if (!target.classList.contains('kedio-table-column-cell')) {
                            target = target.getParents('.kedio-table-column-cell');
                        }
                        let position = target.dataset.row;

                        if (firstColumn.findAll('.kedio-table-selected-row').length == 0 && !params.table.classList.contains('kedio-selectable')) {
                            params.table.classList.add('kedio-selectable');
                            let row = table.findAll(`.kedio-table-column-cell[data-row="${position}"]`);
                            for (let i = 0; i < row.length; i++) {
                                row[i].classList.add('kedio-table-selected-row');
                            }
                            options.remove();
                        }
                    }
                }
            });
        }
    }

    createForm(params = { element: '', title: '', columns: 1, contents: {}, required: [], buttons: {} }) {
        let form = this.createElement({
            element: params.element || 'form', attributes: params.attributes, children: [
                { element: 'h3', attributes: { class: 'kedio-form-title' }, text: params.title },
                { element: 'section', attributes: { class: 'kedio-form-contents', style: { gridTemplateColumns: `repeat(${params.columns}, 1fr)` } } },
                { element: 'section', attributes: { class: 'kedio-form-buttons' } },
                {
                    element: 'style', text: `.kedio-form {
                    text-align: center;
                    justify-self: center;
                    align-self: center;
                    display: grid;
                    grid-row-gap: 1em;
                    grid-template-rows: repeat(4, min-content);
                    width: var(--match-parent);
                    max-width: 700px;
                    margin: 2em;
                    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                    border: 1px solid var(--secondary-color);
                }
                
                .kedio-form-title {
                    font-weight: 300;
                    letter-spacing: .05em;
                    font-size: 1.2em;
                    text-align: center;
                    background-color: var(--secondary-color);
                    color: var(--primary-color);
                    text-transform: uppercase;
                    text-decoration: none;
                    padding: 1em;
                }
                
                .kedio-form-contents{
                    display: grid;
                    grid-gap: 1em;
                    padding: 1em;
                    align-items: start;
                }
                
                .kedio-form-buttons{
                    display: grid;
                    grid-template-columns: 1fr;
                    justify-content: center;
                    align-content: center;
                    padding: 1em;
                }
                
                .kedio-form-buttons button{
                    width: var(--fill-parent);
                    border-radius: 20px;
                    padding: 1em;
                    border: 1px solid var(--secondary-color);
                    cursor: pointer;
                    background-color: var(--secondary-color);
                    color: var(--primary-color);
                }
                
                .kedio-form-single-content{
                    display: grid;
                    padding: .5em;
                }
                
                .kedio-form-label {
                    color: #666666;
                    text-transform: capitalize;
                    text-align: justify;
                    display: flex;
                    justify-content: space-between;
                }
                
                .kedio-form-note{
                    color: #999999;
                    font-size: .7em;
                }
                
                .kedio-form-data{
                    border: 1px solid var(--secondary-color);
                    padding: .7em .3em;
                    text-align: justify;
                    min-width: unset;
                    border-radius: 20px;
                    outline: none;
                }
                
                .kedio-form-data:focus {
                    border-color: var(--secondary-color);
                }
                
                .kedio-form-row{
                    position: relative;
                    display: grid;
                    border: 1px solid var(--secondary-color);
                    grid-gap: .5em;
                }
                
                .kedio-form-row-contents{
                    display: grid;
                    grid-gap: .5em;
                }
                
                .kedio-form .cell-label{
                    font-size: .9em;
                }
                
                .kedio-form .cell-data{
                    outline: none;
                    border: none;
                    min-height: 20px;
                }
                
                .kedio-form-error{
                    display: none;
                    background-color: var(--accient-color);
                    color: var(--secondary-color);
                    font-size: .8em;
                    padding: .5em;
                }
                
                @media(min-width: 700px) {
                    .kedio-form #remember-me {
                        width: 20px;
                        height: 20px;
                    }
                }`}
            ]
        });

        form.classList.add('kedio-form');

        if (this.isset(params.parent)) params.parent.append(form);
        let note;
        let formContents = form.find('.kedio-form-contents');

        for (let key in params.contents) {
            note = (this.isset(params.contents[key].note)) ? `(${params.contents[key].note})` : '';
            let lableText = params.contents[key].label || this.camelCasedToText(key).toLowerCase();
            let block = formContents.makeElement({
                element: 'div', attributes: { class: 'kedio-form-single-content' }, children: [
                    { element: 'label', html: lableText, attributes: { class: 'kedio-form-label', for: key.toLowerCase() } }
                ]
            });

            let data = block.makeElement(params.contents[key]);
            data.classList.add('kedio-form-data');
            if (this.isset(params.contents[key].note)) block.makeElement({ element: 'span', text: params.contents[key].note, attributes: { class: 'kedio-form-note' } });

            if (this.isset(params.required) && params.required.includes(key)) {
                data.required = true;
            }
        }

        for (let key in params.buttons) {
            form.find('.kedio-form-buttons').makeElement(params.buttons[key]);
        }

        form.makeElement({ element: 'span', attributes: { class: 'kedio-form-error' }, state: { name: 'error', owner: `#${form.id}` } });

        return form;
    }

    picker(params = { title: '', contents: [] }, callback = (event) => { }) {
        let picker = this.createElement({
            element: 'div', attributes: { class: 'kedio-picker' }, children: [
                { element: 'h3', attributes: { class: 'kedio-picker-title' }, text: params.title || '' },
                { element: 'div', attributes: { class: 'kedio-picker-contents' } },
                {
                    element: 'style', text: `.kedio-picker {
                    display: grid;
                    height: var(--fill-parent);
                    width: var(--fill-parent);
                    grid-template-rows: max-content 1fr;
                }
                
                .kedio-picker-contents {
                    display: block;
                    height: var(--fill-parent);
                    width: var(--fill-parent);
                }
                
                .kedio-picker-single {
                    padding: 2em;
                    display: inline-block;
                    margin: 1em;
                    border: 1px solid var(--secondary-color);
                    margin: 1em;
                }`}
            ]
        });

        for (let content of params.contents) {
            picker.find('.kedio-picker-contents').makeElement({ element: 'span', attributes: { class: 'kedio-picker-single', 'data-name': content }, text: content });
        }

        picker.addEventListener('dblclick', event => {
            if (event.target.classList.contains('kedio-picker-single')) {
                callback(event.target.dataset.name);
            }
        });

        return picker;
    }

    popUp(content, params = { title: '', attributes: {} }) {
        let container = params.container || document.body;
        let title = params.title || '';

        params.attributes = params.attributes || {};
        params.attributes.style = params.attributes.style || {};
        params.attributes.style.width = params.attributes.style.width || '50vw';
        params.attributes.style.height = params.attributes.style.height || '50vh';

        let popUp = this.createElement({
            element: 'div', attributes: { class: 'kedio-pop-up' }, children: [
                {
                    element: 'div', attributes: { id: 'pop-up-window', class: 'kedio-pop-up-window' }, children: [
                        {
                            element: 'div', attributes: { id: 'pop-up-menu', class: 'kedio-pop-up-menu' }, children: [
                                { element: 'p', attributes: { id: '', style: { color: 'inherit', padding: '1em' } }, text: title },
                                { element: 'i', attributes: { id: 'toggle-window', class: 'kedio-pop-up-control fas fa-expand-alt' } },
                                { element: 'i', attributes: { id: 'close-window', class: 'kedio-pop-up-control fas fa-times' } }
                            ]
                        },
                        {
                            element: 'div', attributes: { id: 'pop-up-content', class: 'kedio-pop-up-content' }, children: [
                                content
                            ]
                        }
                    ]
                },
                {
                    element: 'style', text: `.kedio-pop-up {
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background-color: var(--light-secondary-color);
                    display: grid;
                    width: var(--fill-parent);
                    height: var(--fill-parent);
                    justify-items: center;
                    align-items: center;
                    z-index: 1000;
                }
                
                .kedio-pop-up-window {
                    background-color: var(--primary-color);
                    display: grid;
                    grid-gap: 1em;
                    justify-items: center;
                    align-items: start;
                    grid-template-columns: 1fr;
                    grid-template-rows: max-content 1fr;
                    overflow: hidden;
                }
                
                .kedio-pop-up-menu {
                    background-color: var(--secondary-color);
                    color: var(--primary-color);
                    display: grid;
                    grid-gap: .5em;
                    grid-template-columns: 1fr repeat(2, min-content);
                    width: 100%;
                    justify-items: flex-end;
                    align-items: center
                }
                
                .kedio-pop-up-control {
                    color: var(--primary-color);
                    height: 20px;
                    width: 20px;
                    padding: 1em
                }
                
                .kedio-pop-up-content {
                    display: block;
                    overflow: auto;
                    height: 100%;
                    width: 100%;
                }`}
            ]
        });

        popUp.find('#pop-up-window').setAttributes(params.attributes);

        popUp.find('#toggle-window').addEventListener('click', event => {
            popUp.find('#toggle-window').classList.toggle('fa-expand-alt');
            popUp.find('#toggle-window').classList.toggle('fa-compress-alt');

            if (popUp.find('#toggle-window').classList.contains('fa-expand-alt')) {
                popUp.find('#pop-up-window').css({ height: params.attributes.style.height, width: params.attributes.style.width });
            }
            else {
                popUp.find('#pop-up-window').css({ height: 'var(--fill-parent)', width: 'var(--fill-parent)' });
            }
        });

        popUp.find('#close-window').addEventListener('click', event => {
            popUp.remove();
        });

        container.append(popUp);
        return popUp;
    }

    createSelect(params = { value: '', contents: {}, multiple: false }) {
        let selected = [],
            allowNavigate = false,
            scrollPosition = -1,
            active;

        //create the element
        let select = this.createElement({
            element: 'div', attributes: params.attributes, children: [
                {
                    element: 'span', attributes: { class: 'kedio-select-control', }, children: [
                        { element: 'input', attributes: { class: 'kedio-select-input', value: params.value || '', ignore: true } },
                        {
                            element: 'span', attributes: { class: 'kedio-select-toggle' }
                        }
                    ]
                },
                { element: 'input', attributes: { class: 'kedio-select-search', placeHolder: 'Search me...', ignore: true } },
                {
                    element: 'span', attributes: { class: 'kedio-select-contents' }
                },
                {
                    element: 'style', text: `.kedio-select {
                    display: grid;
                    max-height: 250px;
                    height: max-content;
                    grid-template-rows: max-content 1fr;
                    position: relative;
                    z-index: 0;
                }
                
                .kedio-select-control {
                    display: grid;
                    grid-template-columns: 1fr max-content;
                    align-items: centers;
                }
                
                .kedio-select-input {
                    border: none;
                    background: transparent;
                    color: var(--secondary-color);
                }
                
                .kedio-select-search {
                    background: var(--primary-color);
                    color: var(--secondary-color);
                    width: var(--match-parent);
                    padding: .3em;
                    justify-self: center;
                    display: none;
                    border: none;
                }
                
                .kedio-select-toggle {
                    border-left: 2px solid var(--secondary-color);
                    border-top: 2px solid var(--secondary-color);
                    transform: rotate(225deg);
                    width: .5em;
                    height: .5em;
                    margin: .3em;
                    cursor: pointer
                }
                
                .kedio-select-contents {
                    width: var(--fill-parent);
                    position: absolute;
                    display: none;
                    justify-items: center;
                    align-items: flex-start;
                    flex-direction: column;
                    overflow: auto;
                    z-index: 1000;
                    min-height: 50px;
                    height: max-content;
                    max-height: 250px;
                    border: 1px solid;
                    background-color: var(--primary-color);
                }
                
                .kedio-select-option {
                    display: flex;
                    place-items: center;
                    width: var(--match-parent);
                    padding: .5em;
                    cursor: pointer;
                }
                
                .kedio-select-option:hover, .kedio-select-active-option{
                    background-color: var(--secondary-color);
                    color: var(--primary-color);
                }`}
            ]
        });
        select.classList.add('kedio-select');
        let setValue = select.getAttribute('value');
        select.value = [];
        if (!this.isnull(setValue)) {
            select.value = this.array.findAll(setValue.split(','), v => {
                return v.trim() != '';
            });//remove all empty strings
        }

        select.dataset.active = 'false';
        //get the contents
        let contents = select.find('.kedio-select-contents');
        let input = select.find('.kedio-select-input');
        let search = select.find('.kedio-select-search');
        let toggle = select.find('.kedio-select-toggle');
        params.contents = params.contents || {};
        //populate the element contents
        if (Array.isArray(params.contents)) {//Turn contents to object if its array
            let items = params.contents;
            params.contents = {};
            for (let i = 0; i < items.length; i++) {
                params.contents[items[i]] = items[i];
            }
        }

        for (let i in params.contents) {
            let option = contents.makeElement({ element: 'span', attributes: { class: 'kedio-select-option', value: i } });
            option.innerHTML = params.contents[i];
            option.value = i;
        }

        for (let v of select.value) {
            input.value += params.contents[v];
            input.dispatchEvent(new CustomEvent('change'));
        }

        //enable multiple values
        let single = (!this.isset(params.multiple) || params.multiple == false);

        let options = select.findAll('.kedio-select-option');

        //search the contents
        search.onChanged(value => {
            for (let i = 0; i < options.length; i++) {
                if (!options[i].textContent.toLowerCase().includes(value.toLowerCase())) {
                    options[i].css({ display: 'none' });
                }
                else {
                    options[i].cssRemove(['display']);
                }
            }
        });

        //navigate the contents
        let navigate = event => {
            allowNavigate = false;
            if (event.key == 'ArrowDown' && scrollPosition < options.length - 1) {
                scrollPosition++;
                allowNavigate = true;
            }
            else if (event.key == 'ArrowUp' && scrollPosition > 0) {
                scrollPosition--;
                allowNavigate = true;
            }
            else if (event.key == 'Enter') {

            }

            if (allowNavigate) {
                active = contents.find('.kedio-select-active-option');
                if (!this.isnull(active)) {
                    active.classList.remove('kedio-select-active-option');
                }

                options[scrollPosition].classList.add('kedio-select-active-option');
            }
        }

        //toggle the contents
        toggle.addEventListener('click', event => {
            let active = select.dataset.active == 'true';
            if (active) {
                deactivate(active);
            }
            else {
                activate(active);
            }
        });

        //show the contents
        let inView, top, bottom;
        document.body.css({ overflow: 'auto' })

        let placeContents = () => {
            top = select.position().top;
            bottom = document.body.clientHeight - select.position().top;

            if (top > bottom) {
                contents.css({ top: -contents.position().height + 'px' });
            }
            else {
                contents.css({ top: select.position().height + 'px' });
            }
        }

        //show contents
        let activate = () => {
            if (select.inView('body')) {
                input.addEventListener('keydown', navigate, false);
                search.css({ display: 'flex' });
                contents.css({ display: 'flex' });
                placeContents();
                select.dataset.active = 'true';
            }
        }

        //hide the contents
        let deactivate = () => {
            input.removeEventListener('keydown', navigate, false);
            search.cssRemove(['display']);
            contents.cssRemove(['display']);
            select.dataset.active = 'false';
        }

        //update the selected
        let update = (values) => {
            selected = [];
            values = values.split(',');
            for (let value of values) {
                value = value.trim();
                for (let i in params.contents) {
                    if (params.contents[i] == value) {
                        value = i;
                    }
                }

                selected.push(value);
            }

            select.value = selected;
            input.value = values;
        }

        //check when activated
        select.bubbledEvent('click', event => {
            if (event.target != toggle && select.dataset.active == 'false') {
                activate();
            }

            if (event.target.classList.contains('kedio-select-option')) {
                let text = params.contents[event.target.value];
                if (params.multiple == 'single') {
                    if (input.value.includes(text)) {
                        input.value = input.value.replace(text, '');
                    }
                    else {
                        input.value += `, ${text}`;
                    }
                }
                else {
                    input.value += `, ${text}`;
                }

                input.dispatchEvent(new CustomEvent('change'));

                if (single) {
                    deactivate();
                }
            }
        });

        //check when deactivated
        select.notBubbledEvent('click', event => {
            if (select.dataset.active == 'true') {
                deactivate();
            }
        });

        //when input value changes
        input.addEventListener('change', event => {
            let values = input.value.split(',');

            values = this.array.findAll(values, value => {
                return value.trim() != '';
            });

            values = this.array.each(values, value => {
                return value.trim();
            });

            if (!single) {
                if (params.multiple == 'single') {
                    values = this.array.toSet(values);
                }
            }

            values = values.join(', ');
            update(values);
        });

        //align contents on scroll
        window.addEventListener('scroll', event => {
            if (select.inView('body')) {
                placeContents();
            }
        });

        return select;
    }

    choose(params = { note: '', options: [] }) {
        let chooseWindow = this.createElement({
            element: 'span', attributes: { class: 'crater-choose' }, children: [
                { element: 'p', attributes: { class: 'crater-choose-note' }, text: params.note },
                { element: 'span', attributes: { class: 'crater-choose-control' } },
                { element: 'button', attributes: { id: 'crater-choose-close', class: 'btn' }, text: 'Close' }
            ]
        });

        let chooseControl = chooseWindow.querySelector('.crater-choose-control');

        chooseWindow.querySelector('#crater-choose-close').addEventListener('click', event => {
            chooseWindow.remove();
        });

        for (let option of params.options) {
            chooseControl.makeElement({
                element: 'button', attributes: { class: 'btn choose-option' }, text: option
            });
        }

        return {
            display: chooseWindow, choice: new Promise((resolve, reject) => {
                chooseControl.addEventListener('click', event => {
                    if (event.target.classList.contains('choose-option')) {
                        resolve(event.target.textContent);
                        chooseWindow.remove();
                    }
                });
            })
        };
    }

    textEditor(params = { id: '', width: 'max-width' }) {
        params = params || {};
        params.id = params.id || 'text-editor';
        let textEditor = this.createElement({
            element: 'div', attributes: {
                id: params.id
            }, children: [
                {
                    element: 'style', text: `

                    div#crater-text-editor{
                        margin: 0 auto;
                        display: grid;
                        width: ${params.width || 'max-content'};
                        height: max-content;
                        border: 2px solid rgb(40, 110, 89);
                        border-radius: 8px 8px 0px 0px;
                        background-color: var(--primary-color);
                    }
                    
                    div#crater-rich-text-area{
                        height: 100%;
                        width: 100%;
                    }

                    div#crater-the-ribbon{
                        border-bottom: none;
                        width: 100%;
                        padding: .5em 0;
                        display: grid;
                        grid-template-rows: max-content max-content;
                        background-color: rgb(40, 110, 89);
                        color: var(--primary-color);
                        text-align: left;
                    }

                    iframe#crater-the-WYSIWYG{
                        height: 100%;
                        width: 100%;
                    }

                    div#crater-the-ribbon button{
                        color: var(--primary-color);
                        border: none;
                        outline: none;
                        background-color: transparent;
                        cursor: pointer;
                        padding: .3em;
                        margin: .5em;
                    }

                    div#crater-the-ribbon button:hover{
                        background-color: rgb(20, 90, 70);
                        transition: all 0.3s linear 0s;
                    }

                    div#crater-the-ribbon input,  div#crater-the-ribbon select{
                        margin: .5em;
                    }

                    div#crater-the-ribbon input[type="color"]{
                        border: none;
                        outline: none;
                        background-color: transparent;
                    }
                `},
                {
                    element: 'div', attributes: {
                        id: 'crater-the-ribbon'
                    }, children: [
                        {
                            element: 'span', children: [
                                { element: 'button', attributes: { id: 'undoButton', title: 'Undo' }, text: '&larr;' },
                                { element: 'button', attributes: { id: 'redoButton', title: 'Redo' }, text: '&rarr;' },
                                { element: 'select', attributes: { id: 'fontChanger' }, options: this.fontStyles },
                                { element: 'select', attributes: { id: 'fontSizeChanger' }, options: this.range(1, 20) },
                                { element: 'button', attributes: { id: 'orderedListButton', title: 'Numbered List' }, text: '(i)' },
                                { element: 'button', attributes: { id: 'unorderedListButton', title: 'Bulletted List' }, text: '&bull;' },
                                { element: 'button', attributes: { id: 'linkButton', title: 'Create Link' }, text: 'Link' },
                                { element: 'button', attributes: { id: 'unLinkButton', title: 'Remove Link' }, text: 'Unlink' }
                            ]
                        },
                        {
                            element: 'span', children: [
                                { element: 'button', attributes: { id: 'boldButton', title: 'Bold' }, children: [{ element: 'b', text: 'B' }] },
                                { element: 'button', attributes: { id: 'italicButton', title: 'Italic' }, children: [{ element: 'em', text: 'I' }] },
                                { element: 'button', attributes: { id: 'underlineButton', title: 'Underline' }, children: [{ element: 'u', text: 'U' }] },
                                { element: 'button', attributes: { id: 'supButton', title: 'Superscript' }, children: [{ element: 'sup', text: '2' }] },
                                { element: 'button', attributes: { id: 'subButton', title: 'Subscript' }, children: [{ element: 'sub', text: '2' }] },
                                { element: 'button', attributes: { id: 'strikeButton', title: 'Strikethrough' }, children: [{ element: 's', text: 'abc' }] },
                                { element: 'input', attributes: { type: 'color', id: 'fontColorButton', title: 'Change Font Color', value: '#000000' } },
                                { element: 'input', attributes: { type: 'color', id: 'highlightButton', title: 'Hightlight Text', value: '#ffffff' } },
                                { element: 'input', attributes: { type: 'color', id: 'backgroundButton', title: 'Change Background', value: '#ffffff' } },
                                { element: 'button', attributes: { id: 'alignLeftButton', title: 'Align Left' }, children: [{ element: 'a', text: 'L' }] },
                                { element: 'button', attributes: { id: 'alignCenterButton', title: 'Align Center' }, children: [{ element: 'a', text: 'C' }] },
                                { element: 'button', attributes: { id: 'alignJustifyButton', title: 'Align Justify' }, children: [{ element: 'a', text: 'J' }] },
                                { element: 'button', attributes: { id: 'alignRightButton', title: 'Align Right' }, children: [{ element: 'a', text: 'R' }] }
                            ]
                        }
                    ]
                },
                {
                    element: 'div', attributes: {
                        id: 'crater-rich-text-area'
                    }, children: [
                        {
                            element: 'iframe', attributes: {
                                id: 'crater-the-WYSIWYG', frameBorder: 0, name: 'theWYSIWYG'
                            }
                        }
                    ]
                }
            ]
        });

        let fonts = textEditor.findAll('select#font-changer > option');
        fonts.forEach(font => {
            font.css({ fontFamily: font.value });
        });

        textEditor.find('#unorderedListButton').innerHTML = '&bull;';
        textEditor.find('#redoButton').innerHTML = '&rarr;';
        textEditor.find('#undoButton').innerHTML = '&larr;';

        let self = this;
        let editorWindow = textEditor.find('#crater-the-WYSIWYG');
        editorWindow.onAdded(() => {
            let editor = editorWindow.contentWindow.document;

            editor.body.innerHTML = '';
            if (self.isset(params.content)) {
                editor.body.innerHTML = params.content.innerHTML;
            }

            editor.designMode = 'on';

            textEditor.find('#boldButton').addEventListener('click', () => {
                editor.execCommand('Bold', false, null);
            }, false);

            textEditor.find('#italicButton').addEventListener('click', () => {
                editor.execCommand('Italic', false, null);
            }, false);

            textEditor.find('#underlineButton').addEventListener('click', () => {
                editor.execCommand('Underline', false, null);
            }, false);

            textEditor.find('#supButton').addEventListener('click', () => {
                editor.execCommand('Superscript', false, null);
            }, false);

            textEditor.find('#subButton').addEventListener('click', () => {
                editor.execCommand('Subscript', false, null);
            }, false);

            textEditor.find('#strikeButton').addEventListener('click', () => {
                editor.execCommand('Strikethrough', false, null);
            }, false);

            textEditor.find('#orderedListButton').addEventListener('click', () => {
                editor.execCommand('InsertOrderedList', false, `newOL${self.random()}`);
            }, false);

            textEditor.find('#unorderedListButton').addEventListener('click', () => {
                editor.execCommand('InsertUnorderedList', false, `newUL${self.random()}`);
            }, false);

            textEditor.find('#fontColorButton').onChanged(value => {
                editor.execCommand('ForeColor', false, value);
            });

            textEditor.find('#highlightButton').onChanged(value => {
                editor.execCommand('BackColor', false, value);
            });

            textEditor.find('#backgroundButton').onChanged(value => {
                editor.body.style.background = value;
            });

            textEditor.find('#fontChanger').onChanged(value => {
                editor.execCommand('FontName', false, value);
            });

            textEditor.find('#fontSizeChanger').onChanged(value => {
                editor.execCommand('FontSize', false, value);
            });

            textEditor.find('#linkButton').addEventListener('click', () => {
                let url = prompt('Enter a URL', 'http://');

                if (self.isnull(url)) return;
                editor.execCommand('CreateLink', false, url);
            }, false);

            textEditor.find('#unLinkButton').addEventListener('click', () => {
                editor.execCommand('UnLink', false, null);
            }, false);

            textEditor.find('#undoButton').addEventListener('click', () => {
                editor.execCommand('Undo', false, null);
            }, false);

            textEditor.find('#redoButton').addEventListener('click', () => {
                editor.execCommand('redo', false, null);
            }, false);

            textEditor.find('#alignLeftButton').addEventListener('click', () => {
                editor.execCommand('justifyLeft', false, null);
            });

            textEditor.find('#alignCenterButton').addEventListener('click', () => {
                editor.execCommand('justifyCenter', false, null);
            });

            textEditor.find('#alignJustifyButton').addEventListener('click', () => {
                editor.execCommand('justifyFull', false, null);
            });

            textEditor.find('#alignRightButton').addEventListener('click', () => {
                editor.execCommand('justifyRight', false, null);
            });
        }, false);

        return textEditor;
    }

    displayData(data = {}, container) {
        let lineNumbers = [];
        let displayString = (value) => {
            return this.createElement({ element: 'span', attributes: { class: 'kedio-data-str' }, text: `"${value}"` });
        }

        let displayLiteral = (value) => {
            return this.createElement({ element: 'span', attributes: { class: 'kedio-data-lit' }, text: `${value}` });
        }

        let displayPunctuation = (value) => {
            return this.createElement({ element: 'span', attributes: { class: 'kedio-data-pun' }, text: `${value}` });
        }

        let displayNewLine = () => {
            increment++;
            return this.createElement({ element: 'span', attributes: { class: 'kedio-data-pln' } });
        }

        let displayItem = (value, params) => {
            params = params || {};
            let item = this.createElement({ element: 'span', attributes: { class: 'kedio-data-item' } });
            lineNumbers.push(item);
            if (this.isset(params.key)) {
                item.makeElement([
                    displayString(params.key),
                    displayPunctuation(' : '),
                    chooseDisplay(value),
                ]);
            }
            else {
                item.makeElement([
                    chooseDisplay(value),
                ]);
            }
            return item;
        }

        let displayArray = (value) => {
            let array = this.createElement({ element: 'span', attributes: { class: 'kedio-data-block' } });
            lineNumbers.push(array);

            array.makeElement(displayPunctuation('['));
            let item;
            for (let i = 0; i < value.length; i++) {
                item = array.makeElement(displayItem(value[i]));

                if (i != value.length - 1) {
                    item.makeElement(displayPunctuation(','));
                }
            }
            array.makeElement(displayPunctuation(']'));
            return array;
        }

        let displayObject = (value) => {
            let object = this.createElement({ element: 'span', attributes: { class: 'kedio-data-block' } });
            lineNumbers.push(object);

            object.makeElement(displayPunctuation('{'));
            let item;
            let i = 0;
            for (let key in value) {
                item = object.makeElement(displayItem(value[key], { key }));
                if (i != Object.keys(value).length - 1) {
                    item.makeElement(displayPunctuation(','));
                }
                i++;
            }
            object.makeElement(displayPunctuation('}'));
            return object;
        }

        let chooseDisplay = (value) => {
            if (typeof value == "string") {
                return displayString(value);
            }
            else if (Array.isArray(value)) {
                return displayArray(value);
            }
            else if (typeof value == 'object') {
                return displayObject(value);
            }
            else {
                return displayLiteral(value);
            }
        }
        let lineHeight = '25px';
        let displayed = this.createElement({
            element: 'pre', attributes: { class: 'kedio-data-window' }, children: [
                {
                    element: 'span', attributes: { class: 'kedio-data-line', style: { lineHeight } }
                },
                {
                    element: 'span', attributes: { class: 'kedio-data-toggles' }
                },
                {
                    element: 'code', attributes: { class: 'kedio-data-code', style: { lineHeight } }, children: [
                        chooseDisplay(data)
                    ]
                },
                {
                    element: 'style', text: `.kedio-data-window {
                    color: inherit;
                    display: grid;
                    grid-template-columns: max-content max-content 1fr;
                    gap: 1em;
                }
                
                .kedio-data-line {
                    color: inherit;
                    display: grid;
                }
                
                .kedio-data-toggles {
                    color: inherit;
                    display: grid;
                    position: relative;
                }
                
                .kedio-data-line-number {
                    color: inherit;
                    /* display: flex; */
                }
                
                .kedio-data-toggles .kedio-data-toggles-button {
                    color: inherit;
                    display: flex;
                    align-items: center;
                    font-size: .8em;
                    cursor: pointer;
                    position: absolute;
                }
                
                .kedio-data-code {
                    color: inherit;
                    position: relative;
                }
                
                .kedio-data-pun {
                    color: inherit;
                }
                
                .kedio-data-lit {
                    color: inherit;
                }
                
                .kedio-data-block {
                    color: inherit;
                }
                
                .kedio-data-str {
                    color: inherit;
                }
                
                .kedio-data-pln {
                    display: block;
                    width: 100%;
                }
                
                .kedio-data-item {
                    margin-left: 20px;
                    display: block;
                    color: inherit;
                }`}
            ]
        });

        if (this.isset(container)) {
            container.append(displayed);
        }

        let code = displayed.find('.kedio-data-code'),
            numbers,
            toggleButtons,
            height = code.position().height,
            lines = displayed.find('.kedio-data-line'),
            toggles = displayed.find('.kedio-data-toggles'),
            count = height / parseInt(lineHeight),
            items = code.findAll('.kedio-data-item'),
            blocks = code.findAll('.kedio-data-block');

        let setRange = (block) => {
            let start = Math.floor((block.position().top - code.position().top) / parseInt(lineHeight)) + 1;
            let end = Math.floor((block.position().bottom - code.position().top) / parseInt(lineHeight)) + 1;
            block.range = this.range(end, start);
        }

        let setNumbers = () => {
            for (let i = 0; i < lineNumbers.length; i++) {
                lines.makeElement([
                    { element: 'a', html: `${i / 1 + 1}`, attributes: { class: 'kedio-data-line-number' } }
                ]);
            }
        }

        let setToggles = () => {
            for (let i = 0; i < blocks.length; i++) {
                let top = blocks[i].position().top - code.position().top + 6 + 'px'
                let toggle = toggles.makeElement({ element: 'i', attributes: { class: 'kedio-data-toggles-button fas fa-arrow-down', style: { top } } });

                toggle.block = blocks[i];
                blocks[i].toggle = toggle;
            }
        }

        let alignToggles = () => {
            for (let i = 0; i < toggleButtons.length; i++) {
                toggleButtons[i].css({
                    top: toggleButtons[i].block.position().top - code.position().top + 6 + 'px'
                });
            }
        }

        let hideNumbers = (block) => {
            for (let i = 0; i < block.range.length; i++) {
                if (!this.isset(numbers[block.range[i]].controller)) {
                    numbers[block.range[i]].css({ display: 'none' });
                    numbers[block.range[i]].controller = block;
                }
            }
        }

        let hideBlock = (block) => {
            let blockContent = block.children;
            for (let i = 0; i < blockContent.length; i++) {
                if (blockContent[i].classList.contains('kedio-data-item')) {
                    blockContent[i].css({ display: 'none' });

                    blockContent[i].findAll('.kedio-data-block').forEach(b => {
                        if (!this.isset(b.toggle.controller)) {
                            b.toggle.controller = block;
                            b.toggle.css({ display: 'none' });
                        }
                    });
                }
            }
        }

        let showNumbers = (block) => {
            for (let i = 0; i < block.range.length; i++) {
                if (numbers[block.range[i]].controller == block) {
                    numbers[block.range[i]].cssRemove(['display']);
                    delete numbers[block.range[i]].controller;
                }
            }
        }

        let showBlock = (block) => {
            let blockContent = block.children;
            for (let i = 0; i < blockContent.length; i++) {
                if (blockContent[i].classList.contains('kedio-data-item')) {
                    blockContent[i].cssRemove(['display']);

                    blockContent[i].findAll('.kedio-data-block').forEach(b => {
                        if (b.toggle.controller == block) {
                            delete b.toggle.controller;
                            b.toggle.cssRemove(['display']);
                        }
                    });
                }
            }
        }

        lineNumbers.push(undefined)

        displayed.onAdded(event => {
            setNumbers();
            setToggles();

            numbers = lines.findAll('.kedio-data-line-number');
            toggleButtons = toggles.findAll('.kedio-data-toggles-button');

            let blockContent, start, end;
            displayed.addEventListener('click', event => {
                let target = event.target;
                if (target.classList.contains('kedio-data-toggles-button')) {//if toggled
                    if (!this.isset(target.block.range)) {
                        setRange(target.block);
                    }

                    if (target.classList.contains('fa-arrow-down')) {//if toggle to show
                        hideNumbers(target.block);
                        hideBlock(target.block);
                    }
                    else {
                        showNumbers(target.block);
                        showBlock(target.block);
                    }

                    target.classList.toggle('fa-arrow-up');
                    target.classList.toggle('fa-arrow-down');
                    alignToggles();
                }
            });
        });

        return displayed;
    }
}

module.exports = Components;
},{"./Template":11}],6:[function(require,module,exports){
class Func {

    constructor() {
        this.capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.smalls = "abcdefghijklmnopqrstuvwxyz";
        this.digits = "1234567890";
        this.symbols = ",./?'!@#$%^&*()-_+=`~\\| ";
        this.months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.genders = ['Male', 'Female', 'Do not disclose'];
        this.maritals = ['Married', 'Single', 'Divorced', 'Widowed'];
        this.religions = ['Christainity', 'Islam', 'Judaism', 'Paganism', 'Budism'];
        this.userTypes = ['student', 'staff', 'admin', 'ceo'];
        this.staffRequests = ['leave', 'allowance'];
        this.studentsRequests = ['absence', 'academic'];
        this.subjectList = ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'Agriculture', 'Literature', 'History'].sort();
        this.subjectLevels = ['General', 'Senior', 'Science', 'Arts', 'Junior'];
        this.fontStyles = ['Arial', 'Times New Roman', 'Helvetica', 'Times', 'Courier New', 'Verdana', 'Courier', 'Arial Narrow', 'Candara', 'Geneva', 'Calibri', 'Optima', 'Cambria', 'Garamond', 'Perpetua', 'Monaco', 'Didot', 'Brush Script MT', 'Lucida Bright', 'Copperplate', 'Serif', 'San-Serif', 'Georgia', 'Segoe UI'];
        this.pixelSizes = ['0px', '1px', '2px', '3px', '4px', '5px', '6px', '7px', '8px', '9px', '10px', '20px', '30px', '40px', '50px', '60px', '70px', '80px', '90px', '100px', 'None', 'Unset', 'auto', '-webkit-fill-available'];
        this.colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Purple', 'Violet', 'Indigo', 'Orange', 'Transparent', 'None', 'Unset'];
        this.boldness = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 'lighter', 'bold', 'bolder', 'normal', 'unset'];
        this.borderTypes = ['Solid', 'Dotted', 'Double', 'Groove', 'Dashed', 'Inset', 'None', 'Unset', 'Outset', 'Rigged', 'Inherit', 'Initial'];
        this.shadows = ['2px 2px 5px 2px red', '2px 2px 5px green', '2px 2px yellow', '2px black', 'None', 'Unset'];
        this.borders = ['1px solid black', '2px dotted green', '3px dashed yellow', '1px double red', 'None', 'Unset'];
        this.alignment = ['Left', 'Justified', 'Right', 'Center'];
    }

    extractSource(source) {
        let value = this.inBetween(source, '$#&{', '}&#$');
        try {
            value = JSON.parse(value);
        } catch (error) {
            value = {};
        }
        return value;
    }

    indexAt(haystack = '', needle = '', pos = 0) {
        pos = pos || 0;
        if (haystack.indexOf(needle) == -1) {
            return -1;
        }

        haystack = haystack.split(needle);
        if (pos >= haystack.length) {
            return -1;
        }

        let index = 0;
        for (let i = 0; i < haystack.length; i++) {
            if (i <= pos) {
                index += haystack[i].length;
            }
        }
        index += needle.length * pos;

        return index;
    }

    combine(haystack = '', first = '', second = '', pos = 0) {
        pos = pos || 0;//initialize position if not set
        let at1 = pos,
            at2 = first === second ? pos + 1 : pos; //check if it is the same and change position
        let start = this.indexAt(haystack, first, at1);//get the start
        let end = this.indexAt(haystack, second, at2);//get the end

        if (start == -1 || start + first.length >= haystack.length || end == -1) {//null if one is not found
            return -1;
        }

        return haystack.slice(start, end + second.length);
    }

    allCombine(haystack = '', first = '', second = '') {
        let pos = 0;
        let all = [];
        let found;
        while (found != -1) {
            found = this.combine(haystack, first, second, pos);
            pos++;
            if (found != -1) {
                all.push(found);
            }
        }

        return all;
    }

    inBetween(haystack = '', first = '', second = '', pos = 0) {
        pos = pos || 0;//initialize position if not set
        let at1 = pos,
            at2 = first === second ? pos + 1 : pos; //check if it is the same and change position
        let start = this.indexAt(haystack, first, at1);//get the start
        let end = this.indexAt(haystack, second, at2);//get the end

        if (start == -1 || start + first.length >= haystack.length || end == -1) {//-1 if one is not found or inbetween
            return -1;
        }

        return haystack.slice(start + first.length, end);
    }

    allInBetween(haystack = '', first = '', second = '') {
        let pos = 0;
        let all = [];
        let found;
        while (found != -1) {
            found = this.inBetween(haystack, first, second, pos);
            pos++;
            if (found != -1) {
                all.push(found);
            }
        }

        return all;
    }

    extractCSS(element) {
        let css = element.style.cssText,
            style = {},
            key,
            value;

        if (css != '') {
            css = css.split('; ');
            let pair;
            for (let i of css) {
                pair = this.trem(i);
                key = this.jsStyleName(pair.split(':')[0]);
                value = this.stringReplace(pair.split(':').pop(), ';', '');
                if (key != '') {
                    style[key] = this.trem(value);
                }
            }
        }

        return style;
    }

    trimMonthArray() {
        let months = [];
        for (let i = 0; i < this.months.length; i++) {
            months.push(this.months[i].slice(0, 3));
        }
        return months;
    }

    jsStyleName(name = '') {
        let newName = '';
        for (let i = 0; i < name.length; i++) {
            if (name[i] == '-') {
                i++;
                newName += name[i].toUpperCase();
            }
            else newName += name[i].toLowerCase();
        }
        return newName;
    }

    cssStyleName(name = '') {
        let newName = '';
        for (let i = 0; i < name.length; i++) {
            if (this.isCapital(name[i])) newName += '-';
            newName += name[i].toLowerCase();
        }

        return newName;
    }

    textToCamelCased(text = '') {
        let value = '';
        for (let i in text) {
            if (text[i] == ' ') continue;
            else if (i == 0) value += text[i].toLowerCase();
            else if (this.isset(text[i - 1]) && text[i - 1] == ' ') value += text[i].toUpperCase();
            else value += text[i];
        }
        return value;
    }

    camelCasedToText(camelCase = '') {
        let value = '';
        for (let i in camelCase) {
            if (i != 0 && this.isCapital(camelCase[i])) value += ` ${camelCase[i].toLowerCase()}`;
            else value += camelCase[i];
        }
        return value;
    }

    emptyObject(obj) {
        return JSON.stringify(obj) == JSON.stringify({});
    }

    random(params = { limit: 1, range: 1 }) {
        let random;
        if (this.emptyObject(params)) {
            random = Math.random() * 2 - 1;
        }
        else if (this.isset(params.limit)) {
            random = Math.random() * params.limit;
        }
        else if (this.isset(params.range)) {

        }
        return random;
    }

    range(end = 1, start = 1) {
        let value = [];
        for (let i = start || 0; i < end; i++) {
            value.push(i);
        }

        return value;
    }

    generateRandom(length = 5) {
        var string = this.capitals + this.smalls + this.digits;
        var alphanumeric = '';
        for (var i = 0; i < length; i++) {
            alphanumeric += string[Math.floor(Math.random() * string.length)];
        }
        return alphanumeric;
    }

    generateRandomHex(length = 5) {
        var string = this.capitals.slice(0, 3) + this.smalls.slice(0, 3) + this.digits;
        var alphanumeric = '';
        for (var i = 0; i < length; i++) {
            alphanumeric += string[Math.floor(Math.random() * string.length)];
        }
        return alphanumeric;
    }

    generateKey(length = 5) {
        let key = Date.now().toString(length) + Math.random().toString(length).slice(2);//generate the key
        return key;
    }

    edittedUrl(params) {
        var url = this.urlSplitter(params.url);
        url.vars[params.toAdd] = params.addValue.toLowerCase();
        return this.urlMerger(url, params.toAdd);
    }

    addCommaToMoney(money = '') {
        var inverse = '';
        for (var i = money.length - 1; i >= 0; i--) {
            inverse += money[i];
        }
        money = "";
        for (var i = 0; i < inverse.length; i++) {
            let position = (i + 1) % 3;
            money += inverse[i];
            if (position == 0) {
                if (i != inverse.length - 1) {
                    money += ',';
                }
            }
        }
        inverse = '';
        for (var i = money.length - 1; i >= 0; i--) {
            inverse += money[i];
        }
        return inverse;
    }

    isCapital(value = '') {
        if (value.length == 1) {
            return this.capitals.includes(value);
        }
    }

    capitalize(value = '') {
        if (!this.isCapital(value[0])) {
            value = value.split('');
            value[0] = this.capitals[this.smalls.indexOf(value[0])];
            return this.stringReplace(value.toString(), ',', '');
        }
        return value;
    }

    flip(haystack = '') {
        return haystack.split('').reverse().join('');
    }

    isSmall(value = '') {
        if (value.length == 1) {
            return this.smalls.includes(value);
        }
    }

    isSymbol(value = '') {
        if (value.length == 1) {
            return this.symbols.includes(value);
        }
    }

    isName(value = '') {
        for (var x in value) {
            if (this.isDigit(value[x])) {
                return false;
            }
        }
        return true;
    }

    isPasswordValid(value = '') {
        var len = value.length;
        if (len > 7) {
            for (var a in value) {
                if (this.isCapital(value[a])) {
                    for (var b in value) {
                        if (this.isSmall(value[b])) {
                            for (var c in value) {
                                if (this.isDigit(value[c])) {
                                    for (var d in value) {
                                        if (this.isSymbol(value[d])) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    isSubString(haystack = '', value = '') {
        if (haystack.indexOf(value) != -1) return true;
        return false;
    }

    isDigit(value = '') {
        value = new String(value)
        if (value.length == 1) {
            return this.digits.includes(value);
        }
        return false;
    }

    isEmail(value = '') {
        var email_parts = value.split('@');
        if (email_parts.length != 2) {
            return false;
        } else {
            if (this.isSpaceString(email_parts[0])) {
                return false;
            }
            var dot_parts = email_parts[1].split('.');
            if (dot_parts.length != 2) {
                return false;
            } else {
                if (this.isSpaceString(dot_parts[0])) {
                    return false;
                }
                if (this.isSpaceString(dot_parts[1])) {
                    return false;
                }
            }
        }
        return true;
    }

    isTruthy(value) {
        let truthy;
        if (typeof value == 'boolean') {
            truthy = value;
        }
        else if (typeof value == 'string') {
            truthy = (value.toLocaleLowerCase() == 'true' || value.toLocaleLowerCase() == '1');
        }
        else if (typeof value == 'number') {
            truthy = (value == 1);
        }
        return truthy;
    }

    isFalsy(value) {
        let falsy;
        if (typeof value == 'boolean') {
            falsy = value;
        }
        else if (typeof value == 'string') {
            falsy = (value.toLocaleLowerCase() == 'false' || value.toLocaleLowerCase() == '0');
        }
        else if (typeof value == 'number') {
            falsy = (value == 0);
        }
        return falsy;
    }

    objectLength(object = {}) {
        return Object.keys(object).length;
    }

    isSpaceString(value = '') {
        if (value == '') {
            return true;
        } else {
            for (var x in value) {
                if (value[x] != ' ') {
                    return false;
                }
            }
        }
        return true;
    }

    hasString(haystack = '', needle = '') {
        for (var x in haystack) {
            if (needle == haystack[x]) {
                return true;
            }
        }
        return false;
    }

    trem(needle = '') {
        //remove the prepended spaces
        if (needle[0] == ' ') {
            var new_needle = '';
            for (var i = 0; i < needle.length; i++) {
                if (i != 0) {
                    new_needle += needle[i];
                }
            }
            needle = this.trem(new_needle);
        }

        //remove the appended spaces
        if (needle[needle.length - 1] == ' ') {
            var new_needle = '';
            for (var i = 0; i < needle.length; i++) {
                if (i != needle.length - 1) {
                    new_needle += needle[i];
                }
            }
            needle = this.trem(new_needle);
        }
        return needle;
    }

    stringReplace(word = '', from = '', to = '') {
        var value = '';
        for (let i = 0; i < word.length; i++) {
            if (word[i] == from) {
                value += to;
            }
            else {
                value += word[i];
            }
        }
        return value;
    }

    converToRealPath(path = '') {
        if (path[path.length - 1] != '/') {
            path += '/';
        }
        return path;
    }

    isSpacialCharacter(char = '') {
        var specialcharacters = "'\\/:?*<>|!.";
        for (var i = 0; i < specialcharacters.length; i++) {
            if (specialcharacters[i] == char) {
                return true;
            }
        }
        return false;
    }

    countChar(haystack = '', needle = '') {
        var j = 0;
        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] == needle) {
                j++;
            }
        }
        return j;
    }

    occurancesOf(haystack = '', needle = '') {
        let occurances = [];
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle) {
                occurances.push(i);
            }
        }

        return occurances;
    }

    isset(variable) {
        return (typeof variable !== 'undefined');
    }

    isnull(variable) {
        return variable == null;
    }

    notNull(variable) {
        return this.isset(variable) && !this.isnull(variable);
    }

    isArray(variable) {
        let flag = false;
        if (typeof variable == 'object') {
            flag = variable.constructor === Array;
        }
        return flag;
    }

    isObject(variable) {
        let flag = false;
        if (typeof variable == 'object') {
            flag = variable.constructor === Object;
        }
        return flag;
    }

    isString(variable) {
        let flag = false;
        if (typeof variable == 'string') {
            flag = variable.constructor === String;
        }
        return flag;
    }

    isNumber(variable) {
        let flag = false;
        if (typeof variable == 'number') {
            flag = variable.constructor === Number;
        }
        return flag;
    }

    isBool(variable) {
        let flag = false;
        if (typeof variable == 'boolean') {
            flag = variable.constructor === Boolean;
        }
        return flag;
    }

    isfunction(variable) {
        return (typeof variable === 'function');
    }

    async runParallel(functions = [], callBack = () => { }) {
        var results = {};
        for (var f in functions) {
            results[f] = await functions[f];
        }
        callBack(results);
    }

    isMobile() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    urlMerger(splitUrl = '', lastQuery = '') {
        var hostType = (this.isset(splitUrl.hostType)) ? splitUrl.hostType : 'http';
        var hostName = (this.isset(splitUrl.hostName)) ? splitUrl.hostName : '';
        var port = (this.isset(splitUrl.host)) ? splitUrl.port : '';
        var pathName = (this.isset(splitUrl.pathName)) ? splitUrl.pathName : '';
        var queries = '?';
        var keepMapping = true;
        (this.isset(splitUrl.vars)) ?
            Object.keys(splitUrl.vars).map(key => {
                if (keepMapping) queries += key + '=' + splitUrl.vars[key] + '&';
                if (key == lastQuery) keepMapping = false;
            }) : '';
        var location = hostType + '::/' + hostName + ':' + port + '/' + pathName + queries;
        location = (location.lastIndexOf('&') == location.length - 1) ? location.slice(0, location.length - 1) : location;
        location = (location.lastIndexOf('=') == location.length - 1) ? location.slice(0, location.length - 1) : location;
        return location;
    }

    urlSplitter(location = '') {
        if (this.isset(location)) {
            location = location.toString();
            let protocol = (location.indexOf('://') === -1) ? undefined : location.split('://')[0];
            let fullPath = location.split('://')[1];
            let host = fullPath.split('/')[0];
            let hostName = host.split(':')[0];
            let port = host.split(':')[1];
            let path = fullPath.slice(fullPath.indexOf('/'));
            let pathName = path.split('?')[0].split('#')[0];
            let hash = path.slice(path.indexOf('#'));
            let queries = (path.indexOf('#') > path.indexOf('?')) ? path.slice(path.indexOf('?')) : null;
            let vars = {};
            if (!this.isnull(queries)) {
                queries = queries.slice(0, queries.indexOf('#'));
                let query = queries.slice(queries.indexOf('?') + 1).split('&');
                for (let x in query) {
                    let parts = query[x].split('=');
                    if (parts[1]) {
                        vars[this.stringReplace(parts[0], '-', ' ')] = this.stringReplace(parts[1], '-', ' ');
                    } else {
                        vars[this.stringReplace(parts[0], '-', ' ')] = '';
                    }
                }
            }
            let httphost = protocol + '://' + host;
            let splitHost = host.split('.').reverse();
            let domain = `${splitHost[1]}.${splitHost[0]}`;

            return { location, protocol, fullPath, host, httphost, hostName, port, path, pathName, queries, vars, hash, domain };
        }
    }

    getUrlVars(location = '') {
        location = location.toString();
        var queries = (location.indexOf('?') === -1) ? null : location.split('?').pop(0);
        var vars = {};

        if (queries != null) {
            var query = queries.split('&');
            for (var x in query) {
                var parts = query[x].split('=');
                if (parts[1]) {
                    vars[this.stringReplace(parts[0], '-', ' ')] = this.stringReplace(parts[1], '-', ' ');
                } else {
                    vars[this.stringReplace(parts[0], '-', ' ')] = '';
                }
            }
        }
        return vars;
    }

    varSize(value) {
        let objectList = [];

        let recurse = (object) => {
            let bytes = 0;
            if (typeof object == 'string') {
                bytes += object.length * 2;
            }
            else if (typeof object == 'number') {
                bytes += 8;
            }
            else if (typeof object == 'boolean') {
                bytes += 4;
            }
            else if (typeof object == 'object' && objectList.indexOf(object) == -1) {
                objectList.push(object);

                for (let i in object) {
                    bytes += recurse(i);
                    bytes += recurse(object[i]);
                }
            }

            return bytes;
        }

        return recurse(value);
    }
}

module.exports = Func;
},{}],7:[function(require,module,exports){
const Period = require('./Period');
class Empty {
}

class JSElements extends Period {
    constructor(theWindow = Empty) {
        super();
        this.Element = theWindow.Element;
        this.document = theWindow.document;
    }

    loadCss(href = '') {
        let element = this.createElement({ element: 'link', attributes: { rel: 'stylesheet', type: 'text/css', href } });
        if (this.document !== undefined) {
            if (this.document['head'] !== undefined) {
                this.document['head'].append(element);
            }
        }
    }

    jsonForm(form) {
        let json = {};
        let perform = (element) => {
            let children = element.children;
            for (let i = 0; i < children.length; i++) {
                perform(children[i]);
            }
            if (element.hasAttribute('name')) {
                if (element.type == 'file') {
                    if (element.hasAttribute('multiple')) {
                        json[element.getAttribute('name')] = element.files;
                    }
                    else {
                        json[element.getAttribute('name')] = element.files[0];
                    }
                }
                else {
                    json[element.getAttribute('name')] = element.value;
                }
            }
        }

        perform(form);
        return json;
    }

    jsonElement(_element_) {
        let element = _element_.nodeName.toLowerCase();
        let attributes = _element_.getAttributes();
        attributes.style = _element_.css();
        let children = [];
        for (let i = 0; i < _element_.children.length; i++) {
            children.push(_element_.children[i].toJson());
        }
        return { element, attributes, children }
    }

    isElement(object) {
        return object instanceof this.Element;
    }

    createFromObject(object = {}, singleParent) {
        let created, name;

        if (this.isElement(object)) {
            created = object;
            name = created.nodeName;
        }
        else if (this.isElement(object.element)) {
            created = object.element;
            name = created.nodeName;
        }
        else {
            name = object.element.toLowerCase();
            created = document.createElement(object.element);//generate the element
        }


        if (this.isset(object.attributes) && !this.isElement(object)) {//set the attributes
            for (var attr in object.attributes) {
                if (attr == 'style') {//set the styles
                    created.css(object.attributes[attr]);
                }
                else created.setAttribute(attr, object.attributes[attr]);
            }
        }

        if (this.isset(object.text)) {
            created.textContent = object.text;//set the innerText
        }

        if (this.isset(object.html)) {
            created.innerHTML = object.html;//set the innerHTML
        }

        if (this.isset(object.value)) {
            created.value = object.value;//set the value
        }

        if (name.includes('-')) {
            created = this.createFromHTML(created.outerHTML);
        }

        if (this.isset(singleParent)) {
            singleParent.attachElement(created, object.attachment);
        }

        if (this.isset(object.children)) {
            created.makeElement(object.children);
        }

        if (this.isset(object.options) && Array.isArray(object.options)) {//add options if isset           
            for (var i of object.options) {
                let option = created.makeElement({ element: 'option', value: i, text: i, attachment: 'append' });
                if (this.isset(object.selected) && object.selected == i) {
                    option.setAttribute('selected', true);
                }
                if (i.toString().toLowerCase() == 'null') {
                    option.setAttribute('disabled', true);
                }
            }
        }

        if (this.isset(created.dataset.icon)) {
            created.addClasses(created.dataset.icon);
        }

        return created;
    }

    createFromHTML(htmlString = '', singleParent) {
        let parser = new DOMParser();
        let html = parser.parseFromString(htmlString, 'text/html');

        let created = html.body.firstChild;

        if (htmlString.indexOf('html') == 1) {
            created = html;
        }
        else if (htmlString.indexOf('body') == 1) {
            created = html.body;
        }

        if (this.isset(singleParent)) singleParent.attachElement(created, singleParent.attachment);
        return created;
    }

    createPerceptorElement(object, singleParent) {
        let created = this[object.perceptorElement](object.params);
        if (this.isset(singleParent)) {
            singleParent.attachElement(created, object.attachment);
        }
        return created;
    }

    getElement(singleParam = { element: '', attributes: {} }, singleParent) {
        var element;
        //if params is a HTML String
        if (typeof singleParam == 'string') {
            element = this.createFromHTML(singleParam, singleParent);
        }
        else if (this.isElement(singleParam)) {
            element = singleParam;
            if (this.isset(singleParent)) singleParent.attachElement(element, singleParam.attachment);
        }
        //if params is object
        else if (singleParam.constructor == Object) {
            if (singleParam.perceptorElement) {
                element = this.createPerceptorElement(singleParam, singleParent);
            }
            else {
                element = this.createFromObject(singleParam, singleParent);
            }
        }

        if (this.isset(element.setKey) && !this.isset(element.dataset.domKey)) {
            element.setKey();
        }

        if (this.isset(singleParam.list)) {
            let list = element.makeElement({ element: 'datalist', options: singleParam.list });
            element.setAttribute('list', element.dataset.domKey);
            list.setAttribute('id', element.dataset.domKey);
        }

        if (this.isset(singleParam.state)) {
            let owner = element.getParents(singleParam.state.owner, singleParam.state.value);
            if (!this.isnull(owner)) {
                owner.addState({ name: singleParam.state.name, state: element });
                element.dataset.stateStatus = 'set';
            } else {
                element.dataset.stateStatus = 'pending';
            }
        }

        return element;
    };

    createElement(params = { element: '', attributes: {} }, parent) {
        if (Array.isArray(params)) {
            let elements = [];
            for (let param of params) {
                elements.push(this.getElement(param, parent));
            }
            return elements;
        } else {
            let element = this.getElement(params, parent);
            return element;
        }
    }

    validateFormTextarea(element) {
        if (element.value == '') {
            return false;
        }
        return true;
    }

    validateFormInput(element) {
        var type = element.getAttribute('type');
        var value = element.value;

        if (this.isnull(type)) {
            return !this.isSpaceString(value);
        }

        type = type.toLowerCase();
        if (type == 'file') {
            return value != '';
        }
        else if (type == 'text') {
            return !this.isSpaceString(value);
        }
        else if (type == 'date') {
            if (this.hasString(element.className, 'future')) {
                return this.isDate(value);
            } else {
                return this.isDateValid(value);
            }
        }
        else if (type == 'email') {
            return this.isEmail(value);
        }
        else if (type == 'number') {
            return this.isNumber(value);
        }
        else if (type == 'password') {
            return this.isPasswordValid(value);
        }
        else {
            return !this.isSpaceString(value);
        }
    }

    validateFormSelect(element) {
        if (element.value == 0 || element.value.toLowerCase() == 'null') {
            return false;
        }

        return true;
    }

    validateForm(form, options) {
        options = options || {};
        options.nodeNames = options.nodeNames || 'INPUT, SELECT, TEXTAREA';
        let flag = true,
            nodeName,
            elementName,
            elements = form.findAll(options.nodeNames);

        let validateMe = me => {
            let value;
            if (nodeName == 'INPUT') {
                value = this.validateFormInput(me);
            }
            else if (nodeName == 'SELECT') {
                value = this.validateFormSelect(me);
            }
            else if (nodeName == 'TEXTAREA') {
                value = this.validateFormTextarea(me);
            }
            else {
                value = this.validateOtherElements(me);
            }

            return value;
        }

        for (let i = 0; i < elements.length; i++) {
            nodeName = elements[i].nodeName;
            elementName = elements[i].getAttribute('name');

            if (elements[i].getAttribute('ignore') == 'true') {
                continue;
            }

            if (this.isset(options.names)) {
                if (options.names.includes(elementName)) {
                    flag = validateMe(elements[i]);
                }
                else {
                    continue;
                }
            }
            else {
                flag = validateMe(elements[i]);
            }

            if (!flag) {
                break;
            }
        }

        return { flag, elementName };
    }

    validateOtherElements(element) {
        let value = false;
        if (this.isset(element.value) && element.value != '') value = true;
        return value;
    }

    ValidateFormImages(form) {
        return (type == 'file' && !self.isImageValid(value));
    }

    isImageValid(input) {
        var ext = input.substring(input.lastIndexOf('.') + 1).toLowerCase();
        if (ext == "png" || ext == "gif" || ext == "jpeg" || ext == "jpg") {
            return true;
        } else {
            return false;
        }
    }

    imageToJson(file, callBack = () => { }) {
        let fileReader = new FileReader();
        let myfile = {};
        fileReader.onload = (event) => {
            myfile.src = event.target.result;
            callBack(myfile);
        };

        myfile.size = file.size;
        myfile.type = file.type;
        fileReader.readAsDataURL(file);
    }
}

module.exports = JSElements;
},{"./Period":10}],8:[function(require,module,exports){
const Func = require('./Func');
let func = new Func()

class Matrix {
    constructor(params = { rows: 2, cols: 2, contents: [] }) {
        Object.keys(params).map(key => {
            this[key] = params[key];
        });

        this.rows = this.rows || 2;
        this.cols = this.cols || 2;
        this.contents = this.contents || [];
        this.setData(this.contents);
    }

    setData(contents = []) {
        this.contents = contents;
        this.data = [];
        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.rows; j++) {
                this.data[i][j] = contents.shift();
            }
        }
    }

    get structure() {
        let { rows, cols } = this;
        return { rows, cols };
    }

    add(n = 0) {
        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n.data[i][j];
                }
            }
        } else if (n instanceof Array) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n[i][j];
                }
            }
        }
        else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n;
                }
            }
        }
    }

    subtract(n = 0) {
        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] -= n.data[i][j];
                }
            }
        } else if (n instanceof Array) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] -= n[i][j];
                }
            }
        }
        else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] -= n;
                }
            }
        }
    }

    multiply(n = 1) {
        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < n.cols; j++) {
                    this.data[i][j] *= n.data[i][j];
                }
            }
        } else if (n instanceof Array) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] *= n[i][j];
                }
            }
        }
        else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] *= n;
                }
            }
        }
    }

    randomize() {
        this.map(value => {
            return func.random();
        });
    }

    transpose() {
        let newMatrix = new Matrix({ rows: this.cols, cols: this.rows });
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                newMatrix.data[j][i] = this.data[i][j];
            }
        }
        Object.keys(newMatrix).map(key => {
            this[key] = newMatrix[key];
        });
    }

    map(callback = (value, ...pos) => { }) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let value = this.data[i][j];
                this.data[i][j] = callback(value, i, j);
            }
        }
    }

    print() {
        console.table(this.data);
    }

    say() {
        console.log(this.toArray())
    }

    toArray() {
        this.contents = []
        Matrix.map(this, value => {
            this.contents.push(value);
        });
        return this.contents;
    }

    reshape(params = { rows: 2, cols: 2 }) {
        this.toArray();
        this.rows = params.rows;
        this.cols = params.cols;
        this.setData(this.contents);
    }

    getColumns(...cols) {
        let value = [];

        for (let i in cols) {
            value.push(Array.each(this.data, row => {
                return row[cols[i]];
            }));
        }

        return value;
    }

    getRows(...rows) {
        let value = [];

        for (let r = 0; r < this.rows; r++) {
            if (rows.includes(r)) {
                value.push(this.data[r]);
            }
        }

        return value;
    }

    static toArray(matrix) {
        let array = []
        Matrix.map(matrix, value => {
            array.push(value);
        });
        return array;
    }

    static subtract(a = new Matrix(), b) {
        let contents = [], rows = a.rows, cols = a.cols;

        if (b instanceof Matrix) {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    contents.push(a.data[i][j] - b.data[i][j]);
                }
            }
        }
        else if (b instanceof Array) {
            for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < a.cols; j++) {
                    contents.push(a.data[i][j] - b[i][j]);
                }
            }
        }
        else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    contents.push(a.data[i][j] - b);
                }
            }
        }

        return new Matrix({ rows, cols, contents });
    }

    static add(a = new Matrix(), b) {
        let contents = [], rows = a.rows, cols = a.cols;

        if (b instanceof Matrix) {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    contents.push(a.data[i][j] + b.data[i][j]);
                }
            }
        }
        else if (b instanceof Array) {
            for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < a.cols; j++) {
                    contents.push(a.data[i][j] + b[i][j]);
                }
            }
        }
        else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    contents.push(a.data[i][j] + b);
                }
            }
        }

        return new Matrix({ rows, cols, contents });
    }

    static multiply(a = new Matrix(), b) {
        let contents = [], rows, cols;

        if (b instanceof Matrix) {

            if (a.cols !== b.rows) {
                console.log('Columns of A must equal rows of B');
                return;
            }

            rows = a.rows;
            cols = b.cols;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    let sum = 0;
                    for (let k = 0; k < a.cols; k++) {
                        sum += a.data[i][k] * b.data[k][j];
                    }
                    contents.push(sum);
                }
            }
        }
        else if (b instanceof Array) {

            rows = a.rows;
            cols = a.cols;

            for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < a.cols; j++) {
                    contents.push(a.data[i][j] * b[i][j]);
                }
            }
        }
        else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    contents.push(a.data[i][j] * b);
                }
            }
        }

        return new Matrix({ rows, cols, contents });
    }

    static divide(a = new Matrix(), b) {
        let contents = [], rows, cols;

        if (b instanceof Matrix) {

            if (a.cols !== b.rows) {
                console.log('Columns of A must equal rows of B');
                return;
            }

            rows = a.rows;
            cols = b.cols;

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    let sum = 0;
                    for (let k = 0; k < a.cols; k++) {
                        sum += (a.data[i][k] / b.data[k][j]) || 0;
                    }
                    contents.push(sum);
                }
            }
        }
        else if (b instanceof Array) {

            rows = a.rows;
            cols = a.cols;

            for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < a.cols; j++) {
                    contents.push((a.data[i][j] / b[i][j]) || 0);
                }
            }
        }
        else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    contents.push((a.data[i][j] / b) || 0);
                }
            }
        }

        return new Matrix({ rows, cols, contents });
    }

    static randomize(matrix = new Matrix()) {
        return Matrix.map(matrix, (value => {
            return func.random();
        }));
    }

    static transpose(matrix = new Matrix()) {
        let newMatrix = new Matrix({ rows: matrix.cols, cols: matrix.rows });
        for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.cols; j++) {
                newMatrix.data[j][i] = matrix.data[i][j];
            }
        }
        return newMatrix;
    }

    static map(matrix = new Matrix(), callback = () => { }) {
        let newMatrix = new Matrix({ rows: matrix.rows, cols: matrix.cols });
        for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.cols; j++) {
                let value = matrix.data[i][j];
                newMatrix.data[i][j] = callback(value, i, j);
            }
        }
        return newMatrix;
    }

    static fromArray(contents = []) {
        return new Matrix({ rows: contents.length, cols: 1, contents });
    }

    static reshape(params = { rows: 2, cols: 2, matrix: new Matrix }) {
        params.contents = Matrix.toArray(params.matrix);
        delete params.matrix;
        return new Matrix(params);
    }

    static normalize(matrix = new Matrix()) {
        let contents = Math.normalize(Matrix.toArray(matrix));
        return new Matrix({ rows: matrix.rows, cols: matrix.cols, contents });
    }

    static diagonal(array = []) {
        let matrix = Matrix.square(array.length);
        for (let i in matrix.data) {
            for (let j in matrix.data[i]) {
                if (i == j) {
                    matrix.data[i][j] = array[i];
                }
            }
        }
        matrix.toArray();
        return matrix;
    }

    static unit(size = 2) {
        let matrix = Matrix.square(size);
        for (let i in matrix.data) {
            for (let j in matrix.data[i]) {
                if (i == j) {
                    matrix.data[i][j] = 1;
                }
            }
        }
        matrix.toArray();
        return matrix;
    }

    static square(size = 2) {
        return new Matrix({ rows: size, cols: size });
    }

    static fromMatrixCols(matrix = new Matrix(), ...cols) {
        let value = matrix.getColumns(...cols);
        let contents = Array.flatten(value);
        let newMatrix = new Matrix({ rows: value.length, cols: matrix.cols, contents });
        newMatrix.transpose();
        return newMatrix;
    }

    static deepMatrix(dimensions = [], contents = []) {
        //split the dimensions into an array of arrays of length 2
        let matrixDimensions = [];
        for (let i = 0; i < dimensions.length; i++) {
            matrixDimensions.push({ rows: dimensions[i], cols: dimensions[++i] || 1 });
        }

        let makeMatrix = (layer) => {
            let matrix = new Matrix(matrixDimensions[layer]);

            if (layer + 1 == matrixDimensions.length) {
                matrix.map(value => {
                    return contents.shift() || 0;
                });
            } else {
                matrix.map(value => {
                    return makeMatrix(layer + 1);
                });
            }
            return matrix;
        }

        return makeMatrix(0);
    }
}

module.exports = Matrix;
},{"./Func":6}],9:[function(require,module,exports){
const Func = require('./Func');
const Matrix = require('./Matrix');
const ArrayLibrary = require('./../functions/ArrayLibrary');

let func = new Func();
let arrayLibrary = new ArrayLibrary();

class NeuralNetwork {
    constructor(params) {
        func.object.copy(params, this);
        this.ihWeights = new Matrix({ rows: this.hNodes, cols: this.iNodes });
        this.ihWeights.randomize();

        this.ihBias = new Matrix({ rows: this.hNodes, cols: 1 });
        this.ihBias.randomize();

        this.hoWeights = new Matrix({ rows: this.oNodes, cols: this.hNodes });
        this.hoWeights.randomize();

        this.hoBias = new Matrix({ rows: this.oNodes, cols: 1 });
        this.hoBias.randomize();

        this.lr = this.lr || 0.1;
    }

    feedFoward(inputArray = []) {
        let inputs = inputArray instanceof Matrix ? inputArray : this.prepareInputs(inputArray);

        let hiddens = Matrix.multiply(this.ihWeights, inputs);
        hiddens.add(this.ihBias);
        hiddens.map(sigmoid);

        let outputs = Matrix.multiply(this.hoWeights, hiddens);
        outputs.add(this.hoBias);
        outputs.map(sigmoid);

        return { inputs, hiddens, outputs };
    }

    queryBack(targetArray = []) {

    }

    predict(inputArray = []) {
        return this.feedFoward(inputArray).outputs;
    }

    getWeightsUpdate(inputs = new Matrix(), outputs = new Matrix(), errors = 1) {
        let gradients = Matrix.map(outputs, dSigmoid);
        gradients.multiply(errors);
        gradients.multiply(this.lr);

        let inputsTransposed = Matrix.transpose(inputs);
        let change = Matrix.multiply(gradients, inputsTransposed);

        return { change, gradients };
    }

    backpropagate(inputs = [], targets = new Matrix()) {
        let { hiddens, outputs } = this.feedFoward(inputs);

        let hoErrors = Matrix.subtract(targets, outputs);
        let hoUpdates = this.getWeightsUpdate(hiddens, outputs, hoErrors);
        this.hoWeights.add(hoUpdates.change);
        this.hoBias.add(hoUpdates.gradients);

        let hoWeightsTransposed = Matrix.transpose(this.hoWeights);
        let ihErrors = Matrix.multiply(hoWeightsTransposed, hoErrors);
        let ihUpdates = this.getWeightsUpdate(inputs, hiddens, ihErrors);
        this.ihWeights.add(ihUpdates.change);
        this.ihBias.add(ihUpdates.gradients);
    }

    train(params = { trainingData: [], period: 1, epoch: 1 }) {
        let inputArray = [], targetArray = [];
        for (let data of params.trainingData) {
            inputArray.push(data.inputs);
            targetArray.push(data.targets);
        }

        let inputs = arrayLibrary.each(inputArray, value => {
            return this.prepareInputs(value);
        });

        let targets = arrayLibrary.each(targetArray, value => {
            return this.prepareTargets(value);
        });

        let run = () => {
            for (let i = 0; i < params.period; i++) {
                for (let j in inputs) {
                    this.backpropagate(inputs[j], targets[j]);
                }
            }
        }

        if (func.isset(params.epoch)) {
            for (let p = 0; p < params.epoch; p++) {
                run();
            }
        } else {
            run();
        }
    }

    setLearningRate(lr = 0.1) {
        this.lr = lr;
    }

    prepareInputs(inputArray = []) {
        let inputs = Matrix.fromArray(Math.normalize(inputArray));
        inputs.multiply(0.99);
        inputs.add(0.01);
        return inputs;
    }

    prepareTargets(targetArray = []) {
        let targets = Matrix.fromArray(targetArray);
        targets.add(0.01);
        targets.multiply(0.99);
        return targets;
    }
}

module.exports = NeuralNetwork;
},{"./../functions/ArrayLibrary":16,"./Func":6,"./Matrix":8}],10:[function(require,module,exports){
const Func = require('./Func');

class Period extends Func {

    constructor() {
        super();
    }

    trimMonthArray() {
        let months = [];
        for (let i = 0; i < this.months.length; i++) {
            months.push(this.months[i].slice(0, 3));
        }
        return months;
    }

    getYears(count = 5) {
        let year = new Date().getYear() + 1900;
        let fetched = [];
        for (let i = 0; i < count; i++) {
            fetched.push(`${year - 1}-${year}`);
            year++;
        }
        return fetched;
    }

    isTimeValid(time) {
        time = time.split(':');
        if (time.length == 2 || time.length == 3) {
            var hour = new Number(time[0]);
            var minutes = new Number(time[1]);
            var seconds = 0;
            var total = 0;

            if (time.length == 3) {
                seconds = new Number(time[2]);
                if (hour > 23 || hour < 0 || minutes > 59 || minutes < 0 || seconds > 59 || seconds < 0) {
                    return false;
                }
            } else {
                if (hour > 23 || hour < 0 || minutes > 59 || minutes < 0) {
                    return false;
                }
            }

            var total = (hour * 60 * 60) + (minutes * 60) + seconds;
            return total;
        }
        return false;
    }

    time(time) {
        let date = (this.isset(time)) ? new Date(Math.floor(time)) : new Date();
        let hour = date.getHours().toString();
        let minutes = date.getMinutes().toString();
        let seconds = date.getSeconds().toString();

        hour = (hour.length > 1) ? hour : `0${hour}`;
        minutes = (minutes.length > 1) ? minutes : `0${minutes}`;
        seconds = (seconds.length > 1) ? seconds : `0${seconds}`;

        return `${hour}:${minutes}:${seconds}`;
    }

    date(time) {
        let date = (this.isset(time)) ? new Date(Math.floor(time)) : new Date();
        let day = date.getDate().toString();
        let month = (date.getMonth() + 1).toString();
        let year = date.getFullYear().toString();

        day = (day.length > 1) ? day : `0${day}`;
        month = (month.length > 1) ? month : `0${month}`;

        return `${year}-${month}-${day}`;
    }

    time_date(time) {
        return `${this.time(time)}, ${this.date(time)}`;
    }

    timeToday() {
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let time = this.isTimeValid(`${hour}:${minutes}:${seconds}`);
        return time ? time : -1;
    }

    isDateValid(value) {
        if (this.isDate(value)) {
            if (this.isYearValid(value)) {
                if (this.isMonthValid(value)) {
                    if (this.isDayValid(value)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    isDayValid(value) {
        var v_day = "";
        for (var i = 0; i < 2; i++) {
            v_day += value[i + 8];
        }
        var limit = 0;
        var month = this.isMonthValid(value);

        if (month == '01') {
            limit = 31;
        } else if (month == '02') {
            if (this.isLeapYear(this.isYearValid(value))) {
                limit = 29;
            } else {
                limit = 28;
            }
        } else if (month == '03') {
            limit = 31;
        } else if (month == '04') {
            limit = 30;
        } else if (month == '05') {
            limit = 31;
        } else if (month == '06') {
            limit = 30;
        } else if (month == '07') {
            limit = 31;
        } else if (month == '08') {
            limit = 31;
        } else if (month == '09') {
            limit = 30;
        } else if (month == '10') {
            limit = 31;
        } else if (month == '11') {
            limit = 30;
        } else if (month == '12') {
            limit = 31;
        }

        if (limit < v_day) {
            return 0;
        }
        return v_day;
    }

    isDate(value) {
        var len = value.length;
        if (len == 10) {
            for (var x in value) {
                if (this.isDigit(value[x])) {
                    continue;
                } else {
                    if (x == 4 || x == 7) {
                        if (value[x] == '-') {
                            continue;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            }
        } else {
            return false;
        }
        return true;
    }

    isMonthValid(value) {
        var v_month = "";
        for (var i = 0; i < 2; i++) {
            v_month += value[i + 5];
        }
        if (v_month > 12 || v_month < 1) {
            return 0;
        }
        return v_month;
    }

    isYearValid(value) {
        var year = new Date().getFullYear('Y');
        var v_year = "";
        for (var i = 0; i < 4; i++) {
            v_year += value[i + 0];
        }
        if (v_year > year) {
            return 0;
        }
        return v_year;
    }

    getYear(value) {
        var v_year = "";
        for (var i = 0; i < 4; i++) {
            v_year += value[i + 0];
        }
        return v_year;
    }

    isLeapYear(value) {
        if (value % 4 == 0) {
            if ((value % 100 == 0) && (value % 400 != 0)) {
                return false;
            }
            return true;
        }
        return false;
    }

    daysInMonth(month, year) {
        var days = 0;
        if (month == '01') {
            days = 31;
        } else if (month == '02') {
            if (this.isLeapYear(year)) {
                days = 29;
            } else {
                days = 28;
            }
        } else if (month == '03') {
            days = 31;
        } else if (month == '04') {
            days = 30;
        } else if (month == '05') {
            days = 31;
        } else if (month == '06') {
            days = 30;
        } else if (month == '07') {
            days = 31;
        } else if (month == '08') {
            days = 31;
        } else if (month == '09') {
            days = 30;
        } else if (month == '10') {
            days = 31;
        } else if (month == '11') {
            days = 30;
        } else if (month == '12') {
            days = 31;
        }
        return days;
    }

    dateValue(date) {
        var value = 0;
        var year = this.getYear(date) * 365;
        var month = 0;
        for (var i = 1; i < this.isMonthValid(date); i++) {
            month = this.daysInMonth(i, this.getYear(date)) / 1 + month / 1;
        }
        var day = this.isDayValid(date);
        value = (year / 1) + (month / 1) + (day / 1);

        return value;
    }

    today() {
        var today = new Date;
        var month = today.getMonth() / 1 + 1;
        if (month.length != 2) {
            month = '0' + month;
        }
        today = (today.getFullYear()) + '-' + month + '-' + today.getDate();
        return today;
    }

    getDateObject(value) {
        let days = Math.floor(value / this.secondsInDays(1));

        value -= this.secondsInDays(days);

        let hours = Math.floor(value / this.secondsInHours(1));
        value -= this.secondsInHours(hours);

        let minutes = Math.floor(value / this.secondsInMinutes(1));
        value -= this.secondsInMinutes(minutes);

        let seconds = value;

        return { days, hours, minutes, seconds };
    }

    dateWithToday(date) {
        var today = Math.floor(this.dateValue(this.today()));
        let dateValue = Math.floor(this.dateValue(date));

        var value = { diff: (dateValue - today), when: '' };
        if (dateValue > today) {
            value.when = 'future';
        }
        else if (dateValue == today) {
            value.when = 'today';
        }
        else {
            value.when = 'past';
        }
        return value;
    }

    dateString(date) {
        var year = new Number(this.getYear(date));
        var month = new Number(this.isMonthValid(date));
        var day = new Number(this.isDayValid(date));

        return day + ' ' + this.months[month - 1] + ', ' + year;
    }

    secondsInDays(days) {
        let value = Math.floor(days * 24 * 60 * 60);
        return value;
    }

    secondsInHours(hours) {
        return Math.floor(hours * 60 * 60);
    }

    secondsInMinutes(minutes) {
        return Math.floor(minutes * 60);
    }

    secondsTillDate(date) {
        return this.secondsInDays(Math.floor(this.dateValue(date)));
    }

    secondsTillToday() {
        return this.secondsTillDate(this.today());
    }

    secondsTillNow() {
        return this.secondsTillDate(this.today()) + this.timeToday();
    }

    secondsTillMoment(moment) {
        return this.secondsTillDate(this.date(moment)) + this.isTimeValid(this.time(moment));
    }

    log(...data) {
        let time = `[${this.time()}]:`;
        console.log(time, ...data);
    }
}

module.exports = Period;
},{"./Func":6}],11:[function(require,module,exports){
const JSElements = require('./JSElements');

class Empty {
}

class Template extends JSElements {
    constructor(theWindow = Empty) {
        super(theWindow);
        this.virtual = {};
        this.elementLibrary(theWindow.Element);
        this.htmlCollectionLibrary(theWindow.HTMLCollection);
        this.nodeLibrary(theWindow.Node);
        this.nodeListLibrary(theWindow.NodeList);
    }

    elementLibrary(Element = Empty) {
        //Framework with jsdom
        let self = this;
        Element.prototype.changeNodeName = function (name) {
            let structure = this.toJson();
            structure.element = name;
            let element = self.createElement(structure);
            return element;
        };

        Element.prototype.toJson = function () {
            let element = this.nodeName.toLowerCase();
            let attributes = this.getAttributes();
            attributes.style = this.css();
            let children = [];
            for (let i = 0; i < this.children.length; i++) {
                children.push(this.children[i].toJson());
            }
            return { element, attributes, children }
        }

        Element.prototype.setOptions = function (options = [], params = { selected: '' }) {
            params = params || {};
            if (self.isset(params.flag)) {
                this.innerHTML = '';
            }

            for (let i = 0; i < options.length; i++) {
                let text = options[i].text || options[i];
                let value = options[i].value || options[i];

                let option = this.makeElement({ element: 'option', attributes: { value }, text });

                if (value.toString().toLowerCase() == 'null') {
                    option.setAttribute('disabled', true);
                }

                if (self.isset(params.selected) && value == params.selected) {
                    option.setAttribute('selected', true);
                }
            }
        };

        Element.prototype.commonAncestor = function (elementA, elementB) {
            for (let ancestorA of elementA.parents()) {
                for (let ancestorB of elementB.parents()) {
                    if (ancestorA == ancestorB) return ancestorA;
                }
            }

            return null;
        }

        Element.prototype.onAdded = function (callback = () => { }) {
            this.addEventListener('DOMNodeInsertedIntoDocument', event => {
                callback();
            });
        }
        //Store the states of an element here
        Element.prototype.states = {};

        //This is a temporary storage for elements attributes
        Element.prototype.temp = {};

        //This listens and handles for multiple bubbled events
        Element.prototype.manyBubbledEvents = function (events, callback = () => { }) {
            events = events.split(',');
            for (let event of events) {
                this.bubbledEvent(event.trim(), callback);
            }
        }

        //This listens and handles for multiple bubbled events that did not bubble
        Element.prototype.manyNotBubbledEvents = function (events, callback = () => { }) {
            events = events.split(',');
            for (let event of events) {
                this.notBubbledEvent(event.trim(), callback);
            }
        }

        //This handles all events that are bubbled within an element and it's children
        Element.prototype.bubbledEvent = function (event, callback = () => { }) {
            //Listen for this event on the entire document
            document.addEventListener(event, event => {
                //if the event bubbles up the element fire the callback
                if (event.target == this || this.isAncestor(event.target)) {
                    callback(event);
                }
            });
        }

        //This handles all events that are not bubbled within an element and it's children
        Element.prototype.notBubbledEvent = function (event, callback = () => { }) {
            document.addEventListener(event, event => {
                if (!(event.target == this || this.isAncestor(event.target))) {
                    callback(event);
                }
            });
        }

        //Listen to multiple events at time with a single callback function
        Element.prototype.addMultipleEventListener = function (events, callback = () => { }) {
            events = events.split(',');
            for (let event of events) {
                this.addEventListener(event.trim(), e => {
                    callback(e);
                });
            }
        }

        //perform actions on mouseenter and mouseleave
        Element.prototype.hover = function (movein = () => { }, moveout = () => { }) {
            this.addEventListener('mouseenter', event => {
                if (typeof movein === 'function')
                    movein(event);
            });

            this.addEventListener('mouseleave', event => {
                if (typeof moveout === 'function')
                    moveout(event);
            });
        }

        //a shorter name for querySelector
        Element.prototype.find = function (name = '', position = 0) {
            let element = null;
            if (self.isset(position)) {//get the all the elements found and return the one at this particular position
                this.querySelectorAll(name).forEach((e, p) => {
                    if (position == p) element = e;
                });
            }
            else {
                element = this.querySelector(name);
            }
            return element;
        };

        //a shorter name for querySelectorAll
        Element.prototype.findAll = function (name = '') {
            return this.querySelectorAll(name);
        }

        //perform an extended querySelection on this element
        Element.prototype.search = function (name = '', options = { attributes: {}, id: '', nodeName: '', class: '', classes: '' }, position = 0) {
            let element = null;
            let foundElements = [];//all the elements meeting the requirements

            if (self.isset(options)) {//if the options to check is set
                let allElements = this.querySelectorAll(name);//get all the possible elements

                //loop through them and check if the match the options
                for (let i = 0; i < allElements.length; i++) {
                    element = allElements[i];

                    //check for the attributes
                    if (self.isset(options.attributes)) {
                        for (let attr in options.attributes) {
                            // check all the attributes one after the other
                            if (element.getAttribute(attr) != options.attributes[attr]) {
                                element = null;
                                continue;
                            }
                        }
                        //if this element is no long valid skip it
                        if (self.isnull(element)) continue;
                    }

                    //check for the ID
                    if (self.isset(options.id) && options.id != element.id) {
                        element = null;
                        continue;
                    }

                    //check for the class
                    if (self.isset(options.class) && !element.classList.contains(options.class)) {
                        element = null;
                        continue;
                    }

                    //check for the classes
                    if (self.isset(options.classes) && !element.hasClasses(options.classes)) {
                        element = null;
                        continue;
                    }

                    //check for the nodename
                    if (self.isset(options.nodeName) && element.nodeName.toLowerCase() != options.nodeName) {
                        element = null;
                        continue;
                    }

                    //check if to return for a particular position
                    if (position <= 0) return element;
                    foundElements.push(element);
                }
                //get the element at the specified position
                if (foundElements.length && self.isset(foundElements[position])) {
                    element = foundElements[position];
                }
                else {
                    element = null;
                }
            }
            else {
                element = this.find(name);
            }

            return element;
        };

        //perform search for all the elements that meet a requirement
        Element.prototype.searchAll = function (name = '', options = { attributes: {}, id: '', nodeName: '', class: '', classes: '' }) {
            if (self.isset(options)) {
                let allElements = this.querySelectorAll(name);
                let elements = [];
                for (let i = 0; i < allElements.length; i++) {
                    let element = allElements[i];
                    if (self.isset(options.attributes)) {
                        for (let attr in options.attributes) {
                            if (element.getAttribute(attr) != options.attributes[attr]) {
                                element = null;
                                continue;
                            }
                        }
                    }

                    if (self.isset(options.id) && options.id != element.id) {
                        element = null;
                        continue;
                    }

                    if (self.isset(options.class) && !element.classList.contains(options.class)) {
                        element = null;
                        continue;
                    }

                    if (self.isset(options.classes) && !element.hasClasses(options.classes)) {
                        element = null;
                        continue;
                    }

                    if (self.isset(options.nodeName) && element.nodeName.toLowerCase() != options.nodeName) {
                        element = null;
                        continue;
                    }

                    if (!self.isnull(element)) {
                        elements.push(element);
                    }
                }
                return elements;
            }
            return this.querySelectorAll(name);
        }

        //look for multiple single elements at a time
        Element.prototype.fetch = function (names = [], position = 0) {
            let elements = {};
            for (let name of names) {
                elements[name] = this.find(name, position);
            }

            return elements;
        }

        //look for multiple nodelists at a time
        Element.prototype.fetchAll = function (names = []) {
            let elements = {};
            for (let name of names) {
                elements[name] = this.findAll(name);
            }

            return elements;
        }

        //Get the nodes between two child elements
        Element.prototype.nodesBetween = function (elementA, elementB) {
            let inBetweenNodes = [];
            for (let child of Array.from(this.children)) {//get all the children
                //check if the two elements are children of this element
                if (child == elementA || child == elementB || child.isAncestor(elementA) || child.isAncestor(elementB)) {
                    inBetweenNodes.push(child);
                }
            }

            return inBetweenNodes;
        }

        //Get if element is child of an element
        Element.prototype.isAncestor = function (child) {
            let parents = child.parents();//Get all the parents of child
            return parents.includes(this);
        };

        //Get all the parents of an element until document
        Element.prototype.parents = function () {
            let parents = [];
            let currentParent = this.parentNode;
            while (currentParent != null) {
                parents.push(currentParent);
                currentParent = currentParent.parentNode;
            }

            return parents;
        };

        Element.prototype.customParents = function () {
            let parents = this.parents();
            let customParents = [];
            for (let i = 0; i < parents.length; i++) {
                if (parents[i].nodeName.includes('-')) {
                    customParents.push(parents[i]);
                }
            }
            return customParents;
        }

        //Remove a state from an element
        Element.prototype.removeState = function (params = { name: '' }) {
            let state = this.getState(params);//get the state (element)
            if (self.isset(state) && self.isset(params.force)) {//if state exists and should be deleted
                if (self.isset(state.dataset.domKey)) {
                    delete self.virtual[state.dataset.domKey];//delete the element from virtual dom
                }
                state.remove();//remove the element from dom
            }
            this.removeAttribute(`data-${params.name}`);//remove the state from element
        }

        //Get an element's state 
        Element.prototype.getState = function (params = { name: '' }) {
            let state = null;
            let stateName;

            //get the state name
            if (typeof params == 'string') {
                stateName = params;
            }
            else if (self.isset(this.dataset[`${params.name}`])) {
                stateName = params.name;
            }

            if (self.isset(stateName)) {//get the state
                state = self.virtual[this.dataset[stateName]];
                // let state = self.objectToArray(this.states[stateName]).pop();
            }

            return state;
        };

        //add a state to an element
        Element.prototype.addState = function (params = { name: '' }) {
            //make sure the state has a domkey
            if (!self.isset(params.state.dataset.domKey)) {
                params.state.setKey();
            }

            //add the state to the elements dataset
            this.dataset[params.name] = params.state.dataset.domKey;
            this.states[params.name] = {}//initialize the state
            return this;
        };

        //set the state of an element
        Element.prototype.setState = function (params = { name: '', attributes: {}, render: {}, children: [], text: '', html: '', value: '', options: [] }) {
            let state = this.getState(params);

            // let found = this.states[params.name][JSON.stringify(params)];
            // if (self.isset(found)) {
            //     state.innerHTML = found.innerHTML;
            //     state.setAttributes(found.getAttributes());
            // }
            // else {
            //     state.setAttributes(params.attributes);
            //     if (self.isset(params.children)) {//add the children if set
            //         state.makeElement(params.children);
            //     }
            //     if (self.isset(params.render)) {//add the children if set
            //         state.render(params.render);
            //     }
            //     if (self.isset(params.text)) state.textContent = params.text;//set the innerText
            //     if (self.isset(params.value)) state.value = params.value;//set the value
            //     if (self.isset(params.options)) {//add options if isset
            //         for (var i of params.options) {
            //             state.makeElement({ element: 'option', value: i, text: i, attachment: 'append' });
            //         }
            //     }

            //     this.states[params.name][JSON.stringify(params)] = state.cloneNode(true);
            // }

            state.setAttributes(params.attributes);
            if (self.isset(params.children)) {//add the children if set
                state.makeElement(params.children);
            }
            if (self.isset(params.render)) {//add the children if set
                state.render(params.render);
            }
            if (self.isset(params.text)) state.textContent = params.text;//set the innerText
            if (self.isset(params.html)) state.innerHTML = params.html;//set the innerText
            if (self.isset(params.value)) state.value = params.value;//set the value
            if (self.isset(params.options)) {//add options if isset
                for (var i of params.options) {
                    state.makeElement({ element: 'option', value: i, text: i, attachment: 'append' });
                }
            }

            this.states[params.name][JSON.stringify(params)] = state.cloneNode(true);

            return state;
        };

        //async version of setstate
        Element.prototype.setKeyAsync = async function () {
            return await this.setKey();
        };

        //set element's dom key for the virtual dom
        Element.prototype.setKey = function () {
            let key = Date.now().toString(36) + Math.random().toString(36).slice(2);//generate the key
            if (!self.isset(this.dataset.domKey)) {//does this element have a key
                this.dataset.domKey = key;
            } else {
                key = this.dataset.domKey;
            }
            self.virtual[key] = this;//add it to the virtual dom
            return key;
        };

        //drop down a child
        Element.prototype.dropDown = function (element) {
            let parentContent = this.cloneNode(true);
            this.innerHTML = '';
            this.append(parentContent);
            parentContent.css({ boxShadow: '1px 1px 1px 1px #aaaaaa' });
            this.css({ boxShadow: '0.5px 0.5px 0.5px 0.5px #cccccc' });

            let dropContainer = this.makeElement({
                element: 'div', attributes: { class: 'drop-down' }
            });
            dropContainer.append(element);

            this.removeDropDown = () => {
                dropContainer.remove();
                parentContent.css({ boxShadow: 'unset' });
                this.innerHTML = parentContent.innerHTML;
            }

            return this;
        };

        //stop monitoring this element for changes
        Element.prototype.stopMonitor = function () {
            if (this.observe) this.observer.disconnect();//disconnect observer
            return this;
        }

        //Check if an attribute has changed in this element
        Element.prototype.onAttributeChange = function (attribute = '', callback = () => { }) {
            this.addEventListener('attributesChanged', event => {
                if (event.detail.attributeName == attribute) {
                    callback(event);
                }
            });
        }

        // monitor this element for changes
        Element.prototype.monitor = function (config = { attributes: true, childList: true, subtree: true }) {
            this.observer = new MutationObserver((mutationList, observer) => {
                if (mutationList.length) this.dispatchEvent(new CustomEvent('mutated'));//fire mutated event for it
                for (let mutation of mutationList) {
                    if (mutation.type == 'childList') {//if the change was a child fire childlistchanged event
                        this.dispatchEvent(new CustomEvent('childListchanged', { detail: mutation }));
                    }
                    else if (mutation.type == 'attributes') {//if the change was a child fire childlistchanged event
                        this.dispatchEvent(new CustomEvent('attributesChanged', { detail: mutation }));
                    }
                    else if (mutation.type == 'characterData') {//if the change was a child fire childlistchanged event
                        this.dispatchEvent(new CustomEvent('characterDataChanged', { detail: mutation }));
                    }
                }
            });

            this.observer.observe(this, config);
            return this;
        }

        Element.prototype['checkChanges'] = function (callback = () => { }) {
            this.monitor();
            this.addEventListener('mutated', event => {
                callback(event);
            });
        };

        // check when the value of an element is changed
        Element.prototype.onChanged = function (callBack = () => { }) {
            let value = this.getAttribute('value');
            let updateMe = (event) => {
                // if element is input element
                if (event.target.nodeName == 'INPUT') {
                    if (event.target.type == 'date') {// if the type is date, check if the date is valid then update the attribute
                        if (this.isDate(this.value)) this.setAttribute('value', this.value);
                    }
                    else if (event.target.type == 'time') {// if the type is time, check if the time is valid then update the attribute
                        if (this.isTimeValid(this.value)) this.setAttribute('value', this.value);
                    }
                    else if (event.target.type == 'file') {
                        let fileName = event.target.value;
                        let file = event.target.files[0];
                        if (file.type.indexOf('image') == 0) {
                            self.imageToJson(file, callBack);
                        }
                    }
                    else {
                        this.setAttribute('value', this.value);//update the attribute
                    }
                }
                else if (event.target.nodeName == 'SELECT') {// if the element is select
                    for (let i = 0; i < event.target.options.length; i++) {//update the selected option using the selected index
                        if (i == event.target.selectedIndex) {
                            event.target.options[i].setAttribute('selected', true);
                        } else {
                            event.target.options[i].removeAttribute('selected');
                        }
                    }
                }
                else if (event.target.nodeName == 'DATA-ELEMENT') {
                    this.setAttribute('value', this.value);
                }
                else if (event.target.nodeName == 'SELECT-ELEMENT') {
                    this.setAttribute('value', this.value);
                }
                else {
                    this.value = this.textContent;
                }

                if (self.isset(callBack) && event.target.type != 'file') {
                    callBack(this.value, event);//fire the callback function
                }
            };

            // if change is caused by keyboard
            this.addEventListener('keyup', (event) => {
                updateMe(event);
            });

            // if change is caused programatically
            this.addEventListener('change', (event) => {
                updateMe(event);
            });
        };

        //render the contents of an element
        Element.prototype.render = function (params = { element: '', attributes: {} }, except) {
            if (self.isset(except)) this.removeChildren(except);//remove the contents of the element with exceptions
            else this.removeChildren();
            this.makeElement(params);//append the new contents of the element
        }

        //Get all the styles for the ID, the classes and the element
        Element.prototype.getAllCssProperties = function () {
            let styleSheets = Array.from(document.styleSheets),//get all the css styles files and rules
                cssRules,
                id = this.id,
                nodeName = this.nodeName,
                classList = Array.from(this.classList),
                properties = {},
                selectorText;

            for (var i in classList) classList[i] = `.${classList[i]}`;//turn each class to css class format [.class]

            for (var i = 0; i < styleSheets.length; i++) {//loop through all the css rules in document/app
                cssRules = styleSheets[i].cssRules;
                for (var j = 0; j < cssRules.length; j++) {
                    selectorText = cssRules[j].selectorText; //for each selector text check if element has it as a css property
                    if (selectorText == `#${id}` || selectorText == nodeName || classList.indexOf(selectorText) != -1) {
                        properties[selectorText] = {};
                        let style = cssRules[j].style;
                        for (let n in style) {
                            if (style[n] !== '') [
                                properties[selectorText][n] = style[n]
                            ]
                        }
                    }
                }
            }

            //if element has property add it to css property
            properties['style'] = this.css();
            return properties;
        }

        //Get the values of property 
        Element.prototype.getCssProperties = function (property = '') {
            let allProperties = this.getAllCssProperties();
            let properties = {};
            for (let name in allProperties) {
                properties[name] = {};
                for (let p in allProperties[name]) {
                    if (property == p) properties[name][p] = allProperties[name][p];
                }
            }

            return properties;
        }

        // Check if this element has this property
        Element.prototype.hasCssProperty = function (property = '') {
            var properties = this.getCssProperties(property); //get elements css properties
            for (var i in properties) {//loop through json object
                if (self.isset(properties[i]) && properties[i] != '') {
                    return true;// if property is found return true
                }
            }
            return false;
        }

        //Get the most relavant value for the property
        Element.prototype.cssPropertyValue = function (property = '') {
            //check for the value of a property of an element
            var properties = this.getCssProperties(property),
                id = this.id,
                classList = Array.from(this.classList);

            if (self.isset(properties['style']) && properties['style'] != '') return properties['style'];//check if style rule has the propert and return it's value
            if (self.isset(id) && self.isset(properties[`#${id}`]) && properties[`#${id}`] != '') return properties[`#${id}`];//check if element id rule has the propert and return it's value
            for (var i of classList) {//check if any class rule has the propert and return it's value
                if (self.isset(properties[`.${i}`]) && properties[`.${i}`] != '') return properties[`.${i}`];
            }
            //check if node rule has the propert and return it's value
            if (self.isset(properties[this.nodeName]) && properties[this.nodeName] != '') return properties[this.nodeName];
            return '';
        }

        // Get and Set the css values
        Element.prototype.css = function (styles = {}) {
            // set css style of element using json
            if (self.isset(styles)) {
                Object.keys(styles).map((key) => {
                    this.style[key] = styles[key];
                });
            }

            return self.extractCSS(this);
        }

        // Remove a css property
        Element.prototype.cssRemove = function (styles = []) {
            //remove a group of properties from elements style
            if (Array.isArray(styles)) {
                for (var i of styles) {
                    this.style.removeProperty(i);
                }
            }
            else {
                this.style.removeProperty(styles);
            }
            return this.css();
        }

        // Toggle a child element
        Element.prototype.toggleChild = function (child) {
            //Add child if element does not have a child else remove the child form the element
            var name, _classes, id, found = false;

            this.children.forEach(node => {
                name = node.nodeName;
                _classes = node.classList;
                id = node.id;
                if (name == child.nodeName && id == child.id && _classes.toString() == child.classList.toString()) {
                    node.remove();
                    found = true;
                }
            });
            if (!found) this.append(child);
        }

        //remove all classes except some
        Element.prototype.clearClasses = function (except = '') {
            except = except.split(',');
            for (let j in except) {
                except[j] = except[j].trim();
            }
            for (let i of this.classList) {
                if (self.isset(except) && except.includes(i)) continue;
                this.classList.remove(i);
            }
        };

        //remove classes
        Element.prototype.removeClasses = function (classes = '') {
            classes = classes.split(',');
            for (let i of classes) {
                i = i.trim();
                if (i != '') {
                    this.classList.remove(i);
                }
            }
        };

        //add classes
        Element.prototype.addClasses = function (classes = '') {
            classes = classes.split(',');
            for (let i of classes) {
                i = i.trim();
                if (i != '') {
                    this.classList.add(i);
                }
            }
        };

        //toggle classes
        Element.prototype.toggleClasses = function (classes = '') {
            classes = classes.split(',');
            for (let i of classes) {
                i = i.trim();
                if (i != '') {
                    this.classList.toggle(i);
                }
            }
        };

        // Remove a class from element classlist
        Element.prototype.removeClass = function (_class = '') {
            this.classList.remove(_class);
            return this;
        }

        // Check if element classlist contains a group of classes
        Element.prototype.hasClasses = function (classList = []) {
            for (let mClass of classList) {
                if (!this.classList.contains(mClass)) return false;
            }
            return true;
        }

        // add a class to element classlist
        Element.prototype.addClass = function (_class = '') {
            this.classList.add(_class);
            return this;
        }

        // toggle a class in element classlist
        Element.prototype.toggleClass = function (_class = '') {
            // (this.classList.contains(_class)) ? this.classList.remove(_class) : this.classList.add(_class);
            this.classList.toggle(_class);
            return this;
        }

        //Get the position of element in dom
        Element.prototype.position = function (params = {}) {
            if (self.isset(params)) {
                Object.keys(params).map(key => {
                    params[key] = (new String(params[key]).slice(params[key].length - 2) == 'px') ? params[key] : `${params[key]}px`;
                });
                this.css(params);
            }
            let position = this.getBoundingClientRect();

            return position;
        }

        //check if element is within container
        Element.prototype.inView = function (parentIdentifier = '') {
            let parent = this.getParents(parentIdentifier);
            let top = this.position().top;
            let flag = false;

            if (!self.isnull(parent)) {
                flag = top >= 0 && top <= parent.clientHeight;
            }
            return flag;
        }

        //Check if a class exists in element's classlist
        Element.prototype.hasClass = function (_class = '') {
            return this.classList.contains(_class);
        }

        // Set a list of properties for an element
        Element.prototype.setProperties = function (properties = {}) {
            for (let i in properties) {
                this[i] = properties[i];
            }
        };

        // Set a list of attributes for an element
        Element.prototype.setAttributes = function (attributes = {}) {
            for (let i in attributes) {
                if (i == 'style') {
                    this.css(attributes[i]);
                }
                else {
                    this.setAttribute(i, attributes[i]);
                }
            }
        };

        // Get the values of a list of attributes
        Element.prototype.getAttributes = function (names = []) {
            if (names.length == 0) names = this.getAttributeNames();
            let attributes = {};

            for (let name of names) {
                attributes[name] = this.getAttribute(name);
            }
            return attributes;
        }

        //Create and attatch an element in an element
        Element.prototype.makeElement = function (params = { element: '', attributes: {} }) {
            this.setKeyAsync();

            let element = self.createElement(params, this);
            return element;
        }

        // Get an elements ancestor with a specific attribute
        Element.prototype.getParents = function (name = '', value = '') {
            var attribute = name.slice(0, 1);
            var parent = this.parentNode;
            if (attribute == '.') {
                while (parent) {
                    if (self.isset(parent.classList) && parent.classList.contains(name.slice(1))) {
                        break;
                    }
                    parent = parent.parentNode;
                }
            }
            else if (attribute == '#') {
                while (parent) {
                    if (self.isset(parent.id) && parent.id == name.slice(1)) {
                        break;
                    }
                    parent = parent.parentNode;
                }
            }
            else {
                while (parent) {
                    if (self.isset(parent.nodeName) && parent.nodeName.toLowerCase() == name.toLowerCase()) {
                        break;
                    }
                    else if (self.isset(parent.hasAttribute) && parent.hasAttribute(name)) {
                        if (self.isset(value) && parent.getAttribute(name) == value) {
                            break;
                        }
                        else break;
                    }
                    parent = parent.parentNode;
                }
            }
            return parent;
        }

        // Toggle the display of an element
        Element.prototype.toggle = function () {
            if (this.style.display == 'none' || this.style.visibility == 'hidden') this.show();
            else this.hide();
        }

        //Hide an element in dom
        Element.prototype.hide = function () {
            // if (self.isset(this.style.display)) this.temp.display = this.style.display;
            // if (self.isset(this.style.visibility)) this.temp.visibility = this.style.visibility;

            this.style.display = 'none';
            // this.style.visibility = 'hidden';
            return this;
        }

        //Show an element in dom
        Element.prototype.show = function () {
            // if (this.style.display == 'none') {
            //     // if (self.isset(this.temp.display)) {
            //     //     this.css({ display: this.temp.display });
            //     // }
            //     // else this.cssRemove(['display']);
            // }
            this.cssRemove(['display']);
            return this;
        }

        //Remove all the children of an element with exceptions of some
        Element.prototype.removeChildren = function (params = { except: [] }) {
            let exceptions = [];
            params = params || {};
            params.except = params.except || [];
            let except = params.except;
            for (let i = 0; i < except.length; i++) {
                let all = this.findAll(except[i]);
                for (let j = 0; j < all.length; j++) {
                    if (!exceptions.includes(all[j])) exceptions.push(all[j]);
                }
            }

            this.children.forEach(node => {
                if (!exceptions.includes(node)) node.remove();
            });

            return this;
        }

        //Delete an element from the dom and virtual dom
        Element.prototype.delete = function () {
            if (self.isset(this.dataset.domKey)) {
                delete self.virtual[this.dataset.domKey];
            }
            this.remove();
        }

        //Delete an elements child from the dom and the virtual dom
        Element.prototype.deleteChild = function (child) {
            child.delete();
            return this;
        }

        // Toggle a list of children of an element
        Element.prototype.toggleChildren = function (params = { name: '', class: '', id: '' }) {
            Array.from(this.children).forEach(node => {
                if (!((self.isset(params.name) && params.name == node.nodeName) || self.isset(params.class) && self.hasArrayElement(Array.from(node.classList), params.class.split(' ')) || (self.isset(params.id) && params.id == node.id))) {
                    node.toggle();

                } else {
                    node.toggle();
                }
            });
        }

        // Attatch an element to another element [append or prepend]
        Element.prototype.attachElement = function (element, attachment = 'append') {
            this[attachment](element);
        }

        Element.prototype.pressed = function (callback = () => { }) {
            let startTime = 0, endTime = 0;
            this.addMultipleEventListener('mousedown, touchstart', event => {
                startTime = event.timeStamp;
            });

            this.addMultipleEventListener('mouseup, touchend', event => {
                endTime = event.timeStamp;
                event.duration = endTime - startTime;

                callback(event);
            });
        }
    }

    htmlCollectionLibrary(HTMLCollection = Empty) {
        let self = this;

        HTMLCollection.prototype.popIndex = function (position = 0) {
            let collection = self.createElement({ element: 'sample' }).children;

            let list = Array.from(this);

            for (let i = 0; i < list.length; i++) {
                if (i == position) continue;
                collection[i] = this.item(i);
            }

            return collection;
        }

        HTMLCollection.prototype.forEach = function (callback = () => { }) {
            let list = Array.from(this);
            for (let i = 0; i < list.length; i++) {
                callback(list[i], i)
            }
        };

        HTMLCollection.prototype.each = function (callback = () => { }) {
            let list = Array.from(this);
            for (let i = 0; i < list.length; i++) {
                callback(list[i], i)
            }
        }


        HTMLCollection.prototype['indexOf'] = function (element) {
            let list = Array.from(this);
            for (let i in list) {
                if (list == element) return i;
            }
            return -1;
        };

        HTMLCollection.prototype['includes'] = function (element) {
            return this.indexOf(element) != -1;
        };

        HTMLCollection.prototype['nodesBetween'] = function (elementA, elementB) {
            let inBetweenNodes = [];
            let list = Array.from(this);

            for (let aParent of list) {
                if (aParent == elementA || aParent == elementB || aParent.isAncestor(elementA) || aParent.isAncestor(elementB)) {
                    inBetweenNodes.push(aParent);
                }
            }

            return inBetweenNodes;
        };
    }

    nodeLibrary(Node = Empty) {
        let self = this;

        Node.prototype.states = {};
    }

    nodeListLibrary(NodeList = Empty) {
        let self = this;

        NodeList.prototype['each'] = function (callback = () => { }) {
            for (let i = 0; i < this.length; i++) {
                callback(this[i], i)
            }
        }

        NodeList.prototype['indexOf'] = function (element) {
            for (let i in this) {
                if (this[i] == element) return i;
            }
            return -1;
        };

        NodeList.prototype['includes'] = function (element) {
            return this.indexOf(element) != -1;
        };

        NodeList.prototype['nodesBetween'] = function (elementA, elementB) {
            let inBetweenNodes = [];
            for (let aParent of this) {
                if (aParent == elementA || aParent == elementB || aParent.isAncestor(elementA) || aParent.isAncestor(elementB)) {
                    inBetweenNodes.push(aParent);
                }
            }

            return inBetweenNodes;
        };
    }
}

module.exports = Template;
},{"./JSElements":7}],12:[function(require,module,exports){
const TreeEvent = require('./TreeEvent');

class Tree {
    #children = [];
    #parent = null;
    #root = null;
    #attributes = {};
    #eventsList = [];

    get height() {
        let height = 1, branchHeights = [];
        for (let branch of this.#children) {
            if (branch instanceof Tree) {
                branchHeights.push(branch.height);
            }
        }
        if (branchHeights.length > 0) {
            height += Math.max(...branchHeights);
        }
        return height;
    }

    get length() {
        return this.#children.length;
    }

    get parentTree() {
        return this.#parent;
    }

    get rootTree() {
        return this.#root;
    }

    get values() {
        return Array.from(this.#children);
    }

    set length(size) {
        let newChildren = [];
        for (let i = 0; i < size; i++) {
            newChildren.push(this.#children[i]);
        }
        this.#children = newChildren;
    }

    constructor(items, parent, root) {
        if (Array.isArray(items)) {
            this.push(...items);
        }

        if (parent != undefined && parent.constructor == Tree) {
            this.#parent = parent;
        }

        if (root != undefined && root.constructor == Tree) {
            this.#root = root;
        }
    }

    createItems(items) {
        let root = (this.#parent != null) ? this.#root : this;
        for (let i = 0; i < items.length; i++) {
            if (Array.isArray(items[i])) {
                items[i] = new Tree(items[i], this, root);
            }
        }
        return items;
    }

    copyWithin(target, start = 0, end = 1) {
        return this.#children.copyWithin(target, start, end)
    }

    concat(tree) {
        let newTree = new Tree(this.values, this.#parent, this.#root);
        if (tree.constructor == Tree) {
            newTree.push(...tree.values);
        }
        else if (Array.isArray(tree)) {
            newTree.push(...tree);
        }
        else {
            newTree.push(tree);
        }
        return newTree;
    }

    combine(first, second, position) {//used to get what is between two items at a particular occurrance in an Array and the items combined
        position = position || 0;//initialize position if not set
        let at1 = position,
            at2 = first === second ? position + 1 : position; //check if it is the same and change position
        let start = this.indexAt(first, at1);//get the start
        let end = this.indexAt(second, at2) + 1;//get the end

        if (start == -1 || end == 0) {//null if one is not found
            return null;
        }

        return this.slice(start, end);
    }

    entries() {
        return this.values.entries();
    }

    empty() {
        this.#children.length = 0;
    }

    every(callback = (value, index) => { }) {
        if (typeof callback == 'function') {
            let values = this.values;
            for (let i in values) {
                this.#children[i] = callback(values[i], i);
            }
        }
    }

    find(callback = (value, index) => { }) {
        let value, found = false;
        if (typeof callback == 'function') {
            let values = this.values;

            for (let i in values) {
                if (callback(values[i], i)) {
                    value = this.#children[i];
                    found
                    break;
                }
            }
        }
        return value;
    }

    findLast(callback = (value, index) => { }) {
        let value;
        if (typeof callback == 'function') {
            let values = this.values.reverse();
            for (let i in values) {
                if (callback(values[i], i)) {
                    value = this.#children[i];
                    break;
                }
            }
        }
        return value;
    }

    findIndex(callback = (value, index) => { }) {
        let value;
        if (typeof callback == 'function') {
            let values = this.values;
            for (let i in values) {
                if (callback(values[i], i)) {
                    value = i;
                    break;
                }
            }
        }
        return value;
    }

    findLastIndex(callback = (value, index) => { }) {
        let value;
        if (typeof callback == 'function') {
            let values = this.values.reverse();
            for (let i in values) {
                if (callback(values[i], i)) {
                    value = i;
                    break;
                }
            }
        }
        return value;
    }

    findAll(callback = (value, index) => { }) {
        let newTree = new Tree();
        if (typeof callback == 'function') {
            let values = this.values;
            for (let i in values) {
                if (callback(values[i], i)) {
                    newTree.push(this.#children[i]);
                }
            }
        }
        return newTree;
    }

    findAllIndex(callback = (value, index) => { }) {
        let newArray = [];
        if (typeof callback == 'function') {
            let values = this.values;
            for (let i in values) {
                if (callback(values[i], i)) {
                    newArray.push(i);
                }
            }
        }
        return newArray;
    }

    forEach(callback = (value, index) => { }) {
        if (typeof callback == 'function') {
            let values = this.values;
            for (let i in values) {
                callback(values[i], i);
            }
        }
    }

    fill(item) {
        for (let i in this.#children) {
            if (this.#children[i].constructor == Tree) {
                this.#children[i].fill(item);
            }
            else {
                this.#children[i] = item;
            }
        }
    }

    filter(callback = (value, index) => { }) {
        let newTree = new Tree();
        if (typeof callback == 'function') {
            let values = this.values;
            for (let i in values) {
                if (callback(values[i], i)) {
                    newTree.push(this.#children[i])
                }
            }
        }
        return newTree;
    }

    flatMap(callback = (value, index) => { }) {
        let newTree = new Tree();
        if (typeof callback == 'function') {
            let values = this.flat();
            for (let i in values) {
                newTree.push(callback(values[i], i));
            }
        }
        return newTree;
    }

    flat() {
        let flattened = [];
        let values = this.values;
        for (let v of values) {
            if (v.constructor == Tree) {
                flattened.push(v.flat());
            }
            else {
                flattened.push(v);
            }
        }
        return flattened.flat();
    }

    flatTree() {
        return new Tree(this.flat());
    }

    getAttribute(name) {
        return this.#attributes[name];
    }

    getAttributes(attributes) {
        let found = [];
        for (let name of attributes) {
            found.push(this.#attributes[name]);
        }

        return found;
    }

    hasAttribute(name) {
        return this.#attributes != undefined;
    }

    includes(value) {
        return this.#children.includes(value);
    }

    indexOf(value) {
        return this.#children.indexOf(value);
    }

    isBranch() {
        return this.#parent != null;
    }

    inBetween(first, second, position) {//used to get what is between two items at a particular occurrance in an Array
        position = position || 0;//initialize position if not set
        let at1 = position,
            at2 = first === second ? position + 1 : position; //check if it is the same and change position

        let start = this.indexAt(first, at1) + 1;//get the start
        let end = this.indexAt(second, at2);//get the end

        if (start == 0 || end == -1) {//null if one is not found
            return null;
        }

        return this.slice(start, end);
    }

    indexAt(item, position = 0) {//used to get the index of an item at a particular occurrance
        position = position || 0;
        let count = -1;
        let values = this.values;
        for (let i = 0; i < values.length; i++) {
            if (values[i] == item) {
                count++;
                if (count == position) {
                    return i;
                }
            }
        }

        return -1;
    }

    join(at) {
        return this.toArray().join(at);
    }

    lastIndexOf(value) {
        return this.#children.lastIndexOf(value);
    }

    map(callback = (value, index) => { }) {
        let newTree = new Tree();
        if (typeof callback == 'function') {
            let values = this.values;
            for (let i in values) {
                newTree.push(callback(values[i], i));
            }
        }
        return newTree;
    }

    push(...items) {
        this.#children.push(...this.createItems(items));
    }

    pop() {
        return this.#children.pop();
    }
    
    remove(){
        this.dispatchEvent('remove');
        if(this.isBranch()){
            this.#parent.removeChild(this);
            this.dispatchEvent('removed');
        }
    }

    removeChild(child){
        let index = this.indexOf(child);
        let newChildren = [];
        for(let i in this.#children){
            if(i != index){
                newChildren.push(this.#children[i]);
            }
        }
        this.#children = newChildren;
    }

    reverse() {
        this.#children.reverse();
    }

    reduce(callback, reducer = 0) {
        return this.values.reduce(callback, reducer);
    }

    reduceRight(callback) {
        return this.values.reduceRight(callback);
    }

    removeAttribute(name) {
        delete this.#attributes[name];
    }

    removeAttributes(attributes) {
        for (let name of attributes) {
            delete this.#attributes[name];
        }
    }

    search(callback = (value, index) => { }, depth = 0) {
        let value;
        let path = [];//init path
        if (typeof callback == 'function') {
            let values = this.values;
            for (let i in values) {
                if (callback(values[i], i)) {//set path
                    value = values[i];
                    path.push(i);
                    break;
                }
            }
            if (typeof depth != 'number') depth = 0;
            if (path.length == 0 && depth > 0) {
                depth--;
                for (let i in values) {
                    if (values[i].constructor == Tree) {
                        let sub = values[i].search(callback, depth, path);
                        if (sub.path.length != 0) {
                            sub.path.unshift(i);
                            path = sub.path;
                            value = sub.value;
                            break;
                        }
                    }
                }
            }
        }
        return { path, value };
    }

    setAttribute(name, value) {
        if (typeof name == 'string') {
            this.#attributes[name] = value;
        }
    }

    setAttributes(attributes) {
        for (let name in attributes) {
            this.setAttribute(name, attributes[name]);
        }
    }

    shift() {
        return this.#children.shift();
    }

    slice(start, end) {
        let values = this.values;
        if (end == undefined) end = values.length;

        return values.slice(start, end);
    }

    sliceAsTree(start, end) {
        return new Tree(this.slice(start, end));
    }

    some(callback = (value, index) => { }) {
        if (typeof callback == 'function') {
            let values = this.flat();
            for (let i in values) {
                if (callback(values[i], i)) return true;
            }
        }
        return false;
    }

    sort(callback, depth = 0) {
        if (typeof callback !== 'function') {
            callback = (a, b) => a > b;
        }

        for (let i = 0; i < this.#children.length; i++) {
            for (let j = i + 1; j < this.#children.length; j++) {
                let temp;
                if (callback(this.#children[i], this.#children[j]) == true) {
                    temp = this.#children[i];
                    this.#children[i] = this.#children[j];
                    this.#children[j] = temp;
                }
            }
        }

        if (typeof depth != 'number') depth = 0;
        if (depth > 0) {
            depth--;
            for (let i in this.#children) {
                if (this.#children[i].constructor == Tree) {
                    this.#children[i].sort(callback, depth);
                }
            }
        }
    }

    splice(start, deleteCount, ...items) {
        if (deleteCount == undefined) deleteCount = this.#children.length - start;
        let newTree = new Tree(this.#children.splice(start, deleteCount, ...items));
        return newTree;
    }

    toArray() {
        let array = [];
        for (let item of this.#children) {
            if (item.constructor == Tree) {
                array.push(item.toArray());
            }
            else {
                array.push(item);
            }
        }

        return array;
    }

    toString() {
        return this.flat().toString();
    }

    toLocaleString() {
        return this.flat().toLocaleString();
    }

    trace(path = []) {
        path = Array.from(path);
        let i = path.shift();
        let found = false;
        let value;
        let child = this.values[i];

        if (child == undefined) {
            value = this;
            found = true;
        }
        else if (path.length == 0 && child != undefined) {
            value = child;
            found = true;
        }
        else if (child != undefined && child.constructor == Tree) {
            return child.trace(path);
        }


        return { found, value };
    }

    unshift(...items) {
        this.#children.unshift(...this.createItems(items));
    }

    dispatchEvent(name, attributes, bubble) {
        let treeEvent = new TreeEvent(name, attributes, bubble);
        if (treeEvent.bubble == true && this.isBranch()) {
            this.#parent.dispatchEvent(name, attributes, bubble);
        }

        for (let event of this.#eventsList) {
            if (event.name == name) {
                if (typeof event.callback === 'function') {
                    event.callback(treeEvent.attributes);
                }
            }
        }
    }

    addEventListener(name, callback, id) {
        this.#eventsList.push({ name, callback, id });
    }

    removeEventListener(name, callback, id) {
        let newList = [];
        for (let event of this.#eventsList) {
            if (event.name == name && event.id == id) {
                if (typeof callback === 'function') {
                    callback();
                }
            }
            else {
                newList.push(event);
            }
        }

        this.#eventsList = newList;
    }

    static isTree(tree) {
        return tree.constructor == Tree;
    }

    static from(items) {
        let newTree = new Tree(items);
        return newTree;
    }
}

module.exports = Tree;
},{"./TreeEvent":13}],13:[function(require,module,exports){
class TreeEvent {
    name = '';
    attributes = {};

    constructor(name, attributes, bubble) {
        this.name = name;
        this.setAttributes = attributes;
        this.setBubble = bubble;
        
    }

    set setBubble(bubble){
        if(typeof bubble === 'boolean'){
            this.attributes.bubble = bubble;
        }
    }

    set setAttributes(attributes) {
        if (TreeEvent.events[this.name] == undefined) {
            TreeEvent.events[this.name] = attributes;
        }
        else {
            for (let i in TreeEvent.events[this.name]) {
                this.attributes[i] = TreeEvent.events[this.name][i];
            }
        }

        if (typeof attributes == 'object') {
            for (let i in attributes) {
                this.attributes[i] = attributes[i];
            }
        }
    }

    static events = {
        click: { name: 'Click', duration: '1sec', bubble: true },
        hover: { name: 'Hover', duration: 'Infinity', bubble: true },
        remove: { name: 'Remove', bubble: false },
        created: {name: 'Created', bubble: false, duration: '0sec'}
    };
}

module.exports = TreeEvent;
},{}],14:[function(require,module,exports){
const MathsLibrary = require('./MathsLibrary');
const ObjectsLibrary = require('./ObjectsLibrary');

let mathLibrary = new MathsLibrary();
let objectLibrary = new ObjectsLibrary();

function AnalysisLibrary() {
    this.entropy = (data) => {
        let entropy = 0;//initialize entropy
        let values = Object.values(data);//get the values of the object variable
        let sum = mathLibrary.sum(values);//get the sum of the Values
        for (let value of values) {
            entropy -= value / sum * Math.log2(value / sum); //use the formular on each item
        }
        return entropy;
    }

    this.informationGain = (targetNode, variableData) => {
        let arrangeData = (list) => {//arrange the list into an object of counts
            let data = {};
            for (let item of list) {
                data[item] = data[item] || 0;
                data[item]++;
            }

            return data;
        };

        let targetData = arrangeData(targetNode);

        let targetEntropy = this.entropy(targetData);//get the entropy of the target node
        let sumOfInformation = 0;//initialize sum of information gain

        let variableValues = Object.values(variableData);//get the values of this variable
        let variableLength = 0;

        for (let i = 0; i < variableValues.length; i++) {//get the length of the variable by the adding the values
            variableLength += variableValues[i].length;
            variableValues[i] = arrangeData(variableValues[i]);
        }

        for (let v of variableValues) {//get the entropy of each and multiply by the probability
            sumOfInformation += (mathLibrary.sum(Object.values(v)) / variableLength) * this.entropy(v);
        }

        let informationGain = targetEntropy - sumOfInformation;
        return informationGain;
    }

    this.highestInformationGainNode = (data, nodes) => {
        let gainedInformation = {};

        for (let i in nodes) {
            gainedInformation[i] = this.informationGain(data, nodes[i]);
        }

        return objectLibrary.max(gainedInformation);
    }

    this.quartileRange = (data) => {

        let middle = (_dt) => {//get the middle position of a list of numbers
            let middle;
            if ((_dt.length) % 2 == 0) {//if the list count is not even
                middle = [Math.ceil(_dt.length / 2) - 1, Math.ceil(_dt.length / 2)];//get the two in the middle
            }
            else {
                middle = [Math.ceil(_dt.length / 2) - 1];
            }

            return middle;
        }

        let getMiddle = (_dt) => {// get the items in the middle of a list
            let [middle1, middle2] = middle(_dt);
            let middles = [];
            middles.push(_dt[middle1]);
            if (middle2 != undefined) middles.push(_dt[middle2]);

            return middles;
        }

        let halfs = (_dt) => {//divide a list into two equal halfs
            let [middle1, middle2] = middle(_dt);
            if (middle2 == undefined) middle2 = middle1;
            let half1 = _dt.slice(0, middle1);
            let half2 = _dt.slice(middle2 + 1);
            return [half1, half2];
        }

        let layers = halfs(data);//get the halfs of the list
        let [layer1, layer2] = halfs(layers[0]);//divide each half into halfs
        let [layer3, layer4] = halfs(layers[1]);

        let middle1 = getMiddle(layers[0]);//get the middle of the first layers
        let middle3 = getMiddle(layers[1]);

        let q1 = mathLibrary.median(middle1);//get the median of the first and last layers
        let q3 = mathLibrary.median(middle3);

        return q3 - q1;//find the range
    }

    this.normalizeData = (data) => {
        data.sort((a, b) => { return a - b });
        var max = data[data.length - 1];
        var min = data[0];
        var normalized = [];
        for (var i = 0; i < data.length; i++) {
            normalized.push((data[i] - min) / (max - min));
        }
        return normalized;
    }
}

module.exports = AnalysisLibrary;
},{"./MathsLibrary":20,"./ObjectsLibrary":21}],15:[function(require,module,exports){
const Func = require('./../classes/Func');
let func = new Func();

function AppLibrary() {
    this.makeWebapp = (callback = () => { }) => {
        document.addEventListener('click', event => {
            let anchor = event.target;
            let parentAnchor = event.target.getParents('a');
            let url = anchor.getAttribute('href');//check when a url is about to be open

            if (anchor.nodeName.toLowerCase() != 'a' && !func.isnull(parentAnchor)) {
                anchor = parentAnchor;
            }

            if (func.isnull(url) && !func.isnull(parentAnchor)) {
                anchor = parentAnchor;
            }
            //get the anchor element
            url = anchor.getAttribute('href');
            let target = anchor.getAttribute('target');

            if (target == '_blank') {//check if it is for new page
                window.open(this.prepareUrl(url));
            }
            else if (!func.isnull(url)) {
                event.preventDefault();//block and open inside as webapp
                if (this.prepareUrl(url) != location.href) window.history.pushState('page', 'title', url);
                callback();
            }
        });

        window.onpopstate = callback;
    }

    this.prepareUrl = (url = '') => {
        if (!url.includes(location.origin)) {
            let splitUrl = func.urlSplitter(url);
            if (splitUrl.location == location.origin) {
                url = location.origin + '/' + url;
            }
        }
        else if (!url.includes(location.protocol)) {
            url = location.protocol + '//' + url;
        }

        return url;
    }

    this.ajax = (params = { async: true, data: {}, url: '', method: '', secured: false }) => {
        params.async = params.async || true;
        params.data = params.data || {};
        params.url = params.url || './';
        params.method = params.method || 'POST';
        params.secured = params.secured || false;

        if (params.secured) {
            params.url = 'https://cors-anywhere.herokuapp.com/' + params.url;
        }

        let data = new FormData();
        if (params.data instanceof FormData) {
            data = params.data;
        }
        else {
            for (let i in params.data) {
                data.append(i, params.data[i]);
            }
        }

        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();

            request.onreadystatechange = function (event) {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(request.responseText);
                }
            };

            if (func.isset(params.onprogress)) {
                request.upload.onprogress = (event) => {
                    params.onprogress((event.loaded / event.total) * 50);
                }

                request.onprogress = (event) => {
                    params.onprogress((event.loaded / event.total) * 100);
                }
            }

            request.onerror = (error) => {
                reject(error);
            };

            request.open(params.method, params.url, params.async);
            request.send(data);
        });
    }
}

module.exports = AppLibrary;
},{"./../classes/Func":6}],16:[function(require,module,exports){
function ArrayLibrary() {

    this.combine = (haystack, first, second, pos) => {//used to get what is between two items at a particular occurrance in an Array and the items combined
        pos = pos || 0;//initialize position if not set
        let at1 = pos,
            at2 = first === second ? pos + 1 : pos; //check if it is the same and change position
        let start = this.indexAt(haystack, first, at1);//get the start
        let end = this.indexAt(haystack, second, at2) + 1;//get the end

        if (start == -1 || end == 0) {//null if one is not found
            return null;
        }

        return haystack.slice(start, end);
    }

    this.inBetween = (haystack, first, second, pos) => {//used to get what is between two items at a particular occurrance in an Array
        pos = pos || 0;//initialize position if not set
        let at1 = pos,
            at2 = first === second ? pos + 1 : pos; //check if it is the same and change position
        let start = this.indexAt(haystack, first, at1) + 1;//get the start
        let end = this.indexAt(haystack, second, at2);//get the end

        if (start == 0 || end == -1) {//null if one is not found
            return null;
        }

        return haystack.slice(start, end);
    }

    this.contains = (haystack, needle) => {//used to check if an Array has an item
        let flag = false;//set flag to false
        for (let i in haystack) {
            if (haystack[i] == needle) {//if found breakout
                return true;
            }
        }
        return flag;
    }

    this.indexAt = (haystack, needle, pos) => {//used to get the index of an item at a particular occurrance
        pos = pos || 0;
        let count = -1;
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] == needle) {
                count++;

                if (count == pos) {
                    return i;
                }
            }
        }

        return -1;
    }

    this.find = (haystack, callback) => {//used as a higher order function to get an items that match the conditions
        for (let i in haystack) {
            if (callback(haystack[i]) == true) {
                return haystack[i];
            }
        }
    }

    this.findAll = (haystack, callback) => {//used as a higher order function to get all the items that match the conditions
        let values = [];
        for (let i in haystack) {
            if (callback(haystack[i]) == true) {
                values.push(haystack[i]);
            }
        }

        return values;
    }

    this.getObject = (haystack, key, value) => {//used to get an Object with an Item in a JsonArray
        let object;
        for (let i in haystack) {
            if (haystack[i][key] == value) object = haystack[i];
        }
        return object;
    }

    this.getAllObjects = (haystack, key, value) => {//used to get all occurrances of an Object with an Item in a JsonArray
        let newArray = [];
        for (let i in haystack) {
            if (haystack[i][key] == value) {
                newArray.push(haystack[i]);
            }
        }
        return newArray;
    }

    this.getAll = (haystack, needle) => {//used to all occurrances of an item in an Array
        let newArray = [];
        for (let i in haystack) {
            if (haystack[i] == needle) newArray.push(i);
        }
        return newArray;
    }

    this.removeAll = (haystack, needle) => {//used to remove instances of an item
        let newArray = [];
        for (let i of haystack) {
            if (i != needle) {
                newArray.push(i);
            }
        }
        return newArray;
    }

    this.putAt = (haystack = [], value, key = 0) => {//used to push an item into an index in Array
        let newArray = [];//storage
        for (let i in haystack) {
            if (i == key) {//matched
                newArray[i] = value;//push in the value
                let next = Math.floor(key);//check if it's a number

                if (isNaN(next)) {
                    next = key + 1;
                }
                else {
                    next++;
                }
                newArray[next] = haystack[i];//add the previous value
            }
            else {
                newArray[i] = haystack[i];
            }
        }

        return newArray;
    }

    this.pushArray = (haystack = [], needle, insert) => {//used to push in an item before another existing item in an Array
        let position = this.arrayIndex(haystack, needle);//get the existing item position
        let newArray = this.putAt(haystack, insert, position);//push in new item
        return newArray;
    }

    this.arrayIndex = (haystack = [], needle = []) => {//used to get position of an item in an Array
        for (let i in haystack) {
            if (JSON.stringify(haystack[i]) == JSON.stringify(needle)) {
                return i;
            }
        }
        return -1;
    }

    this.hasArray = (haystack = [], needle = []) => {//used to check if an Array is a sub-Array to another Array
        haystack = JSON.stringify(haystack);
        needle = JSON.stringify(needle);

        return haystack.indexOf(needle) != -1;
    }

    this.toObject = (array = [], key) => {//used to turn an JsonArray to an Object literal
        let object = {};//storage
        for (let i in array) {
            object[array[i][key]] = array[i];//store the intended [key, value]
            delete object[array[i][key]][key];//remove the key in the value
        }
        return object;
    }

    this.reshape = (params) => {//used to change the shape of an Array
        // Pending
    }

    this.randomPick = (array) => {//used to pick a random item from an Array
        return array[Math.floor(Math.random() * array.length)];
    };

    this.removeEmpty = (array = []) => {//used to truncate an Array
        let newArray = [];//storage
        for (let i in array) {
            if (Array.isArray(array[i]) && array[i].length > 0) {//if array go deep
                newArray.push(this.removeEmpty(array[i]));
            }
            else if (array[i] != undefined && array[i] != null && array[i] != 0 && array[i] != '') {//skip [undefined, null, 0, '']
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

    this.each = (array = [], callback = () => { }) => {//used as a higher order Array function
        let newArray = [];//storage
        for (let i in array) {
            newArray.push(callback(array[i], i));//make changes to the item and store it.
        }
        return newArray;
    }

    this.hasArrayElement = (haystack = [], needle = []) => {//used to check if two arrays has an item in common
        let flag = false;
        for (let i in needle) {
            if (haystack.indexOf(needle[i]) != -1) {
                return true;
            }
        }
        return flag;
    }

    this.toSet = (haystack = []) => {//used to turn an Array into a set(Make sure there a no duplicates)
        let single = [];//storage
        for (let i in haystack) {//skip if already stored
            if (single.indexOf(haystack[i]) == -1) {
                single.push(haystack[i]);
            }
        }
        return single;
    }

    this.popIndex = (array = [], index) => {//used to remove an item at a position in an Array
        let newArray = [];//storage Array
        for (let i in array) {
            if (i != index) {//skip the position
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

    this.dataType = (array = []) => {//used to get the datatypes inside an Array
        let type = typeof array[0];//get the indext type
        for (let i in array) {
            if (typeof array[i] != type) {//if two types do not match return mixed
                return 'mixed';
            }
        }
        return type;
    }

}

module.exports = ArrayLibrary;
},{}],17:[function(require,module,exports){
const Template = require('../classes/Template');

function ColorPicker(window = {}) {
    const base = new Template(window);

    this.colorIndicatorPosition = { x: 0, y: 0 };
    this.opacityIndicatorPosition = { x: 0, y: 0 };
    this.convertTo = 'RGB';

    this.init = (params = {}) => {
        this.picker = base.createElement({
            element: 'div', attributes: { class: 'color-picker' }, children: [
                {
                    element: 'span', attributes: { id: 'color-picker-setters' }, children: [
                        {
                            element: 'span', attributes: { id: 'color-picker-colors-window' }, children: [
                                { element: 'canvas', attributes: { id: 'color-picker-colors' } },
                                { element: 'span', attributes: { id: 'color-picker-color-indicator' } }
                            ]
                        },
                        {
                            element: 'span', attributes: { id: 'color-picker-opacities-window' }, children: [
                                { element: 'canvas', attributes: { id: 'color-picker-opacities' } },
                                { element: 'span', attributes: { id: 'color-picker-opacity-indicator' } }
                            ]
                        }
                    ]
                },
                {
                    element: 'div', attributes: { id: 'color-picker-result' }, children: [
                        { element: 'span', attributes: { id: 'picked-color' } },
                        {
                            element: 'span', attributes: { id: 'picked-color-window' }, children: [
                                { element: 'select', attributes: { id: 'picked-color-setter' }, options: ['RGB', 'HEX', 'HSL'] },
                                { element: 'span', attributes: { id: 'picked-color-value' } }
                            ]
                        }
                    ]
                },
                {
                    element: 'style',
                    attributes: { type: 'text/css', rel: 'stylesheet' },
                    text: `.color-picker {
                        padding: .5em;
                        display: grid;
                        z-index: 20;
                    }
                    
                    #color-picker-setters {
                        display: grid;
                        grid-template-columns: 1fr min-content;
                        gap: 1em;
                        height: inherit;
                        width: inherit;
                    }
                    
                    #color-picker-colors-window {
                        display: block;
                        border: 1px solid gray;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    #color-picker-opacities-window {
                        width: 20px;
                        display: block;
                        border: 1px solid gray;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    #color-picker-color-indicator {
                        position: absolute;
                        padding: .5em;
                        border: 1px solid black;
                        border-radius: 100%;
                        top: 0;
                        left: 0;
                    }
                    
                    #color-picker-opacity-indicator {
                        position: absolute;
                        padding: .2em;
                        background-color: black;
                        top: 0;
                        left: 0;
                    }
                    
                    #color-picker-result {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        margin: .1em 0em;
                    }
                    
                    #picked-color {
                        width: 50px;
                        height: 30px;
                        border: 1px solid black;
                    }
                    
                    #picked-color-window {
                        display: grid;
                        gap: .3em;
                        grid-template-columns: max-content;
                        grid-template-rows: repeat(2, 1fr);
                        justify-items: left;
                    }
                    
                    #picked-color-value {
                        display: inline-flex;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        color: black;
                    }`
                }
            ]
        });

        this.colorWindow = this.picker.find('#color-picker-colors-window');
        this.opacityWindow = this.picker.find('#color-picker-opacities-window');
        this.colorCanvas = this.picker.find('#color-picker-colors');
        this.opacityCanvas = this.picker.find('#color-picker-opacities');
        this.colorMarker = this.picker.find('#color-picker-color-indicator');
        this.opacityMarker = this.picker.find('#color-picker-opacity-indicator');
        this.width = params.width ? params.width : 300;
        this.height = params.height ? params.height : 300;
        this.pickedColor = params.color ? params.color : 'rgb(0, 0, 0)';
        this.colorWindow.css({ height: this.height + 'px' });
        this.colorCanvas.width = this.width;
        this.colorCanvas.height = this.height;
        this.opacityWindow.css({ height: this.height + 'px' });
        this.opacityCanvas.height = this.height;
        this.opacityCanvas.width = 20;

        //the context
        this.colorContext = this.colorCanvas.getContext('2d');
        this.opacityContext = this.opacityCanvas.getContext('2d');

        this.picker.find('#picked-color-value').innerText = this.pickedColor;
        this.picker.find('#picked-color-setter').onChanged(value => {
            this.convertTo = value;
            this.reply();
        });

        this.listen();

        return this.picker;
    }

    this.calibrateColor = () => {
        let colorGradient = this.colorContext.createLinearGradient(0, 0, this.width, 0);

        //color stops
        colorGradient.addColorStop(0, "rgb(255, 0, 0)");
        colorGradient.addColorStop(0.15, "rgb(255, 0, 255)");
        colorGradient.addColorStop(0.33, "rgb(0, 0, 255)");
        colorGradient.addColorStop(0.49, "rgb(0, 255, 255)");
        colorGradient.addColorStop(0.67, "rgb(0, 255, 0)");
        colorGradient.addColorStop(0.87, "rgb(255, 255, 0)");
        colorGradient.addColorStop(1, "rgb(255, 0, 0)");

        this.colorContext.fillStyle = colorGradient;
        this.colorContext.fillRect(0, 0, this.width, this.height);

        //add black and white stops
        colorGradient = this.colorContext.createLinearGradient(0, 0, 0, this.height);
        colorGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        colorGradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
        colorGradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
        colorGradient.addColorStop(1, "rgba(0, 0, 0, 1)");

        this.colorContext.fillStyle = colorGradient;
        this.colorContext.fillRect(0, 0, this.width, this.height);
    }

    this.calibrateOpacity = () => {
        let rgba;

        this.opacityContext.clearRect(0, 0, this.opacityCanvas.width, this.height);
        let opacityGradient = this.opacityContext.createLinearGradient(0, 0, 0, this.opacityCanvas.height);

        for (let i = 100; i >= 0; i--) {
            rgba = this.addOpacity(this.pickedColor, i / 100);
            opacityGradient.addColorStop(i / 100, rgba);
        }

        this.opacityContext.fillStyle = opacityGradient;
        this.opacityContext.clearRect(0, 0, this.opacityCanvas.width, this.opacityCanvas.height);
        this.opacityContext.fillRect(0, 0, this.opacityCanvas.width, this.opacityCanvas.height);
    }

    this.listen = () => {
        let isColorMouseDown = false;
        let isOpacityMouseDown = false;

        this.picker.notBubbledEvent('click', event => {
            if (this.added && !isColorMouseDown && !isOpacityMouseDown) {
                this.dispose();
            }
        });

        const colorMouseDown = (event) => {
            let currentX = event.clientX - this.colorCanvas.getBoundingClientRect().left;
            let currentY = event.clientY - this.colorCanvas.getBoundingClientRect().top;

            //is mouse in color picker
            isColorMouseDown = (currentX > 0 && currentX < this.colorCanvas.getBoundingClientRect().width && currentY > 0 && currentY < this.colorCanvas.getBoundingClientRect().height);
        };

        const colorMouseMove = (event) => {
            if (isColorMouseDown) {
                this.colorIndicatorPosition.x = event.clientX - this.colorCanvas.getBoundingClientRect().left;
                this.colorIndicatorPosition.y = event.clientY - this.colorCanvas.getBoundingClientRect().top;
                this.colorMarker.css({ top: this.colorIndicatorPosition.y + 'px', left: this.colorIndicatorPosition.x + 'px' });

                let picked = this.getPickedColor();
                this.pickedColor = `rgb(${picked.r}, ${picked.g}, ${picked.b})`;
                this.reply();
            }
        };

        const colorClicked = (event) => {
            this.colorIndicatorPosition.x = event.clientX - this.colorCanvas.getBoundingClientRect().left;
            this.colorIndicatorPosition.y = event.clientY - this.colorCanvas.getBoundingClientRect().top;
            this.colorMarker.css({ top: this.colorIndicatorPosition.y + 'px', left: this.colorIndicatorPosition.x + 'px' });

            let picked = this.getPickedColor();
            this.pickedColor = `rgb(${picked.r}, ${picked.g}, ${picked.b})`;
            this.reply();
        }

        const colorMouseUp = (event) => {
            isColorMouseDown = false;
            this.calibrateOpacity();
        };

        //Register
        this.colorCanvas.addEventListener("mousedown", colorMouseDown);
        this.colorCanvas.addEventListener("mousemove", colorMouseMove);
        this.colorCanvas.addEventListener("click", colorClicked);
        this.colorCanvas.addEventListener("mouseup", colorMouseUp);

        const opacityMouseDown = (event) => {
            let currentX = event.clientX - this.opacityCanvas.getBoundingClientRect().left;
            let currentY = event.clientY - this.opacityCanvas.getBoundingClientRect().top;

            //is mouse in color picker
            isOpacityMouseDown = (currentX > 0 && currentX < this.opacityCanvas.getBoundingClientRect().width && currentY > 0 && currentY < this.opacityCanvas.getBoundingClientRect().height);
        };

        const opacityMouseMove = (event) => {
            if (isOpacityMouseDown) {
                this.opacityIndicatorPosition.x = event.clientX - this.opacityCanvas.getBoundingClientRect().left;
                this.opacityIndicatorPosition.y = event.clientY - this.opacityCanvas.getBoundingClientRect().top;
                this.opacityMarker.css({ top: this.opacityIndicatorPosition.y + 'px' });

                let picked = this.getPickedOpacity();
                this.pickedColor = `rgb(${picked.r}, ${picked.g}, ${picked.b}, ${picked.a})`;
                this.reply();
            }
        };

        const opacityClicked = (event) => {
            this.opacityIndicatorPosition.x = event.clientX - this.opacityCanvas.getBoundingClientRect().left;
            this.opacityIndicatorPosition.y = event.clientY - this.opacityCanvas.getBoundingClientRect().top;
            this.opacityMarker.css({ top: this.opacityIndicatorPosition.y + 'px' });

            let picked = this.getPickedOpacity();
            this.pickedColor = `rgb(${picked.r}, ${picked.g}, ${picked.b}, ${picked.a})`;
            this.reply();
        };

        const opacityMouseUp = (event) => {
            isOpacityMouseDown = false;
        };

        this.opacityCanvas.addEventListener("mousedown", opacityMouseDown);
        this.opacityCanvas.addEventListener("mousemove", opacityMouseMove);
        this.opacityCanvas.addEventListener("click", opacityClicked);
        this.opacityCanvas.addEventListener("mouseup", opacityMouseUp);
    }

    this.reply = () => {
        this.converColor();
        this.picker.dispatchEvent(new CustomEvent('colorChanged'));
        this.picker.find('#picked-color').css({ backgroundColor: this.convertedColor });
        this.picker.find('#picked-color-value').innerText = this.convertedColor;
    }

    this.converColor = () => {
        if (this.convertTo == 'HEX') {
            this.convertedColor = this.rgbToHex(this.pickedColor);
        }
        else if (this.convertTo == 'HSL') {
            this.convertedColor = this.rgbToHSL(this.pickedColor);
        }
        else if (this.convertTo == 'RGB') {
            this.convertedColor = this.pickedColor;
        }
    }

    this.onChanged = (callBack) => {
        this.picker.addEventListener('colorChanged', event => {
            callBack(this.convertedColor);
        });
    }

    this.getPickedColor = () => {
        let imageData = this.colorContext.getImageData(this.colorIndicatorPosition.x, this.colorIndicatorPosition.y, 1, 1);
        return { r: imageData.data[0], g: imageData.data[1], b: imageData.data[2] };
    }

    this.getPickedOpacity = () => {
        let imageData = this.opacityContext.getImageData(this.opacityIndicatorPosition.x, this.opacityIndicatorPosition.y, 1, 1);

        let alpha = Math.ceil(((imageData.data[3] / 255) * 100)) / 100;
        return { r: imageData.data[0], g: imageData.data[1], b: imageData.data[2], a: alpha };
    }

    this.draw = (params) => {
        this.init(params);
        this.calibrateColor();
        this.calibrateOpacity();

        let interval = setTimeout(() => {
            this.added = true;
            clearTimeout(interval);
        }, 2000);

        return this.picker;
    }

    this.dispose = () => {
        clearInterval(this.interval);
        this.picker.remove();
    }

    this.colorType = (color = '#ffffff') => {
        let type = 'string';
        if (color.indexOf('#') == 0 && (color.length - 1) % 3 == 0) {
            type = 'hex';
        }
        else if (color.indexOf('rgba') == 0) {
            let values = base.inBetween(color, 'rgba(', ')');
            if (values != -1 && values.split(',').length == 4) {
                type = 'rgba';
            }
        }
        else if (color.indexOf('rgb') == 0) {
            let values = base.inBetween(color, 'rgb(', ')');
            if (values != -1 && values.split(',').length == 3) {
                type = 'rgb';
            }
        }
        else if (color.indexOf('hsla') == 0) {
            let values = base.inBetween(color, 'hsla(', ')');
            if (values != -1 && values.split(',').length == 4) {
                type = 'hsla';
            }
        }
        else if (color.indexOf('hsl') == 0) {
            let values = base.inBetween(color, 'hsl(', ')');
            if (values != -1 && values.split(',').length == 3) {
                type = 'hsl';
            }
        }

        return type;
    }

    this.hexToRGB = (hex = '#ffffff', alpha = true) => {
        let r = 0, g = 0, b = 0, a = 255;
        if (hex.length == 4) {
            r = "0x" + hex[1] + hex[1];
            g = "0x" + hex[2] + hex[2];
            b = "0x" + hex[3] + hex[3];
        }
        else if (hex.length == 5) {
            r = "0x" + hex[1] + hex[1];
            g = "0x" + hex[2] + hex[2];
            b = "0x" + hex[3] + hex[3];
            a = "0x" + hex[4] + hex[4];
        }
        else if (hex.length == 7) {
            r = "0x" + hex[1] + hex[2];
            g = "0x" + hex[3] + hex[4];
            b = "0x" + hex[5] + hex[6];
        }
        else if (hex.length == 9) {
            r = "0x" + hex[1] + hex[2];
            g = "0x" + hex[3] + hex[4];
            b = "0x" + hex[5] + hex[6];
            a = "0x" + hex[7] + hex[8];
        }
        a = +(a / 255).toFixed(3);

        if (alpha == false) {
            return `rgb(${+r}, ${+g}, ${+b})`;
        }
        else {
            return `rgb(${+r}, ${+g}, ${+b}, ${a})`;
        }
    }

    this.hexToHSL = (hex = '#ffffff', alpha = true) => {
        let color = this.hexToRGB(hex, alpha);
        color = this.rgbToHSL(color, alpha);
        return color;
    }

    this.rgbToHex = (rgb = 'rgb(0, 0, 0)', alpha = true) => {
        let start = rgb.indexOf('(') + 1;
        let end = rgb.indexOf(')');
        let [r, g, b, a] = rgb.slice(start, end).split(',');

        if (!base.isset(a)) {
            a = 1;
        }

        r = (+r).toString(16);
        g = (+g).toString(16);
        b = (+b).toString(16);
        a = Math.round(a * 255).toString(16);

        if (r.length == 1) {
            r = `0${r}`;
        }

        if (g.length == 1) {
            g = `0${g}`;
        }

        if (b.length == 1) {
            b = `0${b}`;
        }
        if (a.length == 1) {
            a = `0${a}`;
        }

        let hex = '#';
        if (alpha != false) {
            hex += `${r}${g}${b}${a}`;
        }
        else {
            hex += `${r}${g}${b}`;
        }

        return hex;
    }

    this.rgbToHSL = (rgb = 'rgb(0, 0, 0)', alpha = true) => {
        let start = rgb.indexOf('(') + 1;
        let end = rgb.indexOf(')');
        let [r, g, b, a] = rgb.slice(start, end).split(',');

        if (!base.isset(a)) {
            a = 1;
        }

        r /= 225;
        g /= 225;
        b /= 225;

        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;

        // Calculate hue
        // No difference
        if (delta == 0) {
            h = 0;
        }
        else if (cmax == r) {
            h = ((g - b) / delta) % 6;
        }
        else if (cmax == g) {
            h = (b - r) / delta + 2;
        }
        else if (cmax == g) {
            h = (r - g) / delta + 4;
        }

        h = Math.round(h * 60);
        // Make negative hues positive behind 360°
        if (h < 0) {
            h += 360;
        }

        l = (cmax + cmin) / 2;

        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        l = +(l * 100).toFixed(1);
        s = +(s * 100).toFixed(1);

        let hsl = `hsl`;
        if (alpha == false) {
            hsl += `(${h}, ${s}%, ${l}%)`;
        }
        else {
            hsl += `(${h}, ${s}%, ${l}%, ${a})`;
        }
        return hsl;
    }

    this.hslToRGB = (hsl = 'hsl(0, 0%, 0%)', alpha = true) => {
        let rgb = 'rgb';
        let start = hsl.indexOf('(') + 1;
        let end = hsl.indexOf(')');
        let [h, s, l, a] = hsl.slice(start, end).split(',');

        if (!base.isset(a)) {
            a = 1;
        }

        if (h.indexOf("deg") > -1)
            h = h.substr(0, h.length - 3);
        else if (h.indexOf("rad") > -1)
            h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
        else if (h.indexOf("turn") > -1)
            h = Math.round(h.substr(0, h.length - 4) * 360);
        // Keep hue fraction of 360 if ending up over
        if (h >= 360)
            h %= 360;

        s = s.replace('%', '') / 100;
        l = l.replace('%', '') / 100;

        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs((h / 60) % 2 - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;

        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        if (alpha == false) {
            rgb += `(${r}, ${g}, ${b})`;
        }
        else {
            rgb += `(${r}, ${g}, ${b}, ${a})`;
        }

        return rgb;
    }

    this.hslToHex = (hsl = '', alpha = true) => {
        let color = this.hslToRGB(hsl, alpha);
        return this.rgbToHex(color, alpha);
    }

    this.addOpacity = (color = 'rgb(0, 0, 0)', opacity = 0.5) => {
        let type = this.colorType(color);
        if (type == 'hex') color = this.hexToRGB(color);
        else if (type == 'hsl' || type == 'hsla') color = this.hslToRGB(color);

        let start = color.indexOf('(') + 1;
        let end = color.indexOf(')');
        let points = color.slice(start, end).split(',');
        points[3] = opacity;

        let changedColor = `rgba(${points.join(',')})`;

        if (type == 'hex') changedColor = this.rgbToHex(changedColor);
        else if (type == 'hsl' || type == 'hsla') changedColor = this.rgbToHSL(changedColor);

        return changedColor;
    }

    this.getOpacity = (color = 'rgb(0, 0, 0)') => {
        color = base.inBetween(color, '(', ')');
        let [r, g, b, a] = color.split(',');
        return a.trim();
    }

    this.invertColor = (color = '#ffffff') => {
        let type = this.colorType(color);
        let invert;
        if (type == 'hex') {
            color = color.replace('#', '');
            invert = '#' + this.invertHex(color);
        }
        else if (type == 'rgb') {
            color = this.rgbToHex(color).replace('#', '');
            invert = this.invertHex(color);
            invert = this.hexToRGB(invert);
        }
        else if (type == 'rgba') {
            let opacity = this.getOpacity(color);
            color = this.rgbToHex(color).replace('#', '');
            invert = this.invertHex(color);
            invert = this.hexToRGB(invert);
            invert = this.addOpacity(invert, opacity);
        }
        return invert;
    }

    this.invertHex = (hex = 'ffffff') => {
        return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
    }

    this.nameToHex = (color = 'white') => {
        let ctx = document.createElement('canvas').getContext('2d');
        ctx.fillStyle = color;
        return ctx.fillStyle;
    }

    this.nameToRGB = (color = 'white') => {
        return this.hexToRGB(this.nameToHex(color));
    }
}

module.exports = ColorPicker;
},{"../classes/Template":11}],18:[function(require,module,exports){
const MathsLibrary = require('./MathsLibrary');
const ObjectsLibrary = require('./ObjectsLibrary');
const ArrayLibrary = require('./ArrayLibrary');
const Tree = require('./../classes/Tree');

let mathLibrary = new MathsLibrary();
let objectLibrary = new ObjectsLibrary();
let arrayLibrary = new ArrayLibrary();

function Compression() {
    this.getFrequency = (data = []) => {//get the occurrance of symbols in a list
        const frequency = {};
        for (let d in data) {
            if (frequency[data[d]] == undefined) {
                frequency[data[d]] = 1;
            }
            else {
                frequency[data[d]]++;
            }
        }

        return frequency;
    }

    this.getProbabilities = (data = []) => {//get the probabilities of all symbols in a list
        let probs = this.getFrequency(data);

        for (let i in probs) {
            probs[i] = probs[i] / data.length;
        }
        return probs;
    }

    this.entropy = (data = []) => {//this shows the shortest possible average length of a lossless compression
        let sum = 0;
        let dataType = arrayLibrary.dataType(data);//get the datatype of the list
        let probabilities;
        if (dataType == 'number') {
            probabilities = data;
        }
        else if (dataType == 'string') {//get the symbols probabilities
            probabilities = Object.values(this.getProbabilities(data));
        }

        //Sum of (-p log base 2 of p)
        for (let prob of probabilities) {
            sum += (-prob * Math.log2(prob));
        }

        return sum;
    }

    this.isUDC = (data = []) => {//check if a list is uniquely decodable code
        let flag = true, noPrefix, keepRunning = true;

        let addSurfix = (str) => {
            //check if suffix is in list already then stop running
            if (data.includes(str)) {
                flag = false;
                keepRunning = false;
                return;
            }

            data.push(str);
        }

        let checkPrefix = (pos) => {//check for prefix
            noPrefix = true;
            for (let i = 0; i < data.length; i++) {
                if (i == pos) {
                    //skip the current position
                    continue;
                }
                else if (data[i] == data[pos]) {
                    //double found in the list
                    flag = false;
                    keepRunning = false;
                }
                else if (data[i].indexOf(data[pos]) == 0) {
                    //add suffix found to the list
                    addSurfix(data[i].replace(data[pos], ''));
                }

                //stop checking for prefix
                if (!keepRunning) break;
            }
        }

        while (keepRunning) {
            for (let i = 0; i < data.length; i++) {
                checkPrefix(i);
                if (keepRunning == false) break;//stop running
            }

            if (noPrefix == true) {
                //if no prefix is found stop it is UDC
                keepRunning = false;
            }
        }

        return flag;
    }

    this.sfAlgorithm = (data = []) => {
        let frequency = this.getFrequency(data);//get the frequecies of the symbols
        let sorted = objectLibrary.sort(frequency, { value: true });//sort the symbols based on frequecy of occurrance
        let codeWord = '';

        let tree = { path: '', size: mathLibrary.sum(Object.values(sorted)), value: JSON.parse(JSON.stringify(sorted)) };//set a copy of the sorted data as a tree
        let table = JSON.parse(JSON.stringify(sorted));//set the sorted as table

        for (let i in table) {
            table[i] = { frequency: table[i] };
        }

        let trySwitching = (node) => {//switch nodes if the left size is bigger than the right side
            if (node[0].size > node[1].size) {
                let temp = node[0];
                node[0] = node[1];
                node[1] = temp;

                temp = node[0].path;
                node[0].path = node[1].path
                node[1].path = temp;
            }
            return node;
        }

        let splitData = (comingNode) => {//split a tree
            let node = [{ path: comingNode.path + '0', size: 0, value: [] }, { path: comingNode.path + '1', size: 0, value: [] }];//into two almost equal length
            for (let i in comingNode.value) {
                if (node[0].size < node[1].size) {//split into 2 almost equal nodes
                    node[0].value[i] = comingNode.value[i];
                    node[0].size += comingNode.value[i];
                }
                else {
                    node[1].value[i] = comingNode.value[i];
                    node[1].size += comingNode.value[i];
                }
            }

            node = trySwitching(node);

            for (let i in node) {
                if (Object.values(node[i].value).length > 1) {//if it has more than 1 symbol it's a node then split it again
                    node[i].value = splitData(node[i]);
                }
                else {//it is a leaf, add it to the table and get the properties
                    let key = Object.keys(node[i].value)[0];
                    table[key].code = node[i].path;
                    table[key].length = node[i].path.length;
                    table[key].probability = node[i].size / data.length;
                    table[key].log = Math.log2(1 / table[key].probability);
                }
            }
            return node;
        }

        tree = splitData(tree);

        for (let d of data) {
            codeWord += table[d].code;
        }

        return { codeWord, table, data, tree };
    }

    this.huffmanCoding = (data = []) => {
        let frequency = this.getProbabilities(data);//get the frequecies of the symbols
        let sorted = objectLibrary.sort(frequency, { value: true });//sort the symbols based on frequecy of occurrance

        let tree = [];
        let table = {};

        for (let i in sorted) {//init the table and the tree
            table[i] = { probability: sorted[i], path: '', length: 0, prod: 0 };
            tree.push({ value: sorted[i], origins: i });
        }

        let dig = (coming = []) => {//run the algorithm loop until one node is remaining with value of '1'
            let length = coming.length;//size of list 
            let node = [];//init node
            if (length > 1) {// list has more than one node?
                let down = length - 1;//index of last two items in list
                let up = length - 2;
                let sum = coming[up].value + coming[down].value;
                let added = false;
                for (let i = 0; i < coming.length; i++) {
                    if (i == up || i == down) {//sum last 2 items and skip adding them
                        if (length == 2) {//if last 2 sum them and exist digging
                            let newLeaf = { value: sum, origins: [coming[up].origins, coming[down].origins] };
                            node.push(newLeaf);
                            break;
                        }
                        continue;
                    }
                    else if (coming[i].value <= sum && !added) {//add sum if it has not been added
                        let newLeaf = { value: sum, origins: [coming[up].origins, coming[down].origins] };
                        node.push(newLeaf);
                        added = true;
                    }

                    node.push(coming[i]);
                }

                if (length > 2) {
                    node = dig(node);
                }
            }

            return node;
        }

        tree = dig(tree);

        //get the path/codeword foreach symbol
        let nameItems = (origins, path) => {
            for (let i in origins) {
                if (Array.isArray(origins[i])) {
                    nameItems(origins[i], path + i)
                }
                else {
                    table[origins[i]].path = path + i;
                    table[origins[i]].length = path.length;
                    table[origins[i]].prod = path.length * table[origins[i]].probability;
                }
            }
        }

        nameItems(tree[0].origins, '');

        //calculate the avevage length of the codes
        let avgLength = mathLibrary.sum(objectLibrary.valueOfObjectArray(table, 'prod'));

        frequency = sorted = undefined;
        return { table, data, avgLength, tree };
    }

    this.encodeHuffman = (data, dictionary = []) => {
        let dictionaryLength = dictionary.length;
        let codeWord = '', nytCode, code;

        //get the e and r parameters
        let { e, r } = (() => {
            let ok = false;
            let e = 0, r;
            while (!ok) {
                e++;
                r = dictionaryLength - 2 ** e;
                ok = r < 2 ** e;
            }
            return { e, r };
        })();

        let fixedCode = (symbol) => {//get the fixed code
            let k = dictionary.indexOf(symbol) + 1;
            let code;
            if (k <= 2 * r) { // 1 <= k <= 2r
                code = (k - 1).toString(2);
                code = Array((e + 1) - code.length).fill(0).join('') + code; // e + 1 representation of k - 1
            }
            else if (k > 2 * r) {//k > 2r
                code = (k - r - 1).toString(2);
                code = Array((e) - code.length).fill(0).join('') + code;// e representation of k - r - 1
            }
            return code;
        }

        let updateCount = (t) => {//set the count of a node and switch if left is greater than right
            let count = t.getAttribute('count');
            count++;
            t.setAttributes({ count });
            let p = t.parentTree;
            if (p != null) {
                trySwitching(p);
                updateCount(p);
            }
        }

        let trySwitching = (node) => {//switch if left is greater than right
            if (node.values[0].getAttribute('count') > node.values[1].getAttribute('count')) {
                node.reverse();
            }
        };

        let tree = new Tree();
        tree.setAttribute('count', 0);
        let NYT = tree;

        let readSymbol = (symbol) => {
            let s = tree.search((v, i) => {//search and get symbol node if added already
                return v.getAttribute('id') == symbol;
            }, tree.height);

            let v = s.value;
            nytCode = tree.search((v, i) => {//get the nyt node
                return v.getAttribute('id') == 'nyt';
            }, tree.height).path.join('');

            if (v == undefined) {//has not been added
                NYT.removeAttribute('id');//remove the current NYT tag
                NYT.push([], []);//add the 2 nodes
                let temp = NYT.values[0];
                v = NYT.values[1];

                temp.setAttributes({ id: 'nyt', count: 0 });//set new nyt
                v.setAttributes({ id: symbol, count: 0 });
                NYT = temp;
                code = nytCode + fixedCode(symbol);//nyt + fixedCode
            }
            else {
                code = s.path.join('');//get path
            }

            codeWord += code;//concat the code

            updateCount(v);//update the count starting from this node to the root
        }

        for (let symbol of data) {
            readSymbol(symbol);
        }

        return { codeWord, tree, data };
    }

    this.decodeHuffman = (codeWord, dictionary = []) => {
        let dictionaryLength = dictionary.length;
        let data = '', nytCode, code, path = [];
        let tree = new Tree();
        tree.setAttributes({ count: 0, id: 'nyt' });
        let NYT = tree;
        let i;
        let { e, r } = (() => {
            let ok = false;
            let e = 0, r;
            while (!ok) {
                e++;
                r = dictionaryLength - 2 ** e;
                ok = r < 2 ** e;
            }
            return { e, r };
        })();

        let trySwitching = (node) => {//switch nodes if left side is greater than right side
            if (node.values[0].getAttribute('count') > node.values[1].getAttribute('count')) {
                node.reverse();
            }
        };

        let updateCount = (t) => {//update the size of the current node and it's next parent
            let count = t.getAttribute('count');
            count++;
            t.setAttributes({ count });
            let p = t.parentTree;
            if (p != null) {
                trySwitching(p);
                updateCount(p);
            }
        }

        let readSymbol = (symbol) => {
            let s = tree.search((v) => {
                return v.getAttribute('id') == symbol;//search and get symbol if exists already
            }, tree.height);

            let v = s.value;
            nytCode = tree.search((v, i) => {
                return v.getAttribute('id') == 'nyt';//get the NYT code
            }, tree.height).path.join('');

            if (v == undefined) {//new symbol? add it to the tree with new NYT
                NYT.removeAttribute('id');
                NYT.push([], []);
                let temp = NYT.values[0];
                v = NYT.values[1];

                temp.setAttributes({ id: 'nyt', count: 0 });
                v.setAttributes({ id: symbol, count: 0 });
                NYT = temp;
            }

            updateCount(v);
        }

        let interprete = (node) => {
            let code;
            if (node == NYT) {//is node NYT
                for (let j = 0; j < e; j++) {//read next 4 codes
                    path.push(codeWord[++i]);
                }
                let p = parseInt(path.join(''), 2);
                if (p < r) {//p is more than r, read 1 more
                    path.push(codeWord[++i]);
                    p = parseInt(path.join(''), 2);
                }
                else {
                    p += r;//add r to p
                }
                code = dictionary[p];//get symbol from dictionary
                readSymbol(code);//add this symbol to tree
            }
            else {
                code = node.getAttribute('id');//get the symbol from the tree
                readSymbol(code);//update the symbol
            }
            return code;
        }

        for (i = -1; i < codeWord.length; i++) {//start with empty NYT
            let code = codeWord[i];
            if (code != undefined) {//when not empty
                path.push(code);
            }
            let node = tree.trace(path).value;
            if (node.getAttribute('id') != undefined) {//is node labelled
                path = [item];
                data += interprete(node);//what is this node
                path = [];
            }
        }

        return { data, tree, codeWord };
    }

    this.golomb = (n, m) => {
        let q = Math.floor(n / m);//step 1
        let unary = Array(q).fill(1).join('') + '0';//unary of q

        let k = Math.ceil(Math.log2(m));
        let c = 2 ** k - m;
        let r = n % m;
        let rC = (() => {//r`
            let value = r.toString();
            if (r < c) {
                value = r.toString();
                value = Array((k - 1) - value.length).fill(0).join('') + value;//k-1 bits rep of r
            }
            else {
                value = (r + c).toString();
                value = Array(k - value.length).fill(0).join('') + value;//k bits rep of r+c
            }
            return value;
        })();

        let code = unary + rC;//concat unary and r'
        return code;
    }

    this.encodeArithmetic = (data, probabilities) => {
        let getX = (n) => {//f(x(n))= sum of x(1) .... x(n)
            let value = 0;
            for (let i in probabilities) {
                if (n == i) break;
                value = (value / 10 + probabilities[i] / 10) * 100 / 10;//handle the JS decimal problem
            }
            return value;
        }

        // l(0) = 0, u(0) = 0, fx(0) = 0
        let bounds = [{ l: 0, u: 1 }];

        let lowerN = (n) => {//lower limit of n l(n) = l(n-1) + (u(n-1) - l(n-1)) * f(x(n-1))
            let bound = bounds[n];
            let l = bound.l + ((bound.u - bound.l) * getX(data[n] - 1));
            return l;
        }

        let upperN = (n) => {//lower limit of n u(n) = l(n-1) + (u(n-1) - l(n-1)) * f(x(n))
            let bound = bounds[n];
            let u = bound.l + ((bound.u - bound.l) * getX(data[n]));
            return u;
        }

        for (let i = 0; i < data.length; i++) {
            bounds.push({ l: lowerN(i), u: upperN(i) });
        }

        let n = bounds.pop();
        return (n.l + n.u) / 2;
    }

    this.decodeArithmetic = (tag = 0, probabilities) => {
        let data = '';
        let getX = (n) => {//f(x(n))= sum of x(1) .... x(n)
            let value = 0;
            for (let i in probabilities) {
                if (n == i) break;
                value = (value / 10 + probabilities[i] / 10) * 100 / 10;//handle the JS decimal problem
            }
            return value;
        }

        // l(0) = 0, u(0) = 0, fx(0) = 0
        let bounds = [{ l: 0, u: 1 }];

        let lowerN = (n) => {//lower limit of n l(n) = l(n-1) + (u(n-1) - l(n-1)) * f(x(n-1))
            let bound = bounds[n];
            let l = bound.l + ((bound.u - bound.l) * getX(data[n] - 1));
            return l;
        }

        let upperN = (n) => {//lower limit of n u(n) = l(n-1) + (u(n-1) - l(n-1)) * f(x(n))
            let bound = bounds[n];
            let u = bound.l + ((bound.u - bound.l) * getX(data[n]));
            return u;
        }

        let count = 0, complete = false;

        while (!complete) {//run until all the codes are found
            let found = false, x = 1, n = {};

            while (!found) {// for each new code
                let l = lowerN(count, x);
                let u = upperN(count, x);

                complete = (l >= tag && tag <= u);
                if (complete) break;//if all is found stop running

                found = (l < tag && tag < u);//check if it sactisfies the conditions
                n = { l, u, x };
                x++;
            }
            if (complete) break;
            count++;

            bounds.push(n);//add code
            data += n.x;
        }
        return data;
    }

    this.encodeDiagram = (data = '', dictionary = {}) => {//daigram coding
        let i;
        let codeWord = '';
        let encode = () => {
            let first = data[i];//take two at a time
            let second = data[i + 1];
            let symbol = first + second;

            let code;
            if (dictionary[symbol] != undefined) {//is symbol in dictionary
                code = dictionary[symbol];
                i++;//set count to know it read two
            }
            else {
                code = dictionary[first];
            }

            return code;
        }

        for (i = 0; i < data.length; i++) {
            codeWord += encode();
        }

        return codeWord;
    }

    this.encodeLZ1 = (data = '', params = { windowSize: 0, searchSize: 0, lookAheadSize: 0 }) => {//LZ7//LZ1//Sliding window
        if (params.windowSize == undefined) params.windowSize = params.searchSize + params.lookAheadSize;//init the window, search and lookahead sizes
        if (params.searchSize == undefined) params.searchSize = params.windowSize - params.lookAheadSize;
        if (params.lookAheadSize == undefined) params.lookAheadSize = params.windowSize - params.searchSize;


        let i = 0, lookAheadStop, searchStop, lookAheadBuffer, searchBuffer;//init the buffers and locations

        let getTriplet = () => {
            let x = lookAheadBuffer[0];
            let picked = { o: 0, l: 0, c: x };//set the triplet <o, l, c(n)>

            if (searchBuffer.includes(x)) {
                let foundMatches = [];//storage for the matches
                for (let i in searchBuffer) {//find all the matches in search buffer
                    if (searchBuffer[i] == picked.c) {

                        let indexInData = +searchStop + +i,//this is the joint of the search and lookAhead buffers
                            indexInLookAhead = 0,
                            count = 0,
                            matching = true,
                            matched = [];
                        while (matching) {//keep getting the matches
                            matched.push(data[indexInData]);
                            count++;
                            matching = lookAheadBuffer[indexInLookAhead + count] === data[indexInData + count];
                        }
                        foundMatches.push({ o: searchBuffer.length - i, l: matched.length, c: lookAheadBuffer[matched.length] });//save matches
                    }
                }

                picked = foundMatches[0];
                for (let y of foundMatches) {//get the match with most size and closest to the lookAhead buffer
                    if (picked.l < y.l) {
                        picked = y;
                    }
                    else if (picked.l == y.l && picked.o > y.o) {
                        picked = y;
                    }
                }
            }

            i += picked.l;
            return picked;
        }

        let list = [];
        for (i = 0; i < data.length; i++) {
            searchStop = i - params.searchSize;
            if (searchStop < 0) searchStop = 0;
            lookAheadStop = i + params.lookAheadSize;
            searchBuffer = data.slice(searchStop, i).split('');
            lookAheadBuffer = data.slice(i, lookAheadStop).split('');
            list.push(getTriplet());
        }

        return list;
    }

    this.decodeLZ1 = (triplets = [{ o: 0, l: 0, c: '' }], params = { windowSize: 0, searchSize: 0, lookAheadSize: 0 }) => {
        let word = '';

        if (params.windowSize == undefined) params.windowSize = params.searchSize + params.lookAheadSize;//init the window, search and lookahead sizes
        if (params.searchSize == undefined) params.searchSize = params.windowSize - params.lookAheadSize;
        if (params.lookAheadSize == undefined) params.lookAheadSize = params.windowSize - params.searchSize;

        for (let t of triplets) {//decode each triplet
            for (let i = 0; i < t.l; i++) {
                word += (word[word.length - t.o]);
            }
            word += (t.c);
        }

        return word;
    }

    this.encodeLZ2 = (data = '') => {//LZ8//LZ2
        let duplets = [];//init duplet list
        let entries = [];//init dictionary
        let i, lastIndex;

        let getRange = (range) => {//get the symbols within the range
            let value = '';
            for (let r of range) {
                value += data[r];
            }
            return value;
        }

        let encode = (range) => {
            let e = getRange(range);//get the value of the range
            let index = entries.indexOf(e);

            let d = { i: lastIndex, c: e[e.length - 1] };//create duplet
            if (index == -1) {//current group of symbols is in not in the dictionary
                entries.push(e);
            }
            else {
                range.push(++i);
                lastIndex = index + 1;
                d = encode(range);
            }

            return d;
        }

        for (i = 0; i < data.length; i++) {
            lastIndex = 0;
            duplets.push(encode([i]));
        }

        return duplets;
    }

    this.decodeLZ2 = (duplets = [{ i: 0, c: '' }]) => {
        let entries = [];//init dictionary
        let c;

        for (let d of duplets) {//decode each duplet
            c = '';
            if (d.i != 0) {
                c = entries[d.i - 1];//get the code from the dictionary
            }
            c += d.c;
            entries.push(c);
        }

        return entries.join('');
    }

    this.encodeLZW = (data = '', initDictionary = []) => {
        let codeWord = [], lastIndex, i;
        let entries = Array.from(initDictionary);

        let getRange = (range) => {// get the values within the range
            let value = '';
            for (let r of range) {
                value += data[r];
            }
            return value;
        }

        let encode = (range) => {
            let e = getRange(range);
            let index = entries.indexOf(e);
            if (index == -1) {//is value not in dictionary?
                entries.push(e);//add it and set the counter to the last read symbol
                index = 0;
                i--;
            }
            else {
                i++;//set the counter to the next symbol and try encoding the range
                range.push(i);
                lastIndex = index += 1;//set the last read index, this is the code
                e = encode(range);
            }
            return lastIndex;
        }

        for (i = 0; i < data.length; i++) {
            lastIndex = 0;
            let code = encode([i]);
            if (code != undefined) {//code was created
                codeWord.push(code);
            }
        }

        return codeWord;
    }

    this.decodeLZW = (singleton = [], initDictionary = []) => {
        let word = '', codeWord = [], state, count = 0, rebuild = false, buildWith = '', i, start = 0;
        let entries = Array.from(initDictionary);

        let getCode = (range) => {//get the code within the range
            let value = '';
            count = 0;
            buildWith = '';
            for (let r of range) {
                if (word[r] == undefined) {//it is not complete
                    count++;
                    rebuild = true;//set to rebuild
                }
                else {
                    buildWith += word[r];//set to rebuild with incase of not complete
                }
                value += word[r];
            }
            return value;
        }

        let decode = (range = []) => {
            let e = getCode(range);
            let index = entries.indexOf(e);
            if (index == -1) {//is not in dictionary?
                entries.push(e);
                i--;//set the counter to the last symbol read
            }
            else {
                ++i;
                range.push(i);
                decode(range);//add next symbol and decode again
            }
            return e;
        }

        let build = (state) => {//build up the dictionary from the decoded values
            for (i = start; i < word.length; i++) {
                let e = decode([i]);
                if (entries.length == state) {//stop at the current decoding point
                    start = i + 1 - count;//set next starting point at the current stop
                    break;
                }
            }
        }

        for (let s of singleton) {
            let e = entries[s - 1];
            if (e == undefined) {
                build(s);//build the dictionary
                e = entries[s - 1];
            }

            codeWord.push(e);
            word = codeWord.join('');

            if (rebuild) {//rebuild the last entry in the dictionary 
                rebuild = false;
                for (let i = 0; i < count; i++) {//keep add items to the buildwith to the buildwith until it is complete
                    buildWith += buildWith[i];
                }
                codeWord.pop();//set last built and last decoded to the new build
                codeWord.push(buildWith);
                entries.pop();
                entries.push(buildWith);
                start += count;//set the next build starting point
            }
        }

        return word;
    }
}

module.exports = Compression;

},{"./../classes/Tree":12,"./ArrayLibrary":16,"./MathsLibrary":20,"./ObjectsLibrary":21}],19:[function(require,module,exports){
const ObjectsLibrary = require('./ObjectsLibrary');
let objectLibrary = new ObjectsLibrary();

function IndexedLibrary(name, version) {
    this.name = name;
    this.version = version;
    this.initialized = false;
    this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    this.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    this.init = function (callback) {//initialize db by setting the current version
        const request = this.indexedDB.open(this.name);
        request.onupgradeneeded = (event) => {
            if (typeof callback == 'function') {
                (callback(event.target.result));
            }
        }

        request.onsuccess = (event) => {
            this.version = Math.floor(request.result.version) || Math.floor(this.version);
            this.initialized = true;
        }

        request.onerror = (event) => {
            console.log(event.target.error);
        }
    }

    this.getVersion = function () {
        return new Promise((resolve, reject) => {
            const request = this.indexedDB.open(this.name);
            request.onsuccess = (event) => {
                if (this.version == undefined || this.version < request.result.version) {
                    this.version = request.result.version;
                }
                request.result.close();
                resolve(this.version);
            }

            request.onerror = (event) => {
                reject(event.target.error);
            }
        })
    }

    this.open = async function (callback) {
        if (this.version == undefined) {
            await this.getVersion();//set the version if not set
        }
        return new Promise((resolve, reject) => {
            const request = this.indexedDB.open(this.name, this.version);//open db
            request.onupgradeneeded = (event) => {
                this.version = request.result.version;//update version after upgrade

                if (typeof callback == 'function') {//run the callback if set
                    let workedDb = callback(event.target.result);
                    workedDb.onerror = workedEvent => {
                        reject(workedEvent.target.error);
                    }
                }
            }

            request.onsuccess = (event) => {
                resolve(event.target.result);
            }

            request.onerror = (event) => {
                reject(event.target.error);
            }
        });
    }

    this.collectionExists = function (collection) {
        return this.open().then(db => {
            let exists = db.objectStoreNames.contains(collection);//check if db has this collection in objectstore
            return exists;
        });
    }

    this.createCollection = async function (...collections) {
        let version = await this.getVersion();//upgrade collection
        this.version = version + 1;
        return this.open(db => {
            for (let collection of collections) {
                if (!db.objectStoreNames.contains(collection)) {//create new collection and set _id as the keypath
                    db.createObjectStore(collection, { keyPath: '_id' });
                }
            }
            return db;
        });
    }

    this.find = function (params) {
        return new Promise((resolve, reject) => {
            this.open().then(db => {
                let documents = [];

                if (db.objectStoreNames.contains(params.collection)) {//collection exists
                    let transaction = db.transaction(params.collection, 'readonly');

                    transaction.onerror = event => {
                        db.close();
                        reject(event.target.error);
                    }

                    transaction.oncomplete = event => {
                        if (params.many == true) {//many 
                            db.close();
                            resolve(documents);
                        }
                        else {
                            db.close();
                            resolve(documents[0]);//single
                        }
                    }

                    let store = transaction.objectStore(params.collection);
                    let request = store.openCursor();
                    let cursor;

                    request.onerror = (event) => {
                        db.close();
                        reject(event.target.error);
                    }

                    request.onsuccess = (event) => {
                        cursor = event.target.result;
                        if (cursor) {
                            if (params.query == undefined) {//find any
                                documents.push(cursor.value);
                            }
                            else if (objectLibrary.isSubObject(cursor.value, params.query)) {//find specific
                                documents.push(cursor.value);
                            }
                            cursor.continue();
                        }
                    };
                }
                else {
                    if (params.many == true) {//many 
                        db.close();
                        resolve(documents);
                    }
                    else {
                        db.close();
                        resolve(documents[0]);//single
                    }
                }
            }).catch(error => {
                db.close();
                reject(error);
            });
        });
    }

    this.emptyCollection = function (collection) {
        let removedCount = 0, foundCount = 0;//set the counters
        return new Promise((resolve, reject) => {
            this.find({ collection, query: {}, many: true }).then(found => {//find all documents
                this.open().then(db => {
                    if (db.objectStoreNames.contains(collection)) {//handle collection non-existence error
                        let transaction = db.transaction(collection, 'readwrite');
                        let store = transaction.objectStore(collection);

                        transaction.onerror = event => {
                            db.close();
                            reject(event.target.error);
                        }

                        transaction.oncomplete = event => {
                            db.close();
                            resolve({ action: 'emptycollection', removedCount, ok: removedCount == foundCount });
                        }
                        foundCount = found.length;
                        for (let data of found) {
                            let request = store.delete(data._id);//delete each document
                            request.onerror = event => {
                                console.log(`Error while deleting documents => ${event.target.error}`);
                            }

                            request.onsuccess = event => {
                                removedCount++;
                            }
                        }
                    }
                    else {
                        db.close();
                        resolve({ removedCount, ok: removedCount == foundCount });
                    }
                }).catch(error => {
                    db.close();
                    reject(error);
                });
            }).catch(error => {
                db.close();
                reject(error);
            })
        });
    }

    this.documentExists = function (params) {
        delete params.many;//check for only one
        return this.find(params).then(res => {//
            return res != undefined;
        });
    }

    this.generateId = function () {
        let id = Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);//generate the id using time
        return id;
    }

    this.checkId = function (request, _id, callback) {
        if (typeof _id != 'string') {
            _id = this.generateId();//get new _id if not set
        }
        let get = request.get(_id);//check if existing
        get.onsuccess = event => {
            if (event.target.result != undefined) {
                this.checkId(request, _id, callback);
            }
            else {
                callback(_id);//use the _id
            }
        }

        get.onerror = event => {
            console.log(`Error checking ID => ${event.target.error}`);
        }
    }

    this.add = function (params, db) {
        return new Promise((resolve, reject) => {
            let transaction = db.transaction(params.collection, 'readwrite');
            transaction.onerror = (event) => {
                db.close();
                reject(event.target.error)
            };

            transaction.oncomplete = (event) => {
                db.close();
                resolve({ action: 'insert', documents: params.query });
            }

            let request = transaction.objectStore(params.collection);

            if (params.many == true && Array.isArray(params.query)) {// for many
                for (let query of params.query) {
                    this.checkId(request, query._id, _id => {//validate _id
                        query._id = _id;
                        request.add(query);//add
                    });
                }
            }
            else {
                this.checkId(request, params.query._id, _id => {//validate _id
                    params.query._id = _id;
                    request.add(params.query);//add
                });
            }
        });
    }

    this.insert = async function (params) {
        let isCollection = await this.collectionExists(params.collection);
        if (isCollection) {//collection is existing
            return this.open()
                .then(db => {
                    return this.add(params, db);//add to collection
                })
                .catch(error => {
                    return error;
                });
        }
        else {
            return this.createCollection(params.collection)//create collection
                .then(db => {
                    return this.add(params, db);//add to new Collection
                })
                .catch(error => {
                    return error;
                });
        }
    }

    this.update = function (params) {
        return new Promise((resolve, reject) => {
            this.open().then(db => {
                if (!db.objectStoreNames.contains(params.collection)) {
                    db.close();
                    reject('Collection not found');
                }

                let transaction = db.transaction(params.collection, 'readwrite');

                transaction.onerror = event => {
                    db.close();
                    reject(event.target.error);
                }

                transaction.oncomplete = event => {
                    db.close();
                    resolve({ action: 'update', documents });
                }

                let store = transaction.objectStore(params.collection);
                let request = store.openCursor();
                let documents = {};

                request.onerror = (event) => {
                    db.close();
                    reject(event.target.error);
                }

                request.onsuccess = (event) => {
                    let cursor = event.target.result;
                    let found = false;
                    if (cursor) {
                        if (objectLibrary.isSubObject(cursor.value, params.check)) {//retrieve the matched documents
                            found = true;
                            for (let i in params.query) {
                                cursor.value[i] = params.query[i];
                            }

                            try {
                                let res = cursor.update(cursor.value);//update

                                res.onerror = (rEvent) => {
                                    documents[rEvent.target.result] = { value: cursor.value, status: false };
                                }

                                res.onsuccess = (rEvent) => {
                                    documents[rEvent.target.result] = { value: cursor.value, status: true };
                                }
                            } catch (error) {
                                db.close();
                                reject(error);
                            }
                        }

                        if (params.many == true || found == false) {
                            cursor.continue();
                        }
                    }
                };
            }).catch(error => {
                db.close();
                reject(error);
            });
        });
    }

    this.save = function (params = { collection: '', query: {}, check: {} }) {
        //check existence of document
        return this.documentExists({ collection: params.collection, query: params.check }).then(exists => {
            if (exists == false) {
                return this.insert(params);//insert if not found
            }
            else {
                return this.update(params);// update if found
            }
        });
    }

    this.delete = function (params) {
        let foundCount = 0, removedCount = 0;//set the counters
        return new Promise((resolve, reject) => {
            this.find(params).then(found => {
                this.open().then(db => {
                    let transaction = db.transaction(params.collection, 'readwrite');
                    let store = transaction.objectStore(params.collection);

                    transaction.onerror = event => {
                        db.close();
                        reject(event.target.error);
                    }

                    transaction.oncomplete = event => {
                        db.close();
                        resolve({ action: 'delete', removedCount, ok: removedCount == foundCount });
                    }

                    if (Array.isArray(found)) {//if many
                        foundCount = found.length;
                        for (let data of found) {
                            let request = store.delete(data._id);//delete each
                            request.onerror = event => {
                                console.log(`Error while deleting documents => ${event.target.error}`);
                            }

                            request.onsuccess = event => {
                                removedCount++;
                            }
                        }
                    }
                    else if (found) {
                        foundCount = 1;
                        let request = store.delete(found._id);//delete document
                        request.onerror = event => {
                            console.log(`Error while deleting documents => ${event.target.error}`);
                        }

                        request.onsuccess = event => {
                            removedCount++;
                        }
                    }
                }).catch(error => {
                    db.close();
                    reject(error);
                });
            }).catch(error => {
                db.close();
                reject(error);
            });
        });
    }
}

module.exports = IndexedLibrary;

},{"./ObjectsLibrary":21}],20:[function(require,module,exports){
const ArrayLibrary = require('./ArrayLibrary');
let arrayLibrary = new ArrayLibrary();

function MathsLibrary() {

    this.placeUnit = (num, value, count) => {
        num = Math.floor(num).toString();
        value = value || num[0];
        count = count || 0;

        let pos = -1;
        for (let i = 0; i < num.length; i++) {
            if (num[i] == value) {
                if (count == 0) {
                    pos = i;
                }
                count--;
            }
        }


        if (pos != -1) pos = 10 ** (num.length - pos - 1);
        return pos;
    }

    this.round = (params) => {
        params.dir = params.dir || 'round';
        params.to = params.to || 1;

        let value = Math[params.dir](params.num / params.to) * params.to;
        return value;
    }

    this.variance = (data) => {
        let mean = this.mean(data);
        let variance = 0;
        for (let i = 0; i < data.length; i++) {
            variance += (data[i] - mean) ** 2;
        }
        return variance / data.length;
    }

    this.standardDeviation = (data) => {
        let variance = this.variance(data);
        let std = Math.sqrt(variance);
        return std;
    }

    this.range = (data) => {
        let min = Math.min(...data);
        let max = Math.max(...data);

        let range = max - min;
        return range;
    }

    this.mean = (data) => {
        let sum = this.sum(data);

        let mean = sum / data.length;
        return mean;
    }

    this.median = (data) => {
        let length = data.length;
        let median;
        if (length % 2 == 0) {
            median = (data[(length / 2) - 1] + data[length / 2]) / 2;
        } else {
            median = data[Math.floor(length / 2)];
        }

        return median;
    }

    this.mode = (data) => {
        let record = {};
        for (let i = 0; i < data.length; i++) {
            if (record[data[i]] != undefined) record[data[i]]++;
            else record[data[i]] = i;
        }

        let max = Math.max(...Object.value(record));
        let mode;
        for (let i in record) {
            if (record[i] == max) {
                mode = i;
                break;
            }
        }

        return mode;
    }

    this.normalizeData = (data) => {
        data.sort((a, b) => { return a - b });
        var max = data[data.length - 1];
        var min = data[0];
        var normalized = [];
        for (var i = 0; i < data.length; i++) {
            normalized.push((data[i] - min) / (max - min));
        }
        return normalized;
    }

    this.minimuimSwaps = (arr, order) => {
        var swap = 0;
        var checked = [];
        var counter = 0;
        var final = [...arr].sort((a, b) => { return a - b });
        if (order == -1) final = final.reverse();

        for (var i = 0; i < arr.length; i++) {
            var element = arr[i];
            if (i == element || checked[i]) continue;

            counter = 0;

            if (arr[0] == 0) element = i;

            while (!checked[i]) {
                checked[i] = true;
                i = final.indexOf(element);
                element = arr[i];
                counter++;
            }
            if (counter != 0) {
                swap += counter - 1;
            }
        }
        return swap;
    }

    this.primeFactorize = (number) => {
        if (typeof number != "number") return [];
        number = Math.abs(parseInt(number));
        if (number == 1 || number == 0) return []//1 and 0 has no primes
        var divider = 2;
        var dividend;
        var factors = [];
        while (number != 1) {
            dividend = number / divider;
            if (dividend.toString().indexOf('.') != -1) {
                divider++
                continue;
            }
            number = dividend;
            factors.push(divider);
        }
        return factors;
    }

    this.lcf = (numbers) => {
        if (!Array.isArray(numbers)) return [];
        var factors = [];
        var commonFactors = [];
        var value = 1;
        for (var number of numbers) {
            if (typeof number != "number") return [];
            factors.push(this.primeFactorize(number))
        }

        main:
        for (var factor of factors[0]) {
            if (commonFactors.indexOf(factor) == -1) {
                for (var i of factors) {
                    if (i.indexOf(factor) == -1) continue main;
                }
                commonFactors.push(factor);
                value *= factor;
            }
        }
        return value;
    }

    this.stripInteger = (number) => {
        number = number.toString();
        number = (number.indexOf('.') == -1) ? number : number.slice(0, number.indexOf('.'));
        return number;
    }

    this.stripFraction = (number) => {
        number = number.toString();
        number = (number.indexOf('.') == -1) ? '0' : number.slice(number.indexOf('.') + 1);
        return number;
    }

    this.changeBase = (number, from, to) => {
        return parseFloat(number, from).toString(to);
    }

    this.max = (array) => {
        var max = array[0];
        arrayLibrary.each(array, value => {
            if (max < value) max = value;
        });
        return max;
    }

    this.min = (array) => {
        var max = array[0];
        arrayLibrary.each(array, value => {
            if (max > value) max = value;
        });
        return max;
    }

    this.sum = (array) => {
        //for finding the sum of one layer array
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (isNaN(Math.floor(array[i]))) {
                sum = false;
                break;
            }
            sum += array[i] / 1;
        }

        return sum;
    }

    this.product = (array) => {
        //for finding the sum of one layer array
        let product = 1;
        for (let i = 0; i < array.length; i++) {
            if (isNaN(Math.floor(array[i]))) {
                product = false;
                break;
            }
            product *= array[i];
        }

        return product;
    }

    this.add = (...arrays) => {
        let newArray = [];
        arrays[0].forEach((value, position) => {
            arrays.forEach((array, location) => {
                if (location != 0) {
                    let element = Array.isArray(array) ? array[position] : array;
                    value += isNaN(element) == true ? 0 : element;
                }
            })
            newArray.push(value);
        });
        return newArray;
    }

    this.sub = (...arrays) => {
        let newArray = [];
        arrays[0].forEach((value, position) => {
            arrays.forEach((array, location) => {
                if (location != 0) {
                    let element = Array.isArray(array) ? array[position] : array;
                    value -= isNaN(element) == true ? 0 : element;
                }
            })
            newArray.push(value);
        });
        return newArray;
    }

    this.mul = (...arrays) => {
        let newArray = [];
        arrays[0].forEach((value, position) => {
            arrays.forEach((array, location) => {
                if (location != 0) {
                    let element = Array.isArray(array) ? array[position] : array;
                    value *= isNaN(element) == true ? 0 : element;
                }
            })
            newArray.push(value);
        });
        return newArray;
    }

    this.divide = (...arrays) => {
        let newArray = [];
        arrays[0].forEach((value, position) => {
            arrays.forEach((array, location) => {
                if (location != 0) {
                    let element = Array.isArray(array) ? array[position] : array;
                    value /= isNaN(element) == true ? 0 : element;
                }
            })
            newArray.push(value);
        });
        return newArray;
    }

    this.abs = (array) => {
        return arrayLibrary.each(array, value => {
            value = isNaN(value) == true ? 0 : value;
            return Math.abs(value);
        });
    }
}

module.exports = MathsLibrary;
},{"./ArrayLibrary":16}],21:[function(require,module,exports){
const ArrayLibrary = require('./ArrayLibrary');
let arrayLibrary = new ArrayLibrary();

function ObjectsLibrary() {

    this.extractFromJsonArray = (meta, source) => {//extract a blueprint of data from a JsonArray
        let keys = Object.keys(meta);//get the keys
        let values = Object.values(meta);//get the values

        let eSource = [];
        if (source != undefined) {
            for (let obj of source) {//each item in source
                let object = {};
                for (let i in keys) {//each blueprint key
                    if (arrayLibrary.contains(Object.keys(obj), values[i])) {//source item has blueprint value
                        object[keys[i]] = obj[values[i]];//store according to blueprint
                    }
                }
                eSource.push(object);
            }
        }
        return eSource;
    }

    this.find = (obj, callback) => {//higher order Object function for the first item in an Object that match
        for (let i in obj) {
            if (callback(obj[i]) == true) {
                return obj[i];
            }
        }
    }

    this.findAll = (obj, callback) => {//higher order Object function for all items in an Object that match
        let values = {};
        for (let i in obj) {
            if (callback(obj[i]) == true)
                values[i] = obj[i];
        }

        return values;
    }

    this.makeIterable = (obj) => {//make an object to use 'for in'
        obj[Symbol.iterator] = function* () {
            let properties = Object.keys(obj);
            for (let p of properties) {
                yield this[p];
            }
        }
        return obj;
    }

    this.max = (object) => {
        object = this.sort(object, { value: true });
        return this.getIndex(object);
    }

    this.min = (object) => {//get the mininum in item in an Object
        object = this.sort(object, { value: false });
        return this.getIndex(object);
    }

    this.onChanged = (obj, callback) => {//make an object listen to changes of it's items
        const handler = {
            get(target, property, receiver) {//when an Item is fetched
                try {
                    return new Proxy(target[property], handler);
                } catch (err) {
                    return Reflect.get(target, property, receiver);
                }
            },
            defineProperty(target, property, descriptor) {//when an Item is added
                callback(target, property);
                return Reflect.defineProperty(target, property, descriptor);
            },
            deleteProperty(target, property) {//when an Item is removed
                callback(target, property);
                return Reflect.deleteProperty(target, property);
            }
        };

        return new Proxy(obj, handler);
    }

    this.toArray = (object, named) => {//turn an Object into an Array
        var array = [];
        Object.keys(object).map((key) => {
            if (named == true) {//make it named
                array[key] = object[key];
            }
            else {
                array.push(object[key]);
            }
        });
        return array;
    }

    this.valueOfObjectArray = (array, name) => {//get all the keys in a JsonArray of item name
        var newArray = [];
        for (let i in array) {
            newArray.push(array[i][name]);
        }
        return newArray;
    }

    this.keysOfObjectArray = (array = []) => {//get all the keys in a JsonArray
        var newArray = [];
        for (let i in array) {
            newArray = newArray.concat(Object.keys(array[i]));
        }
        return arrayLibrary.toSet(newArray);//remove duplicates
    }

    this.objectOfObjectArray = (array = [], id, name) => {//strip [key value] from a JsonArray
        var object = {};
        for (let i in array) {
            object[array[i][id]] = array[i][name];
        }
        return object;
    }

    this.copy = (from, to) => {//clone an Object
        Object.keys(from).map(key => {
            to[key] = from[key];
        });
    }

    this.forEach = (object, callback) => {//higher order function for Object literal
        for (let key in object) {
            callback(object[key], key);
        }
    }

    this.each = function (object, callback) {//higher order function for Object literal
        let newObject = {};
        for (let key in object) {
            newObject[key] = callback(object[key], key);
        }
        return newObject;
    }

    this.isSubObject = (data, sample) => {//check if an object is a sub-Object of another Object
        let flag;
        for (let name in sample) {
            flag = JSON.stringify(sample[name]) == JSON.stringify(data[name]);//convert to string and compare
            if (!flag) break;
        }

        return flag;
    }

    this.getSubObject = (data = [], sample = {}) => {//get matched items in Object
        let matched = [], flag = true;
        for (let i in data) {
            flag = this.isSubObject(data[i], sample);//check each object
            if (!flag) continue;
            matched.push(data[i]);
        }

        return matched
    }

    this.sort = (data = {}, params = { items: [], descend: false, key: false, value: false }) => {//sort an Object based on[key, value or items]
        params.item = params.item || '';
        params.descend = params.descend || false;

        let sorted = [], nData = {};
        for (let [key, value] of Object.entries(data)) {
            sorted.push({ key, value });
        }

        if (params.key != undefined) {//sort with key
            console.log('Hello');
            sorted.sort((a, b) => {
                let value = (a.key >= b.key);
                if (params.key == true) value = !value;//descend
                return value;
            });
        }

        if (params.value != undefined) {//sort with value
            sorted.sort((a, b) => {
                let value = (a.value >= b.value);
                if (params.value == true) value = !value;//descend
                return value;
            });
        }

        if (params.items != undefined) {//sort with items
            sorted.sort((a, b) => {
                let greater = 0, lesser = 0;
                for (let item of params.items) {
                    if (a.value[item] >= b.value[item]) greater++
                    else lesser++;
                }
                let value = greater >= lesser;
                if (params.descend == true) value = !value;//descend items
                return value;
            });
        }

        for (let { key, value } of sorted) {
            nData[key] = value;
        }

        return nData;
    }

    this.reverse = (data = {}) => {//reverse an Object
        let keys = Object.keys(data).reverse();
        let newObject = {};
        for (let i of keys) {
            newObject[i] = data[i];
        }
        return newObject;
    }

    this.getIndex = (data = {}) => {//get the first item in the Object
        let key = Object.keys(data).shift();
        let value = data[key];
        return { key, value };
    }

    this.getLast = (data = {}) => {//get the last item in the Object
        let key = Object.keys(data).pop();
        let value = data[key];
        return { key, value };
    }

    this.getAt = (data = {}, index) => {//get the item of index in the Object
        let key = Object.keys(data)[index];
        let value = data[key];
        return { key, value };
    }

    this.keyOf = (data = {}, item) => {//get the first occurrance of an item in an Object
        let index = -1;
        for (let i in data) {
            if (JSON.stringify(data[i]) == JSON.stringify(item)) {
                return i;
            }
        }

        return index;
    }

    this.lastKeyOf = (data = {}, item) => {//get the last occurrance of an item in an object
        let index = -1;
        for (let i in data) {
            if (JSON.stringify(data[i]) == JSON.stringify(item)) {
                index = i;
            }
        }

        return index;
    }

    this.includes = (data = {}, item) => {//check if an Object has an item
        return this.keyOf(data, item) != -1;
    }
}

module.exports = ObjectsLibrary;
},{"./ArrayLibrary":16}],22:[function(require,module,exports){
const Func = require('./../classes/Func');
let func = new Func();

function Shadow(element) {
    this.element = element.cloneNode(true);
    this.properties = {};
    this.childProperties = {};

    this.updateNewElementChildProperties = function (element, propertyCollection = {}) {
        let children, positions;
        for (let identifier in propertyCollection) {
            for (let childProperties of propertyCollection[identifier]) {
                positions = this.setPositions(childProperties.positions);
                children = this.getChildren(identifier, element, positions);
                for (let j = 0; j < children.length; j++) {
                    children[j].setProperties(childProperties.properties);
                }
            }
        }
    }

    this.updateNewElementChildAttributes = function (element, attributeCollection = {}) {
        let children, positions;
        for (let identifier in attributeCollection) {
            for (let childAtrributes of attributeCollection[identifier]) {
                positions = this.setPositions(childAtrributes.positions);
                children = this.getChildren(identifier, element, positions);
                for (let j = 0; j < children.length; j++) {
                    children[j].setAttributes(childAtrributes.attributes);
                }
            }
        }
    }

    this.setPositions = function (positions = 1) {
        if (!Array.isArray(positions)) {
            positions = func.range(positions);
        }

        return positions;
    }

    this.createElement = function (params = { childDetails: { attributes: {}, properties: {} }, details: { attributes: {}, properties: {} } }) {
        let element = this.element.cloneNode(true);
        this.children.push(element);

        this.prepareElement(element, params);
        return element;
    }

    this.prepareElement = function (element, params = { childDetails: { attributes: {}, properties: {} }, details: { attributes: {}, properties: {} } }) {
        if (params.childDetails != undefined) {
            if (params.childDetails.attributes != undefined) {
                this.updateNewElementChildAttributes(element, params.childDetails.attributes);
            }

            if (params.childDetails.properties != undefined) {
                this.updateNewElementChildProperties(element, params.childDetails.properties);
            }
        }

        if (params.details != undefined) {
            if (params.details.attributes != undefined) {
                element.setAttributes(params.details.attributes);
            }

            if (params.details.properties != undefined) {
                element.setProperties(params.details.properties);
            }
        }

        this.updateNewElementChildProperties(element, this.childProperties);
        element.setProperties(this.properties);

        this.makeCloneable(element);
    }

    this.removeElement = function (element) {
        let children = [];
        let position = this.children.indexOf(element);
        for (let i = 0; i < this.children.lengt; i++) {
            if (position != i) {
                children.push(this.children[i]);
            }
        }
        this.children = children;
    }

    this.cloneElement = function (position, params = { childDetails: { attributes: {}, properties: {} }, details: { attributes: {}, properties: {} } }) {
        let element = this.children[position].cloneNode(true);
        this.children.push(element);

        this.prepareElement(element, params);
        return element;
    }

    this.makeCloneable = function (element) {
        let position = this.children.indexOf(element);
        if (position == -1) {
            return;
        }

        element.unitClone = (params) => {
            return this.cloneElement(position, params)
        }
    }

    this.length = function () {
        return this.children.length;
    }

    this.setProperties = function (properties = {}) {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].setProperties(properties);
        }
        this.element.setProperties(properties);
        for (let i in properties) {
            this.properties[i] = properties[i];
        }
    }

    this.css = function (style = {}) {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].css(style);
        }
        this.element.css(style);
    }

    this.setAttributes = function (attributes = {}) {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].setAttributes(attributes);
        }
        this.element.setAttributes(attributes);
    }

    this.addClasses = function (classes = '') {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].addClasses(classes);
        }
        this.element.addClasses(classes);
    }

    this.removeClasses = function (classes = '') {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].removeClasses(classes);
        }
        this.element.removeClasses(classes);
    }

    this.getChildren = function (identifier = '', element, positions = []) {
        let collection = [];
        let children = element.findAll(identifier);//get the children matching identifier in each element
        if (children.length > 0) {//if not empty
            for (let j = 0; j < positions.length; j++) {
                if (children[positions[j]] != undefined) {//if available
                    collection.push(children[positions[j]]);
                }
            }
        }
        return collection;
    }

    this.childCss = function (identifier = '', style = {}, positions = []) {
        positions = this.setPositions(positions);

        let children;
        for (let i = 0; i < this.children.length; i++) {
            children = this.getChildren(identifier, this.children[i], positions);

            for (let j = 0; j < children.length; j++) {
                children[j].css(style);
            }
        }

        children = this.getChildren(identifier, this.element, positions);

        for (let j = 0; j < children.length; j++) {
            children[j].css(style);
        }
    }

    this.setChildProperties = function (identifier = '', properties = {}, positions = []) {
        positions = this.setPositions(positions);

        let children;
        for (let i = 0; i < this.children.length; i++) {
            children = this.getChildren(identifier, this.children[i], positions);

            for (let j = 0; j < children.length; j++) {
                children[j].setProperties(properties);
            }
        }

        children = this.getChildren(identifier, this.element, positions);
        for (let j = 0; j < children.length; j++) {
            children[j].setProperties(properties);
        }

        this.childProperties[identifier] = this.childProperties[identifier] || [];
        this.childProperties[identifier].push({ properties, positions });
    }

    this.setChildAttributes = function (identifier = '', attributes = {}, positions = '') {
        positions = this.setPositions(positions);

        let children;
        for (let i = 0; i < this.children.length; i++) {
            children = this.getChildren(identifier, this.children[i], positions);

            for (let j = 0; j < children.length; j++) {
                children[j].setAttributes(attributes);
            }
        }

        children = this.getChildren(identifier, this.element, positions);

        for (let j = 0; j < children.length; j++) {
            children[j].setAttributes(attributes);
        }
    }

    this.addClassesToChild = function (identifier = '', classes = '', positions = []) {
        positions = this.setPositions(positions);

        let children;
        for (let i = 0; i < this.children.length; i++) {
            children = this.getChildren(identifier, this.children[i], positions);

            for (let j = 0; j < children.length; j++) {
                children[j].addClasses(classes);
            }
        }

        children = this.getChildren(identifier, this.element, positions);

        for (let j = 0; j < children.length; j++) {
            children[j].addClasses(classes);
        }
    }

    this.removeClassesFromChild = function (identifier = '', classes = '', positions = []) {
        positions = this.setPositions(positions);

        let children;
        for (let i = 0; i < this.children.length; i++) {
            children = this.getChildren(identifier, this.children[i], positions);

            for (let j = 0; j < children.length; j++) {
                children[j].removeClasses(classes);
            }
        }

        children = this.getChildren(identifier, this.element, positions);

        for (let j = 0; j < children.length; j++) {
            children[j].removeClasses(classes);
        }
    }
}

module.exports = Shadow;
},{"./../classes/Func":6}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1VzZXJzLzIzNDgxL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc3JjL21haW4uanMiLCJub2RlX21vZHVsZXMva2VkaW8vSWNvbnMuanMiLCJub2RlX21vZHVsZXMva2VkaW8vYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9rZWRpby9jbGFzc2VzL0Jhc2UuanMiLCJub2RlX21vZHVsZXMva2VkaW8vY2xhc3Nlcy9Db21wb25lbnRzLmpzIiwibm9kZV9tb2R1bGVzL2tlZGlvL2NsYXNzZXMvRnVuYy5qcyIsIm5vZGVfbW9kdWxlcy9rZWRpby9jbGFzc2VzL0pTRWxlbWVudHMuanMiLCJub2RlX21vZHVsZXMva2VkaW8vY2xhc3Nlcy9NYXRyaXguanMiLCJub2RlX21vZHVsZXMva2VkaW8vY2xhc3Nlcy9OZXVyYWxOZXR3b3JrLmpzIiwibm9kZV9tb2R1bGVzL2tlZGlvL2NsYXNzZXMvUGVyaW9kLmpzIiwibm9kZV9tb2R1bGVzL2tlZGlvL2NsYXNzZXMvVGVtcGxhdGUuanMiLCJub2RlX21vZHVsZXMva2VkaW8vY2xhc3Nlcy9UcmVlLmpzIiwibm9kZV9tb2R1bGVzL2tlZGlvL2NsYXNzZXMvVHJlZUV2ZW50LmpzIiwibm9kZV9tb2R1bGVzL2tlZGlvL2Z1bmN0aW9ucy9BbmFseXNpc0xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMva2VkaW8vZnVuY3Rpb25zL0FwcExpYnJhcnkuanMiLCJub2RlX21vZHVsZXMva2VkaW8vZnVuY3Rpb25zL0FycmF5TGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9rZWRpby9mdW5jdGlvbnMvQ29sb3JQaWNrZXIuanMiLCJub2RlX21vZHVsZXMva2VkaW8vZnVuY3Rpb25zL0NvbXByZXNzaW9uLmpzIiwibm9kZV9tb2R1bGVzL2tlZGlvL2Z1bmN0aW9ucy9JbmRleGVkTGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9rZWRpby9mdW5jdGlvbnMvTWF0aHNMaWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2tlZGlvL2Z1bmN0aW9ucy9PYmplY3RzTGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9rZWRpby9mdW5jdGlvbnMvU2hhZG93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdnpEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDenBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbGJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcHlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCB7IEJhc2UgfSA9IHJlcXVpcmUoXCJrZWRpby9icm93c2VyXCIpO1xyXG53aW5kb3cuYmFzZSA9IG5ldyBCYXNlKHdpbmRvdyk7XHJcblxyXG5sZXQgZ2V0Rm9ybURhdGEgPSAocGFyYW1zID0geyBlbGVtZW50OiAnJywgbmFtZTogJycsIHR5cGU6ICcnLCBub3RlOiAnJyB9KSA9PiB7XHJcbiAgICByZXR1cm4gYmFzZS5jcmVhdGVFbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczogeyBjbGFzczogJ2Zvcm0tZWxlbWVudCcgfSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ2xhYmVsJywgYXR0cmlidXRlczogeyBjbGFzczogJ2Zvcm0tZWxlbWVudC1sYWJlbCcgfSwgdGV4dDogcGFyYW1zLm5hbWUsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYScsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdmb3JtLW5vdGUnIH0sIHRleHQ6IHBhcmFtcy5ub3RlIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogcGFyYW1zLmVsZW1lbnQsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdmb3JtLWVsZW1lbnQtZGF0YScsIG5hbWU6IHBhcmFtcy5uYW1lLCBpZDogcGFyYW1zLm5hbWUsIHBsYWNlSG9sZGVyOiAncmVhZHlmb3JhbGVydGJveScsIHR5cGU6IHBhcmFtcy50eXBlIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBldmVudCA9PiB7XHJcbiAgICBsZXQgYXBwID0gZG9jdW1lbnQuYm9keS5tYWtlRWxlbWVudCh7XHJcbiAgICAgICAgZWxlbWVudDogXCJzZWN0aW9uXCIsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdhcHAtd2luZG93JyB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnaGVhZGVyJywgYXR0cmlidXRlczogeyBpZDogJ21haW4taGVhZGVyJywgY2xhc3M6ICdiaWcnIH0sIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnYmFubmVyJywgYXR0cmlidXRlczogeyBpZDogJ21haW4tYmFubmVyJyB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYScsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdhcHAtbmFtZScgfSwgdGV4dDogJ0JhbmsnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogJ2knLCBhdHRyaWJ1dGVzOiB7IGlkOiAnYXBwLWxvZ28nIH0sIGh0bWw6IGA8c3ZnIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI5NVwiIHZpZXdCb3g9XCIwIDAgODAgOTVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjMxLjY1MTVcIiBjeT1cIjYzLjY1MTVcIiByPVwiMTkuMDcwMVwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtNDAuMzQgMzEuNjUxNSA2My42NTE1KVwiIHN0cm9rZT1cIiNGM0UzQjhcIiBzdHJva2Utd2lkdGg9XCI2XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNDguNjUxNVwiIGN5PVwiMzEuNjUxNVwiIHI9XCIxOS4wNzAxXCIgdHJhbnNmb3JtPVwicm90YXRlKC00MC4zNCA0OC42NTE1IDMxLjY1MTUpXCIgc3Ryb2tlPVwiIzQzNDE5NVwiIHN0cm9rZS13aWR0aD1cIjZcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnbWFpbicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdtYWluLXdpbmRvdycgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXIgPSBhcHAuZmluZCgnI21haW4taGVhZGVyJyk7XHJcbiAgICBsZXQgbWFpbiA9IGFwcC5maW5kKCcjbWFpbi13aW5kb3cnKTtcclxuICAgIFxyXG4gICAgbGV0IGxvZ2luID0gYmFzZS5jcmVhdGVFbGVtZW50KHtcclxuICAgICAgICBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczogeyBpZDogJ2xvZ2luLXdpbmRvdycsIGNsYXNzOiAnZm9ybS1jb250YWluZXInIH0sIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ3RhYicgfSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdhJywgYXR0cmlidXRlczogeyBjbGFzczogJ3RhYi1lbGVtZW50JywgaWQ6ICdsb2dpbi10YWInIH0sIHRleHQ6ICdMb2cgSW4nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYScsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICd0YWItZWxlbWVudCBhY3RpdmUnLCBpZDogJ3JlZ2lzdGVyLXRhYicgfSwgdGV4dDogJ1JlZ2lzdGVyJyB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdmb3JtJywgYXR0cmlidXRlczogeyBpZDogJ2xvZ2luLWZvcm0nLCBjbGFzczogJ2Zvcm0nIH0sIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnYScsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdmb3JtLW5vdGUnIH0sIHRleHQ6ICdQbGVhc2UgZmlsbCBvdXQgdGhpcyBmb3JtIGFjY3VyYXRlIGluZm9ybWF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Rm9ybURhdGEoeyBlbGVtZW50OiAnaW5wdXQnLCBuYW1lOiAnbmFtZScsIG5vdGU6IFwiW0ZpcnN0bmFtZSBMYXN0bmFtZV1cIiB9KSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRGb3JtRGF0YSh7IGVsZW1lbnQ6ICdpbnB1dCcsIG5hbWU6ICdvdGhlciBuYW1lcycgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Rm9ybURhdGEoeyBlbGVtZW50OiAnaW5wdXQnLCBuYW1lOiAnZ2VuZGVyJyB9KSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRGb3JtRGF0YSh7IGVsZW1lbnQ6ICdpbnB1dCcsIG5hbWU6ICdyZWxpZ2lvbicgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Rm9ybURhdGEoeyBlbGVtZW50OiAnaW5wdXQnLCBuYW1lOiAnYWRkcmVzcycgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Rm9ybURhdGEoeyBlbGVtZW50OiAnaW5wdXQnLCBuYW1lOiAnc29ydCBjb2RlJyB9KSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRGb3JtRGF0YSh7IGVsZW1lbnQ6ICdpbnB1dCcsIG5hbWU6ICdkYXRlIG9mIGJpcnRoJywgbm90ZTogXCIoREQvTU0vWVlZWSlcIiB9KSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRGb3JtRGF0YSh7IGVsZW1lbnQ6ICdpbnB1dCcsIG5hbWU6ICduYXJpdGFsIHN0YXR1cycgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Rm9ybURhdGEoeyBlbGVtZW50OiAnaW5wdXQnLCBuYW1lOiAnbmF0aW9uYWxpdHknIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEZvcm1EYXRhKHsgZWxlbWVudDogJ2lucHV0JywgbmFtZTogJ2ludC4gcGFzc3BvcnQgIycgfSksXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdmb3JtLWJ1dHRvbicgfSwgdGV4dDogJ05leHQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pXHJcblxyXG4gICAgbWFpbi5hcHBlbmQobG9naW4pO1xyXG59KTsiLCJsZXQgSWNvbnMgPSB7fTtcclxuXHJcbkljb25zWydhZGRyZXNzLWJvb2snXSA9ICdmYXMsIGZhLWFkZHJlc3MtYm9vayc7XHJcbkljb25zWydhbWF6b24nXSA9ICdmYXMsIGZhLWFtYXpvbic7XHJcbkljb25zWydhbWJ1bGFuY2UnXSA9ICdmYXMsIGZhLWFtYnVsYW5jZSc7XHJcbkljb25zWydhbmRyb2lkJ10gPSAnZmFzLCBmYS1hbmRyb2lkJztcclxuSWNvbnNbJ2FwcGxlJ10gPSAnZmFzLCBmYS1hcHBsZSc7XHJcbkljb25zWydhc3RlcmlzayddID0gJ2ZhcywgZmEtYXN0ZXJpc2snO1xyXG5JY29uc1snYXQnXSA9ICdmYXMsIGZhLWF0JztcclxuSWNvbnNbJ2JhY2t3YXJkJ10gPSAnZmFzLCBmYS1iYWNrd2FyZCc7XHJcbkljb25zWydiYW5rJ10gPSAnZmFzLCBmYS1iYW5rJztcclxuSWNvbnNbJ2JhdHRlcnknXSA9ICdmYXMsIGZhLWJhdHRlcnknO1xyXG5JY29uc1snYmVkJ10gPSAnZmFzLCBmYS1iZWQnO1xyXG5JY29uc1snYmVsbCddID0gJ2ZhcywgZmEtYmVsbCc7XHJcbkljb25zWydiaWN5Y2xlJ10gPSAnZmFzLCBmYS1iaWN5Y2xlJztcclxuSWNvbnNbJ2JpcnRoZGF5LWNha2UnXSA9ICdmYXMsIGZhLWJpcnRoZGF5LWNha2UnO1xyXG5JY29uc1snYml0YnVja2V0J10gPSAnZmFzLCBmYS1iaXRidWNrZXQnO1xyXG5JY29uc1snYml0Y29pbiddID0gJ2ZhcywgZmEtYml0Y29pbic7XHJcbkljb25zWydibHVldG9vdGgnXSA9ICdmYXMsIGZhLWJsdWV0b290aCc7XHJcbkljb25zWydib2x0J10gPSAnZmFzLCBmYS1ib2x0JztcclxuSWNvbnNbJ2Jvb2snXSA9ICdmYXMsIGZhLWJvb2snO1xyXG5JY29uc1snYnVzJ10gPSAnZmFzLCBmYS1idXMnO1xyXG5JY29uc1snY2FiJ10gPSAnZmFzLCBmYS1jYWInO1xyXG5JY29uc1snY2FsY3VsYXRvciddID0gJ2ZhcywgZmEtY2FsY3VsYXRvcic7XHJcbkljb25zWydjYW1lcmEnXSA9ICdmYXMsIGZhLWNhbWVyYSc7XHJcbkljb25zWydjYXInXSA9ICdmYXMsIGZhLWNhcic7XHJcbkljb25zWydjZXJ0aWZpY2F0ZSddID0gJ2ZhcywgZmEtY2VydGlmaWNhdGUnO1xyXG5JY29uc1snY2hpbGQnXSA9ICdmYXMsIGZhLWNoaWxkJztcclxuSWNvbnNbJ2Nocm9tZSddID0gJ2ZhcywgZmEtY2hyb21lJztcclxuSWNvbnNbJ2Nsb3VkJ10gPSAnZmFzLCBmYS1jbG91ZCc7XHJcbkljb25zWydjb2ZmZWUnXSA9ICdmYXMsIGZhLWNvZmZlZSc7XHJcbkljb25zWydjb21tZW50J10gPSAnZmFzLCBmYS1jb21tZW50JztcclxuSWNvbnNbJ2NvbXBhc3MnXSA9ICdmYXMsIGZhLWNvbXBhc3MnO1xyXG5JY29uc1snY29weSddID0gJ2ZhcywgZmEtY29weSc7XHJcbkljb25zWydjb3B5cmlnaHQnXSA9ICdmYXMsIGZhLWNvcHlyaWdodCc7XHJcbkljb25zWydjbG9uZSddID0gJ2ZhcywgZmEtY2xvbmUnO1xyXG5JY29uc1snY3JlZGl0LWNhcmQnXSA9ICdmYXMsIGZhLWNyZWRpdC1jYXJkJztcclxuSWNvbnNbJ2N1YmUnXSA9ICdmYXMsIGZhLWN1YmUnO1xyXG5JY29uc1snZGVza3RvcCddID0gJ2ZhcywgZmEtZGVza3RvcCc7XHJcbkljb25zWydkaWFtb25kJ10gPSAnZmFzLCBmYS1kaWFtb25kJztcclxuSWNvbnNbJ2Rvd25sb2FkJ10gPSAnZmFzLCBmYS1kb3dubG9hZCc7XHJcbkljb25zWydkcml2ZXJzLWxpY2Vuc2UnXSA9ICdmYXMsIGZhLWRyaXZlcnMtbGljZW5zZSc7XHJcbkljb25zWydkcm9wYm94J10gPSAnZmFzLCBmYS1kcm9wYm94JztcclxuSWNvbnNbJ2RydXBhbCddID0gJ2ZhcywgZmEtZHJ1cGFsJztcclxuSWNvbnNbJ2VkZ2UnXSA9ICdmYXMsIGZhLWVkZ2UnO1xyXG5JY29uc1snZWRpdCddID0gJ2ZhcywgZmEtZWRpdCc7XHJcbkljb25zWydlamVjdCddID0gJ2ZhcywgZmEtZWplY3QnO1xyXG5JY29uc1snZWxsaXBzaXMtaCddID0gJ2ZhcywgZmEtZWxsaXBzaXMtaCc7XHJcbkljb25zWydlbnZlbG9wZSddID0gJ2ZhcywgZmEtZW52ZWxvcGUnO1xyXG5JY29uc1snZXJhc2VyJ10gPSAnZmFzLCBmYS1lcmFzZXInO1xyXG5JY29uc1snZXhjaGFuZ2UnXSA9ICdmYXMsIGZhLWV4Y2hhbmdlJztcclxuSWNvbnNbJ2V4Y2xhbWF0aW9uJ10gPSAnZmFzLCBmYS1leGNsYW1hdGlvbic7XHJcbkljb25zWydleHBhbmQnXSA9ICdmYXMsIGZhLWV4cGFuZCc7XHJcbkljb25zWydleWUnXSA9ICdmYXMsIGZhLWV5ZSc7XHJcbkljb25zWydleWUtc2xhc2gnXSA9ICdmYXMsIGZhLWV5ZS1zbGFzaCc7XHJcbkljb25zWydmYXgnXSA9ICdmYXMsIGZhLWZheCc7XHJcbkljb25zWydmZW1hbGUnXSA9ICdmYXMsIGZhLWZlbWFsZSc7XHJcbkljb25zWydmaWxlJ10gPSAnZmFzLCBmYS1maWxlJztcclxuSWNvbnNbJ2ZpbG0nXSA9ICdmYXMsIGZhLWZpbG0nO1xyXG5JY29uc1snZmlyZSddID0gJ2ZhcywgZmEtZmlyZSc7XHJcbkljb25zWydmbGFnJ10gPSAnZmFzLCBmYS1mbGFnJztcclxuSWNvbnNbJ2ZsaWNrciddID0gJ2ZhcywgZmEtZmxpY2tyJztcclxuSWNvbnNbJ2ZvbGRlciddID0gJ2ZhcywgZmEtZm9sZGVyJztcclxuSWNvbnNbJ2ZvcndhcmQnXSA9ICdmYXMsIGZhLWZvcndhcmQnO1xyXG5JY29uc1snZm91cnNxdWFyZSddID0gJ2ZhcywgZmEtZm91cnNxdWFyZSc7XHJcbkljb25zWydnaWZ0J10gPSAnZmFzLCBmYS1naWZ0JztcclxuSWNvbnNbJ2dsYXNzJ10gPSAnZmFzLCBmYS1nbGFzcyc7XHJcbkljb25zWydnbG9iZSddID0gJ2ZhcywgZmEtZ2xvYmUnO1xyXG5JY29uc1snZ29vZ2xlJ10gPSAnZmFzLCBmYS1nb29nbGUnO1xyXG5JY29uc1snZ3JhZHVhdGlvbi1jYXAnXSA9ICdmYXMsIGZhLWdyYWR1YXRpb24tY2FwJztcclxuSWNvbnNbJ2dyb3VwJ10gPSAnZmFzLCBmYS1ncm91cCc7XHJcbkljb25zWydoYXNodGFnJ10gPSAnZmFzLCBmYS1oYXNodGFnJztcclxuSWNvbnNbJ2hlYWRwaG9uZXMnXSA9ICdmYXMsIGZhLWhlYWRwaG9uZXMnO1xyXG5JY29uc1snaGVhcnQnXSA9ICdmYXMsIGZhLWhlYXJ0JztcclxuSWNvbnNbJ2hpc3RvcnknXSA9ICdmYXMsIGZhLWhpc3RvcnknO1xyXG5JY29uc1snaG9tZSddID0gJ2ZhcywgZmEtaG9tZSc7XHJcbkljb25zWydob3RlbCddID0gJ2ZhcywgZmEtaG90ZWwnO1xyXG5JY29uc1snaG91cmdsYXNzJ10gPSAnZmFzLCBmYS1ob3VyZ2xhc3MnO1xyXG5JY29uc1snaW1hZ2UnXSA9ICdmYXMsIGZhLWltYWdlJztcclxuSWNvbnNbJ2ltZGInXSA9ICdmYXMsIGZhLWltZGInO1xyXG5JY29uc1snaW5ib3gnXSA9ICdmYXMsIGZhLWluYm94JztcclxuSWNvbnNbJ2luZHVzdHJ5J10gPSAnZmFzLCBmYS1pbmR1c3RyeSc7XHJcbkljb25zWydpbmZvJ10gPSAnZmFzLCBmYS1pbmZvJztcclxuSWNvbnNbJ2luc3RhZ3JhbSddID0gJ2ZhcywgZmEtaW5zdGFncmFtJztcclxuSWNvbnNbJ2tleSddID0gJ2ZhcywgZmEta2V5JztcclxuSWNvbnNbJ2xhbmd1YWdlJ10gPSAnZmFzLCBmYS1sYW5ndWFnZSc7XHJcbkljb25zWydsYXB0b3AnXSA9ICdmYXMsIGZhLWxhcHRvcCc7XHJcbkljb25zWydsZWFmJ10gPSAnZmFzLCBmYS1sZWFmJztcclxuSWNvbnNbJ2xlZ2FsJ10gPSAnZmFzLCBmYS1sZWdhbCc7XHJcbkljb25zWydsaWZlLWJvdXknXSA9ICdmYXMsIGZhLWxpZmUtYm91eSc7XHJcbkljb25zWydsaW5rZWRpbiddID0gJ2ZhcywgZmEtbGlua2VkaW4nO1xyXG5JY29uc1snbGludXgnXSA9ICdmYXMsIGZhLWxpbnV4JztcclxuSWNvbnNbJ2xvY2snXSA9ICdmYXMsIGZhLWxvY2snO1xyXG5JY29uc1snbWFnaWMnXSA9ICdmYXMsIGZhLW1hZ2ljJztcclxuSWNvbnNbJ21hZ25ldCddID0gJ2ZhcywgZmEtbWFnbmV0JztcclxuSWNvbnNbJ21hbGUnXSA9ICdmYXMsIGZhLW1hbGUnO1xyXG5JY29uc1snbWFwJ10gPSAnZmFzLCBmYS1tYXAnO1xyXG5JY29uc1snbWljcm9waG9uZSddID0gJ2ZhcywgZmEtbWljcm9waG9uZSc7XHJcbkljb25zWydtb2JpbGUnXSA9ICdmYXMsIGZhLW1vYmlsZSc7XHJcbkljb25zWydtb25leSddID0gJ2ZhcywgZmEtbW9uZXknO1xyXG5JY29uc1snbW90b3JjeWNsZSddID0gJ2ZhcywgZmEtbW90b3JjeWNsZSc7XHJcbkljb25zWydtdXNpYyddID0gJ2ZhcywgZmEtbXVzaWMnO1xyXG5JY29uc1snb3BlcmEnXSA9ICdmYXMsIGZhLW9wZXJhJztcclxuSWNvbnNbJ3BhaW50LWJydXNoJ10gPSAnZmFzLCBmYS1wYWludC1icnVzaCc7XHJcbkljb25zWydwYXBlci1wbGFuZSddID0gJ2ZhcywgZmEtcGFwZXItcGxhbmUnO1xyXG5JY29uc1sncGF1c2UnXSA9ICdmYXMsIGZhLXBhdXNlJztcclxuSWNvbnNbJ3BhdyddID0gJ2ZhcywgZmEtcGF3JztcclxuSWNvbnNbJ3BheXBhbCddID0gJ2ZhcywgZmEtcGF5cGFsJztcclxuSWNvbnNbJ3BlbiddID0gJ2ZhcywgZmEtcGVuJztcclxuSWNvbnNbJ3BlbmNpbCddID0gJ2ZhcywgZmEtcGVuY2lsJztcclxuSWNvbnNbJ3Bob25lJ10gPSAnZmFzLCBmYS1waG9uZSc7XHJcbkljb25zWydwaG90byddID0gJ2ZhcywgZmEtcGhvdG8nO1xyXG5JY29uc1sncGludGVyZXN0J10gPSAnZmFzLCBmYS1waW50ZXJlc3QnO1xyXG5JY29uc1sncGxhbmUnXSA9ICdmYXMsIGZhLXBsYW5lJztcclxuSWNvbnNbJ3BsYXknXSA9ICdmYXMsIGZhLXBsYXknO1xyXG5JY29uc1sncGx1ZyddID0gJ2ZhcywgZmEtcGx1Zyc7XHJcbkljb25zWydwbHVzJ10gPSAnZmFzLCBmYS1wbHVzJztcclxuSWNvbnNbJ3BvZGNhc3QnXSA9ICdmYXMsIGZhLXBvZGNhc3QnO1xyXG5JY29uc1sncXVlc3Rpb24nXSA9ICdmYXMsIGZhLXF1ZXN0aW9uJztcclxuSWNvbnNbJ3F1b3JhJ10gPSAnZmFzLCBmYS1xdW9yYSc7XHJcbkljb25zWydyZWN5Y2xlJ10gPSAnZmFzLCBmYS1yZWN5Y2xlJztcclxuSWNvbnNbJ3JlZGRpdCddID0gJ2ZhcywgZmEtcmVkZGl0JztcclxuSWNvbnNbJ3JlZG8nXSA9ICdmYXMsIGZhLXJlZG8nO1xyXG5JY29uc1sncmVmcmVzaCddID0gJ2ZhcywgZmEtcmVmcmVzaCc7XHJcbkljb25zWydyZXBseSddID0gJ2ZhcywgZmEtcmVwbHknO1xyXG5JY29uc1sncmVzaXN0YW5jZSddID0gJ2ZhcywgZmEtcmVzaXN0YW5jZSc7XHJcbkljb25zWydyZXR3ZWV0J10gPSAnZmFzLCBmYS1yZXR3ZWV0JztcclxuSWNvbnNbJ3JvYWQnXSA9ICdmYXMsIGZhLXJvYWQnO1xyXG5JY29uc1sncm9ja2V0J10gPSAnZmFzLCBmYS1yb2NrZXQnO1xyXG5JY29uc1sncnNzJ10gPSAnZmFzLCBmYS1yc3MnO1xyXG5JY29uc1snc2FmYXJpJ10gPSAnZmFzLCBmYS1zYWZhcmknO1xyXG5JY29uc1snc2NyaWJlJ10gPSAnZmFzLCBmYS1zY3JpYmUnO1xyXG5JY29uc1snc2VhcmNoJ10gPSAnZmFzLCBmYS1zZWFyY2gnO1xyXG5JY29uc1snc2VuZCddID0gJ2ZhcywgZmEtc2VuZCc7XHJcbkljb25zWydzZXJ2ZXInXSA9ICdmYXMsIGZhLXNlcnZlcic7XHJcbkljb25zWydzaGlwJ10gPSAnZmFzLCBmYS1zaGlwJztcclxuSWNvbnNbJ3NpZ24taW4nXSA9ICdmYXMsIGZhLXNpZ24taW4nO1xyXG5JY29uc1snc2l0ZW1hcCddID0gJ2ZhcywgZmEtc2l0ZW1hcCc7XHJcbkljb25zWydza3lhdGxhcyddID0gJ2ZhcywgZmEtc2t5YXRsYXMnO1xyXG5JY29uc1snc2t5cGUnXSA9ICdmYXMsIGZhLXNreXBlJztcclxuSWNvbnNbJ3NsaWRlc2hhcmUnXSA9ICdmYXMsIGZhLXNsaWRlc2hhcmUnO1xyXG5JY29uc1snc25hcGNoYXQnXSA9ICdmYXMsIGZhLXNuYXBjaGF0JztcclxuSWNvbnNbJ3NvcnQnXSA9ICdmYXMsIGZhLXNvcnQnO1xyXG5JY29uc1snc291bmRjbG91ZCddID0gJ2ZhcywgZmEtc291bmRjbG91ZCc7XHJcbkljb25zWydzcG9vbiddID0gJ2ZhcywgZmEtc3Bvb24nO1xyXG5JY29uc1snc3BvdGlmeSddID0gJ2ZhcywgZmEtc3BvdGlmeSc7XHJcbkljb25zWydzcXVhcmUnXSA9ICdmYXMsIGZhLXNxdWFyZSc7XHJcbkljb25zWydzdGFjay1leGNoYW5nZSddID0gJ2ZhcywgZmEtc3RhY2stZXhjaGFuZ2UnO1xyXG5JY29uc1snc3RhciddID0gJ2ZhcywgZmEtc3Rhcic7XHJcbkljb25zWydzdGVhbSddID0gJ2ZhcywgZmEtc3RlYW0nO1xyXG5JY29uc1snc3RpY2t5LW5vdGUnXSA9ICdmYXMsIGZhLXN0aWNreS1ub3RlJztcclxuSWNvbnNbJ3N0b3AnXSA9ICdmYXMsIGZhLXN0b3AnO1xyXG5JY29uc1snc3RyZWV0LXZpZXcnXSA9ICdmYXMsIGZhLXN0cmVldC12aWV3JztcclxuSWNvbnNbJ3N1YndheSddID0gJ2ZhcywgZmEtc3Vid2F5JztcclxuSWNvbnNbJ3N1aXRjYXNlJ10gPSAnZmFzLCBmYS1zdWl0Y2FzZSc7XHJcbkljb25zWydzdXBwb3J0J10gPSAnZmFzLCBmYS1zdXBwb3J0JztcclxuSWNvbnNbJ3Rhc2tzJ10gPSAnZmFzLCBmYS10YXNrcyc7XHJcbkljb25zWyd0YXhpJ10gPSAnZmFzLCBmYS10YXhpJztcclxuSWNvbnNbJ3RlbGVncmFtJ10gPSAnZmFzLCBmYS10ZWxlZ3JhbSc7XHJcbkljb25zWyd0ZWxldmlzaW9uJ10gPSAnZmFzLCBmYS10ZWxldmlzaW9uJztcclxuSWNvbnNbJ3Rlcm1pbmFsJ10gPSAnZmFzLCBmYS10ZXJtaW5hbCc7XHJcbkljb25zWyd0aGVybW9tZXRlciddID0gJ2ZhcywgZmEtdGhlcm1vbWV0ZXInO1xyXG5JY29uc1sndGlja2V0J10gPSAnZmFzLCBmYS10aWNrZXQnO1xyXG5JY29uc1sndGltZXMnXSA9ICdmYXMsIGZhLXRpbWVzJztcclxuSWNvbnNbJ3RyYWluJ10gPSAnZmFzLCBmYS10cmFpbic7XHJcbkljb25zWyd0cmFzaCddID0gJ2ZhcywgZmEtdHJhc2gnO1xyXG5JY29uc1sndHJlZSddID0gJ2ZhcywgZmEtdHJlZSc7XHJcbkljb25zWyd0cm9waHknXSA9ICdmYXMsIGZhLXRyb3BoeSc7XHJcbkljb25zWyd0cnVjayddID0gJ2ZhcywgZmEtdHJ1Y2snO1xyXG5JY29uc1sndHVtYmxyJ10gPSAnZmFzLCBmYS10dW1ibHInO1xyXG5JY29uc1sndHYnXSA9ICdmYXMsIGZhLXR2JztcclxuSWNvbnNbJ3R3aXR0ZXInXSA9ICdmYXMsIGZhLXR3aXR0ZXInO1xyXG5JY29uc1sndW1icmVsbGEnXSA9ICdmYXMsIGZhLXVtYnJlbGxhJztcclxuSWNvbnNbJ3VuaXZlcnNpdHknXSA9ICdmYXMsIGZhLXVuaXZlcnNpdHknO1xyXG5JY29uc1sndW5sb2NrJ10gPSAnZmFzLCBmYS11bmxvY2snO1xyXG5JY29uc1sndXBsb2FkJ10gPSAnZmFzLCBmYS11cGxvYWQnO1xyXG5JY29uc1sndXNiJ10gPSAnZmFzLCBmYS11c2InO1xyXG5JY29uc1sndXNlciddID0gJ2ZhcywgZmEtdXNlcic7XHJcbkljb25zWyd2aWRlby1jYW1lcmEnXSA9ICdmYXMsIGZhLXZpZGVvLWNhbWVyYSc7XHJcbkljb25zWyd2aW1lbyddID0gJ2ZhcywgZmEtdmltZW8nO1xyXG5JY29uc1snd2FybmluZyddID0gJ2ZhcywgZmEtd2FybmluZyc7XHJcbkljb25zWyd3ZWNoYXQnXSA9ICdmYXMsIGZhLXdlY2hhdCc7XHJcbkljb25zWyd3ZWlibyddID0gJ2ZhcywgZmEtd2VpYm8nO1xyXG5JY29uc1snd2hhdHNhcHAnXSA9ICdmYXMsIGZhLXdoYXRzYXBwJztcclxuSWNvbnNbJ3doZWVsY2hhaXInXSA9ICdmYXMsIGZhLXdoZWVsY2hhaXInO1xyXG5JY29uc1snd2lmaSddID0gJ2ZhcywgZmEtd2lmaSc7XHJcbkljb25zWyd3aWtpcGVkaWEtdyddID0gJ2ZhcywgZmEtd2lraXBlZGlhLXcnO1xyXG5JY29uc1snd29yZHByZXNzJ10gPSAnZmFzLCBmYS13b3JkcHJlc3MnO1xyXG5JY29uc1sneWVscCddID0gJ2ZhcywgZmEteWVscCc7XHJcbkljb25zWyd5b2FzdCddID0gJ2ZhcywgZmEteW9hc3QnO1xyXG5JY29uc1sneW91dHViZSddID0gJ2ZhcywgZmEteW91dHViZSc7XHJcbkljb25zWyd1bmRvJ10gPSAnZmFzLCBmYS11bmRvJztcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEljb25zOyIsImNvbnN0IEJhc2UgPSByZXF1aXJlKCcuL2NsYXNzZXMvQmFzZScpO1xyXG5jb25zdCBDb21wb25lbnRzID0gcmVxdWlyZSgnLi9jbGFzc2VzL0NvbXBvbmVudHMnKTtcclxuY29uc3QgRnVuYyA9IHJlcXVpcmUoJy4vY2xhc3Nlcy9GdW5jJyk7XHJcbmNvbnN0IEpTRWxlbWVudHMgPSByZXF1aXJlKCcuL2NsYXNzZXMvSlNFbGVtZW50cycpO1xyXG5jb25zdCBNYXRyaXggPSByZXF1aXJlKCcuL2NsYXNzZXMvTWF0cml4Jyk7XHJcbmNvbnN0IE5ldXJhbE5ldHdvcmsgPSByZXF1aXJlKCcuL2NsYXNzZXMvTmV1cmFsTmV0d29yaycpO1xyXG5jb25zdCBQZXJpb2QgPSByZXF1aXJlKCcuL2NsYXNzZXMvUGVyaW9kJyk7XHJcbmNvbnN0IFRlbXBsYXRlID0gcmVxdWlyZSgnLi9jbGFzc2VzL1RlbXBsYXRlJyk7XHJcbmNvbnN0IFRyZWUgPSByZXF1aXJlKCcuL2NsYXNzZXMvVHJlZScpO1xyXG5jb25zdCBBcHBMaWJyYXJ5ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvQXBwTGlicmFyeScpO1xyXG5jb25zdCBBbmFseXNpc0xpYnJhcnkgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9BbmFseXNpc0xpYnJhcnknKTtcclxuY29uc3QgQXJyYXlMaWJyYXJ5ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvQXJyYXlMaWJyYXJ5Jyk7XHJcbmNvbnN0IENvbXByZXNzaW9uID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvQ29tcHJlc3Npb24nKTtcclxuY29uc3QgTWF0aHNMaWJyYXJ5ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvTWF0aHNMaWJyYXJ5Jyk7XHJcbmNvbnN0IFNoYWRvdyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL1NoYWRvdycpO1xyXG5jb25zdCBPYmplY3RzTGlicmFyeSA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zL09iamVjdHNMaWJyYXJ5Jyk7XHJcbmNvbnN0IEluZGV4ZWRMaWJyYXJ5ID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMvSW5kZXhlZExpYnJhcnknKTtcclxuY29uc3QgQ29sb3JQaWNrZXIgPSByZXF1aXJlKCcuL2Z1bmN0aW9ucy9Db2xvclBpY2tlcicpO1xyXG5jb25zdCBJY29ucyA9IHJlcXVpcmUoJy4vSWNvbnMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQmFzZSxcclxuICAgIEZ1bmMsXHJcbiAgICBOZXVyYWxOZXR3b3JrLFxyXG4gICAgTWF0cml4LFxyXG4gICAgVGVtcGxhdGUsXHJcbiAgICBDb21wb25lbnRzLFxyXG4gICAgQ29tcHJlc3Npb24sXHJcbiAgICBDb2xvclBpY2tlcixcclxuICAgIEluZGV4ZWRMaWJyYXJ5LFxyXG4gICAgQXBwTGlicmFyeSxcclxuICAgIEFycmF5TGlicmFyeSxcclxuICAgIEFuYWx5c2lzTGlicmFyeSxcclxuICAgIE9iamVjdHNMaWJyYXJ5LFxyXG4gICAgTWF0aHNMaWJyYXJ5LFxyXG4gICAgU2hhZG93LFxyXG4gICAgVHJlZSxcclxuICAgIFBlcmlvZCxcclxuICAgIEpTRWxlbWVudHMsXHJcbiAgICBJY29uc1xyXG59XHJcbiIsImNvbnN0IENvbXBvbmVudHMgPSByZXF1aXJlKCcuL0NvbXBvbmVudHMnKTtcclxuY29uc3QgQ29sb3JQaWNrZXIgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvQ29sb3JQaWNrZXInKTtcclxuY29uc3QgQXJyYXlMaWJyYXJ5ID0gcmVxdWlyZSgnLi8uLi9mdW5jdGlvbnMvQXJyYXlMaWJyYXJ5Jyk7XHJcbmNvbnN0IE9iamVjdHNMaWJyYXJ5ID0gcmVxdWlyZSgnLi8uLi9mdW5jdGlvbnMvT2JqZWN0c0xpYnJhcnknKTtcclxuY29uc3QgSWNvbnMgPSByZXF1aXJlKCcuLy4uL0ljb25zJyk7XHJcblxyXG5jbGFzcyBFbXB0eSB7XHJcbn1cclxuXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRoZVdpbmRvdyA9IEVtcHR5KSB7XHJcbiAgICAgICAgc3VwZXIodGhlV2luZG93KTtcclxuICAgICAgICB0aGlzLmNvbG9ySGFuZGxlciA9IG5ldyBDb2xvclBpY2tlcigpO1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSAgbmV3IEFycmF5TGlicmFyeSgpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gbmV3IE9iamVjdHNMaWJyYXJ5KCk7XHJcbiAgICAgICAgdGhpcy5pY29ucyA9IEljb25zO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2U7XHJcbiIsImNvbnN0IFRlbXBsYXRlID0gcmVxdWlyZSgnLi9UZW1wbGF0ZScpO1xyXG5jbGFzcyBFbXB0eSB7XHJcbn1cclxuXHJcbmNsYXNzIENvbXBvbmVudHMgZXh0ZW5kcyBUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aGVXaW5kb3cgPSBFbXB0eSkge1xyXG4gICAgICAgIHN1cGVyKHRoZVdpbmRvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGFiKHBhcmFtcyA9IHsgdGl0bGVzOiBbXSB9KSB7XHJcbiAgICAgICAgdmFyIHRhYlRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ3VsJywgYXR0cmlidXRlczogeyBjbGFzczogJ3RhYicgfSB9KTtcclxuICAgICAgICBwYXJhbXMudmlldy5hcHBlbmQodGFiVGl0bGUpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpIG9mIHBhcmFtcy50aXRsZXMpIHtcclxuICAgICAgICAgICAgdGFiVGl0bGUuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpJywgYXR0cmlidXRlczogeyBjbGFzczogJ3RhYi10aXRsZScgfSwgdGV4dDogaSB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJUaXRsZS5maW5kQWxsKCdsaScpLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdGhpcy51cmxTcGxpdHRlcihsb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgICAgIHVybC52YXJzLnRhYiA9IG5vZGUudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5yZW5kZXIoeyB1cmw6ICc/JyArIHRoaXMudXJsU3BsaXR0ZXIodGhpcy51cmxNZXJnZXIodXJsLCAndGFiJykpLnF1ZXJpZXMgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjZWxsKHBhcmFtcyA9IHsgZWxlbWVudDogJ2lucHV0JywgYXR0cmlidXRlczoge30sIG5hbWU6ICcnLCBkYXRhQXR0cmlidXRlczoge30sIHZhbHVlOiAnJywgdGV4dDogJycsIGh0bWw6ICcnLCBlZGl0OiAnJyB9KSB7XHJcbiAgICAgICAgLy9zZXQgdGhlIGNlbGwtZGF0YSBpZFxyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuc3RyaW5nUmVwbGFjZShwYXJhbXMubmFtZSwgJyAnLCAnLScpICsgJy1jZWxsJztcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdGhlIGNlbGwgbGFiZWxcclxuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnbGFiZWwnLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAnY2VsbC1sYWJlbCcgfSwgdGV4dDogcGFyYW1zLm5hbWUgfSk7XHJcblxyXG4gICAgICAgIC8vY2VsbCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgcGFyYW1zLmF0dHJpYnV0ZXMgPSAodGhpcy5pc3NldChwYXJhbXMuYXR0cmlidXRlcykpID8gcGFyYW1zLmF0dHJpYnV0ZXMgOiB7fTtcclxuXHJcbiAgICAgICAgLy9jZWxsIGRhdGEgYXR0cmlidXRlc1xyXG4gICAgICAgIHBhcmFtcy5kYXRhQXR0cmlidXRlcyA9ICh0aGlzLmlzc2V0KHBhcmFtcy5kYXRhQXR0cmlidXRlcykpID8gcGFyYW1zLmRhdGFBdHRyaWJ1dGVzIDoge307XHJcbiAgICAgICAgcGFyYW1zLmRhdGFBdHRyaWJ1dGVzLmlkID0gaWQ7XHJcblxyXG4gICAgICAgIHZhciBjb21wb25lbnRzO1xyXG5cclxuICAgICAgICAvL3NldCB0aGUgcHJvcGVydGllcyBvZiBjZWxsIGRhdGFcclxuICAgICAgICBpZiAocGFyYW1zLmVsZW1lbnQgPT0gJ3NlbGVjdCcpIHsvL2NoZWNrIGlmIGNlbGwgZGF0YSBpcyBpbiBzZWxlY3QgZWxlbWVudFxyXG4gICAgICAgICAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogcGFyYW1zLmVsZW1lbnQsIGF0dHJpYnV0ZXM6IHBhcmFtcy5kYXRhQXR0cmlidXRlcywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdvcHRpb24nLCBhdHRyaWJ1dGVzOiB7IGRpc2FibGVkOiAnJywgc2VsZWN0ZWQ6ICcnIH0sIHRleHQ6IGBTZWxlY3QgJHtwYXJhbXMubmFtZX1gLCB2YWx1ZTogJycgfS8vc2V0IHRoZSBkZWZhdWx0IG9wdGlvblxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29tcG9uZW50cyA9IHsgZWxlbWVudDogcGFyYW1zLmVsZW1lbnQsIGF0dHJpYnV0ZXM6IHBhcmFtcy5kYXRhQXR0cmlidXRlcywgdGV4dDogcGFyYW1zLnZhbHVlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3NldChwYXJhbXMudmFsdWUpKSBjb21wb25lbnRzLmF0dHJpYnV0ZXMudmFsdWUgPSBwYXJhbXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNzZXQocGFyYW1zLm9wdGlvbnMpKSBjb21wb25lbnRzLm9wdGlvbnMgPSBwYXJhbXMub3B0aW9ucztcclxuXHJcbiAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgaWYgKHBhcmFtcy5lbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICBkYXRhID0gcGFyYW1zLmVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5jcmVhdGVFbGVtZW50KGNvbXBvbmVudHMpOy8vY3JlYXRlIHRoZSBjZWxsLWRhdGFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGEuY2xhc3NMaXN0LmFkZCgnY2VsbC1kYXRhJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KHBhcmFtcy52YWx1ZSkpIGRhdGEudmFsdWUgPSBwYXJhbXMudmFsdWU7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIGNlbGwgZWxlbWVudFxyXG4gICAgICAgIGxldCBjZWxsID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2RpdicsIGF0dHJpYnV0ZXM6IHBhcmFtcy5hdHRyaWJ1dGVzLCBjaGlsZHJlbjogW2xhYmVsLCBkYXRhXSB9KTtcclxuXHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KHBhcmFtcy50ZXh0KSkgZGF0YS50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3NldChwYXJhbXMuaHRtbCkpIGRhdGEuaW5uZXJIVE1MID0gcGFyYW1zLmh0bWw7XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3NldChwYXJhbXMubGlzdCkpIHtcclxuICAgICAgICAgICAgY2VsbC5tYWtlRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnZGF0YWxpc3QnLCBhdHRyaWJ1dGVzOiB7IGlkOiBgJHtpZH0tbGlzdGAgfSwgb3B0aW9uczogcGFyYW1zLmxpc3Quc29ydCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCBgJHtpZH0tbGlzdGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVkaXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNzZXQocGFyYW1zLmVkaXQpKSB7XHJcbiAgICAgICAgICAgIGVkaXQgPSBjZWxsLm1ha2VFbGVtZW50KHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdpJywgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBgJHtwYXJhbXMuZWRpdH1gLCAnZGF0YS1pY29uJzogJ2ZhcywgZmEtcGVuJywgc3R5bGU6IHsgY3Vyc29yOiAncG9pbnRlcicsIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXByaW1hcnktY29sb3IpJywgd2lkdGg6ICcxZW0nLCBoZWlnaHQ6ICdhdXRvJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzBweCcsIHJpZ2h0OiAnMHB4JywgcGFkZGluZzogJy4xNWVtJyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjZWxsLmNzcyh7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2VsbC5tYWtlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdzdHlsZScsIHRleHQ6IGBcclxuICAgICAgICAuY2VsbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICAgICAgICBtYXJnaW46IC41ZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY2VsbDpob3ZlciwgLmNlbGw6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tcHJpbWFyeS1zaGFkb3cpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jZWxsLWxhYmVsIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY2VsbC1kYXRhe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY2VsbC1kYXRhOmhvdmVyLCAuY2VsbC1kYXRhOmZvY3VzIHtcclxuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICB9YH0pXHJcbiAgICAgICAgcmV0dXJuIGNlbGw7XHJcbiAgICB9XHJcblxyXG4gICAgbWVzc2FnZShwYXJhbXMgPSB7IGxpbms6ICcnLCB0ZXh0OiAnJywgdGVtcDogMCB9KSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAnYWxlcnQnIH0sIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnYScsIHRleHQ6IHBhcmFtcy50ZXh0LCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAndGV4dCcsIGhyZWY6IHBhcmFtcy5saW5rIH0gfSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdjbG9zZScgfSB9KVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KHBhcmFtcy50ZW1wKSkge1xyXG4gICAgICAgICAgICB2YXIgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZSk7XHJcbiAgICAgICAgICAgIH0sIChwYXJhbXMudGVtcCAhPSAnJykgPyBwYXJhbXMudGltZSAqIDEwMDAgOiA1MDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lLmZpbmQoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBtZS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYm9keS5maW5kKCcjbm90aWZpY2F0aW9uLWJsb2NrJykuYXBwZW5kKG1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYWJsZShwYXJhbXMgPSB7IHRpdGxlOiAnJywgY29udGVudHM6IHt9LCBwcm9qZWN0aW9uOiB7fSwgcmVuYW1lOiB7fSwgc29ydDogZmFsc2UsIHNlYXJjaDogZmFsc2UsIGZpbHRlcjogW10gfSkge1xyXG4gICAgICAgIC8vY3JlYXRlIHRoZSB0YWJsZSBlbGVtZW50ICAgXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBbXSwvL3RoZSBoZWFkZXJzXHJcbiAgICAgICAgICAgIGNvbHVtbnMgPSB7fSxcclxuICAgICAgICAgICAgY29sdW1uQ291bnQgPSAwLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICB0YWJsZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ2RpdicsIGF0dHJpYnV0ZXM6IHBhcmFtcy5hdHRyaWJ1dGVzIH1cclxuICAgICAgICAgICAgKTsvL2NyZWF0ZSB0aGUgdGFibGUgXHJcblxyXG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ2tlZGlvLXRhYmxlJyk7Ly9hZGQgdGFibGUgdG8gdGhlIGNsYXNzXHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbnRlbnQgb2YgcGFyYW1zLmNvbnRlbnRzKSB7Ly9sb29wIHRocm91Z2ggdGhlIGpzb24gYXJyYXlcclxuICAgICAgICAgICAgaSA9IHBhcmFtcy5jb250ZW50cy5pbmRleE9mKGNvbnRlbnQpOy8vZ2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcm93XHJcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gY29udGVudCkgey8vbG9vcCB0aHJvdWdoIHRoZSByb3dcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzLmluZGV4T2YobmFtZSkgPT0gLTEpIHsvL2FkZCB0byBoZWFkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnNbbmFtZV0gPSB0YWJsZS5tYWtlRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdjb2x1bW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tdGFibGUtY29sdW1uJywgJ2RhdGEtbmFtZSc6IG5hbWUgfSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby10YWJsZS1jb2x1bW4tdGl0bGUnLCAnZGF0YS1uYW1lJzogbmFtZSB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdwJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLXRhYmxlLWNvbHVtbi10aXRsZS10ZXh0JyB9LCB0ZXh0OiBuYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLXRhYmxlLWNvbHVtbi1jb250ZW50cycgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNzZXQocGFyYW1zLnNvcnQpKSB7Ly9tYWtlIHNvcnRhYmxlIGlmIG5lZWRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zW25hbWVdLmZpbmQoJy5rZWRpby10YWJsZS1jb2x1bW4tdGl0bGUnKS5tYWtlRWxlbWVudCh7IGVsZW1lbnQ6ICdpJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLXRhYmxlLWNvbHVtbi10aXRsZS1zb3J0JywgJ2RhdGEtaWNvbic6ICdmYXMsIGZhLWFycm93LWRvd24nIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJhbXMucHJvamVjdGlvbiA9IHBhcmFtcy5wcm9qZWN0aW9uIHx8IHt9O1xyXG5cclxuICAgICAgICBsZXQgaGlkZSA9IE9iamVjdC52YWx1ZXMocGFyYW1zLnByb2plY3Rpb24pLmluY2x1ZGVzKDEpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBoZWFkZXJzKSB7Ly9sb29wIHRocm91Z2ggdGhlIGhlYWRlcnMgYW5kIGFkZCB0aGUgY29udGVudHMgXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbnRlbnQgb2YgcGFyYW1zLmNvbnRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gcGFyYW1zLmNvbnRlbnRzLmluZGV4T2YoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zW25hbWVdLmZpbmQoJy5rZWRpby10YWJsZS1jb2x1bW4tY29udGVudHMnKS5tYWtlRWxlbWVudCh7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLXRhYmxlLWNvbHVtbi1jZWxsJywgJ2RhdGEtbmFtZSc6IG5hbWUsICdkYXRhLXZhbHVlJzogY29udGVudFtuYW1lXSB8fCAnJywgJ2RhdGEtcm93JzogaSB9LCBodG1sOiBjb250ZW50W25hbWVdIHx8ICcnIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnByb2plY3Rpb25bbmFtZV0gPT0gLTEgfHwgKGhpZGUgJiYgIXRoaXMuaXNzZXQocGFyYW1zLnByb2plY3Rpb25bbmFtZV0pKSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uc1tuYW1lXS5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29sdW1uQ291bnQrKzsvL2NvdW50IHRoZSBjb2x1bW4gbGVuZ3RoXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJsZS5jc3MoeyBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KCR7Y29sdW1uQ291bnR9LCAxZnIpYCB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRhYmxlQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KHsvL2NyZWF0ZSB0YWJsZSBjb250YWluZXIgYW5kIHRpdGxlXHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdkaXYnLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tdGFibGUtY29udGFpbmVyJyB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLXRhYmxlLXRpdGxlYW5kc2VhcmNoJyB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFibGVcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdGl0bGVDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KHBhcmFtcy50aXRsZSkpIHsvLyBjcmVhdGUgdGhlIHRpdGxlIHRleHQgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgIHRhYmxlQ29udGFpbmVyLmZpbmQoJy5rZWRpby10YWJsZS10aXRsZWFuZHNlYXJjaCcpLm1ha2VFbGVtZW50KHsgZWxlbWVudDogJ2g1JywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLXRhYmxlLXRpdGxlJyB9LCB0ZXh0OiBwYXJhbXMudGl0bGUgfSk7XHJcbiAgICAgICAgICAgIHRpdGxlQ291bnQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KHBhcmFtcy5zb3J0KSkgey8vIHNldCB0aGUgZGF0YSBmb3Igc29ydGluZ1xyXG4gICAgICAgICAgICB0YWJsZS5kYXRhc2V0LnNvcnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNzZXQocGFyYW1zLnNlYXJjaCkpIHsvLyBjcmVhdGUgdGhlIHNlYXJjaCBhcmVhXHJcbiAgICAgICAgICAgIHRhYmxlQ29udGFpbmVyLmZpbmQoJy5rZWRpby10YWJsZS10aXRsZWFuZHNlYXJjaCcpLm1ha2VFbGVtZW50KHsgZWxlbWVudDogJ2lucHV0JywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLXRhYmxlLXNlYXJjaCcsIHBsYWNlSG9sZGVyOiAnU2VhcmNoIHRhYmxlLi4uJyB9IH0pO1xyXG4gICAgICAgICAgICB0aXRsZUNvdW50Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3NldChwYXJhbXMuZmlsdGVyKSkgey8vY3JlYXRlIHRoZSBmaWx0ZXIgYXJlYVxyXG4gICAgICAgICAgICB0YWJsZUNvbnRhaW5lci5maW5kKCcua2VkaW8tdGFibGUtdGl0bGVhbmRzZWFyY2gnKS5tYWtlRWxlbWVudCh7IGVsZW1lbnQ6ICdzZWxlY3QnLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tdGFibGUtZmlsdGVyJyB9LCBvcHRpb25zOiBwYXJhbXMuZmlsdGVyIH0pO1xyXG4gICAgICAgICAgICB0aXRsZUNvdW50Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyYW1zLmNvbnRlbnRzLmxlbmd0aCA9PSAwKSB7Ly8gTm90aWZ5IGlmIHRhYmxlIGlzIGVtcHR5XHJcbiAgICAgICAgICAgIHRhYmxlLnRleHRDb250ZW50ID0gJ0VtcHR5IFRhYmxlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhYmxlQ29udGFpbmVyLm1ha2VFbGVtZW50KFxyXG4gICAgICAgICAgICBbey8vIGFycmFuZ2UgdGhlIHRhYmxlIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3R5bGUnLCB0ZXh0OiBgXHJcbiAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAua2VkaW8tdGFibGUtdGl0bGVhbmRzZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke3RpdGxlQ291bnR9LCAxZnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICBgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ3N0eWxlJywgdGV4dDogYC5rZWRpby10YWJsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogdmFyKC0tbWF0Y2gtcGFyZW50KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMGVtIDFlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1maWxsLXBhcmVudCk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUtdGl0bGVhbmRzZWFyY2gge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5rZWRpby10YWJsZS1zZWFyY2gge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1tYXRjaC1wYXJlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUtZmlsdGVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogdmFyKC0tbWF0Y2gtcGFyZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmtlZGlvLXRhYmxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgd2lkdGg6IHZhcigtLW1hdGNoLXBhcmVudCk7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmtlZGlvLXRhYmxlIC5rZWRpby10YWJsZS1jb2x1bW57XHJcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tZmlsbC1wYXJlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUgLmtlZGlvLXRhYmxlLWNvbHVtbi10aXRsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB3aWR0aDogdmFyKC0tbWF0Y2gtcGFyZW50KTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xyXG4gICAgICAgICAgICBnYXA6IC41ZW07XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUgLmtlZGlvLXRhYmxlLWNvbHVtbi10aXRsZS10ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmtlZGlvLXRhYmxlIC5rZWRpby10YWJsZS1jb2x1bW4tdGl0bGUtc29ydHtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmtlZGlvLXRhYmxlIC5rZWRpby10YWJsZS1jb2x1bW4tY29udGVudHN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdhcDogLjJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IHZhcigtLW1hdGNoLXBhcmVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5rZWRpby10YWJsZSAua2VkaW8tdGFibGUtY29sdW1uLWNlbGx7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1tYXRjaC1wYXJlbnQpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUgLmtlZGlvLXRhYmxlLWNvbHVtbi1jZWxsOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5rZWRpby10YWJsZSAua2VkaW8tdGFibGUtY29sdW1uLWNlbGw6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmtlZGlvLXRhYmxlIGE6dmlzaXRlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NpZW50LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmtlZGlvLXRhYmxlLWNlbGwgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogdmFyKC0tZmlsbC1wYXJlbnQpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWZpbGwtcGFyZW50KTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjaWVudC1jb2xvcik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUtY2VsbCBhOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5rZWRpby10YWJsZSAua2VkaW8tdGFibGUtY29sdW1uLWNlbGwua2VkaW8tdGFibGUtc2VsZWN0ZWQtcm93IHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2llbnQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUtb3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NpZW50LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAua2VkaW8tdGFibGUtb3B0aW9ucyAua2VkaW8tdGFibGUtb3B0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmtlZGlvLXRhYmxlLW9wdGlvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YWJsZUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWJsZURhdGEodGFibGUpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCBjZWxscyA9IHRhYmxlLmZpbmRBbGwoJy5rZWRpby10YWJsZS1jb2x1bW4tY2VsbCcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB7IG5hbWUsIHZhbHVlLCByb3cgfSA9IGNlbGxzW2ldLmRhdGFzZXQ7XHJcbiAgICAgICAgICAgIGRhdGFbcm93XSA9IGRhdGFbcm93XSB8fCB7fTtcclxuICAgICAgICAgICAgZGF0YVtyb3ddW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0VGFibGUodGFibGUsIGJ5ID0gJycsIGRpcmVjdGlvbiA9IDEpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0VGFibGVEYXRhKHRhYmxlKTtcclxuXHJcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGEgPSBhW2J5XTtcclxuICAgICAgICAgICAgYiA9IGJbYnldO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNOdW1iZXIoYSkgJiYgdGhpcy5pc051bWJlcihiKSkge1xyXG4gICAgICAgICAgICAgICAgYSA9IGEgLyAxO1xyXG4gICAgICAgICAgICAgICAgYiA9IGIgLyAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhID4gYiA/IDEgOiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhID4gYiA/IC0xIDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlblRhYmxlKHBhcmFtcyA9IHsgdGFibGU6IHt9LCBvcHRpb25zOiBbXSB9LCBjYWxsYmFja3MgPSB7IGNsaWNrOiAoKSA9PiB7IH0sIGZpbHRlcjogKCkgPT4geyB9IH0pIHtcclxuICAgICAgICBwYXJhbXMub3B0aW9ucyA9IHBhcmFtcy5vcHRpb25zIHx8IFtdO1xyXG4gICAgICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcyB8fCBbXTtcclxuICAgICAgICBsZXQgdGFibGUgPSBwYXJhbXMudGFibGUuZmluZCgnLmtlZGlvLXRhYmxlJyk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tdGFibGUtb3B0aW9ucycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbGlzdCA9IHtcclxuICAgICAgICAgICAgdmlldzogJ2ZhcyBmYS1leWUnLFxyXG4gICAgICAgICAgICBkZWxldGU6ICdmYXMgZmEtdHJhc2gnLFxyXG4gICAgICAgICAgICBlZGl0OiAnZmFzIGZhLXBlbicsXHJcbiAgICAgICAgICAgIHJldmVydDogJ2ZhcyBmYS1oaXN0b3J5J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbkNsYXNzO1xyXG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiBwYXJhbXMub3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHRpb25DbGFzcyA9IGxpc3Rbb3B0aW9uXSB8fCBgZmFzIGZhLSR7b3B0aW9ufWA7XHJcbiAgICAgICAgICAgIGxldCBhbk9wdGlvbiA9IG9wdGlvbnMubWFrZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ2knLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiBvcHRpb25DbGFzcyArICcga2VkaW8tdGFibGUtb3B0aW9uJywgaWQ6ICdrZWRpby10YWJsZS1vcHRpb24tJyArIG9wdGlvbiB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhYmxlVGl0bGVzID0gdGFibGUuZmluZEFsbCgnLmtlZGlvLXRhYmxlLWNvbHVtbi10aXRsZScpO1xyXG4gICAgICAgIGxldCB0YWJsZUNvbHVtbnMgPSB0YWJsZS5maW5kQWxsKCcua2VkaW8tdGFibGUtY29sdW1uJyk7XHJcbiAgICAgICAgbGV0IHJvd3MgPSBbXTtcclxuICAgICAgICBsZXQgZmlyc3RDb2x1bW4gPSB0YWJsZUNvbHVtbnNbMF07XHJcbiAgICAgICAgbGV0IGZpcnN0VmlzaWJsZUNvbHVtbjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNudWxsKGZpcnN0Q29sdW1uKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlQ29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGFibGVDb2x1bW5zW2ldLmNzcygpLmRpc3BsYXkgIT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdFZpc2libGVDb2x1bW4gPSB0YWJsZUNvbHVtbnNbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZpcnN0Q2VsbHMgPSBmaXJzdENvbHVtbi5maW5kQWxsKCcua2VkaW8tdGFibGUtY29sdW1uLWNlbGwnKTtcclxuICAgICAgICBsZXQgZmlyc3RWaXNpYmxlQ2VsbHMgPSBmaXJzdFZpc2libGVDb2x1bW4uZmluZEFsbCgnLmtlZGlvLXRhYmxlLWNvbHVtbi1jZWxsJyk7XHJcblxyXG4gICAgICAgIGxldCB0YWJsZVJvdztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaXJzdENlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJvd3MucHVzaChmaXJzdENlbGxzW2ldLmRhdGFzZXQucm93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMudGFibGUuZmluZCgnLmtlZGlvLXRhYmxlJykuZGF0YXNldC5zb3J0ID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlVGl0bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZVRpdGxlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlVGl0bGVzW2ldLmZpbmQoJy5rZWRpby10YWJsZS1jb2x1bW4tdGl0bGUtc29ydCcpLmNzcyh7IGRpc3BsYXk6ICd1bnNldCcgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0YWJsZVRpdGxlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlVGl0bGVzW2ldLmZpbmQoJy5rZWRpby10YWJsZS1jb2x1bW4tdGl0bGUtc29ydCcpLmNzcyh7IGRpc3BsYXk6ICdub25lJyB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRhYmxlVGl0bGVzW2ldLmZpbmQoJy5rZWRpby10YWJsZS1jb2x1bW4tdGl0bGUtc29ydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVUaXRsZXNbaV0uZmluZCgnLmtlZGlvLXRhYmxlLWNvbHVtbi10aXRsZS1zb3J0JykudG9nZ2xlQ2xhc3NlcygnZmFzLCBmYS1hcnJvdy11cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlVGl0bGVzW2ldLmZpbmQoJy5rZWRpby10YWJsZS1jb2x1bW4tdGl0bGUtc29ydCcpLnRvZ2dsZUNsYXNzZXMoJ2ZhcywgZmEtYXJyb3ctZG93bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZVRpdGxlc1tpXS5maW5kKCcua2VkaW8tdGFibGUtY29sdW1uLXRpdGxlLXNvcnQnKS5kYXRhc2V0LmRpcmVjdGlvbiA9PSAndXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlVGl0bGVzW2ldLmZpbmQoJy5rZWRpby10YWJsZS1jb2x1bW4tdGl0bGUtc29ydCcpLmRhdGFzZXQuZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVUaXRsZXNbaV0uZmluZCgnLmtlZGlvLXRhYmxlLWNvbHVtbi10aXRsZS1zb3J0JykuZGF0YXNldC5kaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gdGFibGVUaXRsZXNbaV0uZmluZCgnLmtlZGlvLXRhYmxlLWNvbHVtbi10aXRsZS10ZXh0JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5zb3J0VGFibGUocGFyYW1zLnRhYmxlLmZpbmQoJy5rZWRpby10YWJsZScpLCB0ZXh0LCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdUYWJsZSA9IHRoaXMuY3JlYXRlVGFibGUoeyBjb250ZW50czogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RhYmxlQ29sdW1ucyA9IG5ld1RhYmxlLmZpbmRBbGwoJy5rZWRpby10YWJsZS1jb2x1bW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld1RhYmxlQ29sdW1ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNvbHVtbnNbal0uZmluZCgnLmtlZGlvLXRhYmxlLWNvbHVtbi1jb250ZW50cycpLmlubmVySFRNTCA9IG5ld1RhYmxlQ29sdW1uc1tqXS5maW5kKCcua2VkaW8tdGFibGUtY29sdW1uLWNvbnRlbnRzJykuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDb2x1bW5zID0gdGFibGUuZmluZEFsbCgnLmtlZGlvLXRhYmxlLWNvbHVtbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc251bGwocGFyYW1zLnRhYmxlLmZpbmQoJy5rZWRpby10YWJsZS1zZWFyY2gnKSkpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnRhYmxlLmZpbmQoJy5rZWRpby10YWJsZS1zZWFyY2gnKS5vbkNoYW5nZWQodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzbnVsbChwYXJhbXMudGFibGUuZmluZCgnLmtlZGlvLXRhYmxlLWZpbHRlcicpKSkge1xyXG4gICAgICAgICAgICBwYXJhbXMudGFibGUuZmluZCgnLmtlZGlvLXRhYmxlLWZpbHRlcicpLm9uQ2hhbmdlZCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VhcmNoVmFsdWUsIGZpbHRlclZhbHVlO1xyXG5cclxuICAgICAgICBsZXQgZmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNudWxsKHBhcmFtcy50YWJsZS5maW5kKCcua2VkaW8tdGFibGUtc2VhcmNoJykpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZSA9IHBhcmFtcy50YWJsZS5maW5kKCcua2VkaW8tdGFibGUtc2VhcmNoJykudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc251bGwocGFyYW1zLnRhYmxlLmZpbmQoJy5rZWRpby10YWJsZS1maWx0ZXInKSkpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlclZhbHVlID0gcGFyYW1zLnRhYmxlLmZpbmQoJy5rZWRpby10YWJsZS1maWx0ZXInKS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGFibGVSb3cgPSB0YWJsZS5maW5kQWxsKGAua2VkaW8tdGFibGUtY29sdW1uLWNlbGxbZGF0YS1yb3c9XCIke2l9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YWJsZVJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlUm93W2pdLmNzc1JlbW92ZShbJ2Rpc3BsYXknXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNzZXQoZmlsdGVyVmFsdWUpICYmIGhpZGUgPT0gZmFsc2UgJiYgdGhpcy5pc3NldChjYWxsYmFja3MuZmlsdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUgPSBjYWxsYmFja3MuZmlsdGVyKGZpbHRlclZhbHVlLCB0YWJsZVJvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNzZXQoc2VhcmNoVmFsdWUpICYmIGhpZGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhYmxlUm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZVJvd1tqXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFibGVSb3cubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVSb3dbal0uY3NzKHsgZGlzcGxheTogJ25vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNzZXQoY2FsbGJhY2tzLmNsaWNrKSkge1xyXG4gICAgICAgICAgICB0YWJsZS5hZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93biwgdG91Y2hzdGFydCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygna2VkaW8tdGFibGUtb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc3NldChjYWxsYmFja3MuY2xpY2spKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5jbGljayhldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygna2VkaW8tdGFibGUtY29sdW1uLWNlbGwnKSB8fCAhdGhpcy5pc251bGwodGFyZ2V0LmdldFBhcmVudHMoJy5rZWRpby10YWJsZS1jb2x1bW4tY2VsbCcpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygna2VkaW8tdGFibGUtY29sdW1uLWNlbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuZ2V0UGFyZW50cygnLmtlZGlvLXRhYmxlLWNvbHVtbi1jZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRhcmdldC5kYXRhc2V0LnJvdztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdFZpc2libGVDZWxsc1twb3NpdGlvbl0uY3NzKHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RWaXNpYmxlQ2VsbHNbcG9zaXRpb25dLmFwcGVuZChvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy50YWJsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2tlZGlvLXNlbGVjdGFibGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gdGFibGUuZmluZEFsbChgLmtlZGlvLXRhYmxlLWNvbHVtbi1jZWxsW2RhdGEtcm93PVwiJHtwb3NpdGlvbn1cIl1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdrZWRpby10YWJsZS1zZWxlY3RlZC1yb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZWRpby10YWJsZS1zZWxlY3RlZC1yb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0Q29sdW1uLmZpbmRBbGwoJy5rZWRpby10YWJsZS1zZWxlY3RlZC1yb3cnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy50YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdrZWRpby1zZWxlY3RhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGFibGUucHJlc3NlZChldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmR1cmF0aW9uID4gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2tlZGlvLXRhYmxlLWNvbHVtbi1jZWxsJykgfHwgIXRoaXMuaXNudWxsKHRhcmdldC5nZXRQYXJlbnRzKCcua2VkaW8tdGFibGUtY29sdW1uLWNlbGwnKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZWRpby10YWJsZS1jb2x1bW4tY2VsbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQuZ2V0UGFyZW50cygnLmtlZGlvLXRhYmxlLWNvbHVtbi1jZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGFyZ2V0LmRhdGFzZXQucm93O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0Q29sdW1uLmZpbmRBbGwoJy5rZWRpby10YWJsZS1zZWxlY3RlZC1yb3cnKS5sZW5ndGggPT0gMCAmJiAhcGFyYW1zLnRhYmxlLmNsYXNzTGlzdC5jb250YWlucygna2VkaW8tc2VsZWN0YWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMudGFibGUuY2xhc3NMaXN0LmFkZCgna2VkaW8tc2VsZWN0YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IHRhYmxlLmZpbmRBbGwoYC5rZWRpby10YWJsZS1jb2x1bW4tY2VsbFtkYXRhLXJvdz1cIiR7cG9zaXRpb259XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1tpXS5jbGFzc0xpc3QuYWRkKCdrZWRpby10YWJsZS1zZWxlY3RlZC1yb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGb3JtKHBhcmFtcyA9IHsgZWxlbWVudDogJycsIHRpdGxlOiAnJywgY29sdW1uczogMSwgY29udGVudHM6IHt9LCByZXF1aXJlZDogW10sIGJ1dHRvbnM6IHt9IH0pIHtcclxuICAgICAgICBsZXQgZm9ybSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHBhcmFtcy5lbGVtZW50IHx8ICdmb3JtJywgYXR0cmlidXRlczogcGFyYW1zLmF0dHJpYnV0ZXMsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdoMycsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby1mb3JtLXRpdGxlJyB9LCB0ZXh0OiBwYXJhbXMudGl0bGUgfSxcclxuICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ3NlY3Rpb24nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tZm9ybS1jb250ZW50cycsIHN0eWxlOiB7IGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoJHtwYXJhbXMuY29sdW1uc30sIDFmcilgIH0gfSB9LFxyXG4gICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnc2VjdGlvbicsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby1mb3JtLWJ1dHRvbnMnIH0gfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3R5bGUnLCB0ZXh0OiBgLmtlZGlvLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCBtaW4tY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLW1hdGNoLXBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1mb3JtLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMDVlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1mb3JtLWNvbnRlbnRze1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tZm9ybS1idXR0b25ze1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLWZvcm0tYnV0dG9ucyBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWZpbGwtcGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLWZvcm0tc2luZ2xlLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLWZvcm0tbm90ZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1mb3JtLWRhdGF7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuN2VtIC4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLWZvcm0tZGF0YTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tZm9ybS1yb3d7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLWZvcm0tcm93LWNvbnRlbnRze1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IC41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1mb3JtIC5jZWxsLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLWZvcm0gLmNlbGwtZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tZm9ybS1lcnJvcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2llbnQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5rZWRpby1mb3JtICNyZW1lbWJlci1tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdrZWRpby1mb3JtJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KHBhcmFtcy5wYXJlbnQpKSBwYXJhbXMucGFyZW50LmFwcGVuZChmb3JtKTtcclxuICAgICAgICBsZXQgbm90ZTtcclxuICAgICAgICBsZXQgZm9ybUNvbnRlbnRzID0gZm9ybS5maW5kKCcua2VkaW8tZm9ybS1jb250ZW50cycpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zLmNvbnRlbnRzKSB7XHJcbiAgICAgICAgICAgIG5vdGUgPSAodGhpcy5pc3NldChwYXJhbXMuY29udGVudHNba2V5XS5ub3RlKSkgPyBgKCR7cGFyYW1zLmNvbnRlbnRzW2tleV0ubm90ZX0pYCA6ICcnO1xyXG4gICAgICAgICAgICBsZXQgbGFibGVUZXh0ID0gcGFyYW1zLmNvbnRlbnRzW2tleV0ubGFiZWwgfHwgdGhpcy5jYW1lbENhc2VkVG9UZXh0KGtleSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgbGV0IGJsb2NrID0gZm9ybUNvbnRlbnRzLm1ha2VFbGVtZW50KHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdkaXYnLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tZm9ybS1zaW5nbGUtY29udGVudCcgfSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdsYWJlbCcsIGh0bWw6IGxhYmxlVGV4dCwgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLWZvcm0tbGFiZWwnLCBmb3I6IGtleS50b0xvd2VyQ2FzZSgpIH0gfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gYmxvY2subWFrZUVsZW1lbnQocGFyYW1zLmNvbnRlbnRzW2tleV0pO1xyXG4gICAgICAgICAgICBkYXRhLmNsYXNzTGlzdC5hZGQoJ2tlZGlvLWZvcm0tZGF0YScpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc3NldChwYXJhbXMuY29udGVudHNba2V5XS5ub3RlKSkgYmxvY2subWFrZUVsZW1lbnQoeyBlbGVtZW50OiAnc3BhbicsIHRleHQ6IHBhcmFtcy5jb250ZW50c1trZXldLm5vdGUsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby1mb3JtLW5vdGUnIH0gfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc3NldChwYXJhbXMucmVxdWlyZWQpICYmIHBhcmFtcy5yZXF1aXJlZC5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhcmFtcy5idXR0b25zKSB7XHJcbiAgICAgICAgICAgIGZvcm0uZmluZCgnLmtlZGlvLWZvcm0tYnV0dG9ucycpLm1ha2VFbGVtZW50KHBhcmFtcy5idXR0b25zW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybS5tYWtlRWxlbWVudCh7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLWZvcm0tZXJyb3InIH0sIHN0YXRlOiB7IG5hbWU6ICdlcnJvcicsIG93bmVyOiBgIyR7Zm9ybS5pZH1gIH0gfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIHBpY2tlcihwYXJhbXMgPSB7IHRpdGxlOiAnJywgY29udGVudHM6IFtdIH0sIGNhbGxiYWNrID0gKGV2ZW50KSA9PiB7IH0pIHtcclxuICAgICAgICBsZXQgcGlja2VyID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgZWxlbWVudDogJ2RpdicsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby1waWNrZXInIH0sIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdoMycsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby1waWNrZXItdGl0bGUnIH0sIHRleHQ6IHBhcmFtcy50aXRsZSB8fCAnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLXBpY2tlci1jb250ZW50cycgfSB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdzdHlsZScsIHRleHQ6IGAua2VkaW8tcGlja2VyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tZmlsbC1wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1maWxsLXBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1waWNrZXItY29udGVudHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tZmlsbC1wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1maWxsLXBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1waWNrZXItc2luZ2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb250ZW50IG9mIHBhcmFtcy5jb250ZW50cykge1xyXG4gICAgICAgICAgICBwaWNrZXIuZmluZCgnLmtlZGlvLXBpY2tlci1jb250ZW50cycpLm1ha2VFbGVtZW50KHsgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tcGlja2VyLXNpbmdsZScsICdkYXRhLW5hbWUnOiBjb250ZW50IH0sIHRleHQ6IGNvbnRlbnQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZWRpby1waWNrZXItc2luZ2xlJykpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LnRhcmdldC5kYXRhc2V0Lm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwaWNrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wVXAoY29udGVudCwgcGFyYW1zID0geyB0aXRsZTogJycsIGF0dHJpYnV0ZXM6IHt9IH0pIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gcGFyYW1zLmNvbnRhaW5lciB8fCBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIGxldCB0aXRsZSA9IHBhcmFtcy50aXRsZSB8fCAnJztcclxuXHJcbiAgICAgICAgcGFyYW1zLmF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyB8fCB7fTtcclxuICAgICAgICBwYXJhbXMuYXR0cmlidXRlcy5zdHlsZSA9IHBhcmFtcy5hdHRyaWJ1dGVzLnN0eWxlIHx8IHt9O1xyXG4gICAgICAgIHBhcmFtcy5hdHRyaWJ1dGVzLnN0eWxlLndpZHRoID0gcGFyYW1zLmF0dHJpYnV0ZXMuc3R5bGUud2lkdGggfHwgJzUwdncnO1xyXG4gICAgICAgIHBhcmFtcy5hdHRyaWJ1dGVzLnN0eWxlLmhlaWdodCA9IHBhcmFtcy5hdHRyaWJ1dGVzLnN0eWxlLmhlaWdodCB8fCAnNTB2aCc7XHJcblxyXG4gICAgICAgIGxldCBwb3BVcCA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdkaXYnLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tcG9wLXVwJyB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdkaXYnLCBhdHRyaWJ1dGVzOiB7IGlkOiAncG9wLXVwLXdpbmRvdycsIGNsYXNzOiAna2VkaW8tcG9wLXVwLXdpbmRvdycgfSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogJ2RpdicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdwb3AtdXAtbWVudScsIGNsYXNzOiAna2VkaW8tcG9wLXVwLW1lbnUnIH0sIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAncCcsIGF0dHJpYnV0ZXM6IHsgaWQ6ICcnLCBzdHlsZTogeyBjb2xvcjogJ2luaGVyaXQnLCBwYWRkaW5nOiAnMWVtJyB9IH0sIHRleHQ6IHRpdGxlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnaScsIGF0dHJpYnV0ZXM6IHsgaWQ6ICd0b2dnbGUtd2luZG93JywgY2xhc3M6ICdrZWRpby1wb3AtdXAtY29udHJvbCBmYXMgZmEtZXhwYW5kLWFsdCcgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ2knLCBhdHRyaWJ1dGVzOiB7IGlkOiAnY2xvc2Utd2luZG93JywgY2xhc3M6ICdrZWRpby1wb3AtdXAtY29udHJvbCBmYXMgZmEtdGltZXMnIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczogeyBpZDogJ3BvcC11cC1jb250ZW50JywgY2xhc3M6ICdrZWRpby1wb3AtdXAtY29udGVudCcgfSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdzdHlsZScsIHRleHQ6IGAua2VkaW8tcG9wLXVwIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tZmlsbC1wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tZmlsbC1wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1wb3AtdXAtd2luZG93IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tcG9wLXVwLW1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1wb3AtdXAtY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLXBvcC11cC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwb3BVcC5maW5kKCcjcG9wLXVwLXdpbmRvdycpLnNldEF0dHJpYnV0ZXMocGFyYW1zLmF0dHJpYnV0ZXMpO1xyXG5cclxuICAgICAgICBwb3BVcC5maW5kKCcjdG9nZ2xlLXdpbmRvdycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBwb3BVcC5maW5kKCcjdG9nZ2xlLXdpbmRvdycpLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWV4cGFuZC1hbHQnKTtcclxuICAgICAgICAgICAgcG9wVXAuZmluZCgnI3RvZ2dsZS13aW5kb3cnKS5jbGFzc0xpc3QudG9nZ2xlKCdmYS1jb21wcmVzcy1hbHQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb3BVcC5maW5kKCcjdG9nZ2xlLXdpbmRvdycpLmNsYXNzTGlzdC5jb250YWlucygnZmEtZXhwYW5kLWFsdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBwb3BVcC5maW5kKCcjcG9wLXVwLXdpbmRvdycpLmNzcyh7IGhlaWdodDogcGFyYW1zLmF0dHJpYnV0ZXMuc3R5bGUuaGVpZ2h0LCB3aWR0aDogcGFyYW1zLmF0dHJpYnV0ZXMuc3R5bGUud2lkdGggfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3BVcC5maW5kKCcjcG9wLXVwLXdpbmRvdycpLmNzcyh7IGhlaWdodDogJ3ZhcigtLWZpbGwtcGFyZW50KScsIHdpZHRoOiAndmFyKC0tZmlsbC1wYXJlbnQpJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwb3BVcC5maW5kKCcjY2xvc2Utd2luZG93JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHBvcFVwLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBvcFVwKTtcclxuICAgICAgICByZXR1cm4gcG9wVXA7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2VsZWN0KHBhcmFtcyA9IHsgdmFsdWU6ICcnLCBjb250ZW50czoge30sIG11bHRpcGxlOiBmYWxzZSB9KSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gW10sXHJcbiAgICAgICAgICAgIGFsbG93TmF2aWdhdGUgPSBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb24gPSAtMSxcclxuICAgICAgICAgICAgYWN0aXZlO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSB0aGUgZWxlbWVudFxyXG4gICAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczogcGFyYW1zLmF0dHJpYnV0ZXMsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tc2VsZWN0LWNvbnRyb2wnLCB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdpbnB1dCcsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby1zZWxlY3QtaW5wdXQnLCB2YWx1ZTogcGFyYW1zLnZhbHVlIHx8ICcnLCBpZ25vcmU6IHRydWUgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby1zZWxlY3QtdG9nZ2xlJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnaW5wdXQnLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tc2VsZWN0LXNlYXJjaCcsIHBsYWNlSG9sZGVyOiAnU2VhcmNoIG1lLi4uJywgaWdub3JlOiB0cnVlIH0gfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby1zZWxlY3QtY29udGVudHMnIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogJ3N0eWxlJywgdGV4dDogYC5rZWRpby1zZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLXNlbGVjdC1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tc2VsZWN0LWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1zZWxlY3Qtc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tbWF0Y2gtcGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tc2VsZWN0LXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjNlbTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLXNlbGVjdC1jb250ZW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWZpbGwtcGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLXNlbGVjdC1vcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tbWF0Y2gtcGFyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLXNlbGVjdC1vcHRpb246aG92ZXIsIC5rZWRpby1zZWxlY3QtYWN0aXZlLW9wdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2tlZGlvLXNlbGVjdCcpO1xyXG4gICAgICAgIGxldCBzZXRWYWx1ZSA9IHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgc2VsZWN0LnZhbHVlID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzbnVsbChzZXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgc2VsZWN0LnZhbHVlID0gdGhpcy5hcnJheS5maW5kQWxsKHNldFZhbHVlLnNwbGl0KCcsJyksIHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYudHJpbSgpICE9ICcnO1xyXG4gICAgICAgICAgICB9KTsvL3JlbW92ZSBhbGwgZW1wdHkgc3RyaW5nc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0LmRhdGFzZXQuYWN0aXZlID0gJ2ZhbHNlJztcclxuICAgICAgICAvL2dldCB0aGUgY29udGVudHNcclxuICAgICAgICBsZXQgY29udGVudHMgPSBzZWxlY3QuZmluZCgnLmtlZGlvLXNlbGVjdC1jb250ZW50cycpO1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHNlbGVjdC5maW5kKCcua2VkaW8tc2VsZWN0LWlucHV0Jyk7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9IHNlbGVjdC5maW5kKCcua2VkaW8tc2VsZWN0LXNlYXJjaCcpO1xyXG4gICAgICAgIGxldCB0b2dnbGUgPSBzZWxlY3QuZmluZCgnLmtlZGlvLXNlbGVjdC10b2dnbGUnKTtcclxuICAgICAgICBwYXJhbXMuY29udGVudHMgPSBwYXJhbXMuY29udGVudHMgfHwge307XHJcbiAgICAgICAgLy9wb3B1bGF0ZSB0aGUgZWxlbWVudCBjb250ZW50c1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtcy5jb250ZW50cykpIHsvL1R1cm4gY29udGVudHMgdG8gb2JqZWN0IGlmIGl0cyBhcnJheVxyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBwYXJhbXMuY29udGVudHM7XHJcbiAgICAgICAgICAgIHBhcmFtcy5jb250ZW50cyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29udGVudHNbaXRlbXNbaV1dID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gcGFyYW1zLmNvbnRlbnRzKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBjb250ZW50cy5tYWtlRWxlbWVudCh7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLXNlbGVjdC1vcHRpb24nLCB2YWx1ZTogaSB9IH0pO1xyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gcGFyYW1zLmNvbnRlbnRzW2ldO1xyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgdiBvZiBzZWxlY3QudmFsdWUpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgKz0gcGFyYW1zLmNvbnRlbnRzW3ZdO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9lbmFibGUgbXVsdGlwbGUgdmFsdWVzXHJcbiAgICAgICAgbGV0IHNpbmdsZSA9ICghdGhpcy5pc3NldChwYXJhbXMubXVsdGlwbGUpIHx8IHBhcmFtcy5tdWx0aXBsZSA9PSBmYWxzZSk7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gc2VsZWN0LmZpbmRBbGwoJy5rZWRpby1zZWxlY3Qtb3B0aW9uJyk7XHJcblxyXG4gICAgICAgIC8vc2VhcmNoIHRoZSBjb250ZW50c1xyXG4gICAgICAgIHNlYXJjaC5vbkNoYW5nZWQodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uc1tpXS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tpXS5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2ldLmNzc1JlbW92ZShbJ2Rpc3BsYXknXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9uYXZpZ2F0ZSB0aGUgY29udGVudHNcclxuICAgICAgICBsZXQgbmF2aWdhdGUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGFsbG93TmF2aWdhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnQXJyb3dEb3duJyAmJiBzY3JvbGxQb3NpdGlvbiA8IG9wdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb24rKztcclxuICAgICAgICAgICAgICAgIGFsbG93TmF2aWdhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnQXJyb3dVcCcgJiYgc2Nyb2xsUG9zaXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQb3NpdGlvbi0tO1xyXG4gICAgICAgICAgICAgICAgYWxsb3dOYXZpZ2F0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhbGxvd05hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSBjb250ZW50cy5maW5kKCcua2VkaW8tc2VsZWN0LWFjdGl2ZS1vcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc251bGwoYWN0aXZlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdrZWRpby1zZWxlY3QtYWN0aXZlLW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbnNbc2Nyb2xsUG9zaXRpb25dLmNsYXNzTGlzdC5hZGQoJ2tlZGlvLXNlbGVjdC1hY3RpdmUtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdG9nZ2xlIHRoZSBjb250ZW50c1xyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHNlbGVjdC5kYXRhc2V0LmFjdGl2ZSA9PSAndHJ1ZSc7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGUoYWN0aXZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRlKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9zaG93IHRoZSBjb250ZW50c1xyXG4gICAgICAgIGxldCBpblZpZXcsIHRvcCwgYm90dG9tO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY3NzKHsgb3ZlcmZsb3c6ICdhdXRvJyB9KVxyXG5cclxuICAgICAgICBsZXQgcGxhY2VDb250ZW50cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdG9wID0gc2VsZWN0LnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgICAgICBib3R0b20gPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIHNlbGVjdC5wb3NpdGlvbigpLnRvcDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b3AgPiBib3R0b20pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzLmNzcyh7IHRvcDogLWNvbnRlbnRzLnBvc2l0aW9uKCkuaGVpZ2h0ICsgJ3B4JyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRzLmNzcyh7IHRvcDogc2VsZWN0LnBvc2l0aW9uKCkuaGVpZ2h0ICsgJ3B4JyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zaG93IGNvbnRlbnRzXHJcbiAgICAgICAgbGV0IGFjdGl2YXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0LmluVmlldygnYm9keScpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbmF2aWdhdGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaC5jc3MoeyBkaXNwbGF5OiAnZmxleCcgfSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50cy5jc3MoeyBkaXNwbGF5OiAnZmxleCcgfSk7XHJcbiAgICAgICAgICAgICAgICBwbGFjZUNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QuZGF0YXNldC5hY3RpdmUgPSAndHJ1ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGlkZSB0aGUgY29udGVudHNcclxuICAgICAgICBsZXQgZGVhY3RpdmF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG5hdmlnYXRlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHNlYXJjaC5jc3NSZW1vdmUoWydkaXNwbGF5J10pO1xyXG4gICAgICAgICAgICBjb250ZW50cy5jc3NSZW1vdmUoWydkaXNwbGF5J10pO1xyXG4gICAgICAgICAgICBzZWxlY3QuZGF0YXNldC5hY3RpdmUgPSAnZmFsc2UnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy91cGRhdGUgdGhlIHNlbGVjdGVkXHJcbiAgICAgICAgbGV0IHVwZGF0ZSA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHBhcmFtcy5jb250ZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuY29udGVudHNbaV0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZWN0LnZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jaGVjayB3aGVuIGFjdGl2YXRlZFxyXG4gICAgICAgIHNlbGVjdC5idWJibGVkRXZlbnQoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IHRvZ2dsZSAmJiBzZWxlY3QuZGF0YXNldC5hY3RpdmUgPT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2tlZGlvLXNlbGVjdC1vcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBwYXJhbXMuY29udGVudHNbZXZlbnQudGFyZ2V0LnZhbHVlXTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubXVsdGlwbGUgPT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUuaW5jbHVkZXModGV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZS5yZXBsYWNlKHRleHQsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlICs9IGAsICR7dGV4dH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlICs9IGAsICR7dGV4dH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNpbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2NoZWNrIHdoZW4gZGVhY3RpdmF0ZWRcclxuICAgICAgICBzZWxlY3Qubm90QnViYmxlZEV2ZW50KCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdC5kYXRhc2V0LmFjdGl2ZSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3doZW4gaW5wdXQgdmFsdWUgY2hhbmdlc1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGlucHV0LnZhbHVlLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXMgPSB0aGlzLmFycmF5LmZpbmRBbGwodmFsdWVzLCB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpICE9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhbHVlcyA9IHRoaXMuYXJyYXkuZWFjaCh2YWx1ZXMsIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzaW5nbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubXVsdGlwbGUgPT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB0aGlzLmFycmF5LnRvU2V0KHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5qb2luKCcsICcpO1xyXG4gICAgICAgICAgICB1cGRhdGUodmFsdWVzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9hbGlnbiBjb250ZW50cyBvbiBzY3JvbGxcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0LmluVmlldygnYm9keScpKSB7XHJcbiAgICAgICAgICAgICAgICBwbGFjZUNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdDtcclxuICAgIH1cclxuXHJcbiAgICBjaG9vc2UocGFyYW1zID0geyBub3RlOiAnJywgb3B0aW9uczogW10gfSkge1xyXG4gICAgICAgIGxldCBjaG9vc2VXaW5kb3cgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdjcmF0ZXItY2hvb3NlJyB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgeyBlbGVtZW50OiAncCcsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdjcmF0ZXItY2hvb3NlLW5vdGUnIH0sIHRleHQ6IHBhcmFtcy5ub3RlIH0sXHJcbiAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ2NyYXRlci1jaG9vc2UtY29udHJvbCcgfSB9LFxyXG4gICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBpZDogJ2NyYXRlci1jaG9vc2UtY2xvc2UnLCBjbGFzczogJ2J0bicgfSwgdGV4dDogJ0Nsb3NlJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNob29zZUNvbnRyb2wgPSBjaG9vc2VXaW5kb3cucXVlcnlTZWxlY3RvcignLmNyYXRlci1jaG9vc2UtY29udHJvbCcpO1xyXG5cclxuICAgICAgICBjaG9vc2VXaW5kb3cucXVlcnlTZWxlY3RvcignI2NyYXRlci1jaG9vc2UtY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY2hvb3NlV2luZG93LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgcGFyYW1zLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgY2hvb3NlQ29udHJvbC5tYWtlRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBjbGFzczogJ2J0biBjaG9vc2Utb3B0aW9uJyB9LCB0ZXh0OiBvcHRpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjaG9vc2VXaW5kb3csIGNob2ljZTogbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hvb3NlQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hvb3NlLW9wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvb3NlV2luZG93LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dEVkaXRvcihwYXJhbXMgPSB7IGlkOiAnJywgd2lkdGg6ICdtYXgtd2lkdGgnIH0pIHtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XHJcbiAgICAgICAgcGFyYW1zLmlkID0gcGFyYW1zLmlkIHx8ICd0ZXh0LWVkaXRvcic7XHJcbiAgICAgICAgbGV0IHRleHRFZGl0b3IgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5pZFxyXG4gICAgICAgICAgICB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdzdHlsZScsIHRleHQ6IGBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2I2NyYXRlci10ZXh0LWVkaXRvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke3BhcmFtcy53aWR0aCB8fCAnbWF4LWNvbnRlbnQnfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQwLCAxMTAsIDg5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2I2NyYXRlci1yaWNoLXRleHQtYXJlYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdiNjcmF0ZXItdGhlLXJpYmJvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCAxMTAsIDg5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lI2NyYXRlci10aGUtV1lTSVdZR3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdiNjcmF0ZXItdGhlLXJpYmJvbiBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXYjY3JhdGVyLXRoZS1yaWJib24gYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDkwLCA3MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhciAwcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdiNjcmF0ZXItdGhlLXJpYmJvbiBpbnB1dCwgIGRpdiNjcmF0ZXItdGhlLXJpYmJvbiBzZWxlY3R7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpdiNjcmF0ZXItdGhlLXJpYmJvbiBpbnB1dFt0eXBlPVwiY29sb3JcIl17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogJ2RpdicsIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdjcmF0ZXItdGhlLXJpYmJvbidcclxuICAgICAgICAgICAgICAgICAgICB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBpZDogJ3VuZG9CdXR0b24nLCB0aXRsZTogJ1VuZG8nIH0sIHRleHQ6ICcmbGFycjsnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBpZDogJ3JlZG9CdXR0b24nLCB0aXRsZTogJ1JlZG8nIH0sIHRleHQ6ICcmcmFycjsnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnc2VsZWN0JywgYXR0cmlidXRlczogeyBpZDogJ2ZvbnRDaGFuZ2VyJyB9LCBvcHRpb25zOiB0aGlzLmZvbnRTdHlsZXMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdzZWxlY3QnLCBhdHRyaWJ1dGVzOiB7IGlkOiAnZm9udFNpemVDaGFuZ2VyJyB9LCBvcHRpb25zOiB0aGlzLnJhbmdlKDEsIDIwKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ2J1dHRvbicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdvcmRlcmVkTGlzdEJ1dHRvbicsIHRpdGxlOiAnTnVtYmVyZWQgTGlzdCcgfSwgdGV4dDogJyhpKScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdidXR0b24nLCBhdHRyaWJ1dGVzOiB7IGlkOiAndW5vcmRlcmVkTGlzdEJ1dHRvbicsIHRpdGxlOiAnQnVsbGV0dGVkIExpc3QnIH0sIHRleHQ6ICcmYnVsbDsnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBpZDogJ2xpbmtCdXR0b24nLCB0aXRsZTogJ0NyZWF0ZSBMaW5rJyB9LCB0ZXh0OiAnTGluaycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdidXR0b24nLCBhdHRyaWJ1dGVzOiB7IGlkOiAndW5MaW5rQnV0dG9uJywgdGl0bGU6ICdSZW1vdmUgTGluaycgfSwgdGV4dDogJ1VubGluaycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBpZDogJ2JvbGRCdXR0b24nLCB0aXRsZTogJ0JvbGQnIH0sIGNoaWxkcmVuOiBbeyBlbGVtZW50OiAnYicsIHRleHQ6ICdCJyB9XSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ2J1dHRvbicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdpdGFsaWNCdXR0b24nLCB0aXRsZTogJ0l0YWxpYycgfSwgY2hpbGRyZW46IFt7IGVsZW1lbnQ6ICdlbScsIHRleHQ6ICdJJyB9XSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ2J1dHRvbicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICd1bmRlcmxpbmVCdXR0b24nLCB0aXRsZTogJ1VuZGVybGluZScgfSwgY2hpbGRyZW46IFt7IGVsZW1lbnQ6ICd1JywgdGV4dDogJ1UnIH1dIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBpZDogJ3N1cEJ1dHRvbicsIHRpdGxlOiAnU3VwZXJzY3JpcHQnIH0sIGNoaWxkcmVuOiBbeyBlbGVtZW50OiAnc3VwJywgdGV4dDogJzInIH1dIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBpZDogJ3N1YkJ1dHRvbicsIHRpdGxlOiAnU3Vic2NyaXB0JyB9LCBjaGlsZHJlbjogW3sgZWxlbWVudDogJ3N1YicsIHRleHQ6ICcyJyB9XSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ2J1dHRvbicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdzdHJpa2VCdXR0b24nLCB0aXRsZTogJ1N0cmlrZXRocm91Z2gnIH0sIGNoaWxkcmVuOiBbeyBlbGVtZW50OiAncycsIHRleHQ6ICdhYmMnIH1dIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnaW5wdXQnLCBhdHRyaWJ1dGVzOiB7IHR5cGU6ICdjb2xvcicsIGlkOiAnZm9udENvbG9yQnV0dG9uJywgdGl0bGU6ICdDaGFuZ2UgRm9udCBDb2xvcicsIHZhbHVlOiAnIzAwMDAwMCcgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ2lucHV0JywgYXR0cmlidXRlczogeyB0eXBlOiAnY29sb3InLCBpZDogJ2hpZ2hsaWdodEJ1dHRvbicsIHRpdGxlOiAnSGlnaHRsaWdodCBUZXh0JywgdmFsdWU6ICcjZmZmZmZmJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnaW5wdXQnLCBhdHRyaWJ1dGVzOiB7IHR5cGU6ICdjb2xvcicsIGlkOiAnYmFja2dyb3VuZEJ1dHRvbicsIHRpdGxlOiAnQ2hhbmdlIEJhY2tncm91bmQnLCB2YWx1ZTogJyNmZmZmZmYnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdidXR0b24nLCBhdHRyaWJ1dGVzOiB7IGlkOiAnYWxpZ25MZWZ0QnV0dG9uJywgdGl0bGU6ICdBbGlnbiBMZWZ0JyB9LCBjaGlsZHJlbjogW3sgZWxlbWVudDogJ2EnLCB0ZXh0OiAnTCcgfV0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdidXR0b24nLCBhdHRyaWJ1dGVzOiB7IGlkOiAnYWxpZ25DZW50ZXJCdXR0b24nLCB0aXRsZTogJ0FsaWduIENlbnRlcicgfSwgY2hpbGRyZW46IFt7IGVsZW1lbnQ6ICdhJywgdGV4dDogJ0MnIH1dIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBpZDogJ2FsaWduSnVzdGlmeUJ1dHRvbicsIHRpdGxlOiAnQWxpZ24gSnVzdGlmeScgfSwgY2hpbGRyZW46IFt7IGVsZW1lbnQ6ICdhJywgdGV4dDogJ0onIH1dIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYnV0dG9uJywgYXR0cmlidXRlczogeyBpZDogJ2FsaWduUmlnaHRCdXR0b24nLCB0aXRsZTogJ0FsaWduIFJpZ2h0JyB9LCBjaGlsZHJlbjogW3sgZWxlbWVudDogJ2EnLCB0ZXh0OiAnUicgfV0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2NyYXRlci1yaWNoLXRleHQtYXJlYSdcclxuICAgICAgICAgICAgICAgICAgICB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnaWZyYW1lJywgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnY3JhdGVyLXRoZS1XWVNJV1lHJywgZnJhbWVCb3JkZXI6IDAsIG5hbWU6ICd0aGVXWVNJV1lHJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBmb250cyA9IHRleHRFZGl0b3IuZmluZEFsbCgnc2VsZWN0I2ZvbnQtY2hhbmdlciA+IG9wdGlvbicpO1xyXG4gICAgICAgIGZvbnRzLmZvckVhY2goZm9udCA9PiB7XHJcbiAgICAgICAgICAgIGZvbnQuY3NzKHsgZm9udEZhbWlseTogZm9udC52YWx1ZSB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjdW5vcmRlcmVkTGlzdEJ1dHRvbicpLmlubmVySFRNTCA9ICcmYnVsbDsnO1xyXG4gICAgICAgIHRleHRFZGl0b3IuZmluZCgnI3JlZG9CdXR0b24nKS5pbm5lckhUTUwgPSAnJnJhcnI7JztcclxuICAgICAgICB0ZXh0RWRpdG9yLmZpbmQoJyN1bmRvQnV0dG9uJykuaW5uZXJIVE1MID0gJyZsYXJyOyc7XHJcblxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZWRpdG9yV2luZG93ID0gdGV4dEVkaXRvci5maW5kKCcjY3JhdGVyLXRoZS1XWVNJV1lHJyk7XHJcbiAgICAgICAgZWRpdG9yV2luZG93Lm9uQWRkZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWRpdG9yID0gZWRpdG9yV2luZG93LmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBlZGl0b3IuYm9keS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQocGFyYW1zLmNvbnRlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuYm9keS5pbm5lckhUTUwgPSBwYXJhbXMuY29udGVudC5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVkaXRvci5kZXNpZ25Nb2RlID0gJ29uJztcclxuXHJcbiAgICAgICAgICAgIHRleHRFZGl0b3IuZmluZCgnI2JvbGRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnQm9sZCcsIGZhbHNlLCBudWxsKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjaXRhbGljQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ0l0YWxpYycsIGZhbHNlLCBudWxsKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjdW5kZXJsaW5lQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ1VuZGVybGluZScsIGZhbHNlLCBudWxsKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjc3VwQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ1N1cGVyc2NyaXB0JywgZmFsc2UsIG51bGwpO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLmZpbmQoJyNzdWJCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnU3Vic2NyaXB0JywgZmFsc2UsIG51bGwpO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLmZpbmQoJyNzdHJpa2VCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnU3RyaWtldGhyb3VnaCcsIGZhbHNlLCBudWxsKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjb3JkZXJlZExpc3RCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnSW5zZXJ0T3JkZXJlZExpc3QnLCBmYWxzZSwgYG5ld09MJHtzZWxmLnJhbmRvbSgpfWApO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLmZpbmQoJyN1bm9yZGVyZWRMaXN0QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ0luc2VydFVub3JkZXJlZExpc3QnLCBmYWxzZSwgYG5ld1VMJHtzZWxmLnJhbmRvbSgpfWApO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLmZpbmQoJyNmb250Q29sb3JCdXR0b24nKS5vbkNoYW5nZWQodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdGb3JlQ29sb3InLCBmYWxzZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRleHRFZGl0b3IuZmluZCgnI2hpZ2hsaWdodEJ1dHRvbicpLm9uQ2hhbmdlZCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuZXhlY0NvbW1hbmQoJ0JhY2tDb2xvcicsIGZhbHNlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjYmFja2dyb3VuZEJ1dHRvbicpLm9uQ2hhbmdlZCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZGl0b3IuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjZm9udENoYW5nZXInKS5vbkNoYW5nZWQodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdGb250TmFtZScsIGZhbHNlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjZm9udFNpemVDaGFuZ2VyJykub25DaGFuZ2VkKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnRm9udFNpemUnLCBmYWxzZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRleHRFZGl0b3IuZmluZCgnI2xpbmtCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBwcm9tcHQoJ0VudGVyIGEgVVJMJywgJ2h0dHA6Ly8nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc251bGwodXJsKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdDcmVhdGVMaW5rJywgZmFsc2UsIHVybCk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRleHRFZGl0b3IuZmluZCgnI3VuTGlua0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdVbkxpbmsnLCBmYWxzZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRleHRFZGl0b3IuZmluZCgnI3VuZG9CdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnVW5kbycsIGZhbHNlLCBudWxsKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjcmVkb0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdyZWRvJywgZmFsc2UsIG51bGwpO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLmZpbmQoJyNhbGlnbkxlZnRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnanVzdGlmeUxlZnQnLCBmYWxzZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjYWxpZ25DZW50ZXJCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnanVzdGlmeUNlbnRlcicsIGZhbHNlLCBudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0RWRpdG9yLmZpbmQoJyNhbGlnbkp1c3RpZnlCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVkaXRvci5leGVjQ29tbWFuZCgnanVzdGlmeUZ1bGwnLCBmYWxzZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGV4dEVkaXRvci5maW5kKCcjYWxpZ25SaWdodEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWRpdG9yLmV4ZWNDb21tYW5kKCdqdXN0aWZ5UmlnaHQnLCBmYWxzZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheURhdGEoZGF0YSA9IHt9LCBjb250YWluZXIpIHtcclxuICAgICAgICBsZXQgbGluZU51bWJlcnMgPSBbXTtcclxuICAgICAgICBsZXQgZGlzcGxheVN0cmluZyA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tZGF0YS1zdHInIH0sIHRleHQ6IGBcIiR7dmFsdWV9XCJgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpc3BsYXlMaXRlcmFsID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgY2xhc3M6ICdrZWRpby1kYXRhLWxpdCcgfSwgdGV4dDogYCR7dmFsdWV9YCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkaXNwbGF5UHVuY3R1YXRpb24gPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCh7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLWRhdGEtcHVuJyB9LCB0ZXh0OiBgJHt2YWx1ZX1gIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpc3BsYXlOZXdMaW5lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnQrKztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCh7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLWRhdGEtcGxuJyB9IH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpc3BsYXlJdGVtID0gKHZhbHVlLCBwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLWRhdGEtaXRlbScgfSB9KTtcclxuICAgICAgICAgICAgbGluZU51bWJlcnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNzZXQocGFyYW1zLmtleSkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubWFrZUVsZW1lbnQoW1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHJpbmcocGFyYW1zLmtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVB1bmN0dWF0aW9uKCcgOiAnKSxcclxuICAgICAgICAgICAgICAgICAgICBjaG9vc2VEaXNwbGF5KHZhbHVlKSxcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5tYWtlRWxlbWVudChbXHJcbiAgICAgICAgICAgICAgICAgICAgY2hvb3NlRGlzcGxheSh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkaXNwbGF5QXJyYXkgPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tZGF0YS1ibG9jaycgfSB9KTtcclxuICAgICAgICAgICAgbGluZU51bWJlcnMucHVzaChhcnJheSk7XHJcblxyXG4gICAgICAgICAgICBhcnJheS5tYWtlRWxlbWVudChkaXNwbGF5UHVuY3R1YXRpb24oJ1snKSk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gYXJyYXkubWFrZUVsZW1lbnQoZGlzcGxheUl0ZW0odmFsdWVbaV0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSB2YWx1ZS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5tYWtlRWxlbWVudChkaXNwbGF5UHVuY3R1YXRpb24oJywnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJyYXkubWFrZUVsZW1lbnQoZGlzcGxheVB1bmN0dWF0aW9uKCddJykpO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGlzcGxheU9iamVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb2JqZWN0ID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tZGF0YS1ibG9jaycgfSB9KTtcclxuICAgICAgICAgICAgbGluZU51bWJlcnMucHVzaChvYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgb2JqZWN0Lm1ha2VFbGVtZW50KGRpc3BsYXlQdW5jdHVhdGlvbigneycpKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW07XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gb2JqZWN0Lm1ha2VFbGVtZW50KGRpc3BsYXlJdGVtKHZhbHVlW2tleV0sIHsga2V5IH0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5tYWtlRWxlbWVudChkaXNwbGF5UHVuY3R1YXRpb24oJywnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqZWN0Lm1ha2VFbGVtZW50KGRpc3BsYXlQdW5jdHVhdGlvbignfScpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjaG9vc2VEaXNwbGF5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BsYXlTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGxheUFycmF5KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXNwbGF5T2JqZWN0KHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXNwbGF5TGl0ZXJhbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpbmVIZWlnaHQgPSAnMjVweCc7XHJcbiAgICAgICAgbGV0IGRpc3BsYXllZCA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdwcmUnLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tZGF0YS13aW5kb3cnIH0sIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tZGF0YS1saW5lJywgc3R5bGU6IHsgbGluZUhlaWdodCB9IH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tZGF0YS10b2dnbGVzJyB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdjb2RlJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLWRhdGEtY29kZScsIHN0eWxlOiB7IGxpbmVIZWlnaHQgfSB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaG9vc2VEaXNwbGF5KGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3R5bGUnLCB0ZXh0OiBgLmtlZGlvLWRhdGEtd2luZG93IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tZGF0YS1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tZGF0YS10b2dnbGVzIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLWRhdGEtbGluZS1udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1kYXRhLXRvZ2dsZXMgLmtlZGlvLWRhdGEtdG9nZ2xlcy1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmtlZGlvLWRhdGEtY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tZGF0YS1wdW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tZGF0YS1saXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2VkaW8tZGF0YS1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1kYXRhLXN0ciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1kYXRhLXBsbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5rZWRpby1kYXRhLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNzZXQoY29udGFpbmVyKSkge1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGRpc3BsYXllZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29kZSA9IGRpc3BsYXllZC5maW5kKCcua2VkaW8tZGF0YS1jb2RlJyksXHJcbiAgICAgICAgICAgIG51bWJlcnMsXHJcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbnMsXHJcbiAgICAgICAgICAgIGhlaWdodCA9IGNvZGUucG9zaXRpb24oKS5oZWlnaHQsXHJcbiAgICAgICAgICAgIGxpbmVzID0gZGlzcGxheWVkLmZpbmQoJy5rZWRpby1kYXRhLWxpbmUnKSxcclxuICAgICAgICAgICAgdG9nZ2xlcyA9IGRpc3BsYXllZC5maW5kKCcua2VkaW8tZGF0YS10b2dnbGVzJyksXHJcbiAgICAgICAgICAgIGNvdW50ID0gaGVpZ2h0IC8gcGFyc2VJbnQobGluZUhlaWdodCksXHJcbiAgICAgICAgICAgIGl0ZW1zID0gY29kZS5maW5kQWxsKCcua2VkaW8tZGF0YS1pdGVtJyksXHJcbiAgICAgICAgICAgIGJsb2NrcyA9IGNvZGUuZmluZEFsbCgnLmtlZGlvLWRhdGEtYmxvY2snKTtcclxuXHJcbiAgICAgICAgbGV0IHNldFJhbmdlID0gKGJsb2NrKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IE1hdGguZmxvb3IoKGJsb2NrLnBvc2l0aW9uKCkudG9wIC0gY29kZS5wb3NpdGlvbigpLnRvcCkgLyBwYXJzZUludChsaW5lSGVpZ2h0KSkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gTWF0aC5mbG9vcigoYmxvY2sucG9zaXRpb24oKS5ib3R0b20gLSBjb2RlLnBvc2l0aW9uKCkudG9wKSAvIHBhcnNlSW50KGxpbmVIZWlnaHQpKSArIDE7XHJcbiAgICAgICAgICAgIGJsb2NrLnJhbmdlID0gdGhpcy5yYW5nZShlbmQsIHN0YXJ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzZXROdW1iZXJzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVOdW1iZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lcy5tYWtlRWxlbWVudChbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnYScsIGh0bWw6IGAke2kgLyAxICsgMX1gLCBhdHRyaWJ1dGVzOiB7IGNsYXNzOiAna2VkaW8tZGF0YS1saW5lLW51bWJlcicgfSB9XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNldFRvZ2dsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wID0gYmxvY2tzW2ldLnBvc2l0aW9uKCkudG9wIC0gY29kZS5wb3NpdGlvbigpLnRvcCArIDYgKyAncHgnXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9nZ2xlID0gdG9nZ2xlcy5tYWtlRWxlbWVudCh7IGVsZW1lbnQ6ICdpJywgYXR0cmlidXRlczogeyBjbGFzczogJ2tlZGlvLWRhdGEtdG9nZ2xlcy1idXR0b24gZmFzIGZhLWFycm93LWRvd24nLCBzdHlsZTogeyB0b3AgfSB9IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5ibG9jayA9IGJsb2Nrc1tpXTtcclxuICAgICAgICAgICAgICAgIGJsb2Nrc1tpXS50b2dnbGUgPSB0b2dnbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhbGlnblRvZ2dsZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9nZ2xlQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQnV0dG9uc1tpXS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdG9nZ2xlQnV0dG9uc1tpXS5ibG9jay5wb3NpdGlvbigpLnRvcCAtIGNvZGUucG9zaXRpb24oKS50b3AgKyA2ICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoaWRlTnVtYmVycyA9IChibG9jaykgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrLnJhbmdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNzZXQobnVtYmVyc1tibG9jay5yYW5nZVtpXV0uY29udHJvbGxlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJzW2Jsb2NrLnJhbmdlW2ldXS5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1tibG9jay5yYW5nZVtpXV0uY29udHJvbGxlciA9IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGlkZUJsb2NrID0gKGJsb2NrKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBibG9ja0NvbnRlbnQgPSBibG9jay5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja0NvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChibG9ja0NvbnRlbnRbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdrZWRpby1kYXRhLWl0ZW0nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQ29udGVudFtpXS5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQ29udGVudFtpXS5maW5kQWxsKCcua2VkaW8tZGF0YS1ibG9jaycpLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc3NldChiLnRvZ2dsZS5jb250cm9sbGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYi50b2dnbGUuY29udHJvbGxlciA9IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYi50b2dnbGUuY3NzKHsgZGlzcGxheTogJ25vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaG93TnVtYmVycyA9IChibG9jaykgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrLnJhbmdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyc1tibG9jay5yYW5nZVtpXV0uY29udHJvbGxlciA9PSBibG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcnNbYmxvY2sucmFuZ2VbaV1dLmNzc1JlbW92ZShbJ2Rpc3BsYXknXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG51bWJlcnNbYmxvY2sucmFuZ2VbaV1dLmNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaG93QmxvY2sgPSAoYmxvY2spID0+IHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrQ29udGVudCA9IGJsb2NrLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrQ29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrQ29udGVudFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2tlZGlvLWRhdGEtaXRlbScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tDb250ZW50W2ldLmNzc1JlbW92ZShbJ2Rpc3BsYXknXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQ29udGVudFtpXS5maW5kQWxsKCcua2VkaW8tZGF0YS1ibG9jaycpLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiLnRvZ2dsZS5jb250cm9sbGVyID09IGJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgYi50b2dnbGUuY29udHJvbGxlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIudG9nZ2xlLmNzc1JlbW92ZShbJ2Rpc3BsYXknXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGluZU51bWJlcnMucHVzaCh1bmRlZmluZWQpXHJcblxyXG4gICAgICAgIGRpc3BsYXllZC5vbkFkZGVkKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgc2V0TnVtYmVycygpO1xyXG4gICAgICAgICAgICBzZXRUb2dnbGVzKCk7XHJcblxyXG4gICAgICAgICAgICBudW1iZXJzID0gbGluZXMuZmluZEFsbCgnLmtlZGlvLWRhdGEtbGluZS1udW1iZXInKTtcclxuICAgICAgICAgICAgdG9nZ2xlQnV0dG9ucyA9IHRvZ2dsZXMuZmluZEFsbCgnLmtlZGlvLWRhdGEtdG9nZ2xlcy1idXR0b24nKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBibG9ja0NvbnRlbnQsIHN0YXJ0LCBlbmQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXllZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygna2VkaW8tZGF0YS10b2dnbGVzLWJ1dHRvbicpKSB7Ly9pZiB0b2dnbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzc2V0KHRhcmdldC5ibG9jay5yYW5nZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmFuZ2UodGFyZ2V0LmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1hcnJvdy1kb3duJykpIHsvL2lmIHRvZ2dsZSB0byBzaG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVOdW1iZXJzKHRhcmdldC5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVCbG9jayh0YXJnZXQuYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd051bWJlcnModGFyZ2V0LmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Jsb2NrKHRhcmdldC5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtYXJyb3ctdXAnKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtYXJyb3ctZG93bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduVG9nZ2xlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpc3BsYXllZDtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnRzOyIsImNsYXNzIEZ1bmMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FwaXRhbHMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XHJcbiAgICAgICAgdGhpcy5zbWFsbHMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XHJcbiAgICAgICAgdGhpcy5kaWdpdHMgPSBcIjEyMzQ1Njc4OTBcIjtcclxuICAgICAgICB0aGlzLnN5bWJvbHMgPSBcIiwuLz8nIUAjJCVeJiooKS1fKz1gflxcXFx8IFwiO1xyXG4gICAgICAgIHRoaXMubW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcclxuICAgICAgICB0aGlzLmRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XHJcbiAgICAgICAgdGhpcy5nZW5kZXJzID0gWydNYWxlJywgJ0ZlbWFsZScsICdEbyBub3QgZGlzY2xvc2UnXTtcclxuICAgICAgICB0aGlzLm1hcml0YWxzID0gWydNYXJyaWVkJywgJ1NpbmdsZScsICdEaXZvcmNlZCcsICdXaWRvd2VkJ107XHJcbiAgICAgICAgdGhpcy5yZWxpZ2lvbnMgPSBbJ0NocmlzdGFpbml0eScsICdJc2xhbScsICdKdWRhaXNtJywgJ1BhZ2FuaXNtJywgJ0J1ZGlzbSddO1xyXG4gICAgICAgIHRoaXMudXNlclR5cGVzID0gWydzdHVkZW50JywgJ3N0YWZmJywgJ2FkbWluJywgJ2NlbyddO1xyXG4gICAgICAgIHRoaXMuc3RhZmZSZXF1ZXN0cyA9IFsnbGVhdmUnLCAnYWxsb3dhbmNlJ107XHJcbiAgICAgICAgdGhpcy5zdHVkZW50c1JlcXVlc3RzID0gWydhYnNlbmNlJywgJ2FjYWRlbWljJ107XHJcbiAgICAgICAgdGhpcy5zdWJqZWN0TGlzdCA9IFsnTWF0aGVtYXRpY3MnLCAnRW5nbGlzaCcsICdQaHlzaWNzJywgJ0NoZW1pc3RyeScsICdCaW9sb2d5JywgJ0FncmljdWx0dXJlJywgJ0xpdGVyYXR1cmUnLCAnSGlzdG9yeSddLnNvcnQoKTtcclxuICAgICAgICB0aGlzLnN1YmplY3RMZXZlbHMgPSBbJ0dlbmVyYWwnLCAnU2VuaW9yJywgJ1NjaWVuY2UnLCAnQXJ0cycsICdKdW5pb3InXTtcclxuICAgICAgICB0aGlzLmZvbnRTdHlsZXMgPSBbJ0FyaWFsJywgJ1RpbWVzIE5ldyBSb21hbicsICdIZWx2ZXRpY2EnLCAnVGltZXMnLCAnQ291cmllciBOZXcnLCAnVmVyZGFuYScsICdDb3VyaWVyJywgJ0FyaWFsIE5hcnJvdycsICdDYW5kYXJhJywgJ0dlbmV2YScsICdDYWxpYnJpJywgJ09wdGltYScsICdDYW1icmlhJywgJ0dhcmFtb25kJywgJ1BlcnBldHVhJywgJ01vbmFjbycsICdEaWRvdCcsICdCcnVzaCBTY3JpcHQgTVQnLCAnTHVjaWRhIEJyaWdodCcsICdDb3BwZXJwbGF0ZScsICdTZXJpZicsICdTYW4tU2VyaWYnLCAnR2VvcmdpYScsICdTZWdvZSBVSSddO1xyXG4gICAgICAgIHRoaXMucGl4ZWxTaXplcyA9IFsnMHB4JywgJzFweCcsICcycHgnLCAnM3B4JywgJzRweCcsICc1cHgnLCAnNnB4JywgJzdweCcsICc4cHgnLCAnOXB4JywgJzEwcHgnLCAnMjBweCcsICczMHB4JywgJzQwcHgnLCAnNTBweCcsICc2MHB4JywgJzcwcHgnLCAnODBweCcsICc5MHB4JywgJzEwMHB4JywgJ05vbmUnLCAnVW5zZXQnLCAnYXV0bycsICctd2Via2l0LWZpbGwtYXZhaWxhYmxlJ107XHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgJ1llbGxvdycsICdCbGFjaycsICdXaGl0ZScsICdQdXJwbGUnLCAnVmlvbGV0JywgJ0luZGlnbycsICdPcmFuZ2UnLCAnVHJhbnNwYXJlbnQnLCAnTm9uZScsICdVbnNldCddO1xyXG4gICAgICAgIHRoaXMuYm9sZG5lc3MgPSBbMTAwLCAyMDAsIDMwMCwgNDAwLCA1MDAsIDYwMCwgNzAwLCA4MDAsIDkwMCwgMTAwMCwgJ2xpZ2h0ZXInLCAnYm9sZCcsICdib2xkZXInLCAnbm9ybWFsJywgJ3Vuc2V0J107XHJcbiAgICAgICAgdGhpcy5ib3JkZXJUeXBlcyA9IFsnU29saWQnLCAnRG90dGVkJywgJ0RvdWJsZScsICdHcm9vdmUnLCAnRGFzaGVkJywgJ0luc2V0JywgJ05vbmUnLCAnVW5zZXQnLCAnT3V0c2V0JywgJ1JpZ2dlZCcsICdJbmhlcml0JywgJ0luaXRpYWwnXTtcclxuICAgICAgICB0aGlzLnNoYWRvd3MgPSBbJzJweCAycHggNXB4IDJweCByZWQnLCAnMnB4IDJweCA1cHggZ3JlZW4nLCAnMnB4IDJweCB5ZWxsb3cnLCAnMnB4IGJsYWNrJywgJ05vbmUnLCAnVW5zZXQnXTtcclxuICAgICAgICB0aGlzLmJvcmRlcnMgPSBbJzFweCBzb2xpZCBibGFjaycsICcycHggZG90dGVkIGdyZWVuJywgJzNweCBkYXNoZWQgeWVsbG93JywgJzFweCBkb3VibGUgcmVkJywgJ05vbmUnLCAnVW5zZXQnXTtcclxuICAgICAgICB0aGlzLmFsaWdubWVudCA9IFsnTGVmdCcsICdKdXN0aWZpZWQnLCAnUmlnaHQnLCAnQ2VudGVyJ107XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdFNvdXJjZShzb3VyY2UpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmluQmV0d2Vlbihzb3VyY2UsICckIyZ7JywgJ30mIyQnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleEF0KGhheXN0YWNrID0gJycsIG5lZWRsZSA9ICcnLCBwb3MgPSAwKSB7XHJcbiAgICAgICAgcG9zID0gcG9zIHx8IDA7XHJcbiAgICAgICAgaWYgKGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYXlzdGFjayA9IGhheXN0YWNrLnNwbGl0KG5lZWRsZSk7XHJcbiAgICAgICAgaWYgKHBvcyA+PSBoYXlzdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhheXN0YWNrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIDw9IHBvcykge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKz0gaGF5c3RhY2tbaV0ubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGV4ICs9IG5lZWRsZS5sZW5ndGggKiBwb3M7XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBjb21iaW5lKGhheXN0YWNrID0gJycsIGZpcnN0ID0gJycsIHNlY29uZCA9ICcnLCBwb3MgPSAwKSB7XHJcbiAgICAgICAgcG9zID0gcG9zIHx8IDA7Ly9pbml0aWFsaXplIHBvc2l0aW9uIGlmIG5vdCBzZXRcclxuICAgICAgICBsZXQgYXQxID0gcG9zLFxyXG4gICAgICAgICAgICBhdDIgPSBmaXJzdCA9PT0gc2Vjb25kID8gcG9zICsgMSA6IHBvczsgLy9jaGVjayBpZiBpdCBpcyB0aGUgc2FtZSBhbmQgY2hhbmdlIHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5pbmRleEF0KGhheXN0YWNrLCBmaXJzdCwgYXQxKTsvL2dldCB0aGUgc3RhcnRcclxuICAgICAgICBsZXQgZW5kID0gdGhpcy5pbmRleEF0KGhheXN0YWNrLCBzZWNvbmQsIGF0Mik7Ly9nZXQgdGhlIGVuZFxyXG5cclxuICAgICAgICBpZiAoc3RhcnQgPT0gLTEgfHwgc3RhcnQgKyBmaXJzdC5sZW5ndGggPj0gaGF5c3RhY2subGVuZ3RoIHx8IGVuZCA9PSAtMSkgey8vbnVsbCBpZiBvbmUgaXMgbm90IGZvdW5kXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBoYXlzdGFjay5zbGljZShzdGFydCwgZW5kICsgc2Vjb25kLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsQ29tYmluZShoYXlzdGFjayA9ICcnLCBmaXJzdCA9ICcnLCBzZWNvbmQgPSAnJykge1xyXG4gICAgICAgIGxldCBwb3MgPSAwO1xyXG4gICAgICAgIGxldCBhbGwgPSBbXTtcclxuICAgICAgICBsZXQgZm91bmQ7XHJcbiAgICAgICAgd2hpbGUgKGZvdW5kICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdGhpcy5jb21iaW5lKGhheXN0YWNrLCBmaXJzdCwgc2Vjb25kLCBwb3MpO1xyXG4gICAgICAgICAgICBwb3MrKztcclxuICAgICAgICAgICAgaWYgKGZvdW5kICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBhbGwucHVzaChmb3VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhbGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5CZXR3ZWVuKGhheXN0YWNrID0gJycsIGZpcnN0ID0gJycsIHNlY29uZCA9ICcnLCBwb3MgPSAwKSB7XHJcbiAgICAgICAgcG9zID0gcG9zIHx8IDA7Ly9pbml0aWFsaXplIHBvc2l0aW9uIGlmIG5vdCBzZXRcclxuICAgICAgICBsZXQgYXQxID0gcG9zLFxyXG4gICAgICAgICAgICBhdDIgPSBmaXJzdCA9PT0gc2Vjb25kID8gcG9zICsgMSA6IHBvczsgLy9jaGVjayBpZiBpdCBpcyB0aGUgc2FtZSBhbmQgY2hhbmdlIHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5pbmRleEF0KGhheXN0YWNrLCBmaXJzdCwgYXQxKTsvL2dldCB0aGUgc3RhcnRcclxuICAgICAgICBsZXQgZW5kID0gdGhpcy5pbmRleEF0KGhheXN0YWNrLCBzZWNvbmQsIGF0Mik7Ly9nZXQgdGhlIGVuZFxyXG5cclxuICAgICAgICBpZiAoc3RhcnQgPT0gLTEgfHwgc3RhcnQgKyBmaXJzdC5sZW5ndGggPj0gaGF5c3RhY2subGVuZ3RoIHx8IGVuZCA9PSAtMSkgey8vLTEgaWYgb25lIGlzIG5vdCBmb3VuZCBvciBpbmJldHdlZW5cclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhheXN0YWNrLnNsaWNlKHN0YXJ0ICsgZmlyc3QubGVuZ3RoLCBlbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbEluQmV0d2VlbihoYXlzdGFjayA9ICcnLCBmaXJzdCA9ICcnLCBzZWNvbmQgPSAnJykge1xyXG4gICAgICAgIGxldCBwb3MgPSAwO1xyXG4gICAgICAgIGxldCBhbGwgPSBbXTtcclxuICAgICAgICBsZXQgZm91bmQ7XHJcbiAgICAgICAgd2hpbGUgKGZvdW5kICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdGhpcy5pbkJldHdlZW4oaGF5c3RhY2ssIGZpcnN0LCBzZWNvbmQsIHBvcyk7XHJcbiAgICAgICAgICAgIHBvcysrO1xyXG4gICAgICAgICAgICBpZiAoZm91bmQgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGFsbC5wdXNoKGZvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFsbDtcclxuICAgIH1cclxuXHJcbiAgICBleHRyYWN0Q1NTKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgY3NzID0gZWxlbWVudC5zdHlsZS5jc3NUZXh0LFxyXG4gICAgICAgICAgICBzdHlsZSA9IHt9LFxyXG4gICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgIHZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoY3NzICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGNzcyA9IGNzcy5zcGxpdCgnOyAnKTtcclxuICAgICAgICAgICAgbGV0IHBhaXI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgb2YgY3NzKSB7XHJcbiAgICAgICAgICAgICAgICBwYWlyID0gdGhpcy50cmVtKGkpO1xyXG4gICAgICAgICAgICAgICAga2V5ID0gdGhpcy5qc1N0eWxlTmFtZShwYWlyLnNwbGl0KCc6JylbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnN0cmluZ1JlcGxhY2UocGFpci5zcGxpdCgnOicpLnBvcCgpLCAnOycsICcnKTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVtrZXldID0gdGhpcy50cmVtKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaW1Nb250aEFycmF5KCkge1xyXG4gICAgICAgIGxldCBtb250aHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9udGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1vbnRocy5wdXNoKHRoaXMubW9udGhzW2ldLnNsaWNlKDAsIDMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vbnRocztcclxuICAgIH1cclxuXHJcbiAgICBqc1N0eWxlTmFtZShuYW1lID0gJycpIHtcclxuICAgICAgICBsZXQgbmV3TmFtZSA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobmFtZVtpXSA9PSAnLScpIHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gbmFtZVtpXS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgbmV3TmFtZSArPSBuYW1lW2ldLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNzc1N0eWxlTmFtZShuYW1lID0gJycpIHtcclxuICAgICAgICBsZXQgbmV3TmFtZSA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NhcGl0YWwobmFtZVtpXSkpIG5ld05hbWUgKz0gJy0nO1xyXG4gICAgICAgICAgICBuZXdOYW1lICs9IG5hbWVbaV0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRUb0NhbWVsQ2FzZWQodGV4dCA9ICcnKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0ZXh0KSB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0W2ldID09ICcgJykgY29udGludWU7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gMCkgdmFsdWUgKz0gdGV4dFtpXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzc2V0KHRleHRbaSAtIDFdKSAmJiB0ZXh0W2kgLSAxXSA9PSAnICcpIHZhbHVlICs9IHRleHRbaV0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgZWxzZSB2YWx1ZSArPSB0ZXh0W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2FtZWxDYXNlZFRvVGV4dChjYW1lbENhc2UgPSAnJykge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gY2FtZWxDYXNlKSB7XHJcbiAgICAgICAgICAgIGlmIChpICE9IDAgJiYgdGhpcy5pc0NhcGl0YWwoY2FtZWxDYXNlW2ldKSkgdmFsdWUgKz0gYCAke2NhbWVsQ2FzZVtpXS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgICAgIGVsc2UgdmFsdWUgKz0gY2FtZWxDYXNlW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaikgPT0gSlNPTi5zdHJpbmdpZnkoe30pO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbShwYXJhbXMgPSB7IGxpbWl0OiAxLCByYW5nZTogMSB9KSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbTtcclxuICAgICAgICBpZiAodGhpcy5lbXB0eU9iamVjdChwYXJhbXMpKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc3NldChwYXJhbXMubGltaXQpKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiBwYXJhbXMubGltaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNzZXQocGFyYW1zLnJhbmdlKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbTtcclxuICAgIH1cclxuXHJcbiAgICByYW5nZShlbmQgPSAxLCBzdGFydCA9IDEpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQgfHwgMDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVSYW5kb20obGVuZ3RoID0gNSkge1xyXG4gICAgICAgIHZhciBzdHJpbmcgPSB0aGlzLmNhcGl0YWxzICsgdGhpcy5zbWFsbHMgKyB0aGlzLmRpZ2l0cztcclxuICAgICAgICB2YXIgYWxwaGFudW1lcmljID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhbHBoYW51bWVyaWMgKz0gc3RyaW5nW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHN0cmluZy5sZW5ndGgpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFscGhhbnVtZXJpYztcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJhbmRvbUhleChsZW5ndGggPSA1KSB7XHJcbiAgICAgICAgdmFyIHN0cmluZyA9IHRoaXMuY2FwaXRhbHMuc2xpY2UoMCwgMykgKyB0aGlzLnNtYWxscy5zbGljZSgwLCAzKSArIHRoaXMuZGlnaXRzO1xyXG4gICAgICAgIHZhciBhbHBoYW51bWVyaWMgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFscGhhbnVtZXJpYyArPSBzdHJpbmdbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3RyaW5nLmxlbmd0aCldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxwaGFudW1lcmljO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlS2V5KGxlbmd0aCA9IDUpIHtcclxuICAgICAgICBsZXQga2V5ID0gRGF0ZS5ub3coKS50b1N0cmluZyhsZW5ndGgpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZyhsZW5ndGgpLnNsaWNlKDIpOy8vZ2VuZXJhdGUgdGhlIGtleVxyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdHRlZFVybChwYXJhbXMpIHtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy51cmxTcGxpdHRlcihwYXJhbXMudXJsKTtcclxuICAgICAgICB1cmwudmFyc1twYXJhbXMudG9BZGRdID0gcGFyYW1zLmFkZFZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsTWVyZ2VyKHVybCwgcGFyYW1zLnRvQWRkKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDb21tYVRvTW9uZXkobW9uZXkgPSAnJykge1xyXG4gICAgICAgIHZhciBpbnZlcnNlID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IG1vbmV5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGludmVyc2UgKz0gbW9uZXlbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vbmV5ID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGludmVyc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gKGkgKyAxKSAlIDM7XHJcbiAgICAgICAgICAgIG1vbmV5ICs9IGludmVyc2VbaV07XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSBpbnZlcnNlLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb25leSArPSAnLCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW52ZXJzZSA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBtb25leS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpbnZlcnNlICs9IG1vbmV5W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW52ZXJzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NhcGl0YWwodmFsdWUgPSAnJykge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXBpdGFscy5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhcGl0YWxpemUodmFsdWUgPSAnJykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0NhcGl0YWwodmFsdWVbMF0pKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xyXG4gICAgICAgICAgICB2YWx1ZVswXSA9IHRoaXMuY2FwaXRhbHNbdGhpcy5zbWFsbHMuaW5kZXhPZih2YWx1ZVswXSldO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdSZXBsYWNlKHZhbHVlLnRvU3RyaW5nKCksICcsJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcChoYXlzdGFjayA9ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGhheXN0YWNrLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTbWFsbCh2YWx1ZSA9ICcnKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNtYWxscy5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzU3ltYm9sKHZhbHVlID0gJycpIHtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9scy5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzTmFtZSh2YWx1ZSA9ICcnKSB7XHJcbiAgICAgICAgZm9yICh2YXIgeCBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RpZ2l0KHZhbHVlW3hdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUGFzc3dvcmRWYWxpZCh2YWx1ZSA9ICcnKSB7XHJcbiAgICAgICAgdmFyIGxlbiA9IHZhbHVlLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuID4gNykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBhIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NhcGl0YWwodmFsdWVbYV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYiBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NtYWxsKHZhbHVlW2JdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGlnaXQodmFsdWVbY10pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGQgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3ltYm9sKHZhbHVlW2RdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc1N1YlN0cmluZyhoYXlzdGFjayA9ICcnLCB2YWx1ZSA9ICcnKSB7XHJcbiAgICAgICAgaWYgKGhheXN0YWNrLmluZGV4T2YodmFsdWUpICE9IC0xKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEaWdpdCh2YWx1ZSA9ICcnKSB7XHJcbiAgICAgICAgdmFsdWUgPSBuZXcgU3RyaW5nKHZhbHVlKVxyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaWdpdHMuaW5jbHVkZXModmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbWFpbCh2YWx1ZSA9ICcnKSB7XHJcbiAgICAgICAgdmFyIGVtYWlsX3BhcnRzID0gdmFsdWUuc3BsaXQoJ0AnKTtcclxuICAgICAgICBpZiAoZW1haWxfcGFydHMubGVuZ3RoICE9IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3BhY2VTdHJpbmcoZW1haWxfcGFydHNbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGRvdF9wYXJ0cyA9IGVtYWlsX3BhcnRzWzFdLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIGlmIChkb3RfcGFydHMubGVuZ3RoICE9IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3BhY2VTdHJpbmcoZG90X3BhcnRzWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3BhY2VTdHJpbmcoZG90X3BhcnRzWzFdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc1RydXRoeSh2YWx1ZSkge1xyXG4gICAgICAgIGxldCB0cnV0aHk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgdHJ1dGh5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0cnV0aHkgPSAodmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSAndHJ1ZScgfHwgdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSAnMScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgdHJ1dGh5ID0gKHZhbHVlID09IDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1dGh5O1xyXG4gICAgfVxyXG5cclxuICAgIGlzRmFsc3kodmFsdWUpIHtcclxuICAgICAgICBsZXQgZmFsc3k7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgZmFsc3kgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGZhbHN5ID0gKHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gJ2ZhbHNlJyB8fCB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09ICcwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBmYWxzeSA9ICh2YWx1ZSA9PSAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHN5O1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdExlbmd0aChvYmplY3QgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBpc1NwYWNlU3RyaW5nKHZhbHVlID0gJycpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlW3hdICE9ICcgJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNTdHJpbmcoaGF5c3RhY2sgPSAnJywgbmVlZGxlID0gJycpIHtcclxuICAgICAgICBmb3IgKHZhciB4IGluIGhheXN0YWNrKSB7XHJcbiAgICAgICAgICAgIGlmIChuZWVkbGUgPT0gaGF5c3RhY2tbeF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0cmVtKG5lZWRsZSA9ICcnKSB7XHJcbiAgICAgICAgLy9yZW1vdmUgdGhlIHByZXBlbmRlZCBzcGFjZXNcclxuICAgICAgICBpZiAobmVlZGxlWzBdID09ICcgJykge1xyXG4gICAgICAgICAgICB2YXIgbmV3X25lZWRsZSA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5lZWRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld19uZWVkbGUgKz0gbmVlZGxlW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5lZWRsZSA9IHRoaXMudHJlbShuZXdfbmVlZGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vcmVtb3ZlIHRoZSBhcHBlbmRlZCBzcGFjZXNcclxuICAgICAgICBpZiAobmVlZGxlW25lZWRsZS5sZW5ndGggLSAxXSA9PSAnICcpIHtcclxuICAgICAgICAgICAgdmFyIG5ld19uZWVkbGUgPSAnJztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWVkbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9IG5lZWRsZS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3X25lZWRsZSArPSBuZWVkbGVbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmVlZGxlID0gdGhpcy50cmVtKG5ld19uZWVkbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmVlZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cmluZ1JlcGxhY2Uod29yZCA9ICcnLCBmcm9tID0gJycsIHRvID0gJycpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHdvcmRbaV0gPT0gZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gdG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSB3b3JkW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJUb1JlYWxQYXRoKHBhdGggPSAnJykge1xyXG4gICAgICAgIGlmIChwYXRoW3BhdGgubGVuZ3RoIC0gMV0gIT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHBhdGggKz0gJy8nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBpc1NwYWNpYWxDaGFyYWN0ZXIoY2hhciA9ICcnKSB7XHJcbiAgICAgICAgdmFyIHNwZWNpYWxjaGFyYWN0ZXJzID0gXCInXFxcXC86Pyo8PnwhLlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BlY2lhbGNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWxjaGFyYWN0ZXJzW2ldID09IGNoYXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudENoYXIoaGF5c3RhY2sgPSAnJywgbmVlZGxlID0gJycpIHtcclxuICAgICAgICB2YXIgaiA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXlzdGFjay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT0gbmVlZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBqKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGo7XHJcbiAgICB9XHJcblxyXG4gICAgb2NjdXJhbmNlc09mKGhheXN0YWNrID0gJycsIG5lZWRsZSA9ICcnKSB7XHJcbiAgICAgICAgbGV0IG9jY3VyYW5jZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhheXN0YWNrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXSA9PT0gbmVlZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBvY2N1cmFuY2VzLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvY2N1cmFuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGlzc2V0KHZhcmlhYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdmFyaWFibGUgIT09ICd1bmRlZmluZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpc251bGwodmFyaWFibGUpIHtcclxuICAgICAgICByZXR1cm4gdmFyaWFibGUgPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBub3ROdWxsKHZhcmlhYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzZXQodmFyaWFibGUpICYmICF0aGlzLmlzbnVsbCh2YXJpYWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBcnJheSh2YXJpYWJsZSkge1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YXJpYWJsZSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBmbGFnID0gdmFyaWFibGUuY29uc3RydWN0b3IgPT09IEFycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmxhZztcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdCh2YXJpYWJsZSkge1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YXJpYWJsZSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBmbGFnID0gdmFyaWFibGUuY29uc3RydWN0b3IgPT09IE9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdHJpbmcodmFyaWFibGUpIHtcclxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFyaWFibGUgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZmxhZyA9IHZhcmlhYmxlLmNvbnN0cnVjdG9yID09PSBTdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTnVtYmVyKHZhcmlhYmxlKSB7XHJcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhcmlhYmxlID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSB2YXJpYWJsZS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmxhZztcclxuICAgIH1cclxuXHJcbiAgICBpc0Jvb2wodmFyaWFibGUpIHtcclxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFyaWFibGUgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSB2YXJpYWJsZS5jb25zdHJ1Y3RvciA9PT0gQm9vbGVhbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNmdW5jdGlvbih2YXJpYWJsZSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhcmlhYmxlID09PSAnZnVuY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBydW5QYXJhbGxlbChmdW5jdGlvbnMgPSBbXSwgY2FsbEJhY2sgPSAoKSA9PiB7IH0pIHtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGYgaW4gZnVuY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHNbZl0gPSBhd2FpdCBmdW5jdGlvbnNbZl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxCYWNrKHJlc3VsdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTW9iaWxlKCkge1xyXG4gICAgICAgIHJldHVybiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cmxNZXJnZXIoc3BsaXRVcmwgPSAnJywgbGFzdFF1ZXJ5ID0gJycpIHtcclxuICAgICAgICB2YXIgaG9zdFR5cGUgPSAodGhpcy5pc3NldChzcGxpdFVybC5ob3N0VHlwZSkpID8gc3BsaXRVcmwuaG9zdFR5cGUgOiAnaHR0cCc7XHJcbiAgICAgICAgdmFyIGhvc3ROYW1lID0gKHRoaXMuaXNzZXQoc3BsaXRVcmwuaG9zdE5hbWUpKSA/IHNwbGl0VXJsLmhvc3ROYW1lIDogJyc7XHJcbiAgICAgICAgdmFyIHBvcnQgPSAodGhpcy5pc3NldChzcGxpdFVybC5ob3N0KSkgPyBzcGxpdFVybC5wb3J0IDogJyc7XHJcbiAgICAgICAgdmFyIHBhdGhOYW1lID0gKHRoaXMuaXNzZXQoc3BsaXRVcmwucGF0aE5hbWUpKSA/IHNwbGl0VXJsLnBhdGhOYW1lIDogJyc7XHJcbiAgICAgICAgdmFyIHF1ZXJpZXMgPSAnPyc7XHJcbiAgICAgICAgdmFyIGtlZXBNYXBwaW5nID0gdHJ1ZTtcclxuICAgICAgICAodGhpcy5pc3NldChzcGxpdFVybC52YXJzKSkgP1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcGxpdFVybC52YXJzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZWVwTWFwcGluZykgcXVlcmllcyArPSBrZXkgKyAnPScgKyBzcGxpdFVybC52YXJzW2tleV0gKyAnJic7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IGxhc3RRdWVyeSkga2VlcE1hcHBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSkgOiAnJztcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSBob3N0VHlwZSArICc6Oi8nICsgaG9zdE5hbWUgKyAnOicgKyBwb3J0ICsgJy8nICsgcGF0aE5hbWUgKyBxdWVyaWVzO1xyXG4gICAgICAgIGxvY2F0aW9uID0gKGxvY2F0aW9uLmxhc3RJbmRleE9mKCcmJykgPT0gbG9jYXRpb24ubGVuZ3RoIC0gMSkgPyBsb2NhdGlvbi5zbGljZSgwLCBsb2NhdGlvbi5sZW5ndGggLSAxKSA6IGxvY2F0aW9uO1xyXG4gICAgICAgIGxvY2F0aW9uID0gKGxvY2F0aW9uLmxhc3RJbmRleE9mKCc9JykgPT0gbG9jYXRpb24ubGVuZ3RoIC0gMSkgPyBsb2NhdGlvbi5zbGljZSgwLCBsb2NhdGlvbi5sZW5ndGggLSAxKSA6IGxvY2F0aW9uO1xyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB1cmxTcGxpdHRlcihsb2NhdGlvbiA9ICcnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNzZXQobG9jYXRpb24pKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IHByb3RvY29sID0gKGxvY2F0aW9uLmluZGV4T2YoJzovLycpID09PSAtMSkgPyB1bmRlZmluZWQgOiBsb2NhdGlvbi5zcGxpdCgnOi8vJylbMF07XHJcbiAgICAgICAgICAgIGxldCBmdWxsUGF0aCA9IGxvY2F0aW9uLnNwbGl0KCc6Ly8nKVsxXTtcclxuICAgICAgICAgICAgbGV0IGhvc3QgPSBmdWxsUGF0aC5zcGxpdCgnLycpWzBdO1xyXG4gICAgICAgICAgICBsZXQgaG9zdE5hbWUgPSBob3N0LnNwbGl0KCc6JylbMF07XHJcbiAgICAgICAgICAgIGxldCBwb3J0ID0gaG9zdC5zcGxpdCgnOicpWzFdO1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IGZ1bGxQYXRoLnNsaWNlKGZ1bGxQYXRoLmluZGV4T2YoJy8nKSk7XHJcbiAgICAgICAgICAgIGxldCBwYXRoTmFtZSA9IHBhdGguc3BsaXQoJz8nKVswXS5zcGxpdCgnIycpWzBdO1xyXG4gICAgICAgICAgICBsZXQgaGFzaCA9IHBhdGguc2xpY2UocGF0aC5pbmRleE9mKCcjJykpO1xyXG4gICAgICAgICAgICBsZXQgcXVlcmllcyA9IChwYXRoLmluZGV4T2YoJyMnKSA+IHBhdGguaW5kZXhPZignPycpKSA/IHBhdGguc2xpY2UocGF0aC5pbmRleE9mKCc/JykpIDogbnVsbDtcclxuICAgICAgICAgICAgbGV0IHZhcnMgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzbnVsbChxdWVyaWVzKSkge1xyXG4gICAgICAgICAgICAgICAgcXVlcmllcyA9IHF1ZXJpZXMuc2xpY2UoMCwgcXVlcmllcy5pbmRleE9mKCcjJykpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gcXVlcmllcy5zbGljZShxdWVyaWVzLmluZGV4T2YoJz8nKSArIDEpLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4IGluIHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gcXVlcnlbeF0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydHNbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyc1t0aGlzLnN0cmluZ1JlcGxhY2UocGFydHNbMF0sICctJywgJyAnKV0gPSB0aGlzLnN0cmluZ1JlcGxhY2UocGFydHNbMV0sICctJywgJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJzW3RoaXMuc3RyaW5nUmVwbGFjZShwYXJ0c1swXSwgJy0nLCAnICcpXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaHR0cGhvc3QgPSBwcm90b2NvbCArICc6Ly8nICsgaG9zdDtcclxuICAgICAgICAgICAgbGV0IHNwbGl0SG9zdCA9IGhvc3Quc3BsaXQoJy4nKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIGxldCBkb21haW4gPSBgJHtzcGxpdEhvc3RbMV19LiR7c3BsaXRIb3N0WzBdfWA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBsb2NhdGlvbiwgcHJvdG9jb2wsIGZ1bGxQYXRoLCBob3N0LCBodHRwaG9zdCwgaG9zdE5hbWUsIHBvcnQsIHBhdGgsIHBhdGhOYW1lLCBxdWVyaWVzLCB2YXJzLCBoYXNoLCBkb21haW4gfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXJsVmFycyhsb2NhdGlvbiA9ICcnKSB7XHJcbiAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIHZhciBxdWVyaWVzID0gKGxvY2F0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEpID8gbnVsbCA6IGxvY2F0aW9uLnNwbGl0KCc/JykucG9wKDApO1xyXG4gICAgICAgIHZhciB2YXJzID0ge307XHJcblxyXG4gICAgICAgIGlmIChxdWVyaWVzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gcXVlcmllcy5zcGxpdCgnJicpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4IGluIHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBxdWVyeVt4XS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyc1t0aGlzLnN0cmluZ1JlcGxhY2UocGFydHNbMF0sICctJywgJyAnKV0gPSB0aGlzLnN0cmluZ1JlcGxhY2UocGFydHNbMV0sICctJywgJyAnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyc1t0aGlzLnN0cmluZ1JlcGxhY2UocGFydHNbMF0sICctJywgJyAnKV0gPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFycztcclxuICAgIH1cclxuXHJcbiAgICB2YXJTaXplKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IG9iamVjdExpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IHJlY3Vyc2UgPSAob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBieXRlcyA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBieXRlcyArPSBvYmplY3QubGVuZ3RoICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygb2JqZWN0ID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBieXRlcyArPSA4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvYmplY3QgPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICBieXRlcyArPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvYmplY3QgPT0gJ29iamVjdCcgJiYgb2JqZWN0TGlzdC5pbmRleE9mKG9iamVjdCkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdExpc3QucHVzaChvYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXMgKz0gcmVjdXJzZShpKTtcclxuICAgICAgICAgICAgICAgICAgICBieXRlcyArPSByZWN1cnNlKG9iamVjdFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBieXRlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZWN1cnNlKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGdW5jOyIsImNvbnN0IFBlcmlvZCA9IHJlcXVpcmUoJy4vUGVyaW9kJyk7XHJcbmNsYXNzIEVtcHR5IHtcclxufVxyXG5cclxuY2xhc3MgSlNFbGVtZW50cyBleHRlbmRzIFBlcmlvZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aGVXaW5kb3cgPSBFbXB0eSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5FbGVtZW50ID0gdGhlV2luZG93LkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IHRoZVdpbmRvdy5kb2N1bWVudDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ3NzKGhyZWYgPSAnJykge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgZWxlbWVudDogJ2xpbmsnLCBhdHRyaWJ1dGVzOiB7IHJlbDogJ3N0eWxlc2hlZXQnLCB0eXBlOiAndGV4dC9jc3MnLCBocmVmIH0gfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kb2N1bWVudFsnaGVhZCddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRbJ2hlYWQnXS5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganNvbkZvcm0oZm9ybSkge1xyXG4gICAgICAgIGxldCBqc29uID0ge307XHJcbiAgICAgICAgbGV0IHBlcmZvcm0gPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwZXJmb3JtKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ25hbWUnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PSAnZmlsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvbltlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGVsZW1lbnQuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uW2VsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyldID0gZWxlbWVudC5maWxlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqc29uW2VsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyldID0gZWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGVyZm9ybShmb3JtKTtcclxuICAgICAgICByZXR1cm4ganNvbjtcclxuICAgIH1cclxuXHJcbiAgICBqc29uRWxlbWVudChfZWxlbWVudF8pIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IF9lbGVtZW50Xy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBhdHRyaWJ1dGVzID0gX2VsZW1lbnRfLmdldEF0dHJpYnV0ZXMoKTtcclxuICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gX2VsZW1lbnRfLmNzcygpO1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2VsZW1lbnRfLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goX2VsZW1lbnRfLmNoaWxkcmVuW2ldLnRvSnNvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgZWxlbWVudCwgYXR0cmlidXRlcywgY2hpbGRyZW4gfVxyXG4gICAgfVxyXG5cclxuICAgIGlzRWxlbWVudChvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgdGhpcy5FbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZyb21PYmplY3Qob2JqZWN0ID0ge30sIHNpbmdsZVBhcmVudCkge1xyXG4gICAgICAgIGxldCBjcmVhdGVkLCBuYW1lO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnQob2JqZWN0KSkge1xyXG4gICAgICAgICAgICBjcmVhdGVkID0gb2JqZWN0O1xyXG4gICAgICAgICAgICBuYW1lID0gY3JlYXRlZC5ub2RlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc0VsZW1lbnQob2JqZWN0LmVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZWQgPSBvYmplY3QuZWxlbWVudDtcclxuICAgICAgICAgICAgbmFtZSA9IGNyZWF0ZWQubm9kZU5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBuYW1lID0gb2JqZWN0LmVsZW1lbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY3JlYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqZWN0LmVsZW1lbnQpOy8vZ2VuZXJhdGUgdGhlIGVsZW1lbnRcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3NldChvYmplY3QuYXR0cmlidXRlcykgJiYgIXRoaXMuaXNFbGVtZW50KG9iamVjdCkpIHsvL3NldCB0aGUgYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBhdHRyIGluIG9iamVjdC5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0ciA9PSAnc3R5bGUnKSB7Ly9zZXQgdGhlIHN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQuY3NzKG9iamVjdC5hdHRyaWJ1dGVzW2F0dHJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgY3JlYXRlZC5zZXRBdHRyaWJ1dGUoYXR0ciwgb2JqZWN0LmF0dHJpYnV0ZXNbYXR0cl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3NldChvYmplY3QudGV4dCkpIHtcclxuICAgICAgICAgICAgY3JlYXRlZC50ZXh0Q29udGVudCA9IG9iamVjdC50ZXh0Oy8vc2V0IHRoZSBpbm5lclRleHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KG9iamVjdC5odG1sKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVkLmlubmVySFRNTCA9IG9iamVjdC5odG1sOy8vc2V0IHRoZSBpbm5lckhUTUxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KG9iamVjdC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgY3JlYXRlZC52YWx1ZSA9IG9iamVjdC52YWx1ZTsvL3NldCB0aGUgdmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCctJykpIHtcclxuICAgICAgICAgICAgY3JlYXRlZCA9IHRoaXMuY3JlYXRlRnJvbUhUTUwoY3JlYXRlZC5vdXRlckhUTUwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNzZXQoc2luZ2xlUGFyZW50KSkge1xyXG4gICAgICAgICAgICBzaW5nbGVQYXJlbnQuYXR0YWNoRWxlbWVudChjcmVhdGVkLCBvYmplY3QuYXR0YWNobWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3NldChvYmplY3QuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZWQubWFrZUVsZW1lbnQob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KG9iamVjdC5vcHRpb25zKSAmJiBBcnJheS5pc0FycmF5KG9iamVjdC5vcHRpb25zKSkgey8vYWRkIG9wdGlvbnMgaWYgaXNzZXQgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIG9mIG9iamVjdC5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gY3JlYXRlZC5tYWtlRWxlbWVudCh7IGVsZW1lbnQ6ICdvcHRpb24nLCB2YWx1ZTogaSwgdGV4dDogaSwgYXR0YWNobWVudDogJ2FwcGVuZCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc3NldChvYmplY3Quc2VsZWN0ZWQpICYmIG9iamVjdC5zZWxlY3RlZCA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PSAnbnVsbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3NldChjcmVhdGVkLmRhdGFzZXQuaWNvbikpIHtcclxuICAgICAgICAgICAgY3JlYXRlZC5hZGRDbGFzc2VzKGNyZWF0ZWQuZGF0YXNldC5pY29uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVhdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZyb21IVE1MKGh0bWxTdHJpbmcgPSAnJywgc2luZ2xlUGFyZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICBsZXQgaHRtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbFN0cmluZywgJ3RleHQvaHRtbCcpO1xyXG5cclxuICAgICAgICBsZXQgY3JlYXRlZCA9IGh0bWwuYm9keS5maXJzdENoaWxkO1xyXG5cclxuICAgICAgICBpZiAoaHRtbFN0cmluZy5pbmRleE9mKCdodG1sJykgPT0gMSkge1xyXG4gICAgICAgICAgICBjcmVhdGVkID0gaHRtbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaHRtbFN0cmluZy5pbmRleE9mKCdib2R5JykgPT0gMSkge1xyXG4gICAgICAgICAgICBjcmVhdGVkID0gaHRtbC5ib2R5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNzZXQoc2luZ2xlUGFyZW50KSkgc2luZ2xlUGFyZW50LmF0dGFjaEVsZW1lbnQoY3JlYXRlZCwgc2luZ2xlUGFyZW50LmF0dGFjaG1lbnQpO1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBlcmNlcHRvckVsZW1lbnQob2JqZWN0LCBzaW5nbGVQYXJlbnQpIHtcclxuICAgICAgICBsZXQgY3JlYXRlZCA9IHRoaXNbb2JqZWN0LnBlcmNlcHRvckVsZW1lbnRdKG9iamVjdC5wYXJhbXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KHNpbmdsZVBhcmVudCkpIHtcclxuICAgICAgICAgICAgc2luZ2xlUGFyZW50LmF0dGFjaEVsZW1lbnQoY3JlYXRlZCwgb2JqZWN0LmF0dGFjaG1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3JlYXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtZW50KHNpbmdsZVBhcmFtID0geyBlbGVtZW50OiAnJywgYXR0cmlidXRlczoge30gfSwgc2luZ2xlUGFyZW50KSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQ7XHJcbiAgICAgICAgLy9pZiBwYXJhbXMgaXMgYSBIVE1MIFN0cmluZ1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2luZ2xlUGFyYW0gPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlRnJvbUhUTUwoc2luZ2xlUGFyYW0sIHNpbmdsZVBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNFbGVtZW50KHNpbmdsZVBhcmFtKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2luZ2xlUGFyYW07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzc2V0KHNpbmdsZVBhcmVudCkpIHNpbmdsZVBhcmVudC5hdHRhY2hFbGVtZW50KGVsZW1lbnQsIHNpbmdsZVBhcmFtLmF0dGFjaG1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIHBhcmFtcyBpcyBvYmplY3RcclxuICAgICAgICBlbHNlIGlmIChzaW5nbGVQYXJhbS5jb25zdHJ1Y3RvciA9PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHNpbmdsZVBhcmFtLnBlcmNlcHRvckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZVBlcmNlcHRvckVsZW1lbnQoc2luZ2xlUGFyYW0sIHNpbmdsZVBhcmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5jcmVhdGVGcm9tT2JqZWN0KHNpbmdsZVBhcmFtLCBzaW5nbGVQYXJlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc3NldChlbGVtZW50LnNldEtleSkgJiYgIXRoaXMuaXNzZXQoZWxlbWVudC5kYXRhc2V0LmRvbUtleSkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRLZXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzc2V0KHNpbmdsZVBhcmFtLmxpc3QpKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gZWxlbWVudC5tYWtlRWxlbWVudCh7IGVsZW1lbnQ6ICdkYXRhbGlzdCcsIG9wdGlvbnM6IHNpbmdsZVBhcmFtLmxpc3QgfSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdsaXN0JywgZWxlbWVudC5kYXRhc2V0LmRvbUtleSk7XHJcbiAgICAgICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKCdpZCcsIGVsZW1lbnQuZGF0YXNldC5kb21LZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNzZXQoc2luZ2xlUGFyYW0uc3RhdGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBvd25lciA9IGVsZW1lbnQuZ2V0UGFyZW50cyhzaW5nbGVQYXJhbS5zdGF0ZS5vd25lciwgc2luZ2xlUGFyYW0uc3RhdGUudmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNudWxsKG93bmVyKSkge1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkU3RhdGUoeyBuYW1lOiBzaW5nbGVQYXJhbS5zdGF0ZS5uYW1lLCBzdGF0ZTogZWxlbWVudCB9KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5zdGF0ZVN0YXR1cyA9ICdzZXQnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnN0YXRlU3RhdHVzID0gJ3BlbmRpbmcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlRWxlbWVudChwYXJhbXMgPSB7IGVsZW1lbnQ6ICcnLCBhdHRyaWJ1dGVzOiB7fSB9LCBwYXJlbnQpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwYXJhbSBvZiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2godGhpcy5nZXRFbGVtZW50KHBhcmFtLCBwYXJlbnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQocGFyYW1zLCBwYXJlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVGb3JtVGV4dGFyZWEoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVGb3JtSW5wdXQoZWxlbWVudCkge1xyXG4gICAgICAgIHZhciB0eXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc251bGwodHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzU3BhY2VTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAodHlwZSA9PSAnZmlsZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNTcGFjZVN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gJ2RhdGUnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1N0cmluZyhlbGVtZW50LmNsYXNzTmFtZSwgJ2Z1dHVyZScpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0RhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNEYXRlVmFsaWQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gJ2VtYWlsJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0VtYWlsKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc051bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Bhc3N3b3JkVmFsaWQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzU3BhY2VTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZUZvcm1TZWxlY3QoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnZhbHVlID09IDAgfHwgZWxlbWVudC52YWx1ZS50b0xvd2VyQ2FzZSgpID09ICdudWxsJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZUZvcm0oZm9ybSwgb3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIG9wdGlvbnMubm9kZU5hbWVzID0gb3B0aW9ucy5ub2RlTmFtZXMgfHwgJ0lOUFVULCBTRUxFQ1QsIFRFWFRBUkVBJztcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWUsXHJcbiAgICAgICAgICAgIG5vZGVOYW1lLFxyXG4gICAgICAgICAgICBlbGVtZW50TmFtZSxcclxuICAgICAgICAgICAgZWxlbWVudHMgPSBmb3JtLmZpbmRBbGwob3B0aW9ucy5ub2RlTmFtZXMpO1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdGVNZSA9IG1lID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAobm9kZU5hbWUgPT0gJ0lOUFVUJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbGlkYXRlRm9ybUlucHV0KG1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChub2RlTmFtZSA9PSAnU0VMRUNUJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbGlkYXRlRm9ybVNlbGVjdChtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZU5hbWUgPT0gJ1RFWFRBUkVBJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbGlkYXRlRm9ybVRleHRhcmVhKG1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy52YWxpZGF0ZU90aGVyRWxlbWVudHMobWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5vZGVOYW1lID0gZWxlbWVudHNbaV0ubm9kZU5hbWU7XHJcbiAgICAgICAgICAgIGVsZW1lbnROYW1lID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdpZ25vcmUnKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc3NldChvcHRpb25zLm5hbWVzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubmFtZXMuaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHZhbGlkYXRlTWUoZWxlbWVudHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdmFsaWRhdGVNZShlbGVtZW50c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZmxhZykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGZsYWcsIGVsZW1lbnROYW1lIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVPdGhlckVsZW1lbnRzKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc3NldChlbGVtZW50LnZhbHVlKSAmJiBlbGVtZW50LnZhbHVlICE9ICcnKSB2YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIFZhbGlkYXRlRm9ybUltYWdlcyhmb3JtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlID09ICdmaWxlJyAmJiAhc2VsZi5pc0ltYWdlVmFsaWQodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ltYWdlVmFsaWQoaW5wdXQpIHtcclxuICAgICAgICB2YXIgZXh0ID0gaW5wdXQuc3Vic3RyaW5nKGlucHV0Lmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChleHQgPT0gXCJwbmdcIiB8fCBleHQgPT0gXCJnaWZcIiB8fCBleHQgPT0gXCJqcGVnXCIgfHwgZXh0ID09IFwianBnXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbWFnZVRvSnNvbihmaWxlLCBjYWxsQmFjayA9ICgpID0+IHsgfSkge1xyXG4gICAgICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICBsZXQgbXlmaWxlID0ge307XHJcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbXlmaWxlLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgIGNhbGxCYWNrKG15ZmlsZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbXlmaWxlLnNpemUgPSBmaWxlLnNpemU7XHJcbiAgICAgICAgbXlmaWxlLnR5cGUgPSBmaWxlLnR5cGU7XHJcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEpTRWxlbWVudHM7IiwiY29uc3QgRnVuYyA9IHJlcXVpcmUoJy4vRnVuYycpO1xyXG5sZXQgZnVuYyA9IG5ldyBGdW5jKClcclxuXHJcbmNsYXNzIE1hdHJpeCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7IHJvd3M6IDIsIGNvbHM6IDIsIGNvbnRlbnRzOiBbXSB9KSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgdGhpc1trZXldID0gcGFyYW1zW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93cyB8fCAyO1xyXG4gICAgICAgIHRoaXMuY29scyA9IHRoaXMuY29scyB8fCAyO1xyXG4gICAgICAgIHRoaXMuY29udGVudHMgPSB0aGlzLmNvbnRlbnRzIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKGNvbnRlbnRzID0gW10pIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHM7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnJvd3M7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldW2pdID0gY29udGVudHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RydWN0dXJlKCkge1xyXG4gICAgICAgIGxldCB7IHJvd3MsIGNvbHMgfSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHsgcm93cywgY29scyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChuID0gMCkge1xyXG4gICAgICAgIGlmIChuIGluc3RhbmNlb2YgTWF0cml4KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFbaV1bal0gKz0gbi5kYXRhW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpXVtqXSArPSBuW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldW2pdICs9IG47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VidHJhY3QobiA9IDApIHtcclxuICAgICAgICBpZiAobiBpbnN0YW5jZW9mIE1hdHJpeCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldW2pdIC09IG4uZGF0YVtpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFbaV1bal0gLT0gbltpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpXVtqXSAtPSBuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG11bHRpcGx5KG4gPSAxKSB7XHJcbiAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBNYXRyaXgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpXVtqXSAqPSBuLmRhdGFbaV1bal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG4gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldW2pdICo9IG5baV1bal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFbaV1bal0gKj0gbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByYW5kb21pemUoKSB7XHJcbiAgICAgICAgdGhpcy5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuYy5yYW5kb20oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc3Bvc2UoKSB7XHJcbiAgICAgICAgbGV0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgoeyByb3dzOiB0aGlzLmNvbHMsIGNvbHM6IHRoaXMucm93cyB9KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld01hdHJpeC5kYXRhW2pdW2ldID0gdGhpcy5kYXRhW2ldW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5rZXlzKG5ld01hdHJpeCkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IG5ld01hdHJpeFtrZXldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcChjYWxsYmFjayA9ICh2YWx1ZSwgLi4ucG9zKSA9PiB7IH0pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZGF0YVtpXVtqXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpXVtqXSA9IGNhbGxiYWNrKHZhbHVlLCBpLCBqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmludCgpIHtcclxuICAgICAgICBjb25zb2xlLnRhYmxlKHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F5KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9BcnJheSgpKVxyXG4gICAgfVxyXG5cclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IFtdXHJcbiAgICAgICAgTWF0cml4Lm1hcCh0aGlzLCB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaGFwZShwYXJhbXMgPSB7IHJvd3M6IDIsIGNvbHM6IDIgfSkge1xyXG4gICAgICAgIHRoaXMudG9BcnJheSgpO1xyXG4gICAgICAgIHRoaXMucm93cyA9IHBhcmFtcy5yb3dzO1xyXG4gICAgICAgIHRoaXMuY29scyA9IHBhcmFtcy5jb2xzO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmNvbnRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2x1bW5zKC4uLmNvbHMpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBjb2xzKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLnB1c2goQXJyYXkuZWFjaCh0aGlzLmRhdGEsIHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93W2NvbHNbaV1dO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um93cyguLi5yb3dzKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5yb3dzOyByKyspIHtcclxuICAgICAgICAgICAgaWYgKHJvd3MuaW5jbHVkZXMocikpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2godGhpcy5kYXRhW3JdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b0FycmF5KG1hdHJpeCkge1xyXG4gICAgICAgIGxldCBhcnJheSA9IFtdXHJcbiAgICAgICAgTWF0cml4Lm1hcChtYXRyaXgsIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdWJ0cmFjdChhID0gbmV3IE1hdHJpeCgpLCBiKSB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gW10sIHJvd3MgPSBhLnJvd3MsIGNvbHMgPSBhLmNvbHM7XHJcblxyXG4gICAgICAgIGlmIChiIGluc3RhbmNlb2YgTWF0cml4KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLnB1c2goYS5kYXRhW2ldW2pdIC0gYi5kYXRhW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChiIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLnB1c2goYS5kYXRhW2ldW2pdIC0gYltpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cy5wdXNoKGEuZGF0YVtpXVtqXSAtIGIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeCh7IHJvd3MsIGNvbHMsIGNvbnRlbnRzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGQoYSA9IG5ldyBNYXRyaXgoKSwgYikge1xyXG4gICAgICAgIGxldCBjb250ZW50cyA9IFtdLCByb3dzID0gYS5yb3dzLCBjb2xzID0gYS5jb2xzO1xyXG5cclxuICAgICAgICBpZiAoYiBpbnN0YW5jZW9mIE1hdHJpeCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cy5wdXNoKGEuZGF0YVtpXVtqXSArIGIuZGF0YVtpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYS5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cy5wdXNoKGEuZGF0YVtpXVtqXSArIGJbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHMucHVzaChhLmRhdGFbaV1bal0gKyBiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoeyByb3dzLCBjb2xzLCBjb250ZW50cyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbXVsdGlwbHkoYSA9IG5ldyBNYXRyaXgoKSwgYikge1xyXG4gICAgICAgIGxldCBjb250ZW50cyA9IFtdLCByb3dzLCBjb2xzO1xyXG5cclxuICAgICAgICBpZiAoYiBpbnN0YW5jZW9mIE1hdHJpeCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGEuY29scyAhPT0gYi5yb3dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29sdW1ucyBvZiBBIG11c3QgZXF1YWwgcm93cyBvZiBCJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJvd3MgPSBhLnJvd3M7XHJcbiAgICAgICAgICAgIGNvbHMgPSBiLmNvbHM7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGEuY29sczsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSBhLmRhdGFbaV1ba10gKiBiLmRhdGFba11bal07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLnB1c2goc3VtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChiIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHJcbiAgICAgICAgICAgIHJvd3MgPSBhLnJvd3M7XHJcbiAgICAgICAgICAgIGNvbHMgPSBhLmNvbHM7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGEuY29sczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHMucHVzaChhLmRhdGFbaV1bal0gKiBiW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLnB1c2goYS5kYXRhW2ldW2pdICogYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4KHsgcm93cywgY29scywgY29udGVudHMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpdmlkZShhID0gbmV3IE1hdHJpeCgpLCBiKSB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gW10sIHJvd3MsIGNvbHM7XHJcblxyXG4gICAgICAgIGlmIChiIGluc3RhbmNlb2YgTWF0cml4KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoYS5jb2xzICE9PSBiLnJvd3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb2x1bW5zIG9mIEEgbXVzdCBlcXVhbCByb3dzIG9mIEInKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcm93cyA9IGEucm93cztcclxuICAgICAgICAgICAgY29scyA9IGIuY29scztcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYS5jb2xzOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IChhLmRhdGFbaV1ba10gLyBiLmRhdGFba11bal0pIHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLnB1c2goc3VtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChiIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHJcbiAgICAgICAgICAgIHJvd3MgPSBhLnJvd3M7XHJcbiAgICAgICAgICAgIGNvbHMgPSBhLmNvbHM7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGEuY29sczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHMucHVzaCgoYS5kYXRhW2ldW2pdIC8gYltpXVtqXSkgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cy5wdXNoKChhLmRhdGFbaV1bal0gLyBiKSB8fCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoeyByb3dzLCBjb2xzLCBjb250ZW50cyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9taXplKG1hdHJpeCA9IG5ldyBNYXRyaXgoKSkge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXgubWFwKG1hdHJpeCwgKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmMucmFuZG9tKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cmFuc3Bvc2UobWF0cml4ID0gbmV3IE1hdHJpeCgpKSB7XHJcbiAgICAgICAgbGV0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgoeyByb3dzOiBtYXRyaXguY29scywgY29sczogbWF0cml4LnJvd3MgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4LmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbmV3TWF0cml4LmRhdGFbal1baV0gPSBtYXRyaXguZGF0YVtpXVtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYXAobWF0cml4ID0gbmV3IE1hdHJpeCgpLCBjYWxsYmFjayA9ICgpID0+IHsgfSkge1xyXG4gICAgICAgIGxldCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KHsgcm93czogbWF0cml4LnJvd3MsIGNvbHM6IG1hdHJpeC5jb2xzIH0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG1hdHJpeC5kYXRhW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgbmV3TWF0cml4LmRhdGFbaV1bal0gPSBjYWxsYmFjayh2YWx1ZSwgaSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld01hdHJpeDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KGNvbnRlbnRzID0gW10pIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeCh7IHJvd3M6IGNvbnRlbnRzLmxlbmd0aCwgY29sczogMSwgY29udGVudHMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlc2hhcGUocGFyYW1zID0geyByb3dzOiAyLCBjb2xzOiAyLCBtYXRyaXg6IG5ldyBNYXRyaXggfSkge1xyXG4gICAgICAgIHBhcmFtcy5jb250ZW50cyA9IE1hdHJpeC50b0FycmF5KHBhcmFtcy5tYXRyaXgpO1xyXG4gICAgICAgIGRlbGV0ZSBwYXJhbXMubWF0cml4O1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4KHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZShtYXRyaXggPSBuZXcgTWF0cml4KCkpIHtcclxuICAgICAgICBsZXQgY29udGVudHMgPSBNYXRoLm5vcm1hbGl6ZShNYXRyaXgudG9BcnJheShtYXRyaXgpKTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeCh7IHJvd3M6IG1hdHJpeC5yb3dzLCBjb2xzOiBtYXRyaXguY29scywgY29udGVudHMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpYWdvbmFsKGFycmF5ID0gW10pIHtcclxuICAgICAgICBsZXQgbWF0cml4ID0gTWF0cml4LnNxdWFyZShhcnJheS5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gbWF0cml4LmRhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBtYXRyaXguZGF0YVtpXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gaikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5kYXRhW2ldW2pdID0gYXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0cml4LnRvQXJyYXkoKTtcclxuICAgICAgICByZXR1cm4gbWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1bml0KHNpemUgPSAyKSB7XHJcbiAgICAgICAgbGV0IG1hdHJpeCA9IE1hdHJpeC5zcXVhcmUoc2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBtYXRyaXguZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqIGluIG1hdHJpeC5kYXRhW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4LmRhdGFbaV1bal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdHJpeC50b0FycmF5KCk7XHJcbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3F1YXJlKHNpemUgPSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoeyByb3dzOiBzaXplLCBjb2xzOiBzaXplIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tTWF0cml4Q29scyhtYXRyaXggPSBuZXcgTWF0cml4KCksIC4uLmNvbHMpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBtYXRyaXguZ2V0Q29sdW1ucyguLi5jb2xzKTtcclxuICAgICAgICBsZXQgY29udGVudHMgPSBBcnJheS5mbGF0dGVuKHZhbHVlKTtcclxuICAgICAgICBsZXQgbmV3TWF0cml4ID0gbmV3IE1hdHJpeCh7IHJvd3M6IHZhbHVlLmxlbmd0aCwgY29sczogbWF0cml4LmNvbHMsIGNvbnRlbnRzIH0pO1xyXG4gICAgICAgIG5ld01hdHJpeC50cmFuc3Bvc2UoKTtcclxuICAgICAgICByZXR1cm4gbmV3TWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWVwTWF0cml4KGRpbWVuc2lvbnMgPSBbXSwgY29udGVudHMgPSBbXSkge1xyXG4gICAgICAgIC8vc3BsaXQgdGhlIGRpbWVuc2lvbnMgaW50byBhbiBhcnJheSBvZiBhcnJheXMgb2YgbGVuZ3RoIDJcclxuICAgICAgICBsZXQgbWF0cml4RGltZW5zaW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBtYXRyaXhEaW1lbnNpb25zLnB1c2goeyByb3dzOiBkaW1lbnNpb25zW2ldLCBjb2xzOiBkaW1lbnNpb25zWysraV0gfHwgMSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYWtlTWF0cml4ID0gKGxheWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeERpbWVuc2lvbnNbbGF5ZXJdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsYXllciArIDEgPT0gbWF0cml4RGltZW5zaW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG1hdHJpeC5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50cy5zaGlmdCgpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hdHJpeC5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTWF0cml4KGxheWVyICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWF0cml4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1ha2VNYXRyaXgoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWF0cml4OyIsImNvbnN0IEZ1bmMgPSByZXF1aXJlKCcuL0Z1bmMnKTtcclxuY29uc3QgTWF0cml4ID0gcmVxdWlyZSgnLi9NYXRyaXgnKTtcclxuY29uc3QgQXJyYXlMaWJyYXJ5ID0gcmVxdWlyZSgnLi8uLi9mdW5jdGlvbnMvQXJyYXlMaWJyYXJ5Jyk7XHJcblxyXG5sZXQgZnVuYyA9IG5ldyBGdW5jKCk7XHJcbmxldCBhcnJheUxpYnJhcnkgPSBuZXcgQXJyYXlMaWJyYXJ5KCk7XHJcblxyXG5jbGFzcyBOZXVyYWxOZXR3b3JrIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIGZ1bmMub2JqZWN0LmNvcHkocGFyYW1zLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmloV2VpZ2h0cyA9IG5ldyBNYXRyaXgoeyByb3dzOiB0aGlzLmhOb2RlcywgY29sczogdGhpcy5pTm9kZXMgfSk7XHJcbiAgICAgICAgdGhpcy5paFdlaWdodHMucmFuZG9taXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaWhCaWFzID0gbmV3IE1hdHJpeCh7IHJvd3M6IHRoaXMuaE5vZGVzLCBjb2xzOiAxIH0pO1xyXG4gICAgICAgIHRoaXMuaWhCaWFzLnJhbmRvbWl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmhvV2VpZ2h0cyA9IG5ldyBNYXRyaXgoeyByb3dzOiB0aGlzLm9Ob2RlcywgY29sczogdGhpcy5oTm9kZXMgfSk7XHJcbiAgICAgICAgdGhpcy5ob1dlaWdodHMucmFuZG9taXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9CaWFzID0gbmV3IE1hdHJpeCh7IHJvd3M6IHRoaXMub05vZGVzLCBjb2xzOiAxIH0pO1xyXG4gICAgICAgIHRoaXMuaG9CaWFzLnJhbmRvbWl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmxyID0gdGhpcy5sciB8fCAwLjE7XHJcbiAgICB9XHJcblxyXG4gICAgZmVlZEZvd2FyZChpbnB1dEFycmF5ID0gW10pIHtcclxuICAgICAgICBsZXQgaW5wdXRzID0gaW5wdXRBcnJheSBpbnN0YW5jZW9mIE1hdHJpeCA/IGlucHV0QXJyYXkgOiB0aGlzLnByZXBhcmVJbnB1dHMoaW5wdXRBcnJheSk7XHJcblxyXG4gICAgICAgIGxldCBoaWRkZW5zID0gTWF0cml4Lm11bHRpcGx5KHRoaXMuaWhXZWlnaHRzLCBpbnB1dHMpO1xyXG4gICAgICAgIGhpZGRlbnMuYWRkKHRoaXMuaWhCaWFzKTtcclxuICAgICAgICBoaWRkZW5zLm1hcChzaWdtb2lkKTtcclxuXHJcbiAgICAgICAgbGV0IG91dHB1dHMgPSBNYXRyaXgubXVsdGlwbHkodGhpcy5ob1dlaWdodHMsIGhpZGRlbnMpO1xyXG4gICAgICAgIG91dHB1dHMuYWRkKHRoaXMuaG9CaWFzKTtcclxuICAgICAgICBvdXRwdXRzLm1hcChzaWdtb2lkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaW5wdXRzLCBoaWRkZW5zLCBvdXRwdXRzIH07XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnlCYWNrKHRhcmdldEFycmF5ID0gW10pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJlZGljdChpbnB1dEFycmF5ID0gW10pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mZWVkRm93YXJkKGlucHV0QXJyYXkpLm91dHB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2VpZ2h0c1VwZGF0ZShpbnB1dHMgPSBuZXcgTWF0cml4KCksIG91dHB1dHMgPSBuZXcgTWF0cml4KCksIGVycm9ycyA9IDEpIHtcclxuICAgICAgICBsZXQgZ3JhZGllbnRzID0gTWF0cml4Lm1hcChvdXRwdXRzLCBkU2lnbW9pZCk7XHJcbiAgICAgICAgZ3JhZGllbnRzLm11bHRpcGx5KGVycm9ycyk7XHJcbiAgICAgICAgZ3JhZGllbnRzLm11bHRpcGx5KHRoaXMubHIpO1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRzVHJhbnNwb3NlZCA9IE1hdHJpeC50cmFuc3Bvc2UoaW5wdXRzKTtcclxuICAgICAgICBsZXQgY2hhbmdlID0gTWF0cml4Lm11bHRpcGx5KGdyYWRpZW50cywgaW5wdXRzVHJhbnNwb3NlZCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNoYW5nZSwgZ3JhZGllbnRzIH07XHJcbiAgICB9XHJcblxyXG4gICAgYmFja3Byb3BhZ2F0ZShpbnB1dHMgPSBbXSwgdGFyZ2V0cyA9IG5ldyBNYXRyaXgoKSkge1xyXG4gICAgICAgIGxldCB7IGhpZGRlbnMsIG91dHB1dHMgfSA9IHRoaXMuZmVlZEZvd2FyZChpbnB1dHMpO1xyXG5cclxuICAgICAgICBsZXQgaG9FcnJvcnMgPSBNYXRyaXguc3VidHJhY3QodGFyZ2V0cywgb3V0cHV0cyk7XHJcbiAgICAgICAgbGV0IGhvVXBkYXRlcyA9IHRoaXMuZ2V0V2VpZ2h0c1VwZGF0ZShoaWRkZW5zLCBvdXRwdXRzLCBob0Vycm9ycyk7XHJcbiAgICAgICAgdGhpcy5ob1dlaWdodHMuYWRkKGhvVXBkYXRlcy5jaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuaG9CaWFzLmFkZChob1VwZGF0ZXMuZ3JhZGllbnRzKTtcclxuXHJcbiAgICAgICAgbGV0IGhvV2VpZ2h0c1RyYW5zcG9zZWQgPSBNYXRyaXgudHJhbnNwb3NlKHRoaXMuaG9XZWlnaHRzKTtcclxuICAgICAgICBsZXQgaWhFcnJvcnMgPSBNYXRyaXgubXVsdGlwbHkoaG9XZWlnaHRzVHJhbnNwb3NlZCwgaG9FcnJvcnMpO1xyXG4gICAgICAgIGxldCBpaFVwZGF0ZXMgPSB0aGlzLmdldFdlaWdodHNVcGRhdGUoaW5wdXRzLCBoaWRkZW5zLCBpaEVycm9ycyk7XHJcbiAgICAgICAgdGhpcy5paFdlaWdodHMuYWRkKGloVXBkYXRlcy5jaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuaWhCaWFzLmFkZChpaFVwZGF0ZXMuZ3JhZGllbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFpbihwYXJhbXMgPSB7IHRyYWluaW5nRGF0YTogW10sIHBlcmlvZDogMSwgZXBvY2g6IDEgfSkge1xyXG4gICAgICAgIGxldCBpbnB1dEFycmF5ID0gW10sIHRhcmdldEFycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZGF0YSBvZiBwYXJhbXMudHJhaW5pbmdEYXRhKSB7XHJcbiAgICAgICAgICAgIGlucHV0QXJyYXkucHVzaChkYXRhLmlucHV0cyk7XHJcbiAgICAgICAgICAgIHRhcmdldEFycmF5LnB1c2goZGF0YS50YXJnZXRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbnB1dHMgPSBhcnJheUxpYnJhcnkuZWFjaChpbnB1dEFycmF5LCB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVJbnB1dHModmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0cyA9IGFycmF5TGlicmFyeS5lYWNoKHRhcmdldEFycmF5LCB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVUYXJnZXRzKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHJ1biA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbXMucGVyaW9kOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogaW4gaW5wdXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrcHJvcGFnYXRlKGlucHV0c1tqXSwgdGFyZ2V0c1tqXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmdW5jLmlzc2V0KHBhcmFtcy5lcG9jaCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBwYXJhbXMuZXBvY2g7IHArKykge1xyXG4gICAgICAgICAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBydW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGVhcm5pbmdSYXRlKGxyID0gMC4xKSB7XHJcbiAgICAgICAgdGhpcy5sciA9IGxyO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVJbnB1dHMoaW5wdXRBcnJheSA9IFtdKSB7XHJcbiAgICAgICAgbGV0IGlucHV0cyA9IE1hdHJpeC5mcm9tQXJyYXkoTWF0aC5ub3JtYWxpemUoaW5wdXRBcnJheSkpO1xyXG4gICAgICAgIGlucHV0cy5tdWx0aXBseSgwLjk5KTtcclxuICAgICAgICBpbnB1dHMuYWRkKDAuMDEpO1xyXG4gICAgICAgIHJldHVybiBpbnB1dHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZVRhcmdldHModGFyZ2V0QXJyYXkgPSBbXSkge1xyXG4gICAgICAgIGxldCB0YXJnZXRzID0gTWF0cml4LmZyb21BcnJheSh0YXJnZXRBcnJheSk7XHJcbiAgICAgICAgdGFyZ2V0cy5hZGQoMC4wMSk7XHJcbiAgICAgICAgdGFyZ2V0cy5tdWx0aXBseSgwLjk5KTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0cztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOZXVyYWxOZXR3b3JrOyIsImNvbnN0IEZ1bmMgPSByZXF1aXJlKCcuL0Z1bmMnKTtcclxuXHJcbmNsYXNzIFBlcmlvZCBleHRlbmRzIEZ1bmMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpbU1vbnRoQXJyYXkoKSB7XHJcbiAgICAgICAgbGV0IG1vbnRocyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb250aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbW9udGhzLnB1c2godGhpcy5tb250aHNbaV0uc2xpY2UoMCwgMykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbW9udGhzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFllYXJzKGNvdW50ID0gNSkge1xyXG4gICAgICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRZZWFyKCkgKyAxOTAwO1xyXG4gICAgICAgIGxldCBmZXRjaGVkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZldGNoZWQucHVzaChgJHt5ZWFyIC0gMX0tJHt5ZWFyfWApO1xyXG4gICAgICAgICAgICB5ZWFyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmZXRjaGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVGltZVZhbGlkKHRpbWUpIHtcclxuICAgICAgICB0aW1lID0gdGltZS5zcGxpdCgnOicpO1xyXG4gICAgICAgIGlmICh0aW1lLmxlbmd0aCA9PSAyIHx8IHRpbWUubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgdmFyIGhvdXIgPSBuZXcgTnVtYmVyKHRpbWVbMF0pO1xyXG4gICAgICAgICAgICB2YXIgbWludXRlcyA9IG5ldyBOdW1iZXIodGltZVsxXSk7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRzID0gMDtcclxuICAgICAgICAgICAgdmFyIHRvdGFsID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aW1lLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gbmV3IE51bWJlcih0aW1lWzJdKTtcclxuICAgICAgICAgICAgICAgIGlmIChob3VyID4gMjMgfHwgaG91ciA8IDAgfHwgbWludXRlcyA+IDU5IHx8IG1pbnV0ZXMgPCAwIHx8IHNlY29uZHMgPiA1OSB8fCBzZWNvbmRzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChob3VyID4gMjMgfHwgaG91ciA8IDAgfHwgbWludXRlcyA+IDU5IHx8IG1pbnV0ZXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG90YWwgPSAoaG91ciAqIDYwICogNjApICsgKG1pbnV0ZXMgKiA2MCkgKyBzZWNvbmRzO1xyXG4gICAgICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lKHRpbWUpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9ICh0aGlzLmlzc2V0KHRpbWUpKSA/IG5ldyBEYXRlKE1hdGguZmxvb3IodGltZSkpIDogbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGhvdXIgPSAoaG91ci5sZW5ndGggPiAxKSA/IGhvdXIgOiBgMCR7aG91cn1gO1xyXG4gICAgICAgIG1pbnV0ZXMgPSAobWludXRlcy5sZW5ndGggPiAxKSA/IG1pbnV0ZXMgOiBgMCR7bWludXRlc31gO1xyXG4gICAgICAgIHNlY29uZHMgPSAoc2Vjb25kcy5sZW5ndGggPiAxKSA/IHNlY29uZHMgOiBgMCR7c2Vjb25kc31gO1xyXG5cclxuICAgICAgICByZXR1cm4gYCR7aG91cn06JHttaW51dGVzfToke3NlY29uZHN9YDtcclxuICAgIH1cclxuXHJcbiAgICBkYXRlKHRpbWUpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9ICh0aGlzLmlzc2V0KHRpbWUpKSA/IG5ldyBEYXRlKE1hdGguZmxvb3IodGltZSkpIDogbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBkYXkgPSAoZGF5Lmxlbmd0aCA+IDEpID8gZGF5IDogYDAke2RheX1gO1xyXG4gICAgICAgIG1vbnRoID0gKG1vbnRoLmxlbmd0aCA+IDEpID8gbW9udGggOiBgMCR7bW9udGh9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgdGltZV9kYXRlKHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy50aW1lKHRpbWUpfSwgJHt0aGlzLmRhdGUodGltZSl9YDtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lVG9kYXkoKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgbGV0IHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmlzVGltZVZhbGlkKGAke2hvdXJ9OiR7bWludXRlc306JHtzZWNvbmRzfWApO1xyXG4gICAgICAgIHJldHVybiB0aW1lID8gdGltZSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGF0ZVZhbGlkKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEYXRlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1llYXJWYWxpZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9udGhWYWxpZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RheVZhbGlkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGF5VmFsaWQodmFsdWUpIHtcclxuICAgICAgICB2YXIgdl9kYXkgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZfZGF5ICs9IHZhbHVlW2kgKyA4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxpbWl0ID0gMDtcclxuICAgICAgICB2YXIgbW9udGggPSB0aGlzLmlzTW9udGhWYWxpZCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChtb250aCA9PSAnMDEnKSB7XHJcbiAgICAgICAgICAgIGxpbWl0ID0gMzE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb250aCA9PSAnMDInKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTGVhcFllYXIodGhpcy5pc1llYXJWYWxpZCh2YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBsaW1pdCA9IDI5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGltaXQgPSAyODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzAzJykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzA0Jykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzA1Jykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzA2Jykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzA3Jykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzA4Jykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzA5Jykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzEwJykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzExJykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzEyJykge1xyXG4gICAgICAgICAgICBsaW1pdCA9IDMxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxpbWl0IDwgdl9kYXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2X2RheTtcclxuICAgIH1cclxuXHJcbiAgICBpc0RhdGUodmFsdWUpIHtcclxuICAgICAgICB2YXIgbGVuID0gdmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW4gPT0gMTApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEaWdpdCh2YWx1ZVt4XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPT0gNCB8fCB4ID09IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlW3hdID09ICctJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc01vbnRoVmFsaWQodmFsdWUpIHtcclxuICAgICAgICB2YXIgdl9tb250aCA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgdl9tb250aCArPSB2YWx1ZVtpICsgNV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2X21vbnRoID4gMTIgfHwgdl9tb250aCA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2X21vbnRoO1xyXG4gICAgfVxyXG5cclxuICAgIGlzWWVhclZhbGlkKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCdZJyk7XHJcbiAgICAgICAgdmFyIHZfeWVhciA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgdl95ZWFyICs9IHZhbHVlW2kgKyAwXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZfeWVhciA+IHllYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2X3llYXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0WWVhcih2YWx1ZSkge1xyXG4gICAgICAgIHZhciB2X3llYXIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZfeWVhciArPSB2YWx1ZVtpICsgMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2X3llYXI7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMZWFwWWVhcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAlIDQgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoKHZhbHVlICUgMTAwID09IDApICYmICh2YWx1ZSAlIDQwMCAhPSAwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGgobW9udGgsIHllYXIpIHtcclxuICAgICAgICB2YXIgZGF5cyA9IDA7XHJcbiAgICAgICAgaWYgKG1vbnRoID09ICcwMScpIHtcclxuICAgICAgICAgICAgZGF5cyA9IDMxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzAyJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xlYXBZZWFyKHllYXIpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzID0gMjk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzID0gMjg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoID09ICcwMycpIHtcclxuICAgICAgICAgICAgZGF5cyA9IDMxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzA0Jykge1xyXG4gICAgICAgICAgICBkYXlzID0gMzA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb250aCA9PSAnMDUnKSB7XHJcbiAgICAgICAgICAgIGRheXMgPSAzMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoID09ICcwNicpIHtcclxuICAgICAgICAgICAgZGF5cyA9IDMwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzA3Jykge1xyXG4gICAgICAgICAgICBkYXlzID0gMzE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb250aCA9PSAnMDgnKSB7XHJcbiAgICAgICAgICAgIGRheXMgPSAzMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoID09ICcwOScpIHtcclxuICAgICAgICAgICAgZGF5cyA9IDMwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT0gJzEwJykge1xyXG4gICAgICAgICAgICBkYXlzID0gMzE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb250aCA9PSAnMTEnKSB7XHJcbiAgICAgICAgICAgIGRheXMgPSAzMDtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoID09ICcxMicpIHtcclxuICAgICAgICAgICAgZGF5cyA9IDMxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF5cztcclxuICAgIH1cclxuXHJcbiAgICBkYXRlVmFsdWUoZGF0ZSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IDA7XHJcbiAgICAgICAgdmFyIHllYXIgPSB0aGlzLmdldFllYXIoZGF0ZSkgKiAzNjU7XHJcbiAgICAgICAgdmFyIG1vbnRoID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuaXNNb250aFZhbGlkKGRhdGUpOyBpKyspIHtcclxuICAgICAgICAgICAgbW9udGggPSB0aGlzLmRheXNJbk1vbnRoKGksIHRoaXMuZ2V0WWVhcihkYXRlKSkgLyAxICsgbW9udGggLyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGF5ID0gdGhpcy5pc0RheVZhbGlkKGRhdGUpO1xyXG4gICAgICAgIHZhbHVlID0gKHllYXIgLyAxKSArIChtb250aCAvIDEpICsgKGRheSAvIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9kYXkoKSB7XHJcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGU7XHJcbiAgICAgICAgdmFyIG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSAvIDEgKyAxO1xyXG4gICAgICAgIGlmIChtb250aC5sZW5ndGggIT0gMikge1xyXG4gICAgICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2RheSA9ICh0b2RheS5nZXRGdWxsWWVhcigpKSArICctJyArIG1vbnRoICsgJy0nICsgdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB0b2RheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGRheXMgPSBNYXRoLmZsb29yKHZhbHVlIC8gdGhpcy5zZWNvbmRzSW5EYXlzKDEpKTtcclxuXHJcbiAgICAgICAgdmFsdWUgLT0gdGhpcy5zZWNvbmRzSW5EYXlzKGRheXMpO1xyXG5cclxuICAgICAgICBsZXQgaG91cnMgPSBNYXRoLmZsb29yKHZhbHVlIC8gdGhpcy5zZWNvbmRzSW5Ib3VycygxKSk7XHJcbiAgICAgICAgdmFsdWUgLT0gdGhpcy5zZWNvbmRzSW5Ib3Vycyhob3Vycyk7XHJcblxyXG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih2YWx1ZSAvIHRoaXMuc2Vjb25kc0luTWludXRlcygxKSk7XHJcbiAgICAgICAgdmFsdWUgLT0gdGhpcy5zZWNvbmRzSW5NaW51dGVzKG1pbnV0ZXMpO1xyXG5cclxuICAgICAgICBsZXQgc2Vjb25kcyA9IHZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4geyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGVXaXRoVG9kYXkoZGF0ZSkge1xyXG4gICAgICAgIHZhciB0b2RheSA9IE1hdGguZmxvb3IodGhpcy5kYXRlVmFsdWUodGhpcy50b2RheSgpKSk7XHJcbiAgICAgICAgbGV0IGRhdGVWYWx1ZSA9IE1hdGguZmxvb3IodGhpcy5kYXRlVmFsdWUoZGF0ZSkpO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB7IGRpZmY6IChkYXRlVmFsdWUgLSB0b2RheSksIHdoZW46ICcnIH07XHJcbiAgICAgICAgaWYgKGRhdGVWYWx1ZSA+IHRvZGF5KSB7XHJcbiAgICAgICAgICAgIHZhbHVlLndoZW4gPSAnZnV0dXJlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0ZVZhbHVlID09IHRvZGF5KSB7XHJcbiAgICAgICAgICAgIHZhbHVlLndoZW4gPSAndG9kYXknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUud2hlbiA9ICdwYXN0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGVTdHJpbmcoZGF0ZSkge1xyXG4gICAgICAgIHZhciB5ZWFyID0gbmV3IE51bWJlcih0aGlzLmdldFllYXIoZGF0ZSkpO1xyXG4gICAgICAgIHZhciBtb250aCA9IG5ldyBOdW1iZXIodGhpcy5pc01vbnRoVmFsaWQoZGF0ZSkpO1xyXG4gICAgICAgIHZhciBkYXkgPSBuZXcgTnVtYmVyKHRoaXMuaXNEYXlWYWxpZChkYXRlKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXkgKyAnICcgKyB0aGlzLm1vbnRoc1ttb250aCAtIDFdICsgJywgJyArIHllYXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2Vjb25kc0luRGF5cyhkYXlzKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gTWF0aC5mbG9vcihkYXlzICogMjQgKiA2MCAqIDYwKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2Vjb25kc0luSG91cnMoaG91cnMpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihob3VycyAqIDYwICogNjApO1xyXG4gICAgfVxyXG5cclxuICAgIHNlY29uZHNJbk1pbnV0ZXMobWludXRlcykge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pbnV0ZXMgKiA2MCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Vjb25kc1RpbGxEYXRlKGRhdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRzSW5EYXlzKE1hdGguZmxvb3IodGhpcy5kYXRlVmFsdWUoZGF0ZSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWNvbmRzVGlsbFRvZGF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlY29uZHNUaWxsRGF0ZSh0aGlzLnRvZGF5KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlY29uZHNUaWxsTm93KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlY29uZHNUaWxsRGF0ZSh0aGlzLnRvZGF5KCkpICsgdGhpcy50aW1lVG9kYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWNvbmRzVGlsbE1vbWVudChtb21lbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRzVGlsbERhdGUodGhpcy5kYXRlKG1vbWVudCkpICsgdGhpcy5pc1RpbWVWYWxpZCh0aGlzLnRpbWUobW9tZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKC4uLmRhdGEpIHtcclxuICAgICAgICBsZXQgdGltZSA9IGBbJHt0aGlzLnRpbWUoKX1dOmA7XHJcbiAgICAgICAgY29uc29sZS5sb2codGltZSwgLi4uZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGVyaW9kOyIsImNvbnN0IEpTRWxlbWVudHMgPSByZXF1aXJlKCcuL0pTRWxlbWVudHMnKTtcclxuXHJcbmNsYXNzIEVtcHR5IHtcclxufVxyXG5cclxuY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBKU0VsZW1lbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRoZVdpbmRvdyA9IEVtcHR5KSB7XHJcbiAgICAgICAgc3VwZXIodGhlV2luZG93KTtcclxuICAgICAgICB0aGlzLnZpcnR1YWwgPSB7fTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRMaWJyYXJ5KHRoZVdpbmRvdy5FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmh0bWxDb2xsZWN0aW9uTGlicmFyeSh0aGVXaW5kb3cuSFRNTENvbGxlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMubm9kZUxpYnJhcnkodGhlV2luZG93Lk5vZGUpO1xyXG4gICAgICAgIHRoaXMubm9kZUxpc3RMaWJyYXJ5KHRoZVdpbmRvdy5Ob2RlTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudExpYnJhcnkoRWxlbWVudCA9IEVtcHR5KSB7XHJcbiAgICAgICAgLy9GcmFtZXdvcmsgd2l0aCBqc2RvbVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5jaGFuZ2VOb2RlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHJ1Y3R1cmUgPSB0aGlzLnRvSnNvbigpO1xyXG4gICAgICAgICAgICBzdHJ1Y3R1cmUuZWxlbWVudCA9IG5hbWU7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gc2VsZi5jcmVhdGVFbGVtZW50KHN0cnVjdHVyZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnRvSnNvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzID0gdGhpcy5nZXRBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3R5bGUgPSB0aGlzLmNzcygpO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuY2hpbGRyZW5baV0udG9Kc29uKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVsZW1lbnQsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IFtdLCBwYXJhbXMgPSB7IHNlbGVjdGVkOiAnJyB9KSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQocGFyYW1zLmZsYWcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gb3B0aW9uc1tpXS50ZXh0IHx8IG9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb25zW2ldLnZhbHVlIHx8IG9wdGlvbnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMubWFrZUVsZW1lbnQoeyBlbGVtZW50OiAnb3B0aW9uJywgYXR0cmlidXRlczogeyB2YWx1ZSB9LCB0ZXh0IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT0gJ251bGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc3NldChwYXJhbXMuc2VsZWN0ZWQpICYmIHZhbHVlID09IHBhcmFtcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5jb21tb25BbmNlc3RvciA9IGZ1bmN0aW9uIChlbGVtZW50QSwgZWxlbWVudEIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYW5jZXN0b3JBIG9mIGVsZW1lbnRBLnBhcmVudHMoKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYW5jZXN0b3JCIG9mIGVsZW1lbnRCLnBhcmVudHMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmNlc3RvckEgPT0gYW5jZXN0b3JCKSByZXR1cm4gYW5jZXN0b3JBO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm9uQWRkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2sgPSAoKSA9PiB7IH0pIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWRJbnRvRG9jdW1lbnQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9TdG9yZSB0aGUgc3RhdGVzIG9mIGFuIGVsZW1lbnQgaGVyZVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnN0YXRlcyA9IHt9O1xyXG5cclxuICAgICAgICAvL1RoaXMgaXMgYSB0ZW1wb3Jhcnkgc3RvcmFnZSBmb3IgZWxlbWVudHMgYXR0cmlidXRlc1xyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnRlbXAgPSB7fTtcclxuXHJcbiAgICAgICAgLy9UaGlzIGxpc3RlbnMgYW5kIGhhbmRsZXMgZm9yIG11bHRpcGxlIGJ1YmJsZWQgZXZlbnRzXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWFueUJ1YmJsZWRFdmVudHMgPSBmdW5jdGlvbiAoZXZlbnRzLCBjYWxsYmFjayA9ICgpID0+IHsgfSkge1xyXG4gICAgICAgICAgICBldmVudHMgPSBldmVudHMuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZWRFdmVudChldmVudC50cmltKCksIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9UaGlzIGxpc3RlbnMgYW5kIGhhbmRsZXMgZm9yIG11bHRpcGxlIGJ1YmJsZWQgZXZlbnRzIHRoYXQgZGlkIG5vdCBidWJibGVcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYW55Tm90QnViYmxlZEV2ZW50cyA9IGZ1bmN0aW9uIChldmVudHMsIGNhbGxiYWNrID0gKCkgPT4geyB9KSB7XHJcbiAgICAgICAgICAgIGV2ZW50cyA9IGV2ZW50cy5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90QnViYmxlZEV2ZW50KGV2ZW50LnRyaW0oKSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1RoaXMgaGFuZGxlcyBhbGwgZXZlbnRzIHRoYXQgYXJlIGJ1YmJsZWQgd2l0aGluIGFuIGVsZW1lbnQgYW5kIGl0J3MgY2hpbGRyZW5cclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5idWJibGVkRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrID0gKCkgPT4geyB9KSB7XHJcbiAgICAgICAgICAgIC8vTGlzdGVuIGZvciB0aGlzIGV2ZW50IG9uIHRoZSBlbnRpcmUgZG9jdW1lbnRcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgZXZlbnQgYnViYmxlcyB1cCB0aGUgZWxlbWVudCBmaXJlIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0aGlzIHx8IHRoaXMuaXNBbmNlc3RvcihldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vVGhpcyBoYW5kbGVzIGFsbCBldmVudHMgdGhhdCBhcmUgbm90IGJ1YmJsZWQgd2l0aGluIGFuIGVsZW1lbnQgYW5kIGl0J3MgY2hpbGRyZW5cclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5ub3RCdWJibGVkRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrID0gKCkgPT4geyB9KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghKGV2ZW50LnRhcmdldCA9PSB0aGlzIHx8IHRoaXMuaXNBbmNlc3RvcihldmVudC50YXJnZXQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0xpc3RlbiB0byBtdWx0aXBsZSBldmVudHMgYXQgdGltZSB3aXRoIGEgc2luZ2xlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuYWRkTXVsdGlwbGVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50cywgY2FsbGJhY2sgPSAoKSA9PiB7IH0pIHtcclxuICAgICAgICAgICAgZXZlbnRzID0gZXZlbnRzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGV2ZW50IG9mIGV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LnRyaW0oKSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9wZXJmb3JtIGFjdGlvbnMgb24gbW91c2VlbnRlciBhbmQgbW91c2VsZWF2ZVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmhvdmVyID0gZnVuY3Rpb24gKG1vdmVpbiA9ICgpID0+IHsgfSwgbW92ZW91dCA9ICgpID0+IHsgfSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vdmVpbiA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlaW4oZXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbW92ZW91dCA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICBtb3Zlb3V0KGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2Egc2hvcnRlciBuYW1lIGZvciBxdWVyeVNlbGVjdG9yXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChuYW1lID0gJycsIHBvc2l0aW9uID0gMCkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmlzc2V0KHBvc2l0aW9uKSkgey8vZ2V0IHRoZSBhbGwgdGhlIGVsZW1lbnRzIGZvdW5kIGFuZCByZXR1cm4gdGhlIG9uZSBhdCB0aGlzIHBhcnRpY3VsYXIgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlTZWxlY3RvckFsbChuYW1lKS5mb3JFYWNoKChlLCBwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09IHApIGVsZW1lbnQgPSBlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5xdWVyeVNlbGVjdG9yKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vYSBzaG9ydGVyIG5hbWUgZm9yIHF1ZXJ5U2VsZWN0b3JBbGxcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5maW5kQWxsID0gZnVuY3Rpb24gKG5hbWUgPSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKG5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9wZXJmb3JtIGFuIGV4dGVuZGVkIHF1ZXJ5U2VsZWN0aW9uIG9uIHRoaXMgZWxlbWVudFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uIChuYW1lID0gJycsIG9wdGlvbnMgPSB7IGF0dHJpYnV0ZXM6IHt9LCBpZDogJycsIG5vZGVOYW1lOiAnJywgY2xhc3M6ICcnLCBjbGFzc2VzOiAnJyB9LCBwb3NpdGlvbiA9IDApIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZm91bmRFbGVtZW50cyA9IFtdOy8vYWxsIHRoZSBlbGVtZW50cyBtZWV0aW5nIHRoZSByZXF1aXJlbWVudHNcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmlzc2V0KG9wdGlvbnMpKSB7Ly9pZiB0aGUgb3B0aW9ucyB0byBjaGVjayBpcyBzZXRcclxuICAgICAgICAgICAgICAgIGxldCBhbGxFbGVtZW50cyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbChuYW1lKTsvL2dldCBhbGwgdGhlIHBvc3NpYmxlIGVsZW1lbnRzXHJcblxyXG4gICAgICAgICAgICAgICAgLy9sb29wIHRocm91Z2ggdGhlbSBhbmQgY2hlY2sgaWYgdGhlIG1hdGNoIHRoZSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGFsbEVsZW1lbnRzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGZvciB0aGUgYXR0cmlidXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzc2V0KG9wdGlvbnMuYXR0cmlidXRlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvcHRpb25zLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFsbCB0aGUgYXR0cmlidXRlcyBvbmUgYWZ0ZXIgdGhlIG90aGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgIT0gb3B0aW9ucy5hdHRyaWJ1dGVzW2F0dHJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGlzIGVsZW1lbnQgaXMgbm8gbG9uZyB2YWxpZCBza2lwIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzbnVsbChlbGVtZW50KSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGZvciB0aGUgSURcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc3NldChvcHRpb25zLmlkKSAmJiBvcHRpb25zLmlkICE9IGVsZW1lbnQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBmb3IgdGhlIGNsYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQob3B0aW9ucy5jbGFzcykgJiYgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbnMuY2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgZm9yIHRoZSBjbGFzc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQob3B0aW9ucy5jbGFzc2VzKSAmJiAhZWxlbWVudC5oYXNDbGFzc2VzKG9wdGlvbnMuY2xhc3NlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBmb3IgdGhlIG5vZGVuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQob3B0aW9ucy5ub2RlTmFtZSkgJiYgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9IG9wdGlvbnMubm9kZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB0byByZXR1cm4gZm9yIGEgcGFydGljdWxhciBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSAwKSByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEVsZW1lbnRzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2dldCB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRFbGVtZW50cy5sZW5ndGggJiYgc2VsZi5pc3NldChmb3VuZEVsZW1lbnRzW3Bvc2l0aW9uXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZm91bmRFbGVtZW50c1twb3NpdGlvbl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmZpbmQobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vcGVyZm9ybSBzZWFyY2ggZm9yIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBtZWV0IGEgcmVxdWlyZW1lbnRcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5zZWFyY2hBbGwgPSBmdW5jdGlvbiAobmFtZSA9ICcnLCBvcHRpb25zID0geyBhdHRyaWJ1dGVzOiB7fSwgaWQ6ICcnLCBub2RlTmFtZTogJycsIGNsYXNzOiAnJywgY2xhc3NlczogJycgfSkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc3NldChvcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFsbEVsZW1lbnRzID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBhbGxFbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc3NldChvcHRpb25zLmF0dHJpYnV0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGF0dHIgaW4gb3B0aW9ucy5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgIT0gb3B0aW9ucy5hdHRyaWJ1dGVzW2F0dHJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzc2V0KG9wdGlvbnMuaWQpICYmIG9wdGlvbnMuaWQgIT0gZWxlbWVudC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc3NldChvcHRpb25zLmNsYXNzKSAmJiAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMob3B0aW9ucy5jbGFzcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQob3B0aW9ucy5jbGFzc2VzKSAmJiAhZWxlbWVudC5oYXNDbGFzc2VzKG9wdGlvbnMuY2xhc3NlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQob3B0aW9ucy5ub2RlTmFtZSkgJiYgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9IG9wdGlvbnMubm9kZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlzbnVsbChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKG5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9sb29rIGZvciBtdWx0aXBsZSBzaW5nbGUgZWxlbWVudHMgYXQgYSB0aW1lXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAobmFtZXMgPSBbXSwgcG9zaXRpb24gPSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50cyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuYW1lIG9mIG5hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tuYW1lXSA9IHRoaXMuZmluZChuYW1lLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vbG9vayBmb3IgbXVsdGlwbGUgbm9kZWxpc3RzIGF0IGEgdGltZVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmZldGNoQWxsID0gZnVuY3Rpb24gKG5hbWVzID0gW10pIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0ge307XHJcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgb2YgbmFtZXMpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW25hbWVdID0gdGhpcy5maW5kQWxsKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0dldCB0aGUgbm9kZXMgYmV0d2VlbiB0d28gY2hpbGQgZWxlbWVudHNcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5ub2Rlc0JldHdlZW4gPSBmdW5jdGlvbiAoZWxlbWVudEEsIGVsZW1lbnRCKSB7XHJcbiAgICAgICAgICAgIGxldCBpbkJldHdlZW5Ob2RlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pKSB7Ly9nZXQgYWxsIHRoZSBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiB0aGUgdHdvIGVsZW1lbnRzIGFyZSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCA9PSBlbGVtZW50QSB8fCBjaGlsZCA9PSBlbGVtZW50QiB8fCBjaGlsZC5pc0FuY2VzdG9yKGVsZW1lbnRBKSB8fCBjaGlsZC5pc0FuY2VzdG9yKGVsZW1lbnRCKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluQmV0d2Vlbk5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaW5CZXR3ZWVuTm9kZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0dldCBpZiBlbGVtZW50IGlzIGNoaWxkIG9mIGFuIGVsZW1lbnRcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5pc0FuY2VzdG9yID0gZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnRzID0gY2hpbGQucGFyZW50cygpOy8vR2V0IGFsbCB0aGUgcGFyZW50cyBvZiBjaGlsZFxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cy5pbmNsdWRlcyh0aGlzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL0dldCBhbGwgdGhlIHBhcmVudHMgb2YgYW4gZWxlbWVudCB1bnRpbCBkb2N1bWVudFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnBhcmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudFBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudFBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFyZW50ID0gY3VycmVudFBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5jdXN0b21QYXJlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50cyA9IHRoaXMucGFyZW50cygpO1xyXG4gICAgICAgICAgICBsZXQgY3VzdG9tUGFyZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRzW2ldLm5vZGVOYW1lLmluY2x1ZGVzKCctJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21QYXJlbnRzLnB1c2gocGFyZW50c1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGN1c3RvbVBhcmVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1JlbW92ZSBhIHN0YXRlIGZyb20gYW4gZWxlbWVudFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKHBhcmFtcyA9IHsgbmFtZTogJycgfSkge1xyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKHBhcmFtcyk7Ly9nZXQgdGhlIHN0YXRlIChlbGVtZW50KVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc3NldChzdGF0ZSkgJiYgc2VsZi5pc3NldChwYXJhbXMuZm9yY2UpKSB7Ly9pZiBzdGF0ZSBleGlzdHMgYW5kIHNob3VsZCBiZSBkZWxldGVkXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc3NldChzdGF0ZS5kYXRhc2V0LmRvbUtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi52aXJ0dWFsW3N0YXRlLmRhdGFzZXQuZG9tS2V5XTsvL2RlbGV0ZSB0aGUgZWxlbWVudCBmcm9tIHZpcnR1YWwgZG9tXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5yZW1vdmUoKTsvL3JlbW92ZSB0aGUgZWxlbWVudCBmcm9tIGRvbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGBkYXRhLSR7cGFyYW1zLm5hbWV9YCk7Ly9yZW1vdmUgdGhlIHN0YXRlIGZyb20gZWxlbWVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9HZXQgYW4gZWxlbWVudCdzIHN0YXRlIFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24gKHBhcmFtcyA9IHsgbmFtZTogJycgfSkge1xyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgc3RhdGVOYW1lO1xyXG5cclxuICAgICAgICAgICAgLy9nZXQgdGhlIHN0YXRlIG5hbWVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlTmFtZSA9IHBhcmFtcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzZWxmLmlzc2V0KHRoaXMuZGF0YXNldFtgJHtwYXJhbXMubmFtZX1gXSkpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlTmFtZSA9IHBhcmFtcy5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc3NldChzdGF0ZU5hbWUpKSB7Ly9nZXQgdGhlIHN0YXRlXHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHNlbGYudmlydHVhbFt0aGlzLmRhdGFzZXRbc3RhdGVOYW1lXV07XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgc3RhdGUgPSBzZWxmLm9iamVjdFRvQXJyYXkodGhpcy5zdGF0ZXNbc3RhdGVOYW1lXSkucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL2FkZCBhIHN0YXRlIHRvIGFuIGVsZW1lbnRcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5hZGRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJhbXMgPSB7IG5hbWU6ICcnIH0pIHtcclxuICAgICAgICAgICAgLy9tYWtlIHN1cmUgdGhlIHN0YXRlIGhhcyBhIGRvbWtleVxyXG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNzZXQocGFyYW1zLnN0YXRlLmRhdGFzZXQuZG9tS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnN0YXRlLnNldEtleSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2FkZCB0aGUgc3RhdGUgdG8gdGhlIGVsZW1lbnRzIGRhdGFzZXRcclxuICAgICAgICAgICAgdGhpcy5kYXRhc2V0W3BhcmFtcy5uYW1lXSA9IHBhcmFtcy5zdGF0ZS5kYXRhc2V0LmRvbUtleTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZXNbcGFyYW1zLm5hbWVdID0ge30vL2luaXRpYWxpemUgdGhlIHN0YXRlXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vc2V0IHRoZSBzdGF0ZSBvZiBhbiBlbGVtZW50XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFyYW1zID0geyBuYW1lOiAnJywgYXR0cmlidXRlczoge30sIHJlbmRlcjoge30sIGNoaWxkcmVuOiBbXSwgdGV4dDogJycsIGh0bWw6ICcnLCB2YWx1ZTogJycsIG9wdGlvbnM6IFtdIH0pIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZShwYXJhbXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gbGV0IGZvdW5kID0gdGhpcy5zdGF0ZXNbcGFyYW1zLm5hbWVdW0pTT04uc3RyaW5naWZ5KHBhcmFtcyldO1xyXG4gICAgICAgICAgICAvLyBpZiAoc2VsZi5pc3NldChmb3VuZCkpIHtcclxuICAgICAgICAgICAgLy8gICAgIHN0YXRlLmlubmVySFRNTCA9IGZvdW5kLmlubmVySFRNTDtcclxuICAgICAgICAgICAgLy8gICAgIHN0YXRlLnNldEF0dHJpYnV0ZXMoZm91bmQuZ2V0QXR0cmlidXRlcygpKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIHN0YXRlLnNldEF0dHJpYnV0ZXMocGFyYW1zLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHNlbGYuaXNzZXQocGFyYW1zLmNoaWxkcmVuKSkgey8vYWRkIHRoZSBjaGlsZHJlbiBpZiBzZXRcclxuICAgICAgICAgICAgLy8gICAgICAgICBzdGF0ZS5tYWtlRWxlbWVudChwYXJhbXMuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHNlbGYuaXNzZXQocGFyYW1zLnJlbmRlcikpIHsvL2FkZCB0aGUgY2hpbGRyZW4gaWYgc2V0XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc3RhdGUucmVuZGVyKHBhcmFtcy5yZW5kZXIpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHNlbGYuaXNzZXQocGFyYW1zLnRleHQpKSBzdGF0ZS50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0Oy8vc2V0IHRoZSBpbm5lclRleHRcclxuICAgICAgICAgICAgLy8gICAgIGlmIChzZWxmLmlzc2V0KHBhcmFtcy52YWx1ZSkpIHN0YXRlLnZhbHVlID0gcGFyYW1zLnZhbHVlOy8vc2V0IHRoZSB2YWx1ZVxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHNlbGYuaXNzZXQocGFyYW1zLm9wdGlvbnMpKSB7Ly9hZGQgb3B0aW9ucyBpZiBpc3NldFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAodmFyIGkgb2YgcGFyYW1zLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc3RhdGUubWFrZUVsZW1lbnQoeyBlbGVtZW50OiAnb3B0aW9uJywgdmFsdWU6IGksIHRleHQ6IGksIGF0dGFjaG1lbnQ6ICdhcHBlbmQnIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlc1twYXJhbXMubmFtZV1bSlNPTi5zdHJpbmdpZnkocGFyYW1zKV0gPSBzdGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnNldEF0dHJpYnV0ZXMocGFyYW1zLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc3NldChwYXJhbXMuY2hpbGRyZW4pKSB7Ly9hZGQgdGhlIGNoaWxkcmVuIGlmIHNldFxyXG4gICAgICAgICAgICAgICAgc3RhdGUubWFrZUVsZW1lbnQocGFyYW1zLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc3NldChwYXJhbXMucmVuZGVyKSkgey8vYWRkIHRoZSBjaGlsZHJlbiBpZiBzZXRcclxuICAgICAgICAgICAgICAgIHN0YXRlLnJlbmRlcihwYXJhbXMucmVuZGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc3NldChwYXJhbXMudGV4dCkpIHN0YXRlLnRleHRDb250ZW50ID0gcGFyYW1zLnRleHQ7Ly9zZXQgdGhlIGlubmVyVGV4dFxyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc3NldChwYXJhbXMuaHRtbCkpIHN0YXRlLmlubmVySFRNTCA9IHBhcmFtcy5odG1sOy8vc2V0IHRoZSBpbm5lclRleHRcclxuICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQocGFyYW1zLnZhbHVlKSkgc3RhdGUudmFsdWUgPSBwYXJhbXMudmFsdWU7Ly9zZXQgdGhlIHZhbHVlXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmlzc2V0KHBhcmFtcy5vcHRpb25zKSkgey8vYWRkIG9wdGlvbnMgaWYgaXNzZXRcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgb2YgcGFyYW1zLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tYWtlRWxlbWVudCh7IGVsZW1lbnQ6ICdvcHRpb24nLCB2YWx1ZTogaSwgdGV4dDogaSwgYXR0YWNobWVudDogJ2FwcGVuZCcgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzW3BhcmFtcy5uYW1lXVtKU09OLnN0cmluZ2lmeShwYXJhbXMpXSA9IHN0YXRlLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL2FzeW5jIHZlcnNpb24gb2Ygc2V0c3RhdGVcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5zZXRLZXlBc3luYyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2V0S2V5KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9zZXQgZWxlbWVudCdzIGRvbSBrZXkgZm9yIHRoZSB2aXJ0dWFsIGRvbVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnNldEtleSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7Ly9nZW5lcmF0ZSB0aGUga2V5XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5pc3NldCh0aGlzLmRhdGFzZXQuZG9tS2V5KSkgey8vZG9lcyB0aGlzIGVsZW1lbnQgaGF2ZSBhIGtleVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhc2V0LmRvbUtleSA9IGtleTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuZGF0YXNldC5kb21LZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi52aXJ0dWFsW2tleV0gPSB0aGlzOy8vYWRkIGl0IHRvIHRoZSB2aXJ0dWFsIGRvbVxyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vZHJvcCBkb3duIGEgY2hpbGRcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5kcm9wRG93biA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnRDb250ZW50ID0gdGhpcy5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKHBhcmVudENvbnRlbnQpO1xyXG4gICAgICAgICAgICBwYXJlbnRDb250ZW50LmNzcyh7IGJveFNoYWRvdzogJzFweCAxcHggMXB4IDFweCAjYWFhYWFhJyB9KTtcclxuICAgICAgICAgICAgdGhpcy5jc3MoeyBib3hTaGFkb3c6ICcwLjVweCAwLjVweCAwLjVweCAwLjVweCAjY2NjY2NjJyB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkcm9wQ29udGFpbmVyID0gdGhpcy5tYWtlRWxlbWVudCh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczogeyBjbGFzczogJ2Ryb3AtZG93bicgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZHJvcENvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZURyb3BEb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZHJvcENvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudENvbnRlbnQuY3NzKHsgYm94U2hhZG93OiAndW5zZXQnIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBwYXJlbnRDb250ZW50LmlubmVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9zdG9wIG1vbml0b3JpbmcgdGhpcyBlbGVtZW50IGZvciBjaGFuZ2VzXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuc3RvcE1vbml0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ic2VydmUpIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpOy8vZGlzY29ubmVjdCBvYnNlcnZlclxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGhhcyBjaGFuZ2VkIGluIHRoaXMgZWxlbWVudFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm9uQXR0cmlidXRlQ2hhbmdlID0gZnVuY3Rpb24gKGF0dHJpYnV0ZSA9ICcnLCBjYWxsYmFjayA9ICgpID0+IHsgfSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2F0dHJpYnV0ZXNDaGFuZ2VkJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRldGFpbC5hdHRyaWJ1dGVOYW1lID09IGF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtb25pdG9yIHRoaXMgZWxlbWVudCBmb3IgY2hhbmdlc1xyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1vbml0b3IgPSBmdW5jdGlvbiAoY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbkxpc3QubGVuZ3RoKSB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdtdXRhdGVkJykpOy8vZmlyZSBtdXRhdGVkIGV2ZW50IGZvciBpdFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT0gJ2NoaWxkTGlzdCcpIHsvL2lmIHRoZSBjaGFuZ2Ugd2FzIGEgY2hpbGQgZmlyZSBjaGlsZGxpc3RjaGFuZ2VkIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoaWxkTGlzdGNoYW5nZWQnLCB7IGRldGFpbDogbXV0YXRpb24gfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtdXRhdGlvbi50eXBlID09ICdhdHRyaWJ1dGVzJykgey8vaWYgdGhlIGNoYW5nZSB3YXMgYSBjaGlsZCBmaXJlIGNoaWxkbGlzdGNoYW5nZWQgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYXR0cmlidXRlc0NoYW5nZWQnLCB7IGRldGFpbDogbXV0YXRpb24gfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtdXRhdGlvbi50eXBlID09ICdjaGFyYWN0ZXJEYXRhJykgey8vaWYgdGhlIGNoYW5nZSB3YXMgYSBjaGlsZCBmaXJlIGNoaWxkbGlzdGNoYW5nZWQgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhcmFjdGVyRGF0YUNoYW5nZWQnLCB7IGRldGFpbDogbXV0YXRpb24gfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcywgY29uZmlnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZVsnY2hlY2tDaGFuZ2VzJ10gPSBmdW5jdGlvbiAoY2FsbGJhY2sgPSAoKSA9PiB7IH0pIHtcclxuICAgICAgICAgICAgdGhpcy5tb25pdG9yKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbXV0YXRlZCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hlbiB0aGUgdmFsdWUgb2YgYW4gZWxlbWVudCBpcyBjaGFuZ2VkXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUub25DaGFuZ2VkID0gZnVuY3Rpb24gKGNhbGxCYWNrID0gKCkgPT4geyB9KSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlTWUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGVsZW1lbnQgaXMgaW5wdXQgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PSAnSU5QVVQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09ICdkYXRlJykgey8vIGlmIHRoZSB0eXBlIGlzIGRhdGUsIGNoZWNrIGlmIHRoZSBkYXRlIGlzIHZhbGlkIHRoZW4gdXBkYXRlIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpKSB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnR5cGUgPT0gJ3RpbWUnKSB7Ly8gaWYgdGhlIHR5cGUgaXMgdGltZSwgY2hlY2sgaWYgdGhlIHRpbWUgaXMgdmFsaWQgdGhlbiB1cGRhdGUgdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1RpbWVWYWxpZCh0aGlzLnZhbHVlKSkgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC50eXBlID09ICdmaWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZU5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbWFnZVRvSnNvbihmaWxlLCBjYWxsQmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMudmFsdWUpOy8vdXBkYXRlIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgPT0gJ1NFTEVDVCcpIHsvLyBpZiB0aGUgZWxlbWVudCBpcyBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRhcmdldC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7Ly91cGRhdGUgdGhlIHNlbGVjdGVkIG9wdGlvbiB1c2luZyB0aGUgc2VsZWN0ZWQgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gZXZlbnQudGFyZ2V0LnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5vcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5vcHRpb25zW2ldLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PSAnREFUQS1FTEVNRU5UJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lID09ICdTRUxFQ1QtRUxFTUVOVCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzc2V0KGNhbGxCYWNrKSAmJiBldmVudC50YXJnZXQudHlwZSAhPSAnZmlsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsQmFjayh0aGlzLnZhbHVlLCBldmVudCk7Ly9maXJlIHRoZSBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgY2hhbmdlIGlzIGNhdXNlZCBieSBrZXlib2FyZFxyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNZShldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgY2hhbmdlIGlzIGNhdXNlZCBwcm9ncmFtYXRpY2FsbHlcclxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1lKGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9yZW5kZXIgdGhlIGNvbnRlbnRzIG9mIGFuIGVsZW1lbnRcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1zID0geyBlbGVtZW50OiAnJywgYXR0cmlidXRlczoge30gfSwgZXhjZXB0KSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmlzc2V0KGV4Y2VwdCkpIHRoaXMucmVtb3ZlQ2hpbGRyZW4oZXhjZXB0KTsvL3JlbW92ZSB0aGUgY29udGVudHMgb2YgdGhlIGVsZW1lbnQgd2l0aCBleGNlcHRpb25zXHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZW1vdmVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VFbGVtZW50KHBhcmFtcyk7Ly9hcHBlbmQgdGhlIG5ldyBjb250ZW50cyBvZiB0aGUgZWxlbWVudFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9HZXQgYWxsIHRoZSBzdHlsZXMgZm9yIHRoZSBJRCwgdGhlIGNsYXNzZXMgYW5kIHRoZSBlbGVtZW50XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuZ2V0QWxsQ3NzUHJvcGVydGllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cyksLy9nZXQgYWxsIHRoZSBjc3Mgc3R5bGVzIGZpbGVzIGFuZCBydWxlc1xyXG4gICAgICAgICAgICAgICAgY3NzUnVsZXMsXHJcbiAgICAgICAgICAgICAgICBpZCA9IHRoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICBub2RlTmFtZSA9IHRoaXMubm9kZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3QgPSBBcnJheS5mcm9tKHRoaXMuY2xhc3NMaXN0KSxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSB7fSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yVGV4dDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gY2xhc3NMaXN0KSBjbGFzc0xpc3RbaV0gPSBgLiR7Y2xhc3NMaXN0W2ldfWA7Ly90dXJuIGVhY2ggY2xhc3MgdG8gY3NzIGNsYXNzIGZvcm1hdCBbLmNsYXNzXVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykgey8vbG9vcCB0aHJvdWdoIGFsbCB0aGUgY3NzIHJ1bGVzIGluIGRvY3VtZW50L2FwcFxyXG4gICAgICAgICAgICAgICAgY3NzUnVsZXMgPSBzdHlsZVNoZWV0c1tpXS5jc3NSdWxlcztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY3NzUnVsZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvclRleHQgPSBjc3NSdWxlc1tqXS5zZWxlY3RvclRleHQ7IC8vZm9yIGVhY2ggc2VsZWN0b3IgdGV4dCBjaGVjayBpZiBlbGVtZW50IGhhcyBpdCBhcyBhIGNzcyBwcm9wZXJ0eVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RvclRleHQgPT0gYCMke2lkfWAgfHwgc2VsZWN0b3JUZXh0ID09IG5vZGVOYW1lIHx8IGNsYXNzTGlzdC5pbmRleE9mKHNlbGVjdG9yVGV4dCkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tzZWxlY3RvclRleHRdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IGNzc1J1bGVzW2pdLnN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuIGluIHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbbl0gIT09ICcnKSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tzZWxlY3RvclRleHRdW25dID0gc3R5bGVbbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9pZiBlbGVtZW50IGhhcyBwcm9wZXJ0eSBhZGQgaXQgdG8gY3NzIHByb3BlcnR5XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXNbJ3N0eWxlJ10gPSB0aGlzLmNzcygpO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vR2V0IHRoZSB2YWx1ZXMgb2YgcHJvcGVydHkgXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuZ2V0Q3NzUHJvcGVydGllcyA9IGZ1bmN0aW9uIChwcm9wZXJ0eSA9ICcnKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxQcm9wZXJ0aWVzID0gdGhpcy5nZXRBbGxDc3NQcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzID0ge307XHJcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gYWxsUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc1tuYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcCBpbiBhbGxQcm9wZXJ0aWVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09IHApIHByb3BlcnRpZXNbbmFtZV1bcF0gPSBhbGxQcm9wZXJ0aWVzW25hbWVdW3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoaXMgZWxlbWVudCBoYXMgdGhpcyBwcm9wZXJ0eVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmhhc0Nzc1Byb3BlcnR5ID0gZnVuY3Rpb24gKHByb3BlcnR5ID0gJycpIHtcclxuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmdldENzc1Byb3BlcnRpZXMocHJvcGVydHkpOyAvL2dldCBlbGVtZW50cyBjc3MgcHJvcGVydGllc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHByb3BlcnRpZXMpIHsvL2xvb3AgdGhyb3VnaCBqc29uIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQocHJvcGVydGllc1tpXSkgJiYgcHJvcGVydGllc1tpXSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOy8vIGlmIHByb3BlcnR5IGlzIGZvdW5kIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9HZXQgdGhlIG1vc3QgcmVsYXZhbnQgdmFsdWUgZm9yIHRoZSBwcm9wZXJ0eVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNzc1Byb3BlcnR5VmFsdWUgPSBmdW5jdGlvbiAocHJvcGVydHkgPSAnJykge1xyXG4gICAgICAgICAgICAvL2NoZWNrIGZvciB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50XHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5nZXRDc3NQcm9wZXJ0aWVzKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgIGlkID0gdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdCA9IEFycmF5LmZyb20odGhpcy5jbGFzc0xpc3QpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQocHJvcGVydGllc1snc3R5bGUnXSkgJiYgcHJvcGVydGllc1snc3R5bGUnXSAhPSAnJykgcmV0dXJuIHByb3BlcnRpZXNbJ3N0eWxlJ107Ly9jaGVjayBpZiBzdHlsZSBydWxlIGhhcyB0aGUgcHJvcGVydCBhbmQgcmV0dXJuIGl0J3MgdmFsdWVcclxuICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQoaWQpICYmIHNlbGYuaXNzZXQocHJvcGVydGllc1tgIyR7aWR9YF0pICYmIHByb3BlcnRpZXNbYCMke2lkfWBdICE9ICcnKSByZXR1cm4gcHJvcGVydGllc1tgIyR7aWR9YF07Ly9jaGVjayBpZiBlbGVtZW50IGlkIHJ1bGUgaGFzIHRoZSBwcm9wZXJ0IGFuZCByZXR1cm4gaXQncyB2YWx1ZVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIG9mIGNsYXNzTGlzdCkgey8vY2hlY2sgaWYgYW55IGNsYXNzIHJ1bGUgaGFzIHRoZSBwcm9wZXJ0IGFuZCByZXR1cm4gaXQncyB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQocHJvcGVydGllc1tgLiR7aX1gXSkgJiYgcHJvcGVydGllc1tgLiR7aX1gXSAhPSAnJykgcmV0dXJuIHByb3BlcnRpZXNbYC4ke2l9YF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jaGVjayBpZiBub2RlIHJ1bGUgaGFzIHRoZSBwcm9wZXJ0IGFuZCByZXR1cm4gaXQncyB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc3NldChwcm9wZXJ0aWVzW3RoaXMubm9kZU5hbWVdKSAmJiBwcm9wZXJ0aWVzW3RoaXMubm9kZU5hbWVdICE9ICcnKSByZXR1cm4gcHJvcGVydGllc1t0aGlzLm5vZGVOYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2V0IGFuZCBTZXQgdGhlIGNzcyB2YWx1ZXNcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5jc3MgPSBmdW5jdGlvbiAoc3R5bGVzID0ge30pIHtcclxuICAgICAgICAgICAgLy8gc2V0IGNzcyBzdHlsZSBvZiBlbGVtZW50IHVzaW5nIGpzb25cclxuICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQoc3R5bGVzKSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmV4dHJhY3RDU1ModGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYSBjc3MgcHJvcGVydHlcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5jc3NSZW1vdmUgPSBmdW5jdGlvbiAoc3R5bGVzID0gW10pIHtcclxuICAgICAgICAgICAgLy9yZW1vdmUgYSBncm91cCBvZiBwcm9wZXJ0aWVzIGZyb20gZWxlbWVudHMgc3R5bGVcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBzdHlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIGEgY2hpbGQgZWxlbWVudFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnRvZ2dsZUNoaWxkID0gZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIC8vQWRkIGNoaWxkIGlmIGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhIGNoaWxkIGVsc2UgcmVtb3ZlIHRoZSBjaGlsZCBmb3JtIHRoZSBlbGVtZW50XHJcbiAgICAgICAgICAgIHZhciBuYW1lLCBfY2xhc3NlcywgaWQsIGZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gbm9kZS5ub2RlTmFtZTtcclxuICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gbm9kZS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICBpZCA9IG5vZGUuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSBjaGlsZC5ub2RlTmFtZSAmJiBpZCA9PSBjaGlsZC5pZCAmJiBfY2xhc3Nlcy50b1N0cmluZygpID09IGNoaWxkLmNsYXNzTGlzdC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB0aGlzLmFwcGVuZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3JlbW92ZSBhbGwgY2xhc3NlcyBleGNlcHQgc29tZVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsZWFyQ2xhc3NlcyA9IGZ1bmN0aW9uIChleGNlcHQgPSAnJykge1xyXG4gICAgICAgICAgICBleGNlcHQgPSBleGNlcHQuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBleGNlcHQpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VwdFtqXSA9IGV4Y2VwdFtqXS50cmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQoZXhjZXB0KSAmJiBleGNlcHQuaW5jbHVkZXMoaSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9yZW1vdmUgY2xhc3Nlc1xyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiAoY2xhc3NlcyA9ICcnKSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgb2YgY2xhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgaSA9IGkudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL2FkZCBjbGFzc2VzXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uIChjbGFzc2VzID0gJycpIHtcclxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBvZiBjbGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gaS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vdG9nZ2xlIGNsYXNzZXNcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS50b2dnbGVDbGFzc2VzID0gZnVuY3Rpb24gKGNsYXNzZXMgPSAnJykge1xyXG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIG9mIGNsYXNzZXMpIHtcclxuICAgICAgICAgICAgICAgIGkgPSBpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmIChpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGEgY2xhc3MgZnJvbSBlbGVtZW50IGNsYXNzbGlzdFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKF9jbGFzcyA9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShfY2xhc3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgY2xhc3NsaXN0IGNvbnRhaW5zIGEgZ3JvdXAgb2YgY2xhc3Nlc1xyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmhhc0NsYXNzZXMgPSBmdW5jdGlvbiAoY2xhc3NMaXN0ID0gW10pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgbUNsYXNzIG9mIGNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhtQ2xhc3MpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZGQgYSBjbGFzcyB0byBlbGVtZW50IGNsYXNzbGlzdFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24gKF9jbGFzcyA9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChfY2xhc3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSBhIGNsYXNzIGluIGVsZW1lbnQgY2xhc3NsaXN0XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoX2NsYXNzID0gJycpIHtcclxuICAgICAgICAgICAgLy8gKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKF9jbGFzcykpID8gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKF9jbGFzcykgOiB0aGlzLmNsYXNzTGlzdC5hZGQoX2NsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKF9jbGFzcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9HZXQgdGhlIHBvc2l0aW9uIG9mIGVsZW1lbnQgaW4gZG9tXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAocGFyYW1zID0ge30pIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQocGFyYW1zKSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNba2V5XSA9IChuZXcgU3RyaW5nKHBhcmFtc1trZXldKS5zbGljZShwYXJhbXNba2V5XS5sZW5ndGggLSAyKSA9PSAncHgnKSA/IHBhcmFtc1trZXldIDogYCR7cGFyYW1zW2tleV19cHhgO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzcyhwYXJhbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NoZWNrIGlmIGVsZW1lbnQgaXMgd2l0aGluIGNvbnRhaW5lclxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmluVmlldyA9IGZ1bmN0aW9uIChwYXJlbnRJZGVudGlmaWVyID0gJycpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50cyhwYXJlbnRJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgbGV0IHRvcCA9IHRoaXMucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNudWxsKHBhcmVudCkpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0b3AgPj0gMCAmJiB0b3AgPD0gcGFyZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmxhZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ2hlY2sgaWYgYSBjbGFzcyBleGlzdHMgaW4gZWxlbWVudCdzIGNsYXNzbGlzdFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmhhc0NsYXNzID0gZnVuY3Rpb24gKF9jbGFzcyA9ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhfY2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0IGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGZvciBhbiBlbGVtZW50XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuc2V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzID0ge30pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2ldID0gcHJvcGVydGllc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFNldCBhIGxpc3Qgb2YgYXR0cmlidXRlcyBmb3IgYW4gZWxlbWVudFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoYXR0cmlidXRlcyA9IHt9KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gJ3N0eWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3NzKGF0dHJpYnV0ZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoaSwgYXR0cmlidXRlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIHZhbHVlcyBvZiBhIGxpc3Qgb2YgYXR0cmlidXRlc1xyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAobmFtZXMgPSBbXSkge1xyXG4gICAgICAgICAgICBpZiAobmFtZXMubGVuZ3RoID09IDApIG5hbWVzID0gdGhpcy5nZXRBdHRyaWJ1dGVOYW1lcygpO1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBuYW1lcykge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlc1tuYW1lXSA9IHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9DcmVhdGUgYW5kIGF0dGF0Y2ggYW4gZWxlbWVudCBpbiBhbiBlbGVtZW50XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWFrZUVsZW1lbnQgPSBmdW5jdGlvbiAocGFyYW1zID0geyBlbGVtZW50OiAnJywgYXR0cmlidXRlczoge30gfSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEtleUFzeW5jKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHNlbGYuY3JlYXRlRWxlbWVudChwYXJhbXMsIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBhbiBlbGVtZW50cyBhbmNlc3RvciB3aXRoIGEgc3BlY2lmaWMgYXR0cmlidXRlXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuZ2V0UGFyZW50cyA9IGZ1bmN0aW9uIChuYW1lID0gJycsIHZhbHVlID0gJycpIHtcclxuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IG5hbWUuc2xpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUgPT0gJy4nKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQocGFyZW50LmNsYXNzTGlzdCkgJiYgcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhuYW1lLnNsaWNlKDEpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYXR0cmlidXRlID09ICcjJykge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzc2V0KHBhcmVudC5pZCkgJiYgcGFyZW50LmlkID09IG5hbWUuc2xpY2UoMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzc2V0KHBhcmVudC5ub2RlTmFtZSkgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmlzc2V0KHBhcmVudC5oYXNBdHRyaWJ1dGUpICYmIHBhcmVudC5oYXNBdHRyaWJ1dGUobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNzZXQodmFsdWUpICYmIHBhcmVudC5nZXRBdHRyaWJ1dGUobmFtZSkgPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUb2dnbGUgdGhlIGRpc3BsYXkgb2YgYW4gZWxlbWVudFxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgfHwgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID09ICdoaWRkZW4nKSB0aGlzLnNob3coKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vSGlkZSBhbiBlbGVtZW50IGluIGRvbVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChzZWxmLmlzc2V0KHRoaXMuc3R5bGUuZGlzcGxheSkpIHRoaXMudGVtcC5kaXNwbGF5ID0gdGhpcy5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICAvLyBpZiAoc2VsZi5pc3NldCh0aGlzLnN0eWxlLnZpc2liaWxpdHkpKSB0aGlzLnRlbXAudmlzaWJpbGl0eSA9IHRoaXMuc3R5bGUudmlzaWJpbGl0eTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgLy8gdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TaG93IGFuIGVsZW1lbnQgaW4gZG9tXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGlmIChzZWxmLmlzc2V0KHRoaXMudGVtcC5kaXNwbGF5KSkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgIHRoaXMuY3NzKHsgZGlzcGxheTogdGhpcy50ZW1wLmRpc3BsYXkgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBlbHNlIHRoaXMuY3NzUmVtb3ZlKFsnZGlzcGxheSddKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB0aGlzLmNzc1JlbW92ZShbJ2Rpc3BsYXknXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9SZW1vdmUgYWxsIHRoZSBjaGlsZHJlbiBvZiBhbiBlbGVtZW50IHdpdGggZXhjZXB0aW9ucyBvZiBzb21lXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGRyZW4gPSBmdW5jdGlvbiAocGFyYW1zID0geyBleGNlcHQ6IFtdIH0pIHtcclxuICAgICAgICAgICAgbGV0IGV4Y2VwdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xyXG4gICAgICAgICAgICBwYXJhbXMuZXhjZXB0ID0gcGFyYW1zLmV4Y2VwdCB8fCBbXTtcclxuICAgICAgICAgICAgbGV0IGV4Y2VwdCA9IHBhcmFtcy5leGNlcHQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjZXB0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsID0gdGhpcy5maW5kQWxsKGV4Y2VwdFtpXSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjZXB0aW9ucy5pbmNsdWRlcyhhbGxbal0pKSBleGNlcHRpb25zLnB1c2goYWxsW2pdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleGNlcHRpb25zLmluY2x1ZGVzKG5vZGUpKSBub2RlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9EZWxldGUgYW4gZWxlbWVudCBmcm9tIHRoZSBkb20gYW5kIHZpcnR1YWwgZG9tXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5pc3NldCh0aGlzLmRhdGFzZXQuZG9tS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHNlbGYudmlydHVhbFt0aGlzLmRhdGFzZXQuZG9tS2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9EZWxldGUgYW4gZWxlbWVudHMgY2hpbGQgZnJvbSB0aGUgZG9tIGFuZCB0aGUgdmlydHVhbCBkb21cclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5kZWxldGVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZWxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUb2dnbGUgYSBsaXN0IG9mIGNoaWxkcmVuIG9mIGFuIGVsZW1lbnRcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS50b2dnbGVDaGlsZHJlbiA9IGZ1bmN0aW9uIChwYXJhbXMgPSB7IG5hbWU6ICcnLCBjbGFzczogJycsIGlkOiAnJyB9KSB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5jaGlsZHJlbikuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghKChzZWxmLmlzc2V0KHBhcmFtcy5uYW1lKSAmJiBwYXJhbXMubmFtZSA9PSBub2RlLm5vZGVOYW1lKSB8fCBzZWxmLmlzc2V0KHBhcmFtcy5jbGFzcykgJiYgc2VsZi5oYXNBcnJheUVsZW1lbnQoQXJyYXkuZnJvbShub2RlLmNsYXNzTGlzdCksIHBhcmFtcy5jbGFzcy5zcGxpdCgnICcpKSB8fCAoc2VsZi5pc3NldChwYXJhbXMuaWQpICYmIHBhcmFtcy5pZCA9PSBub2RlLmlkKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS50b2dnbGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBdHRhdGNoIGFuIGVsZW1lbnQgdG8gYW5vdGhlciBlbGVtZW50IFthcHBlbmQgb3IgcHJlcGVuZF1cclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGF0dGFjaG1lbnQgPSAnYXBwZW5kJykge1xyXG4gICAgICAgICAgICB0aGlzW2F0dGFjaG1lbnRdKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUucHJlc3NlZCA9IGZ1bmN0aW9uIChjYWxsYmFjayA9ICgpID0+IHsgfSkge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gMCwgZW5kVGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTXVsdGlwbGVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24sIHRvdWNoc3RhcnQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBldmVudC50aW1lU3RhbXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAsIHRvdWNoZW5kJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZSA9IGV2ZW50LnRpbWVTdGFtcDtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmR1cmF0aW9uID0gZW5kVGltZSAtIHN0YXJ0VGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBodG1sQ29sbGVjdGlvbkxpYnJhcnkoSFRNTENvbGxlY3Rpb24gPSBFbXB0eSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLnBvcEluZGV4ID0gZnVuY3Rpb24gKHBvc2l0aW9uID0gMCkge1xyXG4gICAgICAgICAgICBsZXQgY29sbGVjdGlvbiA9IHNlbGYuY3JlYXRlRWxlbWVudCh7IGVsZW1lbnQ6ICdzYW1wbGUnIH0pLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpc3QgPSBBcnJheS5mcm9tKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBwb3NpdGlvbikgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uW2ldID0gdGhpcy5pdGVtKGkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrID0gKCkgPT4geyB9KSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gQXJyYXkuZnJvbSh0aGlzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhsaXN0W2ldLCBpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2sgPSAoKSA9PiB7IH0pIHtcclxuICAgICAgICAgICAgbGV0IGxpc3QgPSBBcnJheS5mcm9tKHRoaXMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxpc3RbaV0sIGkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGVbJ2luZGV4T2YnXSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gQXJyYXkuZnJvbSh0aGlzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdCA9PSBlbGVtZW50KSByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlWydpbmNsdWRlcyddID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZihlbGVtZW50KSAhPSAtMTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGVbJ25vZGVzQmV0d2VlbiddID0gZnVuY3Rpb24gKGVsZW1lbnRBLCBlbGVtZW50Qikge1xyXG4gICAgICAgICAgICBsZXQgaW5CZXR3ZWVuTm9kZXMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGxpc3QgPSBBcnJheS5mcm9tKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgYVBhcmVudCBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYVBhcmVudCA9PSBlbGVtZW50QSB8fCBhUGFyZW50ID09IGVsZW1lbnRCIHx8IGFQYXJlbnQuaXNBbmNlc3RvcihlbGVtZW50QSkgfHwgYVBhcmVudC5pc0FuY2VzdG9yKGVsZW1lbnRCKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluQmV0d2Vlbk5vZGVzLnB1c2goYVBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpbkJldHdlZW5Ob2RlcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG5vZGVMaWJyYXJ5KE5vZGUgPSBFbXB0eSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgTm9kZS5wcm90b3R5cGUuc3RhdGVzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgbm9kZUxpc3RMaWJyYXJ5KE5vZGVMaXN0ID0gRW1wdHkpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZVsnZWFjaCddID0gZnVuY3Rpb24gKGNhbGxiYWNrID0gKCkgPT4geyB9KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpc1tpXSwgaSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTm9kZUxpc3QucHJvdG90eXBlWydpbmRleE9mJ10gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzW2ldID09IGVsZW1lbnQpIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBOb2RlTGlzdC5wcm90b3R5cGVbJ2luY2x1ZGVzJ10gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmRleE9mKGVsZW1lbnQpICE9IC0xO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZVsnbm9kZXNCZXR3ZWVuJ10gPSBmdW5jdGlvbiAoZWxlbWVudEEsIGVsZW1lbnRCKSB7XHJcbiAgICAgICAgICAgIGxldCBpbkJldHdlZW5Ob2RlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhUGFyZW50IG9mIHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhUGFyZW50ID09IGVsZW1lbnRBIHx8IGFQYXJlbnQgPT0gZWxlbWVudEIgfHwgYVBhcmVudC5pc0FuY2VzdG9yKGVsZW1lbnRBKSB8fCBhUGFyZW50LmlzQW5jZXN0b3IoZWxlbWVudEIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5CZXR3ZWVuTm9kZXMucHVzaChhUGFyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGluQmV0d2Vlbk5vZGVzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGVtcGxhdGU7IiwiY29uc3QgVHJlZUV2ZW50ID0gcmVxdWlyZSgnLi9UcmVlRXZlbnQnKTtcclxuXHJcbmNsYXNzIFRyZWUge1xyXG4gICAgI2NoaWxkcmVuID0gW107XHJcbiAgICAjcGFyZW50ID0gbnVsbDtcclxuICAgICNyb290ID0gbnVsbDtcclxuICAgICNhdHRyaWJ1dGVzID0ge307XHJcbiAgICAjZXZlbnRzTGlzdCA9IFtdO1xyXG5cclxuICAgIGdldCBoZWlnaHQoKSB7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IDEsIGJyYW5jaEhlaWdodHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBicmFuY2ggb2YgdGhpcy4jY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGJyYW5jaCBpbnN0YW5jZW9mIFRyZWUpIHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaEhlaWdodHMucHVzaChicmFuY2guaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnJhbmNoSGVpZ2h0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCArPSBNYXRoLm1heCguLi5icmFuY2hIZWlnaHRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhcmVudFRyZWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcm9vdFRyZWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Jvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLiNjaGlsZHJlbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxlbmd0aChzaXplKSB7XHJcbiAgICAgICAgbGV0IG5ld0NoaWxkcmVuID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaCh0aGlzLiNjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI2NoaWxkcmVuID0gbmV3Q2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoaXRlbXMsIHBhcmVudCwgcm9vdCkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2goLi4uaXRlbXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcmVudCAhPSB1bmRlZmluZWQgJiYgcGFyZW50LmNvbnN0cnVjdG9yID09IFRyZWUpIHtcclxuICAgICAgICAgICAgdGhpcy4jcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJvb3QgIT0gdW5kZWZpbmVkICYmIHJvb3QuY29uc3RydWN0b3IgPT0gVHJlZSkge1xyXG4gICAgICAgICAgICB0aGlzLiNyb290ID0gcm9vdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSXRlbXMoaXRlbXMpIHtcclxuICAgICAgICBsZXQgcm9vdCA9ICh0aGlzLiNwYXJlbnQgIT0gbnVsbCkgPyB0aGlzLiNyb290IDogdGhpcztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNbaV0gPSBuZXcgVHJlZShpdGVtc1tpXSwgdGhpcywgcm9vdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCA9IDAsIGVuZCA9IDEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY2hpbGRyZW4uY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0KHRyZWUpIHtcclxuICAgICAgICBsZXQgbmV3VHJlZSA9IG5ldyBUcmVlKHRoaXMudmFsdWVzLCB0aGlzLiNwYXJlbnQsIHRoaXMuI3Jvb3QpO1xyXG4gICAgICAgIGlmICh0cmVlLmNvbnN0cnVjdG9yID09IFRyZWUpIHtcclxuICAgICAgICAgICAgbmV3VHJlZS5wdXNoKC4uLnRyZWUudmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xyXG4gICAgICAgICAgICBuZXdUcmVlLnB1c2goLi4udHJlZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUcmVlLnB1c2godHJlZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdUcmVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbWJpbmUoZmlyc3QsIHNlY29uZCwgcG9zaXRpb24pIHsvL3VzZWQgdG8gZ2V0IHdoYXQgaXMgYmV0d2VlbiB0d28gaXRlbXMgYXQgYSBwYXJ0aWN1bGFyIG9jY3VycmFuY2UgaW4gYW4gQXJyYXkgYW5kIHRoZSBpdGVtcyBjb21iaW5lZFxyXG4gICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gfHwgMDsvL2luaXRpYWxpemUgcG9zaXRpb24gaWYgbm90IHNldFxyXG4gICAgICAgIGxldCBhdDEgPSBwb3NpdGlvbixcclxuICAgICAgICAgICAgYXQyID0gZmlyc3QgPT09IHNlY29uZCA/IHBvc2l0aW9uICsgMSA6IHBvc2l0aW9uOyAvL2NoZWNrIGlmIGl0IGlzIHRoZSBzYW1lIGFuZCBjaGFuZ2UgcG9zaXRpb25cclxuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmluZGV4QXQoZmlyc3QsIGF0MSk7Ly9nZXQgdGhlIHN0YXJ0XHJcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMuaW5kZXhBdChzZWNvbmQsIGF0MikgKyAxOy8vZ2V0IHRoZSBlbmRcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0ID09IC0xIHx8IGVuZCA9PSAwKSB7Ly9udWxsIGlmIG9uZSBpcyBub3QgZm91bmRcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRyaWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5lbnRyaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHkoKSB7XHJcbiAgICAgICAgdGhpcy4jY2hpbGRyZW4ubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBldmVyeShjYWxsYmFjayA9ICh2YWx1ZSwgaW5kZXgpID0+IHsgfSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNjaGlsZHJlbltpXSA9IGNhbGxiYWNrKHZhbHVlc1tpXSwgaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChjYWxsYmFjayA9ICh2YWx1ZSwgaW5kZXgpID0+IHsgfSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSwgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayh2YWx1ZXNbaV0sIGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiNjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kTGFzdChjYWxsYmFjayA9ICh2YWx1ZSwgaW5kZXgpID0+IHsgfSkge1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMudmFsdWVzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayh2YWx1ZXNbaV0sIGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLiNjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEluZGV4KGNhbGxiYWNrID0gKHZhbHVlLCBpbmRleCkgPT4geyB9KSB7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sodmFsdWVzW2ldLCBpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZExhc3RJbmRleChjYWxsYmFjayA9ICh2YWx1ZSwgaW5kZXgpID0+IHsgfSkge1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMudmFsdWVzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayh2YWx1ZXNbaV0sIGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQWxsKGNhbGxiYWNrID0gKHZhbHVlLCBpbmRleCkgPT4geyB9KSB7XHJcbiAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sodmFsdWVzW2ldLCBpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyZWUucHVzaCh0aGlzLiNjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1RyZWU7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEFsbEluZGV4KGNhbGxiYWNrID0gKHZhbHVlLCBpbmRleCkgPT4geyB9KSB7XHJcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayh2YWx1ZXNbaV0sIGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yRWFjaChjYWxsYmFjayA9ICh2YWx1ZSwgaW5kZXgpID0+IHsgfSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh2YWx1ZXNbaV0sIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpbGwoaXRlbSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy4jY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuI2NoaWxkcmVuW2ldLmNvbnN0cnVjdG9yID09IFRyZWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuI2NoaWxkcmVuW2ldLmZpbGwoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNjaGlsZHJlbltpXSA9IGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGNhbGxiYWNrID0gKHZhbHVlLCBpbmRleCkgPT4geyB9KSB7XHJcbiAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sodmFsdWVzW2ldLCBpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyZWUucHVzaCh0aGlzLiNjaGlsZHJlbltpXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3VHJlZTtcclxuICAgIH1cclxuXHJcbiAgICBmbGF0TWFwKGNhbGxiYWNrID0gKHZhbHVlLCBpbmRleCkgPT4geyB9KSB7XHJcbiAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5mbGF0KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdUcmVlLnB1c2goY2FsbGJhY2sodmFsdWVzW2ldLCBpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1RyZWU7XHJcbiAgICB9XHJcblxyXG4gICAgZmxhdCgpIHtcclxuICAgICAgICBsZXQgZmxhdHRlbmVkID0gW107XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xyXG4gICAgICAgIGZvciAobGV0IHYgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh2LmNvbnN0cnVjdG9yID09IFRyZWUpIHtcclxuICAgICAgICAgICAgICAgIGZsYXR0ZW5lZC5wdXNoKHYuZmxhdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZsYXR0ZW5lZC5wdXNoKHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbGF0dGVuZWQuZmxhdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZsYXRUcmVlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJlZSh0aGlzLmZsYXQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jYXR0cmlidXRlc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBsZXQgZm91bmQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZm91bmQucHVzaCh0aGlzLiNhdHRyaWJ1dGVzW25hbWVdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBoYXNBdHRyaWJ1dGUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNhdHRyaWJ1dGVzICE9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpbmNsdWRlcyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjaGlsZHJlbi5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXhPZih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjaGlsZHJlbi5pbmRleE9mKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0JyYW5jaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jcGFyZW50ICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5CZXR3ZWVuKGZpcnN0LCBzZWNvbmQsIHBvc2l0aW9uKSB7Ly91c2VkIHRvIGdldCB3aGF0IGlzIGJldHdlZW4gdHdvIGl0ZW1zIGF0IGEgcGFydGljdWxhciBvY2N1cnJhbmNlIGluIGFuIEFycmF5XHJcbiAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiB8fCAwOy8vaW5pdGlhbGl6ZSBwb3NpdGlvbiBpZiBub3Qgc2V0XHJcbiAgICAgICAgbGV0IGF0MSA9IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBhdDIgPSBmaXJzdCA9PT0gc2Vjb25kID8gcG9zaXRpb24gKyAxIDogcG9zaXRpb247IC8vY2hlY2sgaWYgaXQgaXMgdGhlIHNhbWUgYW5kIGNoYW5nZSBwb3NpdGlvblxyXG5cclxuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmluZGV4QXQoZmlyc3QsIGF0MSkgKyAxOy8vZ2V0IHRoZSBzdGFydFxyXG4gICAgICAgIGxldCBlbmQgPSB0aGlzLmluZGV4QXQoc2Vjb25kLCBhdDIpOy8vZ2V0IHRoZSBlbmRcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0ID09IDAgfHwgZW5kID09IC0xKSB7Ly9udWxsIGlmIG9uZSBpcyBub3QgZm91bmRcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleEF0KGl0ZW0sIHBvc2l0aW9uID0gMCkgey8vdXNlZCB0byBnZXQgdGhlIGluZGV4IG9mIGFuIGl0ZW0gYXQgYSBwYXJ0aWN1bGFyIG9jY3VycmFuY2VcclxuICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IDA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gLTE7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZXNbaV0gPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSBwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgam9pbihhdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvQXJyYXkoKS5qb2luKGF0KTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0SW5kZXhPZih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjaGlsZHJlbi5sYXN0SW5kZXhPZih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwKGNhbGxiYWNrID0gKHZhbHVlLCBpbmRleCkgPT4geyB9KSB7XHJcbiAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy52YWx1ZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdUcmVlLnB1c2goY2FsbGJhY2sodmFsdWVzW2ldLCBpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1RyZWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCguLi5pdGVtcykge1xyXG4gICAgICAgIHRoaXMuI2NoaWxkcmVuLnB1c2goLi4udGhpcy5jcmVhdGVJdGVtcyhpdGVtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY2hpbGRyZW4ucG9wKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgncmVtb3ZlJyk7XHJcbiAgICAgICAgaWYodGhpcy5pc0JyYW5jaCgpKXtcclxuICAgICAgICAgICAgdGhpcy4jcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3JlbW92ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpe1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgbGV0IG5ld0NoaWxkcmVuID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMuI2NoaWxkcmVuKXtcclxuICAgICAgICAgICAgaWYoaSAhPSBpbmRleCl7XHJcbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKHRoaXMuI2NoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNjaGlsZHJlbiA9IG5ld0NoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy4jY2hpbGRyZW4ucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZHVjZShjYWxsYmFjaywgcmVkdWNlciA9IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMucmVkdWNlKGNhbGxiYWNrLCByZWR1Y2VyKTtcclxuICAgIH1cclxuXHJcbiAgICByZWR1Y2VSaWdodChjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5yZWR1Y2VSaWdodChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy4jYXR0cmlidXRlc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuI2F0dHJpYnV0ZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaChjYWxsYmFjayA9ICh2YWx1ZSwgaW5kZXgpID0+IHsgfSwgZGVwdGggPSAwKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGxldCBwYXRoID0gW107Ly9pbml0IHBhdGhcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKHZhbHVlc1tpXSwgaSkpIHsvL3NldCBwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVwdGggIT0gJ251bWJlcicpIGRlcHRoID0gMDtcclxuICAgICAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09IDAgJiYgZGVwdGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkZXB0aC0tO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2ldLmNvbnN0cnVjdG9yID09IFRyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN1YiA9IHZhbHVlc1tpXS5zZWFyY2goY2FsbGJhY2ssIGRlcHRoLCBwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Yi5wYXRoLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWIucGF0aC51bnNoaWZ0KGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHN1Yi5wYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzdWIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBwYXRoLCB2YWx1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLiNhdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hpZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NoaWxkcmVuLnNoaWZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2xpY2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcclxuICAgICAgICBpZiAoZW5kID09IHVuZGVmaW5lZCkgZW5kID0gdmFsdWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5zbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBzbGljZUFzVHJlZShzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVlKHRoaXMuc2xpY2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvbWUoY2FsbGJhY2sgPSAodmFsdWUsIGluZGV4KSA9PiB7IH0pIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZmxhdCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKHZhbHVlc1tpXSwgaSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0KGNhbGxiYWNrLCBkZXB0aCA9IDApIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gKGEsIGIpID0+IGEgPiBiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLiNjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXA7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sodGhpcy4jY2hpbGRyZW5baV0sIHRoaXMuI2NoaWxkcmVuW2pdKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcCA9IHRoaXMuI2NoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2NoaWxkcmVuW2ldID0gdGhpcy4jY2hpbGRyZW5bal07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2hpbGRyZW5bal0gPSB0ZW1wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGRlcHRoICE9ICdudW1iZXInKSBkZXB0aCA9IDA7XHJcbiAgICAgICAgaWYgKGRlcHRoID4gMCkge1xyXG4gICAgICAgICAgICBkZXB0aC0tO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuI2NoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jY2hpbGRyZW5baV0uY29uc3RydWN0b3IgPT0gVHJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2NoaWxkcmVuW2ldLnNvcnQoY2FsbGJhY2ssIGRlcHRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pdGVtcykge1xyXG4gICAgICAgIGlmIChkZWxldGVDb3VudCA9PSB1bmRlZmluZWQpIGRlbGV0ZUNvdW50ID0gdGhpcy4jY2hpbGRyZW4ubGVuZ3RoIC0gc3RhcnQ7XHJcbiAgICAgICAgbGV0IG5ld1RyZWUgPSBuZXcgVHJlZSh0aGlzLiNjaGlsZHJlbi5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pdGVtcykpO1xyXG4gICAgICAgIHJldHVybiBuZXdUcmVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLiNjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jb25zdHJ1Y3RvciA9PSBUcmVlKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGl0ZW0udG9BcnJheSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mbGF0KCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b0xvY2FsZVN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mbGF0KCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFjZShwYXRoID0gW10pIHtcclxuICAgICAgICBwYXRoID0gQXJyYXkuZnJvbShwYXRoKTtcclxuICAgICAgICBsZXQgaSA9IHBhdGguc2hpZnQoKTtcclxuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy52YWx1ZXNbaV07XHJcblxyXG4gICAgICAgIGlmIChjaGlsZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzO1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhdGgubGVuZ3RoID09IDAgJiYgY2hpbGQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2hpbGQgIT0gdW5kZWZpbmVkICYmIGNoaWxkLmNvbnN0cnVjdG9yID09IFRyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnRyYWNlKHBhdGgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7IGZvdW5kLCB2YWx1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHVuc2hpZnQoLi4uaXRlbXMpIHtcclxuICAgICAgICB0aGlzLiNjaGlsZHJlbi51bnNoaWZ0KC4uLnRoaXMuY3JlYXRlSXRlbXMoaXRlbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIGF0dHJpYnV0ZXMsIGJ1YmJsZSkge1xyXG4gICAgICAgIGxldCB0cmVlRXZlbnQgPSBuZXcgVHJlZUV2ZW50KG5hbWUsIGF0dHJpYnV0ZXMsIGJ1YmJsZSk7XHJcbiAgICAgICAgaWYgKHRyZWVFdmVudC5idWJibGUgPT0gdHJ1ZSAmJiB0aGlzLmlzQnJhbmNoKCkpIHtcclxuICAgICAgICAgICAgdGhpcy4jcGFyZW50LmRpc3BhdGNoRXZlbnQobmFtZSwgYXR0cmlidXRlcywgYnViYmxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGV2ZW50IG9mIHRoaXMuI2V2ZW50c0xpc3QpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50Lm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBldmVudC5jYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNhbGxiYWNrKHRyZWVFdmVudC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKG5hbWUsIGNhbGxiYWNrLCBpZCkge1xyXG4gICAgICAgIHRoaXMuI2V2ZW50c0xpc3QucHVzaCh7IG5hbWUsIGNhbGxiYWNrLCBpZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGNhbGxiYWNrLCBpZCkge1xyXG4gICAgICAgIGxldCBuZXdMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnQgb2YgdGhpcy4jZXZlbnRzTGlzdCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQubmFtZSA9PSBuYW1lICYmIGV2ZW50LmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld0xpc3QucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI2V2ZW50c0xpc3QgPSBuZXdMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1RyZWUodHJlZSkge1xyXG4gICAgICAgIHJldHVybiB0cmVlLmNvbnN0cnVjdG9yID09IFRyZWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb20oaXRlbXMpIHtcclxuICAgICAgICBsZXQgbmV3VHJlZSA9IG5ldyBUcmVlKGl0ZW1zKTtcclxuICAgICAgICByZXR1cm4gbmV3VHJlZTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUcmVlOyIsImNsYXNzIFRyZWVFdmVudCB7XHJcbiAgICBuYW1lID0gJyc7XHJcbiAgICBhdHRyaWJ1dGVzID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXR0cmlidXRlcywgYnViYmxlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xyXG4gICAgICAgIHRoaXMuc2V0QnViYmxlID0gYnViYmxlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXRCdWJibGUoYnViYmxlKXtcclxuICAgICAgICBpZih0eXBlb2YgYnViYmxlID09PSAnYm9vbGVhbicpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuYnViYmxlID0gYnViYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgaWYgKFRyZWVFdmVudC5ldmVudHNbdGhpcy5uYW1lXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgVHJlZUV2ZW50LmV2ZW50c1t0aGlzLm5hbWVdID0gYXR0cmlidXRlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gVHJlZUV2ZW50LmV2ZW50c1t0aGlzLm5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNbaV0gPSBUcmVlRXZlbnQuZXZlbnRzW3RoaXMubmFtZV1baV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcyA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1tpXSA9IGF0dHJpYnV0ZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcclxuICAgICAgICBjbGljazogeyBuYW1lOiAnQ2xpY2snLCBkdXJhdGlvbjogJzFzZWMnLCBidWJibGU6IHRydWUgfSxcclxuICAgICAgICBob3ZlcjogeyBuYW1lOiAnSG92ZXInLCBkdXJhdGlvbjogJ0luZmluaXR5JywgYnViYmxlOiB0cnVlIH0sXHJcbiAgICAgICAgcmVtb3ZlOiB7IG5hbWU6ICdSZW1vdmUnLCBidWJibGU6IGZhbHNlIH0sXHJcbiAgICAgICAgY3JlYXRlZDoge25hbWU6ICdDcmVhdGVkJywgYnViYmxlOiBmYWxzZSwgZHVyYXRpb246ICcwc2VjJ31cclxuICAgIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHJlZUV2ZW50OyIsImNvbnN0IE1hdGhzTGlicmFyeSA9IHJlcXVpcmUoJy4vTWF0aHNMaWJyYXJ5Jyk7XHJcbmNvbnN0IE9iamVjdHNMaWJyYXJ5ID0gcmVxdWlyZSgnLi9PYmplY3RzTGlicmFyeScpO1xyXG5cclxubGV0IG1hdGhMaWJyYXJ5ID0gbmV3IE1hdGhzTGlicmFyeSgpO1xyXG5sZXQgb2JqZWN0TGlicmFyeSA9IG5ldyBPYmplY3RzTGlicmFyeSgpO1xyXG5cclxuZnVuY3Rpb24gQW5hbHlzaXNMaWJyYXJ5KCkge1xyXG4gICAgdGhpcy5lbnRyb3B5ID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgZW50cm9weSA9IDA7Ly9pbml0aWFsaXplIGVudHJvcHlcclxuICAgICAgICBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTsvL2dldCB0aGUgdmFsdWVzIG9mIHRoZSBvYmplY3QgdmFyaWFibGVcclxuICAgICAgICBsZXQgc3VtID0gbWF0aExpYnJhcnkuc3VtKHZhbHVlcyk7Ly9nZXQgdGhlIHN1bSBvZiB0aGUgVmFsdWVzXHJcbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGVudHJvcHkgLT0gdmFsdWUgLyBzdW0gKiBNYXRoLmxvZzIodmFsdWUgLyBzdW0pOyAvL3VzZSB0aGUgZm9ybXVsYXIgb24gZWFjaCBpdGVtXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbnRyb3B5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5mb3JtYXRpb25HYWluID0gKHRhcmdldE5vZGUsIHZhcmlhYmxlRGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBhcnJhbmdlRGF0YSA9IChsaXN0KSA9PiB7Ly9hcnJhbmdlIHRoZSBsaXN0IGludG8gYW4gb2JqZWN0IG9mIGNvdW50c1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbaXRlbV0gPSBkYXRhW2l0ZW1dIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2l0ZW1dKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXREYXRhID0gYXJyYW5nZURhdGEodGFyZ2V0Tm9kZSk7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRFbnRyb3B5ID0gdGhpcy5lbnRyb3B5KHRhcmdldERhdGEpOy8vZ2V0IHRoZSBlbnRyb3B5IG9mIHRoZSB0YXJnZXQgbm9kZVxyXG4gICAgICAgIGxldCBzdW1PZkluZm9ybWF0aW9uID0gMDsvL2luaXRpYWxpemUgc3VtIG9mIGluZm9ybWF0aW9uIGdhaW5cclxuXHJcbiAgICAgICAgbGV0IHZhcmlhYmxlVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh2YXJpYWJsZURhdGEpOy8vZ2V0IHRoZSB2YWx1ZXMgb2YgdGhpcyB2YXJpYWJsZVxyXG4gICAgICAgIGxldCB2YXJpYWJsZUxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWFibGVWYWx1ZXMubGVuZ3RoOyBpKyspIHsvL2dldCB0aGUgbGVuZ3RoIG9mIHRoZSB2YXJpYWJsZSBieSB0aGUgYWRkaW5nIHRoZSB2YWx1ZXNcclxuICAgICAgICAgICAgdmFyaWFibGVMZW5ndGggKz0gdmFyaWFibGVWYWx1ZXNbaV0ubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXJpYWJsZVZhbHVlc1tpXSA9IGFycmFuZ2VEYXRhKHZhcmlhYmxlVmFsdWVzW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHYgb2YgdmFyaWFibGVWYWx1ZXMpIHsvL2dldCB0aGUgZW50cm9weSBvZiBlYWNoIGFuZCBtdWx0aXBseSBieSB0aGUgcHJvYmFiaWxpdHlcclxuICAgICAgICAgICAgc3VtT2ZJbmZvcm1hdGlvbiArPSAobWF0aExpYnJhcnkuc3VtKE9iamVjdC52YWx1ZXModikpIC8gdmFyaWFibGVMZW5ndGgpICogdGhpcy5lbnRyb3B5KHYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZm9ybWF0aW9uR2FpbiA9IHRhcmdldEVudHJvcHkgLSBzdW1PZkluZm9ybWF0aW9uO1xyXG4gICAgICAgIHJldHVybiBpbmZvcm1hdGlvbkdhaW47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oaWdoZXN0SW5mb3JtYXRpb25HYWluTm9kZSA9IChkYXRhLCBub2RlcykgPT4ge1xyXG4gICAgICAgIGxldCBnYWluZWRJbmZvcm1hdGlvbiA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIGluIG5vZGVzKSB7XHJcbiAgICAgICAgICAgIGdhaW5lZEluZm9ybWF0aW9uW2ldID0gdGhpcy5pbmZvcm1hdGlvbkdhaW4oZGF0YSwgbm9kZXNbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdExpYnJhcnkubWF4KGdhaW5lZEluZm9ybWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnF1YXJ0aWxlUmFuZ2UgPSAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgbWlkZGxlID0gKF9kdCkgPT4gey8vZ2V0IHRoZSBtaWRkbGUgcG9zaXRpb24gb2YgYSBsaXN0IG9mIG51bWJlcnNcclxuICAgICAgICAgICAgbGV0IG1pZGRsZTtcclxuICAgICAgICAgICAgaWYgKChfZHQubGVuZ3RoKSAlIDIgPT0gMCkgey8vaWYgdGhlIGxpc3QgY291bnQgaXMgbm90IGV2ZW5cclxuICAgICAgICAgICAgICAgIG1pZGRsZSA9IFtNYXRoLmNlaWwoX2R0Lmxlbmd0aCAvIDIpIC0gMSwgTWF0aC5jZWlsKF9kdC5sZW5ndGggLyAyKV07Ly9nZXQgdGhlIHR3byBpbiB0aGUgbWlkZGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtaWRkbGUgPSBbTWF0aC5jZWlsKF9kdC5sZW5ndGggLyAyKSAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWlkZGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGdldE1pZGRsZSA9IChfZHQpID0+IHsvLyBnZXQgdGhlIGl0ZW1zIGluIHRoZSBtaWRkbGUgb2YgYSBsaXN0XHJcbiAgICAgICAgICAgIGxldCBbbWlkZGxlMSwgbWlkZGxlMl0gPSBtaWRkbGUoX2R0KTtcclxuICAgICAgICAgICAgbGV0IG1pZGRsZXMgPSBbXTtcclxuICAgICAgICAgICAgbWlkZGxlcy5wdXNoKF9kdFttaWRkbGUxXSk7XHJcbiAgICAgICAgICAgIGlmIChtaWRkbGUyICE9IHVuZGVmaW5lZCkgbWlkZGxlcy5wdXNoKF9kdFttaWRkbGUyXSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWlkZGxlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYWxmcyA9IChfZHQpID0+IHsvL2RpdmlkZSBhIGxpc3QgaW50byB0d28gZXF1YWwgaGFsZnNcclxuICAgICAgICAgICAgbGV0IFttaWRkbGUxLCBtaWRkbGUyXSA9IG1pZGRsZShfZHQpO1xyXG4gICAgICAgICAgICBpZiAobWlkZGxlMiA9PSB1bmRlZmluZWQpIG1pZGRsZTIgPSBtaWRkbGUxO1xyXG4gICAgICAgICAgICBsZXQgaGFsZjEgPSBfZHQuc2xpY2UoMCwgbWlkZGxlMSk7XHJcbiAgICAgICAgICAgIGxldCBoYWxmMiA9IF9kdC5zbGljZShtaWRkbGUyICsgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbaGFsZjEsIGhhbGYyXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXllcnMgPSBoYWxmcyhkYXRhKTsvL2dldCB0aGUgaGFsZnMgb2YgdGhlIGxpc3RcclxuICAgICAgICBsZXQgW2xheWVyMSwgbGF5ZXIyXSA9IGhhbGZzKGxheWVyc1swXSk7Ly9kaXZpZGUgZWFjaCBoYWxmIGludG8gaGFsZnNcclxuICAgICAgICBsZXQgW2xheWVyMywgbGF5ZXI0XSA9IGhhbGZzKGxheWVyc1sxXSk7XHJcblxyXG4gICAgICAgIGxldCBtaWRkbGUxID0gZ2V0TWlkZGxlKGxheWVyc1swXSk7Ly9nZXQgdGhlIG1pZGRsZSBvZiB0aGUgZmlyc3QgbGF5ZXJzXHJcbiAgICAgICAgbGV0IG1pZGRsZTMgPSBnZXRNaWRkbGUobGF5ZXJzWzFdKTtcclxuXHJcbiAgICAgICAgbGV0IHExID0gbWF0aExpYnJhcnkubWVkaWFuKG1pZGRsZTEpOy8vZ2V0IHRoZSBtZWRpYW4gb2YgdGhlIGZpcnN0IGFuZCBsYXN0IGxheWVyc1xyXG4gICAgICAgIGxldCBxMyA9IG1hdGhMaWJyYXJ5Lm1lZGlhbihtaWRkbGUzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHEzIC0gcTE7Ly9maW5kIHRoZSByYW5nZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9ybWFsaXplRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhIC0gYiB9KTtcclxuICAgICAgICB2YXIgbWF4ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHZhciBtaW4gPSBkYXRhWzBdO1xyXG4gICAgICAgIHZhciBub3JtYWxpemVkID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQucHVzaCgoZGF0YVtpXSAtIG1pbikgLyAobWF4IC0gbWluKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFuYWx5c2lzTGlicmFyeTsiLCJjb25zdCBGdW5jID0gcmVxdWlyZSgnLi8uLi9jbGFzc2VzL0Z1bmMnKTtcclxubGV0IGZ1bmMgPSBuZXcgRnVuYygpO1xyXG5cclxuZnVuY3Rpb24gQXBwTGlicmFyeSgpIHtcclxuICAgIHRoaXMubWFrZVdlYmFwcCA9IChjYWxsYmFjayA9ICgpID0+IHsgfSkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYW5jaG9yID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50QW5jaG9yID0gZXZlbnQudGFyZ2V0LmdldFBhcmVudHMoJ2EnKTtcclxuICAgICAgICAgICAgbGV0IHVybCA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTsvL2NoZWNrIHdoZW4gYSB1cmwgaXMgYWJvdXQgdG8gYmUgb3BlblxyXG5cclxuICAgICAgICAgICAgaWYgKGFuY2hvci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdhJyAmJiAhZnVuYy5pc251bGwocGFyZW50QW5jaG9yKSkge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yID0gcGFyZW50QW5jaG9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZnVuYy5pc251bGwodXJsKSAmJiAhZnVuYy5pc251bGwocGFyZW50QW5jaG9yKSkge1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yID0gcGFyZW50QW5jaG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vZ2V0IHRoZSBhbmNob3IgZWxlbWVudFxyXG4gICAgICAgICAgICB1cmwgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gJ19ibGFuaycpIHsvL2NoZWNrIGlmIGl0IGlzIGZvciBuZXcgcGFnZVxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5wcmVwYXJlVXJsKHVybCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFmdW5jLmlzbnVsbCh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOy8vYmxvY2sgYW5kIG9wZW4gaW5zaWRlIGFzIHdlYmFwcFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJlcGFyZVVybCh1cmwpICE9IGxvY2F0aW9uLmhyZWYpIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgncGFnZScsICd0aXRsZScsIHVybCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmVwYXJlVXJsID0gKHVybCA9ICcnKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1cmwuaW5jbHVkZXMobG9jYXRpb24ub3JpZ2luKSkge1xyXG4gICAgICAgICAgICBsZXQgc3BsaXRVcmwgPSBmdW5jLnVybFNwbGl0dGVyKHVybCk7XHJcbiAgICAgICAgICAgIGlmIChzcGxpdFVybC5sb2NhdGlvbiA9PSBsb2NhdGlvbi5vcmlnaW4pIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IGxvY2F0aW9uLm9yaWdpbiArICcvJyArIHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdXJsLmluY2x1ZGVzKGxvY2F0aW9uLnByb3RvY29sKSkge1xyXG4gICAgICAgICAgICB1cmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB1cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWpheCA9IChwYXJhbXMgPSB7IGFzeW5jOiB0cnVlLCBkYXRhOiB7fSwgdXJsOiAnJywgbWV0aG9kOiAnJywgc2VjdXJlZDogZmFsc2UgfSkgPT4ge1xyXG4gICAgICAgIHBhcmFtcy5hc3luYyA9IHBhcmFtcy5hc3luYyB8fCB0cnVlO1xyXG4gICAgICAgIHBhcmFtcy5kYXRhID0gcGFyYW1zLmRhdGEgfHwge307XHJcbiAgICAgICAgcGFyYW1zLnVybCA9IHBhcmFtcy51cmwgfHwgJy4vJztcclxuICAgICAgICBwYXJhbXMubWV0aG9kID0gcGFyYW1zLm1ldGhvZCB8fCAnUE9TVCc7XHJcbiAgICAgICAgcGFyYW1zLnNlY3VyZWQgPSBwYXJhbXMuc2VjdXJlZCB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcy5zZWN1cmVkKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy51cmwgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJyArIHBhcmFtcy51cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGlmIChwYXJhbXMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBwYXJhbXMuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcGFyYW1zLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGksIHBhcmFtcy5kYXRhW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoZnVuYy5pc3NldChwYXJhbXMub25wcm9ncmVzcykpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QudXBsb2FkLm9ucHJvZ3Jlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMub25wcm9ncmVzcygoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogNTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5vbnByb2dyZXNzKChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4ocGFyYW1zLm1ldGhvZCwgcGFyYW1zLnVybCwgcGFyYW1zLmFzeW5jKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFwcExpYnJhcnk7IiwiZnVuY3Rpb24gQXJyYXlMaWJyYXJ5KCkge1xyXG5cclxuICAgIHRoaXMuY29tYmluZSA9IChoYXlzdGFjaywgZmlyc3QsIHNlY29uZCwgcG9zKSA9PiB7Ly91c2VkIHRvIGdldCB3aGF0IGlzIGJldHdlZW4gdHdvIGl0ZW1zIGF0IGEgcGFydGljdWxhciBvY2N1cnJhbmNlIGluIGFuIEFycmF5IGFuZCB0aGUgaXRlbXMgY29tYmluZWRcclxuICAgICAgICBwb3MgPSBwb3MgfHwgMDsvL2luaXRpYWxpemUgcG9zaXRpb24gaWYgbm90IHNldFxyXG4gICAgICAgIGxldCBhdDEgPSBwb3MsXHJcbiAgICAgICAgICAgIGF0MiA9IGZpcnN0ID09PSBzZWNvbmQgPyBwb3MgKyAxIDogcG9zOyAvL2NoZWNrIGlmIGl0IGlzIHRoZSBzYW1lIGFuZCBjaGFuZ2UgcG9zaXRpb25cclxuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmluZGV4QXQoaGF5c3RhY2ssIGZpcnN0LCBhdDEpOy8vZ2V0IHRoZSBzdGFydFxyXG4gICAgICAgIGxldCBlbmQgPSB0aGlzLmluZGV4QXQoaGF5c3RhY2ssIHNlY29uZCwgYXQyKSArIDE7Ly9nZXQgdGhlIGVuZFxyXG5cclxuICAgICAgICBpZiAoc3RhcnQgPT0gLTEgfHwgZW5kID09IDApIHsvL251bGwgaWYgb25lIGlzIG5vdCBmb3VuZFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBoYXlzdGFjay5zbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluQmV0d2VlbiA9IChoYXlzdGFjaywgZmlyc3QsIHNlY29uZCwgcG9zKSA9PiB7Ly91c2VkIHRvIGdldCB3aGF0IGlzIGJldHdlZW4gdHdvIGl0ZW1zIGF0IGEgcGFydGljdWxhciBvY2N1cnJhbmNlIGluIGFuIEFycmF5XHJcbiAgICAgICAgcG9zID0gcG9zIHx8IDA7Ly9pbml0aWFsaXplIHBvc2l0aW9uIGlmIG5vdCBzZXRcclxuICAgICAgICBsZXQgYXQxID0gcG9zLFxyXG4gICAgICAgICAgICBhdDIgPSBmaXJzdCA9PT0gc2Vjb25kID8gcG9zICsgMSA6IHBvczsgLy9jaGVjayBpZiBpdCBpcyB0aGUgc2FtZSBhbmQgY2hhbmdlIHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5pbmRleEF0KGhheXN0YWNrLCBmaXJzdCwgYXQxKSArIDE7Ly9nZXQgdGhlIHN0YXJ0XHJcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMuaW5kZXhBdChoYXlzdGFjaywgc2Vjb25kLCBhdDIpOy8vZ2V0IHRoZSBlbmRcclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0ID09IDAgfHwgZW5kID09IC0xKSB7Ly9udWxsIGlmIG9uZSBpcyBub3QgZm91bmRcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGF5c3RhY2suc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250YWlucyA9IChoYXlzdGFjaywgbmVlZGxlKSA9PiB7Ly91c2VkIHRvIGNoZWNrIGlmIGFuIEFycmF5IGhhcyBhbiBpdGVtXHJcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTsvL3NldCBmbGFnIHRvIGZhbHNlXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBoYXlzdGFjaykge1xyXG4gICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT0gbmVlZGxlKSB7Ly9pZiBmb3VuZCBicmVha291dFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbmRleEF0ID0gKGhheXN0YWNrLCBuZWVkbGUsIHBvcykgPT4gey8vdXNlZCB0byBnZXQgdGhlIGluZGV4IG9mIGFuIGl0ZW0gYXQgYSBwYXJ0aWN1bGFyIG9jY3VycmFuY2VcclxuICAgICAgICBwb3MgPSBwb3MgfHwgMDtcclxuICAgICAgICBsZXQgY291bnQgPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhheXN0YWNrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXSA9PSBuZWVkbGUpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09IHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maW5kID0gKGhheXN0YWNrLCBjYWxsYmFjaykgPT4gey8vdXNlZCBhcyBhIGhpZ2hlciBvcmRlciBmdW5jdGlvbiB0byBnZXQgYW4gaXRlbXMgdGhhdCBtYXRjaCB0aGUgY29uZGl0aW9uc1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gaGF5c3RhY2spIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGhheXN0YWNrW2ldKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2tbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maW5kQWxsID0gKGhheXN0YWNrLCBjYWxsYmFjaykgPT4gey8vdXNlZCBhcyBhIGhpZ2hlciBvcmRlciBmdW5jdGlvbiB0byBnZXQgYWxsIHRoZSBpdGVtcyB0aGF0IG1hdGNoIHRoZSBjb25kaXRpb25zXHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gaGF5c3RhY2spIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGhheXN0YWNrW2ldKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChoYXlzdGFja1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRPYmplY3QgPSAoaGF5c3RhY2ssIGtleSwgdmFsdWUpID0+IHsvL3VzZWQgdG8gZ2V0IGFuIE9iamVjdCB3aXRoIGFuIEl0ZW0gaW4gYSBKc29uQXJyYXlcclxuICAgICAgICBsZXQgb2JqZWN0O1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gaGF5c3RhY2spIHtcclxuICAgICAgICAgICAgaWYgKGhheXN0YWNrW2ldW2tleV0gPT0gdmFsdWUpIG9iamVjdCA9IGhheXN0YWNrW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0QWxsT2JqZWN0cyA9IChoYXlzdGFjaywga2V5LCB2YWx1ZSkgPT4gey8vdXNlZCB0byBnZXQgYWxsIG9jY3VycmFuY2VzIG9mIGFuIE9iamVjdCB3aXRoIGFuIEl0ZW0gaW4gYSBKc29uQXJyYXlcclxuICAgICAgICBsZXQgbmV3QXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGhheXN0YWNrKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXVtrZXldID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGhheXN0YWNrW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRBbGwgPSAoaGF5c3RhY2ssIG5lZWRsZSkgPT4gey8vdXNlZCB0byBhbGwgb2NjdXJyYW5jZXMgb2YgYW4gaXRlbSBpbiBhbiBBcnJheVxyXG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gaGF5c3RhY2spIHtcclxuICAgICAgICAgICAgaWYgKGhheXN0YWNrW2ldID09IG5lZWRsZSkgbmV3QXJyYXkucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlQWxsID0gKGhheXN0YWNrLCBuZWVkbGUpID0+IHsvL3VzZWQgdG8gcmVtb3ZlIGluc3RhbmNlcyBvZiBhbiBpdGVtXHJcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiBoYXlzdGFjaykge1xyXG4gICAgICAgICAgICBpZiAoaSAhPSBuZWVkbGUpIHtcclxuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHV0QXQgPSAoaGF5c3RhY2sgPSBbXSwgdmFsdWUsIGtleSA9IDApID0+IHsvL3VzZWQgdG8gcHVzaCBhbiBpdGVtIGludG8gYW4gaW5kZXggaW4gQXJyYXlcclxuICAgICAgICBsZXQgbmV3QXJyYXkgPSBbXTsvL3N0b3JhZ2VcclxuICAgICAgICBmb3IgKGxldCBpIGluIGhheXN0YWNrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IGtleSkgey8vbWF0Y2hlZFxyXG4gICAgICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSB2YWx1ZTsvL3B1c2ggaW4gdGhlIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IE1hdGguZmxvb3Ioa2V5KTsvL2NoZWNrIGlmIGl0J3MgYSBudW1iZXJcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4obmV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0ga2V5ICsgMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld0FycmF5W25leHRdID0gaGF5c3RhY2tbaV07Ly9hZGQgdGhlIHByZXZpb3VzIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnJheVtpXSA9IGhheXN0YWNrW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wdXNoQXJyYXkgPSAoaGF5c3RhY2sgPSBbXSwgbmVlZGxlLCBpbnNlcnQpID0+IHsvL3VzZWQgdG8gcHVzaCBpbiBhbiBpdGVtIGJlZm9yZSBhbm90aGVyIGV4aXN0aW5nIGl0ZW0gaW4gYW4gQXJyYXlcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLmFycmF5SW5kZXgoaGF5c3RhY2ssIG5lZWRsZSk7Ly9nZXQgdGhlIGV4aXN0aW5nIGl0ZW0gcG9zaXRpb25cclxuICAgICAgICBsZXQgbmV3QXJyYXkgPSB0aGlzLnB1dEF0KGhheXN0YWNrLCBpbnNlcnQsIHBvc2l0aW9uKTsvL3B1c2ggaW4gbmV3IGl0ZW1cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcnJheUluZGV4ID0gKGhheXN0YWNrID0gW10sIG5lZWRsZSA9IFtdKSA9PiB7Ly91c2VkIHRvIGdldCBwb3NpdGlvbiBvZiBhbiBpdGVtIGluIGFuIEFycmF5XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBoYXlzdGFjaykge1xyXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoaGF5c3RhY2tbaV0pID09IEpTT04uc3RyaW5naWZ5KG5lZWRsZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhhc0FycmF5ID0gKGhheXN0YWNrID0gW10sIG5lZWRsZSA9IFtdKSA9PiB7Ly91c2VkIHRvIGNoZWNrIGlmIGFuIEFycmF5IGlzIGEgc3ViLUFycmF5IHRvIGFub3RoZXIgQXJyYXlcclxuICAgICAgICBoYXlzdGFjayA9IEpTT04uc3RyaW5naWZ5KGhheXN0YWNrKTtcclxuICAgICAgICBuZWVkbGUgPSBKU09OLnN0cmluZ2lmeShuZWVkbGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9PYmplY3QgPSAoYXJyYXkgPSBbXSwga2V5KSA9PiB7Ly91c2VkIHRvIHR1cm4gYW4gSnNvbkFycmF5IHRvIGFuIE9iamVjdCBsaXRlcmFsXHJcbiAgICAgICAgbGV0IG9iamVjdCA9IHt9Oy8vc3RvcmFnZVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyYXkpIHtcclxuICAgICAgICAgICAgb2JqZWN0W2FycmF5W2ldW2tleV1dID0gYXJyYXlbaV07Ly9zdG9yZSB0aGUgaW50ZW5kZWQgW2tleSwgdmFsdWVdXHJcbiAgICAgICAgICAgIGRlbGV0ZSBvYmplY3RbYXJyYXlbaV1ba2V5XV1ba2V5XTsvL3JlbW92ZSB0aGUga2V5IGluIHRoZSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVzaGFwZSA9IChwYXJhbXMpID0+IHsvL3VzZWQgdG8gY2hhbmdlIHRoZSBzaGFwZSBvZiBhbiBBcnJheVxyXG4gICAgICAgIC8vIFBlbmRpbmdcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJhbmRvbVBpY2sgPSAoYXJyYXkpID0+IHsvL3VzZWQgdG8gcGljayBhIHJhbmRvbSBpdGVtIGZyb20gYW4gQXJyYXlcclxuICAgICAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRW1wdHkgPSAoYXJyYXkgPSBbXSkgPT4gey8vdXNlZCB0byB0cnVuY2F0ZSBhbiBBcnJheVxyXG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdOy8vc3RvcmFnZVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXlbaV0pICYmIGFycmF5W2ldLmxlbmd0aCA+IDApIHsvL2lmIGFycmF5IGdvIGRlZXBcclxuICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2godGhpcy5yZW1vdmVFbXB0eShhcnJheVtpXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFycmF5W2ldICE9IHVuZGVmaW5lZCAmJiBhcnJheVtpXSAhPSBudWxsICYmIGFycmF5W2ldICE9IDAgJiYgYXJyYXlbaV0gIT0gJycpIHsvL3NraXAgW3VuZGVmaW5lZCwgbnVsbCwgMCwgJyddXHJcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lYWNoID0gKGFycmF5ID0gW10sIGNhbGxiYWNrID0gKCkgPT4geyB9KSA9PiB7Ly91c2VkIGFzIGEgaGlnaGVyIG9yZGVyIEFycmF5IGZ1bmN0aW9uXHJcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107Ly9zdG9yYWdlXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJheSkge1xyXG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKGNhbGxiYWNrKGFycmF5W2ldLCBpKSk7Ly9tYWtlIGNoYW5nZXMgdG8gdGhlIGl0ZW0gYW5kIHN0b3JlIGl0LlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5oYXNBcnJheUVsZW1lbnQgPSAoaGF5c3RhY2sgPSBbXSwgbmVlZGxlID0gW10pID0+IHsvL3VzZWQgdG8gY2hlY2sgaWYgdHdvIGFycmF5cyBoYXMgYW4gaXRlbSBpbiBjb21tb25cclxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gbmVlZGxlKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXlzdGFjay5pbmRleE9mKG5lZWRsZVtpXSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9TZXQgPSAoaGF5c3RhY2sgPSBbXSkgPT4gey8vdXNlZCB0byB0dXJuIGFuIEFycmF5IGludG8gYSBzZXQoTWFrZSBzdXJlIHRoZXJlIGEgbm8gZHVwbGljYXRlcylcclxuICAgICAgICBsZXQgc2luZ2xlID0gW107Ly9zdG9yYWdlXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBoYXlzdGFjaykgey8vc2tpcCBpZiBhbHJlYWR5IHN0b3JlZFxyXG4gICAgICAgICAgICBpZiAoc2luZ2xlLmluZGV4T2YoaGF5c3RhY2tbaV0pID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGUucHVzaChoYXlzdGFja1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBvcEluZGV4ID0gKGFycmF5ID0gW10sIGluZGV4KSA9PiB7Ly91c2VkIHRvIHJlbW92ZSBhbiBpdGVtIGF0IGEgcG9zaXRpb24gaW4gYW4gQXJyYXlcclxuICAgICAgICBsZXQgbmV3QXJyYXkgPSBbXTsvL3N0b3JhZ2UgQXJyYXlcclxuICAgICAgICBmb3IgKGxldCBpIGluIGFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmIChpICE9IGluZGV4KSB7Ly9za2lwIHRoZSBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChhcnJheVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGF0YVR5cGUgPSAoYXJyYXkgPSBbXSkgPT4gey8vdXNlZCB0byBnZXQgdGhlIGRhdGF0eXBlcyBpbnNpZGUgYW4gQXJyYXlcclxuICAgICAgICBsZXQgdHlwZSA9IHR5cGVvZiBhcnJheVswXTsvL2dldCB0aGUgaW5kZXh0IHR5cGVcclxuICAgICAgICBmb3IgKGxldCBpIGluIGFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyYXlbaV0gIT0gdHlwZSkgey8vaWYgdHdvIHR5cGVzIGRvIG5vdCBtYXRjaCByZXR1cm4gbWl4ZWRcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbWl4ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBcnJheUxpYnJhcnk7IiwiY29uc3QgVGVtcGxhdGUgPSByZXF1aXJlKCcuLi9jbGFzc2VzL1RlbXBsYXRlJyk7XHJcblxyXG5mdW5jdGlvbiBDb2xvclBpY2tlcih3aW5kb3cgPSB7fSkge1xyXG4gICAgY29uc3QgYmFzZSA9IG5ldyBUZW1wbGF0ZSh3aW5kb3cpO1xyXG5cclxuICAgIHRoaXMuY29sb3JJbmRpY2F0b3JQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgdGhpcy5vcGFjaXR5SW5kaWNhdG9yUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIHRoaXMuY29udmVydFRvID0gJ1JHQic7XHJcblxyXG4gICAgdGhpcy5pbml0ID0gKHBhcmFtcyA9IHt9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5waWNrZXIgPSBiYXNlLmNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnZGl2JywgYXR0cmlidXRlczogeyBjbGFzczogJ2NvbG9yLXBpY2tlcicgfSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdjb2xvci1waWNrZXItc2V0dGVycycgfSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGlkOiAnY29sb3ItcGlja2VyLWNvbG9ycy13aW5kb3cnIH0sIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBlbGVtZW50OiAnY2FudmFzJywgYXR0cmlidXRlczogeyBpZDogJ2NvbG9yLXBpY2tlci1jb2xvcnMnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBpZDogJ2NvbG9yLXBpY2tlci1jb2xvci1pbmRpY2F0b3InIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdjb2xvci1waWNrZXItb3BhY2l0aWVzLXdpbmRvdycgfSwgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdjYW52YXMnLCBhdHRyaWJ1dGVzOiB7IGlkOiAnY29sb3ItcGlja2VyLW9wYWNpdGllcycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7IGlkOiAnY29sb3ItcGlja2VyLW9wYWNpdHktaW5kaWNhdG9yJyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogJ2RpdicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdjb2xvci1waWNrZXItcmVzdWx0JyB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBpZDogJ3BpY2tlZC1jb2xvcicgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdwaWNrZWQtY29sb3Itd2luZG93JyB9LCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZWxlbWVudDogJ3NlbGVjdCcsIGF0dHJpYnV0ZXM6IHsgaWQ6ICdwaWNrZWQtY29sb3Itc2V0dGVyJyB9LCBvcHRpb25zOiBbJ1JHQicsICdIRVgnLCAnSFNMJ10gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVsZW1lbnQ6ICdzcGFuJywgYXR0cmlidXRlczogeyBpZDogJ3BpY2tlZC1jb2xvci12YWx1ZScgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdzdHlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyB0eXBlOiAndGV4dC9jc3MnLCByZWw6ICdzdHlsZXNoZWV0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGAuY29sb3ItcGlja2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICNjb2xvci1waWNrZXItc2V0dGVycyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbG9yLXBpY2tlci1jb2xvcnMtd2luZG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgI2NvbG9yLXBpY2tlci1vcGFjaXRpZXMtd2luZG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICNjb2xvci1waWNrZXItY29sb3ItaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjY29sb3ItcGlja2VyLW9wYWNpdHktaW5kaWNhdG9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjY29sb3ItcGlja2VyLXJlc3VsdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC4xZW0gMGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjcGlja2VkLWNvbG9yIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICNwaWNrZWQtY29sb3Itd2luZG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjcGlja2VkLWNvbG9yLXZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yV2luZG93ID0gdGhpcy5waWNrZXIuZmluZCgnI2NvbG9yLXBpY2tlci1jb2xvcnMtd2luZG93Jyk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5V2luZG93ID0gdGhpcy5waWNrZXIuZmluZCgnI2NvbG9yLXBpY2tlci1vcGFjaXRpZXMtd2luZG93Jyk7XHJcbiAgICAgICAgdGhpcy5jb2xvckNhbnZhcyA9IHRoaXMucGlja2VyLmZpbmQoJyNjb2xvci1waWNrZXItY29sb3JzJyk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5Q2FudmFzID0gdGhpcy5waWNrZXIuZmluZCgnI2NvbG9yLXBpY2tlci1vcGFjaXRpZXMnKTtcclxuICAgICAgICB0aGlzLmNvbG9yTWFya2VyID0gdGhpcy5waWNrZXIuZmluZCgnI2NvbG9yLXBpY2tlci1jb2xvci1pbmRpY2F0b3InKTtcclxuICAgICAgICB0aGlzLm9wYWNpdHlNYXJrZXIgPSB0aGlzLnBpY2tlci5maW5kKCcjY29sb3ItcGlja2VyLW9wYWNpdHktaW5kaWNhdG9yJyk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHBhcmFtcy53aWR0aCA/IHBhcmFtcy53aWR0aCA6IDMwMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHBhcmFtcy5oZWlnaHQgPyBwYXJhbXMuaGVpZ2h0IDogMzAwO1xyXG4gICAgICAgIHRoaXMucGlja2VkQ29sb3IgPSBwYXJhbXMuY29sb3IgPyBwYXJhbXMuY29sb3IgOiAncmdiKDAsIDAsIDApJztcclxuICAgICAgICB0aGlzLmNvbG9yV2luZG93LmNzcyh7IGhlaWdodDogdGhpcy5oZWlnaHQgKyAncHgnIH0pO1xyXG4gICAgICAgIHRoaXMuY29sb3JDYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY29sb3JDYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5V2luZG93LmNzcyh7IGhlaWdodDogdGhpcy5oZWlnaHQgKyAncHgnIH0pO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eUNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLm9wYWNpdHlDYW52YXMud2lkdGggPSAyMDtcclxuXHJcbiAgICAgICAgLy90aGUgY29udGV4dFxyXG4gICAgICAgIHRoaXMuY29sb3JDb250ZXh0ID0gdGhpcy5jb2xvckNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eUNvbnRleHQgPSB0aGlzLm9wYWNpdHlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5waWNrZXIuZmluZCgnI3BpY2tlZC1jb2xvci12YWx1ZScpLmlubmVyVGV4dCA9IHRoaXMucGlja2VkQ29sb3I7XHJcbiAgICAgICAgdGhpcy5waWNrZXIuZmluZCgnI3BpY2tlZC1jb2xvci1zZXR0ZXInKS5vbkNoYW5nZWQodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnZlcnRUbyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlcGx5KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdGVuKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnBpY2tlcjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhbGlicmF0ZUNvbG9yID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvckdyYWRpZW50ID0gdGhpcy5jb2xvckNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy53aWR0aCwgMCk7XHJcblxyXG4gICAgICAgIC8vY29sb3Igc3RvcHNcclxuICAgICAgICBjb2xvckdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBcInJnYigyNTUsIDAsIDApXCIpO1xyXG4gICAgICAgIGNvbG9yR3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMTUsIFwicmdiKDI1NSwgMCwgMjU1KVwiKTtcclxuICAgICAgICBjb2xvckdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjMzLCBcInJnYigwLCAwLCAyNTUpXCIpO1xyXG4gICAgICAgIGNvbG9yR3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNDksIFwicmdiKDAsIDI1NSwgMjU1KVwiKTtcclxuICAgICAgICBjb2xvckdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjY3LCBcInJnYigwLCAyNTUsIDApXCIpO1xyXG4gICAgICAgIGNvbG9yR3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuODcsIFwicmdiKDI1NSwgMjU1LCAwKVwiKTtcclxuICAgICAgICBjb2xvckdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcInJnYigyNTUsIDAsIDApXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yQ29udGV4dC5maWxsU3R5bGUgPSBjb2xvckdyYWRpZW50O1xyXG4gICAgICAgIHRoaXMuY29sb3JDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy9hZGQgYmxhY2sgYW5kIHdoaXRlIHN0b3BzXHJcbiAgICAgICAgY29sb3JHcmFkaWVudCA9IHRoaXMuY29sb3JDb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBjb2xvckdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIik7XHJcbiAgICAgICAgY29sb3JHcmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIik7XHJcbiAgICAgICAgY29sb3JHcmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCBcInJnYmEoMCwgMCwgMCwgMClcIik7XHJcbiAgICAgICAgY29sb3JHcmFkaWVudC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDAsIDAsIDAsIDEpXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yQ29udGV4dC5maWxsU3R5bGUgPSBjb2xvckdyYWRpZW50O1xyXG4gICAgICAgIHRoaXMuY29sb3JDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhbGlicmF0ZU9wYWNpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJnYmE7XHJcblxyXG4gICAgICAgIHRoaXMub3BhY2l0eUNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMub3BhY2l0eUNhbnZhcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIGxldCBvcGFjaXR5R3JhZGllbnQgPSB0aGlzLm9wYWNpdHlDb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIHRoaXMub3BhY2l0eUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMTAwOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICByZ2JhID0gdGhpcy5hZGRPcGFjaXR5KHRoaXMucGlja2VkQ29sb3IsIGkgLyAxMDApO1xyXG4gICAgICAgICAgICBvcGFjaXR5R3JhZGllbnQuYWRkQ29sb3JTdG9wKGkgLyAxMDAsIHJnYmEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vcGFjaXR5Q29udGV4dC5maWxsU3R5bGUgPSBvcGFjaXR5R3JhZGllbnQ7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5Q29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5vcGFjaXR5Q2FudmFzLndpZHRoLCB0aGlzLm9wYWNpdHlDYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLm9wYWNpdHlDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMub3BhY2l0eUNhbnZhcy53aWR0aCwgdGhpcy5vcGFjaXR5Q2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzQ29sb3JNb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNPcGFjaXR5TW91c2VEb3duID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMucGlja2VyLm5vdEJ1YmJsZWRFdmVudCgnY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGVkICYmICFpc0NvbG9yTW91c2VEb3duICYmICFpc09wYWNpdHlNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbG9yTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50WCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLmNvbG9yQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50WSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLmNvbG9yQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHJcbiAgICAgICAgICAgIC8vaXMgbW91c2UgaW4gY29sb3IgcGlja2VyXHJcbiAgICAgICAgICAgIGlzQ29sb3JNb3VzZURvd24gPSAoY3VycmVudFggPiAwICYmIGN1cnJlbnRYIDwgdGhpcy5jb2xvckNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAmJiBjdXJyZW50WSA+IDAgJiYgY3VycmVudFkgPCB0aGlzLmNvbG9yQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3JNb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzQ29sb3JNb3VzZURvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JJbmRpY2F0b3JQb3NpdGlvbi54ID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuY29sb3JDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JJbmRpY2F0b3JQb3NpdGlvbi55ID0gZXZlbnQuY2xpZW50WSAtIHRoaXMuY29sb3JDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvck1hcmtlci5jc3MoeyB0b3A6IHRoaXMuY29sb3JJbmRpY2F0b3JQb3NpdGlvbi55ICsgJ3B4JywgbGVmdDogdGhpcy5jb2xvckluZGljYXRvclBvc2l0aW9uLnggKyAncHgnIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwaWNrZWQgPSB0aGlzLmdldFBpY2tlZENvbG9yKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlZENvbG9yID0gYHJnYigke3BpY2tlZC5yfSwgJHtwaWNrZWQuZ30sICR7cGlja2VkLmJ9KWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvckNsaWNrZWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvckluZGljYXRvclBvc2l0aW9uLnggPSBldmVudC5jbGllbnRYIC0gdGhpcy5jb2xvckNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9ySW5kaWNhdG9yUG9zaXRpb24ueSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLmNvbG9yQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvck1hcmtlci5jc3MoeyB0b3A6IHRoaXMuY29sb3JJbmRpY2F0b3JQb3NpdGlvbi55ICsgJ3B4JywgbGVmdDogdGhpcy5jb2xvckluZGljYXRvclBvc2l0aW9uLnggKyAncHgnIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBpY2tlZCA9IHRoaXMuZ2V0UGlja2VkQ29sb3IoKTtcclxuICAgICAgICAgICAgdGhpcy5waWNrZWRDb2xvciA9IGByZ2IoJHtwaWNrZWQucn0sICR7cGlja2VkLmd9LCAke3BpY2tlZC5ifSlgO1xyXG4gICAgICAgICAgICB0aGlzLnJlcGx5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xvck1vdXNlVXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaXNDb2xvck1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGlicmF0ZU9wYWNpdHkoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1JlZ2lzdGVyXHJcbiAgICAgICAgdGhpcy5jb2xvckNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNvbG9yTW91c2VEb3duKTtcclxuICAgICAgICB0aGlzLmNvbG9yQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY29sb3JNb3VzZU1vdmUpO1xyXG4gICAgICAgIHRoaXMuY29sb3JDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbG9yQ2xpY2tlZCk7XHJcbiAgICAgICAgdGhpcy5jb2xvckNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBjb2xvck1vdXNlVXApO1xyXG5cclxuICAgICAgICBjb25zdCBvcGFjaXR5TW91c2VEb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50WCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLm9wYWNpdHlDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRZID0gZXZlbnQuY2xpZW50WSAtIHRoaXMub3BhY2l0eUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG4gICAgICAgICAgICAvL2lzIG1vdXNlIGluIGNvbG9yIHBpY2tlclxyXG4gICAgICAgICAgICBpc09wYWNpdHlNb3VzZURvd24gPSAoY3VycmVudFggPiAwICYmIGN1cnJlbnRYIDwgdGhpcy5vcGFjaXR5Q2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICYmIGN1cnJlbnRZID4gMCAmJiBjdXJyZW50WSA8IHRoaXMub3BhY2l0eUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9wYWNpdHlNb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzT3BhY2l0eU1vdXNlRG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5SW5kaWNhdG9yUG9zaXRpb24ueCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLm9wYWNpdHlDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eUluZGljYXRvclBvc2l0aW9uLnkgPSBldmVudC5jbGllbnRZIC0gdGhpcy5vcGFjaXR5Q2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eU1hcmtlci5jc3MoeyB0b3A6IHRoaXMub3BhY2l0eUluZGljYXRvclBvc2l0aW9uLnkgKyAncHgnIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwaWNrZWQgPSB0aGlzLmdldFBpY2tlZE9wYWNpdHkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VkQ29sb3IgPSBgcmdiKCR7cGlja2VkLnJ9LCAke3BpY2tlZC5nfSwgJHtwaWNrZWQuYn0sICR7cGlja2VkLmF9KWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBvcGFjaXR5Q2xpY2tlZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHlJbmRpY2F0b3JQb3NpdGlvbi54ID0gZXZlbnQuY2xpZW50WCAtIHRoaXMub3BhY2l0eUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHlJbmRpY2F0b3JQb3NpdGlvbi55ID0gZXZlbnQuY2xpZW50WSAtIHRoaXMub3BhY2l0eUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eU1hcmtlci5jc3MoeyB0b3A6IHRoaXMub3BhY2l0eUluZGljYXRvclBvc2l0aW9uLnkgKyAncHgnIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBpY2tlZCA9IHRoaXMuZ2V0UGlja2VkT3BhY2l0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBpY2tlZENvbG9yID0gYHJnYigke3BpY2tlZC5yfSwgJHtwaWNrZWQuZ30sICR7cGlja2VkLmJ9LCAke3BpY2tlZC5hfSlgO1xyXG4gICAgICAgICAgICB0aGlzLnJlcGx5KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3BhY2l0eU1vdXNlVXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaXNPcGFjaXR5TW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5vcGFjaXR5Q2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgb3BhY2l0eU1vdXNlRG93bik7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5Q2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb3BhY2l0eU1vdXNlTW92ZSk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5Q2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGFjaXR5Q2xpY2tlZCk7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5Q2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG9wYWNpdHlNb3VzZVVwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlcGx5ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udmVyQ29sb3IoKTtcclxuICAgICAgICB0aGlzLnBpY2tlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY29sb3JDaGFuZ2VkJykpO1xyXG4gICAgICAgIHRoaXMucGlja2VyLmZpbmQoJyNwaWNrZWQtY29sb3InKS5jc3MoeyBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuY29udmVydGVkQ29sb3IgfSk7XHJcbiAgICAgICAgdGhpcy5waWNrZXIuZmluZCgnI3BpY2tlZC1jb2xvci12YWx1ZScpLmlubmVyVGV4dCA9IHRoaXMuY29udmVydGVkQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb252ZXJDb2xvciA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jb252ZXJ0VG8gPT0gJ0hFWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb252ZXJ0ZWRDb2xvciA9IHRoaXMucmdiVG9IZXgodGhpcy5waWNrZWRDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29udmVydFRvID09ICdIU0wnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udmVydGVkQ29sb3IgPSB0aGlzLnJnYlRvSFNMKHRoaXMucGlja2VkQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnZlcnRUbyA9PSAnUkdCJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnZlcnRlZENvbG9yID0gdGhpcy5waWNrZWRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZWQgPSAoY2FsbEJhY2spID0+IHtcclxuICAgICAgICB0aGlzLnBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjb2xvckNoYW5nZWQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxCYWNrKHRoaXMuY29udmVydGVkQ29sb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0UGlja2VkQ29sb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGltYWdlRGF0YSA9IHRoaXMuY29sb3JDb250ZXh0LmdldEltYWdlRGF0YSh0aGlzLmNvbG9ySW5kaWNhdG9yUG9zaXRpb24ueCwgdGhpcy5jb2xvckluZGljYXRvclBvc2l0aW9uLnksIDEsIDEpO1xyXG4gICAgICAgIHJldHVybiB7IHI6IGltYWdlRGF0YS5kYXRhWzBdLCBnOiBpbWFnZURhdGEuZGF0YVsxXSwgYjogaW1hZ2VEYXRhLmRhdGFbMl0gfTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFBpY2tlZE9wYWNpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGltYWdlRGF0YSA9IHRoaXMub3BhY2l0eUNvbnRleHQuZ2V0SW1hZ2VEYXRhKHRoaXMub3BhY2l0eUluZGljYXRvclBvc2l0aW9uLngsIHRoaXMub3BhY2l0eUluZGljYXRvclBvc2l0aW9uLnksIDEsIDEpO1xyXG5cclxuICAgICAgICBsZXQgYWxwaGEgPSBNYXRoLmNlaWwoKChpbWFnZURhdGEuZGF0YVszXSAvIDI1NSkgKiAxMDApKSAvIDEwMDtcclxuICAgICAgICByZXR1cm4geyByOiBpbWFnZURhdGEuZGF0YVswXSwgZzogaW1hZ2VEYXRhLmRhdGFbMV0sIGI6IGltYWdlRGF0YS5kYXRhWzJdLCBhOiBhbHBoYSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZHJhdyA9IChwYXJhbXMpID0+IHtcclxuICAgICAgICB0aGlzLmluaXQocGFyYW1zKTtcclxuICAgICAgICB0aGlzLmNhbGlicmF0ZUNvbG9yKCk7XHJcbiAgICAgICAgdGhpcy5jYWxpYnJhdGVPcGFjaXR5KCk7XHJcblxyXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGludGVydmFsKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcG9zZSA9ICgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMucGlja2VyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29sb3JUeXBlID0gKGNvbG9yID0gJyNmZmZmZmYnKSA9PiB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAnc3RyaW5nJztcclxuICAgICAgICBpZiAoY29sb3IuaW5kZXhPZignIycpID09IDAgJiYgKGNvbG9yLmxlbmd0aCAtIDEpICUgMyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSAnaGV4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29sb3IuaW5kZXhPZigncmdiYScpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGJhc2UuaW5CZXR3ZWVuKGNvbG9yLCAncmdiYSgnLCAnKScpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWVzICE9IC0xICYmIHZhbHVlcy5zcGxpdCgnLCcpLmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3JnYmEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvbG9yLmluZGV4T2YoJ3JnYicpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGJhc2UuaW5CZXR3ZWVuKGNvbG9yLCAncmdiKCcsICcpJyk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZXMgIT0gLTEgJiYgdmFsdWVzLnNwbGl0KCcsJykubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmdiJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2xvci5pbmRleE9mKCdoc2xhJykgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gYmFzZS5pbkJldHdlZW4oY29sb3IsICdoc2xhKCcsICcpJyk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZXMgIT0gLTEgJiYgdmFsdWVzLnNwbGl0KCcsJykubGVuZ3RoID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnaHNsYSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29sb3IuaW5kZXhPZignaHNsJykgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gYmFzZS5pbkJldHdlZW4oY29sb3IsICdoc2woJywgJyknKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlcyAhPSAtMSAmJiB2YWx1ZXMuc3BsaXQoJywnKS5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdoc2wnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhleFRvUkdCID0gKGhleCA9ICcjZmZmZmZmJywgYWxwaGEgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgbGV0IHIgPSAwLCBnID0gMCwgYiA9IDAsIGEgPSAyNTU7XHJcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgICAgICByID0gXCIweFwiICsgaGV4WzFdICsgaGV4WzFdO1xyXG4gICAgICAgICAgICBnID0gXCIweFwiICsgaGV4WzJdICsgaGV4WzJdO1xyXG4gICAgICAgICAgICBiID0gXCIweFwiICsgaGV4WzNdICsgaGV4WzNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChoZXgubGVuZ3RoID09IDUpIHtcclxuICAgICAgICAgICAgciA9IFwiMHhcIiArIGhleFsxXSArIGhleFsxXTtcclxuICAgICAgICAgICAgZyA9IFwiMHhcIiArIGhleFsyXSArIGhleFsyXTtcclxuICAgICAgICAgICAgYiA9IFwiMHhcIiArIGhleFszXSArIGhleFszXTtcclxuICAgICAgICAgICAgYSA9IFwiMHhcIiArIGhleFs0XSArIGhleFs0XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PSA3KSB7XHJcbiAgICAgICAgICAgIHIgPSBcIjB4XCIgKyBoZXhbMV0gKyBoZXhbMl07XHJcbiAgICAgICAgICAgIGcgPSBcIjB4XCIgKyBoZXhbM10gKyBoZXhbNF07XHJcbiAgICAgICAgICAgIGIgPSBcIjB4XCIgKyBoZXhbNV0gKyBoZXhbNl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGhleC5sZW5ndGggPT0gOSkge1xyXG4gICAgICAgICAgICByID0gXCIweFwiICsgaGV4WzFdICsgaGV4WzJdO1xyXG4gICAgICAgICAgICBnID0gXCIweFwiICsgaGV4WzNdICsgaGV4WzRdO1xyXG4gICAgICAgICAgICBiID0gXCIweFwiICsgaGV4WzVdICsgaGV4WzZdO1xyXG4gICAgICAgICAgICBhID0gXCIweFwiICsgaGV4WzddICsgaGV4WzhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhID0gKyhhIC8gMjU1KS50b0ZpeGVkKDMpO1xyXG5cclxuICAgICAgICBpZiAoYWxwaGEgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGByZ2IoJHsrcn0sICR7K2d9LCAkeytifSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGByZ2IoJHsrcn0sICR7K2d9LCAkeytifSwgJHthfSlgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhleFRvSFNMID0gKGhleCA9ICcjZmZmZmZmJywgYWxwaGEgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5oZXhUb1JHQihoZXgsIGFscGhhKTtcclxuICAgICAgICBjb2xvciA9IHRoaXMucmdiVG9IU0woY29sb3IsIGFscGhhKTtcclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZ2JUb0hleCA9IChyZ2IgPSAncmdiKDAsIDAsIDApJywgYWxwaGEgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gcmdiLmluZGV4T2YoJygnKSArIDE7XHJcbiAgICAgICAgbGV0IGVuZCA9IHJnYi5pbmRleE9mKCcpJyk7XHJcbiAgICAgICAgbGV0IFtyLCBnLCBiLCBhXSA9IHJnYi5zbGljZShzdGFydCwgZW5kKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICBpZiAoIWJhc2UuaXNzZXQoYSkpIHtcclxuICAgICAgICAgICAgYSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByID0gKCtyKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgZyA9ICgrZykudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGIgPSAoK2IpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBhID0gTWF0aC5yb3VuZChhICogMjU1KS50b1N0cmluZygxNik7XHJcblxyXG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHIgPSBgMCR7cn1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgZyA9IGAwJHtnfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBiID0gYDAke2J9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgYSA9IGAwJHthfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGV4ID0gJyMnO1xyXG4gICAgICAgIGlmIChhbHBoYSAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICBoZXggKz0gYCR7cn0ke2d9JHtifSR7YX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGV4ICs9IGAke3J9JHtnfSR7Yn1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhleDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJnYlRvSFNMID0gKHJnYiA9ICdyZ2IoMCwgMCwgMCknLCBhbHBoYSA9IHRydWUpID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQgPSByZ2IuaW5kZXhPZignKCcpICsgMTtcclxuICAgICAgICBsZXQgZW5kID0gcmdiLmluZGV4T2YoJyknKTtcclxuICAgICAgICBsZXQgW3IsIGcsIGIsIGFdID0gcmdiLnNsaWNlKHN0YXJ0LCBlbmQpLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgIGlmICghYmFzZS5pc3NldChhKSkge1xyXG4gICAgICAgICAgICBhID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHIgLz0gMjI1O1xyXG4gICAgICAgIGcgLz0gMjI1O1xyXG4gICAgICAgIGIgLz0gMjI1O1xyXG5cclxuICAgICAgICBsZXQgY21pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxyXG4gICAgICAgICAgICBjbWF4ID0gTWF0aC5tYXgociwgZywgYiksXHJcbiAgICAgICAgICAgIGRlbHRhID0gY21heCAtIGNtaW4sXHJcbiAgICAgICAgICAgIGggPSAwLFxyXG4gICAgICAgICAgICBzID0gMCxcclxuICAgICAgICAgICAgbCA9IDA7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBodWVcclxuICAgICAgICAvLyBObyBkaWZmZXJlbmNlXHJcbiAgICAgICAgaWYgKGRlbHRhID09IDApIHtcclxuICAgICAgICAgICAgaCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNtYXggPT0gcikge1xyXG4gICAgICAgICAgICBoID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjbWF4ID09IGcpIHtcclxuICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkZWx0YSArIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNtYXggPT0gZykge1xyXG4gICAgICAgICAgICBoID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGggPSBNYXRoLnJvdW5kKGggKiA2MCk7XHJcbiAgICAgICAgLy8gTWFrZSBuZWdhdGl2ZSBodWVzIHBvc2l0aXZlIGJlaGluZCAzNjDCsFxyXG4gICAgICAgIGlmIChoIDwgMCkge1xyXG4gICAgICAgICAgICBoICs9IDM2MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGwgPSAoY21heCArIGNtaW4pIC8gMjtcclxuXHJcbiAgICAgICAgcyA9IGRlbHRhID09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xyXG5cclxuICAgICAgICBsID0gKyhsICogMTAwKS50b0ZpeGVkKDEpO1xyXG4gICAgICAgIHMgPSArKHMgKiAxMDApLnRvRml4ZWQoMSk7XHJcblxyXG4gICAgICAgIGxldCBoc2wgPSBgaHNsYDtcclxuICAgICAgICBpZiAoYWxwaGEgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaHNsICs9IGAoJHtofSwgJHtzfSUsICR7bH0lKWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoc2wgKz0gYCgke2h9LCAke3N9JSwgJHtsfSUsICR7YX0pYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhzbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhzbFRvUkdCID0gKGhzbCA9ICdoc2woMCwgMCUsIDAlKScsIGFscGhhID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGxldCByZ2IgPSAncmdiJztcclxuICAgICAgICBsZXQgc3RhcnQgPSBoc2wuaW5kZXhPZignKCcpICsgMTtcclxuICAgICAgICBsZXQgZW5kID0gaHNsLmluZGV4T2YoJyknKTtcclxuICAgICAgICBsZXQgW2gsIHMsIGwsIGFdID0gaHNsLnNsaWNlKHN0YXJ0LCBlbmQpLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgIGlmICghYmFzZS5pc3NldChhKSkge1xyXG4gICAgICAgICAgICBhID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoLmluZGV4T2YoXCJkZWdcIikgPiAtMSlcclxuICAgICAgICAgICAgaCA9IGguc3Vic3RyKDAsIGgubGVuZ3RoIC0gMyk7XHJcbiAgICAgICAgZWxzZSBpZiAoaC5pbmRleE9mKFwicmFkXCIpID4gLTEpXHJcbiAgICAgICAgICAgIGggPSBNYXRoLnJvdW5kKGguc3Vic3RyKDAsIGgubGVuZ3RoIC0gMykgKiAoMTgwIC8gTWF0aC5QSSkpO1xyXG4gICAgICAgIGVsc2UgaWYgKGguaW5kZXhPZihcInR1cm5cIikgPiAtMSlcclxuICAgICAgICAgICAgaCA9IE1hdGgucm91bmQoaC5zdWJzdHIoMCwgaC5sZW5ndGggLSA0KSAqIDM2MCk7XHJcbiAgICAgICAgLy8gS2VlcCBodWUgZnJhY3Rpb24gb2YgMzYwIGlmIGVuZGluZyB1cCBvdmVyXHJcbiAgICAgICAgaWYgKGggPj0gMzYwKVxyXG4gICAgICAgICAgICBoICU9IDM2MDtcclxuXHJcbiAgICAgICAgcyA9IHMucmVwbGFjZSgnJScsICcnKSAvIDEwMDtcclxuICAgICAgICBsID0gbC5yZXBsYWNlKCclJywgJycpIC8gMTAwO1xyXG5cclxuICAgICAgICBsZXQgYyA9ICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSkgKiBzLFxyXG4gICAgICAgICAgICB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggLyA2MCkgJSAyIC0gMSkpLFxyXG4gICAgICAgICAgICBtID0gbCAtIGMgLyAyLFxyXG4gICAgICAgICAgICByID0gMCxcclxuICAgICAgICAgICAgZyA9IDAsXHJcbiAgICAgICAgICAgIGIgPSAwO1xyXG5cclxuICAgICAgICBpZiAoMCA8PSBoICYmIGggPCA2MCkge1xyXG4gICAgICAgICAgICByID0gYzsgZyA9IHg7IGIgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoNjAgPD0gaCAmJiBoIDwgMTIwKSB7XHJcbiAgICAgICAgICAgIHIgPSB4OyBnID0gYzsgYiA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmICgxMjAgPD0gaCAmJiBoIDwgMTgwKSB7XHJcbiAgICAgICAgICAgIHIgPSAwOyBnID0gYzsgYiA9IHg7XHJcbiAgICAgICAgfSBlbHNlIGlmICgxODAgPD0gaCAmJiBoIDwgMjQwKSB7XHJcbiAgICAgICAgICAgIHIgPSAwOyBnID0geDsgYiA9IGM7XHJcbiAgICAgICAgfSBlbHNlIGlmICgyNDAgPD0gaCAmJiBoIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHIgPSB4OyBnID0gMDsgYiA9IGM7XHJcbiAgICAgICAgfSBlbHNlIGlmICgzMDAgPD0gaCAmJiBoIDwgMzYwKSB7XHJcbiAgICAgICAgICAgIHIgPSBjOyBnID0gMDsgYiA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIgPSBNYXRoLnJvdW5kKChyICsgbSkgKiAyNTUpO1xyXG4gICAgICAgIGcgPSBNYXRoLnJvdW5kKChnICsgbSkgKiAyNTUpO1xyXG4gICAgICAgIGIgPSBNYXRoLnJvdW5kKChiICsgbSkgKiAyNTUpO1xyXG5cclxuICAgICAgICBpZiAoYWxwaGEgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmdiICs9IGAoJHtyfSwgJHtnfSwgJHtifSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmdiICs9IGAoJHtyfSwgJHtnfSwgJHtifSwgJHthfSlgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJnYjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhzbFRvSGV4ID0gKGhzbCA9ICcnLCBhbHBoYSA9IHRydWUpID0+IHtcclxuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmhzbFRvUkdCKGhzbCwgYWxwaGEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJnYlRvSGV4KGNvbG9yLCBhbHBoYSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRPcGFjaXR5ID0gKGNvbG9yID0gJ3JnYigwLCAwLCAwKScsIG9wYWNpdHkgPSAwLjUpID0+IHtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuY29sb3JUeXBlKGNvbG9yKTtcclxuICAgICAgICBpZiAodHlwZSA9PSAnaGV4JykgY29sb3IgPSB0aGlzLmhleFRvUkdCKGNvbG9yKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlID09ICdoc2wnIHx8IHR5cGUgPT0gJ2hzbGEnKSBjb2xvciA9IHRoaXMuaHNsVG9SR0IoY29sb3IpO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnQgPSBjb2xvci5pbmRleE9mKCcoJykgKyAxO1xyXG4gICAgICAgIGxldCBlbmQgPSBjb2xvci5pbmRleE9mKCcpJyk7XHJcbiAgICAgICAgbGV0IHBvaW50cyA9IGNvbG9yLnNsaWNlKHN0YXJ0LCBlbmQpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgcG9pbnRzWzNdID0gb3BhY2l0eTtcclxuXHJcbiAgICAgICAgbGV0IGNoYW5nZWRDb2xvciA9IGByZ2JhKCR7cG9pbnRzLmpvaW4oJywnKX0pYDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gJ2hleCcpIGNoYW5nZWRDb2xvciA9IHRoaXMucmdiVG9IZXgoY2hhbmdlZENvbG9yKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlID09ICdoc2wnIHx8IHR5cGUgPT0gJ2hzbGEnKSBjaGFuZ2VkQ29sb3IgPSB0aGlzLnJnYlRvSFNMKGNoYW5nZWRDb2xvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGFuZ2VkQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRPcGFjaXR5ID0gKGNvbG9yID0gJ3JnYigwLCAwLCAwKScpID0+IHtcclxuICAgICAgICBjb2xvciA9IGJhc2UuaW5CZXR3ZWVuKGNvbG9yLCAnKCcsICcpJyk7XHJcbiAgICAgICAgbGV0IFtyLCBnLCBiLCBhXSA9IGNvbG9yLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgcmV0dXJuIGEudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW52ZXJ0Q29sb3IgPSAoY29sb3IgPSAnI2ZmZmZmZicpID0+IHtcclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuY29sb3JUeXBlKGNvbG9yKTtcclxuICAgICAgICBsZXQgaW52ZXJ0O1xyXG4gICAgICAgIGlmICh0eXBlID09ICdoZXgnKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSgnIycsICcnKTtcclxuICAgICAgICAgICAgaW52ZXJ0ID0gJyMnICsgdGhpcy5pbnZlcnRIZXgoY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09ICdyZ2InKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5yZ2JUb0hleChjb2xvcikucmVwbGFjZSgnIycsICcnKTtcclxuICAgICAgICAgICAgaW52ZXJ0ID0gdGhpcy5pbnZlcnRIZXgoY29sb3IpO1xyXG4gICAgICAgICAgICBpbnZlcnQgPSB0aGlzLmhleFRvUkdCKGludmVydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gJ3JnYmEnKSB7XHJcbiAgICAgICAgICAgIGxldCBvcGFjaXR5ID0gdGhpcy5nZXRPcGFjaXR5KGNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3IgPSB0aGlzLnJnYlRvSGV4KGNvbG9yKS5yZXBsYWNlKCcjJywgJycpO1xyXG4gICAgICAgICAgICBpbnZlcnQgPSB0aGlzLmludmVydEhleChjb2xvcik7XHJcbiAgICAgICAgICAgIGludmVydCA9IHRoaXMuaGV4VG9SR0IoaW52ZXJ0KTtcclxuICAgICAgICAgICAgaW52ZXJ0ID0gdGhpcy5hZGRPcGFjaXR5KGludmVydCwgb3BhY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnZlcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnZlcnRIZXggPSAoaGV4ID0gJ2ZmZmZmZicpID0+IHtcclxuICAgICAgICByZXR1cm4gKE51bWJlcihgMHgxJHtoZXh9YCkgXiAweEZGRkZGRikudG9TdHJpbmcoMTYpLnN1YnN0cigxKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZVRvSGV4ID0gKGNvbG9yID0gJ3doaXRlJykgPT4ge1xyXG4gICAgICAgIGxldCBjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICByZXR1cm4gY3R4LmZpbGxTdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hbWVUb1JHQiA9IChjb2xvciA9ICd3aGl0ZScpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZXhUb1JHQih0aGlzLm5hbWVUb0hleChjb2xvcikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yUGlja2VyOyIsImNvbnN0IE1hdGhzTGlicmFyeSA9IHJlcXVpcmUoJy4vTWF0aHNMaWJyYXJ5Jyk7XHJcbmNvbnN0IE9iamVjdHNMaWJyYXJ5ID0gcmVxdWlyZSgnLi9PYmplY3RzTGlicmFyeScpO1xyXG5jb25zdCBBcnJheUxpYnJhcnkgPSByZXF1aXJlKCcuL0FycmF5TGlicmFyeScpO1xyXG5jb25zdCBUcmVlID0gcmVxdWlyZSgnLi8uLi9jbGFzc2VzL1RyZWUnKTtcclxuXHJcbmxldCBtYXRoTGlicmFyeSA9IG5ldyBNYXRoc0xpYnJhcnkoKTtcclxubGV0IG9iamVjdExpYnJhcnkgPSBuZXcgT2JqZWN0c0xpYnJhcnkoKTtcclxubGV0IGFycmF5TGlicmFyeSA9IG5ldyBBcnJheUxpYnJhcnkoKTtcclxuXHJcbmZ1bmN0aW9uIENvbXByZXNzaW9uKCkge1xyXG4gICAgdGhpcy5nZXRGcmVxdWVuY3kgPSAoZGF0YSA9IFtdKSA9PiB7Ly9nZXQgdGhlIG9jY3VycmFuY2Ugb2Ygc3ltYm9scyBpbiBhIGxpc3RcclxuICAgICAgICBjb25zdCBmcmVxdWVuY3kgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBkIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGZyZXF1ZW5jeVtkYXRhW2RdXSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGZyZXF1ZW5jeVtkYXRhW2RdXSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmcmVxdWVuY3lbZGF0YVtkXV0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZyZXF1ZW5jeTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFByb2JhYmlsaXRpZXMgPSAoZGF0YSA9IFtdKSA9PiB7Ly9nZXQgdGhlIHByb2JhYmlsaXRpZXMgb2YgYWxsIHN5bWJvbHMgaW4gYSBsaXN0XHJcbiAgICAgICAgbGV0IHByb2JzID0gdGhpcy5nZXRGcmVxdWVuY3koZGF0YSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gcHJvYnMpIHtcclxuICAgICAgICAgICAgcHJvYnNbaV0gPSBwcm9ic1tpXSAvIGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvYnM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbnRyb3B5ID0gKGRhdGEgPSBbXSkgPT4gey8vdGhpcyBzaG93cyB0aGUgc2hvcnRlc3QgcG9zc2libGUgYXZlcmFnZSBsZW5ndGggb2YgYSBsb3NzbGVzcyBjb21wcmVzc2lvblxyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGxldCBkYXRhVHlwZSA9IGFycmF5TGlicmFyeS5kYXRhVHlwZShkYXRhKTsvL2dldCB0aGUgZGF0YXR5cGUgb2YgdGhlIGxpc3RcclxuICAgICAgICBsZXQgcHJvYmFiaWxpdGllcztcclxuICAgICAgICBpZiAoZGF0YVR5cGUgPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgcHJvYmFiaWxpdGllcyA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09ICdzdHJpbmcnKSB7Ly9nZXQgdGhlIHN5bWJvbHMgcHJvYmFiaWxpdGllc1xyXG4gICAgICAgICAgICBwcm9iYWJpbGl0aWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdldFByb2JhYmlsaXRpZXMoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TdW0gb2YgKC1wIGxvZyBiYXNlIDIgb2YgcClcclxuICAgICAgICBmb3IgKGxldCBwcm9iIG9mIHByb2JhYmlsaXRpZXMpIHtcclxuICAgICAgICAgICAgc3VtICs9ICgtcHJvYiAqIE1hdGgubG9nMihwcm9iKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNVREMgPSAoZGF0YSA9IFtdKSA9PiB7Ly9jaGVjayBpZiBhIGxpc3QgaXMgdW5pcXVlbHkgZGVjb2RhYmxlIGNvZGVcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWUsIG5vUHJlZml4LCBrZWVwUnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBhZGRTdXJmaXggPSAoc3RyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgc3VmZml4IGlzIGluIGxpc3QgYWxyZWFkeSB0aGVuIHN0b3AgcnVubmluZ1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5pbmNsdWRlcyhzdHIpKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBrZWVwUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkYXRhLnB1c2goc3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjaGVja1ByZWZpeCA9IChwb3MpID0+IHsvL2NoZWNrIGZvciBwcmVmaXhcclxuICAgICAgICAgICAgbm9QcmVmaXggPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2tpcCB0aGUgY3VycmVudCBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVtpXSA9PSBkYXRhW3Bvc10pIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2RvdWJsZSBmb3VuZCBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBrZWVwUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVtpXS5pbmRleE9mKGRhdGFbcG9zXSkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYWRkIHN1ZmZpeCBmb3VuZCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZFN1cmZpeChkYXRhW2ldLnJlcGxhY2UoZGF0YVtwb3NdLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vc3RvcCBjaGVja2luZyBmb3IgcHJlZml4XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtlZXBSdW5uaW5nKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKGtlZXBSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tQcmVmaXgoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2VlcFJ1bm5pbmcgPT0gZmFsc2UpIGJyZWFrOy8vc3RvcCBydW5uaW5nXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChub1ByZWZpeCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2lmIG5vIHByZWZpeCBpcyBmb3VuZCBzdG9wIGl0IGlzIFVEQ1xyXG4gICAgICAgICAgICAgICAga2VlcFJ1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZkFsZ29yaXRobSA9IChkYXRhID0gW10pID0+IHtcclxuICAgICAgICBsZXQgZnJlcXVlbmN5ID0gdGhpcy5nZXRGcmVxdWVuY3koZGF0YSk7Ly9nZXQgdGhlIGZyZXF1ZWNpZXMgb2YgdGhlIHN5bWJvbHNcclxuICAgICAgICBsZXQgc29ydGVkID0gb2JqZWN0TGlicmFyeS5zb3J0KGZyZXF1ZW5jeSwgeyB2YWx1ZTogdHJ1ZSB9KTsvL3NvcnQgdGhlIHN5bWJvbHMgYmFzZWQgb24gZnJlcXVlY3kgb2Ygb2NjdXJyYW5jZVxyXG4gICAgICAgIGxldCBjb2RlV29yZCA9ICcnO1xyXG5cclxuICAgICAgICBsZXQgdHJlZSA9IHsgcGF0aDogJycsIHNpemU6IG1hdGhMaWJyYXJ5LnN1bShPYmplY3QudmFsdWVzKHNvcnRlZCkpLCB2YWx1ZTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3J0ZWQpKSB9Oy8vc2V0IGEgY29weSBvZiB0aGUgc29ydGVkIGRhdGEgYXMgYSB0cmVlXHJcbiAgICAgICAgbGV0IHRhYmxlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3J0ZWQpKTsvL3NldCB0aGUgc29ydGVkIGFzIHRhYmxlXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGFibGUpIHtcclxuICAgICAgICAgICAgdGFibGVbaV0gPSB7IGZyZXF1ZW5jeTogdGFibGVbaV0gfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0cnlTd2l0Y2hpbmcgPSAobm9kZSkgPT4gey8vc3dpdGNoIG5vZGVzIGlmIHRoZSBsZWZ0IHNpemUgaXMgYmlnZ2VyIHRoYW4gdGhlIHJpZ2h0IHNpZGVcclxuICAgICAgICAgICAgaWYgKG5vZGVbMF0uc2l6ZSA+IG5vZGVbMV0uc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBub2RlWzBdO1xyXG4gICAgICAgICAgICAgICAgbm9kZVswXSA9IG5vZGVbMV07XHJcbiAgICAgICAgICAgICAgICBub2RlWzFdID0gdGVtcDtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wID0gbm9kZVswXS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgbm9kZVswXS5wYXRoID0gbm9kZVsxXS5wYXRoXHJcbiAgICAgICAgICAgICAgICBub2RlWzFdLnBhdGggPSB0ZW1wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNwbGl0RGF0YSA9IChjb21pbmdOb2RlKSA9PiB7Ly9zcGxpdCBhIHRyZWVcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBbeyBwYXRoOiBjb21pbmdOb2RlLnBhdGggKyAnMCcsIHNpemU6IDAsIHZhbHVlOiBbXSB9LCB7IHBhdGg6IGNvbWluZ05vZGUucGF0aCArICcxJywgc2l6ZTogMCwgdmFsdWU6IFtdIH1dOy8vaW50byB0d28gYWxtb3N0IGVxdWFsIGxlbmd0aFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGNvbWluZ05vZGUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlWzBdLnNpemUgPCBub2RlWzFdLnNpemUpIHsvL3NwbGl0IGludG8gMiBhbG1vc3QgZXF1YWwgbm9kZXNcclxuICAgICAgICAgICAgICAgICAgICBub2RlWzBdLnZhbHVlW2ldID0gY29taW5nTm9kZS52YWx1ZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlWzBdLnNpemUgKz0gY29taW5nTm9kZS52YWx1ZVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbMV0udmFsdWVbaV0gPSBjb21pbmdOb2RlLnZhbHVlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVbMV0uc2l6ZSArPSBjb21pbmdOb2RlLnZhbHVlW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub2RlID0gdHJ5U3dpdGNoaW5nKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhub2RlW2ldLnZhbHVlKS5sZW5ndGggPiAxKSB7Ly9pZiBpdCBoYXMgbW9yZSB0aGFuIDEgc3ltYm9sIGl0J3MgYSBub2RlIHRoZW4gc3BsaXQgaXQgYWdhaW5cclxuICAgICAgICAgICAgICAgICAgICBub2RlW2ldLnZhbHVlID0gc3BsaXREYXRhKG5vZGVbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7Ly9pdCBpcyBhIGxlYWYsIGFkZCBpdCB0byB0aGUgdGFibGUgYW5kIGdldCB0aGUgcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhub2RlW2ldLnZhbHVlKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZVtrZXldLmNvZGUgPSBub2RlW2ldLnBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVba2V5XS5sZW5ndGggPSBub2RlW2ldLnBhdGgubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlW2tleV0ucHJvYmFiaWxpdHkgPSBub2RlW2ldLnNpemUgLyBkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZVtrZXldLmxvZyA9IE1hdGgubG9nMigxIC8gdGFibGVba2V5XS5wcm9iYWJpbGl0eSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cmVlID0gc3BsaXREYXRhKHRyZWUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBkIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgY29kZVdvcmQgKz0gdGFibGVbZF0uY29kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNvZGVXb3JkLCB0YWJsZSwgZGF0YSwgdHJlZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaHVmZm1hbkNvZGluZyA9IChkYXRhID0gW10pID0+IHtcclxuICAgICAgICBsZXQgZnJlcXVlbmN5ID0gdGhpcy5nZXRQcm9iYWJpbGl0aWVzKGRhdGEpOy8vZ2V0IHRoZSBmcmVxdWVjaWVzIG9mIHRoZSBzeW1ib2xzXHJcbiAgICAgICAgbGV0IHNvcnRlZCA9IG9iamVjdExpYnJhcnkuc29ydChmcmVxdWVuY3ksIHsgdmFsdWU6IHRydWUgfSk7Ly9zb3J0IHRoZSBzeW1ib2xzIGJhc2VkIG9uIGZyZXF1ZWN5IG9mIG9jY3VycmFuY2VcclxuXHJcbiAgICAgICAgbGV0IHRyZWUgPSBbXTtcclxuICAgICAgICBsZXQgdGFibGUgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBzb3J0ZWQpIHsvL2luaXQgdGhlIHRhYmxlIGFuZCB0aGUgdHJlZVxyXG4gICAgICAgICAgICB0YWJsZVtpXSA9IHsgcHJvYmFiaWxpdHk6IHNvcnRlZFtpXSwgcGF0aDogJycsIGxlbmd0aDogMCwgcHJvZDogMCB9O1xyXG4gICAgICAgICAgICB0cmVlLnB1c2goeyB2YWx1ZTogc29ydGVkW2ldLCBvcmlnaW5zOiBpIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpZyA9IChjb21pbmcgPSBbXSkgPT4gey8vcnVuIHRoZSBhbGdvcml0aG0gbG9vcCB1bnRpbCBvbmUgbm9kZSBpcyByZW1haW5pbmcgd2l0aCB2YWx1ZSBvZiAnMSdcclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGNvbWluZy5sZW5ndGg7Ly9zaXplIG9mIGxpc3QgXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gW107Ly9pbml0IG5vZGVcclxuICAgICAgICAgICAgaWYgKGxlbmd0aCA+IDEpIHsvLyBsaXN0IGhhcyBtb3JlIHRoYW4gb25lIG5vZGU/XHJcbiAgICAgICAgICAgICAgICBsZXQgZG93biA9IGxlbmd0aCAtIDE7Ly9pbmRleCBvZiBsYXN0IHR3byBpdGVtcyBpbiBsaXN0XHJcbiAgICAgICAgICAgICAgICBsZXQgdXAgPSBsZW5ndGggLSAyO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1bSA9IGNvbWluZ1t1cF0udmFsdWUgKyBjb21pbmdbZG93bl0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29taW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gdXAgfHwgaSA9PSBkb3duKSB7Ly9zdW0gbGFzdCAyIGl0ZW1zIGFuZCBza2lwIGFkZGluZyB0aGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPT0gMikgey8vaWYgbGFzdCAyIHN1bSB0aGVtIGFuZCBleGlzdCBkaWdnaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3TGVhZiA9IHsgdmFsdWU6IHN1bSwgb3JpZ2luczogW2NvbWluZ1t1cF0ub3JpZ2lucywgY29taW5nW2Rvd25dLm9yaWdpbnNdIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnB1c2gobmV3TGVhZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29taW5nW2ldLnZhbHVlIDw9IHN1bSAmJiAhYWRkZWQpIHsvL2FkZCBzdW0gaWYgaXQgaGFzIG5vdCBiZWVuIGFkZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdMZWFmID0geyB2YWx1ZTogc3VtLCBvcmlnaW5zOiBbY29taW5nW3VwXS5vcmlnaW5zLCBjb21pbmdbZG93bl0ub3JpZ2luc10gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wdXNoKG5ld0xlYWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBub2RlLnB1c2goY29taW5nW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBkaWcobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJlZSA9IGRpZyh0cmVlKTtcclxuXHJcbiAgICAgICAgLy9nZXQgdGhlIHBhdGgvY29kZXdvcmQgZm9yZWFjaCBzeW1ib2xcclxuICAgICAgICBsZXQgbmFtZUl0ZW1zID0gKG9yaWdpbnMsIHBhdGgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBvcmlnaW5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcmlnaW5zW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVJdGVtcyhvcmlnaW5zW2ldLCBwYXRoICsgaSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlW29yaWdpbnNbaV1dLnBhdGggPSBwYXRoICsgaTtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZVtvcmlnaW5zW2ldXS5sZW5ndGggPSBwYXRoLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZVtvcmlnaW5zW2ldXS5wcm9kID0gcGF0aC5sZW5ndGggKiB0YWJsZVtvcmlnaW5zW2ldXS5wcm9iYWJpbGl0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZUl0ZW1zKHRyZWVbMF0ub3JpZ2lucywgJycpO1xyXG5cclxuICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgYXZldmFnZSBsZW5ndGggb2YgdGhlIGNvZGVzXHJcbiAgICAgICAgbGV0IGF2Z0xlbmd0aCA9IG1hdGhMaWJyYXJ5LnN1bShvYmplY3RMaWJyYXJ5LnZhbHVlT2ZPYmplY3RBcnJheSh0YWJsZSwgJ3Byb2QnKSk7XHJcblxyXG4gICAgICAgIGZyZXF1ZW5jeSA9IHNvcnRlZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4geyB0YWJsZSwgZGF0YSwgYXZnTGVuZ3RoLCB0cmVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbmNvZGVIdWZmbWFuID0gKGRhdGEsIGRpY3Rpb25hcnkgPSBbXSkgPT4ge1xyXG4gICAgICAgIGxldCBkaWN0aW9uYXJ5TGVuZ3RoID0gZGljdGlvbmFyeS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGNvZGVXb3JkID0gJycsIG55dENvZGUsIGNvZGU7XHJcblxyXG4gICAgICAgIC8vZ2V0IHRoZSBlIGFuZCByIHBhcmFtZXRlcnNcclxuICAgICAgICBsZXQgeyBlLCByIH0gPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGUgPSAwLCByO1xyXG4gICAgICAgICAgICB3aGlsZSAoIW9rKSB7XHJcbiAgICAgICAgICAgICAgICBlKys7XHJcbiAgICAgICAgICAgICAgICByID0gZGljdGlvbmFyeUxlbmd0aCAtIDIgKiogZTtcclxuICAgICAgICAgICAgICAgIG9rID0gciA8IDIgKiogZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geyBlLCByIH07XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpeGVkQ29kZSA9IChzeW1ib2wpID0+IHsvL2dldCB0aGUgZml4ZWQgY29kZVxyXG4gICAgICAgICAgICBsZXQgayA9IGRpY3Rpb25hcnkuaW5kZXhPZihzeW1ib2wpICsgMTtcclxuICAgICAgICAgICAgbGV0IGNvZGU7XHJcbiAgICAgICAgICAgIGlmIChrIDw9IDIgKiByKSB7IC8vIDEgPD0gayA8PSAyclxyXG4gICAgICAgICAgICAgICAgY29kZSA9IChrIC0gMSkudG9TdHJpbmcoMik7XHJcbiAgICAgICAgICAgICAgICBjb2RlID0gQXJyYXkoKGUgKyAxKSAtIGNvZGUubGVuZ3RoKS5maWxsKDApLmpvaW4oJycpICsgY29kZTsgLy8gZSArIDEgcmVwcmVzZW50YXRpb24gb2YgayAtIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChrID4gMiAqIHIpIHsvL2sgPiAyclxyXG4gICAgICAgICAgICAgICAgY29kZSA9IChrIC0gciAtIDEpLnRvU3RyaW5nKDIpO1xyXG4gICAgICAgICAgICAgICAgY29kZSA9IEFycmF5KChlKSAtIGNvZGUubGVuZ3RoKS5maWxsKDApLmpvaW4oJycpICsgY29kZTsvLyBlIHJlcHJlc2VudGF0aW9uIG9mIGsgLSByIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHVwZGF0ZUNvdW50ID0gKHQpID0+IHsvL3NldCB0aGUgY291bnQgb2YgYSBub2RlIGFuZCBzd2l0Y2ggaWYgbGVmdCBpcyBncmVhdGVyIHRoYW4gcmlnaHRcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gdC5nZXRBdHRyaWJ1dGUoJ2NvdW50Jyk7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIHQuc2V0QXR0cmlidXRlcyh7IGNvdW50IH0pO1xyXG4gICAgICAgICAgICBsZXQgcCA9IHQucGFyZW50VHJlZTtcclxuICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5U3dpdGNoaW5nKHApO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ291bnQocCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0cnlTd2l0Y2hpbmcgPSAobm9kZSkgPT4gey8vc3dpdGNoIGlmIGxlZnQgaXMgZ3JlYXRlciB0aGFuIHJpZ2h0XHJcbiAgICAgICAgICAgIGlmIChub2RlLnZhbHVlc1swXS5nZXRBdHRyaWJ1dGUoJ2NvdW50JykgPiBub2RlLnZhbHVlc1sxXS5nZXRBdHRyaWJ1dGUoJ2NvdW50JykpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHRyZWUgPSBuZXcgVHJlZSgpO1xyXG4gICAgICAgIHRyZWUuc2V0QXR0cmlidXRlKCdjb3VudCcsIDApO1xyXG4gICAgICAgIGxldCBOWVQgPSB0cmVlO1xyXG5cclxuICAgICAgICBsZXQgcmVhZFN5bWJvbCA9IChzeW1ib2wpID0+IHtcclxuICAgICAgICAgICAgbGV0IHMgPSB0cmVlLnNlYXJjaCgodiwgaSkgPT4gey8vc2VhcmNoIGFuZCBnZXQgc3ltYm9sIG5vZGUgaWYgYWRkZWQgYWxyZWFkeVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuZ2V0QXR0cmlidXRlKCdpZCcpID09IHN5bWJvbDtcclxuICAgICAgICAgICAgfSwgdHJlZS5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHYgPSBzLnZhbHVlO1xyXG4gICAgICAgICAgICBueXRDb2RlID0gdHJlZS5zZWFyY2goKHYsIGkpID0+IHsvL2dldCB0aGUgbnl0IG5vZGVcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSAnbnl0JztcclxuICAgICAgICAgICAgfSwgdHJlZS5oZWlnaHQpLnBhdGguam9pbignJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHsvL2hhcyBub3QgYmVlbiBhZGRlZFxyXG4gICAgICAgICAgICAgICAgTllULnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTsvL3JlbW92ZSB0aGUgY3VycmVudCBOWVQgdGFnXHJcbiAgICAgICAgICAgICAgICBOWVQucHVzaChbXSwgW10pOy8vYWRkIHRoZSAyIG5vZGVzXHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IE5ZVC52YWx1ZXNbMF07XHJcbiAgICAgICAgICAgICAgICB2ID0gTllULnZhbHVlc1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wLnNldEF0dHJpYnV0ZXMoeyBpZDogJ255dCcsIGNvdW50OiAwIH0pOy8vc2V0IG5ldyBueXRcclxuICAgICAgICAgICAgICAgIHYuc2V0QXR0cmlidXRlcyh7IGlkOiBzeW1ib2wsIGNvdW50OiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgTllUID0gdGVtcDtcclxuICAgICAgICAgICAgICAgIGNvZGUgPSBueXRDb2RlICsgZml4ZWRDb2RlKHN5bWJvbCk7Ly9ueXQgKyBmaXhlZENvZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvZGUgPSBzLnBhdGguam9pbignJyk7Ly9nZXQgcGF0aFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb2RlV29yZCArPSBjb2RlOy8vY29uY2F0IHRoZSBjb2RlXHJcblxyXG4gICAgICAgICAgICB1cGRhdGVDb3VudCh2KTsvL3VwZGF0ZSB0aGUgY291bnQgc3RhcnRpbmcgZnJvbSB0aGlzIG5vZGUgdG8gdGhlIHJvb3RcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHN5bWJvbCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlYWRTeW1ib2woc3ltYm9sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNvZGVXb3JkLCB0cmVlLCBkYXRhIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWNvZGVIdWZmbWFuID0gKGNvZGVXb3JkLCBkaWN0aW9uYXJ5ID0gW10pID0+IHtcclxuICAgICAgICBsZXQgZGljdGlvbmFyeUxlbmd0aCA9IGRpY3Rpb25hcnkubGVuZ3RoO1xyXG4gICAgICAgIGxldCBkYXRhID0gJycsIG55dENvZGUsIGNvZGUsIHBhdGggPSBbXTtcclxuICAgICAgICBsZXQgdHJlZSA9IG5ldyBUcmVlKCk7XHJcbiAgICAgICAgdHJlZS5zZXRBdHRyaWJ1dGVzKHsgY291bnQ6IDAsIGlkOiAnbnl0JyB9KTtcclxuICAgICAgICBsZXQgTllUID0gdHJlZTtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgeyBlLCByIH0gPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgb2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGUgPSAwLCByO1xyXG4gICAgICAgICAgICB3aGlsZSAoIW9rKSB7XHJcbiAgICAgICAgICAgICAgICBlKys7XHJcbiAgICAgICAgICAgICAgICByID0gZGljdGlvbmFyeUxlbmd0aCAtIDIgKiogZTtcclxuICAgICAgICAgICAgICAgIG9rID0gciA8IDIgKiogZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geyBlLCByIH07XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgbGV0IHRyeVN3aXRjaGluZyA9IChub2RlKSA9PiB7Ly9zd2l0Y2ggbm9kZXMgaWYgbGVmdCBzaWRlIGlzIGdyZWF0ZXIgdGhhbiByaWdodCBzaWRlXHJcbiAgICAgICAgICAgIGlmIChub2RlLnZhbHVlc1swXS5nZXRBdHRyaWJ1dGUoJ2NvdW50JykgPiBub2RlLnZhbHVlc1sxXS5nZXRBdHRyaWJ1dGUoJ2NvdW50JykpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHVwZGF0ZUNvdW50ID0gKHQpID0+IHsvL3VwZGF0ZSB0aGUgc2l6ZSBvZiB0aGUgY3VycmVudCBub2RlIGFuZCBpdCdzIG5leHQgcGFyZW50XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHQuZ2V0QXR0cmlidXRlKCdjb3VudCcpO1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB0LnNldEF0dHJpYnV0ZXMoeyBjb3VudCB9KTtcclxuICAgICAgICAgICAgbGV0IHAgPSB0LnBhcmVudFRyZWU7XHJcbiAgICAgICAgICAgIGlmIChwICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRyeVN3aXRjaGluZyhwKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUNvdW50KHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVhZFN5bWJvbCA9IChzeW1ib2wpID0+IHtcclxuICAgICAgICAgICAgbGV0IHMgPSB0cmVlLnNlYXJjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuZ2V0QXR0cmlidXRlKCdpZCcpID09IHN5bWJvbDsvL3NlYXJjaCBhbmQgZ2V0IHN5bWJvbCBpZiBleGlzdHMgYWxyZWFkeVxyXG4gICAgICAgICAgICB9LCB0cmVlLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdiA9IHMudmFsdWU7XHJcbiAgICAgICAgICAgIG55dENvZGUgPSB0cmVlLnNlYXJjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuZ2V0QXR0cmlidXRlKCdpZCcpID09ICdueXQnOy8vZ2V0IHRoZSBOWVQgY29kZVxyXG4gICAgICAgICAgICB9LCB0cmVlLmhlaWdodCkucGF0aC5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkgey8vbmV3IHN5bWJvbD8gYWRkIGl0IHRvIHRoZSB0cmVlIHdpdGggbmV3IE5ZVFxyXG4gICAgICAgICAgICAgICAgTllULnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgICAgICAgICAgIE5ZVC5wdXNoKFtdLCBbXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IE5ZVC52YWx1ZXNbMF07XHJcbiAgICAgICAgICAgICAgICB2ID0gTllULnZhbHVlc1sxXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wLnNldEF0dHJpYnV0ZXMoeyBpZDogJ255dCcsIGNvdW50OiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgdi5zZXRBdHRyaWJ1dGVzKHsgaWQ6IHN5bWJvbCwgY291bnQ6IDAgfSk7XHJcbiAgICAgICAgICAgICAgICBOWVQgPSB0ZW1wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVDb3VudCh2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbnRlcnByZXRlID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvZGU7XHJcbiAgICAgICAgICAgIGlmIChub2RlID09IE5ZVCkgey8vaXMgbm9kZSBOWVRcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZTsgaisrKSB7Ly9yZWFkIG5leHQgNCBjb2Rlc1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGgucHVzaChjb2RlV29yZFsrK2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBwID0gcGFyc2VJbnQocGF0aC5qb2luKCcnKSwgMik7XHJcbiAgICAgICAgICAgICAgICBpZiAocCA8IHIpIHsvL3AgaXMgbW9yZSB0aGFuIHIsIHJlYWQgMSBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKGNvZGVXb3JkWysraV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHAgPSBwYXJzZUludChwYXRoLmpvaW4oJycpLCAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHAgKz0gcjsvL2FkZCByIHRvIHBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvZGUgPSBkaWN0aW9uYXJ5W3BdOy8vZ2V0IHN5bWJvbCBmcm9tIGRpY3Rpb25hcnlcclxuICAgICAgICAgICAgICAgIHJlYWRTeW1ib2woY29kZSk7Ly9hZGQgdGhpcyBzeW1ib2wgdG8gdHJlZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29kZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpOy8vZ2V0IHRoZSBzeW1ib2wgZnJvbSB0aGUgdHJlZVxyXG4gICAgICAgICAgICAgICAgcmVhZFN5bWJvbChjb2RlKTsvL3VwZGF0ZSB0aGUgc3ltYm9sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGkgPSAtMTsgaSA8IGNvZGVXb3JkLmxlbmd0aDsgaSsrKSB7Ly9zdGFydCB3aXRoIGVtcHR5IE5ZVFxyXG4gICAgICAgICAgICBsZXQgY29kZSA9IGNvZGVXb3JkW2ldO1xyXG4gICAgICAgICAgICBpZiAoY29kZSAhPSB1bmRlZmluZWQpIHsvL3doZW4gbm90IGVtcHR5XHJcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goY29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0cmVlLnRyYWNlKHBhdGgpLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT0gdW5kZWZpbmVkKSB7Ly9pcyBub2RlIGxhYmVsbGVkXHJcbiAgICAgICAgICAgICAgICBwYXRoID0gW2l0ZW1dO1xyXG4gICAgICAgICAgICAgICAgZGF0YSArPSBpbnRlcnByZXRlKG5vZGUpOy8vd2hhdCBpcyB0aGlzIG5vZGVcclxuICAgICAgICAgICAgICAgIHBhdGggPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZGF0YSwgdHJlZSwgY29kZVdvcmQgfTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdvbG9tYiA9IChuLCBtKSA9PiB7XHJcbiAgICAgICAgbGV0IHEgPSBNYXRoLmZsb29yKG4gLyBtKTsvL3N0ZXAgMVxyXG4gICAgICAgIGxldCB1bmFyeSA9IEFycmF5KHEpLmZpbGwoMSkuam9pbignJykgKyAnMCc7Ly91bmFyeSBvZiBxXHJcblxyXG4gICAgICAgIGxldCBrID0gTWF0aC5jZWlsKE1hdGgubG9nMihtKSk7XHJcbiAgICAgICAgbGV0IGMgPSAyICoqIGsgLSBtO1xyXG4gICAgICAgIGxldCByID0gbiAlIG07XHJcbiAgICAgICAgbGV0IHJDID0gKCgpID0+IHsvL3JgXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHIgPCBjKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gQXJyYXkoKGsgLSAxKSAtIHZhbHVlLmxlbmd0aCkuZmlsbCgwKS5qb2luKCcnKSArIHZhbHVlOy8vay0xIGJpdHMgcmVwIG9mIHJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gKHIgKyBjKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBBcnJheShrIC0gdmFsdWUubGVuZ3RoKS5maWxsKDApLmpvaW4oJycpICsgdmFsdWU7Ly9rIGJpdHMgcmVwIG9mIHIrY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICBsZXQgY29kZSA9IHVuYXJ5ICsgckM7Ly9jb25jYXQgdW5hcnkgYW5kIHInXHJcbiAgICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbmNvZGVBcml0aG1ldGljID0gKGRhdGEsIHByb2JhYmlsaXRpZXMpID0+IHtcclxuICAgICAgICBsZXQgZ2V0WCA9IChuKSA9PiB7Ly9mKHgobikpPSBzdW0gb2YgeCgxKSAuLi4uIHgobilcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwcm9iYWJpbGl0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiA9PSBpKSBicmVhaztcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gKHZhbHVlIC8gMTAgKyBwcm9iYWJpbGl0aWVzW2ldIC8gMTApICogMTAwIC8gMTA7Ly9oYW5kbGUgdGhlIEpTIGRlY2ltYWwgcHJvYmxlbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGwoMCkgPSAwLCB1KDApID0gMCwgZngoMCkgPSAwXHJcbiAgICAgICAgbGV0IGJvdW5kcyA9IFt7IGw6IDAsIHU6IDEgfV07XHJcblxyXG4gICAgICAgIGxldCBsb3dlck4gPSAobikgPT4gey8vbG93ZXIgbGltaXQgb2YgbiBsKG4pID0gbChuLTEpICsgKHUobi0xKSAtIGwobi0xKSkgKiBmKHgobi0xKSlcclxuICAgICAgICAgICAgbGV0IGJvdW5kID0gYm91bmRzW25dO1xyXG4gICAgICAgICAgICBsZXQgbCA9IGJvdW5kLmwgKyAoKGJvdW5kLnUgLSBib3VuZC5sKSAqIGdldFgoZGF0YVtuXSAtIDEpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXBwZXJOID0gKG4pID0+IHsvL2xvd2VyIGxpbWl0IG9mIG4gdShuKSA9IGwobi0xKSArICh1KG4tMSkgLSBsKG4tMSkpICogZih4KG4pKVxyXG4gICAgICAgICAgICBsZXQgYm91bmQgPSBib3VuZHNbbl07XHJcbiAgICAgICAgICAgIGxldCB1ID0gYm91bmQubCArICgoYm91bmQudSAtIGJvdW5kLmwpICogZ2V0WChkYXRhW25dKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvdW5kcy5wdXNoKHsgbDogbG93ZXJOKGkpLCB1OiB1cHBlck4oaSkgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbiA9IGJvdW5kcy5wb3AoKTtcclxuICAgICAgICByZXR1cm4gKG4ubCArIG4udSkgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVjb2RlQXJpdGhtZXRpYyA9ICh0YWcgPSAwLCBwcm9iYWJpbGl0aWVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSAnJztcclxuICAgICAgICBsZXQgZ2V0WCA9IChuKSA9PiB7Ly9mKHgobikpPSBzdW0gb2YgeCgxKSAuLi4uIHgobilcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBwcm9iYWJpbGl0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiA9PSBpKSBicmVhaztcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gKHZhbHVlIC8gMTAgKyBwcm9iYWJpbGl0aWVzW2ldIC8gMTApICogMTAwIC8gMTA7Ly9oYW5kbGUgdGhlIEpTIGRlY2ltYWwgcHJvYmxlbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGwoMCkgPSAwLCB1KDApID0gMCwgZngoMCkgPSAwXHJcbiAgICAgICAgbGV0IGJvdW5kcyA9IFt7IGw6IDAsIHU6IDEgfV07XHJcblxyXG4gICAgICAgIGxldCBsb3dlck4gPSAobikgPT4gey8vbG93ZXIgbGltaXQgb2YgbiBsKG4pID0gbChuLTEpICsgKHUobi0xKSAtIGwobi0xKSkgKiBmKHgobi0xKSlcclxuICAgICAgICAgICAgbGV0IGJvdW5kID0gYm91bmRzW25dO1xyXG4gICAgICAgICAgICBsZXQgbCA9IGJvdW5kLmwgKyAoKGJvdW5kLnUgLSBib3VuZC5sKSAqIGdldFgoZGF0YVtuXSAtIDEpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXBwZXJOID0gKG4pID0+IHsvL2xvd2VyIGxpbWl0IG9mIG4gdShuKSA9IGwobi0xKSArICh1KG4tMSkgLSBsKG4tMSkpICogZih4KG4pKVxyXG4gICAgICAgICAgICBsZXQgYm91bmQgPSBib3VuZHNbbl07XHJcbiAgICAgICAgICAgIGxldCB1ID0gYm91bmQubCArICgoYm91bmQudSAtIGJvdW5kLmwpICogZ2V0WChkYXRhW25dKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMCwgY29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgd2hpbGUgKCFjb21wbGV0ZSkgey8vcnVuIHVudGlsIGFsbCB0aGUgY29kZXMgYXJlIGZvdW5kXHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlLCB4ID0gMSwgbiA9IHt9O1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKCFmb3VuZCkgey8vIGZvciBlYWNoIG5ldyBjb2RlXHJcbiAgICAgICAgICAgICAgICBsZXQgbCA9IGxvd2VyTihjb3VudCwgeCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdSA9IHVwcGVyTihjb3VudCwgeCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSAobCA+PSB0YWcgJiYgdGFnIDw9IHUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSBicmVhazsvL2lmIGFsbCBpcyBmb3VuZCBzdG9wIHJ1bm5pbmdcclxuXHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IChsIDwgdGFnICYmIHRhZyA8IHUpOy8vY2hlY2sgaWYgaXQgc2FjdGlzZmllcyB0aGUgY29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgbiA9IHsgbCwgdSwgeCB9O1xyXG4gICAgICAgICAgICAgICAgeCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZSkgYnJlYWs7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICBib3VuZHMucHVzaChuKTsvL2FkZCBjb2RlXHJcbiAgICAgICAgICAgIGRhdGEgKz0gbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVuY29kZURpYWdyYW0gPSAoZGF0YSA9ICcnLCBkaWN0aW9uYXJ5ID0ge30pID0+IHsvL2RhaWdyYW0gY29kaW5nXHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IGNvZGVXb3JkID0gJyc7XHJcbiAgICAgICAgbGV0IGVuY29kZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0ID0gZGF0YVtpXTsvL3Rha2UgdHdvIGF0IGEgdGltZVxyXG4gICAgICAgICAgICBsZXQgc2Vjb25kID0gZGF0YVtpICsgMV07XHJcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBmaXJzdCArIHNlY29uZDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb2RlO1xyXG4gICAgICAgICAgICBpZiAoZGljdGlvbmFyeVtzeW1ib2xdICE9IHVuZGVmaW5lZCkgey8vaXMgc3ltYm9sIGluIGRpY3Rpb25hcnlcclxuICAgICAgICAgICAgICAgIGNvZGUgPSBkaWN0aW9uYXJ5W3N5bWJvbF07XHJcbiAgICAgICAgICAgICAgICBpKys7Ly9zZXQgY291bnQgdG8ga25vdyBpdCByZWFkIHR3b1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29kZSA9IGRpY3Rpb25hcnlbZmlyc3RdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvZGVXb3JkICs9IGVuY29kZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvZGVXb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW5jb2RlTFoxID0gKGRhdGEgPSAnJywgcGFyYW1zID0geyB3aW5kb3dTaXplOiAwLCBzZWFyY2hTaXplOiAwLCBsb29rQWhlYWRTaXplOiAwIH0pID0+IHsvL0xaNy8vTFoxLy9TbGlkaW5nIHdpbmRvd1xyXG4gICAgICAgIGlmIChwYXJhbXMud2luZG93U2l6ZSA9PSB1bmRlZmluZWQpIHBhcmFtcy53aW5kb3dTaXplID0gcGFyYW1zLnNlYXJjaFNpemUgKyBwYXJhbXMubG9va0FoZWFkU2l6ZTsvL2luaXQgdGhlIHdpbmRvdywgc2VhcmNoIGFuZCBsb29rYWhlYWQgc2l6ZXNcclxuICAgICAgICBpZiAocGFyYW1zLnNlYXJjaFNpemUgPT0gdW5kZWZpbmVkKSBwYXJhbXMuc2VhcmNoU2l6ZSA9IHBhcmFtcy53aW5kb3dTaXplIC0gcGFyYW1zLmxvb2tBaGVhZFNpemU7XHJcbiAgICAgICAgaWYgKHBhcmFtcy5sb29rQWhlYWRTaXplID09IHVuZGVmaW5lZCkgcGFyYW1zLmxvb2tBaGVhZFNpemUgPSBwYXJhbXMud2luZG93U2l6ZSAtIHBhcmFtcy5zZWFyY2hTaXplO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGkgPSAwLCBsb29rQWhlYWRTdG9wLCBzZWFyY2hTdG9wLCBsb29rQWhlYWRCdWZmZXIsIHNlYXJjaEJ1ZmZlcjsvL2luaXQgdGhlIGJ1ZmZlcnMgYW5kIGxvY2F0aW9uc1xyXG5cclxuICAgICAgICBsZXQgZ2V0VHJpcGxldCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHggPSBsb29rQWhlYWRCdWZmZXJbMF07XHJcbiAgICAgICAgICAgIGxldCBwaWNrZWQgPSB7IG86IDAsIGw6IDAsIGM6IHggfTsvL3NldCB0aGUgdHJpcGxldCA8bywgbCwgYyhuKT5cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hCdWZmZXIuaW5jbHVkZXMoeCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3VuZE1hdGNoZXMgPSBbXTsvL3N0b3JhZ2UgZm9yIHRoZSBtYXRjaGVzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHNlYXJjaEJ1ZmZlcikgey8vZmluZCBhbGwgdGhlIG1hdGNoZXMgaW4gc2VhcmNoIGJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hCdWZmZXJbaV0gPT0gcGlja2VkLmMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleEluRGF0YSA9ICtzZWFyY2hTdG9wICsgK2ksLy90aGlzIGlzIHRoZSBqb2ludCBvZiB0aGUgc2VhcmNoIGFuZCBsb29rQWhlYWQgYnVmZmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhJbkxvb2tBaGVhZCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZyA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYXRjaGluZykgey8va2VlcCBnZXR0aW5nIHRoZSBtYXRjaGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkLnB1c2goZGF0YVtpbmRleEluRGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nID0gbG9va0FoZWFkQnVmZmVyW2luZGV4SW5Mb29rQWhlYWQgKyBjb3VudF0gPT09IGRhdGFbaW5kZXhJbkRhdGEgKyBjb3VudF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRNYXRjaGVzLnB1c2goeyBvOiBzZWFyY2hCdWZmZXIubGVuZ3RoIC0gaSwgbDogbWF0Y2hlZC5sZW5ndGgsIGM6IGxvb2tBaGVhZEJ1ZmZlclttYXRjaGVkLmxlbmd0aF0gfSk7Ly9zYXZlIG1hdGNoZXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGlja2VkID0gZm91bmRNYXRjaGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSBvZiBmb3VuZE1hdGNoZXMpIHsvL2dldCB0aGUgbWF0Y2ggd2l0aCBtb3N0IHNpemUgYW5kIGNsb3Nlc3QgdG8gdGhlIGxvb2tBaGVhZCBidWZmZXJcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGlja2VkLmwgPCB5LmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGlja2VkID0geTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGlja2VkLmwgPT0geS5sICYmIHBpY2tlZC5vID4geS5vKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlZCA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpICs9IHBpY2tlZC5sO1xyXG4gICAgICAgICAgICByZXR1cm4gcGlja2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZWFyY2hTdG9wID0gaSAtIHBhcmFtcy5zZWFyY2hTaXplO1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoU3RvcCA8IDApIHNlYXJjaFN0b3AgPSAwO1xyXG4gICAgICAgICAgICBsb29rQWhlYWRTdG9wID0gaSArIHBhcmFtcy5sb29rQWhlYWRTaXplO1xyXG4gICAgICAgICAgICBzZWFyY2hCdWZmZXIgPSBkYXRhLnNsaWNlKHNlYXJjaFN0b3AsIGkpLnNwbGl0KCcnKTtcclxuICAgICAgICAgICAgbG9va0FoZWFkQnVmZmVyID0gZGF0YS5zbGljZShpLCBsb29rQWhlYWRTdG9wKS5zcGxpdCgnJyk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChnZXRUcmlwbGV0KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWNvZGVMWjEgPSAodHJpcGxldHMgPSBbeyBvOiAwLCBsOiAwLCBjOiAnJyB9XSwgcGFyYW1zID0geyB3aW5kb3dTaXplOiAwLCBzZWFyY2hTaXplOiAwLCBsb29rQWhlYWRTaXplOiAwIH0pID0+IHtcclxuICAgICAgICBsZXQgd29yZCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAocGFyYW1zLndpbmRvd1NpemUgPT0gdW5kZWZpbmVkKSBwYXJhbXMud2luZG93U2l6ZSA9IHBhcmFtcy5zZWFyY2hTaXplICsgcGFyYW1zLmxvb2tBaGVhZFNpemU7Ly9pbml0IHRoZSB3aW5kb3csIHNlYXJjaCBhbmQgbG9va2FoZWFkIHNpemVzXHJcbiAgICAgICAgaWYgKHBhcmFtcy5zZWFyY2hTaXplID09IHVuZGVmaW5lZCkgcGFyYW1zLnNlYXJjaFNpemUgPSBwYXJhbXMud2luZG93U2l6ZSAtIHBhcmFtcy5sb29rQWhlYWRTaXplO1xyXG4gICAgICAgIGlmIChwYXJhbXMubG9va0FoZWFkU2l6ZSA9PSB1bmRlZmluZWQpIHBhcmFtcy5sb29rQWhlYWRTaXplID0gcGFyYW1zLndpbmRvd1NpemUgLSBwYXJhbXMuc2VhcmNoU2l6ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdCBvZiB0cmlwbGV0cykgey8vZGVjb2RlIGVhY2ggdHJpcGxldFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHQubDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB3b3JkICs9ICh3b3JkW3dvcmQubGVuZ3RoIC0gdC5vXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd29yZCArPSAodC5jKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW5jb2RlTFoyID0gKGRhdGEgPSAnJykgPT4gey8vTFo4Ly9MWjJcclxuICAgICAgICBsZXQgZHVwbGV0cyA9IFtdOy8vaW5pdCBkdXBsZXQgbGlzdFxyXG4gICAgICAgIGxldCBlbnRyaWVzID0gW107Ly9pbml0IGRpY3Rpb25hcnlcclxuICAgICAgICBsZXQgaSwgbGFzdEluZGV4O1xyXG5cclxuICAgICAgICBsZXQgZ2V0UmFuZ2UgPSAocmFuZ2UpID0+IHsvL2dldCB0aGUgc3ltYm9scyB3aXRoaW4gdGhlIHJhbmdlXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGxldCByIG9mIHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBkYXRhW3JdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlbmNvZGUgPSAocmFuZ2UpID0+IHtcclxuICAgICAgICAgICAgbGV0IGUgPSBnZXRSYW5nZShyYW5nZSk7Ly9nZXQgdGhlIHZhbHVlIG9mIHRoZSByYW5nZVxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBlbnRyaWVzLmluZGV4T2YoZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZCA9IHsgaTogbGFzdEluZGV4LCBjOiBlW2UubGVuZ3RoIC0gMV0gfTsvL2NyZWF0ZSBkdXBsZXRcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7Ly9jdXJyZW50IGdyb3VwIG9mIHN5bWJvbHMgaXMgaW4gbm90IGluIHRoZSBkaWN0aW9uYXJ5XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5wdXNoKCsraSk7XHJcbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICBkID0gZW5jb2RlKHJhbmdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICBkdXBsZXRzLnB1c2goZW5jb2RlKFtpXSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGR1cGxldHM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWNvZGVMWjIgPSAoZHVwbGV0cyA9IFt7IGk6IDAsIGM6ICcnIH1dKSA9PiB7XHJcbiAgICAgICAgbGV0IGVudHJpZXMgPSBbXTsvL2luaXQgZGljdGlvbmFyeVxyXG4gICAgICAgIGxldCBjO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBkIG9mIGR1cGxldHMpIHsvL2RlY29kZSBlYWNoIGR1cGxldFxyXG4gICAgICAgICAgICBjID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChkLmkgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYyA9IGVudHJpZXNbZC5pIC0gMV07Ly9nZXQgdGhlIGNvZGUgZnJvbSB0aGUgZGljdGlvbmFyeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGMgKz0gZC5jO1xyXG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goYyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZW50cmllcy5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVuY29kZUxaVyA9IChkYXRhID0gJycsIGluaXREaWN0aW9uYXJ5ID0gW10pID0+IHtcclxuICAgICAgICBsZXQgY29kZVdvcmQgPSBbXSwgbGFzdEluZGV4LCBpO1xyXG4gICAgICAgIGxldCBlbnRyaWVzID0gQXJyYXkuZnJvbShpbml0RGljdGlvbmFyeSk7XHJcblxyXG4gICAgICAgIGxldCBnZXRSYW5nZSA9IChyYW5nZSkgPT4gey8vIGdldCB0aGUgdmFsdWVzIHdpdGhpbiB0aGUgcmFuZ2VcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgb2YgcmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlICs9IGRhdGFbcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVuY29kZSA9IChyYW5nZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZSA9IGdldFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gZW50cmllcy5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHsvL2lzIHZhbHVlIG5vdCBpbiBkaWN0aW9uYXJ5P1xyXG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKGUpOy8vYWRkIGl0IGFuZCBzZXQgdGhlIGNvdW50ZXIgdG8gdGhlIGxhc3QgcmVhZCBzeW1ib2xcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGkrKzsvL3NldCB0aGUgY291bnRlciB0byB0aGUgbmV4dCBzeW1ib2wgYW5kIHRyeSBlbmNvZGluZyB0aGUgcmFuZ2VcclxuICAgICAgICAgICAgICAgIHJhbmdlLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBpbmRleCArPSAxOy8vc2V0IHRoZSBsYXN0IHJlYWQgaW5kZXgsIHRoaXMgaXMgdGhlIGNvZGVcclxuICAgICAgICAgICAgICAgIGUgPSBlbmNvZGUocmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBsYXN0SW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsYXN0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICBsZXQgY29kZSA9IGVuY29kZShbaV0pO1xyXG4gICAgICAgICAgICBpZiAoY29kZSAhPSB1bmRlZmluZWQpIHsvL2NvZGUgd2FzIGNyZWF0ZWRcclxuICAgICAgICAgICAgICAgIGNvZGVXb3JkLnB1c2goY29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2RlV29yZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlY29kZUxaVyA9IChzaW5nbGV0b24gPSBbXSwgaW5pdERpY3Rpb25hcnkgPSBbXSkgPT4ge1xyXG4gICAgICAgIGxldCB3b3JkID0gJycsIGNvZGVXb3JkID0gW10sIHN0YXRlLCBjb3VudCA9IDAsIHJlYnVpbGQgPSBmYWxzZSwgYnVpbGRXaXRoID0gJycsIGksIHN0YXJ0ID0gMDtcclxuICAgICAgICBsZXQgZW50cmllcyA9IEFycmF5LmZyb20oaW5pdERpY3Rpb25hcnkpO1xyXG5cclxuICAgICAgICBsZXQgZ2V0Q29kZSA9IChyYW5nZSkgPT4gey8vZ2V0IHRoZSBjb2RlIHdpdGhpbiB0aGUgcmFuZ2VcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgYnVpbGRXaXRoID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgb2YgcmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3b3JkW3JdID09IHVuZGVmaW5lZCkgey8vaXQgaXMgbm90IGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICByZWJ1aWxkID0gdHJ1ZTsvL3NldCB0byByZWJ1aWxkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBidWlsZFdpdGggKz0gd29yZFtyXTsvL3NldCB0byByZWJ1aWxkIHdpdGggaW5jYXNlIG9mIG5vdCBjb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gd29yZFtyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGVjb2RlID0gKHJhbmdlID0gW10pID0+IHtcclxuICAgICAgICAgICAgbGV0IGUgPSBnZXRDb2RlKHJhbmdlKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gZW50cmllcy5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHsvL2lzIG5vdCBpbiBkaWN0aW9uYXJ5P1xyXG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgaS0tOy8vc2V0IHRoZSBjb3VudGVyIHRvIHRoZSBsYXN0IHN5bWJvbCByZWFkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgZGVjb2RlKHJhbmdlKTsvL2FkZCBuZXh0IHN5bWJvbCBhbmQgZGVjb2RlIGFnYWluXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnVpbGQgPSAoc3RhdGUpID0+IHsvL2J1aWxkIHVwIHRoZSBkaWN0aW9uYXJ5IGZyb20gdGhlIGRlY29kZWQgdmFsdWVzXHJcbiAgICAgICAgICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGUgPSBkZWNvZGUoW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PSBzdGF0ZSkgey8vc3RvcCBhdCB0aGUgY3VycmVudCBkZWNvZGluZyBwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gaSArIDEgLSBjb3VudDsvL3NldCBuZXh0IHN0YXJ0aW5nIHBvaW50IGF0IHRoZSBjdXJyZW50IHN0b3BcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcyBvZiBzaW5nbGV0b24pIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBlbnRyaWVzW3MgLSAxXTtcclxuICAgICAgICAgICAgaWYgKGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZChzKTsvL2J1aWxkIHRoZSBkaWN0aW9uYXJ5XHJcbiAgICAgICAgICAgICAgICBlID0gZW50cmllc1tzIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvZGVXb3JkLnB1c2goZSk7XHJcbiAgICAgICAgICAgIHdvcmQgPSBjb2RlV29yZC5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZWJ1aWxkKSB7Ly9yZWJ1aWxkIHRoZSBsYXN0IGVudHJ5IGluIHRoZSBkaWN0aW9uYXJ5IFxyXG4gICAgICAgICAgICAgICAgcmVidWlsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7Ly9rZWVwIGFkZCBpdGVtcyB0byB0aGUgYnVpbGR3aXRoIHRvIHRoZSBidWlsZHdpdGggdW50aWwgaXQgaXMgY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBidWlsZFdpdGggKz0gYnVpbGRXaXRoW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29kZVdvcmQucG9wKCk7Ly9zZXQgbGFzdCBidWlsdCBhbmQgbGFzdCBkZWNvZGVkIHRvIHRoZSBuZXcgYnVpbGRcclxuICAgICAgICAgICAgICAgIGNvZGVXb3JkLnB1c2goYnVpbGRXaXRoKTtcclxuICAgICAgICAgICAgICAgIGVudHJpZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goYnVpbGRXaXRoKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ICs9IGNvdW50Oy8vc2V0IHRoZSBuZXh0IGJ1aWxkIHN0YXJ0aW5nIHBvaW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbXByZXNzaW9uO1xyXG4iLCJjb25zdCBPYmplY3RzTGlicmFyeSA9IHJlcXVpcmUoJy4vT2JqZWN0c0xpYnJhcnknKTtcclxubGV0IG9iamVjdExpYnJhcnkgPSBuZXcgT2JqZWN0c0xpYnJhcnkoKTtcclxuXHJcbmZ1bmN0aW9uIEluZGV4ZWRMaWJyYXJ5KG5hbWUsIHZlcnNpb24pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbmRleGVkREIgPSB3aW5kb3cuaW5kZXhlZERCIHx8IHdpbmRvdy5tb3pJbmRleGVkREIgfHwgd2luZG93LndlYmtpdEluZGV4ZWREQiB8fCB3aW5kb3cubXNJbmRleGVkREI7XHJcbiAgICB0aGlzLklEQlRyYW5zYWN0aW9uID0gd2luZG93LklEQlRyYW5zYWN0aW9uIHx8IHdpbmRvdy53ZWJraXRJREJUcmFuc2FjdGlvbiB8fCB3aW5kb3cubXNJREJUcmFuc2FjdGlvbjtcclxuICAgIHRoaXMuSURCS2V5UmFuZ2UgPSB3aW5kb3cuSURCS2V5UmFuZ2UgfHwgd2luZG93LndlYmtpdElEQktleVJhbmdlIHx8IHdpbmRvdy5tc0lEQktleVJhbmdlO1xyXG5cclxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykgey8vaW5pdGlhbGl6ZSBkYiBieSBzZXR0aW5nIHRoZSBjdXJyZW50IHZlcnNpb25cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5pbmRleGVkREIub3Blbih0aGlzLm5hbWUpO1xyXG4gICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgKGNhbGxiYWNrKGV2ZW50LnRhcmdldC5yZXN1bHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gTWF0aC5mbG9vcihyZXF1ZXN0LnJlc3VsdC52ZXJzaW9uKSB8fCBNYXRoLmZsb29yKHRoaXMudmVyc2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5pbmRleGVkREIub3Blbih0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyc2lvbiA9PSB1bmRlZmluZWQgfHwgdGhpcy52ZXJzaW9uIDwgcmVxdWVzdC5yZXN1bHQudmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IHJlcXVlc3QucmVzdWx0LnZlcnNpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3VsdC5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wZW4gPSBhc3luYyBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodGhpcy52ZXJzaW9uID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdldFZlcnNpb24oKTsvL3NldCB0aGUgdmVyc2lvbiBpZiBub3Qgc2V0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmluZGV4ZWREQi5vcGVuKHRoaXMubmFtZSwgdGhpcy52ZXJzaW9uKTsvL29wZW4gZGJcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IHJlcXVlc3QucmVzdWx0LnZlcnNpb247Ly91cGRhdGUgdmVyc2lvbiBhZnRlciB1cGdyYWRlXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7Ly9ydW4gdGhlIGNhbGxiYWNrIGlmIHNldFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3b3JrZWREYiA9IGNhbGxiYWNrKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlZERiLm9uZXJyb3IgPSB3b3JrZWRFdmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh3b3JrZWRFdmVudC50YXJnZXQuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbGxlY3Rpb25FeGlzdHMgPSBmdW5jdGlvbiAoY29sbGVjdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oKS50aGVuKGRiID0+IHtcclxuICAgICAgICAgICAgbGV0IGV4aXN0cyA9IGRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29sbGVjdGlvbik7Ly9jaGVjayBpZiBkYiBoYXMgdGhpcyBjb2xsZWN0aW9uIGluIG9iamVjdHN0b3JlXHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdHM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jcmVhdGVDb2xsZWN0aW9uID0gYXN5bmMgZnVuY3Rpb24gKC4uLmNvbGxlY3Rpb25zKSB7XHJcbiAgICAgICAgbGV0IHZlcnNpb24gPSBhd2FpdCB0aGlzLmdldFZlcnNpb24oKTsvL3VwZ3JhZGUgY29sbGVjdGlvblxyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb24gKyAxO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW4oZGIgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xsZWN0aW9uIG9mIGNvbGxlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29sbGVjdGlvbikpIHsvL2NyZWF0ZSBuZXcgY29sbGVjdGlvbiBhbmQgc2V0IF9pZCBhcyB0aGUga2V5cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKGNvbGxlY3Rpb24sIHsga2V5UGF0aDogJ19pZCcgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmluZCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oKS50aGVuKGRiID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkb2N1bWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhwYXJhbXMuY29sbGVjdGlvbikpIHsvL2NvbGxlY3Rpb24gZXhpc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24ocGFyYW1zLmNvbGxlY3Rpb24sICdyZWFkb25seScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubWFueSA9PSB0cnVlKSB7Ly9tYW55IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jdW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRvY3VtZW50c1swXSk7Ly9zaW5nbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUocGFyYW1zLmNvbGxlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gc3RvcmUub3BlbkN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMucXVlcnkgPT0gdW5kZWZpbmVkKSB7Ly9maW5kIGFueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50cy5wdXNoKGN1cnNvci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvYmplY3RMaWJyYXJ5LmlzU3ViT2JqZWN0KGN1cnNvci52YWx1ZSwgcGFyYW1zLnF1ZXJ5KSkgey8vZmluZCBzcGVjaWZpY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50cy5wdXNoKGN1cnNvci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLm1hbnkgPT0gdHJ1ZSkgey8vbWFueSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkb2N1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkb2N1bWVudHNbMF0pOy8vc2luZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbXB0eUNvbGxlY3Rpb24gPSBmdW5jdGlvbiAoY29sbGVjdGlvbikge1xyXG4gICAgICAgIGxldCByZW1vdmVkQ291bnQgPSAwLCBmb3VuZENvdW50ID0gMDsvL3NldCB0aGUgY291bnRlcnNcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmQoeyBjb2xsZWN0aW9uLCBxdWVyeToge30sIG1hbnk6IHRydWUgfSkudGhlbihmb3VuZCA9PiB7Ly9maW5kIGFsbCBkb2N1bWVudHNcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbigpLnRoZW4oZGIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGNvbGxlY3Rpb24pKSB7Ly9oYW5kbGUgY29sbGVjdGlvbiBub24tZXhpc3RlbmNlIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGNvbGxlY3Rpb24sICdyZWFkd3JpdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoY29sbGVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChldmVudC50YXJnZXQuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBhY3Rpb246ICdlbXB0eWNvbGxlY3Rpb24nLCByZW1vdmVkQ291bnQsIG9rOiByZW1vdmVkQ291bnQgPT0gZm91bmRDb3VudCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZENvdW50ID0gZm91bmQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHN0b3JlLmRlbGV0ZShkYXRhLl9pZCk7Ly9kZWxldGUgZWFjaCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB3aGlsZSBkZWxldGluZyBkb2N1bWVudHMgPT4gJHtldmVudC50YXJnZXQuZXJyb3J9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyByZW1vdmVkQ291bnQsIG9rOiByZW1vdmVkQ291bnQgPT0gZm91bmRDb3VudCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZG9jdW1lbnRFeGlzdHMgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgZGVsZXRlIHBhcmFtcy5tYW55Oy8vY2hlY2sgZm9yIG9ubHkgb25lXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZChwYXJhbXMpLnRoZW4ocmVzID0+IHsvL1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzICE9IHVuZGVmaW5lZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdlbmVyYXRlSWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpOy8vZ2VuZXJhdGUgdGhlIGlkIHVzaW5nIHRpbWVcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVja0lkID0gZnVuY3Rpb24gKHJlcXVlc3QsIF9pZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIF9pZCAhPSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBfaWQgPSB0aGlzLmdlbmVyYXRlSWQoKTsvL2dldCBuZXcgX2lkIGlmIG5vdCBzZXRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGdldCA9IHJlcXVlc3QuZ2V0KF9pZCk7Ly9jaGVjayBpZiBleGlzdGluZ1xyXG4gICAgICAgIGdldC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQucmVzdWx0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0lkKHJlcXVlc3QsIF9pZCwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soX2lkKTsvL3VzZSB0aGUgX2lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldC5vbmVycm9yID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgY2hlY2tpbmcgSUQgPT4gJHtldmVudC50YXJnZXQuZXJyb3J9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24gKHBhcmFtcywgZGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihwYXJhbXMuY29sbGVjdGlvbiwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvcilcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgYWN0aW9uOiAnaW5zZXJ0JywgZG9jdW1lbnRzOiBwYXJhbXMucXVlcnkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUocGFyYW1zLmNvbGxlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcmFtcy5tYW55ID09IHRydWUgJiYgQXJyYXkuaXNBcnJheShwYXJhbXMucXVlcnkpKSB7Ly8gZm9yIG1hbnlcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHF1ZXJ5IG9mIHBhcmFtcy5xdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJZChyZXF1ZXN0LCBxdWVyeS5faWQsIF9pZCA9PiB7Ly92YWxpZGF0ZSBfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuX2lkID0gX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmFkZChxdWVyeSk7Ly9hZGRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJZChyZXF1ZXN0LCBwYXJhbXMucXVlcnkuX2lkLCBfaWQgPT4gey8vdmFsaWRhdGUgX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnF1ZXJ5Ll9pZCA9IF9pZDtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmFkZChwYXJhbXMucXVlcnkpOy8vYWRkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5zZXJ0ID0gYXN5bmMgZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgIGxldCBpc0NvbGxlY3Rpb24gPSBhd2FpdCB0aGlzLmNvbGxlY3Rpb25FeGlzdHMocGFyYW1zLmNvbGxlY3Rpb24pO1xyXG4gICAgICAgIGlmIChpc0NvbGxlY3Rpb24pIHsvL2NvbGxlY3Rpb24gaXMgZXhpc3RpbmdcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbigpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKHBhcmFtcywgZGIpOy8vYWRkIHRvIGNvbGxlY3Rpb25cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29sbGVjdGlvbihwYXJhbXMuY29sbGVjdGlvbikvL2NyZWF0ZSBjb2xsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKHBhcmFtcywgZGIpOy8vYWRkIHRvIG5ldyBDb2xsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCkudGhlbihkYiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMocGFyYW1zLmNvbGxlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ0NvbGxlY3Rpb24gbm90IGZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24ocGFyYW1zLmNvbGxlY3Rpb24sICdyZWFkd3JpdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBhY3Rpb246ICd1cGRhdGUnLCBkb2N1bWVudHMgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUocGFyYW1zLmNvbGxlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBzdG9yZS5vcGVuQ3Vyc29yKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9jdW1lbnRzID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdExpYnJhcnkuaXNTdWJPYmplY3QoY3Vyc29yLnZhbHVlLCBwYXJhbXMuY2hlY2spKSB7Ly9yZXRyaWV2ZSB0aGUgbWF0Y2hlZCBkb2N1bWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcGFyYW1zLnF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnZhbHVlW2ldID0gcGFyYW1zLnF1ZXJ5W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IGN1cnNvci51cGRhdGUoY3Vyc29yLnZhbHVlKTsvL3VwZGF0ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMub25lcnJvciA9IChyRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRzW3JFdmVudC50YXJnZXQucmVzdWx0XSA9IHsgdmFsdWU6IGN1cnNvci52YWx1ZSwgc3RhdHVzOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLm9uc3VjY2VzcyA9IChyRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRzW3JFdmVudC50YXJnZXQucmVzdWx0XSA9IHsgdmFsdWU6IGN1cnNvci52YWx1ZSwgc3RhdHVzOiB0cnVlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMubWFueSA9PSB0cnVlIHx8IGZvdW5kID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbiAocGFyYW1zID0geyBjb2xsZWN0aW9uOiAnJywgcXVlcnk6IHt9LCBjaGVjazoge30gfSkge1xyXG4gICAgICAgIC8vY2hlY2sgZXhpc3RlbmNlIG9mIGRvY3VtZW50XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRFeGlzdHMoeyBjb2xsZWN0aW9uOiBwYXJhbXMuY29sbGVjdGlvbiwgcXVlcnk6IHBhcmFtcy5jaGVjayB9KS50aGVuKGV4aXN0cyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChleGlzdHMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluc2VydChwYXJhbXMpOy8vaW5zZXJ0IGlmIG5vdCBmb3VuZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHBhcmFtcyk7Ly8gdXBkYXRlIGlmIGZvdW5kXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlbGV0ZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICBsZXQgZm91bmRDb3VudCA9IDAsIHJlbW92ZWRDb3VudCA9IDA7Ly9zZXQgdGhlIGNvdW50ZXJzXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maW5kKHBhcmFtcykudGhlbihmb3VuZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oKS50aGVuKGRiID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihwYXJhbXMuY29sbGVjdGlvbiwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHBhcmFtcy5jb2xsZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25lcnJvciA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGV2ZW50LnRhcmdldC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgYWN0aW9uOiAnZGVsZXRlJywgcmVtb3ZlZENvdW50LCBvazogcmVtb3ZlZENvdW50ID09IGZvdW5kQ291bnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmb3VuZCkpIHsvL2lmIG1hbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRDb3VudCA9IGZvdW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiBmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBzdG9yZS5kZWxldGUoZGF0YS5faWQpOy8vZGVsZXRlIGVhY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3Igd2hpbGUgZGVsZXRpbmcgZG9jdW1lbnRzID0+ICR7ZXZlbnQudGFyZ2V0LmVycm9yfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHN0b3JlLmRlbGV0ZShmb3VuZC5faWQpOy8vZGVsZXRlIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB3aGlsZSBkZWxldGluZyBkb2N1bWVudHMgPT4gJHtldmVudC50YXJnZXQuZXJyb3J9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJbmRleGVkTGlicmFyeTtcclxuIiwiY29uc3QgQXJyYXlMaWJyYXJ5ID0gcmVxdWlyZSgnLi9BcnJheUxpYnJhcnknKTtcclxubGV0IGFycmF5TGlicmFyeSA9IG5ldyBBcnJheUxpYnJhcnkoKTtcclxuXHJcbmZ1bmN0aW9uIE1hdGhzTGlicmFyeSgpIHtcclxuXHJcbiAgICB0aGlzLnBsYWNlVW5pdCA9IChudW0sIHZhbHVlLCBjb3VudCkgPT4ge1xyXG4gICAgICAgIG51bSA9IE1hdGguZmxvb3IobnVtKS50b1N0cmluZygpO1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwgbnVtWzBdO1xyXG4gICAgICAgIGNvdW50ID0gY291bnQgfHwgMDtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IC0xO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChudW1baV0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAocG9zICE9IC0xKSBwb3MgPSAxMCAqKiAobnVtLmxlbmd0aCAtIHBvcyAtIDEpO1xyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yb3VuZCA9IChwYXJhbXMpID0+IHtcclxuICAgICAgICBwYXJhbXMuZGlyID0gcGFyYW1zLmRpciB8fCAncm91bmQnO1xyXG4gICAgICAgIHBhcmFtcy50byA9IHBhcmFtcy50byB8fCAxO1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSBNYXRoW3BhcmFtcy5kaXJdKHBhcmFtcy5udW0gLyBwYXJhbXMudG8pICogcGFyYW1zLnRvO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhcmlhbmNlID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgbWVhbiA9IHRoaXMubWVhbihkYXRhKTtcclxuICAgICAgICBsZXQgdmFyaWFuY2UgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXJpYW5jZSArPSAoZGF0YVtpXSAtIG1lYW4pICoqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YXJpYW5jZSAvIGRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhbmRhcmREZXZpYXRpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCB2YXJpYW5jZSA9IHRoaXMudmFyaWFuY2UoZGF0YSk7XHJcbiAgICAgICAgbGV0IHN0ZCA9IE1hdGguc3FydCh2YXJpYW5jZSk7XHJcbiAgICAgICAgcmV0dXJuIHN0ZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJhbmdlID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oLi4uZGF0YSk7XHJcbiAgICAgICAgbGV0IG1heCA9IE1hdGgubWF4KC4uLmRhdGEpO1xyXG5cclxuICAgICAgICBsZXQgcmFuZ2UgPSBtYXggLSBtaW47XHJcbiAgICAgICAgcmV0dXJuIHJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVhbiA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IHN1bSA9IHRoaXMuc3VtKGRhdGEpO1xyXG5cclxuICAgICAgICBsZXQgbWVhbiA9IHN1bSAvIGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBtZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVkaWFuID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IG1lZGlhbjtcclxuICAgICAgICBpZiAobGVuZ3RoICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgIG1lZGlhbiA9IChkYXRhWyhsZW5ndGggLyAyKSAtIDFdICsgZGF0YVtsZW5ndGggLyAyXSkgLyAyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lZGlhbiA9IGRhdGFbTWF0aC5mbG9vcihsZW5ndGggLyAyKV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVkaWFuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW9kZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlY29yZCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocmVjb3JkW2RhdGFbaV1dICE9IHVuZGVmaW5lZCkgcmVjb3JkW2RhdGFbaV1dKys7XHJcbiAgICAgICAgICAgIGVsc2UgcmVjb3JkW2RhdGFbaV1dID0gaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtYXggPSBNYXRoLm1heCguLi5PYmplY3QudmFsdWUocmVjb3JkKSk7XHJcbiAgICAgICAgbGV0IG1vZGU7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiByZWNvcmQpIHtcclxuICAgICAgICAgICAgaWYgKHJlY29yZFtpXSA9PSBtYXgpIHtcclxuICAgICAgICAgICAgICAgIG1vZGUgPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubm9ybWFsaXplRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhIC0gYiB9KTtcclxuICAgICAgICB2YXIgbWF4ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHZhciBtaW4gPSBkYXRhWzBdO1xyXG4gICAgICAgIHZhciBub3JtYWxpemVkID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQucHVzaCgoZGF0YVtpXSAtIG1pbikgLyAobWF4IC0gbWluKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub3JtYWxpemVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWluaW11aW1Td2FwcyA9IChhcnIsIG9yZGVyKSA9PiB7XHJcbiAgICAgICAgdmFyIHN3YXAgPSAwO1xyXG4gICAgICAgIHZhciBjaGVja2VkID0gW107XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHZhciBmaW5hbCA9IFsuLi5hcnJdLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGEgLSBiIH0pO1xyXG4gICAgICAgIGlmIChvcmRlciA9PSAtMSkgZmluYWwgPSBmaW5hbC5yZXZlcnNlKCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gYXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoaSA9PSBlbGVtZW50IHx8IGNoZWNrZWRbaV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJyWzBdID09IDApIGVsZW1lbnQgPSBpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKCFjaGVja2VkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkW2ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGkgPSBmaW5hbC5pbmRleE9mKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGFycltpXTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnRlciAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzd2FwICs9IGNvdW50ZXIgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzd2FwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJpbWVGYWN0b3JpemUgPSAobnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBudW1iZXIgIT0gXCJudW1iZXJcIikgcmV0dXJuIFtdO1xyXG4gICAgICAgIG51bWJlciA9IE1hdGguYWJzKHBhcnNlSW50KG51bWJlcikpO1xyXG4gICAgICAgIGlmIChudW1iZXIgPT0gMSB8fCBudW1iZXIgPT0gMCkgcmV0dXJuIFtdLy8xIGFuZCAwIGhhcyBubyBwcmltZXNcclxuICAgICAgICB2YXIgZGl2aWRlciA9IDI7XHJcbiAgICAgICAgdmFyIGRpdmlkZW5kO1xyXG4gICAgICAgIHZhciBmYWN0b3JzID0gW107XHJcbiAgICAgICAgd2hpbGUgKG51bWJlciAhPSAxKSB7XHJcbiAgICAgICAgICAgIGRpdmlkZW5kID0gbnVtYmVyIC8gZGl2aWRlcjtcclxuICAgICAgICAgICAgaWYgKGRpdmlkZW5kLnRvU3RyaW5nKCkuaW5kZXhPZignLicpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBkaXZpZGVyKytcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG51bWJlciA9IGRpdmlkZW5kO1xyXG4gICAgICAgICAgICBmYWN0b3JzLnB1c2goZGl2aWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWN0b3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGNmID0gKG51bWJlcnMpID0+IHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobnVtYmVycykpIHJldHVybiBbXTtcclxuICAgICAgICB2YXIgZmFjdG9ycyA9IFtdO1xyXG4gICAgICAgIHZhciBjb21tb25GYWN0b3JzID0gW107XHJcbiAgICAgICAgdmFyIHZhbHVlID0gMTtcclxuICAgICAgICBmb3IgKHZhciBudW1iZXIgb2YgbnVtYmVycykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG51bWJlciAhPSBcIm51bWJlclwiKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgIGZhY3RvcnMucHVzaCh0aGlzLnByaW1lRmFjdG9yaXplKG51bWJlcikpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluOlxyXG4gICAgICAgIGZvciAodmFyIGZhY3RvciBvZiBmYWN0b3JzWzBdKSB7XHJcbiAgICAgICAgICAgIGlmIChjb21tb25GYWN0b3JzLmluZGV4T2YoZmFjdG9yKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBmYWN0b3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkuaW5kZXhPZihmYWN0b3IpID09IC0xKSBjb250aW51ZSBtYWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29tbW9uRmFjdG9ycy5wdXNoKGZhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSAqPSBmYWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RyaXBJbnRlZ2VyID0gKG51bWJlcikgPT4ge1xyXG4gICAgICAgIG51bWJlciA9IG51bWJlci50b1N0cmluZygpO1xyXG4gICAgICAgIG51bWJlciA9IChudW1iZXIuaW5kZXhPZignLicpID09IC0xKSA/IG51bWJlciA6IG51bWJlci5zbGljZSgwLCBudW1iZXIuaW5kZXhPZignLicpKTtcclxuICAgICAgICByZXR1cm4gbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RyaXBGcmFjdGlvbiA9IChudW1iZXIpID0+IHtcclxuICAgICAgICBudW1iZXIgPSBudW1iZXIudG9TdHJpbmcoKTtcclxuICAgICAgICBudW1iZXIgPSAobnVtYmVyLmluZGV4T2YoJy4nKSA9PSAtMSkgPyAnMCcgOiBudW1iZXIuc2xpY2UobnVtYmVyLmluZGV4T2YoJy4nKSArIDEpO1xyXG4gICAgICAgIHJldHVybiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VCYXNlID0gKG51bWJlciwgZnJvbSwgdG8pID0+IHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChudW1iZXIsIGZyb20pLnRvU3RyaW5nKHRvKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1heCA9IChhcnJheSkgPT4ge1xyXG4gICAgICAgIHZhciBtYXggPSBhcnJheVswXTtcclxuICAgICAgICBhcnJheUxpYnJhcnkuZWFjaChhcnJheSwgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWF4IDwgdmFsdWUpIG1heCA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5taW4gPSAoYXJyYXkpID0+IHtcclxuICAgICAgICB2YXIgbWF4ID0gYXJyYXlbMF07XHJcbiAgICAgICAgYXJyYXlMaWJyYXJ5LmVhY2goYXJyYXksIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKG1heCA+IHZhbHVlKSBtYXggPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3VtID0gKGFycmF5KSA9PiB7XHJcbiAgICAgICAgLy9mb3IgZmluZGluZyB0aGUgc3VtIG9mIG9uZSBsYXllciBhcnJheVxyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKE1hdGguZmxvb3IoYXJyYXlbaV0pKSkge1xyXG4gICAgICAgICAgICAgICAgc3VtID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdW0gKz0gYXJyYXlbaV0gLyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1bTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2R1Y3QgPSAoYXJyYXkpID0+IHtcclxuICAgICAgICAvL2ZvciBmaW5kaW5nIHRoZSBzdW0gb2Ygb25lIGxheWVyIGFycmF5XHJcbiAgICAgICAgbGV0IHByb2R1Y3QgPSAxO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKE1hdGguZmxvb3IoYXJyYXlbaV0pKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvZHVjdCAqPSBhcnJheVtpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkID0gKC4uLmFycmF5cykgPT4ge1xyXG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xyXG4gICAgICAgIGFycmF5c1swXS5mb3JFYWNoKCh2YWx1ZSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgYXJyYXlzLmZvckVhY2goKGFycmF5LCBsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IEFycmF5LmlzQXJyYXkoYXJyYXkpID8gYXJyYXlbcG9zaXRpb25dIDogYXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gaXNOYU4oZWxlbWVudCkgPT0gdHJ1ZSA/IDAgOiBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdWIgPSAoLi4uYXJyYXlzKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XHJcbiAgICAgICAgYXJyYXlzWzBdLmZvckVhY2goKHZhbHVlLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBhcnJheXMuZm9yRWFjaCgoYXJyYXksIGxvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gQXJyYXkuaXNBcnJheShhcnJheSkgPyBhcnJheVtwb3NpdGlvbl0gOiBhcnJheTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSBpc05hTihlbGVtZW50KSA9PSB0cnVlID8gMCA6IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2godmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm11bCA9ICguLi5hcnJheXMpID0+IHtcclxuICAgICAgICBsZXQgbmV3QXJyYXkgPSBbXTtcclxuICAgICAgICBhcnJheXNbMF0uZm9yRWFjaCgodmFsdWUsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGFycmF5cy5mb3JFYWNoKChhcnJheSwgbG9jYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBBcnJheS5pc0FycmF5KGFycmF5KSA/IGFycmF5W3Bvc2l0aW9uXSA6IGFycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICo9IGlzTmFOKGVsZW1lbnQpID09IHRydWUgPyAwIDogZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbmV3QXJyYXkucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGl2aWRlID0gKC4uLmFycmF5cykgPT4ge1xyXG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xyXG4gICAgICAgIGFycmF5c1swXS5mb3JFYWNoKCh2YWx1ZSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgYXJyYXlzLmZvckVhY2goKGFycmF5LCBsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IEFycmF5LmlzQXJyYXkoYXJyYXkpID8gYXJyYXlbcG9zaXRpb25dIDogYXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLz0gaXNOYU4oZWxlbWVudCkgPT0gdHJ1ZSA/IDAgOiBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hYnMgPSAoYXJyYXkpID0+IHtcclxuICAgICAgICByZXR1cm4gYXJyYXlMaWJyYXJ5LmVhY2goYXJyYXksIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdmFsdWUgPSBpc05hTih2YWx1ZSkgPT0gdHJ1ZSA/IDAgOiB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYXRoc0xpYnJhcnk7IiwiY29uc3QgQXJyYXlMaWJyYXJ5ID0gcmVxdWlyZSgnLi9BcnJheUxpYnJhcnknKTtcclxubGV0IGFycmF5TGlicmFyeSA9IG5ldyBBcnJheUxpYnJhcnkoKTtcclxuXHJcbmZ1bmN0aW9uIE9iamVjdHNMaWJyYXJ5KCkge1xyXG5cclxuICAgIHRoaXMuZXh0cmFjdEZyb21Kc29uQXJyYXkgPSAobWV0YSwgc291cmNlKSA9PiB7Ly9leHRyYWN0IGEgYmx1ZXByaW50IG9mIGRhdGEgZnJvbSBhIEpzb25BcnJheVxyXG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMobWV0YSk7Ly9nZXQgdGhlIGtleXNcclxuICAgICAgICBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhtZXRhKTsvL2dldCB0aGUgdmFsdWVzXHJcblxyXG4gICAgICAgIGxldCBlU291cmNlID0gW107XHJcbiAgICAgICAgaWYgKHNvdXJjZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIHNvdXJjZSkgey8vZWFjaCBpdGVtIGluIHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBrZXlzKSB7Ly9lYWNoIGJsdWVwcmludCBrZXlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlMaWJyYXJ5LmNvbnRhaW5zKE9iamVjdC5rZXlzKG9iaiksIHZhbHVlc1tpXSkpIHsvL3NvdXJjZSBpdGVtIGhhcyBibHVlcHJpbnQgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W2tleXNbaV1dID0gb2JqW3ZhbHVlc1tpXV07Ly9zdG9yZSBhY2NvcmRpbmcgdG8gYmx1ZXByaW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZVNvdXJjZS5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVTb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maW5kID0gKG9iaiwgY2FsbGJhY2spID0+IHsvL2hpZ2hlciBvcmRlciBPYmplY3QgZnVuY3Rpb24gZm9yIHRoZSBmaXJzdCBpdGVtIGluIGFuIE9iamVjdCB0aGF0IG1hdGNoXHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKG9ialtpXSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ialtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbmRBbGwgPSAob2JqLCBjYWxsYmFjaykgPT4gey8vaGlnaGVyIG9yZGVyIE9iamVjdCBmdW5jdGlvbiBmb3IgYWxsIGl0ZW1zIGluIGFuIE9iamVjdCB0aGF0IG1hdGNoXHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhvYmpbaV0pID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSBvYmpbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWFrZUl0ZXJhYmxlID0gKG9iaikgPT4gey8vbWFrZSBhbiBvYmplY3QgdG8gdXNlICdmb3IgaW4nXHJcbiAgICAgICAgb2JqW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHAgb2YgcHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpc1twXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWF4ID0gKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIG9iamVjdCA9IHRoaXMuc29ydChvYmplY3QsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXgob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1pbiA9IChvYmplY3QpID0+IHsvL2dldCB0aGUgbWluaW51bSBpbiBpdGVtIGluIGFuIE9iamVjdFxyXG4gICAgICAgIG9iamVjdCA9IHRoaXMuc29ydChvYmplY3QsIHsgdmFsdWU6IGZhbHNlIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluZGV4KG9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZWQgPSAob2JqLCBjYWxsYmFjaykgPT4gey8vbWFrZSBhbiBvYmplY3QgbGlzdGVuIHRvIGNoYW5nZXMgb2YgaXQncyBpdGVtc1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB7XHJcbiAgICAgICAgICAgIGdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgey8vd2hlbiBhbiBJdGVtIGlzIGZldGNoZWRcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRbcHJvcGVydHldLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHsvL3doZW4gYW4gSXRlbSBpcyBhZGRlZFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGFyZ2V0LCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkgey8vd2hlbiBhbiBJdGVtIGlzIHJlbW92ZWRcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRhcmdldCwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwgaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b0FycmF5ID0gKG9iamVjdCwgbmFtZWQpID0+IHsvL3R1cm4gYW4gT2JqZWN0IGludG8gYW4gQXJyYXlcclxuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhvYmplY3QpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuYW1lZCA9PSB0cnVlKSB7Ly9tYWtlIGl0IG5hbWVkXHJcbiAgICAgICAgICAgICAgICBhcnJheVtrZXldID0gb2JqZWN0W2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG9iamVjdFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlT2ZPYmplY3RBcnJheSA9IChhcnJheSwgbmFtZSkgPT4gey8vZ2V0IGFsbCB0aGUga2V5cyBpbiBhIEpzb25BcnJheSBvZiBpdGVtIG5hbWVcclxuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGFycmF5KSB7XHJcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goYXJyYXlbaV1bbmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5rZXlzT2ZPYmplY3RBcnJheSA9IChhcnJheSA9IFtdKSA9PiB7Ly9nZXQgYWxsIHRoZSBrZXlzIGluIGEgSnNvbkFycmF5XHJcbiAgICAgICAgdmFyIG5ld0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJheSkge1xyXG4gICAgICAgICAgICBuZXdBcnJheSA9IG5ld0FycmF5LmNvbmNhdChPYmplY3Qua2V5cyhhcnJheVtpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXlMaWJyYXJ5LnRvU2V0KG5ld0FycmF5KTsvL3JlbW92ZSBkdXBsaWNhdGVzXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vYmplY3RPZk9iamVjdEFycmF5ID0gKGFycmF5ID0gW10sIGlkLCBuYW1lKSA9PiB7Ly9zdHJpcCBba2V5IHZhbHVlXSBmcm9tIGEgSnNvbkFycmF5XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyYXkpIHtcclxuICAgICAgICAgICAgb2JqZWN0W2FycmF5W2ldW2lkXV0gPSBhcnJheVtpXVtuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvcHkgPSAoZnJvbSwgdG8pID0+IHsvL2Nsb25lIGFuIE9iamVjdFxyXG4gICAgICAgIE9iamVjdC5rZXlzKGZyb20pLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICB0b1trZXldID0gZnJvbVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9yRWFjaCA9IChvYmplY3QsIGNhbGxiYWNrKSA9PiB7Ly9oaWdoZXIgb3JkZXIgZnVuY3Rpb24gZm9yIE9iamVjdCBsaXRlcmFsXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhvYmplY3Rba2V5XSwga2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lYWNoID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHsvL2hpZ2hlciBvcmRlciBmdW5jdGlvbiBmb3IgT2JqZWN0IGxpdGVyYWxcclxuICAgICAgICBsZXQgbmV3T2JqZWN0ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IGNhbGxiYWNrKG9iamVjdFtrZXldLCBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNTdWJPYmplY3QgPSAoZGF0YSwgc2FtcGxlKSA9PiB7Ly9jaGVjayBpZiBhbiBvYmplY3QgaXMgYSBzdWItT2JqZWN0IG9mIGFub3RoZXIgT2JqZWN0XHJcbiAgICAgICAgbGV0IGZsYWc7XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzYW1wbGUpIHtcclxuICAgICAgICAgICAgZmxhZyA9IEpTT04uc3RyaW5naWZ5KHNhbXBsZVtuYW1lXSkgPT0gSlNPTi5zdHJpbmdpZnkoZGF0YVtuYW1lXSk7Ly9jb252ZXJ0IHRvIHN0cmluZyBhbmQgY29tcGFyZVxyXG4gICAgICAgICAgICBpZiAoIWZsYWcpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRTdWJPYmplY3QgPSAoZGF0YSA9IFtdLCBzYW1wbGUgPSB7fSkgPT4gey8vZ2V0IG1hdGNoZWQgaXRlbXMgaW4gT2JqZWN0XHJcbiAgICAgICAgbGV0IG1hdGNoZWQgPSBbXSwgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSB0aGlzLmlzU3ViT2JqZWN0KGRhdGFbaV0sIHNhbXBsZSk7Ly9jaGVjayBlYWNoIG9iamVjdFxyXG4gICAgICAgICAgICBpZiAoIWZsYWcpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBtYXRjaGVkLnB1c2goZGF0YVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hlZFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc29ydCA9IChkYXRhID0ge30sIHBhcmFtcyA9IHsgaXRlbXM6IFtdLCBkZXNjZW5kOiBmYWxzZSwga2V5OiBmYWxzZSwgdmFsdWU6IGZhbHNlIH0pID0+IHsvL3NvcnQgYW4gT2JqZWN0IGJhc2VkIG9uW2tleSwgdmFsdWUgb3IgaXRlbXNdXHJcbiAgICAgICAgcGFyYW1zLml0ZW0gPSBwYXJhbXMuaXRlbSB8fCAnJztcclxuICAgICAgICBwYXJhbXMuZGVzY2VuZCA9IHBhcmFtcy5kZXNjZW5kIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgc29ydGVkID0gW10sIG5EYXRhID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHNvcnRlZC5wdXNoKHsga2V5LCB2YWx1ZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMua2V5ICE9IHVuZGVmaW5lZCkgey8vc29ydCB3aXRoIGtleVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSGVsbG8nKTtcclxuICAgICAgICAgICAgc29ydGVkLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IChhLmtleSA+PSBiLmtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmtleSA9PSB0cnVlKSB2YWx1ZSA9ICF2YWx1ZTsvL2Rlc2NlbmRcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyYW1zLnZhbHVlICE9IHVuZGVmaW5lZCkgey8vc29ydCB3aXRoIHZhbHVlXHJcbiAgICAgICAgICAgIHNvcnRlZC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoYS52YWx1ZSA+PSBiLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMudmFsdWUgPT0gdHJ1ZSkgdmFsdWUgPSAhdmFsdWU7Ly9kZXNjZW5kXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcy5pdGVtcyAhPSB1bmRlZmluZWQpIHsvL3NvcnQgd2l0aCBpdGVtc1xyXG4gICAgICAgICAgICBzb3J0ZWQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyZWF0ZXIgPSAwLCBsZXNzZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBwYXJhbXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYS52YWx1ZVtpdGVtXSA+PSBiLnZhbHVlW2l0ZW1dKSBncmVhdGVyKytcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGxlc3NlcisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZ3JlYXRlciA+PSBsZXNzZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmRlc2NlbmQgPT0gdHJ1ZSkgdmFsdWUgPSAhdmFsdWU7Ly9kZXNjZW5kIGl0ZW1zXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeyBrZXksIHZhbHVlIH0gb2Ygc29ydGVkKSB7XHJcbiAgICAgICAgICAgIG5EYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJldmVyc2UgPSAoZGF0YSA9IHt9KSA9PiB7Ly9yZXZlcnNlIGFuIE9iamVjdFxyXG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSkucmV2ZXJzZSgpO1xyXG4gICAgICAgIGxldCBuZXdPYmplY3QgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgbmV3T2JqZWN0W2ldID0gZGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEluZGV4ID0gKGRhdGEgPSB7fSkgPT4gey8vZ2V0IHRoZSBmaXJzdCBpdGVtIGluIHRoZSBPYmplY3RcclxuICAgICAgICBsZXQga2V5ID0gT2JqZWN0LmtleXMoZGF0YSkuc2hpZnQoKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgICAgICAgcmV0dXJuIHsga2V5LCB2YWx1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0TGFzdCA9IChkYXRhID0ge30pID0+IHsvL2dldCB0aGUgbGFzdCBpdGVtIGluIHRoZSBPYmplY3RcclxuICAgICAgICBsZXQga2V5ID0gT2JqZWN0LmtleXMoZGF0YSkucG9wKCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgICAgIHJldHVybiB7IGtleSwgdmFsdWUgfTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEF0ID0gKGRhdGEgPSB7fSwgaW5kZXgpID0+IHsvL2dldCB0aGUgaXRlbSBvZiBpbmRleCBpbiB0aGUgT2JqZWN0XHJcbiAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKGRhdGEpW2luZGV4XTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgICAgICAgcmV0dXJuIHsga2V5LCB2YWx1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMua2V5T2YgPSAoZGF0YSA9IHt9LCBpdGVtKSA9PiB7Ly9nZXQgdGhlIGZpcnN0IG9jY3VycmFuY2Ugb2YgYW4gaXRlbSBpbiBhbiBPYmplY3RcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGRhdGFbaV0pID09IEpTT04uc3RyaW5naWZ5KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdEtleU9mID0gKGRhdGEgPSB7fSwgaXRlbSkgPT4gey8vZ2V0IHRoZSBsYXN0IG9jY3VycmFuY2Ugb2YgYW4gaXRlbSBpbiBhbiBvYmplY3RcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGRhdGFbaV0pID09IEpTT04uc3RyaW5naWZ5KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluY2x1ZGVzID0gKGRhdGEgPSB7fSwgaXRlbSkgPT4gey8vY2hlY2sgaWYgYW4gT2JqZWN0IGhhcyBhbiBpdGVtXHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5T2YoZGF0YSwgaXRlbSkgIT0gLTE7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0c0xpYnJhcnk7IiwiY29uc3QgRnVuYyA9IHJlcXVpcmUoJy4vLi4vY2xhc3Nlcy9GdW5jJyk7XHJcbmxldCBmdW5jID0gbmV3IEZ1bmMoKTtcclxuXHJcbmZ1bmN0aW9uIFNoYWRvdyhlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xyXG4gICAgdGhpcy5jaGlsZFByb3BlcnRpZXMgPSB7fTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZU5ld0VsZW1lbnRDaGlsZFByb3BlcnRpZXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcGVydHlDb2xsZWN0aW9uID0ge30pIHtcclxuICAgICAgICBsZXQgY2hpbGRyZW4sIHBvc2l0aW9ucztcclxuICAgICAgICBmb3IgKGxldCBpZGVudGlmaWVyIGluIHByb3BlcnR5Q29sbGVjdGlvbikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZFByb3BlcnRpZXMgb2YgcHJvcGVydHlDb2xsZWN0aW9uW2lkZW50aWZpZXJdKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMgPSB0aGlzLnNldFBvc2l0aW9ucyhjaGlsZFByb3BlcnRpZXMucG9zaXRpb25zKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbihpZGVudGlmaWVyLCBlbGVtZW50LCBwb3NpdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2pdLnNldFByb3BlcnRpZXMoY2hpbGRQcm9wZXJ0aWVzLnByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlTmV3RWxlbWVudENoaWxkQXR0cmlidXRlcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRyaWJ1dGVDb2xsZWN0aW9uID0ge30pIHtcclxuICAgICAgICBsZXQgY2hpbGRyZW4sIHBvc2l0aW9ucztcclxuICAgICAgICBmb3IgKGxldCBpZGVudGlmaWVyIGluIGF0dHJpYnV0ZUNvbGxlY3Rpb24pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRBdHJyaWJ1dGVzIG9mIGF0dHJpYnV0ZUNvbGxlY3Rpb25baWRlbnRpZmllcl0pIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucyA9IHRoaXMuc2V0UG9zaXRpb25zKGNoaWxkQXRycmlidXRlcy5wb3NpdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKGlkZW50aWZpZXIsIGVsZW1lbnQsIHBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bal0uc2V0QXR0cmlidXRlcyhjaGlsZEF0cnJpYnV0ZXMuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiAocG9zaXRpb25zID0gMSkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShwb3NpdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9ucyA9IGZ1bmMucmFuZ2UocG9zaXRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHBhcmFtcyA9IHsgY2hpbGREZXRhaWxzOiB7IGF0dHJpYnV0ZXM6IHt9LCBwcm9wZXJ0aWVzOiB7fSB9LCBkZXRhaWxzOiB7IGF0dHJpYnV0ZXM6IHt9LCBwcm9wZXJ0aWVzOiB7fSB9IH0pIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLnByZXBhcmVFbGVtZW50KGVsZW1lbnQsIHBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmVwYXJlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwYXJhbXMgPSB7IGNoaWxkRGV0YWlsczogeyBhdHRyaWJ1dGVzOiB7fSwgcHJvcGVydGllczoge30gfSwgZGV0YWlsczogeyBhdHRyaWJ1dGVzOiB7fSwgcHJvcGVydGllczoge30gfSB9KSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcy5jaGlsZERldGFpbHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMuY2hpbGREZXRhaWxzLmF0dHJpYnV0ZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU5ld0VsZW1lbnRDaGlsZEF0dHJpYnV0ZXMoZWxlbWVudCwgcGFyYW1zLmNoaWxkRGV0YWlscy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBhcmFtcy5jaGlsZERldGFpbHMucHJvcGVydGllcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTmV3RWxlbWVudENoaWxkUHJvcGVydGllcyhlbGVtZW50LCBwYXJhbXMuY2hpbGREZXRhaWxzLnByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyYW1zLmRldGFpbHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMuZGV0YWlscy5hdHRyaWJ1dGVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVzKHBhcmFtcy5kZXRhaWxzLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLmRldGFpbHMucHJvcGVydGllcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0UHJvcGVydGllcyhwYXJhbXMuZGV0YWlscy5wcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVOZXdFbGVtZW50Q2hpbGRQcm9wZXJ0aWVzKGVsZW1lbnQsIHRoaXMuY2hpbGRQcm9wZXJ0aWVzKTtcclxuICAgICAgICBlbGVtZW50LnNldFByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWtlQ2xvbmVhYmxlKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gW107XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGVsZW1lbnQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiAhPSBpKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsb25lRWxlbWVudCA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgcGFyYW1zID0geyBjaGlsZERldGFpbHM6IHsgYXR0cmlidXRlczoge30sIHByb3BlcnRpZXM6IHt9IH0sIGRldGFpbHM6IHsgYXR0cmlidXRlczoge30sIHByb3BlcnRpZXM6IHt9IH0gfSkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5jaGlsZHJlbltwb3NpdGlvbl0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmVwYXJlRWxlbWVudChlbGVtZW50LCBwYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWFrZUNsb25lYWJsZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGVsZW1lbnQpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LnVuaXRDbG9uZSA9IChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmVFbGVtZW50KHBvc2l0aW9uLCBwYXJhbXMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGVuZ3RoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFByb3BlcnRpZXMgPSBmdW5jdGlvbiAocHJvcGVydGllcyA9IHt9KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcGVydGllc1tpXSA9IHByb3BlcnRpZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3NzID0gZnVuY3Rpb24gKHN0eWxlID0ge30pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5jc3Moc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY3NzKHN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoYXR0cmlidXRlcyA9IHt9KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uc2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZXMoYXR0cmlidXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRDbGFzc2VzID0gZnVuY3Rpb24gKGNsYXNzZXMgPSAnJykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmFkZENsYXNzZXMoY2xhc3Nlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRDbGFzc2VzKGNsYXNzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIChjbGFzc2VzID0gJycpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZW1vdmVDbGFzc2VzKGNsYXNzZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3NlcyhjbGFzc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldENoaWxkcmVuID0gZnVuY3Rpb24gKGlkZW50aWZpZXIgPSAnJywgZWxlbWVudCwgcG9zaXRpb25zID0gW10pIHtcclxuICAgICAgICBsZXQgY29sbGVjdGlvbiA9IFtdO1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IGVsZW1lbnQuZmluZEFsbChpZGVudGlmaWVyKTsvL2dldCB0aGUgY2hpbGRyZW4gbWF0Y2hpbmcgaWRlbnRpZmllciBpbiBlYWNoIGVsZW1lbnRcclxuICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkgey8vaWYgbm90IGVtcHR5XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zaXRpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5bcG9zaXRpb25zW2pdXSAhPSB1bmRlZmluZWQpIHsvL2lmIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24ucHVzaChjaGlsZHJlbltwb3NpdGlvbnNbal1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoaWxkQ3NzID0gZnVuY3Rpb24gKGlkZW50aWZpZXIgPSAnJywgc3R5bGUgPSB7fSwgcG9zaXRpb25zID0gW10pIHtcclxuICAgICAgICBwb3NpdGlvbnMgPSB0aGlzLnNldFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG5cclxuICAgICAgICBsZXQgY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbihpZGVudGlmaWVyLCB0aGlzLmNoaWxkcmVuW2ldLCBwb3NpdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bal0uY3NzKHN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKGlkZW50aWZpZXIsIHRoaXMuZWxlbWVudCwgcG9zaXRpb25zKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjaGlsZHJlbltqXS5jc3Moc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldENoaWxkUHJvcGVydGllcyA9IGZ1bmN0aW9uIChpZGVudGlmaWVyID0gJycsIHByb3BlcnRpZXMgPSB7fSwgcG9zaXRpb25zID0gW10pIHtcclxuICAgICAgICBwb3NpdGlvbnMgPSB0aGlzLnNldFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG5cclxuICAgICAgICBsZXQgY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbihpZGVudGlmaWVyLCB0aGlzLmNoaWxkcmVuW2ldLCBwb3NpdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bal0uc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKGlkZW50aWZpZXIsIHRoaXMuZWxlbWVudCwgcG9zaXRpb25zKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuW2pdLnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkUHJvcGVydGllc1tpZGVudGlmaWVyXSA9IHRoaXMuY2hpbGRQcm9wZXJ0aWVzW2lkZW50aWZpZXJdIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuY2hpbGRQcm9wZXJ0aWVzW2lkZW50aWZpZXJdLnB1c2goeyBwcm9wZXJ0aWVzLCBwb3NpdGlvbnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRDaGlsZEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoaWRlbnRpZmllciA9ICcnLCBhdHRyaWJ1dGVzID0ge30sIHBvc2l0aW9ucyA9ICcnKSB7XHJcbiAgICAgICAgcG9zaXRpb25zID0gdGhpcy5zZXRQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oaWRlbnRpZmllciwgdGhpcy5jaGlsZHJlbltpXSwgcG9zaXRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2pdLnNldEF0dHJpYnV0ZXMoYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbihpZGVudGlmaWVyLCB0aGlzLmVsZW1lbnQsIHBvc2l0aW9ucyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY2hpbGRyZW5bal0uc2V0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRDbGFzc2VzVG9DaGlsZCA9IGZ1bmN0aW9uIChpZGVudGlmaWVyID0gJycsIGNsYXNzZXMgPSAnJywgcG9zaXRpb25zID0gW10pIHtcclxuICAgICAgICBwb3NpdGlvbnMgPSB0aGlzLnNldFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG5cclxuICAgICAgICBsZXQgY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbihpZGVudGlmaWVyLCB0aGlzLmNoaWxkcmVuW2ldLCBwb3NpdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bal0uYWRkQ2xhc3NlcyhjbGFzc2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKGlkZW50aWZpZXIsIHRoaXMuZWxlbWVudCwgcG9zaXRpb25zKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjaGlsZHJlbltqXS5hZGRDbGFzc2VzKGNsYXNzZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzZXNGcm9tQ2hpbGQgPSBmdW5jdGlvbiAoaWRlbnRpZmllciA9ICcnLCBjbGFzc2VzID0gJycsIHBvc2l0aW9ucyA9IFtdKSB7XHJcbiAgICAgICAgcG9zaXRpb25zID0gdGhpcy5zZXRQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oaWRlbnRpZmllciwgdGhpcy5jaGlsZHJlbltpXSwgcG9zaXRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2pdLnJlbW92ZUNsYXNzZXMoY2xhc3Nlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbihpZGVudGlmaWVyLCB0aGlzLmVsZW1lbnQsIHBvc2l0aW9ucyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY2hpbGRyZW5bal0ucmVtb3ZlQ2xhc3NlcyhjbGFzc2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2hhZG93OyJdfQ==
