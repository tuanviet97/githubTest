
var Task = function () {
    let textInput = ",,,KHU!VUC????????????????HA,,,,,,,,,NOI Troi-Nang nong?khong co.mua;Nhiet?Do.Cao kha banh.khiep.mua?khao";
    console.log("Text : " + textInput)
    let newTextInput = textInput.toLowerCase();
    console.log("-----------------cau A--------------------")
    console.log(newTextInput);
    // let array = newTextInput.split(/[ .,;?!-]/);
    newTextInput = newTextInput.split('');
    sk = ['.', ',', ';', '?', '!', '-', ' '];
    for (let i = 0; i < newTextInput.length; i++) {
        for (let j = 0; j < sk.length; j++) {
            if (newTextInput[i] == sk[j]) {
                newTextInput[i] = ",";
            }
        }
    }

    for (let i = 0; i < newTextInput.length; i++) {
        if(newTextInput[0]==','){
            newTextInput.splice(0,1);
        }
        if (newTextInput[i] == ',') {
            while (newTextInput[i + 1] == ',') {
                newTextInput.splice(i + 1, 1)
            }
        }
    
    }

    console.log(newTextInput);
    let string = "";
    for (let i = 0; i < newTextInput.length; i++) {
        string += newTextInput[i];
    }
    let array = string.split(",");
    console.log("-----------------cau B--------------------")
    console.log(array);
    var newArray = {};
    var count = 0;
    console.log("---------------- cau C---------------------")
    let separatetextInput = textInput.split('');
    specialkey = [];
    for (let i = 0; i < separatetextInput.length; i++) {
        if (!(separatetextInput[i].charCodeAt() > 96 && separatetextInput[i].charCodeAt() < 123 || separatetextInput[i].charCodeAt() > 64 && separatetextInput[i].charCodeAt() < 91)) {
            specialkey.push(separatetextInput[i]);
        }
    }

    array.forEach(element => {
        const key = element.charAt(0);
        if (newArray[key]) {
            newArray[key].push(element);
        } else {
            newArray[key] = [element];
            count++;
        }
    })

    // for (let i = 0; i < array.length; i++) {
    //     const key = array[i].charAt(0);
    //     if (newArray[key]) {
    //         newArray[key].push(array[i]);
    //     } else {
    //         newArray[key] = [array[i]];
    //         count++;
    //     }
    // }
    console.log(newArray);
    var newArrayd = newArray;
    console.log("-----------------cau D--------------------")
    const keys = Object.keys(newArrayd);
    for (let key of keys) {
        if (newArrayd[key].length % 2 != 0) {
            newArrayd[key].sort();
        } else {
            newArrayd[key].sort();
            newArrayd[key].reverse();
        }
    }
    console.log(newArrayd);

    console.log("-----------------cau E--------------------")
    for (let key of keys) {
        newArray[key].sort();
        newArray[key].reverse();
    }
    newArray.speacialKey = specialkey;
    console.log(newArray);
}

Task();
