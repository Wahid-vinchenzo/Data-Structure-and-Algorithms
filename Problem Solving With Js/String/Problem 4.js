function isPalindrome(s) {
    const filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return filtered === filtered.split('').reverse().join('');
}