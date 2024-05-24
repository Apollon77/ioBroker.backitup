import React from 'react';
import { withStyles } from '@mui/styles';
import { saveAs } from 'file-saver';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import {
    Card, CardContent, Button,
    AppBar, Toolbar, Tooltip, Fab,
} from '@mui/material';

import GenericApp from '@iobroker/adapter-react-v5/GenericApp';
import { I18n, Loader, AdminConnection } from '@iobroker/adapter-react-v5';
import {
    CloudUpload, FormatListBulleted,
    Info, Search, SettingsBackupRestore,
    Upload, Storage, Help, School, Favorite,
} from '@mui/icons-material';

import logo from './assets/backitup.png';

import BackupHistory from './Components/BackupHistory';
import GetBackups from './Components/GetBackups';
import UploadBackup from './Components/UploadBackup';
import UploadSettings from './Components/UploadSettings';
import BackupNow from './Components/BackupNow';
import SourceSelector from './Components/SourceSelector';
import Restore from './Components/Restore';

const styles = theme => ({
    root: {},
    tabContent: {
        padding: 10,
        height: 'calc(100% - 64px - 48px - 20px)',
        overflow: 'auto',
    },
    tabContentIFrame: {
        padding: 10,
        height: 'calc(100% - 64px - 48px - 20px - 38px)',
        overflow: 'auto',
    },
    selected: {
        color: theme.palette.mode === 'dark' ? undefined : '#FFF !important',
    },
    indicator: {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary.main : '#FFF',
    },
    headerArea: {
        backgroundImage: 'linear-gradient(135deg, #174475 0%, #3399CC 30%)',
        boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
    },
    header: {
        fontSize: '0.9rem',
        fontWeight: 400,
        lineHeight: '110%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main,
        padding: '0.3rem',
        borderRadius: 4,
        color: '#FFF !important',
        backgroundImage: 'linear-gradient(179deg, #3399CC 0%, #174475 60%) !important',
        boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
    },
    subHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFF !important',
    },
    cardHeader: {
        fontSize: '1.64rem',
        lineHeight: '110%',
        fontWeight: '400',
        marginBottom: 8,
        padding: '16px',
    },
    headerIcon: {
        height: 24,
        width: 24,
        fontSize: '24px',
        float: 'left',
        margin: '0 10px 0 5px',
    },
    icon: {
        height: 80,
        width: 100,
        margin: 4,
        marginTop: '1.5rem',
        color: '#3399CC !important',
        fontSize: '80px',
    },
    iconDiv: {
        display: 'inline-block',
        background: '#e2e2e2',
        backgroundImage: 'linear-gradient(179deg, #e2e2e2 40%, #474747 180%)',
        maxWidth: '30%',
        height: '100%',
        marginRight: 8,
        verticalAlign: 'top',
    },
    textDiv: {
        width: 'calc(100% - 120px)',
        display: 'inline-block',
    },
    cardContent: {
        padding: '0px',
        height: '100%',
        boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)',
        backgroundImage: theme.palette.mode === 'dark' ? undefined : 'linear-gradient(179deg, #fff 50%, rgb(0 0 0 / 14%) 100%)',
    },
    label: {
        fontWeight: 'bold',
        fontSize: '0.9em',
    },
    value: {
        fontSize: '0.9em',
    },
    footer: {
        fontSize: '0.8rem',
        fontWeight: 400,
        lineHeight: '110%',
        textAlign: 'center',
        marginTop: 8,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        overflow: 'overlay',
        zIndex: 997,
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: 'linear-gradient(179deg, #3399CC 0%, #174475 60%) !important',
        boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
        color: '#FFF !important',
        padding: '5px 0 5px 0',
        margin: '0 0 0 -8px',
    },
    buttonWidth: {
        width: '100% !important',
    },
    helpButton: {
        width: 36,
        height: 36,
    },
});

class App extends GenericApp {
    constructor(props) {
        const extendedProps = { ...props };
        extendedProps.encryptedFields = ['pass'];
        extendedProps.Connection = AdminConnection;
        extendedProps.translations = {
            en: require('./i18n/en'),
            de: require('./i18n/de'),
            ru: require('./i18n/ru'),
            pt: require('./i18n/pt'),
            nl: require('./i18n/nl'),
            fr: require('./i18n/fr'),
            it: require('./i18n/it'),
            es: require('./i18n/es'),
            pl: require('./i18n/pl'),
            uk: require('./i18n/uk'),
            'zh-cn': require('./i18n/zh-cn'),
        };

        extendedProps.sentryDSN = window.sentryDSN;
        // extendedProps.socket = {
        //     protocol: 'http:',
        //     host: '192.168.178.45',
        //     port: 8081,
        // };

        super(props, extendedProps);

        this.state.showBackupHistory = false;
        this.state.showGetBackups = false;
        this.state.showRestore = null;
        this.state.showUploadBackup = false;
        this.state.backupSource = window.localStorage.getItem('BackItUp.backupSource') || 'local';
        this.state.myAlive = false;
        this.state.restoreIfWait = 5000;
    }

    static translateTime(time) {
        if (time === 'none') {
            return '--';
        }
        if (time === 'No backups yet') {
            return I18n.t('No backups yet');
        }
        if (typeof time === 'string' && time.startsWith('error')) {
            return time.replace('error', I18n.t('Error'));
        }
        return time;
    }

    async onConnectionReady() {
        const myAlive = await this.socket.getState(`system.adapter.${this.adapterName}.${this.instance}.alive`);
        const newState = { myAlive: !!myAlive?.val };

        if (this.state.native.minimalEnabled) {
            const iobrokerLastTime = await this.socket.getState(`${this.adapterName}.${this.instance}.history.iobrokerLastTime`);
            const iobrokerNextTime = await this.socket.getState(`${this.adapterName}.${this.instance}.info.iobrokerNextTime`);
            newState.iobrokerNextTime = App.translateTime(iobrokerNextTime.val);
            newState.iobrokerLastTime = App.translateTime(iobrokerLastTime.val);
        }

        if (this.state.native.ccuEnabled) {
            const ccuLastTime = await this.socket.getState(`${this.adapterName}.${this.instance}.history.ccuLastTime`);
            const ccuNextTime = await this.socket.getState(`${this.adapterName}.${this.instance}.info.ccuNextTime`);
            newState.ccuLastTime = App.translateTime(ccuLastTime.val);
            newState.ccuNextTime = App.translateTime(ccuNextTime.val);
        }

        await this.socket.subscribeState(`system.adapter.${this.adapterName}.${this.instance}.alive`, this.onAlive);
        await this.socket.subscribeObject(`system.adapter.${this.adapterName}.${this.instance}`, this.onSettings);
        await this.socket.subscribeState(`${this.adapterName}.${this.instance}.history.iobrokerLastTime`, this.onHistory);
        await this.socket.subscribeState(`${this.adapterName}.${this.instance}.info.iobrokerNextTime`, this.onHistory);
        await this.socket.subscribeState(`${this.adapterName}.${this.instance}.history.ccuLastTime`, this.onHistory);
        await this.socket.subscribeState(`${this.adapterName}.${this.instance}.info.ccuNextTime`, this.onHistory);

        if (myAlive) {
            newState.systemInfo = await this.socket.sendTo(`${this.adapterName}.${this.instance}`, 'getSystemInfo', null);
            newState.restoreIfWait = newState.systemInfo?.systemOS === 'docker' ? 10000 : (newState.systemInfo?.systemOS === 'win' ? 18000 : 5000);
        }

        this.setState(newState);
    }

    onSettings = (id, obj) => {
        if (id === `system.adapter.${this.adapterName}.${this.instance}`) {
            this.setState({ native: obj.native });
        }
    };

    onHistory = (id, state) => {
        if (id === `${this.adapterName}.${this.instance}.history.iobrokerLastTime` && state.val !== this.state.iobrokerLastTime) {
            this.setState({ iobrokerLastTime: App.translateTime(state.val) });
        } else if (id === `${this.adapterName}.${this.instance}.history.iobrokerNextTime` && state.val !== this.state.iobrokerNextTime) {
            this.setState({ iobrokerNextTime: App.translateTime(state.val) });
        } else if (id === `${this.adapterName}.${this.instance}.history.ccuLastTime` && state.val !== this.state.ccuLastTime) {
            this.setState({ ccuLastTime: App.translateTime(state.val) });
        } else if (id === `${this.adapterName}.${this.instance}.history.ccuNextTime` && state.val !== this.state.ccuNextTime) {
            this.setState({ ccuNextTime: App.translateTime(state.val) });
        }
    };

    componentWillUnmount() {
        super.componentWillUnmount();
        this.socket.unsubscribeState(`system.adapter.${this.adapterName}.${this.instance}.alive`, this.onAlive);
        this.socket.unsubscribeObject(`system.adapter.${this.adapterName}.${this.instance}`, this.onSettings);
        this.socket.unsubscribeState(`${this.adapterName}.${this.instance}.history.iobrokerLastTime`, this.onHistory);
        this.socket.unsubscribeState(`${this.adapterName}.${this.instance}.info.iobrokerNextTime`, this.onHistory);
        this.socket.unsubscribeState(`${this.adapterName}.${this.instance}.history.ccuLastTime`, this.onHistory);
        this.socket.unsubscribeState(`${this.adapterName}.${this.instance}.info.ccuNextTime`, this.onHistory);
    }

    onAlive = (id, state) => {
        if (id === `system.adapter.${this.adapterName}.${this.instance}.alive`) {
            if (!!state?.val !== this.state.myAlive) {
                this.setState({ myAlive: !!state?.val });
            }
        }
    };

    renderBackupInformation() {
        return <Card>
            <CardContent className={this.props.classes.cardContent}>
                <div className={this.props.classes.iconDiv}>
                    <Info className={this.props.classes.icon} />
                </div>
                <div className={this.props.classes.textDiv}>
                    <div className={this.props.classes.cardHeader}>
                        {I18n.t('Backup Information')}
                    </div>
                    <ul>
                        {this.state.native.minimalEnabled && <li>
                            <div className={this.props.classes.label}>{I18n.t('Last ioBroker backup:')}</div>
                            <div className={this.props.classes.value}>{this.state.iobrokerLastTime}</div>
                        </li>}
                        {this.state.native.ccuEnabled && <li>
                            <div className={this.props.classes.label}>{I18n.t('Last CCU backup:')}</div>
                            <div className={this.props.classes.value}>{this.state.ccuLastTime}</div>
                        </li>}
                        {this.state.native.minimalEnabled && <li>
                            <div className={this.props.classes.label}>{I18n.t('Next ioBroker backup:')}</div>
                            <div className={this.props.classes.value}>{this.state.iobrokerNextTime}</div>
                        </li>}
                        {this.state.native.ccuEnabled && <li>
                            <div className={this.props.classes.label}>{I18n.t('Next CCU backup:')}</div>
                            <div className={this.props.classes.value}>{this.state.ccuNextTime}</div>
                        </li>}
                    </ul>
                </div>
            </CardContent>
        </Card>;
    }

    renderActivatedStorageOptions() {
        const options = [
            { name: 'cifsEnabled', label: `NAS (${this.state.native.connectType})` },
            { name: 'ftpEnabled', label: 'FTP' },
            { name: 'dropboxEnabled', label: 'Dropbox' },
            { name: 'onedriveEnabled', label: 'OneDrive' },
            { name: 'googledriveEnabled', label: 'Google Drive' },
            { name: 'webdavEnabled', label: 'WebDAV' },
        ];
        return <Card>
            <CardContent className={this.props.classes.cardContent}>
                <div className={this.props.classes.iconDiv}>
                    <Storage className={this.props.classes.icon} />
                </div>
                <div className={this.props.classes.textDiv}>
                    <div className={this.props.classes.cardHeader}>
                        {I18n.t('Activated storage options')}
                    </div>
                    <ul>
                        {options.map(option => this.state.native[option.name] && <li key={option.name}>{I18n.t(option.label)}</li>)}
                    </ul>
                </div>
            </CardContent>
        </Card>;
    }

    renderActivatedBackupOptions() {
        const options = [
            { name: 'jarvisEnabled', label: 'Jarvis backup' },
            { name: 'minimalEnabled', label: 'ioBroker' },
            { name: 'ccuEnabled', label: 'Homematic CCU backup' },
            { name: 'redisEnabled', label: 'Save Redis state' },
            { name: 'javascriptsEnabled', label: 'Javascripts backup' },
            { name: 'zigbeeEnabled', label: 'Save Zigbee database' },
            { name: 'esphomeEnabled', label: 'ESPHome' },
            { name: 'zigbee2mqttEnabled', label: 'Zigbee2MQTT' },
            { name: 'noderedEnabled', label: 'Node-Red backup' },
            { name: 'yahkaEnabled', label: 'Yahka (Homekit) backup' },
            { name: 'historyEnabled', label: 'Save History Data' },
            { name: 'influxDBEnabled', label: 'InfluxDB backup' },
            { name: 'mySqlEnabled', label: 'MySql backup' },
            { name: 'sqliteEnabled', label: 'SQLite backup' },
            { name: 'grafanaEnabled', label: 'Grafana backup' },
            { name: 'pgSqlEnabled', label: 'PostgreSQL Backup' },

        ];
        return <Card>
            <CardContent className={this.props.classes.cardContent}>
                <div className={this.props.classes.iconDiv}>
                    <CloudUpload className={this.props.classes.icon} />
                </div>
                <div className={this.props.classes.textDiv}>
                    <div className={this.props.classes.cardHeader}>
                        {I18n.t('Activated backup options')}
                    </div>
                    <ul style={{ maxHeight: 150, overflow: 'auto' }}>
                        {options.map(option => this.state.native[option.name] &&
                            <li key={option.name}>{I18n.t(option.label)}</li>)}
                    </ul>
                </div>
            </CardContent>
        </Card>;
    }

    renderUploadSettingsDialog() {
        if (!this.state.showUploadSettings) {
            return null;
        }
        return <UploadSettings
            onClose={() => this.setState({ showUploadSettings: false })}
            socket={this.socket}
            themeType={this.state.themeType}
            adapterName={this.adapterName}
            instance={this.instance}
        />;
    }

    render() {
        if (!this.state.loaded) {
            return <StyledEngineProvider injectFirst>
                <ThemeProvider theme={this.state.theme}>
                    <Loader themeType={this.state.themeType} />
                </ThemeProvider>
            </StyledEngineProvider>;
        }

        return <StyledEngineProvider injectFirst>
            <ThemeProvider theme={this.state.theme}>
                <div
                    className="App"
                    style={{
                        background: this.state.theme.palette.background.default,
                        color: this.state.theme.palette.text.primary,
                    }}
                >
                    <AppBar className={this.props.classes.headerArea} position="static" enableColorOnDark>
                        <Toolbar>
                            <img src={logo} alt="logo" style={{ height: 48, marginRight: 16 }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>BackItUp</div>
                                <div style={{ color: '#fff', fontStyle: 'italic' }}>{I18n.t('Backup your System …')}</div>
                            </div>
                        </Toolbar>
                        <div style={{
                            display: 'inline-block', position: 'absolute', right: 10, top: 13,
                        }}
                        >
                            <Tooltip size="small" title="PayPal.Me" style={{ marginRight: '0.2rem' }}>
                                <Fab
                                    className={this.props.classes.helpButton}
                                    onClick={() => {
                                        window.open('https://paypal.me/mk1676', '_blank');
                                    }}
                                >
                                    <Favorite />
                                </Fab>
                            </Tooltip>
                            <Tooltip size="small" title="Wiki" style={{ marginRight: '0.2rem' }}>
                                <Fab
                                    className={this.props.classes.helpButton}
                                    onClick={() => {
                                        window.open('https://github.com/simatec/ioBroker.backitup/wiki', '_blank');
                                    }}
                                >
                                    <School />
                                </Fab>
                            </Tooltip>
                            <Tooltip size="small" title="Readme" style={{ marginRight: '0.2rem' }}>
                                <Fab
                                    className={this.props.classes.helpButton}
                                    onClick={() => {
                                        window.open('https://github.com/simatec/ioBroker.backitup/blob/master/README.md', '_blank');
                                    }}
                                >
                                    <Help />
                                </Fab>
                            </Tooltip>
                        </div>
                    </AppBar>
                    <div
                        style={{
                            width: 'calc(100% - 16px)',
                            height: 'calc(100% - 104px)',
                            overflow: 'auto',
                            padding: 8,
                        }}
                    >
                        <div className={this.props.classes.header} style={{ margin: '0.2rem 0 1.5rem 0' }}>
                            <Info className={this.props.classes.headerIcon} />
                            <span>{I18n.t('Backup Information')}</span>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr',
                                gap: 12,
                                height: 300,
                            }}
                        >
                            {this.renderBackupInformation()}
                            {this.renderActivatedStorageOptions()}
                            {this.renderActivatedBackupOptions()}
                        </div>
                        <div className={this.props.classes.header} style={{ margin: '1.5rem 0 1.5rem 0' }}>
                            <CloudUpload className={this.props.classes.headerIcon} />
                            <span>{I18n.t('System backup')}</span>
                        </div>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                gap: 12,
                                justifyContent: 'space-evenly',
                                alignContent: 'center',
                                justifyItems: 'stretch',
                                alignItems: 'stretch',
                            }}
                        >
                            {this.state.myAlive && this.state.native.minimalEnabled ? <BackupNow
                                className={this.props.classes.buttonWidth}
                                style={{ width: '100%' }}
                                variant="contained"
                                color="grey"
                                adapterName={this.adapterName}
                                instance={this.instance}
                                alive
                                socket={this.socket}
                                themeType={this.state.themeType}
                                endIcon={<CloudUpload />}
                                schema={{
                                    backUpType: 'iobroker',
                                    label: 'ioBroker start backup',
                                }}
                            /> : <Button
                                style={{ width: '100%' }}
                                disabled
                                color="grey"
                                variant="contained"
                                endIcon={<CloudUpload />}
                            >
                                {I18n.t('ioBroker start backup')}
                            </Button>}
                            {this.state.myAlive && this.state.native.ccuEnabled ? <BackupNow
                                className={this.props.classes.buttonWidth}
                                style={{ width: '100% !important' }}
                                variant="contained"
                                adapterName={this.adapterName}
                                instance={this.instance}
                                color="grey"
                                alive
                                socket={this.socket}
                                themeType={this.state.themeType}
                                endIcon={<CloudUpload />}
                                schema={{
                                    backUpType: 'ccu',
                                    label: 'Homematic start backup',
                                }}
                            /> : <Button
                                style={{ width: '100%' }}
                                disabled
                                color="grey"
                                variant="contained"
                                endIcon={<CloudUpload />}
                            >
                                {I18n.t('Homematic start backup')}
                            </Button>}
                            <Button
                                style={{ width: '100%' }}
                                onClick={() => this.setState({ showBackupHistory: true })}
                                variant="contained"
                                color="grey"
                                endIcon={<FormatListBulleted />}
                            >
                                {I18n.t('Backup history')}
                            </Button>
                            <Button
                                style={{ width: '100%' }}
                                variant="contained"
                                color="grey"
                                onClick={async () => {
                                    const obj = await this.socket.getObject(`system.adapter.${this.adapterName}.${this.instance}`);

                                    if (obj && obj.common && obj.common.news) {
                                        delete obj.common.news;
                                    }
                                    if (obj && obj.common && obj.common.titleLang) {
                                        delete obj.common.titleLang;
                                    }
                                    if (obj && obj.common && obj.common.desc) {
                                        delete obj.common.desc;
                                    }
                                    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json;charset=utf-8' });
                                    const now = new Date();
                                    saveAs(blob, `${now.getFullYear()}_${(now.getMonth() + 1).toString().padStart(2, '0')}_${now.getDate().toString().padStart(2, '0')}-${this.adapterName}.${this.instance}.json`);
                                }}
                                endIcon={<CloudUpload />}
                            >
                                {I18n.t('Save BackItUp settings')}
                            </Button>
                        </div>
                        <div className={this.props.classes.header} style={{ margin: '1.5rem 0px 1.0rem 0px' }}>
                            <SettingsBackupRestore className={this.props.classes.headerIcon} />
                            <span>{I18n.t('Restore')}</span>
                        </div>
                        <div style={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr',
                            gap: 12,
                            justifyItems: 'stretch',
                            justifyContent: 'space-evenly',
                            alignContent: 'center',
                            alignItems: 'stretch',
                        }}
                        >
                            <SourceSelector
                                value={this.state.backupSource}
                                data={this.state.native}
                                onChange={backupSource => {
                                    window.localStorage.setItem('BackItUp.backupSource', backupSource);
                                    this.setState({ backupSource });
                                }}
                            />
                            <Button
                                style={{ width: '100%', marginTop: '0.5rem' }}
                                onClick={() => this.setState({ showGetBackups: true })}
                                disabled={!this.state.myAlive}
                                variant="contained"
                                color="grey"
                                endIcon={<Search />}
                            >
                                {I18n.t('Get list')}
                            </Button>
                            <Button
                                style={{ width: '100%', marginTop: '0.5rem' }}
                                onClick={() => this.setState({ showUploadBackup: true })}
                                variant="contained"
                                color="grey"
                                endIcon={<Upload />}
                            >
                                {I18n.t('Upload Backup File')}
                            </Button>
                            <Button
                                style={{ width: '100%', marginTop: '0.5rem' }}
                                variant="contained"
                                color="grey"
                                onClick={() => this.setState({ showUploadSettings: true })}
                                endIcon={<SettingsBackupRestore />}
                            >
                                {I18n.t('Restore BackItUp settings')}
                            </Button>
                        </div>
                        {this.renderError()}
                        <div
                            className={this.props.classes.footer}
                        >
                            {I18n.t('All backup settings can be changed in the adapter configuration of BackItUp.')}
                        </div>
                    </div>
                </div>
                {this.state.showBackupHistory ? <BackupHistory
                    onClose={() => this.setState({ showBackupHistory: false })}
                    socket={this.socket}
                    themeType={this.state.themeType}
                    adapterName={this.adapterName}
                    instance={this.instance}
                /> : null}
                {this.state.showGetBackups ? <GetBackups
                    onClose={() => this.setState({ showGetBackups: false })}
                    onRestore={(location, object, fileName) => this.setState({ showRestore: { location, object, fileName }, showGetBackups: false })}
                    socket={this.socket}
                    themeType={this.state.themeType}
                    adapterName={this.adapterName}
                    instance={this.instance}
                    backupSource={this.state.backupSource}
                    allowDownload
                /> : null}
                {this.state.showUploadBackup ? <UploadBackup
                    alive={this.state.myAlive}
                    onClose={() => this.setState({ showUploadBackup: false })}
                    socket={this.socket}
                    themeType={this.state.themeType}
                    adapterName={this.adapterName}
                    instance={this.instance}
                /> : null}
                {this.state.showRestore ? <Restore
                    alive={this.state.myAlive}
                    location={this.state.showRestore.location}
                    fileName={this.state.showRestore.fileName}
                    onClose={() => this.setState({ showRestore: null })}
                    socket={this.socket}
                    themeType={this.state.themeType}
                    adapterName={this.adapterName}
                    instance={this.instance}
                    restoreIfWait={this.state.restoreIfWait}
                /> : null}
                {this.renderUploadSettingsDialog()}
            </ThemeProvider>
        </StyledEngineProvider>;
    }
}

export default withStyles(styles)(App);