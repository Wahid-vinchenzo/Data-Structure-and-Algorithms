function mostCommonWord(paragraph, banned) {
    const normalizedParagraph = paragraph
        .toLowerCase()
        .replace(/[\!?',;.\s]+/g, ' ')
        .trim();
    
    const words = normalizedParagraph.split(' ');
    const wordCount = {};
    
    for (const word of words) {
        if (!banned.includes(word)) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    }
    
    let mostFrequent = '';
    let maxCount = 0;
    
    for (const [word, count] of Object.entries(wordCount)) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = word;
        }
    }
    
    return mostFrequent;
}