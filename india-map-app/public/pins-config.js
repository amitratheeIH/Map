var injspinsconfig = {
  "pins":[
  {
    "hover": "DELHI",// Info of the popup
    "pos_X": 288,// Position on the X-Axis
    "pos_Y": 299,// Position on the Y-Axis
    "size": 0,// Size of the Pin in px
    "upColor": "#FF0000",// Default Color
    "overColor": "#FFCC00",// Hover Color
    "url": "",// Link to any webpage
    "target": "same_page",// Use "same_page", "new_page", or "none"
    "active": true //true/false to set it as Active/Inactive
  },
  {
    "hover": "BANGALORE",
    "pos_X": 286,
    "pos_Y": 831,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "MUMBAI",
    "pos_X": 152,
    "pos_Y": 618,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "HYDERABAD",
    "pos_X": 327,
    "pos_Y": 666,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "AHMEDABAD",
    "pos_X": 148,
    "pos_Y": 481,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "SURAT",
    "pos_X": 152,
    "pos_Y": 532,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "KOLKATA",
    "pos_X": 634,
    "pos_Y": 493,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY8",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY9",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY10",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY11",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY12",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY13",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CITY14",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "BLANK",
    "pos_X": 100,
    "pos_Y": 101,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },// Feel free to add more pins
  ]
};

// The following is the script for pins interaction DON'T EDIT !!! //
(function(){"use strict";function isTouchEnabled(){return('ontouchstart' in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}
document.addEventListener('DOMContentLoaded',function(){let pins_len=injspinsconfig.pins.length;if(pins_len>0){let xmlns="http://www.w3.org/2000/svg";let tsvgpin=document.getElementById("injspins");let svg_circle;for(let i=0;i<pins_len;i++){svg_circle=document.createElementNS(xmlns,"circle");svg_circle.setAttribute("cx",injspinsconfig.pins[i].pos_X+1);svg_circle.setAttribute("cy",injspinsconfig.pins[i].pos_Y+1);svg_circle.setAttribute("r",injspinsconfig.pins[i].size/2);svg_circle.setAttribute("fill","rgba(0, 0, 0, 0.5)");tsvgpin.appendChild(svg_circle);svg_circle=document.createElementNS(xmlns,"circle");svg_circle.setAttribute("id","injspins_"+i);svg_circle.setAttribute("cx",injspinsconfig.pins[i].pos_X);svg_circle.setAttribute("cy",injspinsconfig.pins[i].pos_Y);svg_circle.setAttribute("r",injspinsconfig.pins[i].size/2);svg_circle.setAttribute("fill",injspinsconfig.pins[i].upColor);svg_circle.setAttribute("stroke","#333333");svg_circle.setAttribute("stroke-width",1);tsvgpin.appendChild(svg_circle);addEvent(i)}}});function addEvent(id){const inPin=document.getElementById("injspins_"+id);const inTip=document.getElementById('injstip');const downColor='#595959';if(injspinsconfig.pins[id].active){if(isTouchEnabled()){let touchmoved;inPin.addEventListener('touchstart',function(e){touchmoved=!1;inTip.style.display='none';inPin.setAttribute("fill",injspinsconfig.pins[id].upColor)});inPin.addEventListener('touchmove',function(){touchmoved=!0});inPin.addEventListener('touchend',function(e){if(!touchmoved){inTip.style.display='none';inPin.setAttribute("fill",injspinsconfig.pins[id].upColor);if(injspinsconfig.pins[id].target==='new_page'){window.open(injspinsconfig.pins[id].url)}else if(injspinsconfig.pins[id].target==='same_page'){window.location.href=injspinsconfig.pins[id].url}}})}else{inPin.style.cursor="pointer";inPin.addEventListener('mouseenter',function(){inPin.setAttribute("fill",injspinsconfig.pins[id].overColor)});inPin.addEventListener('mouseleave',function(){inTip.style.display='none';inPin.setAttribute("fill",injspinsconfig.pins[id].upColor)});if(injspinsconfig.pins[id].target!=='none'){inPin.addEventListener('mousedown',function(){inPin.setAttribute('fill',downColor)})}
inPin.addEventListener('mouseup',function(){inTip.style.display='none';inPin.setAttribute("fill",injspinsconfig.pins[id].overColor);if(injspinsconfig.pins[id].target==='new_page'){window.open(injspinsconfig.pins[id].url)}else if(injspinsconfig.pins[id].target==='same_page'){window.location.href=injspinsconfig.pins[id].url}});inPin.addEventListener('mousemove',function(e){inTip.style.display='block';inTip.innerHTML=injspinsconfig.pins[id].hover;let x=e.pageX+10,y=e.pageY+15;let inTipWidth=inTip.offsetWidth,inTipHeight=inTip.offsetHeight;x=(x+inTipWidth>window.innerWidth+window.scrollX)?x-inTipWidth-20:x;y=(y+inTipHeight>window.innerHeight+window.scrollY)?window.innerHeight+window.scrollY-inTipHeight-10:y;inTip.style.left=x+'px';inTip.style.top=y+'px'})}}}})()
