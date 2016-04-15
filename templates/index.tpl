<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1">
  <title> sliders </title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.rawgit.com/mblode/marx/master/css/marx.min.css" />
</head>

<body>

  <nav>
    <ul>
      {{#sliders}}
        <li><a href="./{{{path}}}">{{name}}</a></li>
      {{/sliders}}
    </ul>
  </nav>

</body>

</html>
