function decisionTree () {

    const a1 = "Office"
    const a2 = null


    if (!(a1 ?? a2)) {
        console.log ('at home');
    } else {
        console.log ('at office');
    }

}

decisionTree ();