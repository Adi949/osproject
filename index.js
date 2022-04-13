function myfun() {
  var referenceString = [],
    pageFaults = 0,
    m,
    n,
    s,
    pages,
    frames
  // push();
  var frames = document.getElementById('frames').value
  // console.log(frames);
  var temp = [frames]
  for (let m = 0; m < frames; m++) {
    temp[m] = -1
  }

  for (let m = 0; m < myarr.length; m++) {
    var h1 = document.getElementById('tableHead')
    h1.insertAdjacentHTML('beforeend', '<th> </th>')
    s = 0
    for (let n = 0; n < frames; n++) {
      if (myarr[m] == temp[n]) {
        s++
        pageFaults--
      }
    }
    pageFaults++
    if (pageFaults <= frames && s == 0) {
      temp[m] = myarr[m]
    } else if (s == 0) {
      var a = (pageFaults - 1) % frames
      temp[a] = myarr[m]
    }
    console.log('\n')
    // "</br>"
    // var table= document.createElement(table),
    // row=table.insertRow();

    var tr = document.getElementById('tablebody')
    tr.insertAdjacentHTML('beforeend', '<tr id="tr' + m + '"></tr>')
    for (let n = 0; n < frames; n++) {
     
      var d1 = document.getElementById('tr'+m)
      d1.insertAdjacentHTML('beforeend', '<td>' + temp[n] + '</td>')
      //   document.getElementById('demo').html(temp[n])
      //
    }
    // console.log('\nTotal page faults:', pageFaults)
  }
  document.getElementById('fault').innerHTML =
    'Total entered values :' + myarr.length
  var missR = (pageFaults / myarr.length) * 100
  console.log(missR)
  document.getElementById('fault ratio').innerHTML =
    ' Fault ratio: ' + pageFaults + '/' + myarr.length + ': ' + missR + '%'
  var hitR = 100 - missR
  document.getElementById('hit ratio').innerHTML =
    'Hit ratio: ' +
    (myarr.length - pageFaults) +
    '/' +
    myarr.length +
    ': ' +
    hitR +
    '%'
}
var myarr = []
function push() {


  var inputtext = document.getElementById('reference_string').value
  myarr.push(inputtext)
  var pval = ''
  for (let i = 0; i < myarr.length; i++) {
    pval = pval + myarr[i] + ' ,'
  }
  document.getElementById('demo').innerHTML = pval
  document.getElementById('reference_string').value = ' '
}

function Clear() {
  myarr = []
  document.getElementById('demo').innerHTML = '  '
  document.getElementById('fault').innerHTML = '  '
  document.getElementById('fault ratio').innerHTML = '  '
  document.getElementById('hit ratio').innerHTML = '  '
  document.getElementById('tableHead').innerHTML = '  '
  document.getElementById('tablebody').innerHTML = '  '
  document.getElementById('frames').innerHTML = '  '

}
