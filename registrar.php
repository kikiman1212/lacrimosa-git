<?php
//isset es una validacion 
$ususario = isset($_POST['txt_usuario']) ? $_POST['txt_usuario'] : '';//validacion con si y else en linea
$nombre = isset($_POST['txt_nombre']) ? $_POST['txt_nombre'] : '';
$edad = isset($_POST['int_edad']) ? $_POST['int_edad'] : '';

//minuto 13 hacemos la base de datos de mysql

try {
    $conexion = new PDO('mysql:host=localhost;dbname=datos_usuarios','root', '');
 /*    echo "Conexión establecida."; */
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   /*  $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING); */

    $pdo = $conexion->prepare('INSERT INTO usuarios(usuario, nombre, edad) VALUES (?,?,?)');
    $pdo->bindParam(1, $ususario);
    $pdo->bindParam(2, $nombre);
    $pdo->bindParam(3, $edad);
    $pdo->execute();

   /*  echo json_encode('true'); */



}catch (PDOException $error) {
    echo "Error de conexión";
  

}



?>
