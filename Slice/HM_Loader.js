/*HM_Loader.js
* by Peter Belesis. v4.1.3 011108
* Copyright (c) 2001 Peter Belesis. All Rights Reserved.
*/

   HM_DOM = (document.getElementById) ? true : false;
   HM_NS4 = (document.layers) ? true : false;
    HM_IE = (document.all) ? true : false;
   HM_IE4 = HM_IE && !HM_DOM;
   HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
  HM_IE4M = HM_IE4 && HM_Mac;
 HM_Opera = (navigator.userAgent.indexOf("Opera")!=-1);
 HM_Konqueror = (navigator.userAgent.indexOf("Konqueror")!=-1);

HM_IsMenu = !HM_Opera && !HM_Konqueror && !HM_IE4M && (HM_DOM || HM_NS4 || HM_IE4);

HM_BrowserString = HM_NS4 ? "NS4" : HM_DOM ? "DOM" : "IE4";


if(window.event + "" == "undefined") event = null;
function HM_f_PopUp(){return false};
function HM_f_PopDown(){return false};
popUp = HM_f_PopUp;
popDown = HM_f_PopDown;


HM_PG_MenuWidth = 150;
HM_PG_FontFamily = "Arial,sans-serif";
HM_PG_FontSize = 9;
HM_PG_FontBold = 0;
HM_PG_FontItalic = 0;
HM_PG_FontColor = "black";
HM_PG_FontColorOver = "white";
HM_PG_BGColor = "#99cc99";
HM_PG_BGColorOver = "#FFCCCC";
HM_PG_ItemPadding = 3;

HM_PG_BorderWidth = 2;
HM_PG_BorderColor = "black";
HM_PG_BorderStyle = "outset";
HM_PG_SeparatorSize = 1;
HM_PG_SeparatorColor = "#d0ff00";

HM_PG_ImageSrc = "http://www.bmwe34.net/Slice/tri.gif";
HM_PG_ImageSrcLeft = "";
HM_PG_ImageSrcOver = "http://www.bmwe34.net/Slice/tri.gif";
HM_PG_ImageSrcLeftOver = "";

HM_PG_ImageSize = 5;
HM_PG_ImageHorizSpace = 0;
HM_PG_ImageVertSpace = 3;

HM_PG_KeepHilite = true; 
HM_PG_ClickStart = 0;
HM_PG_ClickKill = false;
HM_PG_ChildOverlap = 10;
HM_PG_ChildOffset = 0;
HM_PG_ChildPerCentOver = null;
HM_PG_TopSecondsVisible = .5;
HM_PG_StatusDisplayBuild =1;
HM_PG_StatusDisplayLink = 0;
HM_PG_UponDisplay = null;
HM_PG_UponHide = null;
HM_PG_RightToLeft = 0;

HM_PG_CreateTopOnly = 0;
HM_PG_ShowLinkCursor = 1;
HM_PG_NSFontOver = true;

//HM_a_TreesToBuild = []


// the following function is included to illustrate the improved JS expression handling of
// the left_position and top_position parameters introduced in 4.0.9
// and modified in 4.1.3 to account for IE6 standards-compliance mode
// you may delete if you have no use for it

function HM_f_CenterMenu(topmenuid) {
	var MinimumPixelLeft = 0;
	var TheMenu = HM_DOM ? document.getElementById(topmenuid) : HM_IE4 ? document.all(topmenuid) : eval("window." + topmenuid);
	var TheMenuWidth = HM_DOM ? parseInt(TheMenu.style.width) : HM_IE4 ? TheMenu.style.pixelWidth : TheMenu.clip.width;
	var TheWindowWidth = HM_IE ? (HM_DOM ? HM_IEcanvas.clientWidth : document.body.clientWidth) : window.innerWidth;
	return Math.max(parseInt((TheWindowWidth-TheMenuWidth) / 2),MinimumPixelLeft);
}

if(HM_IsMenu) {
	document.write("<SCR" + "IPT LANGUAGE='JavaScript1.2' SRC='http://www.bmwe34.net/Slice/HM_Arrays.js' TYPE='text/javascript'><\/SCR" + "IPT>");
	document.write("<SCR" + "IPT LANGUAGE='JavaScript1.2' SRC='http://www.bmwe34.net/Slice/HM_Script"+ HM_BrowserString +".js' TYPE='text/javascript'><\/SCR" + "IPT>");
}


//end