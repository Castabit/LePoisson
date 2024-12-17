const numberList = document.getElementById('number-list');

for (let i = 1; i <= 10; i++)
{
    const listItem = document.createElement('li');
    listItem.textContent = i;
    numberList.appendChild(listItem);
}