const STATRROLLD6 = [1, 2, 3, 4, 5, 6];
let functionOutput1 = document.querySelector("#function-read1")
let functionOutput2 = document.querySelector("#function-read2")
let functionOutput3 = document.querySelector("#function-read3")
let functionOutput4 = document.querySelector("#function-read4")
let functionOutput5 = document.querySelector("#function-read5")
let functionOutput6 = document.querySelector("#function-read6")


function rollStats(x) {
    //Controls user-requested iterations
    for (let i = 1; i <= x; i++) {
        var statList = [];

        //Finds and remove lowest value, add remaining values, and push up
        for (let s = 1; s <= 6; s++) {
            rawRolls = []

            //Rolls 4D6
            for (let r = 1; r <= 4; r++) {
                randomIndex = Math.floor(Math.random() * STATRROLLD6.length); //Solution from: https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
                diceRoll = STATRROLLD6[randomIndex];
                rawRolls.push(diceRoll);
            }

            rawRolls.sort();
            rawRolls.shift();
            var endStat = 0;

            //Adds all remaining items in rawRolls to endStat
            for (let q = 0 ; q <= 2 ; q++) {
                endStat += rawRolls[q];
            }

            statList.push(endStat);
        }
        console.log(statList);
        functionOutput1.innerHTML = statList[0];
        functionOutput2.innerHTML = statList[1];
        functionOutput3.innerHTML = statList[2];
        functionOutput4.innerHTML = statList[3];
        functionOutput5.innerHTML = statList[4];
        functionOutput6.innerHTML = statList[5];
    }
};