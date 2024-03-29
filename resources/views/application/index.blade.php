<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

  <title>Rifas Nordeste</title>
  <!-- Styles -->
  <link rel="stylesheet" href="{{ secure_asset('css/app.css') }}">
  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ secure_asset('images/logo/favicon.png') }}">
</head>

<body>
  <noscript>
    <strong>We're sorry but Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="app">
  </div>

  <!-- <script src="js/app.js"></script> -->
  <script src="{{ secure_asset(mix('js/app.js')) }}"></script>

</body>

</html>