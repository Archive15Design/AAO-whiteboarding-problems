function isPassing(assessments) {
    const minScore = 70;
    let average = 0;

    for (const entry of assessments){
        average += entry['score'];
    }

    average = average / assessments.length;

    if (average >= minScore) return true;
    else return false;

}
