function signalFilter(freqs, freqArr){
    let count  = 0;

    let freqLow = freqArr[0][0];
    let freqHigh = freqArr[0][1];

    for(let i = 1; i < freqArr.length; i ++){
        let tempFreqLow = freqArr[i][0];
        let tempFreqHigh = freqArr[i][1];

        if(tempFreqLow >= freqLow){
            freqLow = tempFreqLow;
        }

         if(tempFreqHigh >= freqHigh){
            freqHigh = tempFreqHigh;
        }
    }

    for (let j = 0; j < freqs.length; j ++){
        if(freqs[j] >= freqLow && freqs[j] <= freqHigh){
            count += 1
        }
    }

    return count;

}