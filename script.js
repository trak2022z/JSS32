'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {


function executor(resolve) {
resolve('Woohoo!');
}
function processStr(val) {
// mellow out that message a bit
return new Promise(function(resolve) {
resolve(val.toLowerCase().replace('!', ''));
});
}
let myPromise = new Promise(executor);
let thenPromise = myPromise.then(processStr);
console.log(thenPromise);

      
    }

 
})();