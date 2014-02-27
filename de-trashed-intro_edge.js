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
                id: 'Revolution_is_upon_us',
                display: 'block',
                type: 'text',
                rect: ['359px', '182px','1352px','677px','auto', 'auto'],
                text: "The revolution is upon us<br><br>Your quest begins<br>",
                align: "center",
                font: ['Courier, \'Courier New\', monospace', 56, "rgba(4,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Welcome_-_text',
                type: 'text',
                rect: ['394px', '307px','1103px','660px','auto', 'auto'],
                text: "The journey ahead will teach you step by step ninja the skills for making small jar of waste per year.  <br><br>Help you save 40% of your household budget.  Eliminate toxic chemicals and  from your home and help you learn the details about the trash and how the solve it. ",
                align: "center",
                font: ['Courier, \'Courier New\', monospace', 50, "rgba(86,86,86,1)", "400", "none", "normal"]
            },
            {
                id: 'Welcome_-_title',
                type: 'text',
                rect: ['389px', '142px','1185px','779px','auto', 'auto'],
                text: "Welcome to the game.<br>",
                align: "left",
                font: ['Courier, \'Courier New\', monospace', 93, "rgba(86,86,86,1.00)", "400", "none", "normal"]
            },
            {
                id: 'emerald',
                type: 'image',
                rect: ['-1px', '0px','1920px','1080px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"emerald.png",'0px','0px']
            },
            {
                id: 'Emerald_-_d',
                display: 'none',
                type: 'text',
                rect: ['906px', '741px','986px','202px','auto', 'auto'],
                text: "Revolutions have been won before - and we are at the tipping point",
                align: "left",
                font: ['Courier, \'Courier New\', monospace', 55, "rgba(252,249,249,1)", "400", "none", "italic"]
            },
            {
                id: 'Emerald_-_c',
                display: 'none',
                type: 'text',
                rect: ['1119px', '758px','655px','160px','auto', 'auto'],
                text: "You may need to make sacrifices",
                align: "left",
                font: ['Courier, \'Courier New\', monospace', 55, "rgba(252,249,249,1)", "400", "none", "italic"]
            },
            {
                id: 'Emerald_-_b',
                display: 'none',
                type: 'text',
                rect: ['100px', '540px','882px','261px','auto', 'auto'],
                text: "You will need to fight trash's many tempations ",
                align: "left",
                font: ['Courier, \'Courier New\', monospace', 55, "rgba(252,249,249,1)", "400", "none", "italic"]
            },
            {
                id: 'Emerald_-_a',
                display: 'none',
                type: 'text',
                rect: ['69px', '687px','851px','340px','auto', 'auto'],
                text: "We have a long journey ahead of us to get there <br>",
                align: "left",
                font: ['Courier, Courier New, monospace', 55, "rgba(252,249,249,1)", "400", "none", "italic"]
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
                id: 'Ellipse10',
                type: 'ellipse',
                rect: ['709px', '629px','111px','110px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(33,31,31,0.7922)"],
                stroke: [27,"rgba(0, 0, 0, 0.180392)","none"]
            },
            {
                id: 'Symptom_-_b',
                type: 'text',
                rect: ['1143px', '819px','729px','212px','auto', 'auto'],
                text: "If we can solve trash, <br>we can help solve so much more",
                align: "center",
                font: ['pt-mono, monospace', 48, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Symptom',
                type: 'text',
                rect: ['448px', '219px','1103px','831px','auto', 'auto'],
                text: "Trash is connected to everything<br><br><br> ",
                align: "center",
                font: ['pt-mono, monospace', 68, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_Mining',
                type: 'text',
                rect: ['302px', '222px','376px','342px','auto', 'auto'],
                text: "Coal, bauxite &amp; silica mines",
                align: "center",
                font: ['pt-mono, monospace', 59, "rgba(250,250,250,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'Bubble_-_Toxics',
                type: 'text',
                rect: ['219px', '835px','317px','183px','auto', 'auto'],
                text: "Toxic chemicals",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_Diet',
                type: 'text',
                rect: ['1169px', '95px','323px','143px','auto', 'auto'],
                text: "Diet Illnesses",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_marine_life',
                type: 'text',
                rect: ['1680px', '498px','229px','160px','auto', 'auto'],
                text: "Marine life ",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_food_miles',
                type: 'text',
                rect: ['110px', '558px','260px','169px','auto', 'auto'],
                text: "Food miles",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_carbon',
                type: 'text',
                rect: ['719px', '832px','323px','270px','auto', 'auto'],
                text: "Carbon dioxide emissions",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_litter',
                type: 'text',
                rect: ['670px', '253px','260px','118px','auto', 'auto'],
                text: "Litter",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble_-_oil',
                type: 'text',
                rect: ['1555px', '128px','317px','212px','auto', 'auto'],
                text: "Oil dependency",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Bubble-tar_sands',
                type: 'text',
                rect: ['1330px', '751px','342px','147px','auto', 'auto'],
                text: "Tar sands, oil spills",
                align: "center",
                font: ['pt-mono, monospace', 44, "rgba(187,187,187,1.00)", "400", "none", "normal"]
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
                rect: ['1010px', '579px','464px','464px','auto', 'auto'],
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
                id: 'Rickett_-_b',
                type: 'text',
                rect: ['25px', '41px','428px','969px','auto', 'auto'],
                text: "The sustainability movement germinated like a seed that has found it's fertile place. Zero waste at it's core.",
                align: "center",
                font: ['Courier, \'Courier New\', monospace', 50, "rgba(255,255,255,1)", "400", "none", "normal"]
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
                rect: ['37px', '682px','1813px','406px','auto', 'auto'],
                text: "People fought the trash machine with community gardens, packaging free stores, recycling, local food, composting and a radical lifestyle change to make the age of waste part of our histry, not our future.<br><br>",
                align: "left",
                font: ['Courier, \'Courier New\', monospace', 48, "rgba(255,255,255,1)", "400", "none", "italic"]
            },
            {
                id: 'spark',
                type: 'image',
                rect: ['-7px', '0px','1948px','1104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"spark.png",'0px','0px']
            },
            {
                id: 'Spark_-_b',
                type: 'text',
                rect: ['110px', '440px','1340px','200px','auto', 'auto'],
                text: "A revolution ignited",
                align: "left",
                font: ['Courier, Courier New, monospace', 93, "rgba(250,246,246,1)", "400", "none", "normal"]
            },
            {
                id: 'Spark_-_a',
                type: 'text',
                rect: ['97px', '98px','1115px','242px','auto', 'auto'],
                text: "But instead of exhausting and polluting our beautiful planet",
                font: ['pt-mono, monospace', 55, "rgba(250,246,246,1.00)", "normal", "none", "italic"]
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
                rect: ['603px', '289px','748px','200px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'Final_page_-_tagline',
                type: 'text',
                rect: ['467px', '481px','1007px','77px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Are you ready to detrash the world with us?",
                align: "center",
                font: ['Georgia, Times New Roman, Times, serif', 35, "rgba(83,54,10,1.00)", "400", "none", "italic"]
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
                text: "Source: A comparison of plastic and plankton in the central north pacifc gyre 2001\f\u0006\u000f\b\u0015\u000f \u0013<br>\u000e\u0007\u0006<br> \u0016\u0017\u0007\u0013",
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
                ["style", "top", '95px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1169px'],
                ["style", "font-size", '44px']
            ],
            "${_Spark_-_a}": [
                ["style", "line-height", '94px'],
                ["color", "color", 'rgba(250,246,246,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '97px'],
                ["style", "font-size", '55px'],
                ["style", "top", '98px'],
                ["style", "height", '242px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-style", 'italic'],
                ["style", "width", '1115px']
            ],
            "${_IMG_03052}": [
                ["style", "top", '574px'],
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
            ],
            "${_logo}": [
                ["style", "top", '289px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '603px']
            ],
            "${_Ricket_-_a}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0'],
                ["style", "left", '37px'],
                ["style", "width", '1813px'],
                ["style", "top", '682px'],
                ["style", "text-align", 'left'],
                ["style", "display", 'none'],
                ["style", "font-style", 'italic'],
                ["style", "height", '406px']
            ],
            "${_IMG_0329}": [
                ["style", "top", '67px'],
                ["style", "display", 'none'],
                ["style", "height", '464px'],
                ["style", "left", '1010px'],
                ["style", "width", '464px']
            ],
            "${_Text_-_Forest}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0'],
                ["style", "left", '92px'],
                ["style", "width", '1389px'],
                ["style", "top", '569px'],
                ["style", "display", 'none'],
                ["style", "height", '450px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-size", '55px'],
                ["style", "font-style", 'italic']
            ],
            "${_Bubble_-_food_miles}": [
                ["style", "top", '558px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '110px'],
                ["style", "font-size", '44px']
            ],
            "${_spark}": [
                ["style", "top", '0px'],
                ["style", "height", '1104px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-7px'],
                ["style", "width", '1948px']
            ],
            "${_Ellipse9}": [
                ["style", "top", '816px'],
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
            "${_Source_-_Tar_sands_2}": [
                ["style", "top", '1040px'],
                ["style", "font-style", 'normal'],
                ["style", "width", '697px'],
                ["style", "height", '49px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '40px'],
                ["style", "font-size", '20px']
            ],
            "${_IMG_0322}": [
                ["style", "top", '55px'],
                ["style", "display", 'none'],
                ["style", "height", '497px'],
                ["style", "left", '466px'],
                ["style", "width", '497px']
            ],
            "${_IMG_0323}": [
                ["style", "top", '564px'],
                ["style", "display", 'none'],
                ["style", "height", '483px'],
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
                ["style", "display", 'none'],
                ["style", "height", '483px'],
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
            "${_Ellipse10}": [
                ["style", "top", '533px'],
                ["color", "background-color", 'rgba(33,31,31,1)'],
                ["style", "height", '110px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '678px'],
                ["style", "width", '111px']
            ],
            "${_Emerald_-_c}": [
                ["style", "top", '758px'],
                ["style", "line-height", '90px'],
                ["style", "font-style", 'italic'],
                ["style", "font-size", '55px'],
                ["style", "display", 'none'],
                ["style", "height", '160px'],
                ["style", "left", '1119px'],
                ["style", "width", '655px']
            ],
            "${_Bubble_-_Mining}": [
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '142px'],
                ["style", "font-size", '44px'],
                ["style", "top", '123px'],
                ["style", "text-align", 'center'],
                ["style", "height", '242px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-style", 'normal'],
                ["style", "width", '296px']
            ],
            "${_Smoke-_ref_1}": [
                ["style", "top", '1040px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '576px'],
                ["style", "height", '34px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '97px'],
                ["style", "font-size", '20px']
            ],
            "${_Tar_sands_-_source_1}": [
                ["style", "top", '1040px'],
                ["style", "width", '906px'],
                ["style", "height", '46px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '40px'],
                ["style", "font-size", '20px']
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
                ["style", "width", '1140px'],
                ["style", "height", '327px']
            ],
            "${_Ellipse4}": [
                ["style", "top", '558px'],
                ["style", "height", '88px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1732px'],
                ["style", "width", '87px']
            ],
            "${_Source_-_ocean}": [
                ["style", "line-height", '40px'],
                ["style", "opacity", '0.000000'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '949px'],
                ["style", "top", '1014px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "height", '46px'],
                ["style", "left", '62px']
            ],
            "${_IMG_0306}": [
                ["style", "top", '25px'],
                ["style", "height", '506px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1054px'],
                ["style", "width", '506px']
            ],
            "${_Tar_sands_-_b}": [
                ["style", "line-height", '90px'],
                ["style", "width", '1246px'],
                ["style", "font-style", 'normal'],
                ["style", "top", '758px'],
                ["style", "height", '215px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '604px'],
                ["style", "font-size", '50px']
            ],
            "${_Landfill_-_d}": [
                ["style", "line-height", '90px'],
                ["style", "top", '477px'],
                ["style", "height", '227px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '71px'],
                ["style", "width", '949px']
            ],
            "${_Incinerator_-_source_2}": [
                ["style", "top", '1042px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '62px'],
                ["style", "width", '829px']
            ],
            "${_EPA_-_Landfill}": [
                ["style", "opacity", '0.000000'],
                ["style", "left", '20px'],
                ["style", "font-size", '20px'],
                ["style", "top", '1037px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '48px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "font-style", 'normal'],
                ["style", "width", '1166px']
            ],
            "${_Rickett_-_b}": [
                ["style", "top", '41px'],
                ["style", "line-height", '90px'],
                ["style", "width", '428px'],
                ["style", "height", '969px'],
                ["style", "opacity", '0'],
                ["style", "left", '25px'],
                ["style", "font-size", '50px']
            ],
            "${_Bubble_-_oil}": [
                ["style", "top", '128px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1555px'],
                ["style", "font-size", '44px']
            ],
            "${_Symptom}": [
                ["style", "line-height", '120px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '467px'],
                ["style", "width", '963px'],
                ["style", "top", '376px'],
                ["style", "text-align", 'center'],
                ["style", "height", '389px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-style", 'normal'],
                ["style", "font-size", '68px']
            ],
            "${_Emerald_-_b}": [
                ["style", "top", '540px'],
                ["style", "font-style", 'italic'],
                ["style", "display", 'none'],
                ["style", "line-height", '90px'],
                ["style", "left", '100px'],
                ["style", "font-size", '55px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1080px'],
                ["style", "width", '1920px']
            ],
            "${_IMG_0305}": [
                ["style", "top", '558px'],
                ["style", "height", '497px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1063px'],
                ["style", "width", '497px']
            ],
            "${_IMG_03092}": [
                ["style", "top", '59px'],
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
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
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
            ],
            "${_Bubble_-_carbon}": [
                ["style", "top", '832px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '719px'],
                ["style", "font-size", '44px']
            ],
            "${_Ocean_-_IntroCopy}": [
                ["style", "top", '59px'],
                ["style", "font-size", '55px'],
                ["style", "line-height", 'normal'],
                ["style", "font-style", 'italic'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '69px'],
                ["style", "width", '953px']
            ],
            "${_Bubble_-_litter}": [
                ["style", "top", '253px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "height", '118px'],
                ["style", "opacity", '0'],
                ["style", "left", '670px'],
                ["style", "font-size", '44px']
            ],
            "${_landscape}": [
                ["style", "top", '4px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Text5-Tree1}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '87px'],
                ["style", "width", '1201px'],
                ["style", "top", '107px'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-size", '55px'],
                ["style", "height", '333px']
            ],
            "${_Ellipse3}": [
                ["style", "top", '146px'],
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
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '460px'],
                ["style", "width", '483px']
            ],
            "${_IMG_0324}": [
                ["style", "top", '49px'],
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
            ],
            "${_IMG_0328}": [
                ["style", "top", '579px'],
                ["style", "display", 'none'],
                ["style", "height", '464px'],
                ["style", "left", '1010px'],
                ["style", "width", '464px']
            ],
            "${_Symptom_-_b}": [
                ["style", "top", '440px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "line-height", '81px'],
                ["style", "height", '282px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '470px'],
                ["style", "width", '936px']
            ],
            "${_Ellipse8}": [
                ["style", "top", '59px'],
                ["style", "height", '118px'],
                ["style", "opacity", '0'],
                ["style", "left", '1617px'],
                ["style", "width", '118px']
            ],
            "${_IMG_03072}": [
                ["style", "top", '581px'],
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '470px'],
                ["style", "width", '483px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(33,31,31,0.79)'],
                ["style", "opacity", '0'],
                ["motion", "location", '285.0119176794px 235.0001989294px'],
                ["style", "border-style", 'none'],
                ["style", "height", '104px'],
                ["color", "border-color", 'rgba(0,0,0,0.18)'],
                ["style", "border-width", '27px'],
                ["style", "width", '104px']
            ],
            "${_Ocean-a}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '948px'],
                ["style", "font-size", '50px'],
                ["style", "top", '780px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "width", '973px'],
                ["style", "height", '315px']
            ],
            "${_Skip_tag}": [
                ["style", "top", '1042px'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '23px'],
                ["style", "font-style", 'normal'],
                ["style", "height", '37px'],
                ["style", "opacity", '0.3'],
                ["style", "left", '1830px'],
                ["style", "width", '94px']
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
                ["style", "cursor", 'pointer'],
                ["style", "width", '576px'],
                ["style", "height", '87px']
            ],
            "${_Final_page_-_tagline}": [
                ["color", "color", 'rgba(83,54,10,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '467px'],
                ["style", "width", '1007px'],
                ["style", "top", '481px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '77px'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "font-style", 'italic'],
                ["style", "font-size", '35px']
            ],
            "${_ocean}": [
                ["style", "top", '-45px'],
                ["style", "height", '1204px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-80px'],
                ["style", "width", '2087px']
            ],
            "${_tree}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_Emerald_-_d}": [
                ["style", "top", '741px'],
                ["style", "line-height", '90px'],
                ["style", "display", 'none'],
                ["style", "font-style", 'italic'],
                ["style", "left", '906px'],
                ["style", "font-size", '55px']
            ],
            "${_Landfill_-_a}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '856px'],
                ["style", "font-size", '52px'],
                ["style", "top", '777px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "height", '274px'],
                ["style", "width", '1007px']
            ],
            "${_Bubble_-_marine_life}": [
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1680px'],
                ["style", "font-size", '44px'],
                ["style", "top", '498px'],
                ["style", "height", '160px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-style", 'normal'],
                ["style", "width", '229px']
            ],
            "${_Ellipse5}": [
                ["style", "top", '198px'],
                ["style", "height", '73px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '743px'],
                ["style", "width", '73px']
            ],
            "${_Landfill_-_c}": [
                ["style", "line-height", '90px'],
                ["style", "width", '1065px'],
                ["style", "top", '123px'],
                ["style", "height", '222px'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '587px'],
                ["style", "font-size", '50px']
            ],
            "${_Text1_-_Intro}": [
                ["style", "line-height", '90px'],
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '76px'],
                ["style", "width", '785px'],
                ["style", "top", '770px'],
                ["style", "display", 'block'],
                ["style", "font-size", '55px'],
                ["style", "height", '261px'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "word-spacing", '6px'],
                ["style", "font-weight", '400']
            ],
            "${_Black_Rectangle}": [
                ["style", "top", '-16px'],
                ["style", "opacity", '1'],
                ["style", "left", '-16px'],
                ["style", "width", '1959px']
            ],
            "${_Spark_-_b}": [
                ["style", "top", '440px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Courier, Courier New, monospace'],
                ["style", "left", '110px'],
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
            "${_Welcome_-_title}": [
                ["style", "top", '142px'],
                ["color", "color", 'rgba(86,86,86,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '389px'],
                ["style", "height", '143px']
            ],
            "${_IMG_0327}": [
                ["style", "top", '574px'],
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '470px'],
                ["style", "width", '483px']
            ],
            "${_Bubble_-_Toxics}": [
                ["style", "top", '835px'],
                ["style", "font-style", 'normal'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '219px'],
                ["style", "font-size", '44px']
            ],
            "${_IMG_03042}": [
                ["style", "top", '49px'],
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '479px'],
                ["style", "width", '483px']
            ],
            "${_IMG_0326}": [
                ["style", "top", '55px'],
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '1000px'],
                ["style", "width", '483px']
            ],
            "${_Tar_Sands_-a}": [
                ["style", "line-height", '90px'],
                ["style", "letter-spacing", '0'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '74px'],
                ["style", "font-size", '50px'],
                ["style", "top", '184px'],
                ["style", "height", '242px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '1045px']
            ],
            "${_Ellipse6}": [
                ["style", "top", '590px'],
                ["style", "height", '147px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '69px'],
                ["style", "width", '147px']
            ],
            "${_Text2-Lanscape}": [
                ["style", "line-height", '90px'],
                ["color", "color", 'rgba(254,252,234,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '97px'],
                ["style", "font-size", '56px'],
                ["style", "top", '78px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '364px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-style", 'italic'],
                ["style", "width", '1028px']
            ],
            "${_Ellipse2}": [
                ["style", "top", '925px'],
                ["style", "height", '62px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '404px'],
                ["style", "width", '62px']
            ],
            "${_smoke}": [
                ["style", "top", '-5px'],
                ["style", "height", '1100px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-12px'],
                ["style", "width", '1948px']
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
            "${_Bubble-tar_sands}": [
                ["color", "color", 'rgba(187,187,187,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '1330px'],
                ["style", "width", '342px'],
                ["style", "top", '751px'],
                ["style", "height", '147px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "font-style", 'normal'],
                ["style", "font-size", '44px']
            ],
            "${_Incinerator_-_c}": [
                ["style", "line-height", '90px'],
                ["style", "top", '621px'],
                ["style", "font-style", 'normal'],
                ["style", "height", '274px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '825px'],
                ["style", "width", '1052px']
            ],
            "${_Welcome_-_text}": [
                ["style", "line-height", '71px'],
                ["style", "font-size", '50px'],
                ["style", "text-align", 'center'],
                ["style", "top", '307px'],
                ["style", "height", '660px'],
                ["style", "opacity", '0'],
                ["style", "left", '394px'],
                ["style", "width", '1103px']
            ],
            "${_Emerald_-_a}": [
                ["style", "line-height", '90px'],
                ["style", "opacity", '0'],
                ["style", "left", '87px'],
                ["style", "font-size", '55px'],
                ["style", "top", '757px'],
                ["style", "font-style", 'italic'],
                ["style", "height", '261px'],
                ["style", "font-family", 'Courier, Courier New, monospace'],
                ["style", "width", '851px'],
                ["style", "display", 'none']
            ],
            "${_IMG_0304}": [
                ["style", "top", '568px'],
                ["style", "height", '527px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '493px'],
                ["style", "width", '527px']
            ],
            "${_Text4-Treeb}": [
                ["style", "line-height", '90px'],
                ["style", "font-family", 'pt-mono, monospace'],
                ["style", "top", '780px'],
                ["style", "font-size", '48px'],
                ["style", "font-style", 'italic'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1122px'],
                ["style", "width", '758px']
            ],
            "${_emerald}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px']
            ],
            "${_IMG_0330}": [
                ["style", "top", '570px'],
                ["style", "display", 'none'],
                ["style", "height", '483px'],
                ["style", "left", '479px'],
                ["style", "width", '483px']
            ],
            "${_Revolution_is_upon_us}": [
                ["style", "top", '173px'],
                ["style", "font-size", '90px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'block'],
                ["style", "height", '405px'],
                ["style", "left", '306px'],
                ["style", "width", '1352px']
            ],
            "${_IMG_0307}": [
                ["style", "top", '563px'],
                ["style", "height", '506px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '1054px'],
                ["style", "width", '506px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 152200,
            autoPlay: true,
            timeline: [
                { id: "eid4319", tween: [ "style", "${_Source_-_Tar_sands_2}", "top", '1040px', { fromValue: '1040px'}], position: 83104, duration: 0 },
                { id: "eid732", tween: [ "style", "${_Ellipse10}", "width", '1781px', { fromValue: '111px'}], position: 120548, duration: 3750 },
                { id: "eid988", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "opacity", '1', { fromValue: '0.000000'}], position: 13000, duration: 5054 },
                { id: "eid991", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "opacity", '0', { fromValue: '1'}], position: 26000, duration: 7782 },
                { id: "eid3931", tween: [ "style", "${_Tar_sands_-_b}", "opacity", '1', { fromValue: '0.000000'}], position: 75000, duration: 750 },
                { id: "eid3934", tween: [ "style", "${_Tar_sands_-_b}", "opacity", '0', { fromValue: '1'}], position: 80000, duration: 500 },
                { id: "eid684", tween: [ "style", "${_Ellipse3}", "opacity", '1', { fromValue: '0.000000'}], position: 117548, duration: 1500 },
                { id: "eid688", tween: [ "style", "${_Ellipse3}", "opacity", '0', { fromValue: '1'}], position: 124048, duration: 1000 },
                { id: "eid3255", tween: [ "style", "${_Text_-_Forest}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3249", tween: [ "style", "${_Text_-_Forest}", "display", 'none', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid3246", tween: [ "style", "${_Text_-_Forest}", "display", 'block', { fromValue: 'none'}], position: 13595, duration: 0 },
                { id: "eid3258", tween: [ "style", "${_Text_-_Forest}", "display", 'none', { fromValue: 'block'}], position: 36250, duration: 0 },
                { id: "eid592", tween: [ "style", "${_Ellipse8}", "height", '943px', { fromValue: '118px'}], position: 118548, duration: 5000 },
                { id: "eid681", tween: [ "style", "${_Ellipse4}", "width", '655px', { fromValue: '87px'}], position: 119048, duration: 6000 },
                { id: "eid270", tween: [ "style", "${_spark}", "opacity", '1', { fromValue: '0.000000'}], position: 100802, duration: 1000 },
                { id: "eid273", tween: [ "style", "${_spark}", "opacity", '0', { fromValue: '1'}], position: 102750, duration: 1000 },
                { id: "eid1303", tween: [ "style", "${_Text1_-_Intro}", "display", 'none', { fromValue: 'block'}], position: 8044, duration: 0 },
                { id: "eid74", tween: [ "style", "${_Text_-_Forest}", "line-height", '90px', { fromValue: '90px'}], position: 18723, duration: 0 },
                { id: "eid742", tween: [ "style", "${_Ellipse10}", "left", '55px', { fromValue: '678px'}], position: 120548, duration: 3750 },
                { id: "eid595", tween: [ "style", "${_Ellipse8}", "top", '-176px', { fromValue: '59px'}], position: 118548, duration: 5000 },
                { id: "eid678", tween: [ "style", "${_Ellipse4}", "height", '660px', { fromValue: '88px'}], position: 119048, duration: 6000 },
                { id: "eid957", tween: [ "style", "${_Ricket_-_a}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid958", tween: [ "style", "${_Ricket_-_a}", "display", 'block', { fromValue: 'none'}], position: 102302, duration: 0 },
                { id: "eid437", tween: [ "motion", "${_Ellipse}", [[285.01, 235, 0, 0],[285.01, 235, 0, 0]]], position: 120548, duration: 0 },
                { id: "eid438", tween: [ "motion", "${_Ellipse}", [[273.52, 234.5, 0, 0],[273.52, 234.5, 0, 0]]], position: 121548, duration: 0 },
                { id: "eid597", tween: [ "style", "${_Ellipse8}", "opacity", '1', { fromValue: '0'}], position: 118548, duration: 1000 },
                { id: "eid760", tween: [ "style", "${_Ellipse8}", "opacity", '0', { fromValue: '1'}], position: 123548, duration: 1500 },
                { id: "eid65", tween: [ "style", "${_Text2-Lanscape}", "opacity", '0.6', { fromValue: '0'}], position: 10000, duration: 1250 },
                { id: "eid66", tween: [ "style", "${_Text2-Lanscape}", "opacity", '0', { fromValue: '0.6'}], position: 15250, duration: 1500 },
                { id: "eid3607", tween: [ "style", "${_landfill}", "left", '-369px', { fromValue: '0px'}], position: 45799, duration: 13514 },
                { id: "eid479", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 118048, duration: 2500 },
                { id: "eid501", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 124048, duration: 2000, easing: "easeInOutCirc" },
                { id: "eid982", tween: [ "style", "${_Ricket_-_a}", "line-height", '90px', { fromValue: '90px'}], position: 110750, duration: 0 },
                { id: "eid10", tween: [ "style", "${_earth}", "left", '-4.48%', { fromValue: '-0.94%'}], position: 0, duration: 8280 },
                { id: "eid233", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0.000000'}], position: 144500, duration: 1000 },
                { id: "eid234", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '1'}], position: 146000, duration: 0 },
                { id: "eid782", tween: [ "style", "${_IMG_0306}", "opacity", '0.68', { fromValue: '0.000000'}], position: 114298, duration: 0 },
                { id: "eid623", tween: [ "style", "${_Ellipse7}", "height", '848px', { fromValue: '143px'}], position: 118548, duration: 6000 },
                { id: "eid4437", tween: [ "style", "${_Incinerator_-_b}", "opacity", '1', { fromValue: '0'}], position: 87141, duration: 500 },
                { id: "eid4440", tween: [ "style", "${_Incinerator_-_b}", "opacity", '0', { fromValue: '1'}], position: 92138, duration: 414 },
                { id: "eid470", tween: [ "style", "${_Bubble_-_oil}", "opacity", '0', { fromValue: '0'}], position: 119548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid491", tween: [ "style", "${_Bubble_-_oil}", "opacity", '1', { fromValue: '0'}], position: 121048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid513", tween: [ "style", "${_Bubble_-_oil}", "opacity", '1', { fromValue: '1'}], position: 122048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid533", tween: [ "style", "${_Bubble_-_oil}", "opacity", '0', { fromValue: '1'}], position: 123048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid701", tween: [ "style", "${_Ellipse2}", "opacity", '1', { fromValue: '0.000000'}], position: 119548, duration: 1000 },
                { id: "eid703", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 124548, duration: 1000 },
                { id: "eid464", tween: [ "style", "${_Symptom}", "left", '467px', { fromValue: '467px'}], position: 123798, duration: 0, easing: "easeInOutCirc" },
                { id: "eid3247", tween: [ "style", "${_Text2-Lanscape}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3244", tween: [ "style", "${_Text2-Lanscape}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid3250", tween: [ "style", "${_Text2-Lanscape}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
                { id: "eid695", tween: [ "style", "${_Ellipse3}", "height", '829px', { fromValue: '73px'}], position: 117548, duration: 7500 },
                { id: "eid1304", tween: [ "style", "${_earth}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid3684", tween: [ "style", "${_Ocean_-_b}", "opacity", '1', { fromValue: '0.000000'}], position: 65500, duration: 500 },
                { id: "eid3687", tween: [ "style", "${_Ocean_-_b}", "opacity", '0', { fromValue: '1'}], position: 72500, duration: 559 },
                { id: "eid442", tween: [ "style", "${_earthinspace}", "opacity", '1', { fromValue: '0.000000'}], position: 117048, duration: 2500, easing: "easeInOutCirc" },
                { id: "eid445", tween: [ "style", "${_earthinspace}", "opacity", '0', { fromValue: '1'}], position: 124048, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid171", tween: [ "style", "${_Text4-Treeb}", "font-size", '48px', { fromValue: '48px'}], position: 39000, duration: 0 },
                { id: "eid893", tween: [ "style", "${_IMG_03052}", "top", '574px', { fromValue: '574px'}], position: 112715, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Text_-_Forest}", "opacity", '0.75', { fromValue: '0'}], position: 16750, duration: 1940 },
                { id: "eid79", tween: [ "style", "${_Text_-_Forest}", "opacity", '0', { fromValue: '0.75'}], position: 28000, duration: 4956 },
                { id: "eid4408", tween: [ "style", "${_logo}", "display", 'block', { fromValue: 'block'}], position: 148802, duration: 0 },
                { id: "eid4406", tween: [ "style", "${_Button-Symbol}", "display", 'block', { fromValue: 'block'}], position: 148802, duration: 0 },
                { id: "eid896", tween: [ "style", "${_IMG_03062}", "left", '993px', { fromValue: '460px'}], position: 113548, duration: 0 },
                { id: "eid4266", tween: [ "style", "${_tar-sands}", "height", '1104px', { fromValue: '1217px'}], position: 75000, duration: 11250 },
                { id: "eid981", tween: [ "style", "${_Final_page_-_tagline}", "opacity", '1', { fromValue: '0.000000'}], position: 144500, duration: 1000 },
                { id: "eid4453", tween: [ "style", "${_Final_page_-_tagline}", "opacity", '1', { fromValue: '1'}], position: 152200, duration: 0 },
                { id: "eid640", tween: [ "style", "${_Ellipse6}", "height", '808px', { fromValue: '147px'}], position: 118548, duration: 5500 },
                { id: "eid239", tween: [ "style", "${_Landfill_-_a}", "opacity", '1', { fromValue: '0.000000'}], position: 53750, duration: 319 },
                { id: "eid242", tween: [ "style", "${_Landfill_-_a}", "opacity", '0', { fromValue: '1'}], position: 57369, duration: 386 },
                { id: "eid455", tween: [ "style", "${_Bubble_-_Mining}", "top", '123px', { fromValue: '123px'}], position: 120548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid916", tween: [ "style", "${_IMG_0327}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid863", tween: [ "style", "${_IMG_0327}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid888", tween: [ "style", "${_IMG_0327}", "display", 'block', { fromValue: 'none'}], position: 115798, duration: 0 },
                { id: "eid901", tween: [ "style", "${_IMG_0327}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid716", tween: [ "style", "${_Ellipse2}", "height", '848px', { fromValue: '62px'}], position: 119548, duration: 5500 },
                { id: "eid459", tween: [ "color", "${_Bubble_-_Mining}", "color", 'rgba(187,187,187,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(187,187,187,1.00)'}], position: 120548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid594", tween: [ "style", "${_Ellipse8}", "left", '1101px', { fromValue: '1617px'}], position: 118548, duration: 5000 },
                { id: "eid679", tween: [ "style", "${_Ellipse4}", "top", '219px', { fromValue: '558px'}], position: 119048, duration: 6000 },
                { id: "eid624", tween: [ "style", "${_Ellipse7}", "top", '391px', { fromValue: '914px'}], position: 118548, duration: 6000 },
                { id: "eid723", tween: [ "style", "${_Ellipse10}", "opacity", '0.75', { fromValue: '0.000000'}], position: 120048, duration: 750 },
                { id: "eid745", tween: [ "style", "${_Ellipse10}", "opacity", '1', { fromValue: '0.75'}], position: 120798, duration: 1500 },
                { id: "eid750", tween: [ "style", "${_Ellipse10}", "opacity", '0.7', { fromValue: '1'}], position: 122298, duration: 250 },
                { id: "eid751", tween: [ "style", "${_Ellipse10}", "opacity", '1', { fromValue: '0.7'}], position: 122548, duration: 2000 },
                { id: "eid741", tween: [ "style", "${_Ellipse10}", "opacity", '0', { fromValue: '1'}], position: 124548, duration: 1250 },
                { id: "eid4332", tween: [ "style", "${_smoke}", "height", '1250px', { fromValue: '1100px'}], position: 86000, duration: 11500 },
                { id: "eid698", tween: [ "style", "${_Ellipse3}", "top", '-54px', { fromValue: '146px'}], position: 117548, duration: 7500 },
                { id: "eid1000", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "left", '-507px', { fromValue: '-538px'}], position: 16125, duration: 9169 },
                { id: "eid3256", tween: [ "style", "${_lens-flare}", "display", 'none', { fromValue: 'none'}], position: 4287, duration: 0 },
                { id: "eid3253", tween: [ "style", "${_lens-flare}", "display", 'block', { fromValue: 'none'}], position: 12665, duration: 0 },
                { id: "eid3259", tween: [ "style", "${_lens-flare}", "display", 'none', { fromValue: 'block'}], position: 50537, duration: 0 },
                { id: "eid4334", tween: [ "style", "${_smoke}", "width", '2215px', { fromValue: '1948px'}], position: 86000, duration: 11500 },
                { id: "eid4333", tween: [ "style", "${_smoke}", "top", '-144px', { fromValue: '-5px'}], position: 86000, duration: 11500 },
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
                { id: "eid628", tween: [ "style", "${_Ellipse6}", "opacity", '1', { fromValue: '0.000000'}], position: 118548, duration: 1500 },
                { id: "eid632", tween: [ "style", "${_Ellipse6}", "opacity", '0', { fromValue: '1'}], position: 123548, duration: 1500 },
                { id: "eid3608", tween: [ "style", "${_landfill}", "top", '-109px', { fromValue: '-109px'}], position: 53457, duration: 0 },
                { id: "eid475", tween: [ "style", "${_Bubble_-_Diet}", "opacity", '0', { fromValue: '0'}], position: 119548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid496", tween: [ "style", "${_Bubble_-_Diet}", "opacity", '1', { fromValue: '0'}], position: 121048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid518", tween: [ "style", "${_Bubble_-_Diet}", "opacity", '1', { fromValue: '1'}], position: 122048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid538", tween: [ "style", "${_Bubble_-_Diet}", "opacity", '0', { fromValue: '1'}], position: 123048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid582", tween: [ "style", "${_Ellipse9}", "width", '780px', { fromValue: '167px'}], position: 119548, duration: 3000 },
                { id: "eid924", tween: [ "style", "${_IMG_03072}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid871", tween: [ "style", "${_IMG_03072}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid878", tween: [ "style", "${_IMG_03072}", "display", 'block', { fromValue: 'none'}], position: 113814, duration: 0 },
                { id: "eid909", tween: [ "style", "${_IMG_03072}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid765", tween: [ "style", "${_rickett}", "opacity", '1', { fromValue: '0.000000'}], position: 102302, duration: 1000 },
                { id: "eid768", tween: [ "style", "${_rickett}", "opacity", '0', { fromValue: '1'}], position: 110150, duration: 1500 },
                { id: "eid4317", tween: [ "style", "${_Source_-_Tar_sands_2}", "left", '40px', { fromValue: '40px'}], position: 83104, duration: 0 },
                { id: "eid147", tween: [ "style", "${_Emerald_-_a}", "opacity", '1', { fromValue: '0'}], position: 126250, duration: 500 },
                { id: "eid1073", tween: [ "style", "${_Emerald_-_a}", "opacity", '0', { fromValue: '1'}], position: 130000, duration: 1000 },
                { id: "eid1093", tween: [ "style", "${_Emerald_-_b}", "display", 'none', { fromValue: 'none'}], position: 50000, duration: 0 },
                { id: "eid1097", tween: [ "style", "${_Emerald_-_b}", "display", 'block', { fromValue: 'none'}], position: 129750, duration: 0 },
                { id: "eid1101", tween: [ "style", "${_Emerald_-_b}", "display", 'none', { fromValue: 'block'}], position: 133250, duration: 0 },
                { id: "eid4", tween: [ "style", "${_earth}", "height", '1317px', { fromValue: '1217px'}], position: 0, duration: 8280 },
                { id: "eid460", tween: [ "style", "${_Bubble_-_Mining}", "font-size", '44px', { fromValue: '44px'}], position: 120548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid743", tween: [ "style", "${_Ellipse10}", "top", '-317px', { fromValue: '533px'}], position: 120548, duration: 3750 },
                { id: "eid4280", tween: [ "style", "${_Tar_sands_-_source_1}", "opacity", '0.5', { fromValue: '0.000000'}], position: 75000, duration: 750 },
                { id: "eid4284", tween: [ "style", "${_Tar_sands_-_source_1}", "opacity", '0', { fromValue: '0.5'}], position: 80000, duration: 500 },
                { id: "eid1094", tween: [ "style", "${_Emerald_-_c}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid1098", tween: [ "style", "${_Emerald_-_c}", "display", 'block', { fromValue: 'none'}], position: 133000, duration: 0 },
                { id: "eid1102", tween: [ "style", "${_Emerald_-_c}", "display", 'none', { fromValue: 'block'}], position: 136500, duration: 0 },
                { id: "eid659", tween: [ "style", "${_Ellipse5}", "top", '-51px', { fromValue: '198px'}], position: 118548, duration: 6500 },
                { id: "eid80", tween: [ "style", "${_Text_-_Forest}", "left", '92px', { fromValue: '92px'}], position: 18044, duration: 0 },
                { id: "eid719", tween: [ "style", "${_Ellipse2}", "left", '100px', { fromValue: '404px'}], position: 119548, duration: 5500 },
                { id: "eid4274", tween: [ "style", "${_Source_-_Tar_sands_2}", "opacity", '0.5', { fromValue: '0.000000'}], position: 80250, duration: 500 },
                { id: "eid4277", tween: [ "style", "${_Source_-_Tar_sands_2}", "opacity", '0', { fromValue: '0.5'}], position: 85000, duration: 500 },
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
                { id: "eid1058", tween: [ "style", "${_Revolution_is_upon_us}", "top", '173px', { fromValue: '173px'}], position: 145948, duration: 0 },
                { id: "eid133", tween: [ "style", "${_Text5-Tree1}", "opacity", '0.85', { fromValue: '0.000000'}], position: 33000, duration: 2750 },
                { id: "eid135", tween: [ "style", "${_Text5-Tree1}", "opacity", '0', { fromValue: '0.85'}], position: 38500, duration: 1500 },
                { id: "eid923", tween: [ "style", "${_IMG_03082}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid870", tween: [ "style", "${_IMG_03082}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid879", tween: [ "style", "${_IMG_03082}", "display", 'block', { fromValue: 'none'}], position: 114048, duration: 0 },
                { id: "eid908", tween: [ "style", "${_IMG_03082}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid454", tween: [ "style", "${_Bubble_-_Mining}", "left", '142px', { fromValue: '142px'}], position: 120548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid86", tween: [ "style", "${_Text_-_Forest}", "width", '1389px', { fromValue: '1389px'}], position: 18044, duration: 0 },
                { id: "eid4269", tween: [ "style", "${_tar-sands}", "top", '-8px', { fromValue: '-57px'}], position: 75000, duration: 11250 },
                { id: "eid897", tween: [ "style", "${_IMG_03062}", "top", '59px', { fromValue: '574px'}], position: 113548, duration: 0 },
                { id: "eid919", tween: [ "style", "${_IMG_0324}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid866", tween: [ "style", "${_IMG_0324}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid884", tween: [ "style", "${_IMG_0324}", "display", 'block', { fromValue: 'none'}], position: 115048, duration: 0 },
                { id: "eid904", tween: [ "style", "${_IMG_0324}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid4357", tween: [ "style", "${_Smoke-_ref_1}", "opacity", '0.49479166666667', { fromValue: '0.000000'}], position: 87000, duration: 500 },
                { id: "eid4358", tween: [ "style", "${_Smoke-_ref_1}", "opacity", '0.50070112179487', { fromValue: '0.49479166666667'}], position: 87500, duration: 4250 },
                { id: "eid4360", tween: [ "style", "${_Smoke-_ref_1}", "opacity", '0', { fromValue: '0.500701'}], position: 91750, duration: 500 },
                { id: "eid4267", tween: [ "style", "${_tar-sands}", "width", '1961px', { fromValue: '2161px'}], position: 75000, duration: 11250 },
                { id: "eid593", tween: [ "style", "${_Ellipse8}", "width", '943px', { fromValue: '118px'}], position: 118548, duration: 5000 },
                { id: "eid77", tween: [ "style", "${_Text_-_Forest}", "height", '450px', { fromValue: '450px'}], position: 18044, duration: 0 },
                { id: "eid462", tween: [ "style", "${_Bubble_-_Mining}", "height", '242px', { fromValue: '242px'}], position: 120548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid75", tween: [ "style", "${_Text_-_Forest}", "font-size", '55px', { fromValue: '55px'}], position: 18723, duration: 0 },
                { id: "eid284", tween: [ "style", "${_Spark_-_b}", "opacity", '1', { fromValue: '0.000000'}], position: 101202, duration: 500 },
                { id: "eid287", tween: [ "style", "${_Spark_-_b}", "opacity", '0', { fromValue: '1'}], position: 102750, duration: 500 },
                { id: "eid477", tween: [ "style", "${_Bubble_-_Mining}", "opacity", '0', { fromValue: '0'}], position: 119548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid498", tween: [ "style", "${_Bubble_-_Mining}", "opacity", '1', { fromValue: '0'}], position: 121048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid520", tween: [ "style", "${_Bubble_-_Mining}", "opacity", '1', { fromValue: '1'}], position: 122048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid540", tween: [ "style", "${_Bubble_-_Mining}", "opacity", '0', { fromValue: '1'}], position: 123048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid345", tween: [ "style", "${_Symptom}", "height", '389px', { fromValue: '389px'}], position: 123173, duration: 0 },
                { id: "eid4232", tween: [ "style", "${_static2}", "opacity", '0.28691102991453', { fromValue: '0.000000'}], position: 54536, duration: 40 },
                { id: "eid4235", tween: [ "style", "${_static2}", "opacity", '0.3', { fromValue: '0.28691102991453'}], position: 54576, duration: 100 },
                { id: "eid4574", tween: [ "style", "${_static2}", "opacity", '0.3', { fromValue: '0.3'}], position: 55127, duration: 0 },
                { id: "eid3620", tween: [ "style", "${_Landfill_-_c}", "opacity", '1', { fromValue: '0.000000'}], position: 50408, duration: 303 },
                { id: "eid3623", tween: [ "style", "${_Landfill_-_c}", "opacity", '0', { fromValue: '1'}], position: 53750, duration: 339 },
                { id: "eid1053", tween: [ "style", "${_Revolution_is_upon_us}", "display", 'none', { fromValue: 'block'}], position: 57000, duration: 0 },
                { id: "eid1054", tween: [ "style", "${_Revolution_is_upon_us}", "display", 'block', { fromValue: 'none'}], position: 143500, duration: 0 },
                { id: "eid1055", tween: [ "style", "${_Revolution_is_upon_us}", "display", 'none', { fromValue: 'block'}], position: 146500, duration: 0 },
                { id: "eid3257", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3254", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "display", 'block', { fromValue: 'none'}], position: 12665, duration: 0 },
                { id: "eid3260", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "display", 'none', { fromValue: 'block'}], position: 38250, duration: 0 },
                { id: "eid103", tween: [ "style", "${_emerald}", "opacity", '1', { fromValue: '0'}], position: 126250, duration: 748 },
                { id: "eid1074", tween: [ "style", "${_emerald}", "opacity", '0', { fromValue: '1'}], position: 137500, duration: 1000 },
                { id: "eid4201", tween: [ "style", "${_Source_-_ocean}", "opacity", '0.5', { fromValue: '0.000000'}], position: 65666, duration: 500 },
                { id: "eid4204", tween: [ "style", "${_Source_-_ocean}", "opacity", '0', { fromValue: '0.5'}], position: 72500, duration: 559 },
                { id: "eid4313", tween: [ "style", "${_Ocean_-_Reference_1}", "opacity", '0.49821587179487', { fromValue: '0'}], position: 60378, duration: 511, easing: "easeInElastic" },
                { id: "eid4197", tween: [ "style", "${_Ocean_-_Reference_1}", "opacity", '0', { fromValue: '0.5'}], position: 65500, duration: 500, easing: "easeInElastic" },
                { id: "eid925", tween: [ "style", "${_IMG_03062}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid872", tween: [ "style", "${_IMG_03062}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid877", tween: [ "style", "${_IMG_03062}", "display", 'block', { fromValue: 'none'}], position: 113548, duration: 0 },
                { id: "eid910", tween: [ "style", "${_IMG_03062}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid1104", tween: [ "color", "${_Revolution_is_upon_us}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 144000, duration: 0 },
                { id: "eid680", tween: [ "style", "${_Ellipse4}", "left", '1368px', { fromValue: '1732px'}], position: 119048, duration: 6000 },
                { id: "eid76", tween: [ "style", "${_Text_-_Forest}", "top", '569px', { fromValue: '569px'}], position: 18044, duration: 0 },
                { id: "eid892", tween: [ "style", "${_IMG_03052}", "left", '1000px', { fromValue: '1000px'}], position: 112715, duration: 0 },
                { id: "eid243", tween: [ "style", "${_Ocean-a}", "opacity", '1', { fromValue: '0.000000'}], position: 60378, duration: 512 },
                { id: "eid244", tween: [ "style", "${_Ocean-a}", "opacity", '0', { fromValue: '1'}], position: 65500, duration: 500 },
                { id: "eid913", tween: [ "style", "${_IMG_0330}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid860", tween: [ "style", "${_IMG_0330}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid891", tween: [ "style", "${_IMG_0330}", "display", 'block', { fromValue: 'none'}], position: 117048, duration: 0 },
                { id: "eid898", tween: [ "style", "${_IMG_0330}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid1095", tween: [ "style", "${_Emerald_-_d}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid1099", tween: [ "style", "${_Emerald_-_d}", "display", 'block', { fromValue: 'none'}], position: 136250, duration: 0 },
                { id: "eid1103", tween: [ "style", "${_Emerald_-_d}", "display", 'none', { fromValue: 'block'}], position: 138000, duration: 0 },
                { id: "eid1894", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid1919", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 9332, duration: 0 },
                { id: "eid3890", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 9798, duration: 96552 },
                { id: "eid3891", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 118298, duration: 1500 },
                { id: "eid4268", tween: [ "style", "${_tar-sands}", "left", '-40px', { fromValue: '-99px'}], position: 75000, duration: 8104 },
                { id: "eid4316", tween: [ "style", "${_tar-sands}", "left", '-10px', { fromValue: '-40px'}], position: 83104, duration: 3146 },
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
                { id: "eid476", tween: [ "style", "${_Bubble_-_Toxics}", "opacity", '0', { fromValue: '0'}], position: 119548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid497", tween: [ "style", "${_Bubble_-_Toxics}", "opacity", '1', { fromValue: '0'}], position: 121048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid519", tween: [ "style", "${_Bubble_-_Toxics}", "opacity", '1', { fromValue: '1'}], position: 122048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid539", tween: [ "style", "${_Bubble_-_Toxics}", "opacity", '0', { fromValue: '1'}], position: 123048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid6", tween: [ "style", "${_earth}", "width", '2106px', { fromValue: '1948px'}], position: 0, duration: 8280 },
                { id: "eid926", tween: [ "style", "${_IMG_03052}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid873", tween: [ "style", "${_IMG_03052}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid876", tween: [ "style", "${_IMG_03052}", "display", 'block', { fromValue: 'none'}], position: 113298, duration: 0 },
                { id: "eid911", tween: [ "style", "${_IMG_03052}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid625", tween: [ "style", "${_Ellipse7}", "width", '848px', { fromValue: '143px'}], position: 118548, duration: 6000 },
                { id: "eid189", tween: [ "style", "${_ocean}", "opacity", '1', { fromValue: '0.000000'}], position: 59638, duration: 612 },
                { id: "eid192", tween: [ "style", "${_ocean}", "opacity", '0', { fromValue: '1'}], position: 72500, duration: 1250 },
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
                { id: "eid730", tween: [ "style", "${_Ellipse10}", "height", '1765px', { fromValue: '110px'}], position: 120548, duration: 3750 },
                { id: "eid124", tween: [ "style", "${_tree}", "opacity", '1', { fromValue: '0.000000'}], position: 31750, duration: 3093 },
                { id: "eid154", tween: [ "style", "${_tree}", "opacity", '0', { fromValue: '1'}], position: 38000, duration: 2000 },
                { id: "eid696", tween: [ "style", "${_Ellipse3}", "width", '829px', { fromValue: '73px'}], position: 117548, duration: 7500 },
                { id: "eid4237", tween: [ "style", "${_static2}", "display", 'none', { fromValue: 'block'}], position: 55127, duration: 0 },
                { id: "eid962", tween: [ "style", "${_Ricket_-_a}", "opacity", '1', { fromValue: '0'}], position: 104052, duration: 500 },
                { id: "eid965", tween: [ "style", "${_Ricket_-_a}", "opacity", '0', { fromValue: '1'}], position: 111650, duration: 1100 },
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
                { id: "eid657", tween: [ "style", "${_Ellipse5}", "width", '782px', { fromValue: '73px'}], position: 118548, duration: 6500 },
                { id: "eid922", tween: [ "style", "${_IMG_03092}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid869", tween: [ "style", "${_IMG_03092}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid880", tween: [ "style", "${_IMG_03092}", "display", 'block', { fromValue: 'none'}], position: 114298, duration: 0 },
                { id: "eid907", tween: [ "style", "${_IMG_03092}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid4083", tween: [ "style", "${_Landfill_-_d}", "opacity", '1', { fromValue: '0.000000'}], position: 47250, duration: 262 },
                { id: "eid4086", tween: [ "style", "${_Landfill_-_d}", "opacity", '0', { fromValue: '1'}], position: 50408, duration: 342 },
                { id: "eid4077", tween: [ "style", "${_EPA_-_Landfill}", "opacity", '0.7043936965812', { fromValue: '0.000000'}], position: 47250, duration: 750 },
                { id: "eid4095", tween: [ "style", "${_EPA_-_Landfill}", "opacity", '0', { fromValue: '0.704394'}], position: 56619, duration: 1136 },
                { id: "eid790", tween: [ "style", "${_IMG_0305}", "opacity", '1', { fromValue: '0.000000'}], position: 116298, duration: 0 },
                { id: "eid1057", tween: [ "style", "${_Revolution_is_upon_us}", "height", '405px', { fromValue: '405px'}], position: 145948, duration: 0 },
                { id: "eid471", tween: [ "style", "${_Bubble_-_litter}", "opacity", '0', { fromValue: '0'}], position: 119548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid492", tween: [ "style", "${_Bubble_-_litter}", "opacity", '1', { fromValue: '0'}], position: 121048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid514", tween: [ "style", "${_Bubble_-_litter}", "opacity", '1', { fromValue: '1'}], position: 122048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid534", tween: [ "style", "${_Bubble_-_litter}", "opacity", '0', { fromValue: '1'}], position: 123048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid1219", tween: [ "style", "${_lens-flare}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 2394 },
                { id: "eid3596", tween: [ "style", "${_lens-flare}", "opacity", '0.45', { fromValue: '1'}], position: 31452, duration: 798 },
                { id: "eid3592", tween: [ "style", "${_lens-flare}", "opacity", '0.54', { fromValue: '0.4542270004749298'}], position: 32250, duration: 4750 },
                { id: "eid3593", tween: [ "style", "${_lens-flare}", "opacity", '1', { fromValue: '0.54'}], position: 37000, duration: 1000 },
                { id: "eid1190", tween: [ "style", "${_lens-flare}", "opacity", '0', { fromValue: '1'}], position: 44250, duration: 1250 },
                { id: "eid1143", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "height", '1709px', { fromValue: '1709px'}], position: 16125, duration: 0 },
                { id: "eid474", tween: [ "style", "${_Bubble_-_marine_life}", "opacity", '0', { fromValue: '0'}], position: 119548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid495", tween: [ "style", "${_Bubble_-_marine_life}", "opacity", '1', { fromValue: '0'}], position: 121048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid517", tween: [ "style", "${_Bubble_-_marine_life}", "opacity", '1', { fromValue: '1'}], position: 122048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid537", tween: [ "style", "${_Bubble_-_marine_life}", "opacity", '0', { fromValue: '1'}], position: 123048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid914", tween: [ "style", "${_IMG_0329}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid861", tween: [ "style", "${_IMG_0329}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid890", tween: [ "style", "${_IMG_0329}", "display", 'block', { fromValue: 'none'}], position: 116548, duration: 0 },
                { id: "eid899", tween: [ "style", "${_IMG_0329}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid4015", tween: [ "style", "${_Rickett_-_b}", "opacity", '0', { fromValue: '0'}], position: 112715, duration: 0 },
                { id: "eid4016", tween: [ "style", "${_Rickett_-_b}", "opacity", '1', { fromValue: '0'}], position: 113548, duration: 0 },
                { id: "eid4017", tween: [ "style", "${_Rickett_-_b}", "opacity", '1', { fromValue: '1'}], position: 117048, duration: 0 },
                { id: "eid4018", tween: [ "style", "${_Rickett_-_b}", "opacity", '0', { fromValue: '1'}], position: 117879, duration: 0 },
                { id: "eid461", tween: [ "style", "${_Bubble_-_Mining}", "width", '296px', { fromValue: '296px'}], position: 120548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid71", tween: [ "style", "${_Text2-Lanscape}", "line-height", '90px', { fromValue: '90px'}], position: 12665, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.6', { fromValue: '0'}], position: 2858, duration: 1100 },
                { id: "eid2985", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.45', { fromValue: '0.6'}], position: 4287, duration: 96 },
                { id: "eid2987", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.6', { fromValue: '0.45'}], position: 4426, duration: 0 },
                { id: "eid2988", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.8'}], position: 4426, duration: 0 },
                { id: "eid2511", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.44280849358974', { fromValue: '0.8'}], position: 4601, duration: 45 },
                { id: "eid2990", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.44280849358974'}], position: 4692, duration: 0 },
                { id: "eid2991", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.8'}], position: 4692, duration: 0 },
                { id: "eid1115", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.55218349358974', { fromValue: '0.8'}], position: 4915, duration: 0 },
                { id: "eid2993", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.45', { fromValue: '0.55218349358974'}], position: 4967, duration: 0 },
                { id: "eid2994", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.45', { fromValue: '0.45'}], position: 4967, duration: 0 },
                { id: "eid3004", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.80189635560044', { fromValue: '0.8'}], position: 5015, duration: 0 },
                { id: "eid3006", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.80189635560044'}], position: 5392, duration: 0 },
                { id: "eid3007", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.8'}], position: 5392, duration: 0 },
                { id: "eid2532", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.7', { fromValue: '0.44280800223350525'}], position: 5443, duration: 67 },
                { id: "eid4048", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.7', { fromValue: '0.7'}], position: 6160, duration: 0 },
                { id: "eid2535", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.45', { fromValue: '0.7'}], position: 6213, duration: 47 },
                { id: "eid3010", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.45'}], position: 6324, duration: 0 },
                { id: "eid3011", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.8'}], position: 6324, duration: 0 },
                { id: "eid3012", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.4', { fromValue: '0.8'}], position: 6433, duration: 0 },
                { id: "eid3013", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.8', { fromValue: '0.4'}], position: 6560, duration: 0 },
                { id: "eid3014", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0.6', { fromValue: '0.8'}], position: 6692, duration: 0 },
                { id: "eid55", tween: [ "style", "${_Text1_-_Intro}", "opacity", '0', { fromValue: '0.6'}], position: 6750, duration: 1250 },
                { id: "eid786", tween: [ "style", "${_IMG_0304}", "opacity", '1', { fromValue: '0.000000'}], position: 115298, duration: 0 },
                { id: "eid717", tween: [ "style", "${_Ellipse2}", "top", '387px', { fromValue: '925px'}], position: 119548, duration: 5500 },
                { id: "eid718", tween: [ "style", "${_Ellipse2}", "width", '848px', { fromValue: '62px'}], position: 119548, duration: 5500 },
                { id: "eid918", tween: [ "style", "${_IMG_0325}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid865", tween: [ "style", "${_IMG_0325}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid885", tween: [ "style", "${_IMG_0325}", "display", 'block', { fromValue: 'none'}], position: 115298, duration: 0 },
                { id: "eid903", tween: [ "style", "${_IMG_0325}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid794", tween: [ "style", "${_IMG_0310}", "opacity", '1', { fromValue: '0.000000'}], position: 117298, duration: 0 },
                { id: "eid697", tween: [ "style", "${_Ellipse3}", "left", '726px', { fromValue: '1270px'}], position: 117548, duration: 7500 },
                { id: "eid472", tween: [ "style", "${_Bubble_-_carbon}", "opacity", '0', { fromValue: '0'}], position: 119548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid493", tween: [ "style", "${_Bubble_-_carbon}", "opacity", '1', { fromValue: '0'}], position: 121048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid515", tween: [ "style", "${_Bubble_-_carbon}", "opacity", '1', { fromValue: '1'}], position: 122048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid535", tween: [ "style", "${_Bubble_-_carbon}", "opacity", '0', { fromValue: '1'}], position: 123048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid920", tween: [ "style", "${_IMG_0323}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid867", tween: [ "style", "${_IMG_0323}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid883", tween: [ "style", "${_IMG_0323}", "display", 'block', { fromValue: 'none'}], position: 114798, duration: 0 },
                { id: "eid905", tween: [ "style", "${_IMG_0323}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid747", tween: [ "color", "${_Ellipse10}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(33,31,31,1)'}], position: 120548, duration: 3500 },
                { id: "eid749", tween: [ "color", "${_Ellipse10}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 124298, duration: 0 },
                { id: "eid303", tween: [ "style", "${_Welcome_-_text}", "opacity", '1', { fromValue: '0'}], position: 139500, duration: 1000 },
                { id: "eid306", tween: [ "style", "${_Welcome_-_text}", "opacity", '0', { fromValue: '1'}], position: 142500, duration: 1000 },
                { id: "eid3943", tween: [ "style", "${_Incinerator_-_c}", "opacity", '1', { fromValue: '0.000000'}], position: 92406, duration: 448 },
                { id: "eid3946", tween: [ "style", "${_Incinerator_-_c}", "opacity", '0', { fromValue: '1'}], position: 96750, duration: 250 },
                { id: "eid297", tween: [ "style", "${_Welcome_-_title}", "opacity", '0', { fromValue: '0'}], position: 138750, duration: 0 },
                { id: "eid295", tween: [ "style", "${_Welcome_-_title}", "opacity", '1', { fromValue: '0'}], position: 139500, duration: 0 },
                { id: "eid557", tween: [ "style", "${_Welcome_-_title}", "opacity", '1', { fromValue: '1'}], position: 141500, duration: 0 },
                { id: "eid301", tween: [ "style", "${_Welcome_-_title}", "opacity", '0', { fromValue: '1'}], position: 143000, duration: 0 },
                { id: "eid921", tween: [ "style", "${_IMG_0322}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid868", tween: [ "style", "${_IMG_0322}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid881", tween: [ "style", "${_IMG_0322}", "display", 'block', { fromValue: 'none'}], position: 114548, duration: 0 },
                { id: "eid906", tween: [ "style", "${_IMG_0322}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid626", tween: [ "style", "${_Ellipse7}", "left", '482px', { fromValue: '800px'}], position: 118548, duration: 6000 },
                { id: "eid641", tween: [ "style", "${_Ellipse6}", "width", '808px', { fromValue: '147px'}], position: 118548, duration: 5500 },
                { id: "eid201", tween: [ "style", "${_smoke}", "opacity", '1', { fromValue: '0.000000'}], position: 86000, duration: 750 },
                { id: "eid204", tween: [ "style", "${_smoke}", "opacity", '0', { fromValue: '1'}], position: 96250, duration: 1000 },
                { id: "eid3248", tween: [ "style", "${_landscape}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid3245", tween: [ "style", "${_landscape}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0 },
                { id: "eid3251", tween: [ "style", "${_landscape}", "display", 'none', { fromValue: 'block'}], position: 18690, duration: 0 },
                { id: "eid778", tween: [ "style", "${_IMG_0307}", "opacity", '1', { fromValue: '0.000000'}], position: 113814, duration: 0 },
                { id: "eid1056", tween: [ "style", "${_Revolution_is_upon_us}", "font-size", '90px', { fromValue: '90px'}], position: 145948, duration: 0 },
                { id: "eid310", tween: [ "style", "${_Symptom}", "opacity", '1', { fromValue: '0.000000'}], position: 122548, duration: 2500 },
                { id: "eid555", tween: [ "style", "${_Symptom}", "opacity", '0', { fromValue: '1'}], position: 125048, duration: 625 },
                { id: "eid541", tween: [ "style", "${_Symptom}", "opacity", '0', { fromValue: '0'}], position: 126048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid195", tween: [ "style", "${_tar-sands}", "opacity", '1', { fromValue: '0.000000'}], position: 74000, duration: 1000 },
                { id: "eid198", tween: [ "style", "${_tar-sands}", "opacity", '0', { fromValue: '1'}], position: 85302, duration: 948 },
                { id: "eid2190", tween: [ "style", "${_earth}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 3000 },
                { id: "eid15", tween: [ "style", "${_earth}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 2000 },
                { id: "eid2194", tween: [ "style", "${_Skip_tag}", "opacity", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
                { id: "eid277", tween: [ "style", "${_Spark_-_a}", "opacity", '1', { fromValue: '0.000000'}], position: 98000, duration: 500 },
                { id: "eid280", tween: [ "style", "${_Spark_-_a}", "opacity", '0', { fromValue: '1'}], position: 100250, duration: 1000 },
                { id: "eid656", tween: [ "style", "${_Ellipse5}", "height", '782px', { fromValue: '73px'}], position: 118548, duration: 6500 },
                { id: "eid581", tween: [ "style", "${_Ellipse9}", "top", '396px', { fromValue: '816px'}], position: 119548, duration: 3000 },
                { id: "eid1092", tween: [ "style", "${_Emerald_-_a}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid1096", tween: [ "style", "${_Emerald_-_a}", "display", 'block', { fromValue: 'none'}], position: 126750, duration: 0 },
                { id: "eid1100", tween: [ "style", "${_Emerald_-_a}", "display", 'none', { fromValue: 'block'}], position: 132750, duration: 0 },
                { id: "eid432", tween: [ "style", "${_Ellipse}", "height", '1328px', { fromValue: '104px'}], position: 118048, duration: 6000 },
                { id: "eid658", tween: [ "style", "${_Ellipse5}", "left", '467px', { fromValue: '743px'}], position: 118548, duration: 6500 },
                { id: "eid463", tween: [ "style", "${_Symptom}", "top", '376px', { fromValue: '376px'}], position: 123798, duration: 0, easing: "easeInOutCirc" },
                { id: "eid4318", tween: [ "style", "${_Tar_sands_-_source_1}", "top", '1040px', { fromValue: '1040px'}], position: 83104, duration: 0 },
                { id: "eid645", tween: [ "style", "${_Ellipse5}", "opacity", '1', { fromValue: '0.000000'}], position: 118548, duration: 1000 },
                { id: "eid649", tween: [ "style", "${_Ellipse5}", "opacity", '0', { fromValue: '1'}], position: 123548, duration: 1500 },
                { id: "eid772", tween: [ "style", "${_IMG_0308}", "opacity", '1', { fromValue: '0.000000'}], position: 112715, duration: 0 },
                { id: "eid606", tween: [ "style", "${_Ellipse7}", "opacity", '1', { fromValue: '0.000000'}], position: 119548, duration: 1000 },
                { id: "eid610", tween: [ "style", "${_Ellipse7}", "opacity", '0', { fromValue: '1'}], position: 123548, duration: 1500 },
                { id: "eid8", tween: [ "style", "${_earth}", "top", '-11.02%', { fromValue: '-8.24%'}], position: 0, duration: 8280 },
                { id: "eid801", tween: [ "style", "${_IMG_0309}", "display", 'block', { fromValue: 'block'}], position: 113298, duration: 0 },
                { id: "eid799", tween: [ "style", "${_IMG_0309}", "display", 'none', { fromValue: 'block'}], position: 116298, duration: 0 },
                { id: "eid800", tween: [ "style", "${_IMG_0309}", "display", 'block', { fromValue: 'none'}], position: 119298, duration: 0 },
                { id: "eid583", tween: [ "style", "${_Ellipse9}", "left", '1083px', { fromValue: '1450px'}], position: 119548, duration: 3000 },
                { id: "eid915", tween: [ "style", "${_IMG_0328}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid862", tween: [ "style", "${_IMG_0328}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid889", tween: [ "style", "${_IMG_0328}", "display", 'block', { fromValue: 'none'}], position: 116298, duration: 0 },
                { id: "eid900", tween: [ "style", "${_IMG_0328}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
                { id: "eid642", tween: [ "style", "${_Ellipse6}", "left", '-185px', { fromValue: '69px'}], position: 118548, duration: 5500 },
                { id: "eid1060", tween: [ "style", "${_Revolution_is_upon_us}", "left", '306px', { fromValue: '306px'}], position: 145948, duration: 0 },
                { id: "eid4281", tween: [ "style", "${_Tar_sands_-_source_1}", "font-size", '20px', { fromValue: '20px'}], position: 75750, duration: 0 },
                { id: "eid1001", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "top", '-227px', { fromValue: '-312px'}], position: 16125, duration: 9169 },
                { id: "eid266", tween: [ "style", "${_Button-Symbol}", "opacity", '1', { fromValue: '0.000000'}], position: 145500, duration: 1500 },
                { id: "eid4407", tween: [ "style", "${_Button-Symbol}", "opacity", '1', { fromValue: '1'}], position: 148802, duration: 0 },
                { id: "eid798", tween: [ "style", "${_IMG_0309}", "opacity", '1', { fromValue: '0.000000'}], position: 118298, duration: 0 },
                { id: "eid4337", tween: [ "style", "${_smoke}", "left", '-115px', { fromValue: '-12px'}], position: 86000, duration: 11500 },
                { id: "eid473", tween: [ "style", "${_Bubble_-_food_miles}", "opacity", '0', { fromValue: '0'}], position: 119548, duration: 0, easing: "easeInOutCirc" },
                { id: "eid494", tween: [ "style", "${_Bubble_-_food_miles}", "opacity", '1', { fromValue: '0'}], position: 121048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid516", tween: [ "style", "${_Bubble_-_food_miles}", "opacity", '1', { fromValue: '1'}], position: 122048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid536", tween: [ "style", "${_Bubble_-_food_miles}", "opacity", '0', { fromValue: '1'}], position: 123048, duration: 0, easing: "easeInOutCirc" },
                { id: "eid1140", tween: [ "transform", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "rotateZ", '-5deg', { fromValue: '21deg'}], position: 13000, duration: 20782 },
                { id: "eid4366", tween: [ "style", "${_Incinerator_-_source_2}", "opacity", '0.49843082264957', { fromValue: '0.000000'}], position: 92406, duration: 302 },
                { id: "eid4369", tween: [ "style", "${_Incinerator_-_source_2}", "opacity", '0', { fromValue: '0.498431'}], position: 96750, duration: 250 },
                { id: "eid601", tween: [ "style", "${_Ellipse9}", "opacity", '1', { fromValue: '0'}], position: 119048, duration: 2500 },
                { id: "eid604", tween: [ "style", "${_Ellipse9}", "opacity", '0', { fromValue: '1'}], position: 123548, duration: 1500 },
                { id: "eid254", tween: [ "style", "${_Tar_Sands_-a}", "opacity", '1', { fromValue: '0.000000'}], position: 80250, duration: 500 },
                { id: "eid256", tween: [ "style", "${_Tar_Sands_-a}", "opacity", '0', { fromValue: '1'}], position: 85000, duration: 500 },
                { id: "eid643", tween: [ "style", "${_Ellipse6}", "top", '285px', { fromValue: '590px'}], position: 118548, duration: 5500 },
                { id: "eid469", tween: [ "style", "${_Bubble-tar_sands}", "opacity", '0', { fromValue: '0'}], position: 120798, duration: 0, easing: "easeInOutCirc" },
                { id: "eid490", tween: [ "style", "${_Bubble-tar_sands}", "opacity", '1', { fromValue: '0'}], position: 122298, duration: 0, easing: "easeInOutCirc" },
                { id: "eid512", tween: [ "style", "${_Bubble-tar_sands}", "opacity", '1', { fromValue: '1'}], position: 123298, duration: 0, easing: "easeInOutCirc" },
                { id: "eid532", tween: [ "style", "${_Bubble-tar_sands}", "opacity", '0', { fromValue: '1'}], position: 124298, duration: 0, easing: "easeInOutCirc" },
                { id: "eid176", tween: [ "style", "${_Text4-Treeb}", "line-height", '90px', { fromValue: '90px'}], position: 39000, duration: 0 },
                { id: "eid1144", tween: [ "style", "${__3d-abstract_hdwallpaper_autumn-forest_51194}", "width", '3037px', { fromValue: '3037px'}], position: 16125, duration: 0 },
                { id: "eid559", tween: [ "style", "${_Ellipse9}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 119548, duration: 0 },
                { id: "eid4611", tween: [ "style", "${_Ellipse9}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 119548, duration: 0 },
                { id: "eid4612", tween: [ "style", "${_Ellipse9}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 119548, duration: 0 },
                { id: "eid4613", tween: [ "style", "${_Ellipse9}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 119548, duration: 0 },
                { id: "eid4614", tween: [ "style", "${_Ellipse9}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 119548, duration: 0 },
                { id: "eid558", tween: [ "style", "${_Ellipse9}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 122048, duration: 0 },
                { id: "eid4615", tween: [ "style", "${_Ellipse9}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 122048, duration: 0 },
                { id: "eid4616", tween: [ "style", "${_Ellipse9}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 122048, duration: 0 },
                { id: "eid4617", tween: [ "style", "${_Ellipse9}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 122048, duration: 0 },
                { id: "eid4618", tween: [ "style", "${_Ellipse9}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 122048, duration: 0 },
                { id: "eid560", tween: [ "style", "${_Ellipse9}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 123548, duration: 0 },
                { id: "eid4619", tween: [ "style", "${_Ellipse9}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 123548, duration: 0 },
                { id: "eid4620", tween: [ "style", "${_Ellipse9}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 123548, duration: 0 },
                { id: "eid4621", tween: [ "style", "${_Ellipse9}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 123548, duration: 0 },
                { id: "eid4622", tween: [ "style", "${_Ellipse9}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 123548, duration: 0 },
                { id: "eid433", tween: [ "style", "${_Ellipse}", "width", '1328px', { fromValue: '104px'}], position: 118048, duration: 6000 },
                { id: "eid917", tween: [ "style", "${_IMG_0326}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid864", tween: [ "style", "${_IMG_0326}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid887", tween: [ "style", "${_IMG_0326}", "display", 'block', { fromValue: 'none'}], position: 115548, duration: 0 },
                { id: "eid902", tween: [ "style", "${_IMG_0326}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 },
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
                { id: "eid580", tween: [ "style", "${_Ellipse9}", "height", '790px', { fromValue: '169px'}], position: 119548, duration: 3000 },
                { id: "eid661", tween: [ "style", "${_Ellipse4}", "opacity", '1', { fromValue: '0.000000'}], position: 118548, duration: 1000 },
                { id: "eid664", tween: [ "style", "${_Ellipse4}", "opacity", '0', { fromValue: '1'}], position: 123548, duration: 1000 },
                { id: "eid802", tween: [ "style", "${_IMG_0308}", "display", 'none', { fromValue: 'block'}], position: 111798, duration: 0 },
                { id: "eid803", tween: [ "style", "${_IMG_0308}", "display", 'block', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Text2-Lanscape}", "font-size", '56px', { fromValue: '56px'}], position: 12665, duration: 0 },
                { id: "eid927", tween: [ "style", "${_IMG_03042}", "display", 'none', { fromValue: 'none'}], position: 48250, duration: 0 },
                { id: "eid874", tween: [ "style", "${_IMG_03042}", "display", 'none', { fromValue: 'none'}], position: 112715, duration: 0 },
                { id: "eid875", tween: [ "style", "${_IMG_03042}", "display", 'block', { fromValue: 'none'}], position: 113048, duration: 0 },
                { id: "eid912", tween: [ "style", "${_IMG_03042}", "display", 'none', { fromValue: 'block'}], position: 117798, duration: 0 }            ]
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
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    id: 'Start_Button',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(214,77,13,1.00)', [270, [['rgba(220,80,29,1.00)', 0], ['rgba(237,121,40,1.00)', 100]]]]
                },
                {
                    font: ['Courier, \'Courier New\', monospace', 104, 'rgba(252,249,249,1)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Start',
                    text: 'START',
                    align: 'center',
                    rect: ['50px', '41px', '519px', '133px', 'auto', 'auto']
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
                ["style", "border-width", '1px'],
                ["style", "width", '619px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.offsetV", '10px'],
                ["style", "border-top-right-radius", [32,32], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '200px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["gradient", "background-image", [270,[['rgba(220,80,29,1.00)',0],['rgba(237,121,40,1.00)',100]]]],
                ["subproperty", "boxShadow.spread", '-3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '202px'],
                ["style", "width", '621px']
            ],
            "${_Start}": [
                ["style", "top", '41px'],
                ["style", "text-align", 'center'],
                ["style", "left", '50px'],
                ["style", "font-size", '104px']
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
