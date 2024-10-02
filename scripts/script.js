document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

function copyFunction() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("example of copying whith clicking to a button");

    // show that copied and remove
    alertTimeout("Copied Internal text on js", 1000)
}


function alertTimeout(mymsg, mymsecs) {
    var myelement = document.createElement("div");
    myelement.setAttribute("style", "background-color: green;color:white; width: 500px;height: 500px;position: absolute;top:0;bottom:0;left:0;right:0;margin:auto;border: 4px solid black;font-family:arial;font-size:35px;font-weight:bold;display: flex; align-items: center; justify-content: center; text-align: center; border-radius: 20px; z-index:10000");
    myelement.innerHTML = mymsg;
    setTimeout(function () {
        myelement.parentNode.removeChild(myelement);
    }, mymsecs);
    document.body.appendChild(myelement);
}

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    
    var array = []
    array.push(document.getElementById('test'));
    array.push(document.getElementById('test1'));
    array.push(document.getElementById('test2'));
    array.push(document.getElementById('test3'));

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right > 0
        );
    }

    function checkVisibility() {
        array.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
            else{
                element.classList.remove('visible');
            }
        });
    }

    // Check visibility on scroll and resize events
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    // Initial check
    checkVisibility();
});