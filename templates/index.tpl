<html lang="zh-cmn-Hans">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1">
    <title> sliders list </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.combinatronics.com/mblode/marx/master/css/marx.min.css" />
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
