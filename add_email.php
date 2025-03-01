<?php
// Connect to the SQLite database
$db = new SQLite3('emails.db');

// Get email from the form input
$email = $_POST['email'];

// Basic validation to check if email is not empty and valid
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Prepare SQL query to insert email into the database
    $query = $db->prepare('INSERT INTO mailing_list (email) VALUES (:email)');
    $query->bindValue(':email', $email, SQLITE3_TEXT);
    
    // Execute the query and check for success
    try {
        $query->execute();
        echo "Email successfully added!";
    } catch (Exception $e) {
        // Handle the error, e.g., if the email is already in the database
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Please enter a valid email address.";
}
?>
