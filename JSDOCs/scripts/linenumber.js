/*global document */

/*
Adds line numbers and highlights selected lines in a code block with 'prettyprint source linenums' class.
Includes functionality for setting line IDs and applying 'selected' class based on URL hash.

Key Variables: 
- source: Collection of elements with 'prettyprint source linenums' class.
- lines, totalLines: List and count of 'li' elements within the source.
- lineNumber, lineId: Track and assign IDs to each line.
- anchorHash: Hash from URL used to highlight a specific line.
*/

(() => {
    const source = document.getElementsByClassName('prettyprint source linenums');
    let i = 0;
    let lineNumber = 0;
    let lineId;
    let lines;
    let totalLines;
    let anchorHash;

    if (source && source[0]) {
        anchorHash = document.location.hash.substring(1);
        lines = source[0].getElementsByTagName('li');
        totalLines = lines.length;

        for (; i < totalLines; i++) {
            lineNumber++;
            lineId = `line${lineNumber}`;
            lines[i].id = lineId;
            if (lineId === anchorHash) {
                lines[i].className += ' selected';
            }
        }
    }
})();
