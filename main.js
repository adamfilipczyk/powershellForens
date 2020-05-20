//Variables / Constants section
const electron = require('electron');
const url = require ('url');
const path = require('path');

const {app, BrowserWindow, Menu, shell} = electron;

let mainWindow;
let aboutWindow;
let licenceWindow;
let log;

// Main window initiation
app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({ 
        title: 'Powershell Live Response Artifacts Collector ver. 1.0.0',
        backgroundColor: '#3C3B37'});
    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes: true
    }));
    //Close all windows when main window is closed
    mainWindow.on('closed',function(){
        app.quit();
    });

//Menu builder
const mainMenu = Menu.buildFromTemplate(mainMenuTemp);
//Insert menu
Menu.setApplicationMenu(mainMenu);
});

//Toolbar Menu
const mainMenuTemp = [
    {
        //File menu 
        label: 'File',
        submenu: [
            {
                label: 'Open Artifacts Folder',
                click(){
                    openItem();
                }
            },
            {
                //Exit button in File menu
                label: 'Exit',
                //conditional statemrnt to quit based on the platform. Mac / other
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                //Exit application button
                click(){
                    app.quit();
                }
            }
            
        ],
    },
    {
        //Edit menu
        label:  'Edit',
        submenu: [
            {
                label: 'Item 1'
            }
        ]
    },
    {
        //Help menu
        label: 'Help',
        submenu: [
            {
                label: 'About',
                click(){
                    aboutWin();
                }
            },
            {
                label: 'Licence',
                click(){
                    licencetWin();
                }
            },
            {
                label: 'Release notes'
            }
        ]
    }  
];

//About Window funnction
function aboutWin(){
    //create new window
    aboutWindow = new BrowserWindow({
        width: 400,
        height: 300,
        title: 'About',
        backgroundColor: '#3C3B37',
        invertedColorScheme: true
    });
    aboutWindow.setMenu(null);
    //load html into window
    aboutWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'aboutWindow.html'),
        protocol:'file:',
        slashes: true
    }));
}

//Licence Window funnction
function licencetWin(){
    //create new window
    licenceWindow = new BrowserWindow({
        width: 400,
        height: 300,
        title: 'About',
        backgroundColor: '#3C3B37',
        invertedColorScheme: true
    });
    licenceWindow.setMenu(null);
    //load html into window
    licenceWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'licenceWindow.html'),
        protocol:'file:',
        slashes: true
    }));
}

//Function to open Working Folder
function openItem(){
    shell.openPath(__dirname);
}