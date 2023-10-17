function mindPsAndQs(str){
    let maxStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < str.length; i++){
        let char = str[i];

        if (char !== 'P' && char !== 'Q') {
            currentStreak = 0;
            continue;
        };

        currentStreak++;
        if (currentStreak > maxStreak) maxStreak = currentStreak;
    }

    return maxStreak;
}
