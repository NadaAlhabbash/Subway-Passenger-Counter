let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let entries = []
const MAX_ENTRIES = 10

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // Add new entry to the beginning of the array
    entries.unshift(count + " - ")
    
    // Keep only the last 5 entries
    if (entries.length > MAX_ENTRIES) {
        entries.pop()
    }
    
    // Update the display with all entries
    saveEl.innerHTML = "Previous entries: <br>" + entries.join("<br>")
    
    // Reset counter
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")
