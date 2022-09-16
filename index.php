<head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>أسئلة صوتية</title>
        <meta name='description' content=''>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/shoelace-css/1.0.0-beta16/shoelace.css'>
        <link rel='stylesheet' href='styles.css'>

    </head>
    <body>

<?php
$conn=mysqli_connect("localhost","root","","stage_database");
if(mysqli_connect_errno())
	{
		echo"erreur";
	}
$question=mysqli_query($conn,"select* from question");
?>
<form method='post' action='bye.php'>

<?php
$i=1;
?>
	<br></br><br></br><br></br><br></br>
	<div class='containe'>
        <label>رقم المريض</label>
<!--             <div class='input-single'>
 -->    <input id=idM name='idM' type=text name=idM>

<!--              </div> 
 --></div>
  		<br></br>
 		<br></br>
 		<br></br>
 		<br></br>
<?php
while($row=mysqli_fetch_array($question))
 	{
 		?>
	<br></br>
	<br></br>
	<div class='container'>
        <audio src='<?php echo $row['File'] ?>' controls>الرجاء تحديث المتصفح الخاص بك!</audio>       
            <div class='app'>
                <label>ضف إجابة</label>
            </div>
<!--                <div class='input-single'>
 -->                <input id='note-textarea<?=$i?>' name='data<?=$i?>.wav' >
                    <label>قم بإنشاء ملاحظة جديدة </label>
                    <br></br>
<!--                 </div>        
 -->                <button id='start-record-btn<?=$i?>' type='button' title='Start Recording'>
                 	  <a>
				      <span></span>
				     	ابدأ التسجيل
				      </a>
				    </button>
                	<button id='pause-record-btn<?=$i?>' type='button' title='Pause Recording'>
                	  <a>
				      <span></span>
				      وقف التسجيل
				      </a>
					</button>
                <p id='recording-instructions<?=$i?>'>ضغط على زر <strong>بدء التعرف</strong> وقم بتشغيل الميكروفون</p>


</div>
<?php       
// ;
$i=$i+1;
}

?>

 <div class='containr'>
 <button type='submit' name='envoyer form' title='resultat'>
  <a>
      <span></span>
      إرسال الإجابات
    </a>
 </button>
</div>
</form>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
    <script src='script.js'></script>
    </body>

