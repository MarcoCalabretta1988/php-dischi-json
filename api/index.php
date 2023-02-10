<?php

//Rescue file to read
$source_url = __DIR__ . '../../data.json';

// Read file content
$json_data = file_get_contents($source_url);


$disks = json_decode($json_data, true);

//rescue select value
$genre = $_GET['genre'] ?? '';

if ($genre) {
    $filter_disk = [];
    foreach ($disks as $disk) {
        if ($disk['genre'] === $genre) {
            $filter_disk[] = $disk;
        }
    }

    $disks = $filter_disk;
}


//Say to server that I use json lenguage
header('Content-Type: application/json');

//Convert to Json and send disks
echo json_encode($disks);
