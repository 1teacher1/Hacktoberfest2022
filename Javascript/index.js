<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Calendar
        
    </title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="light">
    <h2>Calendar</h2>

    <div class="calendar">
        <div class="calendar-header">
            <span class="month-picker" id="month-picker">February</span>
            <div class="year-picker">
                <span class="year-change" id="prev-year">
                    <pre></pre>
                </span>
                <span id="year">2021</span>
                <span class="year-change" id="next-year">
                    <pre>></pre>
                </span>
            </div>
        </div>
        <div class="calendar-body">
            <div class="calendar-week-day">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div class="calendar-days"></div>
        </div>
        <div class="calendar-footer">
            <div class="toggle">
                <span>Dark Mode</span>
                <div class="dark-mode-switch">
                    <div class="dark-mode-switch-ident"></div>
                </div>
            </div>
        </div>
        <div class="month-list"></div>
    </div>
    <div class="b-example-divider"></div>



      <div class="footer">
        <div id="button"></div>
      <div id="container">
      <div id="cont">
      <div class="footer_center">
             <h4 color="white"><a id="a"href="http://anshulsoni.netlify.app">Made by Anshul Soni</a></h4>
      </div>
      </div>
      </div>
      </div>
    <script src="script.js"></script>
</body>

</html>
