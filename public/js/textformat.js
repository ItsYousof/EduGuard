function countSyllables(word) {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    const syllableRegex = /[aeiouy]{1,2}/g;
    const syllables = word.match(syllableRegex);
    return syllables ? syllables.length : 1;
}

function calculateReadability(text) {
    const sentences = text.split(/\.|\!|\?/).filter(Boolean).length;
    const words = text.split(/\s+/).filter(Boolean).length;
    const syllables = text.split(/\s+/).reduce((sum, word) => sum + countSyllables(word), 0);

    if (sentences === 0 || words === 0) return { gradeLevel: 0, words: 0 };

    const gradeLevel = (0.39 * (words / sentences)) + (11.8 * (syllables / words)) - 15.59;
    return { gradeLevel, words };
}

function checkReadability() {
    const textarea = document.getElementById('reading_level_text');
    const text = textarea.value;
    const result = calculateReadability(text);

    const gradeLevel = result.gradeLevel;
    const wordCount = result.words;

    let resultText;
    if (gradeLevel <= 1) resultText = 'Kindergarten';
    else if (gradeLevel <= 2) resultText = '1st Grade';
    else if (gradeLevel <= 3) resultText = '2nd Grade';
    else if (gradeLevel <= 4) resultText = '3rd Grade';
    else if (gradeLevel <= 5) resultText = '4th Grade';
    else if (gradeLevel <= 6) resultText = '5th Grade';
    else if (gradeLevel <= 7) resultText = '6th Grade';
    else if (gradeLevel <= 8) resultText = '7th Grade';
    else if (gradeLevel <= 9) resultText = '8th Grade';
    else if (gradeLevel <= 10) resultText = '9th Grade';
    else if (gradeLevel <= 11) resultText = '10th Grade';
    else if (gradeLevel <= 12) resultText = '11th Grade';
    else resultText = 'College Level';


    document.getElementById('reading_level_h3').innerText = `Reading Level: ${gradeLevel.toFixed(2)} (${resultText})`;
    document.getElementById('word_count').innerText = `Words: ${wordCount}`;

    fixText();
}

async function fixText() {
    const originalText = document.getElementById('reading_level_text').value;

    const response = await fetch('https://api.languagetool.org/v2/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            text: originalText,
            language: 'en-US',
        }),
    });

    const result = await response.json();

    // Process the result and apply fixes to the original text
    let fixedText = originalText;
    // Here you can implement a more sophisticated fix logic if desired
    if (result.matches.length > 0) {
        // Example: Replace the original text with the suggestion from the first match
        fixedText = result.matches.map(match => match.replacements.map(rep => rep.value).join(', ')).join('\n');
    }

    document.getElementById('corrected_text').value = fixedText;
}