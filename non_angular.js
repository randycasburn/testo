window.addEventListener('DOMContentLoaded', function () {
  let el = document.querySelector('#shapeShifter');
  if (el) {
    el.addEventListener('click', function () {
      window.dispatchEvent(new CustomEvent('shapeShifting', newShapes));
    });
  }
});

var newShapes = {
  detail: [
    {
      "shape": "This",
      "color": "Is",
      "area": 5,
      "label": "NEW"
    }
  ]
};

window.addEventListener('itemizing', function (e) {
  let el = document.querySelector('#itemizer');
  if (el) {
    let headers = Object.keys(e.detail);
    let innerHTML = '<table class="table"><thead><th>Property</th><th>Value</th></thead>';
    for(let i = 0; i < headers.length; i++){
      innerHTML += '<tr><td>'+headers[i]+'</td><td>'+e.detail[headers[i]]+'</td></tr>';
    }
    innerHTML += '</table>';
    el.innerHTML = innerHTML;
  }
});
  
