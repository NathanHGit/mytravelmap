window.onload = function () {
    const visited = Array.prototype.slice.call(document.querySelectorAll(".visited"));
    const info = document.getElementById("info");

    for (let i = 0; i < visited.length; i++) {
        visited[i].addEventListener("mouseover", function () {
            info.classList.add("active");
            info.innerHTML = this.getAttribute("data-name");
            document.onmousemove = handleMouseMove;
        });

        visited[i].addEventListener("mouseout", function () {
            info.classList.remove("active");
            document.onmousemove = null;
        });
    }
    let path = document.getElementsByTagName("path");
}

function handleMouseMove(event) {
    let eventDoc, doc, body;

    event = event || window.event;

    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }

    info.style.left = event.pageX + 'px';
    info.style.top = event.pageY + 'px';
}