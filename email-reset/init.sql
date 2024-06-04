-- init.sql

CREATE DATABASE IF NOT EXISTS reset_email;
USE reset_email;

CREATE TABLE IF NOT EXISTS r_user_register (
    id_user_register INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    cod_reset VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
