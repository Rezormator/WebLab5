function swapLabelText() {
    const label1Text = document.querySelector('.label-1-text');
    const label2Text = document.querySelector('.label-2-text');
    const tempText = label1Text.innerHTML;
    label1Text.innerHTML = label2Text.innerHTML;
    label2Text.innerHTML = tempText;
}

function calculateRectangleArea() {
    const length = parseFloat(document.getElementById('length').textContent);
    const width = parseFloat(document.getElementById('width').textContent);
    const area = length * width;
    const resultElement = document.querySelector('.result-2');
    resultElement.textContent = 'Rectangle area: ' + area;
}

function findMinAndSave() {
    const values = Array.from(document.querySelectorAll('input[type="number"]')).map(input => parseFloat(input.value));
    const minValue = Math.min(...values);
    const minCount = values.filter(val => val === minValue).length;
    document.cookie = `minCount=${minCount}; path=/`;
    alert('Minimum value appears ' + minCount + ' times.');
}

function handleCookiesOnPageLoad() {
    const cookies = document.cookie.split('; ').find(row => row.startsWith('minCount='));
    if (cookies) {
        const minCount = cookies.split('=')[1];
        const userConfirm = confirm(`You previously had ${minCount} minimum values. Would you like to keep this data?`);

        if (userConfirm) {
            alert('Cookies exist. Please reload the page to see the form again.');
        } else {
            document.cookie = 'minCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            location.reload();
        }
    }
}

function toggleItalic() {
    const content = document.querySelector('.content');
    const checkbox = document.getElementById('italic-checkbox');

    if (checkbox.checked) {
        content.style.fontStyle = 'italic';
        localStorage.setItem('italic', 'true');
    } else {
        content.style.fontStyle = 'normal';
        localStorage.setItem('italic', 'false');
    }
}

function applySavedItalicStyle() {
    const content = document.querySelector('.content');
    const savedItalic = localStorage.getItem('italic');

    if (savedItalic === 'true') {
        content.style.fontStyle = 'italic';
        document.getElementById('italic-checkbox').checked = true;
    } else {
        content.style.fontStyle = 'normal';
        document.getElementById('italic-checkbox').checked = false;
    }
}

function handleKeyPress() {
    const checkbox = document.getElementById('italic-checkbox');
    toggleItalic();
}

window.addEventListener('load', function() {
    swapLabelText();
    calculateRectangleArea();
    handleCookiesOnPageLoad();
    applySavedItalicStyle();
});

document.addEventListener('keypress', handleKeyPress);
document.getElementById('italic-checkbox').addEventListener('change', toggleItalic);

function findMinValues() {
    findMinAndSave();
}
