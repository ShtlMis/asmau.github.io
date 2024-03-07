<?php
// database connection code
if(isset($_POST['txtName']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','db_songhai');

// get the post records

$txtName = $_POST['txtName'];
$txtEmail = $_POST['txtCompany'];
$txtPhone = $_POST['txtEmail'];
$txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO 'tbl_test' ('fldPhone', 'fldName', 'fldEmail', 'fldOrganization', 'fldMessage') VALUES ('0', '$txtName', '$txtEmail', '$txtCompany', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
}
else
{
	echo "Are you a genuine visitor?";
	
}
?>

