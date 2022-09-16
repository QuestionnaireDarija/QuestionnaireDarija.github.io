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
<!-- <table> -->
 <?php 

    // foreach ($_POST as $key => $value) {
    //     echo "<tr>";
    //     echo "<td>";
    //     echo $key;
    //     echo "</td>";
    //     echo "<td>";

    //     echo $value;
    //     echo "</td>";

    //     echo "</tr>";
    // }
?> 
<!-- </table> --> 
<?php 
	   $servername = "localhost";  
       $username = "root";  
       $password = "";  
       $database = "stage_database";
       $conn = mysqli_connect ($servername , $username , $password , $database);  
       if (!$conn) {
              die("Échec de la connexion : " . mysqli_connect_error());
       }
       
       $sql = mysqli_select_db ($conn,$database) or die("unable to connect to database"); 
       mysqli_query($conn,"SET NAMES 'utf8'");
       mysqli_query($conn,'SET CHARACTER SET utf8');
       function rec_post($i) {
	   	    $rep = $_POST['data'.$i.'_wav'];
	   	    $rep2 = 'data'.$i.'.wav';
	   	    return array($rep,$rep2);
       }


        function get_id_quest($file,$conn) {
           $sql = mysqli_query($conn, "SELECT idQ from question where File = '$file'");
            while($row=mysqli_fetch_array($sql)){   
                            $idQ = $row['idQ'];

                         };

            return $idQ;
       }

        function get_id_rep($text,$conn) {
            $sql = mysqli_query($conn,"SELECT idR from reponse where reponse='$text'");
            while($row=mysqli_fetch_array($sql)){
                            $idR = (string)$row['idR'];
                            // echo gettype($idR);
                      };

            return $idR;
       }

	   	function insert_form($id1,$id2,$id3,$conn) {
            $sql = mysqli_query($conn,"INSERT INTO form (idM, idQ, idR) VALUES ($id1,$id2,$id3)");
	   	    return $sql;
	   }

       for ($y=1 ; $y<5 ; $y++){
       	$res = rec_post($y);
       	$idM=$_POST['idM'];
       	$idQ=get_id_quest($res[1],$conn);
         // echo "idQ is ".$idQ."=>";
       	$idR=get_id_rep($res[0],$conn);
        // echo "idR is ".$idR."<br>";
       	insert_form($idM,$idQ,$idR,$conn);
   	  }
     mysqli_close($conn);
?>


<div class="contai">
  <h2 class="tit">
    <span class="title-word title-word-1">شكرا</span>
    <span class="title-word title-word-2">على</span>
    <span class="title-word title-word-3">إجابتك</span>
    <span class="title-word title-word-4">على</span>
    <span class="title-word title-word-5">الأسئلة</span>
  </h2>
</div>

 </body>


