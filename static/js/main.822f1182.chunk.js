(this.webpackJsonppinkroom=this.webpackJsonppinkroom||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/TestPic.4afa283c.jpg"},,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/lolek.1c84f306.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/TestPic.a748dd73.jpg"},,,,,function(e,t,a){e.exports=a.p+"static/media/stylizacjaRzes.966d334d.jpg"},function(e,t,a){e.exports=a.p+"static/media/stylizacjaBrwi.c4066639.jpg"},function(e,t,a){e.exports=a.p+"static/media/stylizacjaPaznokci.c4066639.jpg"},function(e,t,a){e.exports=a.p+"static/media/styliacjaWlosow.a748dd73.jpg"},,,,,function(e,t,a){e.exports=a.p+"static/media/Front_Pic2.3b17fad6.jpg"},function(e,t,a){e.exports=a.p+"static/media/Home_TeamPic_2.e12c0c99.jpg"},function(e,t,a){e.exports=a.p+"static/media/MAPA.0f6fb33e.jpg"},function(e,t,a){e.exports=a.p+"static/media/Contact_MapPic.0f6fb33e.jpg"},function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),l=a.n(r),c=(a(40),a(41),a(42),a(3)),s=a(9),o=a(7),m=a(10),d=a(8),p=a(12),u=a(14),y=function(e){var t;return(e.mainLinksStatus||e.subLinksStatus>0)&&(t=e.navLogoClick),i.a.createElement(c.b,{to:""},i.a.createElement("div",{className:"nav_logoBox",onClick:t},"Pink"))},h=function(e){var t="burgerToggle";return e.buttonStatus&&(t="burgerToggle toggle"),i.a.createElement("div",{className:t,onClick:e.buttonClick},i.a.createElement("div",{className:"burgerLine_1 burgerToggleBar burgerToggleBar_2"}),i.a.createElement("div",{className:"burgerLine_2 burgerToggleBar burgerToggleBar_2"}),i.a.createElement("div",{className:"burgerLine_3 burgerToggleBar burgerToggleBar_2"}))},k=function(e){return i.a.createElement("div",{className:"nav_linkHeader"},i.a.createElement(c.b,{to:e.linkLink},i.a.createElement("div",{onClick:e.linkClick},i.a.createElement("div",null,e.linkHeader))))},E=function(e){return i.a.createElement("div",{className:"nav_linkHeader"},i.a.createElement("div",{onClick:e.linkClick},i.a.createElement("div",null,e.linkHeader)))},g=function(e){var t="nav_mainLinksBox nav_linksDeactive";return e.sidebarStatus&&(t="nav_mainLinksBox nav_linksActive"),i.a.createElement("div",{className:t},i.a.createElement(k,{linkHeader:"Strona g\u0142\xf3wna",linkLink:"",linkClick:e.mainLinks}),i.a.createElement(E,{linkHeader:"Zabiegi",linkClick:e.subLinks}),i.a.createElement(k,{linkHeader:"Cennik",linkLink:"/cennik",linkClick:e.mainLinks}),i.a.createElement(k,{linkHeader:"Um\xf3w wizyt\u0119",linkLink:"/umow_wizyte",linkClick:e.mainLinks}),i.a.createElement(k,{linkHeader:"Nasz zesp\xf3\u0142",linkLink:"/nasz-zespol",linkClick:e.mainLinks}),i.a.createElement(k,{linkHeader:"Kontakt",linkLink:"/kontakt",linkClick:e.mainLinks}))},v=function(e){var t=i.a.createElement("i",{style:{fontSize:"3em",display:e.treatArrowStatus},className:"fas fa-long-arrow-alt-left"});return i.a.createElement("div",{className:"nav_subbarSubBox"},i.a.createElement(k,{linkHeader:"Stylizacja rz\u0119s",linkLink:"/stylizacja-rzes",linkClick:e.subLinkClick}),i.a.createElement(k,{linkHeader:"Stylizacja brwi",linkLink:"/stylizacja-brwi",linkClick:e.subLinkClick}),i.a.createElement(k,{linkHeader:"Stylizacja paznokci",linkLink:"/stylizacja-paznokci",linkClick:e.subLinkClick}),i.a.createElement(k,{linkHeader:"Zabiegi na w\u0142osy",linkLink:"/zabiegi-na-wlosy",linkClick:e.subLinkClick}),i.a.createElement(E,{linkHeader:t,linkClick:e.treatBackArrowClick}))},b=function(e){var t="nav_sidebarBackground nav_sidebarBackground-Deactive";return e.sideBgrStatus&&(t="nav_sidebarBackground nav_sidebarBackground-Active"),i.a.createElement("div",{className:t})},z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).OpenSideBar=function(){window.innerWidth<=1180?a.state.subbarOpen?(a.setState((function(e){return{sideBgrStatus:!e.sideBgrStatus}})),a.setState({treatDivHeight:0,subbarOpen:!1})):(a.setState((function(e){return{sideBgrStatus:!e.sideBgrStatus,mainLinksStatus:!e.mainLinksStatus}})),a.setState({treatDivHeight:0,subbarOpen:!1})):a.setState({treatDivHeight:0,subbarOpen:!1})},a.OpenSubBar=function(){window.innerWidth>1180?(a.setState({treatArrowStatus:"none"}),0===a.state.treatDivHeight?a.setState({treatDivHeight:a.refs.inner.clientHeight}):a.setState({treatDivHeight:0})):(a.setState((function(e){return{subbarOpen:!e.subbarOpen,treatArrowStatus:"block"}})),a.state.subbarOpen?(a.setState((function(){return{treatDivHeight:0}})),setTimeout((function(){a.setState((function(e){return{mainLinksStatus:!e.mainLinksStatus}}))}),200)):(a.setState((function(e){return{mainLinksStatus:!e.mainLinksStatus}})),setTimeout((function(){a.setState((function(){return{treatDivHeight:a.refs.inner.clientHeight}}))}),200)))},a.state={mainLinksStatus:!1,sideBgrStatus:!1,subbarOpen:!1,treatDivHeight:0,treatArrowStatus:"block"},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",null,i.a.createElement("div",{className:"nav_mainBox"},i.a.createElement("div",{className:"nav_mainBarBox"},i.a.createElement(y,{mainLinksStatus:this.state.sideBgrStatus,subLinksStatus:this.state.treatDivHeight,navLogoClick:this.OpenSideBar}),i.a.createElement("div",{className:"nav_spacerBox"}),i.a.createElement(h,{buttonStatus:this.state.sideBgrStatus,buttonClick:this.OpenSideBar}),i.a.createElement(g,{sidebarStatus:this.state.mainLinksStatus,subLinks:this.OpenSubBar,mainLinks:this.OpenSideBar})),i.a.createElement("div",{className:"nav_subbarMainBox",style:{height:this.state.treatDivHeight+"px"}},i.a.createElement("div",{ref:"inner"},i.a.createElement(v,{subLinkClick:this.OpenSideBar,treatBackArrowClick:this.OpenSubBar,treatArrowStatus:this.state.treatArrowStatus}))),i.a.createElement(b,{sideBgrStatus:this.state.mainLinksStatus})))}}]),t}(i.a.Component),w=z,f=function(e){return i.a.createElement("a",{href:e.foterLink,target:"_blank",title:e.FoterTitle,rel:"noopener noreferrer"},i.a.createElement("div",{className:"footerSocialMediaIcon"},i.a.createElement("i",{className:e.FoterIkon})))},N=function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"footerCoppyrightBox"},"\xa9 Pink 2020 - All Rights Reserved"),i.a.createElement("div",{className:"footerSocialMedia"},i.a.createElement(f,{foterLink:"https://www.facebook.com/l.lashesstudio",FoterTitle:"Odwied\u017a mnie na Facebooku",FoterIkon:"fab fa-facebook-square"}),i.a.createElement(f,{foterLink:"https://instagram.com/lashes_wroclaw?igshid=1isaxhcdpe5d1",FoterTitle:"Odwied\u017a mnie na Instagramie",FoterIkon:"fab fa-instagram"}),i.a.createElement(f,{foterLink:"tel:531-040-929",FoterTitle:"Zadzwo\u0144 i dowiedz si\u0119 wi\u0119cej",FoterIkon:"fas fa-phone"})))},S=a(31),_=a.n(S),x=function(){return i.a.createElement("div",{className:"hp_frtPic"},i.a.createElement("img",{src:_.a,alt:"Pink Room - Wroc\u0142aw"}),i.a.createElement("div",{className:"hp_frtPicMainBox ContentStyle"},i.a.createElement("div",null,i.a.createElement("div",{className:"hp_frtPicTopicBox"},"Pink room"),i.a.createElement("div",null,"Salon kosmetyczny ",i.a.createElement("br",null)," Wroc\u0142aw")),i.a.createElement("div",{className:"hp_frtPicArrow"},i.a.createElement("i",{className:"fas fa-chevron-down"}))))},B=a(13),C=a.n(B),j=function(e){return i.a.createElement("div",{className:"TopicStyle TopicMiddleBox "},i.a.createElement("div",{className:"TopicMiddleBeam"}),i.a.createElement("div",{className:"TopicMiddleText"},e.topic),i.a.createElement("div",{className:"TopicMiddleBeam"}))},L=function(e){return i.a.createElement("div",{className:"hp_treatMobTile"},i.a.createElement("div",{className:"hp_treatMobileRow"},i.a.createElement("div",{className:"hp_treatMobPicBox"},i.a.createElement(c.b,{to:e.link},i.a.createElement("img",{src:e.picture,alt:"PinkRoom - Wroc\u0142aw"}))),i.a.createElement("div",{className:"hp_treatMobileStyle"})),i.a.createElement(c.b,{to:e.link},i.a.createElement("div",{className:"HeaderStyle hp_treatMobileHeader"}," ",e.header," "),i.a.createElement("div",null,"Zobacz wi\u0119cej...")))},P=function(e){return i.a.createElement("div",{className:"hp_treatPcRow"},i.a.createElement("div",{className:"homeTreatPcContent"},i.a.createElement("div",{className:e.styling}),i.a.createElement("img",{src:e.picture,alt:"PinkRoom - Wroc\u0142aw"})),i.a.createElement("div",{className:"homeTreatPcContent"},i.a.createElement("div",{className:"HeaderStyle hp_treatPcTextBox"},e.header),i.a.createElement("div",{className:"hp_treatPcTextBox"},e.description),i.a.createElement("div",{className:"hp_treatPcMore"},i.a.createElement(c.b,{to:e.link},i.a.createElement("div",null," Zobacz wi\u0119cej... ")))))},H=a(23),I=a.n(H),M=a(24),O=a.n(M),T=a(25),W=a.n(T),D=a(26),A=a.n(D),F=function(e){return i.a.createElement("article",{className:"ContentStyle"},i.a.createElement(j,{topic:"Zabiegi"}),i.a.createElement("div",{className:"hp_treatPcBox"},i.a.createElement(P,{styling:"hp_treatPcStyle_1",picture:I.a,header:"Stylizacja rz\u0119s",description:"Przed\u0142u\u017canie rz\u0119s ma u\u0142atwia\u0107 \u017cycie i podkre\u015bla\u0107 g\u0142\u0119bi\u0119 oczu. Stylizacja rz\u0119s ma na celu powi\u0119kszy\u0107 oko, wyd\u0142u\u017cy\u0107 jego k\u0105ciki. Dzi\u0119ki takiemu zabiegowi mo\u017cemy zaoszcz\u0119dzi\u0107 czas na makija\u017c i codzienn\u0105 piel\u0119gnacj\u0119 rz\u0119s.",link:"/stylizacja-rzes"}),i.a.createElement(P,{styling:"hp_treatPcStyle_2",picture:O.a,header:"Stylizacja brwi",description:"Przed\u0142u\u017canie rz\u0119s ma u\u0142atwia\u0107 \u017cycie i podkre\u015bla\u0107 g\u0142\u0119bi\u0119 oczu. Stylizacja rz\u0119s ma na celu powi\u0119kszy\u0107 oko, wyd\u0142u\u017cy\u0107 jego k\u0105ciki. Dzi\u0119ki takiemu zabiegowi mo\u017cemy zaoszcz\u0119dzi\u0107 czas na makija\u017c i codzienn\u0105 piel\u0119gnacj\u0119 rz\u0119s.",link:"/stylizacja-brwi"}),i.a.createElement(P,{styling:"hp_treatPcStyle_3",picture:W.a,header:"Stylizaja paznokci",description:"Przed\u0142u\u017canie rz\u0119s ma u\u0142atwia\u0107 \u017cycie i podkre\u015bla\u0107 g\u0142\u0119bi\u0119 oczu. Stylizacja rz\u0119s ma na celu powi\u0119kszy\u0107 oko, wyd\u0142u\u017cy\u0107 jego k\u0105ciki. Dzi\u0119ki takiemu zabiegowi mo\u017cemy zaoszcz\u0119dzi\u0107 czas na makija\u017c i codzienn\u0105 piel\u0119gnacj\u0119 rz\u0119s.",link:"/stylizacja-paznokci"}),i.a.createElement(P,{styling:"hp_treatPcStyle_4",picture:A.a,header:"Zabiegi na w\u0142osy",description:"Przed\u0142u\u017canie rz\u0119s ma u\u0142atwia\u0107 \u017cycie i podkre\u015bla\u0107 g\u0142\u0119bi\u0119 oczu. Stylizacja rz\u0119s ma na celu powi\u0119kszy\u0107 oko, wyd\u0142u\u017cy\u0107 jego k\u0105ciki. Dzi\u0119ki takiemu zabiegowi mo\u017cemy zaoszcz\u0119dzi\u0107 czas na makija\u017c i codzienn\u0105 piel\u0119gnacj\u0119 rz\u0119s.",link:"/zabiegi-na-wlosy"})),i.a.createElement("div",{className:"hp_treatMobileBox"},i.a.createElement(C.a,{slidesPerView:1,loop:!0,pagination:{spaceBetween:30,el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!1}},i.a.createElement("div",null,i.a.createElement(L,{picture:I.a,header:"Stylizacja rz\u0119s",link:"/stylizacja-rzes"})),i.a.createElement("div",null,i.a.createElement(L,{picture:O.a,header:"Stylizacja brwi",link:"/stylizacja-brwi"})),i.a.createElement("div",null,i.a.createElement(L,{picture:W.a,header:"Stylizaja paznokci",link:"/stylizacja-paznokci"})),i.a.createElement("div",null,i.a.createElement(L,{picture:A.a,header:"Zabiegi na w\u0142osy",link:"/zabiegi-na-wlosy"})))))},Z=a(32),R=a.n(Z),U=function(){return i.a.createElement("div",{className:"hp_teamContentnBox"},i.a.createElement(c.b,{to:"/nasz-zespol"},i.a.createElement("img",{src:R.a,alt:"PinkRooom - Wroc\u0142aw"}),i.a.createElement("div",{className:"HeaderStyle hp_teamGFM"},"Wejd\u017a i poznaj nasz zesp\xf3\u0142!")),i.a.createElement("div",{className:"hp_teamStyle"}),i.a.createElement("div",{className:"hp_teamStyle"}))},K=function(){return i.a.createElement("article",{className:"ContentStyle"},i.a.createElement(j,{topic:"Nasz zesp\xf3\u0142"}),i.a.createElement(U,null))},V=function(e){return i.a.createElement("div",{className:"hp_revContent"},i.a.createElement("div",{className:"HeaderStyle hp_revHeadMainBox"},e.headContent),i.a.createElement("div",{className:"hp_revReviewBox"},e.review))},q=a(15),J=a.n(q),G=J.a,$=J.a,Q=J.a,X=J.a,Y=J.a,ee=function(e){return i.a.createElement("div",{className:" hp_revCustBox"},i.a.createElement("div",{className:"hp_revCustPic"},i.a.createElement("img",{src:e.picture,alt:""})),i.a.createElement("div",null,e.customerName))},te=function(e){return i.a.createElement("div",{className:"hp_revSocialMedia"},i.a.createElement("a",{href:"https://www.facebook.com/pg/l.lashesstudio/reviews/?ref=page_internal",target:"_blank",title:"Odwied\u017a nas na Facebooku",rel:"noopener noreferrer"},i.a.createElement("div",null,i.a.createElement("i",{className:"fab fa-facebook-square"}))),i.a.createElement("a",{href:"https://instagram.com/lashes_wroclaw?igshid=1isaxhcdpe5d1",target:"_blank",title:"Odwied\u017a nas na Instagramie",rel:"noopener noreferrer"},i.a.createElement("div",null,i.a.createElement("i",{className:"fab fa-instagram"}))))},ae=function(){var e=3;window.innerWidth<769&&(e=1);var t={slidesPerView:e,loop:!0,pagination:{spaceBetween:30,el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!1}};return i.a.createElement("article",{className:"ContentStyle "},i.a.createElement(j,{topic:"Opinie klientek"}),i.a.createElement(C.a,t,i.a.createElement("div",null,i.a.createElement(V,{headContent:i.a.createElement(ee,{picture:G,customerName:"Agata Adamczyk"}),review:"Bardzo polecam! Przemi\u0142a atmosfera i profesjonalizm \ud83d\udda4"})),i.a.createElement("div",null,i.a.createElement(V,{headContent:i.a.createElement(ee,{picture:$,customerName:"Emilia Madej"}),review:"Bardzo polecam, przesympatyczna, atmosfera \u015bwietnia, rz\u0119ski pi\u0119kne. \ud83e\udd70\ud83d\udc97"})),i.a.createElement("div",null,i.a.createElement(V,{headContent:i.a.createElement(ee,{picture:Q,customerName:"Klaudia Ha\u0142aczkiewicz"}),review:"Najlepsza kobitka najlepiej wykonuj\u0105ca rzeski! Polecam mocno \u2764\ufe0f"})),i.a.createElement("div",null,i.a.createElement(V,{headContent:i.a.createElement(ee,{picture:X,customerName:"Ma\u0142gosia Bazun"}),review:"Polecam!! Super atmosfera jak i ko\u0144cowy efekt \u2764\ufe0f"})),i.a.createElement("div",null,i.a.createElement(V,{headContent:i.a.createElement(ee,{picture:Y,customerName:"Nikola Olszewsk\xe1"}),review:"Bardzo mi\u0142a obs\u0142uga, a rz\u0119sy idealne \u2764\ufe0f"})),i.a.createElement("div",null,i.a.createElement(V,{headContent:i.a.createElement(te,null),review:"Zajrzyj na nasze Social Media i zobacz wi\u0119cej opinii!"}))))},ne=function(e){return i.a.createElement("div",{className:"hp_contactTile"},i.a.createElement("div",{className:"IconStyle"},i.a.createElement("i",{className:e.icon})),i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",title:e.title},i.a.createElement("div",{className:"HeaderStyle hp_contactHeader"},e.name),i.a.createElement("div",null,e.description)))},ie=a(33),re=a.n(ie),le=function(){return i.a.createElement("div",{className:"hp_mapMainBox"},i.a.createElement("div",{className:"hp_mapContentBox"},i.a.createElement("img",{src:re.a,alt:"Flowers in Chania"})))},ce=function(e){return i.a.createElement("article",{className:"ContentStyle"},i.a.createElement("div",{className:"hp_contact"},i.a.createElement("div",{className:"hp_contactTopStyle"}),i.a.createElement(j,{topic:"Kontakt"}),i.a.createElement("div",{className:"hp_contactMainBox"},i.a.createElement("div",{className:"hp_contactContent"},i.a.createElement(ne,{icon:"fas fa-comments",description:"Um\xf3w si\u0119 przez social media!",link:"https://www.facebook.com/l.lashesstudio",name:"FB: L.Lashes",title:"Napisz na Facebooku"}),i.a.createElement(ne,{icon:"fas fa-phone",description:"Um\xf3w si\u0119 telefonicznie!",link:"tel:531-040-929",name:"+48 537-323-793",title:"Zadzwo\u0144 teraz"}),i.a.createElement(ne,{icon:"fas fa-map-marker-alt",description:"Odwied\u017c nas w salonie!",link:"https://www.google.com/maps/place/Spi%C5%BCowa+21A,+53-442+Wroc%C5%82aw,+Poland/@51.1024079,16.9990743,17z/data=!3m1!4b1!4m5!3m4!1s0x470fc21bbb48607f:0x3d982554ba38e50e!8m2!3d51.1024079!4d17.001263",name:"Spi\u017cowa 21A, Wroc\u0142aw",title:"Lokalizacja salonu"})))),i.a.createElement(le,null))},se=function(e){return i.a.createElement("div",null,i.a.createElement(x,null),i.a.createElement(F,null),i.a.createElement(K,null),i.a.createElement(ae,null),i.a.createElement(ce,null))},oe=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"TopicStyle TopicSideBox"},i.a.createElement("div",{className:"TopicSideText"},e.topic),i.a.createElement("div",{className:"TopicSideBeam"})))},me=function(e){return i.a.createElement("div",{className:"price_headerBox"},i.a.createElement("div",{className:"price_headerBar"}),i.a.createElement("div",{className:"price_header HeaderStyle"},e.header),i.a.createElement("div",{className:"price_headerBar"}))},de=function(e){return i.a.createElement("div",{className:"price_tagRow"},i.a.createElement("div",{className:"price_tagContent",style:{fontWeight:e.fontWeight}},e.name),i.a.createElement("div",{className:"price_tagContent",style:{fontWeight:e.fontWeight}},i.a.createElement("div",null,e.price),i.a.createElement("div",null,e.time)))},pe=function(e){return i.a.createElement("div",{className:"price_contentBox"},i.a.createElement(me,{header:"Stylizacja rz\u0119s"}),i.a.createElement(de,{name:"Zabieg",price:"Cena",time:"Czas zabiegu",fontWeight:"bold"}),i.a.createElement(de,{name:"1:1",price:"140z\u0142",time:"1:30h"}),i.a.createElement(de,{name:"2:1 (2D)",price:"170z\u0142",time:"1:30h"}),i.a.createElement(de,{name:"3:1 (3D)",price:"190z\u0142",time:"1:30h"}),i.a.createElement(de,{name:"4:1 (4D)",price:"200z\u0142",time:"2:00h"}),i.a.createElement(de,{name:"5:1 (5D)",price:"220z\u0142",time:"2:00h"}),i.a.createElement(de,{name:"Max Volume (6D+)",price:"240z\u0142",time:"2:30h"}),i.a.createElement(de,{name:"Lash Filler)",price:"170z\u0142",time:"0:45h"}))},ue=function(e){return i.a.createElement("div",{className:"price_contentBox"},i.a.createElement(me,{header:"Stylizacja brwi"}),i.a.createElement(de,{name:"Zabieg",price:"Cena",time:"Czas zabiegu",fontWeight:"bold"}),i.a.createElement(de,{name:"Henna pudrowa",price:"90z\u0142",time:"1:30h"}),i.a.createElement(de,{name:"Henna zio\u0142owa",price:"140z\u0142",time:"1:30h"}),i.a.createElement(de,{name:"Makija\u017c permanentny",price:"700z\u0142",time:"1:30h"}))},ye=function(e){return i.a.createElement("div",{className:"price_contentBox"},i.a.createElement(me,{header:"Stylizacja paznokci"}),i.a.createElement(de,{name:"Zabieg",price:"Cena",time:"Czas zabiegu",fontWeight:"bold"}),i.a.createElement(de,{name:"Manicure hybrydowy",price:"95z\u0142",time:"1:30h"}),i.a.createElement(de,{name:"Peicure hybrydowy",price:"105z\u0142",time:"1:30h"}),i.a.createElement(de,{name:"Pedicure hybrydowy SPA",price:"130z\u0142",time:"1:30h"}),i.a.createElement(de,{name:"Przed\u0142u\u017canie \u017celem",price:"140z\u0142",time:"1:30h"}),i.a.createElement(de,{name:"Uzupe\u0142nienie \u017celu",price:"110z\u0142",time:"1:30h"}))},he=function(e){return i.a.createElement("article",{className:"ContentStyle"},i.a.createElement("div",{className:"ContentMaxWidth ContentBox"},i.a.createElement(oe,{topic:"Cennik"}),i.a.createElement("div",{className:"price_mainBox"},i.a.createElement(pe,null),i.a.createElement(ye,null),i.a.createElement(ue,null))))},ke=function(){return i.a.createElement("article",{className:"ContentStyle"},i.a.createElement("div",{className:"ContentBox ContentMaxWidth"},i.a.createElement(oe,{topic:"Um\xf3w wizyt\u0119 online"})))},Ee=function(e){return i.a.createElement("div",{className:"team_rowBox"},i.a.createElement("div",{className:"team_contentBox"},i.a.createElement("img",{src:e.picture,alt:"Pink Room Wroc\u0142aw"}),i.a.createElement("div",{className:"team_styleBox"})),i.a.createElement("div",{className:"team_contentBox"},i.a.createElement("div",{className:"HeaderStyle"},e.member),i.a.createElement("div",{className:"team_skillsBox"},e.skills),i.a.createElement("div",null,e.description)))},ge=a(18),ve=a.n(ge),be=ve.a,ze=ve.a,we=ve.a,fe=function(){return i.a.createElement("article",{className:"ContentStyle"},i.a.createElement("div",{className:"ContentBox ContentMaxWidth"},i.a.createElement(oe,{topic:"Nasz zesp\xf3\u0142"})),i.a.createElement(Ee,{picture:be,member:"Lena Pelczar",skills:"Stylizacja rz\u0119s | Stylizacja brwi",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}),i.a.createElement(Ee,{picture:ze,member:"Lena Pelczar 2",skills:"Stylizacja paznokci",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}),i.a.createElement(Ee,{picture:we,member:"Lena Pelczar 3",skills:"Zabiegi na w\u0142osy",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}))},Ne=function(e){return i.a.createElement("div",{className:"cp_contentRow"},i.a.createElement("div",{className:"HeaderStyle cp_headerBox"},e.header),i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",title:e.title},i.a.createElement("div",null,e.description)))},Se=a(34),_e=a.n(Se),xe=function(){return i.a.createElement("article",{className:"ContentStyle"},i.a.createElement("div",{className:"ContentMaxWidth"},i.a.createElement("div",{className:"ContentBox"},i.a.createElement(oe,{topic:"Kontakt"}),i.a.createElement("div",{className:"cp_contentBox"},i.a.createElement(Ne,{header:"Telefon:",link:"tel:531-040-929",title:"Zadzwo\u0144",description:"+48 537-323-793"}),i.a.createElement(Ne,{header:"Email:",link:"mailto:pelczar.lena@gmail.com",title:"Napisz maila",description:"Pelczar.Lena@gmail.com"}),i.a.createElement(Ne,{header:"Lokalizacja:",link:"https://www.google.com/maps/place/Spi%C5%BCowa+21A,+53-442+Wroc%C5%82aw,+Poland/@51.1024079,16.9990743,17z/data=!3m1!4b1!4m5!3m4!1s0x470fc21bbb48607f:0x3d982554ba38e50e!8m2!3d51.1024079!4d17.001263",title:"Zajrzyj do salonu",description:"Spi\u017cowa 21A, Wroc\u0142aw"}))),i.a.createElement("div",{className:"cp_mapBox"},i.a.createElement("img",{src:_e.a,alt:"Pink Room Wroc\u0142aw"}))))},Be=function(e){return i.a.createElement("div",{className:"tp_rowBox"},i.a.createElement("div",{className:"tp_contentBox"},e.gallery,i.a.createElement("div",{className:"tp_styleBox"})),i.a.createElement("div",{className:"tp_contentBox"},e.content,e.drop_1,e.drop_2,e.drop_3))},Ce=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).SwitchContent=function(){a.setState((function(e){return{dropStatus:!e.dropStatus}})),a.setState({height:a.refs.inner.clientHeight})},a.state={dropStatus:!1,width:35},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dropHeader,a=e.dropContent,n=this.state,r=n.dropStatus,l=n.height,c=n.width,s=n.color,o=r?l:0,m=r?c:4;return i.a.createElement("div",{className:"tp_dropdownMainBox"},i.a.createElement("div",{className:"HeaderStyle tp_dropdownHeader",onClick:this.SwitchContent},i.a.createElement("div",{onMouseOver:this.StyleBarHover,className:"tp_dropdownHeadStyle tp_dropdownHeadStyle-Deactive",style:{width:m+"px",backgroundColor:s}}),i.a.createElement("div",null,t)),i.a.createElement("div",{className:"tp_dropdownContent",style:{height:o+"px"}},i.a.createElement("div",{ref:"inner"},a)))}}]),t}(i.a.Component),je=function(){return i.a.createElement("div",{className:"tp_goMorePicOpacity tp_galleryContent"},i.a.createElement("a",{href:"https://instagram.com/lashes_wroclaw?igshid=1isaxhcdpe5d1",target:"_blank",title:"Zobacz wi\u0119cej naszych prac",rel:"noopener noreferrer"},i.a.createElement("div",{className:"tp_goMoreMainBox"},i.a.createElement("div",{className:"tp_goMoreContent HeaderStyle"},i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-arrow-right"})),i.a.createElement("div",null,"Zobacz wi\u0119cej naszych prac")))))},Le=function(e){return i.a.createElement("div",{className:"tp_galleryContent"},i.a.createElement("img",{src:e.picture,alt:"PinkRoom - Wroc\u0142aw"}))},Pe=function(e){return i.a.createElement("div",{className:"tp_galleryMainBox"},i.a.createElement(C.a,{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0}},i.a.createElement("div",null,i.a.createElement(Le,{picture:e.pic_1})),i.a.createElement("div",null,i.a.createElement(Le,{picture:e.pic_2})),i.a.createElement("div",null,i.a.createElement(Le,{picture:e.pic_3})),i.a.createElement("div",null,i.a.createElement(je,null))))},He=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"HeaderStyle"},e.header),i.a.createElement("div",null,e.description))},Ie=a(2),Me=a.n(Ie),Oe=function(){var e=Me.a,t=Me.a,a=Me.a,n=Me.a,r=Me.a,l=Me.a,c=i.a.createElement("div",{className:"tp_galleryContent"},i.a.createElement("img",{src:Me.a,alt:"PinkRoom - Wroc\u0142aw"}));return i.a.createElement("article",{className:"ContentStyle"},i.a.createElement("div",{className:"ContentBox ContentMaxWidth"},i.a.createElement(oe,{topic:"Stylizacja rz\u0119s"})),i.a.createElement(Be,{gallery:i.a.createElement(Pe,{pic_1:e,pic_2:t,pic_3:a}),content:i.a.createElement(He,{header:"Przed\u0142u\u017canie rz\u0119s",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}),drop_1:i.a.createElement(Ce,{dropHeader:"Pielengnacja",dropContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}),drop_2:i.a.createElement(Ce,{dropHeader:"Przeciwwskazania",dropContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"})}),i.a.createElement(Be,{gallery:i.a.createElement(Pe,{pic_1:n,pic_2:r,pic_3:l}),content:i.a.createElement(He,{header:"Lash Filler - laminacja rz\u0119s",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}),drop_1:i.a.createElement(Ce,{dropHeader:"Pielengnacja",dropContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}),drop_2:i.a.createElement(Ce,{dropHeader:"Przeciwwskazania",dropContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"})}),i.a.createElement(Be,{gallery:c,content:i.a.createElement(He,{header:"Nasze produkty",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"})}))},Te=function(){var e=Me.a,t=Me.a,a=Me.a,n=Me.a,r=Me.a,l=Me.a,c=Me.a,s=Me.a,o=Me.a,m=Me.a;return i.a.createElement("article",{className:"ContentStyle"},i.a.createElement("div",{className:"ContentBox ContentMaxWidth"},i.a.createElement(oe,{topic:"Stylizacja brwi"})),i.a.createElement(Be,{gallery:i.a.createElement(Pe,{pic1:e,pic2:t,pic3:a}),header:"Makija\u017c permanentny brwi",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}),i.a.createElement(Be,{gallery:i.a.createElement(Pe,{pic1:n,pic2:r,pic3:l}),header:"Architektura brwi",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}),i.a.createElement(Be,{gallery:i.a.createElement(Pe,{pic1:c,pic2:s,pic3:o}),header:"Brow Filler - laminacja brwi",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}),i.a.createElement(Be,{gallery:i.a.createElement("img",{src:m,alt:"PinkRoom - Wroc\u0142aw"}),header:"Nasze produkty",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"}))},We=function(){return i.a.createElement(c.a,null,i.a.createElement(w,null),i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/",exact:!0,component:se}),i.a.createElement(s.a,{path:"/zabiegi",component:Oe}),i.a.createElement(s.a,{path:"/stylizacja-rzes",component:Oe}),i.a.createElement(s.a,{path:"/stylizacja-brwi",component:Te}),i.a.createElement(s.a,{path:"/cennik",component:he}),i.a.createElement(s.a,{path:"/umow_wizyte",component:ke}),i.a.createElement(s.a,{path:"/nasz-zespol",component:fe}),i.a.createElement(s.a,{path:"/kontakt",component:xe})),i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.822f1182.chunk.js.map