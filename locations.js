
const jsonObj = JSON.stringify(json);
const obj = JSON.parse(jsonObj);

console.log(obj) 

const titleArr = [];

const { data } = obj;
for (const [key, val] of Object.entries(data)) {
    for (const [k, v] of Object.entries(val)) {
        if (!k.startsWith('_D')) continue;
        // console.log('v', v.map(m => m.title)) 
        titleArr.push( ...v.map(m => m.title) );
    }
}

console.log(titleArr)

const counts = {};

for (const num of titleArr) {
    counts[num] = (counts[num] || 0) + 1;
}

console.log(counts)

const $table = document.querySelector('.table');
const $sampleCell = $table.querySelector('.cell');

for ([k,v] of Object.entries(counts)) {
    const $clone = $sampleCell.cloneNode(true);
    $clone.querySelector('.title').textContent = k;
    $clone.querySelector('.num').textContent = v;
    $clone.classList.remove('hide');
    $table.append($clone);
}
