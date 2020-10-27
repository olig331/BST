let tree;
let jsontree;
const outputObj = (obj) => {
  let ele1 = document.createElement("pre")
  ele1.innerHTML = obj
  ele1.setAttribute("id", "object")
  let ele2 = ele1;
  ele2.innerHTML = obj
  ele2.setAttribute("id", "object")
  let toReplace = document.getElementById('object');
  let container = document.getElementById("object_container");
  if (container.hasChildNodes()) {
    container.replaceChild(ele2, toReplace);
  } else {
    container.appendChild(ele1);
  }
};
(() => {
  tree = new BinarySearchTree();
  let container = document.getElementById("object_container");
  jsontree = JSON.stringify(tree, null, 6);
  outputObj(syntaxHighlight(jsontree));
  console.log(tree);
})();



const addNode = () => {
  let val = document.getElementById("input").value;
  val = parseInt(val);
  tree.add(val);
  jsontree = JSON.stringify(tree, undefined, 4);
  outputObj(syntaxHighlight(jsontree));
  console.log(tree)
};

const removeNode = () => {
  let val = document.getElementById('input').value;
  val = parseInt(val);
  tree.removeFromTree(val);
  console.log(tree)
  jsontree = JSON.stringify(tree, undefined, 4)
  outputObj(syntaxHighlight(jsontree))
}

const findMax = () => {
  let result = tree.findMaxVal();
  const displayResult = document.getElementById('result_val')
  displayResult.innerHTML = result
}

const findMin = () => {
  let result = tree.findMinVal();
  const displayResult = document.getElementById('result_val')
  displayResult.innerHTML = result
}

const getMaxBtn = document
  .getElementById('find_max_btn')
  .addEventListener('click', findMax)

const getMinBtn = document
  .getElementById('find_min_btn')
  .addEventListener('click', findMin)

const add = document
  .getElementById("add_btn")
  .addEventListener("click", addNode);

const remove = document
  .getElementById('remove_btn')
  .addEventListener('click', removeNode);

function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"left":/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        if (/left/.test(match)) {
          cls = 'left'
        } else if (/right/.test(match)) {
          cls = 'right';
        } else {
          cls = 'key'
        }

      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}
