<?php
error_reporting(0);

// Incluir la clase de base de datos
include_once("../q/classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$sql = "SELECT * FROM alumnos ORDER BY nombre ASC";

echo Database::get_json_rows($sql);

?>