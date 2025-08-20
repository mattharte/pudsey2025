// IMPORTANT: Paste the content of your CSV file here.
// Make sure it's a plain string.
const csvContent = `Subject 1,Subject 2,Subject 3
Art,Biology,Business
Art,Biology,Chemistry
Art,Biology,English Lang
Art,Biology,English Lit
Art,Biology,Geography
Art,Biology,History
Art,Biology,Maths
Art,Biology,Media
Art,Biology,Philosophy
Art,Biology,Physics
Art,Biology,Politics
Art,Biology,Psychology
Art,Biology,RS
Art,Biology,Sociology
Art,Business,Chemistry
Art,Business,English Lang
Art,Business,English Lit
Art,Business,Geography
Art,Business,History
Art,Business,Maths
Art,Business,Media
Art,Business,Philosophy
Art,Business,Physics
Art,Business,Politics
Art,Business,Psychology
Art,Business,RS
Art,Business,Sociology
Art,Chemistry,English Lang
Art,Chemistry,English Lit
Art,Chemistry,Geography
Art,Chemistry,History
Art,Chemistry,Maths
Art,Chemistry,Media
Art,Chemistry,Philosophy
Art,Chemistry,Physics
Art,Chemistry,Politics
Art,Chemistry,Psychology
Art,Chemistry,RS
Art,Chemistry,Sociology
Art,English Lang,English Lit
Art,English Lang,Geography
Art,English Lang,History
Art,English Lang,Maths
Art,English Lang,Media
Art,English Lang,Philosophy
Art,English Lang,Physics
Art,English Lang,Politics
Art,English Lang,Psychology
Art,English Lang,RS
Art,English Lang,Sociology
Art,English Lit,Geography
Art,English Lit,History
Art,English Lit,Maths
Art,English Lit,Media
Art,English Lit,Philosophy
Art,English Lit,Physics
Art,English Lit,Politics
Art,English Lit,Psychology
Art,English Lit,RS
Art,English Lit,Sociology
Art,Geography,History
Art,Geography,Maths
Art,Geography,Media
Art,Geography,Philosophy
Art,Geography,Physics
Art,Geography,Politics
Art,Geography,Psychology
Art,Geography,RS
Art,Geography,Sociology
Art,History,Maths
Art,History,Media
Art,History,Philosophy
Art,History,Physics
Art,History,Politics
Art,History,Psychology
Art,History,RS
Art,History,Sociology
Art,Maths,Media
Art,Maths,Philosophy
Art,Maths,Physics
Art,Maths,Politics
Art,Maths,Psychology
Art,Maths,RS
Art,Maths,Sociology
Art,Media,Philosophy
Art,Media,Physics
Art,Media,Psychology
Art,Media,RS
Art,Media,Sociology
Art,Philosophy,Physics
Art,Philosophy,Politics
Art,Philosophy,Psychology
Art,Philosophy,Sociology
Art,Physics,Politics
Art,Physics,Psychology
Art,Physics,RS
Art,Physics,Sociology
Art,Politics,Psychology
Art,Politics,RS
Art,Politics,Sociology
Art,Psychology,RS
Art,Psychology,Sociology
Art,RS,Sociology
Biology,Business,Chemistry
Biology,Business,English Lang
Biology,Business,English Lit
Biology,Business,Geography
Biology,Business,History
Biology,Business,Maths
Biology,Business,Media
Biology,Business,Philosophy
Biology,Business,Physics
Biology,Business,Politics
Biology,Business,Psychology
Biology,Business,RS
Biology,Business,Sociology
Biology,Chemistry,English Lang
Biology,Chemistry,English Lit
Biology,Chemistry,Geography
Biology,Chemistry,History
Biology,Chemistry,Maths
Biology,Chemistry,Media
Biology,Chemistry,Philosophy
Biology,Chemistry,Physics
Biology,Chemistry,Politics
Biology,Chemistry,Psychology
Biology,Chemistry,RS
Biology,Chemistry,Sociology
Biology,English Lang,English Lit
Biology,English Lang,Geography
Biology,English Lang,History
Biology,English Lang,Maths
Biology,English Lang,Media
Biology,English Lang,Philosophy
Biology,English Lang,Physics
Biology,English Lang,Politics
Biology,English Lang,Psychology
Biology,English Lang,RS
Biology,English Lang,Sociology
Biology,English Lit,Geography
Biology,English Lit,History
Biology,English Lit,Maths
Biology,English Lit,Media
Biology,English Lit,Philosophy
Biology,English Lit,Physics
Biology,English Lit,Politics
Biology,English Lit,Psychology
Biology,English Lit,RS
Biology,English Lit,Sociology
Biology,Geography,History
Biology,Geography,Maths
Biology,Geography,Media
Biology,Geography,Philosophy
Biology,Geography,Physics
Biology,Geography,Politics
Biology,Geography,Psychology
Biology,Geography,RS
Biology,Geography,Sociology
Biology,History,Maths
Biology,History,Media
Biology,History,Philosophy
Biology,History,Physics
Biology,History,Politics
Biology,History,Psychology
Biology,History,RS
Biology,History,Sociology
Biology,Maths,Media
Biology,Maths,Philosophy
Biology,Maths,Physics
Biology,Maths,Politics
Biology,Maths,Psychology
Biology,Maths,RS
Biology,Maths,Sociology
Biology,Media,Philosophy
Biology,Media,Physics
Biology,Media,Psychology
Biology,Media,RS
Biology,Media,Sociology
Biology,Philosophy,Physics
Biology,Philosophy,Politics
Biology,Philosophy,Psychology
Biology,Philosophy,RS
Biology,Philosophy,Sociology
Biology,Physics,Politics
Biology,Physics,Psychology
Biology,Physics,RS
Biology,Physics,Sociology
Biology,Politics,Psychology
Biology,Politics,RS
Biology,Politics,Sociology
Biology,Psychology,RS
Biology,Psychology,Sociology
Biology,RS,Sociology
Business,Chemistry,English Lang
Business,Chemistry,English Lit
Business,Chemistry,Geography
Business,Chemistry,History
Business,Chemistry,Maths
Business,Chemistry,Media
Business,Chemistry,Philosophy
Business,Chemistry,Physics
Business,Chemistry,Politics
Business,Chemistry,Psychology
Business,Chemistry,RS
Business,Chemistry,Sociology
Business,English Lang,English Lit
Business,English Lang,Geography
Business,English Lang,History
Business,English Lang,Maths
Business,English Lang,Media
Business,English Lang,Philosophy
Business,English Lang,Physics
Business,English Lang,Politics
Business,English Lang,Psychology
Business,English Lang,RS
Business,English Lang,Sociology
Business,English Lit,Geography
Business,English Lit,History
Business,English Lit,Maths
Business,English Lit,Media
Business,English Lit,Philosophy
Business,English Lit,Physics
Business,English Lit,Politics
Business,English Lit,Psychology
Business,English Lit,RS
Business,English Lit,Sociology
Business,Geography,History
Business,Geography,Maths
Business,Geography,Media
Business,Geography,Philosophy
Business,Geography,Physics
Business,Geography,Politics
Business,Geography,Psychology
Business,Geography,RS
Business,Geography,Sociology
Business,History,Maths
Business,History,Media
Business,History,Philosophy
Business,History,Physics
Business,History,Politics
Business,History,Psychology
Business,History,RS
Business,History,Sociology
Business,Maths,Media
Business,Maths,Philosophy
Business,Maths,Physics
Business,Maths,Politics
Business,Maths,Psychology
Business,Maths,RS
Business,Maths,Sociology
Business,Media,Philosophy
Business,Media,Physics
Business,Media,Psychology
Business,Media,Sociology
Business,Philosophy,Physics
Business,Philosophy,Politics
Business,Philosophy,Psychology
Business,Philosophy,RS
Business,Philosophy,Sociology
Business,Physics,Politics
Business,Physics,Psychology
Business,Physics,RS
Business,Physics,Sociology
Business,Politics,Psychology
Business,Politics,Sociology
Business,Psychology,RS
Business,Psychology,Sociology
Business,RS,Sociology
Chemistry,English Lang,English Lit
Chemistry,English Lang,Geography
Chemistry,English Lang,Maths
Chemistry,English Lang,Philosophy
Chemistry,English Lang,Physics
Chemistry,English Lang,Psychology
Chemistry,English Lang,RS
Chemistry,English Lang,Sociology
Chemistry,English Lit,Geography
Chemistry,English Lit,History
Chemistry,English Lit,Maths
Chemistry,English Lit,Media
Chemistry,English Lit,Philosophy
Chemistry,English Lit,Physics
Chemistry,English Lit,Politics
Chemistry,English Lit,Psychology
Chemistry,English Lit,RS
Chemistry,English Lit,Sociology
Chemistry,Geography,History
Chemistry,Geography,Maths
Chemistry,Geography,Media
Chemistry,Geography,Philosophy
Chemistry,Geography,Physics
Chemistry,Geography,Politics
Chemistry,Geography,Psychology
Chemistry,Geography,RS
Chemistry,Geography,Sociology
Chemistry,History,Maths
Chemistry,History,Philosophy
Chemistry,History,Physics
Chemistry,History,Psychology
Chemistry,History,RS
Chemistry,History,Sociology
Chemistry,Maths,Media
Chemistry,Maths,Philosophy
Chemistry,Maths,Physics
Chemistry,Maths,Politics
Chemistry,Maths,Psychology
Chemistry,Maths,RS
Chemistry,Maths,Sociology
Chemistry,Media,Philosophy
Chemistry,Media,Physics
Chemistry,Media,Psychology
Chemistry,Media,RS
Chemistry,Media,Sociology
Chemistry,Philosophy,Physics
Chemistry,Philosophy,Politics
Chemistry,Philosophy,Psychology
Chemistry,Philosophy,RS
Chemistry,Philosophy,Sociology
Chemistry,Physics,Politics
Chemistry,Physics,Psychology
Chemistry,Physics,RS
Chemistry,Physics,Sociology
Chemistry,Politics,Psychology
Chemistry,Politics,RS
Chemistry,Politics,Sociology
Chemistry,Psychology,RS
Chemistry,Psychology,Sociology
Chemistry,RS,Sociology
English Lang,English Lit,Geography
English Lang,English Lit,History
English Lang,English Lit,Maths
English Lang,English Lit,Media
English Lang,English Lit,Philosophy
English Lang,English Lit,Physics
English Lang,English Lit,Politics
English Lang,English Lit,Psychology
English Lang,English Lit,RS
English Lang,English Lit,Sociology
English Lang,Geography,History
English Lang,Geography,Maths
English Lang,Geography,Media
English Lang,Geography,Philosophy
English Lang,Geography,Physics
English Lang,Geography,Politics
English Lang,Geography,Psychology
English Lang,Geography,RS
English Lang,Geography,Sociology
English Lang,History,Maths
English Lang,History,Philosophy
English Lang,History,Physics
English Lang,History,Psychology
English Lang,History,RS
English Lang,History,Sociology
English Lang,Maths,Media
English Lang,Maths,Philosophy
English Lang,Maths,Physics
English Lang,Maths,Politics
English Lang,Maths,Psychology
English Lang,Maths,RS
English Lang,Maths,Sociology
English Lang,Media,Philosophy
English Lang,Media,Physics
English Lang,Media,Psychology
English Lang,Media,RS
English Lang,Media,Sociology
English Lang,Philosophy,Physics
English Lang,Philosophy,Politics
English Lang,Philosophy,Psychology
English Lang,Philosophy,RS
English Lang,Philosophy,Sociology
English Lang,Physics,Politics
English Lang,Physics,Psychology
English Lang,Physics,RS
English Lang,Physics,Sociology
English Lang,Politics,Psychology
English Lang,Politics,RS
English Lang,Politics,Sociology
English Lang,Psychology,RS
English Lang,Psychology,Sociology
English Lang,RS,Sociology
English Lit,Geography,History
English Lit,Geography,Maths
English Lit,Geography,Media
English Lit,Geography,Philosophy
English Lit,Geography,Physics
English Lit,Geography,Politics
English Lit,Geography,Psychology
English Lit,Geography,RS
English Lit,Geography,Sociology
English Lit,History,Maths
English Lit,History,Media
English Lit,History,Philosophy
English Lit,History,Physics
English Lit,History,Politics
English Lit,History,Psychology
English Lit,History,RS
English Lit,History,Sociology
English Lit,Maths,Media
English Lit,Maths,Philosophy
English Lit,Maths,Physics
English Lit,Maths,Politics
English Lit,Maths,Psychology
English Lit,Maths,RS
English Lit,Maths,Sociology
English Lit,Media,Philosophy
English Lit,Media,Physics
English Lit,Media,Psychology
English Lit,Media,RS
English Lit,Media,Sociology
English Lit,Philosophy,Physics
English Lit,Philosophy,Politics
English Lit,Philosophy,Psychology
English Lit,Philosophy,RS
English Lit,Philosophy,Sociology
English Lit,Physics,Politics
English Lit,Physics,Psychology
English Lit,Physics,RS
English Lit,Physics,Sociology
English Lit,Politics,Psychology
English Lit,Politics,RS
English Lit,Politics,Sociology
English Lit,Psychology,RS
English Lit,Psychology,Sociology
English Lit,RS,Sociology
Geography,History,Maths
Geography,History,Media
Geography,History,Philosophy
Geography,History,Physics
Geography,History,Politics
Geography,History,Psychology
Geography,History,RS
Geography,History,Sociology
Geography,Maths,Media
Geography,Maths,Philosophy
Geography,Maths,Physics
Geography,Maths,Politics
Geography,Maths,Psychology
Geography,Maths,RS
Geography,Maths,Sociology
Geography,Media,Philosophy
Geography,Media,Physics
Geography,Media,Psychology
Geography,Media,RS
Geography,Media,Sociology
Geography,Philosophy,Physics
Geography,Philosophy,Politics
Geography,Philosophy,Psychology
Geography,Philosophy,RS
Geography,Philosophy,Sociology
Geography,Physics,Politics
Geography,Physics,Psychology
Geography,Physics,RS
Geography,Physics,Sociology
Geography,Politics,Psychology
Geography,Politics,RS
Geography,Politics,Sociology
Geography,Psychology,RS
Geography,Psychology,Sociology
Geography,RS,Sociology
History,Maths,Media
History,Maths,Philosophy
History,Maths,Physics
History,Maths,Politics
History,Maths,Psychology
History,Maths,RS
History,Maths,Sociology
History,Media,Philosophy
History,Media,Physics
History,Media,Psychology
History,Media,RS
History,Media,Sociology
History,Philosophy,Physics
History,Philosophy,Politics
History,Philosophy,Psychology
History,Philosophy,RS
History,Philosophy,Sociology
History,Physics,Politics
History,Physics,Psychology
History,Physics,Sociology
History,Politics,Psychology
History,Politics,RS
History,Politics,Sociology
History,Psychology,RS
History,Psychology,Sociology
History,RS,Sociology
Maths,Media,Philosophy
Maths,Media,Physics
Maths,Media,Psychology
Maths,Media,RS
Maths,Media,Sociology
Maths,Philosophy,Physics
Maths,Philosophy,Politics
Maths,Philosophy,Psychology
Maths,Philosophy,RS
Maths,Philosophy,Sociology
Maths,Physics,Politics
Maths,Physics,Psychology
Maths,Physics,RS
Maths,Physics,Sociology
Maths,Politics,Psychology
Maths,Politics,RS
Maths,Politics,Sociology
Maths,Psychology,RS
Maths,Psychology,Sociology
Maths,RS,Sociology
Media,Philosophy,Physics
Media,Philosophy,Psychology
Media,Philosophy,RS
Media,Philosophy,Sociology
Media,Physics,Psychology
Media,Physics,RS
Media,Physics,Sociology
Media,Psychology,RS
Media,Psychology,Sociology
Media,RS,Sociology
Philosophy,Physics,Politics
Philosophy,Physics,Psychology
Philosophy,Physics,RS
Philosophy,Physics,Sociology
Philosophy,Politics,Psychology
Philosophy,Politics,RS
Philosophy,Politics,Sociology
Philosophy,Psychology,RS
Philosophy,Psychology,Sociology
Philosophy,RS,Sociology
Physics,Politics,Psychology
Physics,Politics,RS
Physics,Politics,Sociology
Physics,Psychology,RS
Physics,Psychology,Sociology
Physics,RS,Sociology
Politics,Psychology,RS
Politics,Psychology,Sociology
Politics,RS,Sociology
Psychology,RS,Sociology`;

// --- Get HTML Elements ---
const columnASelect = document.getElementById('columnA');
const columnCSelect = document.getElementById('columnC');
const columnESelect = document.getElementById('columnE');

// --- Data Structure to hold parsed CSV data ---
// This will store unique combinations as sorted strings (e.g., "Art,Biology,Business")
let validCombinations = new Set();

/**
 * Parses the CSV content and organizes it into a Set of sorted combination strings.
 * Each combination is treated as a set of three subjects, regardless of original order.
 * @param {string} csvString The raw CSV content as a string.
 */
function parseCSV(csvString) {
    validCombinations = new Set(); // Clear previous data

    if (!csvString || csvString.trim() === 'Subject 1,Subject 2,Subject 3') {
        console.error("CSV content is missing or not properly provided. Please ensure the 'csvContent' variable has your subject data.");
        return;
    }

    const lines = csvString.trim().split('\n');
    if (lines.length <= 1) {
        console.warn("CSV content seems to have no data rows (only header or empty).");
        return;
    }

    // Assuming the first row is the header and we skip it
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue; // Skip empty lines

        const subjects = line.split(',').map(s => s.trim());

        // Ensure we have exactly three subjects for a combination
        if (subjects.length === 3 && subjects.every(s => s !== '')) {
            // Sort the subjects alphabetically to treat combinations as sets
            const sortedSubjects = [...subjects].sort();
            validCombinations.add(sortedSubjects.join(','));
        } else {
            console.warn(`Skipping malformed or incomplete row: "${line}"`);
        }
    }
}

/**
 * Populates a dropdown with options from an array.
 * @param {HTMLSelectElement} selectElement The select element to populate.
 * @param {string[]} optionsArray An array of strings for the option values and text.
 * @param {string} defaultText The text for the initial disabled option.
 */
function populateDropdown(selectElement, optionsArray, defaultText) {
    selectElement.innerHTML = `<option value="" disabled selected>${defaultText}</option>`; // Clear and add default
    optionsArray.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        selectElement.appendChild(option);
    });
}

/**
 * Resets a dropdown to its initial disabled state with a placeholder.
 * @param {HTMLSelectElement} selectElement The select element to reset.
 * @param {string} placeholderText The text for the placeholder option.
 */
function resetDropdown(selectElement, placeholderText) {
    selectElement.innerHTML = `<option value="" disabled selected>${placeholderText}</option>`;
    selectElement.disabled = true;
}

// --- Event Listener for Column A (Subject 1) ---
columnASelect.addEventListener('change', () => {
    const selectedA = columnASelect.value;

    resetDropdown(columnCSelect, '-- Select Subject 2 first --');
    resetDropdown(columnESelect, '-- Select Subject 3 first --');

    if (selectedA) {
        const possibleSubject2s = new Set();
        validCombinations.forEach(comboStr => {
            const comboArr = comboStr.split(',');
            if (comboArr.includes(selectedA)) {
                // Find the two other subjects in this combination
                const otherSubjects = comboArr.filter(s => s !== selectedA);
                if (otherSubjects.length === 2) {
                    // For each of the other two, check if it can be a valid Subject 2
                    // i.e., if (selectedA, otherSubject[0], otherSubject[1]) is a valid combo
                    // This is implicitly handled by `validCombinations` containing the sorted trio.
                    // We just need to ensure that selecting this `otherSubject` allows for a third.

                    // Add both other subjects as potential Subject 2 options
                    possibleSubject2s.add(otherSubjects[0]);
                    possibleSubject2s.add(otherSubjects[1]);
                }
            }
        });

        // Filter out selectedA from possibleSubject2s if it somehow got in (shouldn't with current logic)
        // And ensure that selecting this subject 2 would lead to a valid subject 3
        const finalSubject2Options = Array.from(possibleSubject2s).filter(s2 => {
            // Check if selectedA and s2 can form part of a valid trio
            return Array.from(validCombinations).some(comboStr => {
                const comboArr = comboStr.split(',');
                return comboArr.includes(selectedA) && comboArr.includes(s2) && comboArr.length === 3;
            });
        }).sort();

        if (finalSubject2Options.length > 0) {
            populateDropdown(columnCSelect, finalSubject2Options, '-- Please select --');
            columnCSelect.disabled = false;
        } else {
            resetDropdown(columnCSelect, '-- No options available --');
        }
    }
});

// --- Event Listener for Column C (Subject 2) ---
columnCSelect.addEventListener('change', () => {
    const selectedA = columnASelect.value;
    const selectedC = columnCSelect.value; // This is now Subject 2

    resetDropdown(columnESelect, '-- Select Subject 3 first --');

    if (selectedA && selectedC) {
        const possibleSubject3s = new Set();
        validCombinations.forEach(comboStr => {
            const comboArr = comboStr.split(',');
            // Check if the combination contains both selectedA and selectedC
            if (comboArr.includes(selectedA) && comboArr.includes(selectedC)) {
                // Find the third subject in this combination
                const remainingSubject = comboArr.find(s => s !== selectedA && s !== selectedC);
                if (remainingSubject) {
                    possibleSubject3s.add(remainingSubject);
                }
            }
        });

        const finalSubject3Options = Array.from(possibleSubject3s).sort();

        if (finalSubject3Options.length > 0) {
            populateDropdown(columnESelect, finalSubject3Options, '-- Please select --');
            columnESelect.disabled = false;
        } else {
            resetDropdown(columnESelect, '-- No options available --');
        }
    }
});

// --- Initial Setup ---
function initializeDropdowns() {
    parseCSV(csvContent); // Parse the CSV data

    // Collect all unique subjects for the first dropdown
    const allUniqueSubjects = new Set();
    validCombinations.forEach(comboStr => {
        comboStr.split(',').forEach(subject => allUniqueSubjects.add(subject));
    });

    const columnAOptions = Array.from(allUniqueSubjects).sort();

    if (columnAOptions.length > 0) {
        populateDropdown(columnASelect, columnAOptions, '-- Please select --');
    } else {
        columnASelect.innerHTML = '<option value="" disabled selected>No data available</option>';
        columnASelect.disabled = true;
    }

    resetDropdown(columnCSelect, '-- Select Subject 2 first --');
    resetDropdown(columnESelect, '-- Select Subject 3 first --');
}

// Call the initialization function when the script loads
initializeDropdowns();
