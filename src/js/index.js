var inputGroups = [...document.querySelectorAll(".input-group")];

inputGroups.forEach(inputGroup => {
  var label = inputGroup.children[0];
  var input = inputGroup.children[1];
  input.addEventListener("focus", function(){
    onSelect(label);
  });
  input.addEventListener("blur", function(){
    onBlur(label, input);
  })
});

function onSelect(label) {
  label.classList.add('selected');
}

function onBlur(label, input) {
  if (!input.value) {
    label.classList.remove('selected'); 
  }
}

console.log("1123");
