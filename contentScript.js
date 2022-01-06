const scriptURL = 'https://script.google.com/macros/s/AKfycbxfUeZZ1NlHP_zKI0OilNdmYdWlDSYv42k61wQnO0le3zzaTD4K_4cs5VtlaO33K41bEg/exec'
window.addEventListener('load', (event) => {
    fetch(scriptURL, {
            method: 'GET',
            mode: 'cors',
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            var division = document.createElement('div');
            division.id = "chromeDiv";
            division.innerHTML = "<marquee width=300px direction=up height=150px scrollamount=3 id=marqueeSpeed onmouseover=this.stop(); onmouseout=this.start();><table id=dataFromSheet></table></marquee>"
            document.body.appendChild(division)
            var tablebody = document.createElement('tbody');

            for (var i = 0; i < result.length; i++) {
                var row = document.createElement('tr');
                row.classList.add("policy")
                for (var j = 1; j < 2; j++) {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(result[i][j]);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                tablebody.appendChild(row);
            }
            var z = document.querySelector("#dataFromSheet");
            z.appendChild(tablebody);
        })
        .catch(error => console.log(error))
});

function stop() {
    console.log("stop")
}

function start() {
    console.log("start");
}