/*	(c) Ger Versluis 2000 version 5 October 9th 2001	*
*	You may remove all comments for faster loading	*/		

	var NoOffFirstLineMenus=10;			// Number of first level items
	var LowBgColor="99cc99";			// Background color when mouse is not over
	var LowSubBgColor="99cc99";			// Background color when mouse is not over on subs
	var HighBgColor='black';			// Background color when mouse is over
	var HighSubBgColor='black';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='white';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=0;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=9;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle' or 'bottom'
	var ChildOverlap=0.05;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=0.2;			// vertical overlap child/ parent
	var StartTop=140;				// Menu offset x coordinate
	var StartLeft=5;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=0;			// First level items layout horizontal 1 or 0
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// DIV id for relative positioning (refer to config.htm for info)
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}

// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","/e34main.htm","",0,20,138);

Menu2=new Array("Maintenance","blank.htm","",11);
	Menu2_1=new Array("A/C system","/E34main/Maintenance/ACsystem/AC_main.htm","",3,20,145);	
		Menu2_1_1=new Array("Evaporator","/e34main/maintenance/ACsystem/evaporator_evalve.htm","",0,20,125);
		Menu2_1_2=new Array("Compressor","/e34main/maintenance/ACsystem/compressor.htm","",0);
		Menu2_1_3=new Array("Receiver drier","/e34main/maintenance/ACsystem/reciever_drier.htm","",0);

	Menu2_2=new Array("Body", "/E34main/Maintenance/Body/Body_main.htm","",2);
		Menu2_2_1=new Array("Door lower trims","/e34main/maintenance/Body/door_trims.htm","",0,20,125);
		Menu2_2_2=new Array("Windows tracks","/e34main/maintenance/Body/window_track.htm","",0);
	
	Menu2_3=new Array("Brakes", "/E34main/Maintenance/Brakes/brakes_main.htm","",4);
		Menu2_3_1=new Array("Bleeding","/e34main/maintenance/brakes/bleeding.htm","",0,20,125);
		Menu2_3_2=new Array("Brake pads","/e34main/maintenance/brakes/pads.htm","",0);
		Menu2_3_3=new Array("Parking brake adj.","/e34main/maintenance/brakes/rear_brakes.htm","",0);
                Menu2_3_4=new Array("Rotor replacement","/e34main/maintenance/brakes/rotors.htm","",0);
	
	Menu2_4=new Array("Electrical system","/E34main/Maintenance/Electrical/electric_main.htm","",9);
		Menu2_4_1=new Array("Brake & Clutch switches","/e34main/maintenance/electrical/brake_switch.htm","",0,20,135);
		Menu2_4_2=new Array("Dashboard","/e34main/maintenance/electrical/capacitors.htm","",0);
		Menu2_4_3=new Array("Fan blower","/e34main/maintenance/electrical/sword.htm","",0);
                Menu2_4_4=new Array("Fusible link","/e34main/maintenance/electrical/fusible_link.htm","",0);
		Menu2_4_5=new Array("Headlight adjustment","/e34main/maintenance/electrical/Headlight_adjustment.htm","",0);
		Menu2_4_6=new Array("Headlight replacement","/e34main/maintenance/electrical/Headlamp.htm","",0);
		Menu2_4_7=new Array("LKM module","/e34main/maintenance/electrical/LKM.htm","",0);
                Menu2_4_8=new Array("Panel light","/e34main/maintenance/electrical/panel_lights.htm","",0);
		Menu2_4_9=new Array("Speed sensor","/e34main/maintenance/electrical/speed_sensor.htm","",0);
	
	Menu2_5=new Array("E34 Touring","/E34main/Maintenance/E34Touring/Touring_main.htm","",3);
		Menu2_5_1=new Array("Brake backlight", "/e34main/maintenance/E34Touring/Back_light.htm","",0,20,125);
		Menu2_5_2=new Array("Harness replacement", "/e34main/maintenance/E34Touring/Harness.htm","",0);
		Menu2_5_3=new Array("Suspension & Springs.","/e34main/maintenance/E34Touring/Suspensions.htm","",0);

	Menu2_6=new Array("Engine","/E34main/Maintenance/Engine/Engine_main.htm","",5);
		Menu2_6_1=new Array("Bleeding","/e34main/maintenance/brakes/bleeding.htm","",0,20,135);
		Menu2_6_2=new Array("Brake pads","/e34main/maintenance/brakes/pads.htm","",0);
		Menu2_6_3=new Array("Parking brake adj.","/e34main/maintenance/brakes/rear_brakes.htm","",0);
                Menu2_6_4=new Array("Rotor replacement","/e34main/maintenance/brakes/rotors.htm","",0);
		Menu2_6_5=new Array("Rotor replacement","/e34main/maintenance/brakes/rotors.htm","",0);

	Menu2_7=new Array("General Maintenance", "/E34main/Maintenance/Gen_maintenance/Maintenance_main.htm","",5);
		Menu2_7_1=new Array("Air, fuel, micro filters", "/e34main/maintenance/gen_maintenance/filters.htm","",0,20,135);
		Menu2_7_2=new Array("O2 sensor", "/e34main/maintenance/gen_maintenance/o2_sensor.htm","",0);
		Menu2_7_3=new Array("Oil service","/e34main/maintenance/gen_maintenance/oil_service.htm","",0);
                Menu2_7_4=new Array("Spark plugs","/e34main/maintenance/gen_maintenance/spark_plugs.htm","",0);
		Menu2_7_5=new Array("V belts","/e34main/maintenance/gen_maintenance/v-belts.htm","",0);

	Menu2_8=new Array("Interior","/E34main/Maintenance/Interior/Interior_main.htm","",1);
		Menu2_8_1=new Array("Leather conditioning", "/e34main/maintenance/interior/seats treatment.htm","",0,20,135);

	Menu2_9=new Array("Steering","/E34main/Maintenance/Steering/Steering_main.htm","",3);
		Menu2_9_1=new Array("Power steering fluid", "/e34main/maintenance/steering/ps_fluid.htm","",0,20,125);
		Menu2_9_2=new Array("Steering box", "/e34main/maintenance/steering/steering_box.htm","",0);
		Menu2_9_3=new Array("Steering links","/e34main/maintenance/steering/steering_link.htm","",0);

	Menu2_10=new Array("Suspensions","/E34main/Maintenance/Suspension/Suspension_main.htm","",7);
		Menu2_10_1=new Array("Front shocks", "/e34main/maintenance/suspension/front_shocks.htm","",0,20,135);
		Menu2_10_2=new Array("Rear shocks", "/e34main/maintenance/suspension/rear_shocks.htm","",0);
		Menu2_10_3=new Array("Lower control arms","/e34main/maintenance/suspension/lower_arm.htm","",0);
                Menu2_10_4=new Array("Thrust arms","/e34main/maintenance/suspension/upper_arm.htm","",0);
		Menu2_10_5=new Array("Sway bar links","/e34main/maintenance/suspension/sway_link.htm","",0);
		Menu2_10_6=new Array("Subframe bushings","/e34main/maintenance/suspension/subframebushing.htm","",0);
		Menu2_10_7=new Array("Front wheel bearing","/e34main/maintenance/suspension/wheelbearing.htm","",0);

	Menu2_11=new Array("Transmission","/E34main/Maintenance/Transmission/Transmission_main.htm","",4);
		Menu2_11_1=new Array("Automatic gearbox flush", "/e34main/maintenance/transmission/automatic_flush.htm","",0,20,135);
		Menu2_11_2=new Array("Clutch hydraulic", "/e34main/maintenance/transmission/clutch_hydraulic.htm","",0);
		Menu2_11_3=new Array("Differential swap","/e34main/maintenance/transmission/differential.htm","",0);
                Menu2_11_4=new Array("Output seals","/e34main/maintenance/transmission/output_seal.htm","",0);

Menu3=new Array("Troubleshooting","/E34main/trouble/main_trouble.htm","",11);
	Menu3_1=new Array("F.A.Q", "/e34main/other/faq.htm","",0,20,150);
	Menu3_2=new Array("Catalytic converter", "/e34main/trouble/catalyticconv.htm","",0);
	Menu3_3=new Array("Engine codes","/e34main/trouble/engine_codes.htm","",0);
	Menu3_4=new Array("Engine diagnostic","/e34main/trouble/engine_diagnose.htm","",0);
	Menu3_5=new Array("Front noises","/e34main/trouble/front_noises.htm","",0);
	Menu3_6=new Array("Headgasket problems","/e34main/trouble/headgasket.htm","",0);
	Menu3_7=new Array("Hunting idle","/e34main/trouble/hunting_idle.htm","",0);
	Menu3_8=new Array("Overheating","/e34main/trouble/overheating.htm","",0);
	Menu3_9=new Array("Quick fix","/e34main/trouble/quick_fix.htm","",0);
	Menu3_10=new Array("Steering play","/e34main/trouble/steeringplay.htm","",0);
	Menu3_11=new Array("What will break?","/e34main/trouble/what_will_break.htm","",0);

Menu4=new Array("Upgrades","/E34main/upgrade/main_upgrade.htm","",11);
	Menu4_1=new Array("A/C R134a retrofit","/e34main/upgrade/AC_upgrade.htm","",0,20,180);
	Menu4_2=new Array("Air filter", "/e34main/upgrade/Air_filter.htm","",0);
	Menu4_3=new Array("Body upgrade","/e34main/upgrade/Body.htm","",0);

	Menu4_4=new Array("Big brakes","javascript:top.location.href='blank.htm'","",3);
		Menu4_4_1=new Array("Bigger brakes", "/e34main/upgrade/brakes.htm","",0,20,125);
		Menu4_4_2=new Array("850i brakes", "/e34main/upgrade/brakes_850i.htm","",0);
		Menu4_4_3=new Array("Paint calipers", "/e34main/upgrade/Paint_callipers.htm","",0);

	Menu4_5=new Array("Performance chip","/e34main/upgrade/chip.htm","",0);
	Menu4_6=new Array("Exhaust upgrade","javascript:top.location.href='blank.htm'","",3);
		Menu4_6_1=new Array("Exhaust info", "/e34main/upgrade/exhaust.htm","",0,20,125);
		Menu4_6_2=new Array("Exhaust tips", "/e34main/upgrade/DTM_tips.htm","",0);
		Menu4_6_3=new Array("RD headers instal", "/e34main/upgrade/Headers.htm","",0);

	Menu4_7=new Array("Electrical fan","/e34main/upgrade/electrical_fan.htm","",0);

	Menu4_8=new Array("Lights","javascript:top.location.href='blank.htm'","",4);
		Menu4_8_1=new Array("HID lights", "/e34main/upgrade/HID.htm","",0,20,125);
		Menu4_8_2=new Array("More lights", "/e34main/upgrade/more_light.htm","",0);
		Menu4_8_3=new Array("Protective cover", "/e34main/upgrade/protective_cover.htm","",0);
		Menu4_8_4=new Array("Red taillights", "/e34main/upgrade/Tail_light.htm","",0);

	Menu4_9=new Array("Stereo","javascript:top.location.href='blank.htm'","",4);
		Menu4_9_1=new Array("Stereo info", "/e34main/upgrade/stereo.htm","",0,20,125);
		Menu4_9_2=new Array("Subwoofer instal", "/e34main/upgrade/stereo_subwoofer.htm","",0);
		Menu4_9_3=new Array("Speaker upgrade", "/e34main/upgrade/speakers.htm","",0);
		Menu4_9_4=new Array("Wiring", "/e34main/upgrade/stereo_wiring.htm","",0);

	Menu4_10=new Array("Suspension upgrade","/e34main/upgrade/suspensions.htm","",0);
	Menu4_11=new Array("Wheels upgrade","/e34main/upgrade/wheels_upgrade.htm","",0);

Menu5=new Array("Winter prep.","/E34main/other/winter_main.htm","",3);
	Menu5_1=new Array("Winter driving", "/e34main/other/Winter_driving.htm","",0,20,125);
	Menu5_2=new Array("Winter storage", "/e34main/other/Winter_storage.htm","",0);
	Menu5_3=new Array("Winter tires","/e34main/other/Winter_tires.htm","",0);

Menu6=new Array("Racing","/E34main/other/racing/racing_main.htm","",4);
	Menu6_1=new Array("Turbo/supercharger", "/e34main/other/racing/turbo.htm","",0,20,125);
	Menu6_2=new Array("Track preparations", "/e34main/other/racing/track_prep.htm","",0);
	Menu6_3=new Array("Tires","/e34main/other/racing/Tires.htm","",0);
	Menu6_4=new Array("SCDA Track","javascript:top.document.location.href='http://www.scda1.com","",0);

Menu7=new Array("Miscellaneous","javascript:top.location.href='blank.htm'","",6);
	Menu7_1=new Array("E34 Versions", "/e34main/other/Models.htm","",0,20,125);
	Menu7_2=new Array("Fun E34 stuff", "/e34main/trouble/catalyticconv.htm","",2);
		Menu7_2_1=new Array("The best E34s", "/e34main/other/best_E34.htm","",0,20,125);
		Menu7_2_2=new Array("Photoshop E34", "/e34main/other/E34_Photoshop.htm","",0);

	Menu7_3=new Array("What's new","/e34main/other/whatnew.htm","",0);
	Menu7_4=new Array("Rebate","/e34main/other/links_rebates.htm","",0);
	Menu7_5=new Array("Links","/e34main/other/Links.htm","",3);
		Menu7_5_1=new Array("New parts", "/e34main/other/links_newparts.htm","",0,20,125);
		Menu7_5_2=new Array("Used parts", "/e34main/other/links_usedparts.htm","",0);
		Menu7_5_3=new Array("Tires", "e34main/other/links_tires.htm","",0);

	Menu7_6=new Array("Site Map","/e34main/other/Miscellaneous.htm","",0);
		

Menu8=new Array("E28 project","/E28/main.htm","",0);
Menu9=new Array("Social & Me","javascript:top.location.href='blank.htm'","",4);
	Menu9_1=new Array("E34 Forum", "javascript:top.document.location.href='http://www.bimmer.info/wwwboard/e34/'","",0,20,125);
	Menu9_2=new Array("Events", "/e34main/other/E34_events.htm","",0);
	Menu9_3=new Array("My crash","/e34main/other/E34_crash.htm","",0);
	Menu9_4=new Array("Email me","mailto:Webmaster@bmwe34.net","",0);

Menu10=new Array("Disclaimer","/disclaimer.htm","",0);
