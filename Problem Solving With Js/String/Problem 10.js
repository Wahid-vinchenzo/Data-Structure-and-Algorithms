function backspaceCompare(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        let skipS = 0;
        while (i >= 0 && (s[i] === '#' || skipS > 0)) {
            if (s[i] === '#') skipS++;
            else skipS--;
            i--;
        }

        let skipT = 0;
        while (j >= 0 && (t[j] === '#' || skipT > 0)) {
            if (t[j] === '#') skipT++;
            else skipT--;
            j--;
        }

        if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
        if ((i >= 0) !== (j >= 0)) return false; 

        i--;
        j--;
    }

    return true;
}