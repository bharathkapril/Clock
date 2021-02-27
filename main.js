 var inter = setInterval(showTime, 1000);
    function start() 
        {
           inter = setInterval(showTime);
        }
    function stop() 
        {
            clearInterval(inter);
        }
        function showTime() {
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            var time = h + ":" + m +":" + s;
            document.getElementById("time").innerHTML = time;
            }
        function showYear(){
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth();
            var year = d.getFullYear();
            var mon = month + 1;
            day = (day < 10) ? "0" + day : day;
            mon = (mon < 10) ? "0" + mon : mon;
            var de = day + "/" + mon + "/" + year;
            document.getElementById("date").innerHTML = de;
        }
        
        showTime();
        showYear();