__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){const u=(0,t.useRef)(null);return{onBlur:(0,t.useCallback)(()=>{let t=!1,o=!1;const s=n=>{var c;t=!0,o=!(null===(c=u.current)||void 0===c||!c.contains(n.target)),document.removeEventListener('focus',s,!0)};document.addEventListener('focus',s,!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{t||document.removeEventListener('focus',s,!0),o||n()})})},[n]),ref:u}};var t=r(d[0])}),"01caf9",["d7ed8e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=(0,babelHelpers.interopRequireDefault(r(d[0])).default)({svgContents:"<g fill=\"none\" fill-rule=\"nonzero\"><path d=\"m2 16h28\" /><path d=\"m2 24h28\" /><path d=\"m2 8h28\" /></g>",svgProps:{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},'IcSystemRowsStroked',{});e.default=t}),"09c0a8",["31a9a3"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){t.default.emit('actionTray:dismiss')};var t=babelHelpers.interopRequireDefault(r(d[0]))}),"0a964f",["762bdc"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireWildcard(r(d[0])),t=r(d[1]),n=babelHelpers.interopRequireDefault(r(d[2])),s=babelHelpers.interopRequireDefault(r(d[3])),u=babelHelpers.interopRequireDefault(r(d[4])),o=babelHelpers.interopRequireDefault(r(d[5])),c=r(d[6]),f=babelHelpers.interopRequireDefault(r(d[7])),p=babelHelpers.interopRequireDefault(r(d[8])),b=babelHelpers.interopRequireDefault(r(d[9])),D=r(d[10]),R=babelHelpers.interopRequireDefault(r(d[11])),h=r(d[12]);const v='simple-header-profile-menu';var q=(0,t.withStyles)(()=>({container:{display:'inline',position:'relative'}}))((function({badge:t,children:q,css:H,initialOpen:y=!1,id:I,loggingID:j,renderCircleButton:x,onPress:C,src:P,styles:k}){const{isOpen:B,toggleMenu:M,closeMenu:O,href:_}=(0,o.default)(v,y),w=(0,l.useRef)(null),E=(0,s.default)(w),[,F]=(0,D.useUIState)(c.ProfileButtonMenuBounds);(0,l.useEffect)(()=>{F(E)},[F,E]);const S=(0,l.useCallback)(()=>{var l;F(null===(l=w.current)||void 0===l?void 0:l.getBoundingClientRect())},[F]);(0,u.default)(S);const T=(0,l.useCallback)(()=>{M(),null==C||C()},[C,M]),K=(0,l.useCallback)(({key:l})=>{'Escape'===l&&(O(),w.current&&w.current.focus())},[O]),L=x?p.default:f.default;return(0,h.jsxs)("div",{...H(k.container),...(0,n.default)(O),onKeyDown:K,children:[(0,h.jsx)(L,{badge:t,expanded:B,onPress:T,src:P,href:_,id:I,dataTestId:"cypress-headernav-profile",refForFocus:w}),(0,h.jsx)(b.default,{id:v,isOpen:B,loggingID:j,shouldLogImpression:B,dataTestId:v,children:(0,h.jsx)(R.default,{onPress:O,children:q})})]})}));e.default=q}),"0fb961",["d7ed8e","bf663a","01caf9","888d4f","5d3939","8c5c21","82c863","fbbec7","b9a43c","b4adc2","9e67c0","141750","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(u){return(0,n.jsx)(t.default,{loader:()=>r(d[5])(d[4],"./ActionTrayContainer").then(babelHelpers.interopRequireWildcard).then(l.getDefaultExport),renderPlaceholder:t.renderNull,...u})};babelHelpers.interopRequireDefault(r(d[0]));var t=babelHelpers.interopRequireWildcard(r(d[1])),l=r(d[2]),n=r(d[3])}),"11ab62",["d7ed8e","58c24c","4b299b","721ed1","b04508","b8ad06"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({href:n,children:s,...f}){return(0,o.jsx)(t.default,{formURL:n,onSubmit:l.clearStorageForLogout,children:(0,o.jsx)(u.default,{submit:!0,dataTestId:"cypress-headernav-logout",...f,children:s})})};babelHelpers.interopRequireDefault(r(d[0]));var t=babelHelpers.interopRequireDefault(r(d[1])),l=r(d[2]),u=babelHelpers.interopRequireDefault(r(d[3])),o=r(d[4])}),"138da7",["d7ed8e","3ee0e9","7a313f","2d815f","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function({children:s,onPress:c}){const l=(0,t.useMemo)(()=>{return t=c,n=>{n.target.closest('[href]')&&t(n)};var t},[c]);return(0,n.jsx)("div",{onClick:l,children:s})};var t=babelHelpers.interopRequireWildcard(r(d[0])),n=r(d[1])}),"141750",["d7ed8e","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.classNames=void 0,e.default=function(n){if((0,t.useContext)(b.LinariaExperimentContext))return(0,h.jsx)(f.BaseHeaderLink,{...n,linariaClassnames:z});return(0,h.jsx)(q,{...n})},e.styleFragments=void 0;r(d[0]);var t=babelHelpers.interopRequireWildcard(r(d[1])),n=babelHelpers.interopRequireDefault(r(d[2])),l=r(d[3]),s=r(d[4]),o=babelHelpers.interopRequireDefault(r(d[5])),u=r(d[6]),b=r(d[7]),p=babelHelpers.interopRequireDefault(r(d[8])),c=r(d[9]),f=r(d[10]),h=r(d[11]);let x,y,$,_,v,F,w,j=t=>t;const k={...f.styleFragments,container:(0,o.default)(x||(x=j`
    ${0}
    ${0}

    font-weight: ${0};
    padding: 12px;
    position: relative;
    white-space: nowrap;
    z-index: 1;

    &::before {
      border-radius: 22px;
      bottom: 0;
      content: '';
      left: -3px;
      position: absolute;
      right: -3px;
      top: 0;
      z-index: 0;
    }

    ${0}
  `),f.styleFragments.container,p.default.typography.baseMedium14px,p.default.typography.weightMedium600,(0,n.default)({zIndex:2,'::before':{...(0,l.focusTransitionStyles)(),boxShadow:`0 0 0 2px ${p.default.palette.hof}, 0 0 0 4px ${p.default.palette.white}`}})),container_standard:(0,o.default)(y||(y=j`
    ${0}
    color: ${0};

    &:hover {
      &::before {
        background: ${0};
      }
    }
  `),f.styleFragments.container_standard,p.default.palette.hof,p.default.palette.faint),container_immersive:(0,o.default)($||($=j`
    ${0}
    color: ${0};

    &:hover {
      &::before {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  `),f.styleFragments.container_immersive,p.default.palette.white),label:(0,o.default)(_||(_=j`
    ${0}
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;
    z-index: 1;
  `),f.styleFragments.label),badge:(0,o.default)(v||(v=j`
    ${0}
    border-radius: 50%;
    height: 6px;
    margin-top: -0.8em;
    position: absolute;
    right: -7px;
    top: 50%;
    width: 6px;
    z-index: 0;
  `),f.styleFragments.badge),badge_immersive:(0,o.default)(F||(F=j`
    ${0}
    background-color: ${0};
  `),f.styleFragments.badge_immersive,p.default.palette.white),badge_standard:(0,o.default)(w||(w=j`
    ${0}
    ${0}
  `),f.styleFragments.badge_standard,(0,c.brandColorStyleLinaria)('background-color'))};e.styleFragments=k;const q=(0,u.withStyles)((0,s.cssFragmentsObjToStylesFn)(k))(f.BaseHeaderLink),z={container:"c1jdlqzl",container_standard:"c1qi3u91",container_immersive:"c7mmngl",label:"l1hgmivi",badge:"bpwt0fh",badge_immersive:"b35eruc",badge_standard:"bjb3390"};e.classNames=z}),"1acae3",["f03cc4","d7ed8e","78ea50","1cfcd9","0acceb","879685","bf663a","d917d7","a2ecf6","59b568","ba4849","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.USER_PHOTO_UPDATED=e.USER_NAME_UPDATED=e.LOGGED_OUT=e.LOGGED_IN=void 0;e.LOGGED_IN='login:complete';e.LOGGED_OUT='logout';e.USER_NAME_UPDATED='userUtils:userNameUpdated';e.USER_PHOTO_UPDATED='userUtils:userPhotoUpdated'}),"23a04e",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){const s=(0,n.default)(),[c,p]=(0,t.useState)(),_=()=>l.default.fetchProfileImg().then(t=>{var l;return null!==(l=null==t?void 0:t.replace('profile_small','profile_medium'))&&void 0!==l?l:void 0}).catch(t=>{const l=new Error(t.message);(0,u.reportError)(l,{originalError:t})}).then(p);return(0,o.default)(f.USER_PHOTO_UPDATED,_),(0,t.useEffect)(()=>{s&&_()},[s]),c};var t=r(d[0]),l=babelHelpers.interopRequireDefault(r(d[1])),u=r(d[2]),o=babelHelpers.interopRequireDefault(r(d[3])),n=babelHelpers.interopRequireDefault(r(d[4])),f=r(d[5])}),"26c095",["d7ed8e","c1939d","5511db","ddf215","3085ee","23a04e"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if((0,n.useContext)(o.LinariaExperimentContext))return(0,f.jsx)(b.BaseHeaderLink,{...t,linariaClassnames:h});return(0,f.jsx)(p,{...t})};r(d[0]);var n=babelHelpers.interopRequireWildcard(r(d[1])),t=r(d[2]),s=r(d[3]),l=r(d[4]),o=r(d[5]),c=babelHelpers.interopRequireDefault(r(d[6])),u=r(d[7]),b=r(d[8]),f=r(d[9]);let x;const y={...u.sharedHeaderMenuLinkStylesCssFragments,container:(0,s.cssFragment)(x||(x=(n=>n)`
    ${0}
    font-weight: ${0};
    display: flex;
    align-items: center;
  `),u.sharedHeaderMenuLinkStylesCssFragments.container,c.default.typography.weightBook400)},h={container:"c1iyjvyv",label:"ld7h8km",badge:"b1xexnrd",after:"a1ic66dt",container_standard:"cxgxr36",container_immersive:"c11luhwk",badge_standard:"b19hyxd0",badge_immersive:"bzso9fp",before:"beln8dh"},p=(0,l.withStyles)((0,t.cssFragmentsObjToStylesFn)(y))(b.BaseHeaderLink)}),"2d815f",["f03cc4","d7ed8e","0acceb","5f1f1f","bf663a","d917d7","a2ecf6","e08d20","ba4849","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){const u=!(0,n.hasClientHydrateCompleted)(),[p,b]=(0,t.useState)(()=>{var t;return u&&null!==(t=(0,o.default)())&&void 0!==t?t:s()}),c=()=>b(s());return(0,t.useEffect)(c,[]),(0,l.default)(f.LOGGED_IN,c),(0,l.default)(f.LOGGED_OUT,c),p};var t=r(d[0]),u=babelHelpers.interopRequireDefault(r(d[1])),l=babelHelpers.interopRequireDefault(r(d[2])),n=r(d[3]),f=r(d[4]),o=babelHelpers.interopRequireDefault(r(d[5]));function s(){return!!u.default.isLoggedIn()}}),"3085ee",["d7ed8e","c1939d","ddf215","5a2ed0","23a04e","604f92"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){if((0,t.useContext)(u.LinariaExperimentContext))return(0,f.jsx)(b.BaseHeaderLink,{...n,linariaClassnames:h});return(0,f.jsx)(_,{...n})};r(d[0]);var t=babelHelpers.interopRequireWildcard(r(d[1])),n=r(d[2]),s=r(d[3]),l=r(d[4]),u=r(d[5]),c=babelHelpers.interopRequireDefault(r(d[6])),o=r(d[7]),b=r(d[8]),f=r(d[9]);let y;const p={...o.sharedHeaderMenuLinkStylesCssFragments,container:(0,s.cssFragment)(y||(y=(t=>t)`
    ${0}
    font-weight: ${0};
    display: flex;
    align-items: center;
  `),o.sharedHeaderMenuLinkStylesCssFragments.container,c.default.typography.weightMedium600)},h={container:"c1b2ssu5",label:"l1ql0u4u",badge:"bgh3vnd",after:"a90wtny",container_standard:"c1g2wjql",container_immersive:"c138yemz",badge_standard:"b1fqacje",badge_immersive:"b1ql4qht",before:"b1i65uvm"},_=(0,l.withStyles)((0,n.cssFragmentsObjToStylesFn)(p))(b.BaseHeaderLink)}),"367d42",["f03cc4","d7ed8e","0acceb","5f1f1f","bf663a","d917d7","a2ecf6","e08d20","ba4849","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BaseProfileButton=function({linariaClassnames:t,badge:p=!1,expanded:_,href:v,id:x,onPress:y,src:R,css:h,styles:F,dataTestId:j,refForFocus:q}){const C=(0,c.useCx)(),H=!!p,w=!(0,n.default)(p)&&H,D='number'==typeof p;let P;P=H&&D?l.default.t('simple_nav.header.menu_label_with_notification_count',{smart_count:p}):H&&!D?l.default.t('simple_nav.header.menu_label_with_notification_boolean'):l.default.t('simple_nav.header.user_menu_label');return(0,f.jsxs)(s.default,{className:C(null==t?void 0:t.container,_?null==t?void 0:t.container_expanded:null==t?void 0:t.container_collapsed),...(0,b.maybeRwsCss)(h,null==F?void 0:F.container,_?null==F?void 0:F.container_expanded:null==F?void 0:F.container_collapsed),"aria-expanded":_,"aria-label":P,href:v,onClick:y,id:x,refForFocus:q,...j?{'data-testid':j}:void 0,children:[(0,f.jsx)("div",{className:C(null==t?void 0:t.icon),...(0,b.maybeRwsCss)(h,null==F?void 0:F.icon),children:(0,f.jsx)(o.default,{size:16,effectiveStrokeWidth:1.5,decorative:!0})}),(0,f.jsx)("div",{className:C(null==t?void 0:t.face),...(0,b.maybeRwsCss)(h,null==F?void 0:F.face),children:R?(0,f.jsx)("img",{className:C(null==t?void 0:t.faceImage),...(0,b.maybeRwsCss)(h,null==F?void 0:F.faceImage),src:R,alt:""}):(0,f.jsx)(u.default,{size:"100%",decorative:!0})}),H&&(0,f.jsx)("div",{className:C(null==t?void 0:t.badge,D?null==t?void 0:t.badge_numeric:null==t?void 0:t.badge_empty,w&&(null==t?void 0:t.badge_appear),_&&(null==t?void 0:t.badge_expanded)),...(0,b.maybeRwsCss)(h,null==F?void 0:F.badge,D?null==F?void 0:F.badge_numeric:null==F?void 0:F.badge_empty,w&&(null==F?void 0:F.badge_appear),_&&(null==F?void 0:F.badge_expanded)),children:p})]})},e.styleFragments=e.baseProfileButtonStylesFn=void 0;babelHelpers.interopRequireDefault(r(d[0]));var l=babelHelpers.interopRequireDefault(r(d[1])),n=babelHelpers.interopRequireDefault(r(d[2])),t=babelHelpers.interopRequireWildcard(r(d[3])),s=babelHelpers.interopRequireDefault(r(d[4])),o=babelHelpers.interopRequireDefault(r(d[5])),u=babelHelpers.interopRequireDefault(r(d[6])),c=r(d[7]),b=r(d[8]),p=babelHelpers.interopRequireDefault(r(d[9])),f=r(d[10]);let _,v,x,y,R,h,F,j,q=l=>l;const C={container:(0,p.default)(_||(_=q`
    ${0}
  `),t.buttonResetStylesLinaria),container_collapsed:(0,p.default)(v||(v=q``)),container_expanded:(0,p.default)(x||(x=q``)),badge:(0,p.default)(y||(y=q``)),badge_appear:(0,p.default)(R||(R=q``)),badge_expanded:(0,p.default)(h||(h=q``)),after:(0,p.default)(F||(F=q``)),icon:(0,p.default)(j||(j=q``))};e.styleFragments=C;const H=(0,b.deprecatedExtendableStylesFn)('BaseProfileButtonProps',()=>({container:(0,t.default)(),container_collapsed:{},container_expanded:{},badge:{},badge_appear:{},badge_expanded:{},after:{},icon:{}}));e.baseProfileButtonStylesFn=H}),"3d3dcd",["d7ed8e","6898d5","231682","7ade3a","62c3b1","09c0a8","8bb4d8","5f1f1f","0acceb","879685","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=babelHelpers.interopRequireDefault(r(d[0])),o=babelHelpers.interopRequireDefault(r(d[1])),s=babelHelpers.interopRequireDefault(r(d[2])),n=r(d[3]);const u={onSubmit:()=>{},inline:!1,noValidate:!1,setForceSubmitMethod(){}};class l extends t.default.Component{constructor(t){super(t),this.setFormSubmit=this.setFormSubmit.bind(this)}setFormSubmit(t){const{setForceSubmitMethod:o}=this.props;if(t){const s=()=>{this.setState({rerenderKey:+new Date},()=>{setTimeout(()=>{t.submit()},0)})};s.bind(this),o(s)}}render(){var t;const{children:o,formURL:u,inline:l,noValidate:b,onSubmit:f}=this.props,h={display:l?'inline':void 0};return(0,n.jsxs)("form",{action:u,method:"POST",onSubmit:f,ref:this.setFormSubmit,style:h,noValidate:b,"data-testid":"auth-form",children:[(0,n.jsx)(s.default,{},null===(t=this.state)||void 0===t?void 0:t.rerenderKey),o]})}}l.defaultProps=u;var b=(0,o.default)('AuthForm',['onSubmit'])(l);e.default=b}),"3ee0e9",["d7ed8e","bc1c90","b7b56d","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseHeaderContentContainerStylesFn=void 0,e.default=function({button:t,css:s,links:o,styles:c,actionTray:u}){return(0,l.jsxs)("nav",{...s(c.container),"aria-label":n.default.t('simple_nav.header.profile_menu_accessibility_label'),children:[o&&(0,l.jsx)("div",{...s(c.links),children:o}),(0,l.jsx)("div",{...s(c.button),children:t}),u&&(0,l.jsx)("div",{...s(c.actionTray),children:u})]})};babelHelpers.interopRequireDefault(r(d[0]));var n=babelHelpers.interopRequireDefault(r(d[1])),t=r(d[2]),l=r(d[3]);const s=(0,t.extendableStyleFn)(()=>({container:{},links:{},button:{},actionTray:{}}));e.baseHeaderContentContainerStylesFn=s}),"5775a3",["d7ed8e","6898d5","c27e82","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.brandColorStyleLinaria=function(n="color"){return(0,t.cssFragment)(o||(o=s`
    ${0}: ${0};

    @supports (--a: a) {
      ${0}: var(${0}, ${0});
    } ;
  `),n,u.default.palette.rausch,n,l.default,u.default.palette.rausch)},e.default=function(t,u="color"){return{[u]:t.palette.rausch,'@supports(--a:a)':{[u]:`var(${l.default}, ${t.palette.rausch})`}}};var t=r(d[0]),u=babelHelpers.interopRequireDefault(r(d[1])),l=babelHelpers.interopRequireDefault(r(d[2]));let o,s=t=>t}),"59b568",["5f1f1f","a2ecf6","9f6c27"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return t.default.get('isCdnSafeLoggedIn')};var t=babelHelpers.interopRequireDefault(r(d[0]))}),"604f92",["05b07c"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;babelHelpers.interopRequireDefault(r(d[0]));var t=r(d[1]);var n=function(n){if((function(t){return'href'in t&&!!t.href})(n)){const{children:u,refForFocus:o,...f}=n;return(0,t.jsx)("a",{...f,ref:o,children:u})}const{children:u,refForFocus:o,...f}=n;return(0,t.jsx)("button",{type:"button",...f,ref:o,children:u})};e.default=n}),"62c3b1",["d7ed8e","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=(0,babelHelpers.interopRequireDefault(r(d[0])).default)({svgContents:"<path d=\"m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z\" />",svgProps:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},'IcCompactGlobe16',{defaultSize:16});e.default=t}),"735468",["42b5b2"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.clearStorageForLogout=function(){try{window.sessionStorage.clear()}catch(o){}try{window.localStorage.clear()}catch(o){}try{(window.indexedDB||window.msIndexedDB).deleteDatabase('localforage')}catch(o){}}}),"7a313f",[]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.buttonResetStylesLinaria=void 0,e.default=function(){return{appearance:'none',background:'transparent',border:0,color:'inherit',cursor:'pointer',display:'inline-block',fontFamily:'inherit',fontSize:'inherit',fontWeight:'inherit',lineHeight:'inherit',margin:0,outline:0,overflow:'visible',padding:0,textAlign:'inherit',textDecoration:'none',userSelect:'auto',...(0,t.resetFocusStyles)()}};var t=r(d[0]),n=r(d[1]),o=r(d[2]);let l;const s=(0,n.cssFragment)(l||(l=(t=>t)`
  appearance: none;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  outline: 0;
  overflow: visible;
  padding: 0;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  ${0}
`),o.resetFocusStyles);e.buttonResetStylesLinaria=s}),"7ade3a",["1cfcd9","5f1f1f","424585"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(u){return(0,t.jsx)(l.default,{loader:n,renderPlaceholder:l.renderNull,...u})};babelHelpers.interopRequireDefault(r(d[0]));var l=babelHelpers.interopRequireWildcard(r(d[1])),t=r(d[2]);function n(){return r(d[4])(d[3],"./LocaleSelectorModalContainer").then(babelHelpers.interopRequireWildcard).then(l=>l.default||l)}}),"816e86",["d7ed8e","58c24c","721ed1","da2c45","b8ad06"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ProfileButtonMenuBounds=void 0;const t=(0,r(d[0]).createUIKey)('ProfileButtonMenuBounds',{getDefault:()=>{}});e.ProfileButtonMenuBounds=t}),"82c863",["978c20"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sharedHeaderMenuStylesCssFragments=e.default=void 0;var t=r(d[0]),o=babelHelpers.interopRequireDefault(r(d[1])),n=r(d[2]),s=r(d[3]),l=r(d[4]);let p,u,c,h=t=>t;const x={...s.BaseHeaderMenuCssFragments,container:(0,t.cssFragment)(p||(p=h`
    ${0}
    background: ${0};
    border-radius: ${0};
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
    color: ${0};
    display: none;
    margin-top: ${0}px;
    padding: 8px 0;
    position: absolute;
    top: 50%;
    right: 0;
    max-height: calc(100vh - ${0}px);
    overflow-y: auto;
    z-index: 2;
  `),s.BaseHeaderMenuCssFragments.container,o.default.palette.white,o.default.cornerRadius.medium12px.borderRadius,o.default.palette.hof,l.HEADER_HEIGHT/2-6,l.HEADER_HEIGHT+20),container_open:(0,t.cssFragment)(u||(u=h`
    ${0}
    display: block;
  `),s.BaseHeaderMenuCssFragments.container_open),container_noJs:(0,t.cssFragment)(c||(c=h`
    ${0}

    &:target {
      display: block;
    }

    &:target + [href='#'] {
      cursor: default;
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  `),s.BaseHeaderMenuCssFragments.container_noJs)};e.sharedHeaderMenuStylesCssFragments=x;var H=(0,n.extendStyles)(s.baseHeaderMenuStylesFn,({dls19:t})=>({container:{background:t.palette.white,borderRadius:t.cornerRadius.medium,boxShadow:'0 2px 16px rgba(0, 0, 0, 0.12)',color:t.palette.hof,display:'none',marginTop:l.HEADER_HEIGHT/2-6,padding:'8px 0',position:'absolute',top:'50%',right:0,maxHeight:`calc(100vh - ${l.HEADER_HEIGHT+20}px)`,overflowY:'auto',zIndex:2},container_open:{display:'block'},container_noJs:{':target':{display:'block'},':target + [href="#"]':{cursor:'default',height:'100%',left:0,position:'fixed',top:0,width:'100%',zIndex:1}}}));e.default=H}),"8734f0",["5f1f1f","a2ecf6","c27e82","b6021e","5a16cc"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),o=r(d[1]),l=babelHelpers.interopRequireDefault(r(d[2])),c=r(d[3]),f=r(d[4]);let u,p,n,b=t=>t;const s={component:(0,o.cssFragment)(u||(u=b`
    border-color: ${0};
    background: ${0};
    color: ${0};
    ${0}

    ${0}

    &:active {
      border-color: ${0};
      background: ${0};
      color: ${0};
    }

    &:disabled {
      border-color: ${0};
      background: ${0};
      color: ${0};
    }
  `),l.default.palette.hof,l.default.palette.white,l.default.palette.hof,(0,f.getKeyboardFocusSelectors)((0,o.cssFragment)(p||(p=b`
      border-color: ${0};
      color: ${0};
      box-shadow: 0 0 0 2px ${0}, 0 0 0 4px rgba(255, 255, 255, 0.8);
    `),l.default.palette.hof,l.default.palette.hof,l.default.palette.hof)),(0,c.nonTouchDeviceHover)((0,o.cssFragment)(n||(n=b`
      border-color: ${0};
      background: ${0};
      color: ${0};
    `),l.default.palette.black,l.default.palette.faint,l.default.palette.hof)),l.default.palette.black,l.default.palette.faint,l.default.palette.hof,l.default.palette.deco,l.default.palette.white,l.default.palette.deco)};var $=(0,t.cssFragmentsObjToStylesFn)(s);e.default=$}),"8ac535",["0acceb","5f1f1f","a2ecf6","2b401c","90390a"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=(0,babelHelpers.interopRequireDefault(r(d[0])).default)({svgContents:"<path d=\"m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z\" />",svgProps:{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"}},'IcCompactHostProfile16',{defaultSize:16});e.default=t}),"8bb4d8",["42b5b2"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(l,o=!1){const{setFalse:s,setTrue:f,toggle:c,value:p}=(0,n.default)(o),v=(0,u.useInitialRender)(),M="#"+l,_=v?M:void 0;return(0,t.useEffect)(()=>{v&&window.location.hash===M&&f()},[M,v,f]),{isOpen:p,openMenu:f,closeMenu:s,toggleMenu:c,href:_}};var t=r(d[0]),n=babelHelpers.interopRequireDefault(r(d[1])),u=r(d[2])}),"8c5c21",["d7ed8e","b8f60b","1af765"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if((0,n.useContext)(c.LinariaExperimentContext))return(0,f.jsx)(u.BaseHeaderMenu,{...t,linariaClassNames:_});return(0,f.jsx)(h,{...t})};r(d[0]);var n=babelHelpers.interopRequireWildcard(r(d[1])),t=r(d[2]),s=r(d[3]),o=r(d[4]),c=r(d[5]),l=r(d[6]),u=r(d[7]),f=r(d[8]);let x;const p={...l.sharedHeaderMenuStylesCssFragments,container:(0,o.cssFragment)(x||(x=(n=>n)`
    ${0}
    min-width: 240px;
  `),l.sharedHeaderMenuStylesCssFragments.container)},_={container:"c1ixqffw",container_open:"c3i7glo",container_noJs:"c39hl9j"},h=(0,t.withStyles)((0,s.cssFragmentsObjToStylesFn)(p))(u.BaseHeaderMenu)}),"b4adc2",["f03cc4","d7ed8e","bf663a","0acceb","5f1f1f","d917d7","8734f0","b6021e","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseHeaderMenuStylesFn=e.BaseHeaderMenuCssFragments=e.BaseHeaderMenu=void 0;var n=babelHelpers.interopRequireWildcard(r(d[0])),s=babelHelpers.interopRequireDefault(r(d[1])),t=babelHelpers.interopRequireDefault(r(d[2])),l=babelHelpers.interopRequireDefault(r(d[3])),o=r(d[4]),u=r(d[5]),c=r(d[6]),b=r(d[7]);let f,p,H,v=n=>n;const F={container:(0,u.cssFragment)(f||(f=v``)),container_open:(0,u.cssFragment)(p||(p=v``)),container_noJs:(0,u.cssFragment)(H||(H=v``))};e.BaseHeaderMenuCssFragments=F;const _=(0,t.default)('HeaderMenu',[])((function({linariaClassNames:t,children:f,id:p,isOpen:H,dataTestId:v,css:F,styles:_}){const M=(0,u.useCx)(),y=(0,n.useRef)(null),R=(0,o.useInitialRender)()&&!!p,x=H||R;(0,n.useEffect)(()=>{H&&y.current&&(0,l.default)(y.current)},[H]);const C=R&&(0,b.jsx)("a",{href:"#","aria-label":s.default.t('shared.Close')});return x?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:M(null==t?void 0:t.container,H&&(null==t?void 0:t.container_open),R&&(null==t?void 0:t.container_noJs)),...(0,c.maybeRwsCss)(F,null==_?void 0:_.container,H&&(null==_?void 0:_.container_open),R&&(null==_?void 0:_.container_noJs)),ref:y,tabIndex:-1,id:p,...v?{'data-testid':v}:void 0,children:f}),C]}):null}));e.BaseHeaderMenu=_;const M=(0,c.deprecatedExtendableStylesFn)('InternalHeaderMenu',(0,c.cssFragmentsObjToStylesFn)(F));e.baseHeaderMenuStylesFn=M}),"b6021e",["d7ed8e","6898d5","bc1c90","4efd64","1af765","5f1f1f","0acceb","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=babelHelpers.interopRequireDefault(r(d[0])),n=babelHelpers.interopRequireDefault(r(d[1])),u=r(d[2]);class l extends t.default.Component{constructor(...t){super(...t),this.state={token:null}}componentDidMount(){this.setState({token:(0,n.default)()})}render(){const{token:t}=this.state;return t?(0,u.jsx)("input",{type:"hidden",name:"authenticity_token",value:t}):null}}e.default=l}),"b7b56d",["d7ed8e","f03f3f","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),o=r(d[1]),n=r(d[2]),l=r(d[3]),p=babelHelpers.interopRequireDefault(r(d[4])),s=r(d[5]),c=babelHelpers.interopRequireDefault(r(d[6]));const b=(0,n.extendStyles)(o.baseProfileButtonStylesFn,({dls19:t})=>({container:{alignItems:'center',backgroundColor:t.palette.white,border:"1px solid "+t.palette.deco,borderRadius:'50%',color:t.palette.hof,display:'inline-flex',height:40,width:40,padding:3,position:'relative',verticalAlign:'middle',transition:'box-shadow 0.2s ease',zIndex:1,boxSizing:'border-box',[l.prefersReducedMotionQuery]:{transition:'none'},...(0,p.default)({...(0,s.focusTransitionStyles)(),boxShadow:`0px 0px 0px 2px ${t.palette.hof}, 0px 0px 0px 4px ${t.palette.white}`})},container_collapsed:{':hover':{background:t.palette.faint}},container_expanded:{padding:2,border:"2px solid "+t.palette.hof},badge:{...(0,c.default)(t,'backgroundColor'),boxShadow:"0 0 0 1.5px "+t.palette.white,position:'absolute',zIndex:1},badge_empty:{display:'none'},badge_expanded:{left:43,top:-1},badge_numeric:{borderRadius:9,color:t.palette.white,fontSize:t.typography.base.xs.fontSize,fontWeight:t.typography.weight.bold,height:16,lineHeight:'16px',marginLeft:-14,minWidth:16,padding:'0 5px',textAlign:'center',left:44,top:0},badge_appear:{animationName:{'0%':{transform:'scale(0)'},'100%':{transform:'scale(1)'}},animationDuration:'0.4s',animationTimingFunction:'cubic-bezier(0.175, 0.885, 0.35, 1.1)',[l.prefersReducedMotionQuery]:{animation:'none'}},face:{color:t.palette.foggy,overflow:'hidden',position:'relative',zIndex:1},faceImage:{backgroundColor:'currentcolor',borderRadius:'50%',display:'block',height:'100%',width:'100%'},icon:{display:'none'}}));var u=(0,t.withStyles)(b)(o.BaseProfileButton);e.default=u}),"b9a43c",["bf663a","3d3dcd","c27e82","c6c95d","78ea50","1cfcd9","59b568"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.styleFragments=e.baseHeaderLinkStylesFn=e.BaseHeaderLink=void 0;babelHelpers.interopRequireDefault(r(d[0]));var l=babelHelpers.interopRequireDefault(r(d[1])),n=r(d[2]),s=babelHelpers.interopRequireDefault(r(d[3])),t=r(d[4]),o=babelHelpers.interopRequireWildcard(r(d[5])),u=babelHelpers.interopRequireDefault(r(d[6])),b=r(d[7]),c=r(d[8]);let v,f,_,p,y,R,H,x,C,F=l=>l;const L={container:(0,s.default)(v||(v=F`
    ${0}
  `),o.buttonResetStylesLinaria),container_standard:(0,s.default)(f||(f=F`
    /* stylelint-disable block-no-empty */
  `)),container_immersive:(0,s.default)(_||(_=F``)),label:(0,s.default)(p||(p=F``)),badge:(0,s.default)(y||(y=F``)),badge_standard:(0,s.default)(R||(R=F``)),badge_immersive:(0,s.default)(H||(H=F``)),before:(0,s.default)(x||(x=F``)),after:(0,s.default)(C||(C=F``))};e.styleFragments=L;const k=(0,l.default)('HeaderLink',['onPress'])((function({ariaExpanded:l,ariaLabel:s,after:o,badge:v=!1,badgeLabel:f,before:_,children:p,href:y,id:R,onPress:H,preventClientRouting:x=!1,refForFocus:C,submit:F=!1,dataTestId:L,css:k,styles:h,linariaClassnames:j}){const q=(0,b.useImmersive)(),w=(0,t.useCx)();return(0,c.jsxs)(u.default,{className:w(null==j?void 0:j.container,q?null==j?void 0:j.container_immersive:null==j?void 0:j.container_standard),...(0,n.maybeRwsCss)(k,null==h?void 0:h.container,q?null==h?void 0:h.container_immersive:null==h?void 0:h.container_standard),...F?{type:'submit'}:void 0,"aria-expanded":l,"aria-label":s,"data-no-client-routing":x?'':void 0,"data-testid":L,href:y,id:R,onClick:H,refForFocus:C,children:[_&&(0,c.jsx)("div",{className:w(null==j?void 0:j.before),...(0,n.maybeRwsCss)(k,null==h?void 0:h.before),children:_}),(0,c.jsxs)("div",{className:w(null==j?void 0:j.label),...(0,n.maybeRwsCss)(k,null==h?void 0:h.label),children:[p,v&&(0,c.jsx)("div",{className:w(null==j?void 0:j.badge,q?null==j?void 0:j.badge_immersive:null==j?void 0:j.badge_standard),...(0,n.maybeRwsCss)(k,null==h?void 0:h.badge,q?null==h?void 0:h.badge_immersive:null==h?void 0:h.badge_standard),"aria-label":f})]}),o&&(0,c.jsx)("div",{className:w(null==j?void 0:j.after),...(0,n.maybeRwsCss)(k,null==h?void 0:h.after),children:o})]})}));e.BaseHeaderLink=k;const h=(0,n.deprecatedExtendableStylesFn)('BaseHeaderLinkProps',()=>({container:(0,o.default)(),container_standard:{},container_immersive:{},label:{},badge:{},badge_standard:{},badge_immersive:{},before:{},after:{}}));e.baseHeaderLinkStylesFn=h}),"ba4849",["d7ed8e","bc1c90","0acceb","879685","5f1f1f","7ade3a","62c3b1","421e67","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(d[0]),n=r(d[1]),l=r(d[2]),o=babelHelpers.interopRequireWildcard(r(d[3]));const s=(0,n.extendStyles)(o.baseHeaderContentContainerStylesFn,()=>({container:{position:'relative',display:'flex',alignItems:'center',justifyContent:'flex-end',height:l.HEADER_HEIGHT},links:{display:'flex',flex:'auto',justifyContent:'flex-end',marginRight:8},actionTray:{position:'fixed',bottom:40,right:40,zIndex:100}}));var f=(0,t.withStyles)(s)(o.default);e.default=f}),"ccd749",["bf663a","c27e82","5a16cc","5775a3"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sharedHeaderMenuLinkStylesCssFragments=e.default=void 0;var t=r(d[0]),l=babelHelpers.interopRequireDefault(r(d[1])),o=r(d[2]),s=r(d[3]),n=babelHelpers.interopRequireDefault(r(d[4])),p=r(d[5]),c=r(d[6]),f=babelHelpers.interopRequireWildcard(r(d[7]));let u,h,y,b,x,F=t=>t;const $={...c.styleFragments,container:(0,s.cssFragment)(u||(u=F`
    ${0}
    ${0}

    color: ${0};
    display: flex;
    padding: 12px 16px;
    white-space: nowrap;
    width: 100%;

    &:hover:not(:active) {
      background-color: ${0};
    }
    ${0}
  `),c.styleFragments.container,n.default.typography.baseMedium14px,n.default.palette.hof,n.default.palette.faint,(0,p.getKeyboardFocusSelectors)((0,s.cssFragment)(h||(h=F`
      ${0}

      box-shadow: inset 0 0 0 2px ${0};
    `),(0,p.getFocusTransitionStyles)(),n.default.palette.hof))),label:(0,s.cssFragment)(y||(y=F`
    ${0}
    flex: 1 0 auto;
  `),c.styleFragments.label),badge:(0,s.cssFragment)(b||(b=F`
    ${0}
    ${0}

    border-radius: 50%;
    display: inline-block;
    height: 6px;
    left: 1px;
    margin-right: -6px;
    position: relative;
    right: 6px;
    top: -2px;
    vertical-align: top;
    width: 6px;
  `),c.styleFragments.badge,(0,f.brandColorStyleLinaria)('background-color')),after:(0,s.cssFragment)(x||(x=F`
    ${0}
    ${0}

    color: ${0};
    display: inline-block;
    flex: 0 0 auto;
    font-weight: ${0};
    margin-left: ${0};
  `),c.styleFragments.after,n.default.typography.baseSmall12px,n.default.palette.foggy,n.default.typography.weightBook400,n.default.spacing.micro16px)};e.sharedHeaderMenuLinkStylesCssFragments=$;var k=(0,t.extendStyles)(c.baseHeaderLinkStylesFn,({dls19:t})=>({container:{...t.typography.base.md,color:t.palette.hof,display:'flex',padding:'12px 16px',whiteSpace:'nowrap',width:'100%',':hover:not(:active)':{backgroundColor:t.palette.faint},...(0,l.default)({...(0,o.focusTransitionStyles)(),boxShadow:"inset 0px 0px 0px 2px "+t.palette.hof})},label:{flex:'1 0 auto'},badge:{...(0,f.default)(t,'backgroundColor'),borderRadius:'50%',display:'inline-block',height:6,left:1,marginRight:-6,position:'relative',right:6,top:-2,verticalAlign:'top',width:6},after:{...t.typography.base.sm,color:t.palette.foggy,display:'inline-block',flex:'0 0 auto',fontWeight:t.typography.weight.book,marginLeft:t.spacing.primitives.size_small}}));e.default=k}),"e08d20",["c27e82","78ea50","1cfcd9","5f1f1f","a2ecf6","90390a","ba4849","59b568"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;babelHelpers.interopRequireDefault(r(d[0]));var l=r(d[1]),t=babelHelpers.interopRequireDefault(r(d[2])),s=babelHelpers.interopRequireDefault(r(d[3])),n=r(d[4]);var o=(0,l.withStyles)(({dls19:l})=>({icons:{alignItems:'center',display:'flex',height:l.typography.base.md.lineHeight,position:'relative',zIndex:1}}))((function({expanded:l=!1,href:o,label:u,onPress:f,refForFocus:c,css:p,styles:b}){return(0,n.jsx)(s.default,{ariaExpanded:l,ariaLabel:u,href:o,onPress:f,refForFocus:c,children:(0,n.jsx)("div",{...p(b.icons),"aria-hidden":!0,children:(0,n.jsx)(t.default,{decorative:!0})})})}));e.default=o}),"ecdfe7",["d7ed8e","bf663a","735468","eef2ad","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(s){return(0,t.jsx)(n.BaseHeaderLink,{...s,linariaClassnames:c})};babelHelpers.interopRequireDefault(r(d[0])),r(d[1]);var n=r(d[2]),s=r(d[3]),t=(r(d[4]),r(d[5]));const c={...s.classNames,container_standard:"c177491c",container_immersive:"cnfwnvw"}}),"eef2ad",["d7ed8e","f03cc4","ba4849","1acae3","915fa3","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n){if((0,t.useContext)(f.LinariaExperimentContext))return(0,h.jsx)(b.BaseProfileButton,{...n,linariaClassnames:B});return(0,h.jsx)(R,{...n})};r(d[0]);var t=babelHelpers.interopRequireWildcard(r(d[1])),n=babelHelpers.interopRequireDefault(r(d[2])),o=r(d[3]),l=r(d[4]),p=r(d[5]),s=babelHelpers.interopRequireDefault(r(d[6])),u=r(d[7]),f=r(d[8]),c=babelHelpers.interopRequireDefault(r(d[9])),x=r(d[10]),b=r(d[11]),h=r(d[12]);let y,w,$,_,v,S,k,F,j,q=t=>t;const z={...b.styleFragments,container:(0,s.default)(y||(y=q`
    ${0}
    align-items: center;
    background-color: ${0};
    border: 1px solid ${0};
    border-radius: 21px;
    color: ${0};
    display: inline-flex;
    height: 42px;
    padding: 5px 5px 5px 12px;
    position: relative;
    vertical-align: middle;
    transition: box-shadow 0.2s ease;
    z-index: 1;

    ${0} {
      transition: none;
    }
    ${0}
  `),b.styleFragments.container,c.default.palette.white,c.default.palette.deco,c.default.palette.hof,x.prefersReducedMotionQuery,(0,n.default)({...(0,o.focusTransitionStyles)(),boxShadow:`0 0 0 2px ${c.default.palette.hof}, 0 0 0 4px ${c.default.palette.white};`})),container_collapsed:(0,s.default)(w||(w=q`
    ${0}

    &:hover {
      box-shadow: ${0};
    }
  `),b.styleFragments.container_collapsed,c.default.elevation.tertiary.boxShadow),container_expanded:(0,s.default)($||($=q`
    ${0}
    box-shadow: ${0};
  `),b.styleFragments.container_expanded,c.default.elevation.tertiary.boxShadow),badge:(0,s.default)(_||(_=q`
    ${0}
    ${0}
    box-shadow: 0 0 0 1.5px ${0};
    position: absolute;
    z-index: 1;
  `),b.styleFragments.badge,(0,l.brandColorStyleLinaria)('background-color'),c.default.palette.white),badge_empty:(0,s.default)(v||(v=q`
    border-radius: 50%;
    height: 10px;
    min-width: 10px;
    right: 4px;
    top: 2px;
  `)),badge_numeric:(0,s.default)(S||(S=q`
    border-radius: 9px;
    color: ${0};
    font-size: ${0};
    font-weight: ${0};
    height: 16px;
    left: 100%;
    line-height: 16px;
    margin-left: -14px;
    min-width: 16px;
    padding: 0 5px;
    text-align: center;
    top: -2px;
  `),c.default.palette.white,c.default.typography.baseExtraSmall10px.fontSize,c.default.typography.weightBold800),badge_appear:(0,s.default)(k||(k=q`
    ${0}

    animation-name: appear;
    @keyframes appear {
      0% {
        transform: scale(0);
      }

      100% {
        transform: scale(1);
      }
    }
    animation-duration: 0.4s;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.35, 1.1);

    ${0} {
      animation: none;
    }
  `),b.styleFragments.badge_appear,x.prefersReducedMotionQuery),face:(0,s.default)(F||(F=q`
    color: ${0};
    flex: 0 0 30px;
    height: 30px;
    margin-left: 12px;
    overflow: hidden;
    position: relative;
    width: 30px;
    z-index: 1;
  `),c.default.palette.foggy),faceImage:(0,s.default)(j||(j=q`
    /* stylelint-disable value-keyword-case */
    background-color: currentcolor;
    /* stylelint-enable value-keyword-case */
    border-radius: 50%;
    display: block;
    height: 100%;
    width: 100%;
  `))},R=(0,u.withStyles)((0,p.cssFragmentsObjToStylesFn)(z))(b.BaseProfileButton),B={container:"c1grjlav",container_collapsed:"crawnjq",container_expanded:"c2ax86p",badge:"b10s36so",badge_empty:"blr519i",badge_numeric:"b10i5eq",badge_appear:"bbchxia",face:"fp36fst",faceImage:"fnky2vc"}}),"fbbec7",["f03cc4","d7ed8e","78ea50","1cfcd9","59b568","0acceb","879685","bf663a","d917d7","a2ecf6","90390a","3d3dcd","721ed1"]);
__d((function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=babelHelpers.interopRequireWildcard(r(d[0])),n=babelHelpers.interopRequireDefault(r(d[1])),t=r(d[2]),s=babelHelpers.interopRequireDefault(r(d[3])),u=babelHelpers.interopRequireDefault(r(d[4])),o=babelHelpers.interopRequireDefault(r(d[5])),p=r(d[6]);var f=(0,t.withStyles)(()=>({container:{position:'relative',display:'inline'}}))((function({css:t,initialOpen:f=!1,loggingID:c,onPress:b,styles:v}){const{isOpen:h,toggleMenu:D,href:R}=(0,o.default)("simple-header-locale-menu-combined",f),_=(0,l.useRef)(null),q=(0,l.useCallback)(()=>{D(),null==b||b()},[b,D]);return(0,p.jsxs)("div",{...t(v.container),children:[(0,p.jsx)(u.default,{expanded:h,href:R,label:n.default.t('simple_nav.header.locale_settings'),onPress:q,refForFocus:_}),h&&(0,p.jsx)(s.default,{isOpen:h,loggingID:c,onClose:q})]})}));e.default=f}),"fcfad1",["d7ed8e","6898d5","bf663a","816e86","ecdfe7","8c5c21","721ed1"]);
__r("6898d5").extend({"simple_nav.header.menu_label_with_notification_count":"Main navigation menu. %{smart_count} notification.||||Main navigation menu. %{smart_count} notifications.","simple_nav.header.menu_label_with_notification_boolean":"Main navigation menu. Has notifications.","simple_nav.header.user_menu_label":"Main navigation menu","simple_nav.header.profile_menu_accessibility_label":"Profile","shared.Close":"Close","simple_nav.header.locale_settings":"Choose a language and currency"});
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/web/common/68c9.77f0d074d4.js.map