<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $email = $_POST['email'];

        if (!empty($email)) {
            echo 'Success';
        } else {
            echo 'Error';
        }
    } else {
        echo 'Not allow';
    }
?>
