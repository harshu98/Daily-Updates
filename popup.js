    const scriptURL = 'https://script.google.com/macros/s/AKfycbxfUeZZ1NlHP_zKI0OilNdmYdWlDSYv42k61wQnO0le3zzaTD4K_4cs5VtlaO33K41bEg/exec'
    fetch(scriptURL, {
            method: 'GET',
        }).then(response => response.json())
        .then(result => {
            createTable(result);
            console.log(result);
        })
        .catch(error => console.log(error))

    function createTable(result) {
        var myTab = document.getElementById("dataFromSheet");;
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
        myTab.appendChild(tablebody);
        document.querySelector(
            "#loader").style.display = "none";
    }
    let marqueeSpeed = document.querySelector("#marqueeSpeed");
    marqueeSpeed.addEventListener("mouseover", function() {
        marqueeSpeed.stop();
    });
    marqueeSpeed.addEventListener("mouseout", function() {
        marqueeSpeed.start();
    });