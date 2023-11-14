const groups = document.getElementsByClassName('group');

for (let group of groups) {
    group.addEventListener('click', () => {
        window.location.href = 'group.html';
    });
}