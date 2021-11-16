window.addEventListener("load", perkRandomizer);

function perkRandomizer(){
class perks{
    constructor(tier, perkName)
    {
    this.tier = tier;
    this.perkName = perkName;
    }
}
//A whole array for each button a.k.a. category of perks.
let perkListAll = [
    new perks("cTier", "Dark Sense"), 
    new perks("cTier", "Deja Vu"), 
    new perks("cTier", "Guardian"), 
    new perks("bTier", "Hope"), 
    new perks("bTier", "Inner Healing"), 
    new perks("bTier", "Kindred"), 
    new perks("aTier", "Kinship"), 
    new perks("dTier", "Lightweight"), 
    new perks("dTier", "No One Left Behind"), 
    new perks("cTier", "Plunderer's Instinct"), 
    new perks("dTier", "Premonition"), 
    new perks("bTier", "Renewal"), 
    new perks("aTier", "Resilience"), 
    new perks("bTier", "Self-Aware"), 
    new perks("cTier", "Situational Awareness"), 
    new perks("cTier", "Slippery Meat"), 
    new perks("bTier", "Small Game"), 
    new perks("aTier", "Spine Chill"), 
    new perks("dTier", "This is Not Happening"), 
    new perks("aTier", "We'll Make It"), 
    new perks("bTier", "Bond"), 
    new perks("bTier", "Prove Thyself"), 
    new perks("cTier", "Leader"), 
    new perks("bTier", "Quick and Quiet"), 
    new perks("aTier", "Sprint Burst"), 
    new perks("aTier", "Adrenaline"), 
    new perks("bTier", "Empathy"), 
    new perks("bTier", "Botany Knowledge"), 
    new perks("cTier", "Self-Care"), 
    new perks("aTier", "Iron Will"), 
    new perks("cTier", "Calm Spirit"), 
    new perks("bTier", "Saboteur"), 
    new perks("bTier", "Balanced Landing"), 
    new perks("cTier", "Urban Evasion"), 
    new perks("bTier", "Streetwise"), 
    new perks("cTier", "Left Behind"), 
    new perks("sTier", "Borrowed Time"), 
    new perks("sTier", "Unbreakable"), 
    new perks("dTier", "Sole Survivor"), 
    new perks("cTier", "Object of Obsession"), 
    new perks("sTier", "Decisive Strike"), 
    new perks("dTier", "Up the Ante"), 
    new perks("cTier", "Open-Handed"), 
    new perks("cTier", "Ace in the Hole"), 
    new perks("cTier", "Technician"), 
    new perks("aTier", "Lithe"), 
    new perks("bTier", "Alert"), 
    new perks("bTier", "We're Gonna Live Forever"), 
    new perks("fTier", "No Mither"), 
    new perks("cTier", "Wake Up!"), 
    new perks("cTier", "Pharmacy"), 
    new perks("bTier", "Vigil"), 
    new perks("cTier", "Tenacity"), 
    new perks("cTier", "Detective's Hunch"), 
    new perks("cTier", "Stake Out"), 
    new perks("bTier", "Dance with Me"), 
    new perks("bTier", "Windows of Opportunity"), 
    new perks("dTier", "Boil Over"), 
    new perks("cTier", "Diversion"), 
    new perks("aTier", "Deliverance"), 
    new perks("cTier", "Autodidact"), 
    new perks("bTier", "Breakdown"), 
    new perks("cTier", "Aftercare"), 
    new perks("cTier", "Distortion"), 
    new perks("cTier", "Solidarity"), 
    new perks("dTier", "Poised"), 
    new perks("bTier", "Head On"), 
    new perks("cTier", "Flip-Flop"), 
    new perks("dTier", "Buckle Up"), 
    new perks("bTier", "Mettle of Man"), 
    new perks("bTier", "Lucky Break"), 
    new perks("bTier", "Any Means Necessary"), 
    new perks("cTier", "Breakout"), 
    new perks("dTier", "Red Herring"), 
    new perks("cTier", "Off the Record"), 
    new perks("bTier", "For the People"), 
    new perks("bTier", "Soul Guard"), 
    new perks("bTier", "Blood Pact"), 
    new perks("bTier", "Repressed Alliance"), 
    new perks("cTier", "Visionary"), 
    new perks("bTier", "Desperate Measures"), 
    new perks("bTier", "Built to Last"), 
    new perks("cTier", "Appraisal"), 
    new perks("cTier", "Deception"), 
    new perks("cTier", "Power Struggle"), 
    new perks("bTier", "Fast Track"), 
    new perks("cTier", "Smash Hit"), 
    new perks("dTier", "Self-Preservation"), 
    new perks("bTier", "Counterforce"), 
    new perks("bTier", "Resurgence"), 
    new perks("bTier", "Blast Mine"), 
    new perks("bTier", "Bite the Bullet"), 
    new perks("bTier", "Flashbang"), 
    new perks("dTier", "Rookie Spirit"), 
    new perks("cTier", "Clairvoyance"), 
    new perks("aTier", "Boon: Circle of Healing"), 
    new perks("bTier", "Boon: Shadow Step"), 
    new perks("aTier", "Overcome"), 
    new perks("dTier", "Corrective Action"), 
    new perks("aTier", "Boon: Exponential")
];
let perkListBP = [
    new perks("dTier", "No One Left Behind"), 
    new perks("bTier", "Prove Thyself"), 
    new perks("bTier", "We're Gonna Live Forever")
];
let perkListEXH = [
    new perks("aTier", "Sprint Burst"), 
    new perks("aTier", "Adrenaline"), 
    new perks("bTier", "Balanced Landing"), 
    new perks("aTier", "Lithe"), 
    new perks("sTier", "Dead Hard"), 
    new perks("bTier", "Head On"), 
    new perks("cTier", "Smash Hit"), 
    new perks("aTier", "Overcome")
];
let perkListAura = [
    new perks("cTier", "Dark Sense"), 
    new perks("cTier", "Deja Vu"), 
    new perks("cTier", "Guardian"), 
    new perks("bTier", "Kindred"), 
    new perks("cTier", "Plunderer's Instinct"), 
    new perks("cTier", "Situational Awareness"), 
    new perks("bTier", "Bond"), 
    new perks("bTier", "Empathy"), 
    new perks("bTier", "Saboteur"), 
    new perks("cTier", "Left Behind"), 
    new perks("cTier", "Object of Obsession"),     
    new perks("cTier", "Ace in the Hole"), 
    new perks("bTier", "Alert"), 
    new perks("cTier", "Wake Up!"), 
    new perks("cTier", "Detective's Hunch"), 
    new perks("bTier", "Windows of Opportunity"), 
    new perks("bTier", "Breakdown"), 
    new perks("cTier", "Aftercare"), 
    new perks("dTier", "Buckle Up"), 
    new perks("bTier", "Any Means Necessary"), 
    new perks("dTier", "Red Herring"), 
    new perks("bTier", "Blood Pact"), 
    new perks("bTier", "Repressed Alliance"), 
    new perks("cTier", "Visionary"), 
    new perks("bTier", "Counterforce"), 
    new perks("bTier", "Blast Mine"), 
    new perks("dTier", "Rookie Spirit"), 
    new perks("cTier", "Clairvoyance")
];
let perkListBoon = [
    new perks("aTier", "Boon: Circle of Healing"), 
    new perks("bTier", "Boon: Shadow Step"),     
    new perks("aTier", "Boon: Exponential")
];
let perkListEDR = [
    new perks("sTier", "Borrowed Time"), 
    new perks("bTier", "Mettle of Man"),     
    new perks("bTier", "Soul Guard")
];
let perkListHST = [
    new perks("cTier", "Guardian"), 
    new perks("bTier", "Hope"),     
    new perks("bTier", "Self-Aware"), 
    new perks("cTier", "Urban Evasion"), 
    new perks("cTier", "Breakout"), 
    new perks("bTier", "Blood Pact")
];
let perkListGen = [
    new perks("aTier", "Resilience"), 
    new perks("aTier", "Spine Chill"),     
    new perks("bTier", "Prove Thyself"), 
    new perks("cTier", "Object of Obsession"), 
    new perks("cTier", "Stake Out"), 
    new perks("bTier", "Fast Track")
];
let perkListHeal = [
    new perks("aTier", "Resilience"), 
    new perks("aTier", "Spine Chill"),     
    new perks("aTier", "We'll Make It"), 
    new perks("bTier", "Botany Knowledge"), 
    new perks("cTier", "Object of Obsession"), 
    new perks("bTier", "We're Gonna Live Forever"),     
    new perks("cTier", "Stake Out"), 
    new perks("cTier", "Autodidact"), 
    new perks("bTier", "For the People"), 
    new perks("bTier", "Desperate Measures"),     
    new perks("aTier", "Boon: Circle of Healing")
];
let perkListSFHL = [
    new perks("bTier", "Inner Healing"), 
    new perks("bTier", "Renewal"),     
    new perks("aTier", "Resilience"), 
    new perks("aTier", "Spine Chill"), 
    new perks("aTier", "Adrenaline"), 
    new perks("bTier", "Botany Knowledge"),     
    new perks("cTier", "Self-Care"), 
    new perks("cTier", "Object of Obsession"), 
    new perks("cTier", "Stake Out"), 
    new perks("bTier", "Desperate Measures"),     
    new perks("aTier", "Boon: Circle of Healing")
];
let perkListSCT = [
    new perks("cTier", "Guardian"), 
    new perks("dTier", "Lightweight"),     
    new perks("bTier", "Self-Aware"), 
    new perks("bTier", "Dance With Me"), 
    new perks("cTier", "Diversion"), 
    new perks("cTier", "Distortion"),     
    new perks("dTier", "Poised"), 
    new perks("bTier", "Lucky Break"), 
    new perks("cTier", "Deception"), 
    new perks("dTier", "Self-Preservation"),     
    new perks("bTier", "Boon: Shadow Step")
];
let perkListOBS = [
    new perks("dTier", "Sole Survivor"), 
    new perks("cTier", "Object of Obsession"),     
    new perks("sTier", "Decisive Strike"), 
    new perks("bTier", "Mettle of Man"), 
    new perks("bTier", "For the People"), 
    new perks("bTier", "Blood Pact")
];
let perkListCST = [
    new perks("cTier", "Plunderer's Instinct"), 
    new perks("cTier", "Ace in the Hole"),     
    new perks("cTier", "Pharmacy"), 
    new perks("cTier", "Appraisal")
];
let perkListSUP = [
    new perks("bTier", "Prove Thyself"), 
    new perks("cTier", "Leader"),     
    new perks("bTier", "Streetwise"), 
    new perks("dTier", "Up the Ante"), 
    new perks("cTier", "Open-Handed"), 
    new perks("bTier", "Vigil"),     
    new perks("cTier", "Aftercare"), 
    new perks("cTier", "Breakout"), 
    new perks("bTier", "Blood Pact"), 
    new perks("dTier", "Corrective Action")
];
let perkListSHK = [
    new perks("aTier", "Kinship"), 
    new perks("bTier", "Kindred"), 
    new perks("bTier", "Renewal"), 
    new perks("cTier", "Slippery Meat"), 
    new perks("cTier", "Leader"), 
    new perks("sTier", "Decisive Strike"), 
    new perks("dTier", "Up the Ante"),     
    new perks("aTier", "Deliverance"), 
    new perks("bTier", "Breakdown"), 
    new perks("cTier", "Off the Record"), 
    new perks("bTier", "Resurgence")
];
let perkListAHK = [
    new perks("cTier", "Guardian"), 
    new perks("bTier", "Kindred"), 
    new perks("dTier", "No One Left Behind"),     
    new perks("aTier", "Resilience"), 
    new perks("aTier", "Spine Chill"), 
    new perks("aTier", "We'll Make It"), 
    new perks("sTier", "Borrowed Time"),     
    new perks("bTier", "Desperate Measures")
];
let perkListSCK = [
    new perks("aTier", "Spine Chill"), 
    new perks("dTier", "This is Not Happening"),     
    new perks("cTier", "Technician"), 
    new perks("cTier", "Stake Out"), 
    new perks("cTier", "Autodidact"), 
    new perks("bTier", "Fast Track"),     
    new perks("dTier", "Corrective Action")
];

//Getting the button ids
let randPerkAll = document.getElementById("randPerkAll");
let randPerkBP = document.getElementById("randPerkBP");
let randPerkEXH = document.getElementById("randPerkEXH");
let randPerkAura = document.getElementById("randPerkAura");
let randPerkBoon = document.getElementById("randPerkBoon");
let randPerkEDR = document.getElementById("randPerkEDR");
let randPerkHST = document.getElementById("randPerkHST");
let randPerkGen = document.getElementById("randPerkGen");
let randPerkHeal = document.getElementById("randPerkHeal");
let randPerkSFHL = document.getElementById("randPerkSFHL");
let randPerkSCT = document.getElementById("randPerkSCT");
let randPerkOBS = document.getElementById("randPerkOBS");
let randPerkCST = document.getElementById("randPerkCST");
let randPerkSUP = document.getElementById("randPerkSUP");
let randPerkSHK = document.getElementById("randPerkSHK");
let randPerkAHK = document.getElementById("randPerkAHK");
let randPerkSCK = document.getElementById("randPerkSCK");
//Where the randomized perks show up, in a table
let targetTable = document.getElementById("targetTable");
//Array of randomized perks showing its tier and name, intended max of 4
let shownPerksArray = [
    new perks("dTier", "Press a button to randomize 1 perk"), 
    new perks("dTier", "Press a button to randomize 1 perk"), 
    new perks("dTier", "Press a button to randomize 1 perk"), 
    new perks("dTier", "Press a button to randomize 1 perk")
];

let underratedRandPerk = document.getElementById("underratedRandPerk");
let targetRow = document.getElementById("targetRow");

//Each event listener is for the randomization event of a different button; a different category
randPerkAll.addEventListener("click", function(){
    //This entire portion should be mostly the same for each event listener
    let r = Math.floor(Math.random()*perkListAll.length);
    console.log(r);
    if(perkListAll[r].perkName == shownPerksArray[0].perkName || 
        perkListAll[r].perkName == shownPerksArray[1].perkName || 
        perkListAll[r].perkName == shownPerksArray[2].perkName || 
        perkListAll[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListAll[r].tier, perkListAll[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});

randPerkBP.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListBP.length);
    console.log(r);
    if(perkListBP[r].perkName == shownPerksArray[0].perkName || 
        perkListBP[r].perkName == shownPerksArray[1].perkName || 
        perkListBP[r].perkName == shownPerksArray[2].perkName || 
        perkListBP[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListBP[r].tier, perkListBP[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkEXH.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListEXH.length);
    console.log(r);
    if(perkListEXH[r].perkName == shownPerksArray[0].perkName || 
        perkListEXH[r].perkName == shownPerksArray[1].perkName || 
        perkListEXH[r].perkName == shownPerksArray[2].perkName || 
        perkListEXH[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListEXH[r].tier, perkListEXH[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkAura.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListAura.length);
    console.log(r);
    if(perkListAura[r].perkName == shownPerksArray[0].perkName || 
        perkListAura[r].perkName == shownPerksArray[1].perkName || 
        perkListAura[r].perkName == shownPerksArray[2].perkName || 
        perkListAura[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListAura[r].tier, perkListAura[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkBoon.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListBoon.length);
    console.log(r);
    if(perkListBoon[r].perkName == shownPerksArray[0].perkName || 
        perkListBoon[r].perkName == shownPerksArray[1].perkName || 
        perkListBoon[r].perkName == shownPerksArray[2].perkName || 
        perkListBoon[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListBoon[r].tier, perkListBoon[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkEDR.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListEDR.length);
    console.log(r);
    if(perkListEDR[r].perkName == shownPerksArray[0].perkName || 
        perkListEDR[r].perkName == shownPerksArray[1].perkName || 
        perkListEDR[r].perkName == shownPerksArray[2].perkName || 
        perkListEDR[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListEDR[r].tier, perkListEDR[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkHST.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListHST.length);
    console.log(r);
    if(perkListHST[r].perkName == shownPerksArray[0].perkName || 
        perkListHST[r].perkName == shownPerksArray[1].perkName || 
        perkListHST[r].perkName == shownPerksArray[2].perkName || 
        perkListHST[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListHST[r].tier, perkListHST[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkGen.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListGen.length);
    console.log(r);
    if(perkListGen[r].perkName == shownPerksArray[0].perkName || 
        perkListGen[r].perkName == shownPerksArray[1].perkName || 
        perkListGen[r].perkName == shownPerksArray[2].perkName || 
        perkListGen[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListGen[r].tier, perkListGen[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkHeal.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListHeal.length);
    console.log(r);
    if(perkListHeal[r].perkName == shownPerksArray[0].perkName || 
        perkListHeal[r].perkName == shownPerksArray[1].perkName || 
        perkListHeal[r].perkName == shownPerksArray[2].perkName || 
        perkListHeal[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListHeal[r].tier, perkListHeal[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkSFHL.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListSFHL.length);
    console.log(r);
    if(perkListSFHL[r].perkName == shownPerksArray[0].perkName || 
        perkListSFHL[r].perkName == shownPerksArray[1].perkName || 
        perkListSFHL[r].perkName == shownPerksArray[2].perkName || 
        perkListSFHL[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListSFHL[r].tier, perkListSFHL[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkSCT.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListSCT.length);
    console.log(r);
    if(perkListSCT[r].perkName == shownPerksArray[0].perkName || 
        perkListSCT[r].perkName == shownPerksArray[1].perkName || 
        perkListSCT[r].perkName == shownPerksArray[2].perkName || 
        perkListSCT[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListSCT[r].tier, perkListSCT[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkOBS.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListOBS.length);
    console.log(r);
    if(perkListOBS[r].perkName == shownPerksArray[0].perkName || 
        perkListOBS[r].perkName == shownPerksArray[1].perkName || 
        perkListOBS[r].perkName == shownPerksArray[2].perkName || 
        perkListOBS[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListOBS[r].tier, perkListOBS[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkCST.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListCST.length);
    console.log(r);
    if(perkListCST[r].perkName == shownPerksArray[0].perkName || 
        perkListCST[r].perkName == shownPerksArray[1].perkName || 
        perkListCST[r].perkName == shownPerksArray[2].perkName || 
        perkListCST[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListCST[r].tier, perkListCST[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkSUP.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListSUP.length);
    console.log(r);
    if(perkListSUP[r].perkName == shownPerksArray[0].perkName || 
        perkListSUP[r].perkName == shownPerksArray[1].perkName || 
        perkListSUP[r].perkName == shownPerksArray[2].perkName || 
        perkListSUP[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListSUP[r].tier, perkListSUP[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkSHK.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListSHK.length);
    console.log(r);
    if(perkListSHK[r].perkName == shownPerksArray[0].perkName || 
        perkListSHK[r].perkName == shownPerksArray[1].perkName || 
        perkListSHK[r].perkName == shownPerksArray[2].perkName || 
        perkListSHK[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListSHK[r].tier, perkListSHK[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkAHK.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListAHK.length);
    console.log(r);
    if(perkListAHK[r].perkName == shownPerksArray[0].perkName || 
        perkListAHK[r].perkName == shownPerksArray[1].perkName || 
        perkListAHK[r].perkName == shownPerksArray[2].perkName || 
        perkListAHK[r].perkName == shownPerksArray[3].perkName){
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListAHK[r].tier, perkListAHK[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});
randPerkSCK.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListSCK.length);
    console.log(r);
    if(perkListSCK[r].perkName == shownPerksArray[0].perkName || 
        perkListSCK[r].perkName == shownPerksArray[1].perkName || 
        perkListSCK[r].perkName == shownPerksArray[2].perkName || 
        perkListSCK[r].perkName == shownPerksArray[3].perkName){
    
    }
    else{
        shownPerksArray.shift(shownPerksArray[0]);
        shownPerksArray.push(new perks(perkListSCK[r].tier, perkListSCK[r].perkName));
        targetTable.innerHTML = 
            `<tr>
                <td class="${shownPerksArray[0].tier}">${shownPerksArray[0].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[1].tier}">${shownPerksArray[1].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[2].tier}">${shownPerksArray[2].perkName}</td>
            </tr>
            <tr>
                <td class="${shownPerksArray[3].tier}">${shownPerksArray[3].perkName}</td>
            </tr>`;
    }
    console.log(shownPerksArray);
});

underratedRandPerk.addEventListener("click", function(){
    let r = Math.floor(Math.random()*perkListAll.length);
    targetRow.innerHTML = 
    `<td class="${perkListAll[r].tier}">${perkListAll[r].perkName}</td>`
    if(perkListAll[r].tier == "sTier"){
        targetRow.innerHTML += "<td>*Yawn* Randomize again if you've got balls, please.</td>";
    }
    else if(perkListAll[r].tier == "aTier"){
        targetRow.innerHTML += "<td>Eh. You probably use this perk every once in a while. Maybe try to incorporate it into your normal build to spice your gameplay up?</td>";
    }
    else if(perkListAll[r].tier == "bTier"){
        targetRow.innerHTML += "<td>Shouldn't be too hard. The most you'll need is an item and another perk.</td>";
    }
    else if(perkListAll[r].tier == "cTier"){
        targetRow.innerHTML += "<td>A bit hard, a bit spicy. You'll probably need one to two other perks, an item, a friend on comms and/or an offering or two.</td>";
    }
    else if(perkListAll[r].tier == "dTier"){
        targetRow.innerHTML += "<td>You got a useless perk. If not, you'll likely need a full perk build with an item, a full SWF, and offerings.</td>";
    }
    else{
        targetRow.innerHTML += "<td>L. Put simply, you're f@#%ed. You'll need every bit of help you can get and some good luck. Risk it for the Biscuit.</td>";
    }
});
}