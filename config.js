const fs = require("fs");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;

global.SESSION_ID = process.env.SESSION_ID || "taira_tech-W8kAjD5A#xo7Qpvf3KOGg4jLPlYHUE64XlpZcU0i2DP4Nxwg3SQk"
global.Owner = ["2347087941249"]; //like 2347080968564 
global.OwnerName =  "Engrdolor";
global.BotName = "Engrdolor";
global.packname = "Engrdolor";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; 
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; //Do not change!
global.menutype = "v3"

global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = ["2347087941249"] //Ignore,Unused

//
global.ntilinkytvid = [true]
global.ntilinkytch = [true]
global.ntilinkig = [true]
global.ntilinkfb = [true]
global.ntilinktg = [true]
global.ntilinktt = [true]
global.ntilinktwt = true[]
global.ntilinkall = [true]
global.nticall = [true]
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = [true]
global.gcrevoke = [true]
global.autorep = [true]
global.ntilink = [true]


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make Engrdolor Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
