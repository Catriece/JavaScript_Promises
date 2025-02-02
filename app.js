/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

let pErr = document.getElementById("error");
let ul = document.getElementById("list");



getList().then((list) => {
  console.log(list);
  for (i = 0; i < list.length; i++) {
    let item = document.createElement("li");
    item.textContent = list[i];
    ul.appendChild(item);
  }
}).catch((err) => {
  console.log(err)
let errMsg = document.createTextNode(err.message);
pErr.appendChild(errMsg);
});



// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
