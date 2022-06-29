//sap xep array theo do dai phan tu
function sort(arr) {
    for(let i = 0; i< arr.length -1;i++) {
        for (let j = i + 1;j< arr.length;j++) {
            if( arr[i].length > arr[j].length) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

//lay ra do dai phan tu xuat hien nhieu nhat
function getCheckPoint(arr) {
    var check_point = 1;
    var maxCount = 0;
    var count = 1;

    for(let i = 0; i< arr.length-1;i++) {
        if(arr[i+1].length == arr[i].length) {
            count ++;
        }
        if(arr[i+1].length != arr[i].length) {
            if(maxCount < count) {
                check_point = arr[i].length;
                maxCount = count
            }
            count = 1;
        }
    }
    return check_point;
}

//tra ve mang can tim
function show(arr,check) {
  var array=[];
  for(let i = 0; i< arr.length;i++) {
    if(arr[i].length == check ) {
      array.push(arr[i])
    }
  }
  return array;
}

function All(arr) {
  sort(arr);
  var check = getCheckPoint(arr);
  return show(arr,check);
}

const MathEx2 = {
    All,
}

module.exports = MathEx2