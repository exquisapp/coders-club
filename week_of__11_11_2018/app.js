const fs = require('fs');

// Import raw data
const raw = fs.readFileSync('raw.json', 'utf8', (err, data) => {
  if (err) return console.error(err);
  return data;
});

// Compare two string arrays
let commonTags = [], processRaw = JSON.parse(raw), allTags = processRaw.map(person => person.tags),
compareAr = (first, second) => {
  first.forEach(item => { 
    if (second.includes(item)) {
      if (!commonTags.includes(item)) {
        commonTags.push(item);
      }
    }
  });
}, tagsLength = allTags.length;

// Compare all arrays in the list
for (let i = 0; i < tagsLength; i++) {
  let start = allTags[i];
  for (j = i + 1; j < tagsLength; j++) {
    let next = allTags[j];
    compareAr(start, next);
  }
}

// Print out unique and common tags
console.log(commonTags);