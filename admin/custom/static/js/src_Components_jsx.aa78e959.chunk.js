"use strict";(self.webpackChunkiobroker_admin_component_backitup=self.webpackChunkiobroker_admin_component_backitup||[]).push([["src_Components_jsx"],{20507:($,v,o)=>{o.r(v),o.d(v,{default:()=>R});var y=o(1810),u=o(98360),C=o(86207),D=o(37451),O=o(35665),I=o(95520),B=o(15780),A=o(32149),S=o(56714),P=o(95973),i=o.n(P),d=o(37449),j=o(85903),b=Object.defineProperty,g=Object.getOwnPropertySymbols,x=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,F=Reflect.get,m=(s,e,t)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,M=(s,e)=>{for(var t in e||(e={}))N.call(e,t)&&m(s,t,e[t]);if(g)for(var t of g(e))E.call(e,t)&&m(s,t,e[t]);return s},T=(s,e,t)=>F(x(s),t,e),k=(s,e,t)=>new Promise((n,a)=>{var c=r=>{try{l(t.next(r))}catch(f){a(f)}},p=r=>{try{l(t.throw(r))}catch(f){a(f)}},l=r=>r.done?n(r.value):Promise.resolve(r.value).then(c,p);l((t=t.apply(s,e)).next())});class h extends j.A{constructor(e){super(e),this.storedAlive=this.props.alive,this.storedChecked=!1}checkConfiguration(){console.log("Check Config"),this.props.alive&&!this.storedChecked&&(this.storedChecked=!0,this.props.socket.sendTo(`${this.props.adapterName}.${this.props.instance}`,"getFileSystemInfo",null).then(e=>{e!=null&&e.diskState&&e.storage&&e.diskFree&&(e.diskState==="warn"&&e.storage==="local"?this.showMessage(d.I18n.t("On the host only %s MB free space is available! Please check your system!",e.diskFree),d.I18n.t("BackItUp Information!")):e.diskState==="error"&&e.storage==="local"&&this.showMessage(d.I18n.t(`On the host only %s MB free space is available! Local backups are currently not possible. 

Please check your system!`,e.diskFree),d.I18n.t("BackItUp Information!"),"warning"))}),this.props.socket.sendTo(`${this.props.adapterName}.${this.props.instance}`,"getSystemInfo",null).then(e=>k(this,null,function*(){const t=M({},this.props.data);let n=!1;(e==null?void 0:e.systemOS)==="docker"&&e.dockerDB===!1?t.redisType!=="remote"&&t.redisEnabled&&(t.redisType="remote",this.props.data._dockerDB=!1,console.log("DockerDB: "+t._dockerDB),n=!0):(e==null?void 0:e.systemOS)==="docker"&&e.dockerDB===!0?(this.props.data._dockerDB=!0,console.log("DockerDB: "+t._dockerDB),n=!0):(e==null?void 0:e.systemOS)!=="docker"&&(this.props.data._dockerDB=!0,console.log("OS: "+(e==null?void 0:e.systemOS)),console.log("DockerDB: "+t._dockerDB),n=!0),(e==null?void 0:e.systemOS)==="docker"?(n=!0,t._restoreIfWait=1e4):(e==null?void 0:e.systemOS)==="win"&&(n=!0,t._restoreIfWait=18e3);const a=["ccu","mySql","sqlite","pgSql","influxDB","history"];for(let c=0;c<a.length;c++)if(!this.isConfigFilled(a[c])){const p=yield this.fetchConfig(a[c],t).catch(l=>this.showError(l));n=n||p.changed}})))}componentDidMount(){return k(this,null,function*(){T(h.prototype,this,"componentDidMount").call(this),this.checkConfiguration()})}renderItem(){return this.storedAlive!==this.props.alive&&(this.storedAlive=this.props.alive,this.storedAlive&&this.checkConfiguration()),this.renderMessage()}}h.propTypes={socket:i().object.isRequired,themeType:i().string,themeName:i().string,style:i().object,className:i().string,data:i().object.isRequired,attr:i().string,schema:i().object,onError:i().func,onChange:i().func};const G=h,R={AdapterExist:y.A,BackupNow:u.A,DetectConfig:C.A,GoogleDrive:O.A,Onedrive:I.A,Dropbox:B.A,CheckConfigInvisible:D.A,Instance:A.A,RestoreBackup:S.A,CheckAllConfigInvisible:G}}}]);

//# sourceMappingURL=src_Components_jsx.aa78e959.chunk.js.map