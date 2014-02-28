/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['coda, sans-serif']='<script src=\"http://use.edgefonts.net/coda:n4,n8:all.js\"></script>';
    fonts['pt-mono, monospace']='<script src=\"http://use.edgefonts.net/pt-mono:n4:all.js\"></script>';
    fonts['droid-sans-mono, sans-serif']='<script src=\"http://use.edgefonts.net/droid-sans-mono:n4:all.js\"></script>';
    fonts['droid-sans, sans-serif']='<script src=\"http://use.edgefonts.net/droid-sans:n4,n7:all.js\"></script>';
    fonts['monoton, sans-serif']='<script src=\"http://use.edgefonts.net/monoton:n4:all.js\"></script>';
    fonts['yellowtail, cursive']='<script src=\"http://use.edgefonts.net/yellowtail:n4:all.js\"></script>';
    fonts['alex-brush, cursive']='<script src=\"http://use.edgefonts.net/alex-brush:n4:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Black_Rectangle',
                type: 'rect',
                rect: ['-16px', '-16px','1959px','1125px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'emerald',
                type: 'image',
                rect: ['-1px', '0px','1920px','1080px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"emerald.png",'0px','0px']
            },
            {
                id: 'static22',
                type: 'image',
                rect: ['-10px', '-2px','1920px','1080px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"static2.png",'0px','0px']
            },
            {
                id: 'Revolution_is_upon_us',
                type: 'text',
                rect: ['295px', '735px','1352px','677px','auto', 'auto'],
                text: "The revolution is upon us<br><br>Your quest begins<br>",
                align: "center",
                font: ['pt-mono, monospace', 56, "rgba(4,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Welcome_-_text',
                type: 'text',
                rect: ['102px', '589px','1103px','405px','auto', 'auto'],
                text: "Help you save 40% of your household budget.  Eliminate toxic chemicals and  from your home and help you learn the details about the trash and how the solve it. ",
                align: "left",
                font: ['Courier, \'Courier New\', monospace', 50, "rgba(86,86,86,1)", "400", "none", "normal"]
            },
            {
                id: 'Welcome_text_-_a',
                type: 'text',
                rect: ['102px', '271px','1103px','333px','auto', 'auto'],
                text: "The journey ahead will teach you step by step ninja the skills for making small jar of waste per year.  ",
                align: "left",
                font: ['Courier, \'Courier New\', monospace', 50, "rgba(86,86,86,1)", "400", "none", "normal"]
            },
            {
                id: 'Welcome_-_title',
                type: 'text',
                rect: ['115px', '99px','1185px','779px','auto', 'auto'],
                text: "Welcome to the game<br>",
                align: "left",
                font: ['Courier, \'Courier New\', monospace', 93, "rgba(86,86,86,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Transition_call',
                type: 'text',
                rect: ['125px', '180px','1234px','721px','auto', 'auto'],
                text: "We are at the tipping point<br><br>To save the world, we must each learn the art of 'zero waste'<br><br>It is actually possible to create no trash whatsoever",
                align: "left",
                font: ['pt-mono, monospace', 62, "rgba(28,178,160,1.00)", "400", "none", "normal"]
            },
            {
                id: 'rickett',
                type: 'image',
                rect: ['0px', '-5px','1920px','1085px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"rickett.png",'0px','0px']
            },
            {
                id: 'Ricket_-_a',
                display: 'none',
                type: 'text',
                rect: ['50px', '593px','1125px','218px','auto', 'auto'],
                text: "People fought to make trash part of our history, not our future<br><br>",
                align: "left",
                font: ['Courier, \'Courier New\', monospace', 48, "rgba(255,255,255,1)", "400", "none", "italic"]
            },
            {
                id: 'IMG_0304',
                type: 'image',
                rect: ['493px', '568px','527px','527px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0304.JPG",'0px','0px']
            },
            {
                id: 'IMG_0306',
                type: 'image',
                rect: ['1054px', '25px','506px','506px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0306.JPG",'0px','0px']
            },
            {
                id: 'IMG_0307',
                type: 'image',
                rect: ['1054px', '563px','506px','506px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0307.JPG",'0px','0px']
            },
            {
                id: 'IMG_0308',
                display: 'block',
                type: 'image',
                rect: ['508px', '34px','497px','497px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0308.JPG",'0px','0px']
            },
            {
                id: 'IMG_0309',
                display: 'block',
                type: 'image',
                rect: ['1035px', '27px','506px','506px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0309.JPG",'0px','0px']
            },
            {
                id: 'IMG_0310',
                type: 'image',
                rect: ['495px', '552px','527px','527px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0310.JPG",'0px','0px']
            },
            {
                id: 'IMG_0305',
                type: 'image',
                rect: ['1063px', '558px','497px','497px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0305.JPG",'0px','0px']
            },
            {
                id: 'IMG_03042',
                display: 'none',
                type: 'image',
                rect: ['479px', '49px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0304.png",'0px','0px']
            },
            {
                id: 'IMG_03052',
                display: 'none',
                type: 'image',
                rect: ['466px', '55px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0305.png",'0px','0px']
            },
            {
                id: 'IMG_03062',
                display: 'none',
                type: 'image',
                rect: ['470px', '59px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0306.png",'0px','0px']
            },
            {
                id: 'IMG_03072',
                display: 'none',
                type: 'image',
                rect: ['470px', '581px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0307.png",'0px','0px']
            },
            {
                id: 'IMG_03082',
                display: 'none',
                type: 'image',
                rect: ['1010px', '574px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0308.png",'0px','0px']
            },
            {
                id: 'IMG_03092',
                display: 'none',
                type: 'image',
                rect: ['1000px', '59px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0309.png",'0px','0px']
            },
            {
                id: 'IMG_0322',
                display: 'none',
                type: 'image',
                rect: ['466px', '55px','497px','497px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0322.png",'0px','0px']
            },
            {
                id: 'IMG_0323',
                display: 'none',
                type: 'image',
                rect: ['470px', '564px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0323.png",'0px','0px']
            },
            {
                id: 'IMG_0324',
                display: 'none',
                type: 'image',
                rect: ['1000px', '49px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0324.png",'0px','0px']
            },
            {
                id: 'IMG_0325',
                display: 'none',
                type: 'image',
                rect: ['1000px', '574px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0325.png",'0px','0px']
            },
            {
                id: 'IMG_0326',
                display: 'none',
                type: 'image',
                rect: ['1000px', '55px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0326.png",'0px','0px']
            },
            {
                id: 'IMG_0327',
                display: 'none',
                type: 'image',
                rect: ['470px', '574px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0327.png",'0px','0px']
            },
            {
                id: 'IMG_0328',
                display: 'none',
                type: 'image',
                rect: ['1010px', '579px','471px','471px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0328.png",'0px','0px']
            },
            {
                id: 'IMG_0329',
                display: 'none',
                type: 'image',
                rect: ['1010px', '67px','464px','464px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0329.png",'0px','0px']
            },
            {
                id: 'IMG_0330',
                display: 'none',
                type: 'image',
                rect: ['479px', '570px','483px','483px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_0330.png",'0px','0px']
            },
            {
                id: 'Montage_text',
                type: 'text',
                rect: ['507px', '88px','923px','969px','auto', 'auto'],
                text: "The sustainability movement germinated with zero waste at it's core",
                align: "center",
                font: ['Courier, \'Courier New\', monospace', 112, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'earthinspace',
                type: 'image',
                rect: ['0px', '2px','1920px','1084px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"earthinspace.png",'0px','0px']
            },
            {
                id: 'Ellipse2',
                type: 'ellipse',
                rect: ['190px', '737px','376px','379px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Ellipse3',
                type: 'ellipse',
                rect: ['1141px', '-20px','360px','360px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Ellipse4',
                type: 'ellipse',
                rect: ['1621px', '371px','376px','379px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Ellipse5',
                type: 'ellipse',
                rect: ['670px', '154px','260px','261px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Ellipse6',
                type: 'ellipse',
                rect: ['64px', '473px','342px','342px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Ellipse7',
                type: 'ellipse',
                rect: ['680px', '751px','414px','414px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Ellipse8',
                type: 'ellipse',
                rect: ['1537px', '42px','342px','343px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Ellipse9',
                type: 'ellipse',
                rect: ['1276px', '577px','443px','450px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['98px', '50px','321px','321px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,1.00)"],
                stroke: [1,"rgba(0,0,0,0.72)","none"]
            },
            {
                id: 'Ellipse_-_Big',
                type: 'ellipse',
                rect: ['709px', '629px','111px','110px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Spark_-_b',
                type: 'text',
                rect: ['302px', '665px','1340px','200px','auto', 'auto'],
                text: "A revolution ignited",
                align: "center",
                font: ['Courier, Courier New, monospace', 93, "rgba(250,246,246,1)", "400", "none", "normal"]
            },
            {
                id: 'Spark_-_a',
                type: 'text',
                rect: ['340px', '377px','1262px','242px','auto', 'auto'],
                text: "But instead of exhausting and polluting our beautiful planet",
                align: "center",
                font: ['pt-mono, monospace', 68, "rgba(250,246,246,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Symptom',
                type: 'text',
                rect: ['531px', '315px','923px','831px','auto', 'auto'],
                text: "Trash is connected to everything<br><br><br> ",
                align: "center",
                font: ['pt-mono, monospace', 68, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_Mining',
                type: 'text',
                rect: ['110px', '117px','376px','342px','auto', 'auto'],
                text: "Coal, Bauxite &amp; Silica Mining",
                align: "center",
                font: ['pt-mono, monospace', 59, "rgba(250,250,250,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Bubble_-_Toxics',
                type: 'text',
                rect: ['318px', '765px','317px','224px','auto', 'auto'],
                text: "Toxic Chemicals: Phalates &amp; Dioxins",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_Diet',
                type: 'text',
                rect: ['1022px', '245px','323px','169px','auto', 'auto'],
                text: "Diet Related Illnesses",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_marine_life',
                type: 'text',
                rect: ['1599px', '474px','229px','160px','auto', 'auto'],
                text: "Marine Life ",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_food_miles',
                type: 'text',
                rect: ['59px', '608px','213px','169px','auto', 'auto'],
                text: "Food Miles",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_carbon',
                type: 'text',
                rect: ['719px', '825px','323px','270px','auto', 'auto'],
                text: "Carbon Dioxide Emissions",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_litter',
                type: 'text',
                rect: ['689px', '271px','260px','118px','auto', 'auto'],
                text: "Litter",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_oil',
                type: 'text',
                rect: ['1493px', '99px','317px','169px','auto', 'auto'],
                text: "Oil Dependency",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble-tar_sands',
                type: 'text',
                rect: ['1367px', '794px','296px','202px','auto', 'auto'],
                text: "Tar Sands &amp; Oil Spills",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'smoke',
                type: 'image',
                rect: ['4', '4','1920px','1084px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"smoke.png",'0px','0px']
            },
            {
                id: 'Incinerator_-_c',
                type: 'text',
                rect: ['74px', '377px','1103px','274px','auto', 'auto'],
                text: "FACT: 210 new waste incinerators are currently being planned or constructed around the world<br>",
                align: "left",
                font: ['pt-mono, monospace', 50, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Incinerator_-_b',
                type: 'text',
                rect: ['97px', '563px','1140px','566px','auto', 'auto'],
                text: "FACT: The majority of the world's dioxins (a group of chemicals strongly linked with birth defects and cancer) are a result of waste combustion",
                align: "left",
                font: ['pt-mono, monospace', 50, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'tar-sands',
                type: 'image',
                rect: ['4px', '4px','1920px','1081px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tar-sands.png",'0px','0px']
            },
            {
                id: 'Tar_Sands_-a',
                type: 'text',
                rect: ['98px', '219px','1045px','708px','auto', 'auto'],
                text: "FACT: 21% of America's oil comes from the Canadian tar tands",
                align: "left",
                font: ['pt-mono, monospace', 51, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Tar_sands_-_b',
                type: 'text',
                rect: ['604px', '758px','1246px','215px','auto', 'auto'],
                text: "FACT: 191 million barrels of petroleum is used to manufacture plastic every year",
                align: "left",
                font: ['pt-mono, monospace', 50, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'ocean',
                type: 'image',
                rect: ['-123px', '-76px','2151px','1214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ocean.png",'0px','0px']
            },
            {
                id: 'Ocean_-_b',
                type: 'text',
                rect: ['59px', '74px','973px','563px','auto', 'auto'],
                text: "FACT: 100,000 marine creatures including whales, dolphins, seals, turtles and albatross are estimated to be killed every year by ingesting or becoming entangled in plastic debris",
                align: "left",
                font: ['pt-mono, monospace', 50, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Ocean-a',
                type: 'text',
                rect: ['98px', '95px','937px','836px','auto', 'auto'],
                text: "FACT: There is six times the mass of plastic particles as plankton in the pacific gyre <br>",
                align: "left",
                font: ['pt-mono, monospace', 55, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'landfill',
                type: 'image',
                rect: ['0px', '-67px','2297px','1204px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"landfill.png",'0px','0px']
            },
            {
                id: 'static2',
                display: 'block',
                type: 'image',
                rect: ['1px', '4','1920px','1080px','auto', 'auto'],
                opacity: 0.51048344017094,
                fill: ["rgba(0,0,0,0)",im+"static2.png",'0px','0px']
            },
            {
                id: 'Landfill_-_a',
                type: 'text',
                rect: ['856px', '777px','937px','274px','auto', 'auto'],
                text: "FACT: There are over 3,000 landfills in the USA",
                align: "left",
                font: ['pt-mono, monospace', 52, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Landfill_-_c',
                type: 'text',
                rect: ['559px', '118px','1034px','222px','auto', 'auto'],
                text: "FACT: Americans produce 2.9 pounds of trash per day after recycling ",
                align: "left",
                font: ['pt-mono, monospace', 50, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Landfill_-_d',
                type: 'text',
                rect: ['71px', '477px','909px','227px','auto', 'auto'],
                text: "FACT: 53.6 percent of our waste still ends up in landfill",
                align: "left",
                font: ['pt-mono, monospace', 50, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'tree',
                type: 'image',
                rect: ['0px', '0px','1920px','1080px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
            },
            {
                id: 'Text4-Treeb',
                type: 'text',
                rect: ['1160px', '808px','635px','242px','auto', 'auto'],
                text: "But this dream hangs in the balance . . .<br>",
                align: "left",
                font: ['pt-mono, monospace', 56, "rgba(252,249,249,1)", "400", "none", "italic"]
            },
            {
                id: 'Text5-Tree1',
                type: 'text',
                rect: ['87px', '107px','1201px','533px','auto', 'auto'],
                text: "An intelligent civilization living in elegent symbiosis with the earth<br><br>",
                align: "left",
                font: ['pt-mono, monospace', 55, "rgba(252,249,249,1)", "400", "none", "italic"]
            },
            {
                id: '_3d-abstract_hdwallpaper_autumn-forest_51194',
                display: 'none',
                type: 'image',
                rect: ['31', '16','1920px','1080px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3d-abstract_hdwallpaper_autumn-forest_51194.jpg",'0px','0px']
            },
            {
                id: 'lens-flare',
                display: 'none',
                type: 'image',
                rect: ['-7px', '0px','1928px','1085px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lens-flare.png",'0px','0px']
            },
            {
                id: 'Text_-_Forest',
                display: 'none',
                type: 'text',
                rect: ['69px', '687px','718px','340px','auto', 'auto'],
                text: "Like an ever regenerating and decomposing forest, this world's creations are designed to go back into the earth and to be reborn from the earth in a beautifully efficienct circle of life",
                align: "left",
                font: ['pt-mono, monospace', 73, "rgba(252,249,249,1)", "400", "none", "italic"]
            },
            {
                id: 'landscape',
                display: 'none',
                type: 'image',
                rect: ['0px', '4px','1920px','1085px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"landscape.png",'0px','0px']
            },
            {
                id: 'Text2-Lanscape',
                display: 'none',
                type: 'text',
                rect: ['97px', '78px','1028px','364px','auto', 'auto'],
                text: "A world where nature and technology replenish eachother in ecological harmony",
                align: "left",
                font: ['pt-mono, monospace', 73, "rgba(254,252,234,1.00)", "400", "none", "italic"]
            },
            {
                id: 'earth',
                display: 'block',
                type: 'image',
                rect: ['0%', '-5.6%','1920px','1200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"earth.png",'0px','0px']
            },
            {
                id: 'Text1_-_Intro',
                display: 'block',
                type: 'text',
                rect: ['69px', '687px','785px','340px','auto', 'auto'],
                text: "There is a new world on the horizon<br><br>",
                align: "left",
                font: ['pt-mono, monospace', 55, "rgba(255,255,255,1.00)", "400", "none", "italic"]
            },
            {
                id: 'Button-Symbol',
                display: 'block',
                type: 'rect',
                rect: ['661', '581','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'logo',
                display: 'block',
                type: 'image',
                rect: ['668px', '268px','632px','169px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'Final_page_-_tagline',
                type: 'text',
                rect: ['623px', '426px','709px','55px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Are you ready to detrash the world with us?",
                align: "center",
                font: ['Georgia, Times New Roman, Times, serif', 30, "rgba(83,54,10,1.00)", "400", "none", "italic"]
            },
            {
                id: 'Incinerator_-_source_2',
                type: 'text',
                rect: ['62px', '1042px','829px','30px','auto', 'auto'],
                text: "Source: The World Market for Waste Incineration Plants 2013, EcoProg",
                align: "left",
                font: ['pt-mono, monospace', 20, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Smoke-_ref_1',
                type: 'text',
                rect: ['40px', '1040px','576px','34px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Source: Dioxin &amp; Furan Inventories UNEP 1999",
                align: "left",
                font: ['pt-mono, monospace', 20, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Tar_sands_-_source_1',
                type: 'text',
                rect: ['40px', '1039px','906px','46px','auto', 'auto'],
                text: "Source: Petroleum &amp; Liquids Data Table, Energy Institute of America 2010",
                align: "left",
                font: ['pt-mono, monospace', 50, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Source_-_Tar_sands_2',
                type: 'text',
                rect: ['67px', '1024px','697px','49px','auto', 'auto'],
                text: "Source: The Observatory of Economic Complexity, MIT 2010",
                align: "left",
                font: ['pt-mono, monospace', 20, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Source_-_ocean',
                type: 'text',
                rect: ['62px', '1014px','949px','46px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Source:  Impacts of marine debris: entanglement of marine life in marine debris, Laist 1997",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 20, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Ocean_-_Reference_1',
                type: 'text',
                rect: ['62px', '982px','576px','87px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Source: A comparison of plastic and plankton in the central north pacifc gyre 2001\fu0006u000f\bu0015u000f u0013<br>u000eu0007u0006<br> u0016u0017u0007u0013",
                align: "left",
                font: ['pt-mono, monospace', 20, "rgba(252,249,249,1)", "400", "none", "italic"]
            },
            {
                id: 'EPA_-_Landfill',
                type: 'text',
                rect: ['20px', '1037px','1166px','48px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Source: EPA Municipal Solid Waste in the United States Facts &amp; Figures 2011",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 20, "rgba(252,249,249,1)", "400", "none", "normal"]
            },
            {
                id: 'Skip_tag',
                type: 'text',
                rect: ['1830px', '1042px','94px','37px','auto', 'auto'],
                cursor: ['pointer'],
                text: "skip",
                align: "left",
                font: ['pt-mono, monospace', 23, "rgba(255,255,255,1)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'Button-Symbol',
                symbolName: 'Button-Symbol',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_IMG_0310}": [
                ["style", "top", '552px'],
                ["style", "height", '527px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '495px'],
                ["style", "width", '527px']
            ],
            "${_Ellipse7}": [
                ["style", "top", '914px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '143px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '800px'],
                ["style", "width", '143px']
            ],
            "${_rickett}": [
                ["style", "top", '-5px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_Bubble_-_Diet}": [
                ["style", "line-height", '64px'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1022px'],
                ["style", "font-size", '40px'],
                ["style", "top", '245px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "height", '169px']
            ],
            "${_Spark_-_a}": [
                ["style", "line-height", '120px'],
                ["color", "color", 'rgba(250,246,246,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '340px'],
                ["style", "font-size", '68px'],
                ["style", "top", '377px'],
                ["style", "text-align", 'center'],
                ["style", "height", '242px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "width", '1262px'],
                ["style", "font-style", 'normal']
            ],
            "${_Landfill_-_d}": [
                ["style", "line-height", '90px'],
                ["style", "top", '477px'],
                ["style", "height", '227px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '71px'],
                ["style", "width", '949px']
            ],
            "${_logo}": [
                ["style", "top", '268px'],
                ["style", "left", '668px'],
                ["style", "height", '169px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '632px']
            ],
            "${_Ricket_-_a}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '1'],
                ["style", "left", '50px'],
                ["style", "width", '1125px'],
                ["style", "top", '593px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'none'],
                ["style", "height", '218px'],
                ["style", "font-style", 'italic']
            ],
            "${_IMG_0329}": [
                ["style", "top", '67px'],
                ["style", "height", '464px'],
                ["style", "display", 'none'],
                ["style", "left", '1010px'],
                ["style", "width", '464px']
            ],
            "${_Text_-_Forest}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0'],
                ["style", "left", '92px'],
                ["style", "width", '1389px'],
                ["style", "top", '569px'],
                ["style", "font-style", 'italic'],
                ["style", "display", 'none'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-size", '55px'],
                ["style", "height", '450px']
            ],
            "${_Bubble_-_food_miles}": [
                ["style", "line-height", '64px'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '59px'],
                ["style", "font-size", '40px'],
                ["style", "top", '608px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "width", '213px']
            ],
            "${_Ocean-a}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '948px'],
                ["style", "font-size", '50px'],
                ["style", "top", '780px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "height", '315px'],
                ["style", "width", '973px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '0'],
                ["style", "height", '104px'],
                ["color", "border-color", 'rgba(0,0,0,0.18)'],
                ["motion", "location", '285.0119176794px 235.0001989294px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '27px'],
                ["style", "width", '104px']
            ],
            "${_Source_-_Tar_sands_2}": [
                ["style", "top", '1040px'],
                ["style", "font-size", '20px'],
                ["style", "font-style", 'normal'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '40px'],
                ["style", "width", '697px']
            ],
            "${_IMG_0322}": [
                ["style", "top", '55px'],
                ["style", "height", '497px'],
                ["style", "display", 'none'],
                ["style", "left", '466px'],
                ["style", "width", '497px']
            ],
            "${_IMG_0323}": [
                ["style", "top", '564px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '470px'],
                ["style", "width", '483px']
            ],
            "${_earthinspace}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_IMG_03082}": [
                ["style", "top", '574px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '1010px'],
                ["style", "width", '483px']
            ],
            "${_Ocean_-_b}": [
                ["style", "line-height", '90px'],
                ["style", "top", '74px'],
                ["style", "height", '563px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '59px'],
                ["style", "width", '973px']
            ],
            "${_Bubble_-_Mining}": [
                ["style", "line-height", '64px'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '110px'],
                ["style", "font-size", '40px'],
                ["style", "top", '117px'],
                ["style", "text-align", 'center'],
                ["style", "height", '242px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "width", '296px'],
                ["style", "font-style", 'normal']
            ],
            "${_lens-flare}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '1085px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px'],
                ["style", "width", '1928px']
            ],
            "${_earth}": [
                ["style", "top", '-8.24%'],
                ["style", "display", 'block'],
                ["style", "overflow", 'visible'],
                ["style", "height", '1217px'],
                ["style", "opacity", '0'],
                ["style", "left", '-0.94%'],
                ["style", "width", '1948px']
            ],
            "${_Incinerator_-_b}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0'],
                ["style", "left", '97px'],
                ["style", "font-size", '50px'],
                ["style", "top", '563px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "height", '327px'],
                ["style", "width", '1140px']
            ],
            "${_IMG_03092}": [
                ["style", "top", '59px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
            ],
            "${_Welcome_text_-_a}": [
                ["style", "line-height", '80px'],
                ["style", "opacity", '0.000000'],
                ["style", "text-align", 'left']
            ],
            "${_Incinerator_-_source_2}": [
                ["style", "top", '1042px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '62px'],
                ["style", "width", '829px']
            ],
            "${_Bubble_-_Toxics}": [
                ["style", "line-height", '64px'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '318px'],
                ["style", "font-size", '40px'],
                ["style", "top", '765px'],
                ["style", "text-align", 'center'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "height", '224px']
            ],
            "${_Skip_tag}": [
                ["style", "top", '1042px'],
                ["style", "width", '94px'],
                ["style", "left", '1830px'],
                ["style", "height", '37px'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0.3'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '23px']
            ],
            "${_Bubble_-_oil}": [
                ["style", "line-height", '64px'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1493px'],
                ["style", "font-size", '40px'],
                ["style", "top", '99px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "height", '169px']
            ],
            "${_Symptom}": [
                ["style", "line-height", '120px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '531px'],
                ["style", "width", '923px'],
                ["style", "top", '315px'],
                ["style", "text-align", 'center'],
                ["style", "height", '389px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-size", '68px'],
                ["style", "font-style", 'normal']
            ],
            "${_IMG_0305}": [
                ["style", "top", '558px'],
                ["style", "height", '497px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1063px'],
                ["style", "width", '497px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "width", '1920px'],
                ["style", "height", '1080px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Montage_text}": [
                ["style", "top", '88px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '112px'],
                ["style", "line-height", '133px'],
                ["style", "height", '969px'],
                ["style", "opacity", '0'],
                ["style", "left", '507px'],
                ["style", "width", '923px']
            ],
            "${_Ellipse_-_Big}": [
                ["style", "top", '533px'],
                ["color", "background-color", 'rgba(33,31,31,1)'],
                ["style", "height", '110px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '678px'],
                ["style", "width", '111px']
            ],
            "${_IMG_0307}": [
                ["style", "top", '563px'],
                ["style", "height", '506px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1054px'],
                ["style", "width", '506px']
            ],
            "${_tar-sands}": [
                ["style", "top", '-57px'],
                ["style", "height", '1217px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-99px'],
                ["style", "width", '2161px']
            ],
            "${_IMG_0325}": [
                ["style", "top", '574px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
            ],
            "${_Revolution_is_upon_us}": [
                ["style", "line-height", '93px'],
                ["color", "color", 'rgba(248,245,245,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '295px'],
                ["style", "font-size", '90px'],
                ["style", "top", '735px'],
                ["style", "text-align", 'center'],
                ["style", "height", '405px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-style", 'normal'],
                ["style", "width", '1352px']
            ],
            "${_Bubble_-_carbon}": [
                ["style", "top", '825px'],
                ["style", "line-height", '64px'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "left", '719px'],
                ["style", "font-size", '40px']
            ],
            "${_Ocean_-_IntroCopy}": [
                ["style", "line-height", 'normal'],
                ["style", "width", '953px'],
                ["style", "top", '59px'],
                ["style", "font-style", 'italic'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '69px'],
                ["style", "font-size", '55px']
            ],
            "${_IMG_0306}": [
                ["style", "top", '25px'],
                ["style", "height", '506px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1054px'],
                ["style", "width", '506px']
            ],
            "${_Bubble_-_litter}": [
                ["style", "line-height", '64px'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '689px'],
                ["style", "font-size", '40px'],
                ["style", "top", '271px'],
                ["style", "height", '118px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-style", 'normal']
            ],
            "${_landscape}": [
                ["style", "top", '4px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text4-Treeb}": [
                ["style", "top", '780px'],
                ["style", "width", '758px'],
                ["style", "line-height", '90px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "left", '1122px'],
                ["style", "font-size", '48px']
            ],
            "${_IMG_0304}": [
                ["style", "top", '568px'],
                ["style", "height", '527px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '493px'],
                ["style", "width", '527px']
            ],
            "${_Text5-Tree1}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '87px'],
                ["style", "width", '1201px'],
                ["style", "top", '107px'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "height", '333px'],
                ["style", "font-size", '55px']
            ],
            "${_Ellipse3}": [
                ["style", "top", '146px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '73px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1270px'],
                ["style", "width", '73px']
            ],
            "${_IMG_0308}": [
                ["style", "top", '34px'],
                ["style", "display", 'block'],
                ["style", "height", '497px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '508px'],
                ["style", "width", '497px']
            ],
            "${_IMG_03062}": [
                ["style", "top", '574px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '460px'],
                ["style", "width", '483px']
            ],
            "${_IMG_0324}": [
                ["style", "top", '49px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
            ],
            "${_static22}": [
                ["style", "top", '644px'],
                ["style", "height", '362px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '33px'],
                ["style", "width", '1920px']
            ],
            "${_IMG_0328}": [
                ["style", "top", '579px'],
                ["style", "height", '471px'],
                ["style", "display", 'none'],
                ["style", "left", '1010px'],
                ["style", "width", '471px']
            ],
            "${_Welcome_-_text}": [
                ["style", "top", '589px'],
                ["style", "width", '1103px'],
                ["style", "text-align", 'left'],
                ["style", "line-height", '71px'],
                ["style", "height", '405px'],
                ["style", "opacity", '0'],
                ["style", "left", '102px'],
                ["style", "font-size", '50px']
            ],
            "${_Ellipse8}": [
                ["style", "top", '59px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '118px'],
                ["style", "opacity", '0'],
                ["style", "left", '1617px'],
                ["style", "width", '118px']
            ],
            "${_IMG_03072}": [
                ["style", "top", '581px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '470px'],
                ["style", "width", '483px']
            ],
            "${_Final_page_-_tagline}": [
                ["color", "color", 'rgba(83,54,10,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '623px'],
                ["style", "width", '709px'],
                ["style", "top", '426px'],
                ["style", "font-size", '30px'],
                ["style", "height", '55px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "font-style", 'italic'],
                ["style", "cursor", 'pointer']
            ],
            "${_Bubble-tar_sands}": [
                ["style", "line-height", '64px'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1367px'],
                ["style", "width", '296px'],
                ["style", "top", '794px'],
                ["style", "height", '202px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-size", '40px'],
                ["style", "font-style", 'normal']
            ],
            "${_IMG_03052}": [
                ["style", "top", '574px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
            ],
            "${_ocean}": [
                ["style", "top", '-45px'],
                ["style", "height", '1204px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-80px'],
                ["style", "width", '2087px']
            ],
            "${_smoke}": [
                ["style", "top", '-5px'],
                ["style", "height", '1100px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-12px'],
                ["style", "width", '1948px']
            ],
            "${_landfill}": [
                ["style", "top", '-109px'],
                ["style", "height", '1204px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '2297px']
            ],
            "${_Ocean_-_Reference_1}": [
                ["style", "line-height", '39px'],
                ["style", "opacity", '0'],
                ["style", "left", '62px'],
                ["style", "font-size", '20px'],
                ["style", "top", '982px'],
                ["style", "font-style", 'italic'],
                ["style", "height", '87px'],
                ["style", "width", '576px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Ellipse2}": [
                ["style", "top", '925px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '62px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '404px'],
                ["style", "width", '62px']
            ],
            "${_Text2-Lanscape}": [
                ["style", "line-height", '90px'],
                ["color", "color", 'rgba(254,252,234,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '97px'],
                ["style", "font-size", '56px'],
                ["style", "top", '78px'],
                ["style", "width", '1028px'],
                ["style", "overflow", 'hidden'],
                ["style", "display", 'none'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-style", 'italic'],
                ["style", "height", '364px']
            ],
            "${_Ellipse6}": [
                ["style", "top", '590px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '147px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '69px'],
                ["style", "width", '147px']
            ],
            "${_tree}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_Tar_sands_-_source_1}": [
                ["style", "top", '1040px'],
                ["style", "font-size", '20px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '40px'],
                ["style", "width", '906px']
            ],
            "${_Landfill_-_a}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '856px'],
                ["style", "font-size", '52px'],
                ["style", "top", '777px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "width", '1007px'],
                ["style", "height", '274px']
            ],
            "${_Bubble_-_marine_life}": [
                ["style", "line-height", '64px'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1599px'],
                ["style", "font-size", '40px'],
                ["style", "top", '474px'],
                ["style", "height", '160px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "width", '229px'],
                ["style", "font-style", 'normal']
            ],
            "${_Ellipse5}": [
                ["style", "top", '198px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '73px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '743px'],
                ["style", "width", '73px']
            ],
            "${_Landfill_-_c}": [
                ["style", "top", '123px'],
                ["style", "font-size", '50px'],
                ["style", "line-height", '90px'],
                ["style", "font-style", 'normal'],
                ["style", "height", '222px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '587px'],
                ["style", "width", '1065px']
            ],
            "${_Tar_Sands_-a}": [
                ["style", "line-height", '90px'],
                ["style", "letter-spacing", '0'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '74px'],
                ["style", "font-size", '50px'],
                ["style", "top", '184px'],
                ["style", "width", '1045px'],
                ["style", "height", '242px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "word-spacing", '0px'],
                ["style", "font-style", 'normal']
            ],
            "${_Black_Rectangle}": [
                ["style", "top", '-16px'],
                ["style", "opacity", '1'],
                ["style", "left", '-16px'],
                ["style", "width", '1959px']
            ],
            "${_Spark_-_b}": [
                ["style", "top", '665px'],
                ["style", "text-align", 'center'],
                ["style", "opacity", '0.000000'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Courier, Courier New, monospace'],
                ["style", "left", '302px'],
                ["style", "font-size", '93px']
            ],
            "${_Button-Symbol}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer']
            ],
            "${__3d-abstract_hdwallpaper_autumn-forest_51194}": [
                ["style", "top", '-312px'],
                ["style", "display", 'none'],
                ["transform", "rotateZ", '21deg'],
                ["style", "height", '1709px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-538px'],
                ["style", "width", '3037px']
            ],
            "${_IMG_0327}": [
                ["style", "top", '574px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '470px'],
                ["style", "width", '483px']
            ],
            "${_Ellipse4}": [
                ["style", "top", '558px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "height", '88px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1732px'],
                ["style", "width", '87px']
            ],
            "${_IMG_03042}": [
                ["style", "top", '49px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '479px'],
                ["style", "width", '483px']
            ],
            "${_IMG_0326}": [
                ["style", "top", '55px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
            ],
            "${_Welcome_-_title}": [
                ["style", "top", '99px'],
                ["color", "color", 'rgba(86,86,86,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '115px'],
                ["style", "height", '143px']
            ],
            "${_Text1_-_Intro}": [
                ["style", "line-height", '90px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '76px'],
                ["style", "width", '785px'],
                ["style", "top", '770px'],
                ["style", "font-weight", '400'],
                ["style", "height", '261px'],
                ["style", "font-style", 'italic'],
                ["style", "display", 'block'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "word-spacing", '6px'],
                ["style", "font-size", '55px']
            ],
            "${_Source_-_ocean}": [
                ["style", "line-height", '40px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '949px'],
                ["style", "top", '1014px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '62px'],
                ["style", "height", '46px']
            ],
            "${_Smoke-_ref_1}": [
                ["style", "top", '1040px'],
                ["style", "font-size", '20px'],
                ["style", "left", '97px'],
                ["style", "height", '34px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '576px']
            ],
            "${_IMG_0309}": [
                ["style", "top", '27px'],
                ["style", "display", 'block'],
                ["style", "height", '506px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1035px'],
                ["style", "width", '506px']
            ],
            "${_static2}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1px']
            ],
            "${_Tar_sands_-_b}": [
                ["style", "top", '758px'],
                ["style", "font-size", '50px'],
                ["style", "line-height", '90px'],
                ["style", "height", '215px'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '604px'],
                ["style", "width", '1246px']
            ],
            "${_Incinerator_-_c}": [
                ["style", "line-height", '90px'],
                ["style", "height", '274px'],
                ["style", "top", '621px'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '825px'],
                ["style", "width", '1052px']
            ],
            "${_Ellipse9}": [
                ["style", "top", '816px'],
                ["color", "background-color", 'rgba(0,0,0,1)'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '169px'],
                ["style", "opacity", '0'],
                ["style", "left", '1450px'],
                ["style", "width", '167px']
            ],
            "${_emerald}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px']
            ],
            "${_IMG_0330}": [
                ["style", "top", '570px'],
                ["style", "height", '483px'],
                ["style", "display", 'none'],
                ["style", "left", '479px'],
                ["style", "width", '483px']
            ],
            "${_Transition_call}": [
                ["style", "line-height", '98px'],
                ["color", "color", 'rgba(28,178,160,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '125px'],
                ["style", "font-size", '62px'],
                ["style", "top", '180px'],
                ["style", "height", '721px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "opacity", '0'],
                ["style", "width", '1234px']
            ],
            "${_EPA_-_Landfill}": [
                ["style", "opacity", '0.000000'],
                ["style", "left", '20px'],
                ["style", "font-size", '20px'],
                ["style", "top", '1037px'],
                ["style", "width", '1166px'],
                ["style", "height", '48px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "font-style", 'normal'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 165898,
            autoPlay: true,
            timeline: [
                { id: "eid4319", tween: [ "style", "${_Source_-_Tar_sands_2}", "top", '1040px', { fromValue: '1040px'}], position: 83104, duration: 0 },
                { id: "eid4670", tween: [ "style", "${_Transition_call}", "opacity", '0', { fromValue: '0'}], position: 132250, duration: 0 },
                { id: "eid4671", tween: [ "style", "${_Transition_call}", "opacity", '1', { fromValue: '0'}], position: 132750, duration: 0 },
                { id: "eid4672", tween: [ "style", "${_Transition_call}", "opacity", '1', { fromValue: '1'}], position: 137500, duration: 0 },
                { id: "eid4673", tween: [ "style", "${_Transition_call}", "opacity", '0', { fromValue: '1'}], position: 137750, duration: 0 },
                { id: "eid4646", tween: [ "color", "${_Ellipse3}", "background-color", 'rgba(74,27,176,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 111738, duration: 1500 },
                { id: "eid925", tween: [ "style", "${_IMG_03062}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid872", tween: [ "style", "${_IMG_03062}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid877", tween: [ "style", "${_IMG_03062}", "display", 'block', { fromValue: 'none'}], position: 120548, duration: 0 },
                { id: "eid910", tween: [ "style", "${_IMG_03062}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid680", tween: [ "style", "${_Ellipse4}", "left", '1368px', { fromValue: '1732px'}], position: 98500, duration: 6000 },
                { id: "eid684", tween: [ "style", "${_Ellipse3}", "opacity", '1', { fromValue: '0.000000'}], position: 97603, duration: 1500 },
                { id: "eid688", tween: [ "style", "${_Ellipse3}", "opacity", '0', { fromValue: '1'}], position: 118596, duration: 1000 },
                { id: "eid4660", tween: [ "style", "${_Bubble_-_marine_life}", "line-height", '64px', { fromValue: '64px'}], position: 103884, duration: 0 },
                { id: "eid1894", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid1919", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 9332, duration: 0 },
                { id: "eid3890", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 9798, duration: 94202 },
                { id: "eid3891", tween: [ "color", "${_Stage}", "background-color", 'rgba(246,243,239,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 110103, duration: 750 },
                { id: "eid4740", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(246,243,239,1.00)'}], position: 156000, duration: 0 },
                { id: "eid592", tween: [ "style", "${_Ellipse8}", "height", '943px', { fromValue: '118px'}], position: 98386, duration: 15864 },
                { id: "eid897", tween: [ "style", "${_IMG_03062}", "top", '59px', { fromValue: '574px'}], position: 120548, duration: 0 },
                { id: "eid4734", tween: [ "style", "${_Welcome_text_-_a}", "opacity", '0.83874198717949', { fromValue: '0.000000'}], position: 138419, duration: 831 },
                { id: "eid4737", tween: [ "style", "${_Welcome_text_-_a}", "opacity", '0', { fromValue: '0.838742'}], position: 148250, duration: 750 },
                { id: "eid6", tween: [ "style", "${_earth}", "width", '2106px', { fromValue: '1948px'}], position: 0, duration: 8280 },
                { id: "eid1303", tween: [ "style", "${_Text1_-_Intro}", "display", 'none', { fromValue: 'block'}], position: 8044, duration: 0 },
                { id: "eid189", tween: [ "style", "${_ocean}", "opacity", '1', { fromValue: '0.000000'}], position: 59638, duration: 612 },
                { id: "eid192", tween: [ "style", "${_ocean}", "opacity", '0', { fromValue: '1'}], position: 72500, duration: 1250 },
                { id: "eid4725", tween: [ "style", "${_static22}", "left", '-4px', { fromValue: '33px'}], position: 156930, duration: 184 },
                { id: "eid4727", tween: [ "style", "${_static22}", "left", '-16px', { fromValue: '-4px'}], position: 157114, duration: 136 },
                { id: "eid4729", tween: [ "style", "${_static22}", "left", '-11px', { fromValue: '-16px'}], position: 157250, duration: 125 },
                { id: "eid4721", tween: [ "style", "${_static22}", "top", '173px', { fromValue: '644px'}], position: 156500, duration: 250 },
                { id: "eid4722", tween: [ "style", "${_static22}", "top", '263px', { fromValue: '173px'}], position: 156750, duration: 180 },
                { id: "eid4724", tween: [ "style", "${_static22}", "top", '345px', { fromValue: '263px'}], position: 156930, duration: 184 },
                { id: "eid4726", tween: [ "style", "${_static22}", "top", '414px', { fromValue: '345px'}], position: 157114, duration: 136 },
                { id: "eid4728", tween: [ "style", "${_static22}", "top", '477px', { fromValue: '414px'}], position: 157250, duration: 125 },
                { id: "eid4730", tween: [ "style", "${_static22}", "top", '66px', { fromValue: '477px'}], position: 157375, duration: 125 },
                { id: "eid595", tween: [ "style", "${_Ellipse8}", "top", '-176px', { fromValue: '59px'}], position: 98386, duration: 15864 },
                { id: "eid4684", tween: [ "style", "${_static22}", "opacity", '0.51742788461538', { fromValue: '0.000000'}], position: 152250, duration: 750 },
                { id: "eid4687", tween: [ "style", "${_static22}", "opacity", '0', { fromValue: '0.517428'}], position: 153500, duration: 1000 },
                { id: "eid4690", tween: [ "style", "${_static22}", "opacity", '0.50200320512821', { fromValue: '0.000000'}], position: 154851, duration: 649 },
                { id: "eid4693", tween: [ "style", "${_static22}", "opacity", '0', { fromValue: '0.502003'}], position: 155750, duration: 250 },
                { id: "eid4698", tween: [ "style", "${_static22}", "opacity", '0.50200320512821', { fromValue: '0.000000'}], position: 156250, duration: 250 },
                { id: "eid4697", tween: [ "style", "${_static22}", "opacity", '0', { fromValue: '0.502003'}], position: 156750, duration: 833 },
                { id: "eid678", tween: [ "style", "${_Ellipse4}", "height", '660px', { fromValue: '88px'}], position: 98500, duration: 6000 },
                { id: "eid957", tween: [ "style", "${_Ricket_-_a}", "display", 'none', { fromValue: 'none'}], position: 71500, duration: 0 },
                { id: "eid958", tween: [ "style", "${_Ricket_-_a}", "display", 'block', { fromValue: 'none'}], position: 125552, duration: 0 },
                { id: "eid437", tween: [ "motion", "${_Ellipse}", [[285.01, 235, 0, 0],[285.01, 235, 0, 0]]], position: 102000, duration: 0 },
                { id: "eid438", tween: [ "motion", "${_Ellipse}", [[273.52, 234.5, 0, 0],[273.52, 234.5, 0, 0]]], position: 103000, duration: 0 },
                { id: "eid658", tween: [ "style", "${_Ellipse5}", "left", '467px', { fromValue: '743px'}], position: 98000, duration: 6500 },
                { id: "eid597", tween: [ "style", "${_Ellipse8}", "opacity", '0.8', { fromValue: '0'}], position: 98386, duration: 864 },
                { id: "eid760", tween: [ "style", "${_Ellipse8}", "opacity", '0', { fromValue: '0.8'}], position: 118000, duration: 1500 },
                { id: "eid723", tween: [ "style", "${_Ellipse_-_Big}", "opacity", '0.75', { fromValue: '0.000000'}], position: 101500, duration: 750 },
                { id: "eid745", tween: [ "style", "${_Ellipse_-_Big}", "opacity", '1', { fromValue: '0.75'}], position: 102250, duration: 1500 },
                { id: "eid750", tween: [ "style", "${_Ellipse_-_Big}", "opacity", '0.7', { fromValue: '1'}], position: 103750, duration: 250 },
                { id: "eid751", tween: [ "style", "${_Ellipse_-_Big}", "opacity", '1', { fromValue: '0.7'}], position: 104000, duration: 4875 },
                { id: "eid4629", tween: [ "style", "${_Ellipse_-_Big}", "opacity", '0.7', { fromValue: '1'}], position: 108875, duration: 4125 },
                { id: "eid741", tween: [ "style", "${_Ellipse_-_Big}", "opacity", '0', { fromValue: '0.7'}], position: 113238, duration: 1500 },
                { id: "eid65", tween: [ "style", "${_Text2-Lanscape}", "opacity", '0.6', { fromValue: '0'}], position: 10000, duration: 1250 },
                { id: "eid66", tween: [ "style", "${_Text2-Lanscape}", "opacity", '0', { fromValue: '0.6'}], position: 15250, duration: 1500 },
                { id: "eid3607", tween: [ "style", "${_landfill}", "left", '-369px', { fromValue: '0px'}], position: 45799, duration: 13514 },
                { id: "eid479", tween: [ "style", "${_Ellipse}", "opacity", '0.8', { fromValue: '0'}], position: 97821, duration: 782 },
                { id: "eid501", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '0.8'}], position: 111437, duration: 10611, easing: "easeInOutCirc" },
                { id: "eid982", tween: [ "style", "${_Ricket_-_a}", "line-height", '90px', { fromValue: '90px'}], position: 134000, duration: 0 },
                { id: "eid10", tween: [ "style", "${_earth}", "left", '-4.48%', { fromValue: '-0.94%'}], position: 0, duration: 8280 },
                { id: "eid4333", tween: [ "style", "${_smoke}", "top", '-144px', { fromValue: '-5px'}], position: 86000, duration: 11500 },
                { id: "eid782", tween: [ "style", "${_IMG_0306}", "opacity", '0.68', { fromValue: '0.000000'}], position: 121298, duration: 0 },
                { id: "eid623", tween: [ "style", "${_Ellipse7}", "height", '848px', { fromValue: '143px'}], position: 98000, duration: 16250 },
                { id: "eid4437", tween: [ "style", "${_Incinerator_-_b}", "opacity", '1', { fromValue: '0'}], position: 87141, duration: 500 },
                { id: "eid4440", tween: [ "style", "${_Incinerator_-_b}", "opacity", '0', { fromValue: '1'}], position: 92138, duration: 414 },
                { id: "eid4334", tween: [ "style", "${_smoke}", "width", '2215px', { fromValue: '1948px'}], position: 86000, duration: 11500 },
                { id: "eid4083", tween: [ "style", "${_Landfill_-_d}", "opacity", '1', { fromValue: '0.000000'}], position: 47250, duration: 262 },
                { id: "eid4086", tween: [ "style", "${_Landfill_-_d}", "opacity", '0', { fromValue: '1'}], position: 50408, duration: 342 },
                { id: "eid3247", tween: [ "style", "${_Text2-Lanscape}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3244", tween: [ "style", "${_Text2-Lanscape}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid3250", tween: [ "style", "${_Text2-Lanscape}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid695", tween: [ "style", "${_Ellipse3}", "height", '829px', { fromValue: '73px'}], position: 97603, duration: 7500 },
                { id: "eid1304", tween: [ "style", "${_earth}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid4680", tween: [ "style", "${_Revolution_is_upon_us}", "opacity", '1', { fromValue: '0'}], position: 149750, duration: 1000 },
                { id: "eid4677", tween: [ "style", "${_Revolution_is_upon_us}", "opacity", '0', { fromValue: '1'}], position: 156750, duration: 1000 },
                { id: "eid4654", tween: [ "style", "${_Bubble_-_oil}", "font-size", '40px', { fromValue: '40px'}], position: 103884, duration: 0 },
                { id: "eid4015", tween: [ "style", "${_Montage_text}", "opacity", '0', { fromValue: '0'}], position: 119715, duration: 0 },
                { id: "eid4016", tween: [ "style", "${_Montage_text}", "opacity", '1', { fromValue: '0'}], position: 120548, duration: 0 },
                { id: "eid4017", tween: [ "style", "${_Montage_text}", "opacity", '1', { fromValue: '1'}], position: 124048, duration: 0 },
                { id: "eid4018", tween: [ "style", "${_Montage_text}", "opacity", '0', { fromValue: '1'}], position: 125633, duration: 0 },
                { id: "eid3255", tween: [ "style", "${_Text_-_Forest}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3249", tween: [ "style", "${_Text_-_Forest}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid3246", tween: [ "style", "${_Text_-_Forest}", "display", 'block', { fromValue: 'none'}], position: 13595, duration: 0 },
                { id: "eid3258", tween: [ "style", "${_Text_-_Forest}", "display", 'none', { fromValue: 'block'}], position: 36250, duration: 0 },
                { id: "eid3684", tween: [ "style", "${_Ocean_-_b}", "opacity", '1', { fromValue: '0.000000'}], position: 65500, duration: 500 },
                { id: "eid3687", tween: [ "style", "${_Ocean_-_b}", "opacity", '0', { fromValue: '1'}], position: 72500, duration: 559 },
                { id: "eid442", tween: [ "style", "${_earthinspace}", "opacity", '1', { fromValue: '0.000000'}], position: 97603, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid445", tween: [ "style", "${_earthinspace}", "opacity", '0', { fromValue: '1'}], position: 110103, duration: 2397, easing: "easeInOutCirc" },
                { id: "eid171", tween: [ "style", "${_Text4-Treeb}", "font-size", '48px', { fromValue: '48px'}], position: 39000, duration: 0 },
                { id: "eid4642", tween: [ "color", "${_Ellipse5}", "background-color", 'rgba(28,178,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 111988, duration: 1500 },
                { id: "eid730", tween: [ "style", "${_Ellipse_-_Big}", "height", '1765px', { fromValue: '110px'}], position: 102000, duration: 11815 },
                { id: "eid893", tween: [ "style", "${_IMG_03052}", "top", '574px', { fromValue: '574px'}], position: 119715, duration: 0 },
                { id: "eid4662", tween: [ "style", "${_Bubble_-_litter}", "line-height", '64px', { fromValue: '64px'}], position: 103884, duration: 0 },
                { id: "eid4666", tween: [ "style", "${_Bubble-tar_sands}", "line-height", '64px', { fromValue: '64px'}], position: 103884, duration: 0 },
                { id: "eid628", tween: [ "style", "${_Ellipse6}", "opacity", '0.7', { fromValue: '0.000000'}], position: 98000, duration: 1500 },
                { id: "eid632", tween: [ "style", "${_Ellipse6}", "opacity", '0', { fromValue: '0.7'}], position: 117250, duration: 1500 },
                { id: "eid78", tween: [ "style", "${_Text_-_Forest}", "opacity", '0.75', { fromValue: '0'}], position: 16750, duration: 1940 },
                { id: "eid79", tween: [ "style", "${_Text_-_Forest}", "opacity", '0', { fromValue: '0.75'}], position: 28000, duration: 4956 },
                { id: "eid4668", tween: [ "style", "${_Bubble_-_carbon}", "line-height", '64px', { fromValue: '64px'}], position: 103884, duration: 0 },
                { id: "eid4661", tween: [ "style", "${_Bubble_-_Mining}", "line-height", '64px', { fromValue: '64px'}], position: 103884, duration: 0 },
                { id: "eid4658", tween: [ "style", "${_Bubble_-_Toxics}", "font-size", '40px', { fromValue: '40px'}], position: 103884, duration: 0 },
                { id: "eid4657", tween: [ "style", "${_Bubble-tar_sands}", "font-size", '40px', { fromValue: '40px'}], position: 103884, duration: 0 },
                { id: "eid981", tween: [ "style", "${_Final_page_-_tagline}", "opacity", '1', { fromValue: '0.000000'}], position: 158198, duration: 1000 },
                { id: "eid4453", tween: [ "style", "${_Final_page_-_tagline}", "opacity", '1', { fromValue: '1'}], position: 165898, duration: 0 },
                { id: "eid645", tween: [ "style", "${_Ellipse5}", "opacity", '0.7', { fromValue: '0.000000'}], position: 98000, duration: 1000 },
                { id: "eid649", tween: [ "style", "${_Ellipse5}", "opacity", '0', { fromValue: '0.7'}], position: 117000, duration: 1500 },
                { id: "eid640", tween: [ "style", "${_Ellipse6}", "height", '808px', { fromValue: '147px'}], position: 98000, duration: 16250 },
                { id: "eid643", tween: [ "style", "${_Ellipse6}", "top", '285px', { fromValue: '590px'}], position: 98000, duration: 16250 },
                { id: "eid239", tween: [ "style", "${_Landfill_-_a}", "opacity", '1', { fromValue: '0.000000'}], position: 53750, duration: 319 },
                { id: "eid242", tween: [ "style", "${_Landfill_-_a}", "opacity", '0', { fromValue: '1'}], position: 57369, duration: 386 },
                { id: "eid916", tween: [ "style", "${_IMG_0327}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid863", tween: [ "style", "${_IMG_0327}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid888", tween: [ "style", "${_IMG_0327}", "display", 'block', { fromValue: 'none'}], position: 122798, duration: 0 },
                { id: "eid901", tween: [ "style", "${_IMG_0327}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid459", tween: [ "color", "${_Bubble_-_Mining}", "color", 'rgba(187,187,187,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(187,187,187,1.00)'}], position: 98603, duration: 0, easing: "easeInOutCirc" },
                { id: "eid594", tween: [ "style", "${_Ellipse8}", "left", '1101px', { fromValue: '1617px'}], position: 98386, duration: 15864 },
                { id: "eid679", tween: [ "style", "${_Ellipse4}", "top", '219px', { fromValue: '558px'}], position: 98500, duration: 6000 },
                { id: "eid624", tween: [ "style", "${_Ellipse7}", "top", '391px', { fromValue: '914px'}], position: 98000, duration: 16250 },
                { id: "eid583", tween: [ "style", "${_Ellipse9}", "left", '1083px', { fromValue: '1450px'}], position: 98615, duration: 16385 },
                { id: "eid698", tween: [ "style", "${_Ellipse3}", "top", '-54px', { fromValue: '146px'}], position: 97603, duration: 7500 },
                { id: "eid1000", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "left", '-507px', { fromValue: '-538px'}], position: 16125, duration: 9169 },
                { id: "eid3256", tween: [ "style", "${_lens-flare}", "display", 'none', { fromValue: 'none'}], position: 4287, duration: 0 },
                { id: "eid3253", tween: [ "style", "${_lens-flare}", "display", 'block', { fromValue: 'none'}], position: 12665, duration: 0 },
                { id: "eid3259", tween: [ "style", "${_lens-flare}", "display", 'none', { fromValue: 'block'}], position: 50537, duration: 0 },
                { id: "eid4648", tween: [ "color", "${_Ellipse2}", "background-color", 'rgba(28,178,160,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 111437, duration: 1500 },
                { id: "eid4651", tween: [ "style", "${_Bubble_-_marine_life}", "font-size", '40px', { fromValue: '40px'}], position: 103884, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Text4-Treeb}", "left", '1122px', { fromValue: '1122px'}], position: 39000, duration: 0 },
                { id: "eid3479", tween: [ "style", "${_Text4-Treeb}", "left", '1122px', { fromValue: '1120px'}], position: 40250, duration: 1100, easing: "easeInElastic" },
                { id: "eid3480", tween: [ "style", "${_Text4-Treeb}", "left", '1122px', { fromValue: '1122px'}], position: 41679, duration: 0 },
                { id: "eid3481", tween: [ "style", "${_Text4-Treeb}", "left", '1132px', { fromValue: '1122px'}], position: 41775, duration: 0 },
                { id: "eid3482", tween: [ "style", "${_Text4-Treeb}", "left", '1122px', { fromValue: '1132px'}], position: 41775, duration: 43 },
                { id: "eid3483", tween: [ "style", "${_Text4-Treeb}", "left", '88px', { fromValue: '1122px'}], position: 41994, duration: 0 },
                { id: "eid3484", tween: [ "style", "${_Text4-Treeb}", "left", '1122px', { fromValue: '1132px'}], position: 42039, duration: 53 },
                { id: "eid3485", tween: [ "style", "${_Text4-Treeb}", "left", '1133px', { fromValue: '1122px'}], position: 42300, duration: 60 },
                { id: "eid3486", tween: [ "style", "${_Text4-Treeb}", "left", '1122px', { fromValue: '1133px'}], position: 42360, duration: 47 },
                { id: "eid3487", tween: [ "style", "${_Text4-Treeb}", "left", '1132px', { fromValue: '1122px'}], position: 42785, duration: 51 },
                { id: "eid3488", tween: [ "style", "${_Text4-Treeb}", "left", '1122px', { fromValue: '1132px'}], position: 42836, duration: 67 },
                { id: "eid3489", tween: [ "style", "${_Text4-Treeb}", "left", '1133px', { fromValue: '1122px'}], position: 43545, duration: 60 },
                { id: "eid3490", tween: [ "style", "${_Text4-Treeb}", "left", '1122px', { fromValue: '1133px'}], position: 43605, duration: 47 },
                { id: "eid3491", tween: [ "style", "${_Text4-Treeb}", "left", '1132px', { fromValue: '1122px'}], position: 43717, duration: 51 },
                { id: "eid3492", tween: [ "style", "${_Text4-Treeb}", "left", '1122px', { fromValue: '1132px'}], position: 43825, duration: 127 },
                { id: "eid747", tween: [ "color", "${_Ellipse_-_Big}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(33,31,31,1)'}], position: 102000, duration: 3500 },
                { id: "eid749", tween: [ "color", "${_Ellipse_-_Big}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 105750, duration: 0 },
                { id: "eid4626", tween: [ "color", "${_Ellipse_-_Big}", "background-color", 'rgba(178,28,104,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 111738, duration: 1500 },
                { id: "eid3608", tween: [ "style", "${_landfill}", "top", '-109px', { fromValue: '-109px'}], position: 53457, duration: 0 },
                { id: "eid743", tween: [ "style", "${_Ellipse_-_Big}", "top", '-317px', { fromValue: '533px'}], position: 102000, duration: 11815 },
                { id: "eid732", tween: [ "style", "${_Ellipse_-_Big}", "width", '1781px', { fromValue: '111px'}], position: 102000, duration: 11815 },
                { id: "eid475", tween: [ "style", "${_Bubble_-_Diet}", "opacity", '0', { fromValue: '0'}], position: 101405, duration: 0, easing: "easeInOutCirc" },
                { id: "eid496", tween: [ "style", "${_Bubble_-_Diet}", "opacity", '1', { fromValue: '0'}], position: 102052, duration: 0, easing: "easeInOutCirc" },
                { id: "eid518", tween: [ "style", "${_Bubble_-_Diet}", "opacity", '1', { fromValue: '1'}], position: 105500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid538", tween: [ "style", "${_Bubble_-_Diet}", "opacity", '0', { fromValue: '1'}], position: 105885, duration: 0, easing: "easeInOutCirc" },
                { id: "eid582", tween: [ "style", "${_Ellipse9}", "width", '780px', { fromValue: '167px'}], position: 98615, duration: 16385 },
                { id: "eid924", tween: [ "style", "${_IMG_03072}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid871", tween: [ "style", "${_IMG_03072}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid878", tween: [ "style", "${_IMG_03072}", "display", 'block', { fromValue: 'none'}], position: 120814, duration: 0 },
                { id: "eid909", tween: [ "style", "${_IMG_03072}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid765", tween: [ "style", "${_rickett}", "opacity", '1', { fromValue: '0.000000'}], position: 125552, duration: 1000 },
                { id: "eid768", tween: [ "style", "${_rickett}", "opacity", '0', { fromValue: '1'}], position: 130750, duration: 1500 },
                { id: "eid4719", tween: [ "style", "${_static22}", "width", '1944px', { fromValue: '1920px'}], position: 156250, duration: 1250 },
                { id: "eid742", tween: [ "style", "${_Ellipse_-_Big}", "left", '55px', { fromValue: '678px'}], position: 102000, duration: 11815 },
                { id: "eid701", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0.000000'}], position: 101000, duration: 1000 },
                { id: "eid703", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 118250, duration: 1000 },
                { id: "eid4667", tween: [ "style", "${_Bubble_-_Toxics}", "line-height", '64px', { fromValue: '64px'}], position: 103884, duration: 0 },
                { id: "eid4", tween: [ "style", "${_earth}", "height", '1317px', { fromValue: '1217px'}], position: 0, duration: 8280 },
                { id: "eid4652", tween: [ "style", "${_Bubble_-_Mining}", "font-size", '40px', { fromValue: '40px'}], position: 103884, duration: 0 },
                { id: "eid927", tween: [ "style", "${_IMG_03042}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid874", tween: [ "style", "${_IMG_03042}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid875", tween: [ "style", "${_IMG_03042}", "display", 'block', { fromValue: 'none'}], position: 120048, duration: 0 },
                { id: "eid912", tween: [ "style", "${_IMG_03042}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid4638", tween: [ "color", "${_Ellipse7}", "background-color", 'rgba(93,143,22,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 111738, duration: 1500 },
                { id: "eid4636", tween: [ "color", "${_Ellipse8}", "background-color", 'rgba(178,152,28,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 111988, duration: 1500 },
                { id: "eid659", tween: [ "style", "${_Ellipse5}", "top", '-51px', { fromValue: '198px'}], position: 98000, duration: 6500 },
                { id: "eid80", tween: [ "style", "${_Text_-_Forest}", "left", '92px', { fromValue: '92px'}], position: 18044, duration: 0 },
                { id: "eid719", tween: [ "style", "${_Ellipse2}", "left", '100px', { fromValue: '404px'}], position: 101000, duration: 5500 },
                { id: "eid4634", tween: [ "color", "${_Ellipse9}", "background-color", 'rgba(209,96,18,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 112834, duration: 1500 },
                { id: "eid4632", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(237,38,79,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 111238, duration: 1500 },
                { id: "eid182", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.000000'}], position: 45799, duration: 41 },
                { id: "eid3823", tween: [ "style", "${_landfill}", "opacity", '0.50747863247863', { fromValue: '1'}], position: 52255, duration: 58 },
                { id: "eid3824", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.50747863247863'}], position: 52313, duration: 51 },
                { id: "eid3812", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '1'}], position: 52442, duration: 0 },
                { id: "eid3813", tween: [ "style", "${_landfill}", "opacity", '0.64', { fromValue: '1'}], position: 52502, duration: 0 },
                { id: "eid3814", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.46150507478632'}], position: 52597, duration: 0 },
                { id: "eid3817", tween: [ "style", "${_landfill}", "opacity", '0.50747863247863', { fromValue: '1'}], position: 53135, duration: 55 },
                { id: "eid3818", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.50747863247863'}], position: 53191, duration: 169 },
                { id: "eid3819", tween: [ "style", "${_landfill}", "opacity", '0.50747863247863', { fromValue: '1'}], position: 54273, duration: 33 },
                { id: "eid3820", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.50747863247863'}], position: 54306, duration: 132 },
                { id: "eid3821", tween: [ "style", "${_landfill}", "opacity", '0.50747863247863', { fromValue: '1'}], position: 54536, duration: 40 },
                { id: "eid3822", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.50747863247863'}], position: 54576, duration: 216 },
                { id: "eid4096", tween: [ "style", "${_landfill}", "opacity", '0.50747863247863', { fromValue: '1'}], position: 55087, duration: 40 },
                { id: "eid4097", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.50747863247863'}], position: 55127, duration: 123 },
                { id: "eid4098", tween: [ "style", "${_landfill}", "opacity", '0.50747863247863', { fromValue: '1'}], position: 55611, duration: 40 },
                { id: "eid4099", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.50747863247863'}], position: 55651, duration: 216 },
                { id: "eid4104", tween: [ "style", "${_landfill}", "opacity", '0.50747863247863', { fromValue: '1'}], position: 58136, duration: 40 },
                { id: "eid4105", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.50747863247863'}], position: 58175, duration: 146 },
                { id: "eid4100", tween: [ "style", "${_landfill}", "opacity", '0.50747863247863', { fromValue: '1'}], position: 58394, duration: 40 },
                { id: "eid4101", tween: [ "style", "${_landfill}", "opacity", '1', { fromValue: '0.50747863247863'}], position: 58434, duration: 216 },
                { id: "eid185", tween: [ "style", "${_landfill}", "opacity", '0', { fromValue: '1'}], position: 58734, duration: 579 },
                { id: "eid4640", tween: [ "color", "${_Ellipse6}", "background-color", 'rgba(26,170,67,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 111738, duration: 1500 },
                { id: "eid133", tween: [ "style", "${_Text5-Tree1}", "opacity", '0.85', { fromValue: '0.000000'}], position: 33000, duration: 2750 },
                { id: "eid135", tween: [ "style", "${_Text5-Tree1}", "opacity", '0', { fromValue: '0.85'}], position: 38500, duration: 1500 },
                { id: "eid923", tween: [ "style", "${_IMG_03082}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid870", tween: [ "style", "${_IMG_03082}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid879", tween: [ "style", "${_IMG_03082}", "display", 'block', { fromValue: 'none'}], position: 121048, duration: 0 },
                { id: "eid908", tween: [ "style", "${_IMG_03082}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text2-Lanscape}", "font-size", '56px', { fromValue: '56px'}], position: 12665, duration: 0 },
                { id: "eid86", tween: [ "style", "${_Text_-_Forest}", "width", '1389px', { fromValue: '1389px'}], position: 18044, duration: 0 },
                { id: "eid593", tween: [ "style", "${_Ellipse8}", "width", '943px', { fromValue: '118px'}], position: 98386, duration: 15864 },
                { id: "eid4332", tween: [ "style", "${_smoke}", "height", '1250px', { fromValue: '1100px'}], position: 86000, duration: 11500 },
                { id: "eid4232", tween: [ "style", "${_static2}", "opacity", '0.28691102991453', { fromValue: '0.000000'}], position: 54536, duration: 40 },
                { id: "eid4235", tween: [ "style", "${_static2}", "opacity", '0.3', { fromValue: '0.28691102991453'}], position: 54576, duration: 100 },
                { id: "eid4574", tween: [ "style", "${_static2}", "opacity", '0.3', { fromValue: '0.3'}], position: 55127, duration: 0 },
                { id: "eid919", tween: [ "style", "${_IMG_0324}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid866", tween: [ "style", "${_IMG_0324}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid884", tween: [ "style", "${_IMG_0324}", "display", 'block', { fromValue: 'none'}], position: 122048, duration: 0 },
                { id: "eid904", tween: [ "style", "${_IMG_0324}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid4357", tween: [ "style", "${_Smoke-_ref_1}", "opacity", '0.49479166666667', { fromValue: '0.000000'}], position: 87000, duration: 500 },
                { id: "eid4358", tween: [ "style", "${_Smoke-_ref_1}", "opacity", '0.50070112179487', { fromValue: '0.49479166666667'}], position: 87500, duration: 4250 },
                { id: "eid4360", tween: [ "style", "${_Smoke-_ref_1}", "opacity", '0', { fromValue: '0.500701'}], position: 91750, duration: 500 },
                { id: "eid51", tween: [ "style", "${_Text1_-_Intro}", "left", '78px', { fromValue: '76px'}], position: 2858, duration: 1100, easing: "easeInElastic" },
                { id: "eid2527", tween: [ "style", "${_Text1_-_Intro}", "left", '78px', { fromValue: '78px'}], position: 4287, duration: 0 },
                { id: "eid2528", tween: [ "style", "${_Text1_-_Intro}", "left", '88px', { fromValue: '78px'}], position: 4383, duration: 0 },
                { id: "eid2529", tween: [ "style", "${_Text1_-_Intro}", "left", '78px', { fromValue: '88px'}], position: 4383, duration: 43 },
                { id: "eid2513", tween: [ "style", "${_Text1_-_Intro}", "left", '88px', { fromValue: '78px'}], position: 4601, duration: 0 },
                { id: "eid1123", tween: [ "style", "${_Text1_-_Intro}", "left", '78px', { fromValue: '88px'}], position: 4647, duration: 53 },
                { id: "eid1299", tween: [ "style", "${_Text1_-_Intro}", "left", '89px', { fromValue: '78px'}], position: 4907, duration: 60 },
                { id: "eid1125", tween: [ "style", "${_Text1_-_Intro}", "left", '78px', { fromValue: '89px'}], position: 4967, duration: 47 },
                { id: "eid1300", tween: [ "style", "${_Text1_-_Intro}", "left", '88px', { fromValue: '78px'}], position: 5392, duration: 51 },
                { id: "eid1127", tween: [ "style", "${_Text1_-_Intro}", "left", '78px', { fromValue: '88px'}], position: 5443, duration: 67 },
                { id: "eid2516", tween: [ "style", "${_Text1_-_Intro}", "left", '89px', { fromValue: '78px'}], position: 6153, duration: 60 },
                { id: "eid2517", tween: [ "style", "${_Text1_-_Intro}", "left", '78px', { fromValue: '89px'}], position: 6213, duration: 47 },
                { id: "eid2518", tween: [ "style", "${_Text1_-_Intro}", "left", '88px', { fromValue: '78px'}], position: 6324, duration: 51 },
                { id: "eid2519", tween: [ "style", "${_Text1_-_Intro}", "left", '78px', { fromValue: '88px'}], position: 6433, duration: 127 },
                { id: "eid4280", tween: [ "style", "${_Tar_sands_-_source_1}", "opacity", '0.5', { fromValue: '0.000000'}], position: 75000, duration: 750 },
                { id: "eid4284", tween: [ "style", "${_Tar_sands_-_source_1}", "opacity", '0', { fromValue: '0.5'}], position: 80000, duration: 500 },
                { id: "eid77", tween: [ "style", "${_Text_-_Forest}", "height", '450px', { fromValue: '450px'}], position: 18044, duration: 0 },
                { id: "eid4665", tween: [ "style", "${_Bubble_-_food_miles}", "line-height", '64px', { fromValue: '64px'}], position: 103884, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Text_-_Forest}", "font-size", '55px', { fromValue: '55px'}], position: 18723, duration: 0 },
                { id: "eid284", tween: [ "style", "${_Spark_-_b}", "opacity", '1', { fromValue: '0.000000'}], position: 113250, duration: 500 },
                { id: "eid287", tween: [ "style", "${_Spark_-_b}", "opacity", '0', { fromValue: '1'}], position: 119500, duration: 500 },
                { id: "eid477", tween: [ "style", "${_Bubble_-_Mining}", "opacity", '0', { fromValue: '0'}], position: 101892, duration: 0, easing: "easeInOutCirc" },
                { id: "eid498", tween: [ "style", "${_Bubble_-_Mining}", "opacity", '1', { fromValue: '0'}], position: 102392, duration: 0, easing: "easeInOutCirc" },
                { id: "eid520", tween: [ "style", "${_Bubble_-_Mining}", "opacity", '1', { fromValue: '1'}], position: 105500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid540", tween: [ "style", "${_Bubble_-_Mining}", "opacity", '0', { fromValue: '1'}], position: 105885, duration: 0, easing: "easeInOutCirc" },
                { id: "eid917", tween: [ "style", "${_IMG_0326}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid864", tween: [ "style", "${_IMG_0326}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid887", tween: [ "style", "${_IMG_0326}", "display", 'block', { fromValue: 'none'}], position: 122548, duration: 0 },
                { id: "eid902", tween: [ "style", "${_IMG_0326}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid4161", tween: [ "style", "${_ocean}", "top", '-25px', { fromValue: '-45px'}], position: 59500, duration: 750, easing: "easeInOutCirc" },
                { id: "eid4249", tween: [ "style", "${_ocean}", "top", '-50px', { fromValue: '-25px'}], position: 60500, duration: 389, easing: "easeOutBack" },
                { id: "eid4111", tween: [ "style", "${_ocean}", "top", '-27px', { fromValue: '-50px'}], position: 60889, duration: 711, easing: "easeInCirc" },
                { id: "eid4112", tween: [ "style", "${_ocean}", "top", '-55px', { fromValue: '-27px'}], position: 62000, duration: 500, easing: "easeInOutCirc" },
                { id: "eid4115", tween: [ "style", "${_ocean}", "top", '-30px', { fromValue: '-55px'}], position: 62500, duration: 500, easing: "easeInCirc" },
                { id: "eid4116", tween: [ "style", "${_ocean}", "top", '-46px', { fromValue: '-30px'}], position: 63500, duration: 750, easing: "easeInOutBack" },
                { id: "eid4119", tween: [ "style", "${_ocean}", "top", '-27px', { fromValue: '-46px'}], position: 64250, duration: 357, easing: "easeInElastic" },
                { id: "eid4121", tween: [ "style", "${_ocean}", "top", '-40px', { fromValue: '-27px'}], position: 65000, duration: 250, easing: "easeInOutSine" },
                { id: "eid4129", tween: [ "style", "${_ocean}", "top", '-21px', { fromValue: '-40px'}], position: 65250, duration: 354, easing: "easeInSine" },
                { id: "eid4130", tween: [ "style", "${_ocean}", "top", '-43px', { fromValue: '-21px'}], position: 65889, duration: 611, easing: "easeOutBack" },
                { id: "eid4131", tween: [ "style", "${_ocean}", "top", '-27px', { fromValue: '-43px'}], position: 66500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid4133", tween: [ "style", "${_ocean}", "top", '-42px', { fromValue: '-27px'}], position: 68500, duration: 750, easing: "easeInOutBack" },
                { id: "eid4244", tween: [ "style", "${_ocean}", "top", '-20px', { fromValue: '-42px'}], position: 69250, duration: 925, easing: "easeInOutCirc" },
                { id: "eid4246", tween: [ "style", "${_ocean}", "top", '-42px', { fromValue: '-20px'}], position: 70750, duration: 1144, easing: "easeOutCirc" },
                { id: "eid4135", tween: [ "style", "${_ocean}", "top", '-21px', { fromValue: '-42px'}], position: 71894, duration: 856, easing: "easeInOutSine" },
                { id: "eid4315", tween: [ "style", "${_ocean}", "top", '-31px', { fromValue: '-21px'}], position: 73750, duration: 9354 },
                { id: "eid3620", tween: [ "style", "${_Landfill_-_c}", "opacity", '1', { fromValue: '0.000000'}], position: 50408, duration: 303 },
                { id: "eid3623", tween: [ "style", "${_Landfill_-_c}", "opacity", '0', { fromValue: '1'}], position: 53750, duration: 339 },
                { id: "eid3257", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3254", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "display", 'block', { fromValue: 'none'}], position: 12665, duration: 0 },
                { id: "eid3260", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "display", 'none', { fromValue: 'block'}], position: 38250, duration: 0 },
                { id: "eid103", tween: [ "style", "${_emerald}", "opacity", '1', { fromValue: '0'}], position: 148500, duration: 748 },
                { id: "eid1074", tween: [ "style", "${_emerald}", "opacity", '0', { fromValue: '1'}], position: 156250, duration: 1000 },
                { id: "eid4406", tween: [ "style", "${_Button-Symbol}", "display", 'block', { fromValue: 'block'}], position: 162500, duration: 0 },
                { id: "eid176", tween: [ "style", "${_Text4-Treeb}", "line-height", '90px', { fromValue: '90px'}], position: 39000, duration: 0 },
                { id: "eid716", tween: [ "style", "${_Ellipse2}", "height", '848px', { fromValue: '62px'}], position: 101000, duration: 5500 },
                { id: "eid4655", tween: [ "style", "${_Bubble_-_Diet}", "font-size", '40px', { fromValue: '40px'}], position: 103884, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Text_-_Forest}", "top", '569px', { fromValue: '569px'}], position: 18044, duration: 0 },
                { id: "eid470", tween: [ "style", "${_Bubble_-_oil}", "opacity", '0', { fromValue: '0'}], position: 99250, duration: 0, easing: "easeInOutCirc" },
                { id: "eid491", tween: [ "style", "${_Bubble_-_oil}", "opacity", '1', { fromValue: '0'}], position: 99500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid513", tween: [ "style", "${_Bubble_-_oil}", "opacity", '1', { fromValue: '1'}], position: 105500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid533", tween: [ "style", "${_Bubble_-_oil}", "opacity", '0', { fromValue: '1'}], position: 105750, duration: 0, easing: "easeInOutCirc" },
                { id: "eid243", tween: [ "style", "${_Ocean-a}", "opacity", '1', { fromValue: '0.000000'}], position: 60378, duration: 512 },
                { id: "eid244", tween: [ "style", "${_Ocean-a}", "opacity", '0', { fromValue: '1'}], position: 65500, duration: 500 },
                { id: "eid913", tween: [ "style", "${_IMG_0330}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid860", tween: [ "style", "${_IMG_0330}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid891", tween: [ "style", "${_IMG_0330}", "display", 'block', { fromValue: 'none'}], position: 124048, duration: 0 },
                { id: "eid898", tween: [ "style", "${_IMG_0330}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid233", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0.000000'}], position: 158198, duration: 1000 },
                { id: "eid234", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '1'}], position: 159698, duration: 0 },
                { id: "eid4268", tween: [ "style", "${_tar-sands}", "left", '-40px', { fromValue: '-99px'}], position: 75000, duration: 8104 },
                { id: "eid4316", tween: [ "style", "${_tar-sands}", "left", '-10px', { fromValue: '-40px'}], position: 83104, duration: 3146 },
                { id: "eid4664", tween: [ "style", "${_Bubble_-_Diet}", "line-height", '64px', { fromValue: '64px'}], position: 103884, duration: 0 },
                { id: "eid476", tween: [ "style", "${_Bubble_-_Toxics}", "opacity", '0', { fromValue: '0'}], position: 101655, duration: 0, easing: "easeInOutCirc" },
                { id: "eid497", tween: [ "style", "${_Bubble_-_Toxics}", "opacity", '1', { fromValue: '0'}], position: 102302, duration: 0, easing: "easeInOutCirc" },
                { id: "eid519", tween: [ "style", "${_Bubble_-_Toxics}", "opacity", '1', { fromValue: '1'}], position: 105500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid539", tween: [ "style", "${_Bubble_-_Toxics}", "opacity", '0', { fromValue: '1'}], position: 105919, duration: 0, easing: "easeInOutCirc" },
                { id: "eid896", tween: [ "style", "${_IMG_03062}", "left", '993px', { fromValue: '460px'}], position: 120548, duration: 0 },
                { id: "eid473", tween: [ "style", "${_Bubble_-_food_miles}", "opacity", '0', { fromValue: '0'}], position: 101000, duration: 0, easing: "easeInOutCirc" },
                { id: "eid494", tween: [ "style", "${_Bubble_-_food_miles}", "opacity", '1', { fromValue: '0'}], position: 101365, duration: 0, easing: "easeInOutCirc" },
                { id: "eid516", tween: [ "style", "${_Bubble_-_food_miles}", "opacity", '1', { fromValue: '1'}], position: 105500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid536", tween: [ "style", "${_Bubble_-_food_miles}", "opacity", '0', { fromValue: '1'}], position: 105750, duration: 0, easing: "easeInOutCirc" },
                { id: "eid926", tween: [ "style", "${_IMG_03052}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid873", tween: [ "style", "${_IMG_03052}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid876", tween: [ "style", "${_IMG_03052}", "display", 'block', { fromValue: 'none'}], position: 120298, duration: 0 },
                { id: "eid911", tween: [ "style", "${_IMG_03052}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid625", tween: [ "style", "${_Ellipse7}", "width", '848px', { fromValue: '143px'}], position: 98000, duration: 16250 },
                { id: "eid74", tween: [ "style", "${_Text_-_Forest}", "line-height", '90px', { fromValue: '90px'}], position: 18723, duration: 0 },
                { id: "eid798", tween: [ "style", "${_IMG_0309}", "opacity", '1', { fromValue: '0.000000'}], position: 125298, duration: 0 },
                { id: "eid266", tween: [ "style", "${_Button-Symbol}", "opacity", '1', { fromValue: '0.000000'}], position: 159198, duration: 1500 },
                { id: "eid4407", tween: [ "style", "${_Button-Symbol}", "opacity", '1', { fromValue: '1'}], position: 162500, duration: 0 },
                { id: "eid4663", tween: [ "style", "${_Bubble_-_oil}", "line-height", '64px', { fromValue: '64px'}], position: 103884, duration: 0 },
                { id: "eid124", tween: [ "style", "${_tree}", "opacity", '1', { fromValue: '0.000000'}], position: 31750, duration: 3093 },
                { id: "eid154", tween: [ "style", "${_tree}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 2000 },
                { id: "eid696", tween: [ "style", "${_Ellipse3}", "width", '829px', { fromValue: '73px'}], position: 97603, duration: 7500 },
                { id: "eid4237", tween: [ "style", "${_static2}", "display", 'none', { fromValue: 'block'}], position: 55127, duration: 0 },
                { id: "eid965", tween: [ "style", "${_Ricket_-_a}", "opacity", '0', { fromValue: '1'}], position: 130750, duration: 1100 },
                { id: "eid163", tween: [ "style", "${_Text4-Treeb}", "opacity", '1', { fromValue: '0.000000'}], position: 39131, duration: 619 },
                { id: "eid3564", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.45', { fromValue: '1'}], position: 39802, duration: 75 },
                { id: "eid3565", tween: [ "style", "${_Text4-Treeb}", "opacity", '1', { fromValue: '0.45'}], position: 39967, duration: 0 },
                { id: "eid3598", tween: [ "style", "${_Text4-Treeb}", "opacity", '1', { fromValue: '1'}], position: 40250, duration: 0 },
                { id: "eid3599", tween: [ "style", "${_Text4-Treeb}", "opacity", '1', { fromValue: '1'}], position: 40500, duration: 0 },
                { id: "eid3600", tween: [ "style", "${_Text4-Treeb}", "opacity", '1', { fromValue: '1'}], position: 41350, duration: 0 },
                { id: "eid3494", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.45', { fromValue: '1'}], position: 41679, duration: 96 },
                { id: "eid3495", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.45'}], position: 41818, duration: 0 },
                { id: "eid3496", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.8'}], position: 41819, duration: 0 },
                { id: "eid3497", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.44280849358974', { fromValue: '0.8'}], position: 41994, duration: 45 },
                { id: "eid3498", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.44280849358974'}], position: 42084, duration: 0 },
                { id: "eid3499", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.8'}], position: 42085, duration: 0 },
                { id: "eid3500", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.55218349358974', { fromValue: '0.8'}], position: 42307, duration: 0 },
                { id: "eid3501", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.45', { fromValue: '0.55218349358974'}], position: 42359, duration: 0 },
                { id: "eid3502", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.45', { fromValue: '0.45'}], position: 42360, duration: 0 },
                { id: "eid3503", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.80189635560044', { fromValue: '0.8'}], position: 42407, duration: 0 },
                { id: "eid3504", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.80189635560044'}], position: 42784, duration: 0 },
                { id: "eid3505", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.8'}], position: 42785, duration: 0 },
                { id: "eid3506", tween: [ "style", "${_Text4-Treeb}", "opacity", '1', { fromValue: '0.44280800223350525'}], position: 42836, duration: 67 },
                { id: "eid3601", tween: [ "style", "${_Text4-Treeb}", "opacity", '1', { fromValue: '1'}], position: 43552, duration: 0 },
                { id: "eid3508", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.80815984881841', { fromValue: '1'}], position: 43605, duration: 47 },
                { id: "eid3509", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.80815984881841'}], position: 43716, duration: 0 },
                { id: "eid3510", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.8'}], position: 43717, duration: 0 },
                { id: "eid3511", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.8'}], position: 43825, duration: 0 },
                { id: "eid3512", tween: [ "style", "${_Text4-Treeb}", "opacity", '0.8', { fromValue: '0.8'}], position: 43952, duration: 0 },
                { id: "eid3513", tween: [ "style", "${_Text4-Treeb}", "opacity", '1', { fromValue: '0.8'}], position: 44084, duration: 0 },
                { id: "eid3514", tween: [ "style", "${_Text4-Treeb}", "opacity", '0', { fromValue: '1'}], position: 44142, duration: 1294 },
                { id: "eid28", tween: [ "style", "${_landscape}", "opacity", '0.85', { fromValue: '0'}], position: 10250, duration: 2750 },
                { id: "eid100", tween: [ "style", "${_landscape}", "opacity", '0', { fromValue: '0.85'}], position: 14250, duration: 4440 },
                { id: "eid207", tween: [ "style", "${_Black_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 74548, duration: 1500 },
                { id: "eid657", tween: [ "style", "${_Ellipse5}", "width", '782px', { fromValue: '73px'}], position: 98000, duration: 6500 },
                { id: "eid922", tween: [ "style", "${_IMG_03092}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid869", tween: [ "style", "${_IMG_03092}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid880", tween: [ "style", "${_IMG_03092}", "display", 'block', { fromValue: 'none'}], position: 121298, duration: 0 },
                { id: "eid907", tween: [ "style", "${_IMG_03092}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid3931", tween: [ "style", "${_Tar_sands_-_b}", "opacity", '1', { fromValue: '0.000000'}], position: 75000, duration: 750 },
                { id: "eid3934", tween: [ "style", "${_Tar_sands_-_b}", "opacity", '0', { fromValue: '1'}], position: 80000, duration: 500 },
                { id: "eid988", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "opacity", '1', { fromValue: '0.000000'}], position: 13000, duration: 5054 },
                { id: "eid991", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "opacity", '0', { fromValue: '1'}], position: 26000, duration: 7782 },
                { id: "eid4274", tween: [ "style", "${_Source_-_Tar_sands_2}", "opacity", '0.5', { fromValue: '0.000000'}], position: 80250, duration: 500 },
                { id: "eid4277", tween: [ "style", "${_Source_-_Tar_sands_2}", "opacity", '0', { fromValue: '0.5'}], position: 85000, duration: 500 },
                { id: "eid4653", tween: [ "style", "${_Bubble_-_litter}", "font-size", '40px', { fromValue: '40px'}], position: 103884, duration: 0 },
                { id: "eid471", tween: [ "style", "${_Bubble_-_litter}", "opacity", '0', { fromValue: '0'}], position: 100000, duration: 0, easing: "easeInOutCirc" },
                { id: "eid492", tween: [ "style", "${_Bubble_-_litter}", "opacity", '1', { fromValue: '0'}], position: 100365, duration: 0, easing: "easeInOutCirc" },
                { id: "eid514", tween: [ "style", "${_Bubble_-_litter}", "opacity", '1', { fromValue: '1'}], position: 105500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid534", tween: [ "style", "${_Bubble_-_litter}", "opacity", '0', { fromValue: '1'}], position: 105750, duration: 0, easing: "easeInOutCirc" },
                { id: "eid1219", tween: [ "style", "${_lens-flare}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 2394 },
                { id: "eid3596", tween: [ "style", "${_lens-flare}", "opacity", '0.45', { fromValue: '1'}], position: 31452, duration: 798 },
                { id: "eid3592", tween: [ "style", "${_lens-flare}", "opacity", '0.54', { fromValue: '0.4542270004749298'}], position: 32250, duration: 4750 },
                { id: "eid3593", tween: [ "style", "${_lens-flare}", "opacity", '1', { fromValue: '0.54'}], position: 37000, duration: 1000 },
                { id: "eid1190", tween: [ "style", "${_lens-flare}", "opacity", '0', { fromValue: '1'}], position: 44250, duration: 1250 },
                { id: "eid1143", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "height", '1709px', { fromValue: '1709px'}], position: 16125, duration: 0 },
                { id: "eid474", tween: [ "style", "${_Bubble_-_marine_life}", "opacity", '0', { fromValue: '0'}], position: 101270, duration: 0, easing: "easeInOutCirc" },
                { id: "eid495", tween: [ "style", "${_Bubble_-_marine_life}", "opacity", '1', { fromValue: '0'}], position: 101770, duration: 0, easing: "easeInOutCirc" },
                { id: "eid517", tween: [ "style", "${_Bubble_-_marine_life}", "opacity", '1', { fromValue: '1'}], position: 105500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid537", tween: [ "style", "${_Bubble_-_marine_life}", "opacity", '0', { fromValue: '1'}], position: 105885, duration: 0, easing: "easeInOutCirc" },
                { id: "eid801", tween: [ "style", "${_IMG_0309}", "display", 'block', { fromValue: 'block'}], position: 120298, duration: 0 },
                { id: "eid799", tween: [ "style", "${_IMG_0309}", "display", 'none', { fromValue: 'block'}], position: 123298, duration: 0 },
                { id: "eid800", tween: [ "style", "${_IMG_0309}", "display", 'block', { fromValue: 'none'}], position: 126298, duration: 0 },
                { id: "eid4269", tween: [ "style", "${_tar-sands}", "top", '-8px', { fromValue: '-57px'}], position: 75000, duration: 11250 },
                { id: "eid8", tween: [ "style", "${_earth}", "top", '-11.02%', { fromValue: '-8.24%'}], position: 0, duration: 8280 },
                { id: "eid71", tween: [ "style", "${_Text2-Lanscape}", "line-height", '90px', { fromValue: '90px'}], position: 12665, duration: 0 },
                { id: "eid4317", tween: [ "style", "${_Source_-_Tar_sands_2}", "left", '40px', { fromValue: '40px'}], position: 83104, duration: 0 },
                { id: "eid4160", tween: [ "style", "${_ocean}", "left", '-70px', { fromValue: '-80px'}], position: 59500, duration: 750, easing: "easeInOutCirc" },
                { id: "eid4109", tween: [ "style", "${_ocean}", "left", '-60px', { fromValue: '-70px'}], position: 60250, duration: 250, easing: "easeInBounce" },
                { id: "eid4248", tween: [ "style", "${_ocean}", "left", '-80px', { fromValue: '-60px'}], position: 60500, duration: 389, easing: "easeInBounce" },
                { id: "eid4110", tween: [ "style", "${_ocean}", "left", '-70px', { fromValue: '-80px'}], position: 60889, duration: 711, easing: "easeInCirc" },
                { id: "eid4250", tween: [ "style", "${_ocean}", "left", '-62px', { fromValue: '-70px'}], position: 61600, duration: 400, easing: "easeOutCirc" },
                { id: "eid4113", tween: [ "style", "${_ocean}", "left", '-80px', { fromValue: '-62px'}], position: 62000, duration: 500, easing: "easeInOutCirc" },
                { id: "eid4114", tween: [ "style", "${_ocean}", "left", '-70px', { fromValue: '-80px'}], position: 62500, duration: 500, easing: "easeInCirc" },
                { id: "eid4251", tween: [ "style", "${_ocean}", "left", '-60px', { fromValue: '-70px'}], position: 63000, duration: 500, easing: "easeOutCirc" },
                { id: "eid4117", tween: [ "style", "${_ocean}", "left", '-80px', { fromValue: '-60px'}], position: 63500, duration: 750, easing: "easeInOutBack" },
                { id: "eid4118", tween: [ "style", "${_ocean}", "left", '-70px', { fromValue: '-80px'}], position: 64250, duration: 357, easing: "easeInElastic" },
                { id: "eid4252", tween: [ "style", "${_ocean}", "left", '-60px', { fromValue: '-70px'}], position: 64607, duration: 393, easing: "easeOutElastic" },
                { id: "eid4120", tween: [ "style", "${_ocean}", "left", '-82px', { fromValue: '-60px'}], position: 65000, duration: 250, easing: "easeInOutSine" },
                { id: "eid4122", tween: [ "style", "${_ocean}", "left", '-72px', { fromValue: '-82px'}], position: 65250, duration: 354, easing: "easeInSine" },
                { id: "eid4253", tween: [ "style", "${_ocean}", "left", '-63px', { fromValue: '-72px'}], position: 65604, duration: 285, easing: "easeOutSine" },
                { id: "eid4123", tween: [ "style", "${_ocean}", "left", '-87px', { fromValue: '-63px'}], position: 65889, duration: 611, easing: "easeOutBack" },
                { id: "eid4124", tween: [ "style", "${_ocean}", "left", '-71px', { fromValue: '-87px'}], position: 66500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid4125", tween: [ "style", "${_ocean}", "left", '-60px', { fromValue: '-71px'}], position: 67500, duration: 1000, easing: "easeInOutBack" },
                { id: "eid4126", tween: [ "style", "${_ocean}", "left", '-80px', { fromValue: '-60px'}], position: 68500, duration: 750, easing: "easeInOutBack" },
                { id: "eid4127", tween: [ "style", "${_ocean}", "left", '-70px', { fromValue: '-80px'}], position: 69250, duration: 925, easing: "easeInCirc" },
                { id: "eid4254", tween: [ "style", "${_ocean}", "left", '-60px', { fromValue: '-70px'}], position: 70175, duration: 575, easing: "easeInOutCirc" },
                { id: "eid4255", tween: [ "style", "${_ocean}", "left", '-82px', { fromValue: '-60px'}], position: 70750, duration: 1144, easing: "easeOutCirc" },
                { id: "eid4136", tween: [ "style", "${_ocean}", "left", '-71px', { fromValue: '-82px'}], position: 71894, duration: 856, easing: "easeInOutSine" },
                { id: "eid4137", tween: [ "style", "${_ocean}", "left", '-60px', { fromValue: '-71px'}], position: 72750, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid4077", tween: [ "style", "${_EPA_-_Landfill}", "opacity", '0.7043936965812', { fromValue: '0.000000'}], position: 47250, duration: 750 },
                { id: "eid4095", tween: [ "style", "${_EPA_-_Landfill}", "opacity", '0', { fromValue: '0.704394'}], position: 56619, duration: 1136 },
                { id: "eid918", tween: [ "style", "${_IMG_0325}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid865", tween: [ "style", "${_IMG_0325}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid885", tween: [ "style", "${_IMG_0325}", "display", 'block', { fromValue: 'none'}], position: 122298, duration: 0 },
                { id: "eid903", tween: [ "style", "${_IMG_0325}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid794", tween: [ "style", "${_IMG_0310}", "opacity", '1', { fromValue: '0.000000'}], position: 124298, duration: 0 },
                { id: "eid697", tween: [ "style", "${_Ellipse3}", "left", '726px', { fromValue: '1270px'}], position: 97603, duration: 7500 },
                { id: "eid472", tween: [ "style", "${_Bubble_-_carbon}", "opacity", '0', { fromValue: '0'}], position: 100500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid493", tween: [ "style", "${_Bubble_-_carbon}", "opacity", '1', { fromValue: '0'}], position: 100885, duration: 0, easing: "easeInOutCirc" },
                { id: "eid515", tween: [ "style", "${_Bubble_-_carbon}", "opacity", '1', { fromValue: '1'}], position: 105500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid535", tween: [ "style", "${_Bubble_-_carbon}", "opacity", '0', { fromValue: '1'}], position: 105750, duration: 0, easing: "easeInOutCirc" },
                { id: "eid920", tween: [ "style", "${_IMG_0323}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid867", tween: [ "style", "${_IMG_0323}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid883", tween: [ "style", "${_IMG_0323}", "display", 'block', { fromValue: 'none'}], position: 121798, duration: 0 },
                { id: "eid905", tween: [ "style", "${_IMG_0323}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid4656", tween: [ "style", "${_Bubble_-_food_miles}", "font-size", '40px', { fromValue: '40px'}], position: 103884, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.6', { fromValue: '0'}], position: 2858, duration: 1100 },
                { id: "eid2985", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.45', { fromValue: '0.6'}], position: 4287, duration: 96 },
                { id: "eid2988", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.6', { fromValue: '0.45'}], position: 4426, duration: 0 },
                { id: "eid2511", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.44280849358974', { fromValue: '0.8'}], position: 4601, duration: 45 },
                { id: "eid2991", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.44280849358974'}], position: 4692, duration: 0 },
                { id: "eid1115", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.55218349358974', { fromValue: '0.8'}], position: 4915, duration: 0 },
                { id: "eid2994", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.45', { fromValue: '0.55218349358974'}], position: 4967, duration: 0 },
                { id: "eid3004", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.80189635560044', { fromValue: '0.8'}], position: 5015, duration: 0 },
                { id: "eid3007", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.80189635560044'}], position: 5392, duration: 0 },
                { id: "eid2532", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.7', { fromValue: '0.44280800223350525'}], position: 5443, duration: 67 },
                { id: "eid4048", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.7', { fromValue: '0.7'}], position: 6160, duration: 0 },
                { id: "eid2535", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.45', { fromValue: '0.7'}], position: 6213, duration: 47 },
                { id: "eid3011", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.45'}], position: 6324, duration: 0 },
                { id: "eid3012", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.4', { fromValue: '0.8'}], position: 6433, duration: 0 },
                { id: "eid3013", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.4'}], position: 6560, duration: 0 },
                { id: "eid3014", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.6', { fromValue: '0.8'}], position: 6692, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0', { fromValue: '0.6'}], position: 6750, duration: 1250 },
                { id: "eid297", tween: [ "style", "${_Welcome_-_title}", "opacity", '0', { fromValue: '0'}], position: 137750, duration: 0 },
                { id: "eid295", tween: [ "style", "${_Welcome_-_title}", "opacity", '1', { fromValue: '0'}], position: 138500, duration: 0 },
                { id: "eid557", tween: [ "style", "${_Welcome_-_title}", "opacity", '1', { fromValue: '1'}], position: 147750, duration: 0 },
                { id: "eid301", tween: [ "style", "${_Welcome_-_title}", "opacity", '0', { fromValue: '1'}], position: 149250, duration: 0 },
                { id: "eid921", tween: [ "style", "${_IMG_0322}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid868", tween: [ "style", "${_IMG_0322}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid881", tween: [ "style", "${_IMG_0322}", "display", 'block', { fromValue: 'none'}], position: 121548, duration: 0 },
                { id: "eid906", tween: [ "style", "${_IMG_0322}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid4717", tween: [ "style", "${_static22}", "height", '65px', { fromValue: '362px'}], position: 156250, duration: 1250 },
                { id: "eid432", tween: [ "style", "${_Ellipse}", "height", '1328px', { fromValue: '104px'}], position: 97821, duration: 13679 },
                { id: "eid641", tween: [ "style", "${_Ellipse6}", "width", '808px', { fromValue: '147px'}], position: 98000, duration: 16250 },
                { id: "eid201", tween: [ "style", "${_smoke}", "opacity", '1', { fromValue: '0.000000'}], position: 86000, duration: 750 },
                { id: "eid204", tween: [ "style", "${_smoke}", "opacity", '0', { fromValue: '1'}], position: 97169, duration: 313 },
                { id: "eid626", tween: [ "style", "${_Ellipse7}", "left", '482px', { fromValue: '800px'}], position: 98000, duration: 16250 },
                { id: "eid3248", tween: [ "style", "${_landscape}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid3245", tween: [ "style", "${_landscape}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid3251", tween: [ "style", "${_landscape}", "display", 'none', { fromValue: 'block'}], position: 18690, duration: 0 },
                { id: "eid778", tween: [ "style", "${_IMG_0307}", "opacity", '1', { fromValue: '0.000000'}], position: 120814, duration: 0 },
                { id: "eid277", tween: [ "style", "${_Spark_-_a}", "opacity", '1', { fromValue: '0.000000'}], position: 111238, duration: 512 },
                { id: "eid280", tween: [ "style", "${_Spark_-_a}", "opacity", '0', { fromValue: '1'}], position: 119500, duration: 421 },
                { id: "eid2190", tween: [ "style", "${_earth}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 3000 },
                { id: "eid15", tween: [ "style", "${_earth}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 2000 },
                { id: "eid2194", tween: [ "style", "${_Skip_tag}", "opacity", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
                { id: "eid195", tween: [ "style", "${_tar-sands}", "opacity", '1', { fromValue: '0.000000'}], position: 74000, duration: 1000 },
                { id: "eid198", tween: [ "style", "${_tar-sands}", "opacity", '0', { fromValue: '1'}], position: 85302, duration: 948 },
                { id: "eid310", tween: [ "style", "${_Symptom}", "opacity", '1', { fromValue: '0.000000'}], position: 106885, duration: 1365 },
                { id: "eid555", tween: [ "style", "${_Symptom}", "opacity", '0', { fromValue: '1'}], position: 110103, duration: 625 },
                { id: "eid656", tween: [ "style", "${_Ellipse5}", "height", '782px', { fromValue: '73px'}], position: 98000, duration: 6500 },
                { id: "eid581", tween: [ "style", "${_Ellipse9}", "top", '396px', { fromValue: '816px'}], position: 98615, duration: 16385 },
                { id: "eid4408", tween: [ "style", "${_logo}", "display", 'block', { fromValue: 'block'}], position: 162500, duration: 0 },
                { id: "eid3943", tween: [ "style", "${_Incinerator_-_c}", "opacity", '1', { fromValue: '0.000000'}], position: 92406, duration: 448 },
                { id: "eid3946", tween: [ "style", "${_Incinerator_-_c}", "opacity", '0', { fromValue: '1'}], position: 96631, duration: 250 },
                { id: "eid303", tween: [ "style", "${_Welcome_-_text}", "opacity", '1', { fromValue: '0'}], position: 138500, duration: 1000 },
                { id: "eid306", tween: [ "style", "${_Welcome_-_text}", "opacity", '0', { fromValue: '1'}], position: 148500, duration: 1000 },
                { id: "eid718", tween: [ "style", "${_Ellipse2}", "width", '848px', { fromValue: '62px'}], position: 101000, duration: 5500 },
                { id: "eid717", tween: [ "style", "${_Ellipse2}", "top", '387px', { fromValue: '925px'}], position: 101000, duration: 5500 },
                { id: "eid786", tween: [ "style", "${_IMG_0304}", "opacity", '1', { fromValue: '0.000000'}], position: 122298, duration: 0 },
                { id: "eid4318", tween: [ "style", "${_Tar_sands_-_source_1}", "top", '1040px', { fromValue: '1040px'}], position: 83104, duration: 0 },
                { id: "eid4659", tween: [ "style", "${_Bubble_-_carbon}", "font-size", '40px', { fromValue: '40px'}], position: 103884, duration: 0 },
                { id: "eid914", tween: [ "style", "${_IMG_0329}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid861", tween: [ "style", "${_IMG_0329}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid890", tween: [ "style", "${_IMG_0329}", "display", 'block', { fromValue: 'none'}], position: 123548, duration: 0 },
                { id: "eid899", tween: [ "style", "${_IMG_0329}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid606", tween: [ "style", "${_Ellipse7}", "opacity", '0.7', { fromValue: '0.000000'}], position: 99000, duration: 1000 },
                { id: "eid610", tween: [ "style", "${_Ellipse7}", "opacity", '0', { fromValue: '0.7'}], position: 117449, duration: 1866 },
                { id: "eid790", tween: [ "style", "${_IMG_0305}", "opacity", '1', { fromValue: '0.000000'}], position: 123298, duration: 0 },
                { id: "eid915", tween: [ "style", "${_IMG_0328}", "display", 'none', { fromValue: 'none'}], position: 55250, duration: 0 },
                { id: "eid862", tween: [ "style", "${_IMG_0328}", "display", 'none', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid889", tween: [ "style", "${_IMG_0328}", "display", 'block', { fromValue: 'none'}], position: 123298, duration: 0 },
                { id: "eid900", tween: [ "style", "${_IMG_0328}", "display", 'none', { fromValue: 'block'}], position: 125552, duration: 0 },
                { id: "eid642", tween: [ "style", "${_Ellipse6}", "left", '-185px', { fromValue: '69px'}], position: 98000, duration: 16250 },
                { id: "eid4281", tween: [ "style", "${_Tar_sands_-_source_1}", "font-size", '20px', { fromValue: '20px'}], position: 75750, duration: 0 },
                { id: "eid1001", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "top", '-227px', { fromValue: '-312px'}], position: 16125, duration: 9169 },
                { id: "eid681", tween: [ "style", "${_Ellipse4}", "width", '655px', { fromValue: '87px'}], position: 98500, duration: 6000 },
                { id: "eid4337", tween: [ "style", "${_smoke}", "left", '-115px', { fromValue: '-12px'}], position: 86000, duration: 11500 },
                { id: "eid892", tween: [ "style", "${_IMG_03052}", "left", '1000px', { fromValue: '1000px'}], position: 119715, duration: 0 },
                { id: "eid1140", tween: [ "transform", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "rotateZ", '-5deg', { fromValue: '21deg'}], position: 13000, duration: 20782 },
                { id: "eid4366", tween: [ "style", "${_Incinerator_-_source_2}", "opacity", '0.49843082264957', { fromValue: '0.000000'}], position: 92406, duration: 302 },
                { id: "eid4369", tween: [ "style", "${_Incinerator_-_source_2}", "opacity", '0', { fromValue: '0.498431'}], position: 96750, duration: 250 },
                { id: "eid601", tween: [ "style", "${_Ellipse9}", "opacity", '1', { fromValue: '0'}], position: 98603, duration: 782 },
                { id: "eid604", tween: [ "style", "${_Ellipse9}", "opacity", '0', { fromValue: '1'}], position: 114818, duration: 5182 },
                { id: "eid254", tween: [ "style", "${_Tar_Sands_-a}", "opacity", '1', { fromValue: '0.000000'}], position: 80250, duration: 500 },
                { id: "eid256", tween: [ "style", "${_Tar_Sands_-a}", "opacity", '0', { fromValue: '1'}], position: 85000, duration: 500 },
                { id: "eid4644", tween: [ "color", "${_Ellipse4}", "background-color", 'rgba(26,115,170,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 111238, duration: 1500 },
                { id: "eid469", tween: [ "style", "${_Bubble-tar_sands}", "opacity", '0', { fromValue: '0'}], position: 98500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid490", tween: [ "style", "${_Bubble-tar_sands}", "opacity", '1', { fromValue: '0'}], position: 98750, duration: 0, easing: "easeInOutCirc" },
                { id: "eid512", tween: [ "style", "${_Bubble-tar_sands}", "opacity", '1', { fromValue: '1'}], position: 105500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid532", tween: [ "style", "${_Bubble-tar_sands}", "opacity", '0', { fromValue: '1'}], position: 105750, duration: 0, easing: "easeInOutCirc" },
                { id: "eid4266", tween: [ "style", "${_tar-sands}", "height", '1104px', { fromValue: '1217px'}], position: 75000, duration: 11250 },
                { id: "eid1144", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "width", '3037px', { fromValue: '3037px'}], position: 16125, duration: 0 },
                { id: "eid559", tween: [ "style", "${_Ellipse9}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 101000, duration: 0 },
                { id: "eid4741", tween: [ "style", "${_Ellipse9}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 101000, duration: 0 },
                { id: "eid4742", tween: [ "style", "${_Ellipse9}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 101000, duration: 0 },
                { id: "eid4743", tween: [ "style", "${_Ellipse9}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 101000, duration: 0 },
                { id: "eid4744", tween: [ "style", "${_Ellipse9}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 101000, duration: 0 },
                { id: "eid558", tween: [ "style", "${_Ellipse9}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 103500, duration: 0 },
                { id: "eid4745", tween: [ "style", "${_Ellipse9}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 103500, duration: 0 },
                { id: "eid4746", tween: [ "style", "${_Ellipse9}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 103500, duration: 0 },
                { id: "eid4747", tween: [ "style", "${_Ellipse9}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 103500, duration: 0 },
                { id: "eid4748", tween: [ "style", "${_Ellipse9}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 103500, duration: 0 },
                { id: "eid560", tween: [ "style", "${_Ellipse9}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 105000, duration: 0 },
                { id: "eid4749", tween: [ "style", "${_Ellipse9}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 105000, duration: 0 },
                { id: "eid4750", tween: [ "style", "${_Ellipse9}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 105000, duration: 0 },
                { id: "eid4751", tween: [ "style", "${_Ellipse9}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 105000, duration: 0 },
                { id: "eid4752", tween: [ "style", "${_Ellipse9}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 105000, duration: 0 },
                { id: "eid433", tween: [ "style", "${_Ellipse}", "width", '1328px', { fromValue: '104px'}], position: 97821, duration: 13679 },
                { id: "eid4313", tween: [ "style", "${_Ocean_-_Reference_1}", "opacity", '0.49821587179487', { fromValue: '0'}], position: 60378, duration: 511, easing: "easeInElastic" },
                { id: "eid4197", tween: [ "style", "${_Ocean_-_Reference_1}", "opacity", '0', { fromValue: '0.5'}], position: 65500, duration: 500, easing: "easeInElastic" },
                { id: "eid4201", tween: [ "style", "${_Source_-_ocean}", "opacity", '0.5', { fromValue: '0.000000'}], position: 65666, duration: 500 },
                { id: "eid4204", tween: [ "style", "${_Source_-_ocean}", "opacity", '0', { fromValue: '0.5'}], position: 72500, duration: 559 },
                { id: "eid580", tween: [ "style", "${_Ellipse9}", "height", '790px', { fromValue: '169px'}], position: 98615, duration: 16385 },
                { id: "eid661", tween: [ "style", "${_Ellipse4}", "opacity", '1', { fromValue: '0.000000'}], position: 98000, duration: 1000 },
                { id: "eid664", tween: [ "style", "${_Ellipse4}", "opacity", '0', { fromValue: '1'}], position: 117000, duration: 1000 },
                { id: "eid802", tween: [ "style", "${_IMG_0308}", "display", 'none', { fromValue: 'block'}], position: 118798, duration: 0 },
                { id: "eid803", tween: [ "style", "${_IMG_0308}", "display", 'block', { fromValue: 'none'}], position: 119715, duration: 0 },
                { id: "eid772", tween: [ "style", "${_IMG_0308}", "opacity", '1', { fromValue: '0.000000'}], position: 119715, duration: 0 },
                { id: "eid4267", tween: [ "style", "${_tar-sands}", "width", '1961px', { fromValue: '2161px'}], position: 75000, duration: 11250 }            ]
        }
    }
},
"Button-Symbol": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-5px', '0px', '619px', '200px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    fill: ['rgba(214,77,13,1.00)', [270, [['rgba(220,80,29,1.00)', 0], ['rgba(237,121,40,1.00)', 100]]]],
                    id: 'Start_Button',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                },
                {
                    type: 'text',
                    rect: ['50px', '41px', '519px', '133px', 'auto', 'auto'],
                    id: 'Start',
                    text: 'START',
                    align: 'center',
                    font: ['Courier, \'Courier New\', monospace', 104, 'rgba(252,249,249,1)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Start_Button}": [
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "border-bottom-left-radius", [32,32], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgba(202,112,48,1.00)'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["color", "background-color", 'rgba(214,77,13,1.00)'],
                ["style", "border-top-left-radius", [32,32], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '39px'],
                ["style", "border-bottom-right-radius", [32,32], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [32,32], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '619px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.spread", '-3px'],
                ["gradient", "background-image", [270,[['rgba(220,80,29,1.00)',0],['rgba(237,121,40,1.00)',100]]]],
                ["style", "height", '200px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "border-width", '1px'],
                ["subproperty", "boxShadow.offsetV", '10px']
            ],
            "${_Start}": [
                ["style", "top", '41px'],
                ["style", "left", '50px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '104px']
            ],
            "${symbolSelector}": [
                ["style", "height", '202px'],
                ["style", "width", '621px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 46500,
            autoPlay: true,
            timeline: [
                { id: "eid222", tween: [ "subproperty", "${_Start_Button}", "boxShadow.spread", '-3px', { fromValue: '-3px'}], position: 46000, duration: 0 },
                { id: "eid217", tween: [ "subproperty", "${_Start_Button}", "boxShadow.color", 'rgba(0,0,0,0.65098)', { fromValue: 'rgba(0,0,0,0.65098)'}], position: 46000, duration: 0 },
                { id: "eid225", tween: [ "color", "${_Start_Button}", "border-color", 'rgba(202,112,48,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(202,112,48,1.00)'}], position: 46000, duration: 0 },
                { id: "eid214", tween: [ "style", "${_Start_Button}", "border-top-left-radius", [32,32], { valueTemplate: '@@0@@px @@1@@px', fromValue: [32,32]}], position: 46000, duration: 0 },
                { id: "eid213", tween: [ "style", "${_Start_Button}", "border-bottom-left-radius", [32,32], { valueTemplate: '@@0@@px @@1@@px', fromValue: [32,32]}], position: 46000, duration: 0 },
                { id: "eid221", tween: [ "subproperty", "${_Start_Button}", "boxShadow.blur", '39px', { fromValue: '39px'}], position: 46000, duration: 0 },
                { id: "eid215", tween: [ "style", "${_Start_Button}", "border-top-right-radius", [32,32], { valueTemplate: '@@0@@px @@1@@px', fromValue: [32,32]}], position: 46000, duration: 0 },
                { id: "eid219", tween: [ "subproperty", "${_Start_Button}", "boxShadow.offsetV", '10px', { fromValue: '10px'}], position: 46000, duration: 0 },
                { id: "eid224", tween: [ "style", "${_Start_Button}", "left", '0px', { fromValue: '0px'}], position: 46000, duration: 0 },
                { id: "eid229", tween: [ "style", "${_Start_Button}", "opacity", '1', { fromValue: '0'}], position: 45000, duration: 1000 },
                { id: "eid235", tween: [ "style", "${_Start_Button}", "opacity", '1', { fromValue: '1'}], position: 46500, duration: 0 },
                { id: "eid223", tween: [ "subproperty", "${_Start_Button}", "boxShadow.offsetH", '3px', { fromValue: '3px'}], position: 46000, duration: 0 },
                { id: "eid216", tween: [ "style", "${_Start_Button}", "border-bottom-right-radius", [32,32], { valueTemplate: '@@0@@px @@1@@px', fromValue: [32,32]}], position: 46000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-306642205");
