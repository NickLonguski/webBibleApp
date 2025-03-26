document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('backButton');
    const goButton = document.getElementById('goButton');
    const bibleDropdown = document.getElementById('bibleDropdown');
    const bibleDisplay = document.getElementById('bibleDisplay');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');

    const bookFiles = {
        "Genesis": "Genesis.csv",
        "Exodus": "Exodus.csv",
        "Leviticus": "Leviticus.csv",
        "Numbers": "Numbers.csv",
        "Deuteronomy": "Deuteronomy.csv",
        "Joshua": "Joshua.csv",
        "Judges": "Judges.csv",
        "Ruth": "Ruth.csv",
        "1 Samuel": "1 Samuel.csv",
        "2 Samuel": "2 Samuel.csv",
        "1 Kings": "1 Kings.csv",
        "2 Kings": "2 Kings.csv",
        "1 Chronicles": "1 Chronicles.csv",
        "2 Chronicles": "2 Chronicles.csv",
        "Ezra": "Ezra.csv",
        "Nehemiah": "Nehemiah.csv",
        "Esther": "Esther.csv",
        "Job": "Job.csv",
        "Psalms": "Psalms.csv",
        "Proverbs": "Proverbs.csv",
        "Ecclesiastes": "Ecclesiastes.csv",
        "Song of Solomon": "Song of Solomon.csv",
        "Isaiah": "Isaiah.csv",
        "Jeremiah": "Jeremiah.csv",
        "Lamentations": "Lamentations.csv",
        "Ezekiel": "Ezekiel.csv",
        "Daniel": "Daniel.csv",
        "Hosea": "Hosea.csv",
        "Joel": "Joel.csv",
        "Amos": "Amos.csv",
        "Obadiah": "Obadiah.csv",
        "Jonah": "Jonah.csv",
        "Micah": "Micah.csv",
        "Nahum": "Nahum.csv",
        "Habakkuk": "Habakkuk.csv",
        "Zephaniah": "Zephaniah.csv",
        "Haggai": "Haggai.csv",
        "Zechariah": "Zechariah.csv",
        "Malachi": "Malachi.csv",
        "Matthew": "Matthew.csv",
        "Mark": "Mark.csv",
        "Luke": "Luke.csv",
        "John": "John.csv",
        "Acts": "Acts.csv",
        "Romans": "Romans.csv",
        "1 Corinthians": "1 Corinthians.csv",
        "2 Corinthians": "2 Corinthians.csv",
        "Galatians": "Galatians.csv",
        "Ephesians": "Ephesians.csv",
        "Philippians": "Philippians.csv",
        "Colossians": "Colossians.csv",
        "1 Thessalonians": "1 Thessalonians.csv",
        "2 Thessalonians": "2 Thessalonians.csv",
        "1 Timothy": "1 Timothy.csv",
        "2 Timothy": "2 Timothy.csv",
        "Titus": "Titus.csv",
        "Philemon": "Philemon.csv",
        "Hebrews": "Hebrews.csv",
        "James": "James.csv",
        "1 Peter": "1 Peter.csv",
        "2 Peter": "2 Peter.csv",
        "1 John": "1 John.csv",
        "2 John": "2 John.csv",
        "3 John": "3 John.csv",
        "Jude": "Jude.csv",
        "Revelation": "Revelation.csv"
    };

    function loadAndDisplayBook(bookName) {
        const filename = bookFiles[bookName];
        if (!filename) {
            bibleDisplay.textContent = "Book not found.";
            screen1.style.display = 'none';
            screen2.style.display = 'block';
            return;
        }

        fetch(filename)
            .then(response => response.text())
            .then(csvData => {
                const lines = csvData.split('\n').map(line => line.trim()).filter(line => line);
                bibleDisplay.innerHTML = ""; // Clear previous content
                lines.forEach(line => {
                    const verseElement = document.createElement('p');
                    verseElement.textContent = line;
                    bibleDisplay.appendChild(verseElement);
                });
                screen1.style.display = 'none';
                screen2.style.display = 'block';
            })
            .catch(error => {
                console.error('Error loading CSV:', error);
                bibleDisplay.textContent = `Error loading ${bookName}. Please check CSV file location.`;
                screen1.style.display = 'none';
                screen2.style.display = 'block';
            });
    }

    goButton.addEventListener('click', function() {
        const selectedBook = bibleDropdown.value;
        if (selectedBook) {
            loadAndDisplayBook(selectedBook);
        } else {
            alert('Please select a book.');
        }
    });

    backButton.addEventListener('click', function() {
        screen2.style.display = 'none';
        screen1.style.display = 'block';
        bibleDisplay.innerHTML = ""; // Clear the content when going back
    });

    // Populate the dropdown dynamically
    for (const bookName in bookFiles) {
        const option = document.createElement('option');
        option.value = bookName;
        option.textContent = bookName;
        bibleDropdown.appendChild(option);
    }
});