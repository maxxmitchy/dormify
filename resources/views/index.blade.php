<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Dormify</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <style>
        html {
            scroll-behavior: smooth;
        }

        body {
            background: #fff !important;
            scroll-behavior: smooth;
        }

        a {
            text-decoration: none !important;
        }

        textarea:focus,
        textarea.form-control:focus,
        input.form-control:focus,
        input[type=text]:focus,
        input[type=password]:focus,
        input[type=email]:focus,
        input[type=number]:focus,
        [type=text].form-control:focus,
        [type=password].form-control:focus,
        [type=email].form-control:focus,
        [type=tel].form-control:focus,
        [contenteditable].form-control:focus {
            box-shadow: inset 0 -1px 0 #fff;
            border: 2px solid #e3342f;
        }
    </style>
    <!-- Styles -->
    <link rel="stylesheet" href="/css/app.css">
</head>

<body>
    <div id="index">

    </div>
    <script src="/js/app.js"></script>
</body>

</html>
