/***
 * 存放验证方法
 */

const toThousands = (num) => {
  let result = '', counter = 0;
  num = (num || 0).toFixed(2).toString();
  if(num.lastIndexOf('.')) {  //提取小数点前后的数字
    result = num.slice(num.lastIndexOf('.'));
    num = num.slice(0,num.lastIndexOf('.'));  
  } 
  for (let i = num.length - 1; i >= 0; i--) { //遍历每个下标，能整除3且不等于0的时候用','分割
    counter ++;
    result = num.charAt(i) + result;
    if (!(counter % 3) && i != 0) {
      result = ',' + result;
    }
  }
  return result;
}

const toSecretNum = (num) => {
  let result = '', counter = 0;
  num = (num || 0).toString();
  for (let i = num.length - 1; i >= 0; i--) {
    counter ++;
    result = num.charAt(i) + result;
    if((i != num.length - 1) && (i != num.length - 2)) {
      result = result.replace(num.charAt(i),'*')
    }
    if (!(counter % 4) && i != 0) {
      result = ' ' + result;
    }
    
  }
  return result;
}