!function(e){var n={};function t(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(s,i,function(n){return e[n]}.bind(null,i));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){},,function(e,n,t){"use strict";t.r(n),t.d(n,"coin",(function(){return q})),t.d(n,"peasantsButton",(function(){return F})),t.d(n,"merceneariesButton",(function(){return j})),t.d(n,"priestsButton",(function(){return O})),t.d(n,"knightsButton",(function(){return U})),t.d(n,"paladinsButton",(function(){return I})),t.d(n,"dragonsButton",(function(){return A})),t.d(n,"cityButton",(function(){return V})),t.d(n,"cityButtonContent",(function(){return X})),t.d(n,"cityPriceCounter",(function(){return ne})),t.d(n,"cityPowerCounter",(function(){return te})),t.d(n,"gold",(function(){return re})),t.d(n,"military",(function(){return ae})),t.d(n,"priests",(function(){return le})),t.d(n,"peasantsPriceCounter",(function(){return ye})),t.d(n,"merceneariesPriceCounter",(function(){return ve})),t.d(n,"priestsPriceCounter",(function(){return me})),t.d(n,"knightsPriceCounter",(function(){return Le})),t.d(n,"paladinsPriceCounter",(function(){return ge})),t.d(n,"dragonsPriceCounter",(function(){return he})),t.d(n,"tileAll1",(function(){return Fe})),t.d(n,"tileAll2",(function(){return je})),t.d(n,"tileClicker1",(function(){return Oe})),t.d(n,"tileClicker2",(function(){return Ue})),t.d(n,"tilePeasants1",(function(){return Ie})),t.d(n,"tilePeasants2",(function(){return Ae})),t.d(n,"tileMercenearies1",(function(){return Ke})),t.d(n,"tileMercenearies2",(function(){return Qe})),t.d(n,"tilePriests1",(function(){return We})),t.d(n,"tilePriests2",(function(){return Ne})),t.d(n,"tileKnights1",(function(){return ze})),t.d(n,"tileKnights2",(function(){return Je})),t.d(n,"tilePaladins1",(function(){return Ve})),t.d(n,"tilePaladins2",(function(){return Xe})),t.d(n,"tileDragons1",(function(){return Ye})),t.d(n,"tileDragons2",(function(){return Ze})),t.d(n,"upgradeTitle",(function(){return $e})),t.d(n,"upgradeDescription",(function(){return en}));t(0);function s(e,n){re>=e&&(n.classList.remove("section__button--buy"),n.classList.add("section__button--available"))}function i(e,n){re<=e&&(n.classList.remove("section__button--available"),n.classList.add("section__button--buy"))}function r(e,n,t){re>=e&&ae>=n&&(t.classList.remove("section__button--buy"),t.classList.add("section__button--available"))}function a(e,n,t){re<=e&&ae<=n&&(t.classList.remove("section__button--available"),t.classList.add("section__button--buy"))}function o(e,n,t,s,i,r,a){e>=n&&(X.classList.contains(s)||X.classList.contains(i)||X.classList.contains(r)||X.classList.contains(a))&&(t.classList.remove("section__tile--buy"),t.classList.add("section__tile--available"))}function c(e,n,t,s,i,r){e>=n&&(X.classList.contains(s)||X.classList.contains(i)||X.classList.contains(r))&&(t.classList.remove("section__tile--buy"),t.classList.add("section__tile--available"))}function u(e,n,t,s,i){e>=n&&(X.classList.contains(s)||X.classList.contains(i))&&(t.classList.remove("section__tile--buy"),t.classList.add("section__tile--available"))}function l(e,n,t,s){e>=n&&X.classList.contains(s)&&(t.classList.remove("section__tile--buy"),t.classList.add("section__tile--available"))}function d(e){e.classList.remove("section__tile--available"),e.classList.add("section__tile--bought")}function p(){var e,n,t,s,i;l(re,75e3,Fe,"city--lv5"),o(ae,500,je,"city--lv2","city--lv3","city--lv4","city--lv5"),o(re,2500,Oe,"city--lv2","city--lv3","city--lv4","city--lv5"),c(re,1e4,Ue,"city--lv3","city--lv4","city--lv5"),o(re,5e3,Ie,"city--lv2","city--lv3","city--lv4","city--lv5"),c(re,7e3,Ie,"city--lv3","city--lv4","city--lv5"),c(re,1e4,Ke,"city--lv3","city--lv4","city--lv5"),c(re,15e3,Qe,"city--lv3","city--lv4","city--lv5"),e=We,n="city--lv2",t="city--lv3",s="city--lv4",i="city--lv5",re>=5e3&&(X.classList.contains(n)||X.classList.contains(t)||X.classList.contains(s)||X.classList.contains(i))&&le>=15&&(e.classList.remove("section__tile--buy"),e.classList.add("section__tile--available")),c(re,25e3,Ne,"city--lv4","city--lv5"),o(re,8e3,ze,"city--lv2","city--lv3","city--lv4","city--lv5"),u(re,15e3,Je,"city--lv4","city--lv5"),c(re,1e4,Ve,"city--lv3","city--lv4","city--lv5"),o(re,7500,Xe,"city--lv2","city--lv3","city--lv4","city--lv5"),u(re,25e3,Ye,"city--lv4","city--lv5"),l(re,75e3,Ze,"city--lv5")}function _(){s(ye,F),i(ye,F),s(ve,j),i(ve,j),s(me,O),i(me,O),s(Le,U),i(Le,U),s(ge,I),i(ge,I),s(he,A),i(he,A),r(ne,te,V)}function y(){s(ye,F),s(ve,j),s(me,O),s(Le,U),s(ge,I),s(he,A),r(ne,te,V)}function v(){i(ye,F),i(ve,j),i(me,O),i(Le,U),i(ge,I),i(he,A)}function m(e,n,t,s){document.documentElement.style.setProperty("--animation-h3",e),document.documentElement.style.setProperty("--animation-paragraph",n),$e.innerHTML=t,en.innerHTML=s}function L(e){throw new Error('"'+e+'" is read-only')}var g=document.querySelector(".section__button--clicker"),h=document.querySelector(".counter--gold"),q=document.querySelector(".section__coin--js"),f=document.querySelector(".section__image--peasants"),b=document.querySelector(".section__image--mercenearies"),S=document.querySelector(".section__image--priests"),T=document.querySelector(".section__image--knights"),M=document.querySelector(".section__image--paladins"),H=document.querySelector(".section__image--dragons"),C=document.querySelector(".counter--peasant"),E=document.querySelector(".peasants--upgrade"),k=document.querySelector(".counter--merceneary"),G=document.querySelector(".counter--priest"),P=document.querySelector(".priests--js"),R=document.querySelector(".priests--upgrade");R.innerHTML=2;var w=document.querySelector(".priests--description"),x=document.querySelector(".counter--knight"),D=document.querySelector(".counter--paladin"),B=document.querySelector(".counter--dragon"),F=document.querySelector(".section__button--peasant"),j=document.querySelector(".section__button--merceneary"),O=document.querySelector(".section__button--priest"),U=document.querySelector(".section__button--knight"),I=document.querySelector(".section__button--paladin"),A=document.querySelector(".section__button--dragon"),K=document.querySelector(".price--peasant"),Q=document.querySelector(".price--merceneary"),W=document.querySelector(".price--priest"),N=document.querySelector(".price--knight"),z=document.querySelector(".price--paladin"),J=document.querySelector(".price--dragons"),V=document.querySelector(".section__button--city"),X=document.querySelector(".section__content--js"),Y=document.querySelector(".price--city"),Z=document.querySelector(".power--city"),$=document.querySelector(".counter--power"),ee=document.querySelector(".section__paragraph--lv1"),ne=1e3,te=100;X.innerHTML=" Upgrade City to Lv. 2",Y.innerHTML=ne,Z.innerHTML=te;var se='<img class="section__image section__image--city" src="cityLv1.svg" alt="" />',ie=document.querySelector(".section__container--image");document.querySelector(".section__image--city");ie.innerHTML=se;var re=0,ae=0,oe=document.querySelector(".counter--gold-per-second"),ce=0,ue=0,le=0,de=0,pe=0,_e=0,ye=10,ve=100,me=100,Le=300,ge=1e3,he=3e3;function qe(){var e;re+=2*ce,re+=2*ue,re+=10*le,re+=5*de,re+=25*pe,re+=40*_e,h.innerHTML=re,y(),setTimeout((e="section__coin--animated",void q.classList.remove(e)),100)}g.addEventListener("click",(function(){re++,h.innerHTML=re,y(),p(),q.classList.add("section__coin--animated"),Oe.classList.contains("section__tile--bought")&&(re+=C,h.innerHTML=re,y(),p())})),setInterval(qe,1e3),qe(),F.addEventListener("click",(function(){if(re>=ye){ce++,C.innerHTML=ce,re-=ye,h.innerHTML=re;var e=2*ce+2*ue+10*le+5*de+25*pe+40*_e;oe.innerHTML=e,ye=(ye*=1.15).toFixed(0),K.innerHTML=ye,ae+=1,$.innerHTML=ae,_(),f.classList.add("animated"),setTimeout((function(){f.classList.remove("animated")}),500)}})),j.addEventListener("click",(function(){if(re>=ve){ue++,k.innerHTML=ue,re-=ve,h.innerHTML=re;var e=2*ce+2*ue+10*le+5*de+25*pe+40*_e;oe.innerHTML=e,ve=(ve*=1.25).toFixed(0),Q.innerHTML=ve,ae+=10,$.innerHTML=ae,_(),b.classList.add("animated"),setTimeout((function(){b.classList.remove("animated")}),500)}})),O.addEventListener("click",(function(){if(re>=me){le++,G.innerHTML=le,re-=me,h.innerHTML=re;var e=2*ce+2*ue+10*le+5*de+25*pe+40*_e;oe.innerHTML=e,me=(me*=1.3).toFixed(0),W.innerHTML=me,ae+=2,$.innerHTML=ae,_(),S.classList.add("animated"),setTimeout((function(){S.classList.remove("animated")}),500)}})),U.addEventListener("click",(function(){if(re>=Le){de++,x.innerHTML=de,re-=Le,h.innerHTML=re;var e=2*ce+2*ue+10*le+5*de+25*pe+40*_e;if(oe.innerHTML=e,Le=(Le*=1.35).toFixed(0),N.innerHTML=Le,ae+=25,$.innerHTML=ae,_(),T.classList.add("animated"),setTimeout((function(){T.classList.remove("animated")}),500),de%1==0){setInterval((function(){1===Math.floor(2*Math.random())+1&&(re+=30)}),5e3)}}})),I.addEventListener("click",(function(){if(re>=ge){pe++,D.innerHTML=pe,re-=ge,h.innerHTML=re;var e=2*ce+2*ue+10*le+5*de+25*pe+40*_e;if(oe.innerHTML=e,ge=(ge*=1.45).toFixed(0),z.innerHTML=ge,ae+=30,$.innerHTML=ae,_(),M.classList.add("animated"),setTimeout((function(){M.classList.remove("animated")}),500),pe%1==0){setInterval(qe,1e3),qe(),function(){var e=2+pe,n=ce*e+2*ue+10*le+5*de+25*pe+40*_e;oe.innerHTML=n,E.innerHTML=e}()}}})),A.addEventListener("click",(function(){if(re>=he){_e++,B.innerHTML=_e,re-=he,h.innerHTML=re;var e=2*ce+2*ue+10*le+5*de+25*pe+40*_e;oe.innerHTML=e,he=(he*=1.55).toFixed(0),J.innerHTML=he,ae+=100,$.innerHTML=ae,_(),H.classList.add("animated"),setTimeout((function(){H.classList.remove("animated")}),500),_e%1==0&&(ae+=2*_e*le,$.innerHTML=ae,P.innerHTML="Battle Priests",w.innerHTML=" Battle Priests are special units which march to the war under the wings od dragon destruction.",R.innerHTML=2*_e+2)}})),V.addEventListener("click",(function(){if(X.classList.contains("city--lv1")&&re>=ne&&ae>=te){se='<img class="section__image section__image--city-upgrade" src="cityLv1.svg" alt="" />',ie.innerHTML=se,X.innerHTML="Upgrade City to Lv. 3",ee.classList.remove("section__paragraph--lv1"),ee.classList.add("section__paragraph--lv1-deanimated"),X.classList.remove("section__content"),X.classList.add("section__content--deanimated"),setTimeout((function(){X.classList.remove("city--lv1"),X.classList.add("city--lv2"),ee.classList.remove("section__paragraph--lv1-deanimated"),ee.classList.add("section__paragraph--lv1"),X.classList.remove("section__content--deanimated"),X.classList.add("section__content"),se='<img class="section__image section__image--city" src="cityLv2.svg" alt="" />',ie.innerHTML=se,re-=ne,h.innerHTML=re,ne=8e3,te=350,Y.innerHTML=ne,Z.innerHTML=te,a(ne,te,V),v()}),2e3)}else if(X.classList.contains("city--lv2")&&re>=ne&&ae>=te)X.classList.remove("city--lv2"),X.classList.add("city--lv3"),X.innerHTML="Upgrade City to Lv. 4",se='<img class="section__image section__image--city" src="cityLv3.svg" alt="" />',ie.innerHTML=se,re-=ne,h.innerHTML=re,ne=2e4,te=1250,Y.innerHTML=ne,Z.innerHTML=te,a(ne,te,V),v();else if(X.classList.contains("city--lv3")&&re>=ne&&ae>=te)X.classList.remove("city--lv3"),X.classList.add("city--lv4"),X.innerHTML="Upgrade City to Lv. 5",se='<img class="section__image section__image--city" src="cityLv4.svg" alt="" />',ie.innerHTML=se,re-=ne,h.innerHTML=re,ne=1e5,te=5e3,Y.innerHTML=ne,Z.innerHTML=te,a(ne,te,V),v();else if(X.classList.contains("city--lv4")&&re>=ne&&ae>=te){X.classList.remove("city--lv4"),X.classList.add("city--lv5"),X.innerHTML="City Fully upgraded",se='<img class="section__image section__image--city" src="cityLv5.svg" alt="" />',ie.innerHTML=se,document.querySelector(".section__paragraph--city").innerHTML="No Upgrades Left"}}));var fe=document.querySelector(".section__button--all1"),be=document.querySelector(".section__button--all2"),Se=document.querySelector(".section__button--clicker1"),Te=document.querySelector(".section__button--clicker2"),Me=document.querySelector(".section__button--peasants1"),He=document.querySelector(".section__button--peasants2"),Ce=document.querySelector(".section__button--mercenearies1"),Ee=document.querySelector(".section__button--mercenearies2"),ke=document.querySelector(".section__button--priests1"),Ge=document.querySelector(".section__button--priests2"),Pe=document.querySelector(".section__button--knights1"),Re=document.querySelector(".section__button--knights2"),we=document.querySelector(".section__button--paladins1"),xe=document.querySelector(".section__button--paladins2"),De=document.querySelector(".section__button--dragons1"),Be=document.querySelector(".section__button--dragons2"),Fe=document.querySelector(".section__tile--all1"),je=document.querySelector(".section__tile--all2"),Oe=document.querySelector(".section__tile--clicker1"),Ue=document.querySelector(".section__tile--clicker2"),Ie=document.querySelector(".section__tile--peasants1"),Ae=document.querySelector(".section__tile--peasants2"),Ke=document.querySelector(".section__tile--mercenearies1"),Qe=document.querySelector(".section__tile--mercenearies2"),We=document.querySelector(".section__tile--priests1"),Ne=document.querySelector(".section__tile--priests2"),ze=document.querySelector(".section__tile--knights1"),Je=document.querySelector(".section__tile--knights2"),Ve=document.querySelector(".section__tile--paladins1"),Xe=document.querySelector(".section__tile--paladins2"),Ye=document.querySelector(".section__tile--dragons1"),Ze=document.querySelector(".section__tile--dragons2"),$e=document.querySelector(".section__h3--upgrades"),en=document.querySelector(".section__paragraph--upgrades");fe.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Unstopable Power",'Double your current military power. <span class="section__paragraph--required">Required:</span> 75000 Gold <span class="section__paragraph--required">City Lv:</span> 5')})),fe.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Unstopable Power",'Double your current military power. <span class="section__paragraph--required">Required:</span> 75000 Gold <span class="section__paragraph--required">City Lv:</span> 5')})),fe.addEventListener("click",(function(){Fe.classList.contains("section__tile--available")&&($.innerHTML=ae,d(Fe))})),be.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Taxes",'Gain +10 gold per unit <span class="section__paragraph--required">Required:</span> 500 Military Power <span class="section__paragraph--required">City Lv:</span> 2')})),be.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Taxes",'Gain +10 gold per unit <span class="section__paragraph--required">Required:</span> 500 Military Power <span class="section__paragraph--required">City Lv:</span> 2')})),be.addEventListener("click",(function(){je.classList.contains("section__tile--available")&&(C+=(L("peasantsQuantity"),k+=G+=(L("priestsQuantity"),x+=D+=(L("paladinsQuantity"),B))),h.innerHTML=re,d(je))})),Se.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Click, Click",'Clicking generates +1 gold per every peasant <span class="section__paragraph--required">Required:</span> 2500 Gold <span class="section__paragraph--required">City Lv:</span> 2')})),Se.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Click, Click",'Clicking generates +1 gold per every peasant <span class="section__paragraph--required">Required:</span> 2500 Gold <span class="section__paragraph--required">City Lv:</span> 2')})),Se.addEventListener("click",(function(){Oe.classList.contains("section__tile--available")&&d(Oe)})),Te.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Golden Clicks",'Clicking generates +2% of your gold per second <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),Te.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Golden Clicks",'Clicking generates +2% of your gold per second <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),Me.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Militia",'+1 Military Power <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2')})),Me.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Militia",'+1 Military Power <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2')})),He.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Savings",'Every Peasant has a chance for extra 1 gold every 2 seconds <span class="section__paragraph--required">Required:</span> 7000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),He.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Savings",'Every Peasant has a chance for extra 1 gold every 2 seconds <span class="section__paragraph--required">Required:</span> 7000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),Ce.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Bought Force",'Gain military power equal to 5% of your current gold per second <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),Ce.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Bought Force",'Gain military power equal to 5% of your current gold per second <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),Ee.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Double the power",'Double your mercenearies current military power <span class="section__paragraph--required">Required:</span> 15000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),Ee.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Double the power",'Double your mercenearies current military power <span class="section__paragraph--required">Required:</span> 15000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),ke.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Reforms",'Peasants gains +1 gold per second if you have 15 or more priests <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2 <span class="section__paragraph--required">Priests:</span> 15')})),ke.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Reforms",'Peasants gains +1 gold per second if you have 15 or more priests <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2 <span class="section__paragraph--required">Priests:</span> 15')})),Ge.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","True Fire",'Dragons gains +25 military power <span class="section__paragraph--required">Required:</span> 25000 Gold <span class="section__paragraph--required">City Lv:</span> 4')})),Ge.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","True Fire",'Dragons gains +25 military power <span class="section__paragraph--required">Required:</span> 5000 Gold <span class="section__paragraph--required">City Lv:</span> 2')})),Pe.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Spoils Of War",'Knights gains 50 gold instead of 30 on their ability <span class="section__paragraph--required">Required:</span> 8000 Gold <span class="section__paragraph--required">City Lv:</span> 2')})),Pe.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Spoils Of War",'Knights gains 50 gold instead of 30 on their ability <span class="section__paragraph--required">Required:</span> 8000 Gold <span class="section__paragraph--required">City Lv:</span> 2')})),Re.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Fief",'+1 military power for mercenearies per knight <span class="section__paragraph--required">Required:</span> 15000 Gold <span class="section__paragraph--required">City Lv:</span> 4')})),Re.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Fief",'+1 military power for mercenearies per knight <span class="section__paragraph--required">Required:</span> 15000 Gold <span class="section__paragraph--required">City Lv:</span> 4')})),we.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Inspire",'+1 gold to paladins ability <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),we.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Inspire",'+1 gold to paladins ability <span class="section__paragraph--required">Required:</span> 10000 Gold <span class="section__paragraph--required">City Lv:</span> 3')})),xe.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Holy Clicker",'+5 gold per click for every paladin <span class="section__paragraph--required">Required:</span> 7500 Gold <span class="section__paragraph--required">City Lv:</span> 2')})),xe.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Holy Clicker",'+5 gold per click for every paladin <span class="section__paragraph--required">Required:</span> 7500 Gold <span class="section__paragraph--required">City Lv:</span> 2')})),De.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Call To Arms",'Battle priests, knights and paladins gains +1 military power per dragon <span class="section__paragraph--required">Required:</span> 25000 Gold <span class="section__paragraph--required">City Lv:</span> 4')})),De.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Call To Arms",'Battle priests, knights and paladins gains +1 military power per dragon <span class="section__paragraph--required">Required:</span> 25000 Gold <span class="section__paragraph--required">City Lv:</span> 4')})),Be.addEventListener("mouseenter",(function(){return m("appear 0.5s ease-in both","appear 0.5s 0.25s ease-in both","Dragon Might",'Dragons gains +50 military power <span class="section__paragraph--required">Required:</span> 75000 Gold <span class="section__paragraph--required">City Lv:</span> 5')})),Be.addEventListener("mouseleave",(function(){return m("disappear 0.5s ease-in both","disappear 0.5s 0.25s ease-in both","Dragon Might",'Dragons gains +50 military power <span class="section__paragraph--required">Required:</span> 75000 Gold <span class="section__paragraph--required">City Lv:</span> 5')}))}]);